(() => {
  const form = document.getElementById("campusSearch");
  const input = document.getElementById("campusSearchInput");
  const results = document.getElementById("campusSearchResults");
  const recent = document.getElementById("campusRecentSearches");
  const clear = document.getElementById("campusClearSearches");
  const status = document.getElementById("campusDiscoveryStatus");
  const suggestions = document.getElementById("campusSuggestions");
  const terms = value => String(value ?? "").toLowerCase().replace(/ß/g, "ss")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/[a-z0-9]{2,}/g) ?? [];
  const interests = {
    "informatik": "informatik programmierung software", "daten-ki": "daten data ki statistik",
    "wirtschaft": "wirtschaft bwl finanzen", "technik": "technik laptops tablets handys smart",
    "wohnen": "wohnen wohnung wohnheim miete", "mobilitaet": "pendeln mobilitat fahrschulen autos",
    "freizeit": "aktivitäten reisen freizeit kultur sport", "sparen": "vorteile rabatt sparen"
  };
  const known = [...campusEntries, ...deals.map(laptop => ({
    category: "Laptops", title: laptop.brand + " " + laptop.name, note: [laptop.model, laptop.cpu, laptop.ram + " GB RAM"].join(" · "),
    link: "?laptop=" + encodeURIComponent(laptop.model) + "#technik"
  }))].filter(item => item.title && (item.link?.startsWith("?laptop=") || safeCampusLink(item.link) !== "#")
    && !(item.expires && new Date(item.expires + "T23:59:59") < new Date()));
  const index = known.map(item => ({
    item, title: new Set(terms(item.title)), words: new Set(terms([item.title, item.city, item.category, item.topic, item.note].join(" ")))
  }));
  let uid = "", history = [], profile = {}, revision = 0;
  const storageKey = () => "campus-search-history-v1:" + uid;

  function renderCards(container, matches) {
    container.replaceChildren(...matches.map(({item}) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.link.startsWith("?laptop=") ? item.link : safeCampusLink(item.link);
      link.textContent = item.title;
      const context = document.createElement("span");
      context.textContent = [item.category, item.city === "Überregional" ? "" : item.city].filter(Boolean).join(" · ");
      li.append(context, link);
      return li;
    }));
  }

  function renderPersonal() {
    const searchSignals = new Set(history.flatMap(terms));
    const profileSignals = new Set((Array.isArray(profile.interests) ? profile.interests : []).flatMap(id => terms(interests[id])));
    const ranked = index.map(entry => {
      const {item, title, words} = entry;
      let score = [...searchSignals].reduce((total, word) => total + (title.has(word) ? 7 : words.has(word) ? 3 : 0), 0);
      score += [...profileSignals].filter(word => words.has(word)).length * 2;
      if (profile.city && item.city === profile.city) score += 6;
      if (profile.path === "studium" && ["Studium","Duales Studium","Studienstart"].includes(item.category)) score += 2;
      if (profile.path === "ausbildung" && item.category === "Ausbildung") score += 4;
      return {...entry, score};
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
      button.onclick = () => { input.value = query; form.requestSubmit(); };
      return button;
    }));
    clear.hidden = !history.length;
  }

  function search(query) {
    const words = terms(query).filter(word => !["in","im","fur","und","am","an","der","die","das"].includes(word));
    const matches = words.length ? index.filter(entry => words.every(word =>
      entry.words.has(word) || [...entry.words].some(candidate => candidate.startsWith(word))
    )).sort((a,b) => words.filter(word => b.title.has(word)).length - words.filter(word => a.title.has(word)).length) : [];
    renderCards(results, matches.slice(0, 15));
    status.textContent = matches.length ? matches.length + " Treffer · bis zu 15 angezeigt" : "Keine passenden Einträge gefunden.";
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    const query = input.value.trim().slice(0, 100);
    if (!uid || !terms(query).length) return;
    history = [query, ...history.filter(previous => previous.toLowerCase() !== query.toLowerCase())].slice(0, 12);
    try { localStorage.setItem(storageKey(), JSON.stringify(history)); } catch {}
    search(query);
    renderHistory();
    renderPersonal();
  });

  clear.onclick = () => {
    if (!uid) return;
    try { localStorage.removeItem(storageKey()); } catch {}
    history = [];
    input.value = "";
    status.textContent = "";
    results.replaceChildren();
    renderHistory();
    renderPersonal();
  };

  window.addEventListener("campus-account", async event => {
    const account = event.detail;
    const current = ++revision;
    uid = account?.uid ?? "";
    history = [];
    profile = {};
    if (uid) {
      const saved = readCampusStorage(storageKey());
      if (Array.isArray(saved)) history = saved.filter(value => typeof value === "string").slice(0, 12);
    }
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

  const laptop = new URLSearchParams(location.search).get("laptop");
  if (laptop && deals.some(item => item.model === laptop)) {
    const laptopInput = document.getElementById("query");
    laptopInput.value = laptop;
    laptopInput.dispatchEvent(new Event("input", {bubbles:true}));
  }
})();
