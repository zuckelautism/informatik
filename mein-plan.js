(() => {
  const form = document.getElementById("planForm");
  const steps = [...form.querySelectorAll("fieldset")];
  const result = document.getElementById("planResult");
  const timeline = document.getElementById("planTimeline");
  const nextAction = document.getElementById("planNextAction");
  const nextDetail = document.getElementById("planNextDetail");
  const nextLink = document.getElementById("planNextLink");
  const indicator = document.getElementById("planProgress");
  const previous = document.getElementById("planBack");
  const forward = document.getElementById("planForward");
  const edit = document.getElementById("planEdit");
  const reset = document.getElementById("planReset");
  const hint = document.getElementById("planHint");
  const locale = new Intl.DateTimeFormat("de-DE", {dateStyle:"medium"});
  const advice = "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt";
  const training = "ausbildung.html";
  const school = "studienplaetze.html#orientierung";
  const interestOptions = {
    offen: ["deine Interessen", "studienplaetze.html#orientierung", "Teste mit Check-U, welche Aufgaben zu dir passen.", advice],
    texte: ["Sprache, Kultur und Menschen", "studienplaetze.html?bereich=geisteswissenschaften#orientierung", "Lies einen kurzen Text und erkläre einer Person, was du daran spannend findest.", "studienplaetze.html?bereich=geisteswissenschaften#orientierung"],
    technik: ["Technik und Informatik", "studienplaetze.html?bereich=technik#orientierung", "Probiere ein kleines Programmier-, Reparatur- oder Bauprojekt aus.", school],
    menschen: ["Gesundheit und Soziales", "studienplaetze.html?bereich=gesellschaft#orientierung", "Frag bei einer sozialen Einrichtung nach einem Einblick oder Praktikum.", training],
    natur: ["Natur und Umwelt", "studienplaetze.html?bereich=natur#orientierung", "Vergleiche zwei Aufgaben, etwa Laborarbeit und Arbeit im Freien.", school],
    organisation: ["Wirtschaft und Organisation", "studienplaetze.html?bereich=gesellschaft#orientierung", "Plane ein kleines Projekt mit Aufgaben, Kosten und Zeitbedarf.", school]
  };
  const routes = {
    offen: ["Orientierung mit zwei Optionen", "Vergleiche eine Ausbildung und ein Studium", "Vergleiche bei beiden Wegen Inhalte, Zugang, Fristen und Alltag. Wähle danach einen Favoriten und eine Alternative.", advice, "Bewirb dich auf deinen Favoriten und halte die Alternative bereit.", "Wenn du noch unsicher bist, vereinbare Berufsberatung oder ein Praktikum und lege einen neuen Entscheidungstermin fest.", advice],
    ausbildung: ["Ausbildung", "Finde zwei passende Ausbildungsstellen", "Notiere Betrieb, Berufsschule, Bewerbungsfrist und Starttermin. Achte auf duale und schulische Angebote.", training, "Schicke Bewerbungen mit Lebenslauf und den verlangten Zeugnissen ab.", "Wenn keine Zusage kommt, erweitere den Suchradius oder frage nach Einstiegsqualifizierung und weiteren Startterminen.", training],
    studium: ["Studium", "Vergleiche zwei Studienangebote", "Prüfe Zugang, Module, Bewerbungsfrist und mögliche Kosten. Nimm ein Schnupperangebot wahr.", school, "Reiche deine Bewerbung oder Einschreibung über das offizielle Hochschulportal ein.", "Wenn es nicht klappt, prüfe alternative Hochschulen, ein anderes Startsemester oder ein Praktikum zur Orientierung.", school]
  };
  let step = 0, uid = "", state = null;
  const key = () => "campus-career-plan-v1:" + uid;
  const store = () => {
    if (!uid) return;
    try { localStorage.setItem(key(), JSON.stringify(state)); hint.textContent = "Plan in diesem Browser für dein Konto gespeichert."; }
    catch { hint.textContent = "Speichern im Browser ist gerade nicht möglich. Du kannst den Plan drucken."; }
  };

  function showStep() {
    form.hidden = false;
    result.hidden = true;
    steps.forEach((field, i) => { field.hidden = i !== step; field.disabled = i !== step; });
    indicator.textContent = "Schritt " + (step + 1) + " von " + steps.length;
    previous.hidden = step === 0;
    forward.textContent = step === steps.length - 1 ? "Meinen Plan erstellen" : "Weiter";
  }
  function focusStep() { steps[step].querySelector("legend").focus(); }

  function milestones() {
    const [focus, focusLink, trial, trialLink] = interestOptions[state.interest];
    const [,compare, compareText, compareLink, apply, backup, backupLink] = routes[state.route];
    const selectedCity = document.getElementById("planCity").selectedOptions[0];
    const city = selectedCity?.value ? selectedCity.textContent : "deiner Region";
    const area = selectedCity?.value ? "stadt-" + selectedCity.value + ".html" : "staedte.html";
    return [
      ["Heute", "Mach einen kleinen Test", trial + " Plane dafür 20 Minuten ein.", trialLink],
      ["In den nächsten Tagen", compare, compareText + " Schwerpunkt: " + focus + ".", state.route === "studium" || (state.route === "offen" && state.interest !== "offen") ? focusLink : compareLink],
      ["Vor deiner Entscheidung", "Erlebe den Alltag einmal vor Ort", "Frag nach einem Praktikum, einer Hospitation oder einer Schnupperveranstaltung. Notiere, was dir gefallen hat und was offen ist.", state.route === "ausbildung" ? training : school],
      ["Vor der ersten Frist", "Bereite deine Bewerbung vor", apply + " Trage die tatsächlichen Fristen in deinen Kalender ein.", state.route === "ausbildung" ? training : compareLink],
      ["Wenn ein Angebot infrage kommt", "Rechne Alltag und Anfahrt durch", "Prüfe in " + city + " die Strecke, Wohnmöglichkeiten und monatliche Kosten. Vergleiche sie mit deinem Budget, bevor du zusagst.", area],
      ["Bei Zusage oder Absage", "Klär den Start und halte Plan B bereit", "Bei Zusage: bestätige den Termin, prüfe Unterlagen und plane die erste Woche. " + backup, backupLink]
    ];
  }
  function renderNext(items) {
    const next = items.find((_, index) => !state.done.includes(index));
    nextAction.textContent = next ? "Dein nächster Schritt: " + next[1] : "Alles abgehakt. Prüfe jetzt deinen Starttermin.";
    nextDetail.textContent = next?.[2] ?? "";
    nextLink.hidden = !next;
    if (next) nextLink.href = next[3];
  }
  function renderPlan() {
    form.hidden = true;
    result.hidden = false;
    document.getElementById("planSummary").textContent = routes[state.route][0];
    document.getElementById("planHorizonText").textContent = state.horizon === "bald"
      ? "Du möchtest bald starten. Prüfe diese Woche sofort die echten Fristen und suche bei Bedarf nach Alternativen mit späterem Start."
      : "Du hast Zeit zum Ausprobieren. Plane in den nächsten Wochen einen Praxiseinblick und übertrage echte Fristen in deinen Kalender.";
    const items = milestones();
    const windows = state.horizon === "bald" ? [0,2,7,14,21,30] : [0,7,21,45,75,120];
    const base = new Date(state.createdAt);
    renderNext(items);
    timeline.replaceChildren(...items.map(([label,title,description,url],index) => {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = state.done.includes(index);
      checkbox.id = "planDone" + index;
      const heading = document.createElement("label");
      heading.htmlFor = checkbox.id;
      heading.textContent = title;
      const date = new Date(base);
      date.setDate(date.getDate() + windows[index]);
      const dateText = document.createElement("small");
      dateText.textContent = label + " · Zieltermin " + locale.format(date);
      const copy = document.createElement("p");
      copy.textContent = description;
      const link = document.createElement("a");
      link.href = url;
      link.textContent = "Hilfe zu diesem Schritt";
      checkbox.addEventListener("change", () => {
        state.done = checkbox.checked ? [...state.done,index] : state.done.filter(i => i !== index);
        store();
        renderNext(items);
      });
      li.append(dateText,checkbox,heading,copy,link);
      if (index === 1 && state.route === "offen" && link.href !== training) {
        const alt = document.createElement("a");
        alt.href = training;
        alt.textContent = "Ausbildungen ansehen";
        li.append(" · ", alt);
      }
      return li;
    }));
  }

  previous.addEventListener("click", () => { step--; showStep(); focusStep(); });
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (step < steps.length - 1) { step++; showStep(); focusStep(); return; }
    const value = name => form.querySelector("[name=" + name + "]:checked")?.value;
    const route = value("route"), interest = value("interest"), horizon = value("horizon");
    if (!Object.hasOwn(routes,route) || !Object.hasOwn(interestOptions,interest) || !["bald","spaeter"].includes(horizon)) return;
    const city = document.getElementById("planCity").value;
    const same = state && state.route === route && state.interest === interest && state.horizon === horizon && state.city === city;
    if (!same) state = {route,interest,horizon,city,createdAt:new Date().toISOString(),done:[]};
    store();
    renderPlan();
    document.getElementById("planSummary").focus();
  });
  edit.addEventListener("click", () => { step = 0; showStep(); focusStep(); });
  reset.addEventListener("click", () => {
    if (uid) { try { localStorage.removeItem(key()); } catch {} }
    state = null;
    hint.textContent = "Gespeicherter Plan entfernt.";
    form.reset();
    step = 0;
    showStep();
    focusStep();
  });
  document.getElementById("planPrint").addEventListener("click", () => window.print());
  window.addEventListener("campus-account", event => {
    uid = event.detail?.uid ?? "";
    state = null;
    hint.textContent = "";
    form.reset();
    step = 0;
    showStep();
    if (!uid) return;
    const saved = readCampusStorage(key());
    if (!saved || !Object.hasOwn(routes,saved.route) || !Object.hasOwn(interestOptions,saved.interest)
       || !["bald","spaeter"].includes(saved.horizon) || !Number.isFinite(Date.parse(saved.createdAt)) || !Array.isArray(saved.done)) return;
    state = saved;
    for (const radio of form.querySelectorAll("input[type=radio]")) radio.checked = state[radio.name] === radio.value;
    document.getElementById("planCity").value = state.city;
    renderPlan();
  });
  showStep();
})();
