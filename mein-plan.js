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
  const preview = document.getElementById("planPreviewTitle");
  const cityField = document.getElementById("planCity");
  const strengths = {
    offen: "",
    reden: "Erkläre jemandem, was du herausgefunden hast, und bitte um eine Rückfrage.",
    bauen: "Halte fest, was du ausprobiert hast, etwa als Skizze oder kleines Beispiel.",
    ordnen: "Schreib zwei Vor- und Nachteile auf und markiere, was dir wichtiger ist."
  };
  const admission = "https://www.hochschulkompass.de/studium/bewerbung-zulassung.html";
  const applications = "https://web.arbeitsagentur.de/bildung/bewerbung/bewerbungsprozess-ausbildung";
  const locale = new Intl.DateTimeFormat("de-DE", {dateStyle:"medium"});
  const advice = "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt";
  const training = "ausbildung.html";
  const school = "studienplaetze.html#orientierung";
  const interestOptions = {
    offen: ["deine Interessen", "studienplaetze.html#orientierung", "Teste mit Check-U, welche Aufgaben zu dir passen.", advice],
    texte: ["Sprache, Kultur und Menschen", "studienplaetze.html?bereich=geisteswissenschaften#orientierung", "Lies einen kurzen Text und erkläre einer Person, was du daran spannend findest.", "studienplaetze.html?bereich=geisteswissenschaften#orientierung"],
    technik: ["Technik und Informatik", "studienplaetze.html?bereich=technik#orientierung", "Probiere ein kleines Programmier-, Reparatur- oder Bauprojekt aus.", school],
    menschen: ["Gesundheit und Psychologie", "studienplaetze.html?bereich=gesundheit#orientierung", "Frag bei einer sozialen Einrichtung nach einem Einblick oder Praktikum.", training],
    soziales: ["Soziales und Bildung", "studienplaetze.html?bereich=gesellschaft#orientierung", "Überlege, wem du bei einer Aufgabe helfen möchtest und wie du dabei vorgehen würdest.", school],
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
  const draftKey = () => key() + ":entwurf";
  const answers = () => Object.fromEntries(["route","interest","strength","horizon"].map(name =>
    [name,form.querySelector("[name=" + name + "]:checked")?.value]).concat([["city",cityField.value]]));
  const valid = choice => choice && Object.hasOwn(routes,choice.route) &&
    Object.hasOwn(interestOptions,choice.interest) && ["bald","spaeter"].includes(choice.horizon);
  const saveDraft = () => {
    if (!uid) return;
    try { localStorage.setItem(draftKey(),JSON.stringify({...answers(),step})); } catch {}
  };
  const clearDraft = () => {
    if (!uid) return;
    try { localStorage.removeItem(draftKey()); } catch {}
  };
  function restore(choice) {
    for (const radio of form.querySelectorAll("input[type=radio]")) {
      radio.checked = (choice[radio.name] ?? "offen") === radio.value;
    }
    cityField.value = choice.city || "";
  }
  function refreshPreview() {
    const choice = answers();
    if (!valid(choice)) return;
    const [,title,detail] = milestones(choice)[0];
    document.getElementById("planPreviewProfile").textContent =
      [routes[choice.route][0],interestOptions[choice.interest][0],cityField.value && cityField.selectedOptions[0]?.textContent].filter(Boolean).join(" · ");
    document.getElementById("planPreviewAction").textContent = title + " · " + detail;
  }
  const store = () => {
    if (!uid) return;
    try { localStorage.setItem(key(), JSON.stringify(state)); hint.textContent = "Plan in diesem Browser für dein Konto gespeichert."; }
    catch { hint.textContent = "Speichern im Browser ist gerade nicht möglich. Du kannst den Plan drucken."; }
  };

  function showStep() {
    form.hidden = false;
    result.hidden = true;
    steps.forEach((field, i) => { field.hidden = i !== step; field.disabled = i !== step; });
    indicator.textContent = step === steps.length ? "Vorschau vor dem Speichern" : "Schritt " + (step + 1) + " von " + steps.length;
    previous.hidden = step === 0;
    forward.textContent = step === steps.length ? "Meinen Plan speichern" : step === steps.length - 1 ? "Zur Vorschau" : "Weiter";
    form.classList.toggle("plan-review",step===steps.length);
    document.getElementById("planMeter").value = Math.min(step + 1,steps.length);
    refreshPreview();
  }
  function focusStep() { (steps[step]?.querySelector("legend") ?? preview).focus(); }

  function milestones(choice = state) {
    const [focus, focusLink, trial, trialLink] = interestOptions[choice.interest];
    const [,compare, compareText, compareLink, apply, backup, backupLink] = routes[choice.route];
    const selectedCity = document.getElementById("planCity").selectedOptions[0];
    const city = selectedCity?.value ? selectedCity.textContent : "deiner Region";
    const area = selectedCity?.value ? "stadt-" + selectedCity.value + ".html" : "staedte.html";
    const note = strengths[choice.strength] || "";
    const deadlineLink = choice.route === "studium" ? admission : choice.route === "ausbildung" ? applications : advice;
    return [
      choice.horizon === "bald"
        ? ["Heute", "Prüfe den frühesten Bewerbungstermin", "Öffne die Hinweise für deinen Weg und notiere eine echte Frist. " + note, deadlineLink]
        : ["Heute", "Mach einen kleinen Test", trial + " Plane dafür 20 Minuten ein. " + note, choice.route === "ausbildung" ? training : trialLink],
      ["In den nächsten Tagen", compare, compareText + " Schwerpunkt: " + focus + ".", choice.route === "studium" || (choice.route === "offen" && choice.interest !== "offen") ? focusLink : compareLink],
      ["Vor deiner Entscheidung", "Erlebe den Alltag einmal vor Ort", "Frag nach einem Praktikum, einer Hospitation oder einer Schnupperveranstaltung. Notiere, was dir gefallen hat und was offen ist.", choice.route === "ausbildung" ? training : school],
      ["Vor der ersten Frist", "Bereite deine Bewerbung vor", apply + " Trage die tatsächlichen Fristen in deinen Kalender ein.", deadlineLink],
      ["Wenn ein Angebot infrage kommt", "Rechne Alltag und Anfahrt durch", "Prüfe in " + city + " die Strecke, Wohnmöglichkeiten und monatliche Kosten. Vergleiche sie mit deinem Budget, bevor du zusagst.", area],
      ["Bei Zusage oder Absage", "Klär den Start und halte Plan B bereit", "Bei Zusage: bestätige den Termin, prüfe Unterlagen und plane die erste Woche. " + backup, choice.route === "ausbildung" ? "https://web.arbeitsagentur.de/bildung/ausbildung/kein-ausbildungsplatz-gefunden" : backupLink]
    ];
  }
  function renderNext(items) {
    document.getElementById("planCompletion").textContent = items.filter((_, index) => state.done.includes(index)).length + " von " + items.length + " Schritten erledigt";
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
      link.textContent = "Hilfe: " + title;
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

  previous.addEventListener("click", () => { step--; saveDraft(); showStep(); focusStep(); });
  form.addEventListener("change", () => { saveDraft(); refreshPreview(); });
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (step < steps.length) { step++; saveDraft(); showStep(); focusStep(); return; }
    const choice = answers();
    if (!valid(choice)) return;
    const same = state && state.route === choice.route && state.interest === choice.interest && state.horizon === choice.horizon;
    state = {...choice,createdAt:same ? state.createdAt : new Date().toISOString(),
      done:same ? state.done.filter(index => index !== 4 || state.city === choice.city) : []};
    clearDraft();
    store();
    renderPlan();
    document.getElementById("planSummary").focus();
  });
  edit.addEventListener("click", () => { step = 0; saveDraft(); showStep(); focusStep(); });
  reset.addEventListener("click", () => {
    if (uid) { try { localStorage.removeItem(key()); } catch {} }
    clearDraft();
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
    if (valid(saved) && Number.isFinite(Date.parse(saved.createdAt)) && Array.isArray(saved.done)) state = saved;
    const draft = readCampusStorage(draftKey());
    if (valid(draft)) {
      restore(draft);
      step = Number.isInteger(draft.step) ? Math.max(0,Math.min(steps.length,draft.step)) : 0;
      showStep();
    } else if (state) {
      restore(state);
      renderPlan();
    }
  });
  showStep();
})();
