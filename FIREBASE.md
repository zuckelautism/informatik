# Firebase für Campus-Kompass

1. Ein Firebase-Projekt öffnen und eine Web-App registrieren.
2. In Authentication die Google-Anmeldung aktivieren und unter autorisierten Domains `zuckelautism.github.io` hinzufügen. Für lokale Tests die passende Entwicklungsdomain ergänzen.
3. Cloud Firestore anlegen und die Regeln aus `firestore.rules` im richtigen Projekt veröffentlichen. Die enthaltene `firebase.json` verweist auf diese Regeln und setzt kein Firebase Hosting voraus.
4. Die öffentliche Web-App-Konfiguration mit `apiKey`, `authDomain`, `projectId` und `appId` in `firebase-config.js` eintragen. Keine Admin-Schlüssel verwenden.
5. GitHub Pages aktualisieren. In zwei Testkonten prüfen, dass jede Person nur das eigene Profil lesen und ändern kann.

Profile werden unter `profiles/{uid}` gespeichert. Das Profilbild ist ein verkleinertes JPEG im privaten Profildokument. Social-Angaben sind Kontaktlinks und Nutzernamen. Für Empfehlungen werden öffentliche Katalogdaten lokal mit dem Profil abgeglichen. Die lokale Profilvorschau speichert nur in diesem Browser.

[Google-Anmeldung](https://firebase.google.com/docs/auth/web/google-signin) · [Firestore-Regeln](https://firebase.google.com/docs/firestore/security/rules-conditions)
