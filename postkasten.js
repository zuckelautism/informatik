(() => {
  const form = document.getElementById("campusMailForm");
  const field = document.getElementById("campusMailText");
  const button = document.getElementById("campusMailSend");
  const list = document.getElementById("campusMailMessages");
  const status = document.getElementById("campusMailStatus");
  const count = document.getElementById("campusMailCount");
  let pendingTimer;
  const updateCount = () => { count.textContent = field.value.length + " / 1500 Zeichen"; };
  field.addEventListener("input", () => { updateCount(); field.removeAttribute("aria-invalid"); });
  const format = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Berlin"
  });
  let generation = 0;
  let stop = () => {};
  let send = null;
  const setEnabled = enabled => { field.disabled = button.disabled = !enabled; };
  const errorText = error => error.code === "permission-denied"
    ? "Der Postkasten ist noch nicht freigeschaltet. Bitte wende dich an die Projektverwaltung."
    : "Der Postkasten ist gerade nicht erreichbar. Lade die Seite erneut.";

  function render(snapshot) {
    const messages = snapshot.docs.slice().reverse().map(doc => doc.data());
    list.replaceChildren(...messages.map(message => {
      const row = document.createElement("li");
      const heading = document.createElement("strong");
      heading.textContent = message.role === "campus" ? "Campus-Kompass" : "Du";
      const date = message.createdAt?.toDate?.();
      if (date) {
        const time = document.createElement("time");
        time.dateTime = date.toISOString();
        time.textContent = format.format(date);
        row.append(heading, time);
      } else row.append(heading);
      const text = document.createElement("p");
      text.textContent = message.text;
      row.append(text);
      return row;
    }));
    document.getElementById("campusMailEmpty").hidden = messages.length > 0;
  }

  window.addEventListener("campus-account", async event => {
    const account = event.detail;
    const current = ++generation;
    stop();
    stop = () => {};
    send = null;
    setEnabled(false);
    clearTimeout(pendingTimer);
    form.removeAttribute("aria-busy");
    field.readOnly = false;
    field.value = "";
    field.removeAttribute("aria-invalid");
    updateCount();
    list.replaceChildren();
    document.getElementById("campusMailEmpty").hidden = true;
    status.textContent = account ? "Postkasten wird geladen …" : "";
    if (!account) return;

    try {
      const firebase = await import("https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js");
      if (generation !== current) return;
      const box = firebase.collection(firebase.getFirestore(account.app), "profiles", account.uid, "messages");
      const recent = firebase.query(box, firebase.orderBy("createdAt", "desc"), firebase.limit(30));
      stop = firebase.onSnapshot(recent, snapshot => {
        if (generation !== current) return;
        render(snapshot);
        if (!send) {
          send = text => firebase.addDoc(box, { role: "user", text, createdAt: firebase.serverTimestamp() });
          setEnabled(true);
          status.textContent = "";
        }
      }, error => {
        if (generation !== current) return;
        send = null;
        setEnabled(false);
        status.textContent = errorText(error);
      });
    } catch (error) {
      if (generation === current) status.textContent = errorText(error);
    }
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const text = field.value.trim();
    if (!send || button.disabled) return;
    if (!text || text.length > 1500) {
      field.setAttribute("aria-invalid", "true");
      status.textContent = "Schreib eine Nachricht mit 1 bis 1500 Zeichen.";
      field.focus();
      return;
    }
    if (navigator.onLine === false) {
      status.textContent = "Du bist offline. Deine Eingabe bleibt hier. Versuche es mit Verbindung erneut.";
      return;
    }
    const current = generation;
    button.disabled = true;
    field.readOnly = true;
    form.setAttribute("aria-busy", "true");
    status.textContent = "Nachricht wird gespeichert …";
    const timer = setTimeout(() => {
      if (generation === current) status.textContent = "Das Speichern dauert länger. Lass die Seite geöffnet. Die Nachricht wird nur einmal abgeschickt.";
    }, 8000);
    pendingTimer = timer;
    try {
      await send(text);
      if (generation !== current) return;
      field.value = "";
      updateCount();
      status.textContent = "Nachricht im Postkasten gespeichert.";
    } catch (error) {
      if (generation === current) status.textContent = errorText(error);
    } finally {
      clearTimeout(timer);
      if (generation === current) {
        form.removeAttribute("aria-busy");
        field.readOnly = false;
        setEnabled(Boolean(send));
      }
    }
  });
})();
