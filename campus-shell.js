(() => {
  const menu = document.querySelector(".site-menu details");
  document.addEventListener("click", event => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  menu.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });

  const screen = document.querySelector(".campus-login");
  const button = document.getElementById("campusLoginButton");
  const status = document.getElementById("campusLoginStatus");
  const errors = {
    "auth/unauthorized-domain": "Diese Website muss in Firebase für die Anmeldung zugelassen werden.",
    "auth/operation-not-allowed": "Die Google-Anmeldung ist in Firebase noch nicht aktiviert.",
    "auth/popup-blocked": "Erlaube Pop-ups für diese Website und versuche es erneut.",
    "auth/popup-closed-by-user": "Das Anmeldefenster wurde geschlossen. Du kannst es erneut öffnen.",
    "auth/network-request-failed": "Google war nicht erreichbar. Prüfe deine Verbindung und versuche es erneut."
  };

  async function start() {
    button.disabled = true;
    status.textContent = "Anmeldung wird vorbereitet …";
    try {
      const cdn = "https://www.gstatic.com/firebasejs/13.2.0/";
      const [appModule, authModule] = await Promise.all([
        import(cdn + "firebase-app.js"),
        import(cdn + "firebase-auth.js")
      ]);
      const auth = authModule.getAuth(appModule.initializeApp(campusFirebaseConfig));
      await auth.authStateReady();
      button.onclick = async () => {
        button.disabled = true;
        status.textContent = "Google-Anmeldung wird geöffnet …";
        try {
          await authModule.signInWithPopup(auth, new authModule.GoogleAuthProvider());
        } catch (error) {
          status.textContent = errors[error.code] || "Anmeldung fehlgeschlagen. Bitte versuche es erneut.";
        } finally {
          button.disabled = false;
        }
      };
      authModule.onAuthStateChanged(auth, user => {
        document.body.classList.toggle("campus-locked", !user);
        screen.hidden = Boolean(user);
        window.dispatchEvent(new CustomEvent("campus-account", { detail: user ? { uid: user.uid, app: auth.app } : null }));
        button.disabled = false;
        status.textContent = "";
      });
    } catch {
      status.textContent = "Die Verbindung zur Anmeldung ist fehlgeschlagen.";
      button.textContent = "Erneut versuchen";
      button.onclick = () => {
        button.textContent = "Mit Google anmelden";
        start();
      };
      button.disabled = false;
    }
  }
  start();
})();
