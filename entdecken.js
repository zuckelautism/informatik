(() => {
  const oldModel = new URLSearchParams(location.search).get("laptop");
  if (oldModel || location.hash === "#technik") {
    location.replace("laptops.html" + (oldModel ? "?laptop=" + encodeURIComponent(oldModel) : "") + "#technik");
    return;
  }
  const form = document.getElementById("campusSearch");
  const input = document.getElementById("campusSearchInput");
  const results = document.getElementById("campusSearchResults");
  const recent = document.getElementById("campusRecentSearches");
  const clear = document.getElementById("campusClearSearches");
  const status = document.getElementById("campusDiscoveryStatus");
  const suggestions = document.getElementById("campusSuggestions");
  const tracking = document.getElementById("campusTrackSearches");
  const place = document.getElementById("campusPreferredCity");
  const field = document.getElementById("campusPreferredField");
  const terms = value => String(value ?? "").toLowerCase().replace(/ß/g, "ss")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/[a-z0-9]{2,}/g) ?? [];
  const stopWords = new Set(["in","im","fur","und","am","an","der","die","das","dem","den","von","bei","mit","nach","zu"]);
  const aliases = new Map([["koeln","koln"],["muenchen","munchen"],["tuebingen","tubingen"],["goettingen","gottingen"]]);
  const queryTerms = query => terms(query).map(word => /^(wohnheim|studierendenwohn|studentenwohn)/.test(word) ? "wohnen" : aliases.get(word) ?? word).filter(word => !stopWords.has(word));
  const matchesWord = (words, word) => words.has(word) || (word.length >= 4 && [...words].some(candidate => candidate.startsWith(word)));
  const interests = {
    "informatik": "informatik programmierung software", "daten-ki": "daten data ki statistik",
    "wirtschaft": "wirtschaft bwl finanzen", "technik": "technik laptops tablets handys smart",
    "wohnen": "wohnen wohnung wohnheim miete", "mobilitaet": "pendeln mobilitat fahrschulen autos",
    "freizeit": "aktivitäten reisen freizeit kultur sport", "sparen": "vorteile rabatt sparen"
  };
  const today = campusBerlinDate();
  const known = [...campusEntries, ...deals.map(laptop => ({
    category: "Laptops", title: laptop.brand + " " + laptop.name, note: [laptop.model, laptop.cpu, laptop.ram + " GB RAM"].join(" · "), checked: laptop.checked, source: laptop.history?.at(-1)?.source,
    link: "laptops.html?laptop=" + encodeURIComponent(laptop.id) + "#technik"
  }))].filter(item => item.title && (item.link?.startsWith("laptops.html?laptop=") || safeCampusLink(item.link) !== "#")
    && !campusOfferExpired(item, today));
  const index = known.map(item => ({
    item, title: new Set(terms(item.title)), words: new Set(queryTerms([item.title, item.city, item.category, item.topic, item.note].join(" ")))
  }));
  let uid = "", history = [], profile = {}, settings = {}, revision = 0;
  const storageKey = () => "campus-search-history-v1:" + uid;
  const settingsKey = () => "campus-discovery-settings-v1:" + uid;
  function readHistory() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey()));
      const queries = Array.isArray(saved) ? saved : saved?.queries;
      return Array.isArray(queries) ? queries.filter(value => typeof value === "string").slice(0, 12) : [];
    } catch { return []; }
  }
  function saveSettings() {
    try { localStorage.setItem(settingsKey(), JSON.stringify(settings)); } catch {}
  }

  function renderCards(container, matches) {
    container.replaceChildren(...matches.map(({item, reasons}) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.link.startsWith("laptops.html?laptop=") ? item.link : safeCampusLink(item.link);
      link.textContent = item.title;
      const context = document.createElement("span");
      context.textContent = [item.category, item.city === "Überregional" ? "" : item.city].filter(Boolean).join(" · ");
      li.append(context, link);
      const sourceUrl = safeCampusLink(item.source ?? item.link);
      const source = document.createElement("span");
      source.className = "discovery-source";
      source.textContent = [
        sourceUrl !== "#" ? new URL(sourceUrl).hostname : "",
        item.checked ? "Preisstand " + item.checked : "",
        item.until ? "laut Anbieter bis " + item.until.split("-").reverse().join(".") : ""
      ].filter(Boolean).join(" · ");
      if (source.textContent) li.append(source);
      if (reasons?.length) {
        const why = document.createElement("span");
        why.textContent = "Warum hier: " + reasons.join(" · ");
        li.append(why);
      }
      return li;
    }));
  }

  function renderPersonal() {
    const queries = history.map(queryTerms).filter(query => query.length);
    const city = settings.city || profile.city;
    const profileSignals = new Set((Array.isArray(profile.interests) ? profile.interests : []).flatMap(id => terms(interests[id])));
    const ranked = index.map(entry => {
      const {item, title, words} = entry;
      const reasons = [];
      const searchMatches = [...new Set(queries.filter(query => query.every(word => matchesWord(words, word))).flat())];
      let score = searchMatches.reduce((total, word) => total + (title.has(word) ? 7 : 3), 0);
      if (searchMatches.length) reasons.push("Suchverlauf (" + searchMatches.slice(0, 3).join(", ") + ")");
      const profileMatches = [...profileSignals].filter(word => matchesWord(words, word));
      score += profileMatches.length * 2;
      if (profileMatches.length) reasons.push("Profilinteressen");
      if (city && item.city === city) { score += 6; reasons.push(city); }
      const fields = {"Informatik":"technik","Wirtschaftsinformatik":"technik","Data Science":"technik","Maschinenbau":"technik","Betriebswirtschaftslehre":"gesellschaft","Psychologie":"gesundheit","Humanmedizin":"gesundheit"};
      if (settings.field && (item.field || fields[item.topic]) === settings.field) { score += 10; reasons.push("gewähltes Studienfeld"); }
      if (profile.path === "studium" && ["Studium","Duales Studium","Studienstart"].includes(item.category)) { score += 2; reasons.push("Studium"); }
      if (profile.path === "ausbildung" && item.category === "Ausbildung") { score += 4; reasons.push("Ausbildung"); }
      return {...entry, score, reasons};
    }).filter(entry => entry.score > 0).sort((a,b) => b.score - a.score);
    const shortlist = [];
    const seen = new Set();
    for (const entry of ranked) {
      const key = entry.item.title + "|" + entry.item.city;
      if (seen.has(key)) continue;
      seen.add(key);
      shortlist.push(entry);
      if (shortlist.length === 6) break;
    }
    renderCards(suggestions, shortlist);
    document.getElementById("campusSuggestionHint").hidden = Boolean(shortlist.length);
  }

  function renderHistory() {
    recent.replaceChildren(...history.map(query => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "btn ghost";
      button.textContent = query;
      button.onclick = () => { input.value = query; form.requestSubmit(); input.focus(); };
      return button;
    }));
    clear.hidden = !history.length;
    tracking.checked = settings.track !== false;
    place.value = settings.city || "";
    field.value = settings.field || "";
  }

  function search(query) {
    const words = queryTerms(query);
    const matches = words.length ? index.filter(entry => words.every(word =>
      matchesWord(entry.words, word)
    )).sort((a,b) => words.filter(word => b.title.has(word)).length - words.filter(word => a.title.has(word)).length) : [];
    renderCards(results, matches.slice(0, 15));
    status.textContent = matches.length ? matches.length + " Treffer · bis zu 15 angezeigt" : "Keine passenden Einträge gefunden. Versuche ein einzelnes Stichwort oder einen anderen Ort.";
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    const query = input.value.trim().slice(0, 100);
    if (!uid) return;
    if (settings.track !== false && queryTerms(query).length) {
      history = [query, ...history.filter(previous => previous.toLowerCase() !== query.toLowerCase())].slice(0, 12);
      try { localStorage.setItem(storageKey(), JSON.stringify({queries: history})); } catch {}
    }
    search(query);
    renderHistory();
    renderPersonal();
  });

  function clearHistory() {
    if (!uid) return;
    try { localStorage.removeItem(storageKey()); } catch {}
    history = [];
    input.value = "";
    status.textContent = "";
    results.replaceChildren();
    renderHistory();
    renderPersonal();
  }
  clear.onclick = () => { clearHistory(); input.focus(); };
  tracking.onchange = () => {
    if (!uid) return;
    settings.track = tracking.checked;
    saveSettings();
    if (!tracking.checked) clearHistory();
  };
  const applyPreferences = () => {
    if (!uid) return;
    settings.city = place.value;
    settings.field = field.value;
    saveSettings();
    renderPersonal();
  };
  place.onchange = field.onchange = applyPreferences;

  window.addEventListener("campus-account", async event => {
    const account = event.detail;
    const current = ++revision;
    uid = account?.uid ?? "";
    history = [];
    profile = {};
    settings = uid ? readCampusStorage(settingsKey()) ?? {} : {};
    if (uid && settings.track !== false) history = readHistory();
    input.value = "";
    status.textContent = "";
    results.replaceChildren();
    renderHistory();
    renderPersonal();
    document.getElementById("campusProfileNotice").hidden = true;
    if (!account) return;
    try {
      const firebase = await import("https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js");
      const snapshot = await firebase.getDoc(firebase.doc(firebase.getFirestore(account.app), "profiles", account.uid));
      if (current !== revision) return;
      profile = snapshot.exists() ? snapshot.data() : {};
      renderPersonal();
    } catch {
      if (current === revision) document.getElementById("campusProfileNotice").hidden = false;
    }
  });

})();
