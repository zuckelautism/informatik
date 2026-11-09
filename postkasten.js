(() => {
  const form = document.getElementById("campusMailForm");
  const field = document.getElementById("campusMailText");
  const button = document.getElementById("campusMailSend");
  const list = document.getElementById("campusMailMessages");
  const status = document.getElementById("campusMailStatus");
  const format = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Berlin"
  });
  let generation = 0;
  let stop = () => {};
  let send = null;
  const setEnabled = enabled => { field.disabled = button.disabled = !enabled; };
  const errorText = error => error.code === "permission-denied"
    ? "Der Postkasten wartet auf die Freigabe in Firebase."
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
    field.value = "";
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
    if (!send || button.disabled || !text || text.length > 1500) return;
    const current = generation;
    setEnabled(false);
    status.textContent = "Nachricht wird gespeichert …";
    try {
      await send(text);
      if (generation !== current) return;
      field.value = "";
      status.textContent = "Nachricht im Postkasten gespeichert.";
    } catch (error) {
      if (generation === current) status.textContent = errorText(error);
    } finally {
      if (generation === current && send) {
        setEnabled(true);
        field.focus();
      }
    }
  });
})();
