// Öffentliche Web-App-Konfiguration für Firebase Authentication und Firestore.
const campusFirebaseWebApp = {
  apiKey: "AIzaSyBjP-bAqKqwHlkUugAHej8HSVnY1P7rm2E",
  authDomain: "campus-kompass.firebaseapp.com",
  projectId: "campus-kompass",
  storageBucket: "campus-kompass.firebasestorage.app",
  messagingSenderId: "813344651480",
  appId: "1:813344651480:web:38d46880618557ae4effad"
};

// Erst aktivieren, wenn Google-Anmeldung, autorisierte Domain und Firestore-Regeln eingerichtet sind.
const campusFirebaseEnabled = false;
const campusFirebaseConfig = campusFirebaseEnabled ? campusFirebaseWebApp : null;
