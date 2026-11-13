# Campus-Kompass · Prüfbericht

Stand des separaten Prüfbranches am 13. November 2026.

## Referenzen

- Ausgangsstand von `main` `664df671ccd6f54994d1b65e88f3e410192deadf`
- Ausgangsstand der Stadtprüfung `ea37bd871edb2d6ee2cff9ab1be19e7c407c2287`
- Aktueller Prüfstand wird in der Git-Historie dieses Branches geführt.

Die Stadt-Rubrik bewertet Bildung mit 25 Punkten, Ausbildung mit 20, Wohnen mit 15, ÖPNV mit 15, Aktivitäten mit 10 sowie Quellen und Nutzbarkeit mit 15 Punkten. Die Freigabegrenze liegt bei 95 Punkten pro Stadt.

## Umgesetzt

- Alle 18 Stadtseiten bieten einen Einstieg für heute. Er verbindet Wohnheimbewerbung, Beispielroute zum Campus und Ticketprüfung. Für Ausbildungen ist ein gesonderter Tarifweg verlinkt.
- Der Katalog unterscheidet Ausbildungsprofile, Stellensuchen und konkrete Ausschreibungen.
- Leere Stadtfilter bieten eine Rücksetzaktion und setzen den Fokus auf die Bereichsauswahl.
- Stadtansichten und Symbolgrafiken sind gekennzeichnet.
- Der Wegplan enthält Startpunkt, Interessen, Stärken, Zeitrahmen, freiwillige Stadt, Vorschau, Handlung für heute, Etappen und Plan B.
- Schnell aufeinanderfolgende Klicks überspringen keinen Wegplanschritt. Beim Kontowechsel werden alte Planinhalte aus dem DOM entfernt. Vorschauänderungen werden über einen Status angekündigt.

## Lokale Abnahme

Die lokale Browser-Matrix bestand für den aktuellen Arbeitsstand:

- alle drei Wegplanpfade einschließlich Zurück, Neuladen, Bearbeiten und Abhaken
- synthetische Kontotrennung
- Direktlinks und Browser-Zurück
- Doppelklicks, schnelle Aktivierungen, langsamer Anmeldestart und Wiederholung
- 320, 375 und 1280 Pixel, Tastatur und reduzierte Bewegung

Die Firestore-Regeln bestanden zuvor 17 von 17 Fälle im offiziellen lokalen Emulator. Der Regelstand wurde bei diesen Änderungen nicht verändert.

## Offene Freigabepunkte

- Eine reale mobile Google-Anmeldung mit zwei autorisierten Testkonten stand nicht zur Verfügung.
- Fahrtzeiten, Ticketkäufe, Bewerbungsabsendungen und Wohnheimformulare wurden nicht abgeschlossen.
- Für die Gesamtfreigabe müssen alle Städte auf demselben finalen Commit erneut mindestens 95 von 100 Punkten erreichen. Der Prüfbranch bleibt deshalb getrennt von `main`.
