// Nach Kategorien gruppierte Ergänzungen. Vorhandene IDs für Merklisten beibehalten.
const campusErgaenzungen=[
  {
    "id": "2026-11|Handys|iPhone 16",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 16",
    "note": "Standardmodell der 16er-Reihe. Akkuzustand und Speicher bei Gebrauchtgeräten prüfen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|iPhone 16 Plus",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 16 Plus",
    "note": "Größere 16er-Variante. Abmessungen und Bedienung vergleichen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|iPhone 16 Pro",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 16 Pro",
    "note": "Älteres Pro-Modell. Kameras und Akkuzustand mit dem neueren Modell abgleichen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|iPhone 16 Pro Max",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 16 Pro Max",
    "note": "Großes Pro-Modell aus der vorherigen Generation.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|iPhone 16e",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 16e",
    "note": "Schlichtere Alternative mit iOS. Zubehör und Kamerafunktionen vergleichen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|iPhone 15",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 15",
    "note": "Gebrauchtkandidat mit USB-C. Zustand und Update-Eignung prüfen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|iPhone 15 Plus",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 15 Plus",
    "note": "Größerer Bildschirm in der 15er-Reihe.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|iPhone 15 Pro",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 15 Pro",
    "note": "Kompakteres Pro-Modell. Auf Akku, Reparaturen und Garantie achten.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|iPhone 15 Pro Max",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 15 Pro Max",
    "note": "Größere Pro-Variante. Kamera und Gewicht vergleichen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Galaxy S25",
    "category": "Handys",
    "city": "Überregional",
    "title": "Galaxy S25",
    "note": "Galaxy-Alternative der Vorgängergeneration für den direkten Vergleich mit deinem S24 Ultra.",
    "link": "https://www.samsung.com/us/support/answer/ANS10004600/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Galaxy S25+",
    "category": "Handys",
    "city": "Überregional",
    "title": "Galaxy S25+",
    "note": "Größere Variante der S25-Reihe.",
    "link": "https://www.samsung.com/us/support/answer/ANS10004600/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Galaxy S25 Ultra",
    "category": "Handys",
    "city": "Überregional",
    "title": "Galaxy S25 Ultra",
    "note": "S-Pen-Kandidat zum Vergleich mit dem S24 Ultra.",
    "link": "https://www.samsung.com/us/support/answer/ANS10004600/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Galaxy S25 Edge",
    "category": "Handys",
    "city": "Überregional",
    "title": "Galaxy S25 Edge",
    "note": "Schlanke Variante. Kamera und Akkulaufzeit mit dem S25 vergleichen.",
    "link": "https://www.samsung.com/us/support/answer/ANS10004600/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Galaxy S25 FE",
    "category": "Handys",
    "city": "Überregional",
    "title": "Galaxy S25 FE",
    "note": "FE-Option zum Vergleich mit S25 und S26 FE.",
    "link": "https://www.samsung.com/us/support/answer/ANS10004600/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Pixel 10",
    "category": "Handys",
    "city": "Überregional",
    "title": "Pixel 10",
    "note": "Standardmodell der 10er-Generation.",
    "link": "https://store.google.com/de/magazine/compare_pixel?hl=de",
    "ecosystems": [
      "pixel",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Pixel 10 Pro",
    "category": "Handys",
    "city": "Überregional",
    "title": "Pixel 10 Pro",
    "note": "Kamerafunktionen mit dem Pixel 10 vergleichen.",
    "link": "https://store.google.com/de/magazine/compare_pixel?hl=de",
    "ecosystems": [
      "pixel",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Pixel 10 Pro XL",
    "category": "Handys",
    "city": "Überregional",
    "title": "Pixel 10 Pro XL",
    "note": "Große Pro-Variante. Gewicht und Format beachten.",
    "link": "https://store.google.com/de/magazine/compare_pixel?hl=de",
    "ecosystems": [
      "pixel",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Pixel 10 Pro Fold",
    "category": "Handys",
    "city": "Überregional",
    "title": "Pixel 10 Pro Fold",
    "note": "Faltbare Alternative zum Galaxy Z Fold.",
    "link": "https://store.google.com/de/magazine/compare_pixel?hl=de",
    "ecosystems": [
      "pixel",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Pixel 9",
    "category": "Handys",
    "city": "Überregional",
    "title": "Pixel 9",
    "note": "Älteres Pixel für die Gebraucht- und Refurbished-Suche.",
    "link": "https://store.google.com/de/magazine/compare_pixel?hl=de",
    "ecosystems": [
      "pixel",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Handys|Pixel 9a",
    "category": "Handys",
    "city": "Überregional",
    "title": "Pixel 9a",
    "note": "A-Serie der Vorgängergeneration. Support und Akkuzustand prüfen.",
    "link": "https://store.google.com/de/magazine/compare_pixel?hl=de",
    "ecosystems": [
      "pixel",
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "2026-11|Tablets|iPad Pro 11 (M4)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Pro 11 (M4)",
    "note": "Älteres iPad Pro für Mitschriften und mobile Nutzung.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Pro 13 (M4)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Pro 13 (M4)",
    "note": "Große M4-Variante. Tastatur und Stift separat prüfen.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Pro 11 (4. Generation, M2)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Pro 11 (4. Generation, M2)",
    "note": "Gebrauchtoption. Anschluss und kompatiblen Pencil vergleichen.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Pro 12,9 (6. Generation, M2)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Pro 12,9 (6. Generation, M2)",
    "note": "Großes M2-Pro-Modell. Akkuzustand bei Gebrauchtangeboten prüfen.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Air 11 (M3)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Air 11 (M3)",
    "note": "M3-Alternative für Notizen, Lesen und PDFs.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Air 13 (M3)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Air 13 (M3)",
    "note": "Größere Arbeitsfläche in der M3-Reihe.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Air 11 (M2)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Air 11 (M2)",
    "note": "Älteres Air für Studium und Mitschriften.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Air 13 (M2)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Air 13 (M2)",
    "note": "Älteres 13-Zoll-Air. Zubehörkompatibilität prüfen.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Air (5. Generation, M1)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Air (5. Generation, M1)",
    "note": "M1-Tablet als Gebrauchtkandidat.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Air (4. Generation)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Air (4. Generation)",
    "note": "Älteres Air. Speicher und verbleibende Softwareunterstützung prüfen.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad (10. Generation)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad (10. Generation)",
    "note": "Standard-iPad für Lesestoff, Mitschriften und Medien.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad (9. Generation)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad (9. Generation)",
    "note": "Älteres Einsteigermodell. Ladeanschluss und Zubehör prüfen.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad mini (6. Generation)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad mini (6. Generation)",
    "note": "Kompaktes Vorgängermodell. Akkuzustand und Speicher beachten.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Pro 11 (3. Generation, M1)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Pro 11 (3. Generation, M1)",
    "note": "Kompaktere ältere Pro-Variante mit M1.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|iPad Pro 12,9 (5. Generation, M1)",
    "category": "Tablets",
    "city": "Überregional",
    "title": "iPad Pro 12,9 (5. Generation, M1)",
    "note": "Großes älteres Pro-Modell. Gewicht und Gebrauchtzustand prüfen.",
    "link": "https://www.apple.com/de/ipad/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|Galaxy Tab S10 Lite",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab S10 Lite",
    "note": "Mit deinem Tab S9 FE nach Bildschirm, Stift und Softwarefunktionen vergleichen.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|Galaxy Tab S10+",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab S10+",
    "note": "Größeres S-Modell der vorherigen Generation.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|Galaxy Tab S10 Ultra",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab S10 Ultra",
    "note": "Großformat für geteilte Ansichten und PDFs.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|Galaxy Tab S9 FE",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab S9 FE",
    "note": "Dein aktuelles Tablet als Referenz für einen Vergleich.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Tablets|Galaxy Tab S9 FE+",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab S9 FE+",
    "note": "Größere FE-Alternative aus derselben Generation.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "2026-11|Smart-Gadgets|Apple Watch Series 11",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Apple Watch Series 11",
    "note": "Kompatibles iPhone vorausgesetzt. Akku und Größe mit Series 12 vergleichen.",
    "link": "https://support.apple.com/de-de/guide/watch/apd2054d0d5b/watchos",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Apple Watch Ultra 3",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Apple Watch Ultra 3",
    "note": "Vorjahresmodell für Outdoor und Sport. Zustand und Größe prüfen.",
    "link": "https://support.apple.com/de-de/guide/watch/apd2054d0d5b/watchos",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Apple Watch Series 10",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Apple Watch Series 10",
    "note": "Gebrauchtkandidat mit iPhone-Kopplung.",
    "link": "https://support.apple.com/de-de/guide/watch/apd2054d0d5b/watchos",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Apple Watch Series 9",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Apple Watch Series 9",
    "note": "Älteres Modell. Kompatibilität und Akkuzustand prüfen.",
    "link": "https://support.apple.com/de-de/guide/watch/apd2054d0d5b/watchos",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Apple Watch Ultra 2",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Apple Watch Ultra 2",
    "note": "Ältere Ultra-Variante. Bei Gebrauchtkauf Akku und Zustand vergleichen.",
    "link": "https://support.apple.com/de-de/guide/watch/apd2054d0d5b/watchos",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Apple Watch SE (2. Generation)",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Apple Watch SE (2. Generation)",
    "note": "Einstieg in das Apple-Ökosystem. Erfordert ein kompatibles iPhone.",
    "link": "https://support.apple.com/de-de/guide/watch/apd2054d0d5b/watchos",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|AirPods 4",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "AirPods 4",
    "note": "Bluetooth-Audio auf Android mit weniger Zusatzfunktionen.",
    "link": "https://support.apple.com/de-de/109525",
    "deviceType": "Audio",
    "ecosystems": [
      "apple",
      "galaxy",
      "pixel",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|AirPods 4 mit ANC",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "AirPods 4 mit ANC",
    "note": "Geräuschunterdrückungsvariante. Funktionsumfang pro Plattform prüfen.",
    "link": "https://support.apple.com/de-de/109525",
    "deviceType": "Audio",
    "ecosystems": [
      "apple",
      "galaxy",
      "pixel",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|AirPods Pro (2. Generation, USB-C)",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "AirPods Pro (2. Generation, USB-C)",
    "note": "Gebrauchtoption. Ladecase und Zustand beachten.",
    "link": "https://support.apple.com/de-de/109525",
    "deviceType": "Audio",
    "ecosystems": [
      "apple",
      "galaxy",
      "pixel",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|AirPods Max 2",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "AirPods Max 2",
    "note": "Over-Ear-Kopfhörer mit Apple-Integration. Bluetooth-Basisfunktionen auf Android.",
    "link": "https://support.apple.com/de-de/109525",
    "deviceType": "Audio",
    "ecosystems": [
      "apple",
      "galaxy",
      "pixel",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Pixel Watch 4",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Pixel Watch 4",
    "note": "Für kompatible Android-Handys. Zusätzliche Funktionen je Telefon prüfen.",
    "link": "https://store.google.com/magazine/google_pixel_watch_compare?hl=en-US",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Pixel Watch 3",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Pixel Watch 3",
    "note": "Ältere Pixel Watch. Version und Akkuzustand vergleichen.",
    "link": "https://store.google.com/magazine/google_pixel_watch_compare?hl=en-US",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Pixel Watch 2",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Pixel Watch 2",
    "note": "Gebrauchtoption für kompatibles Android. Updates und Akku prüfen.",
    "link": "https://store.google.com/magazine/google_pixel_watch_compare?hl=en-US",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Fitbit Charge 6",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Fitbit Charge 6",
    "note": "App- und Kontoanforderungen für die Einrichtung prüfen.",
    "link": "https://store.google.com/magazine/google_pixel_watch_compare?hl=en-US",
    "deviceType": "Fitness",
    "ecosystems": [
      "apple",
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Fitbit Inspire 3",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Fitbit Inspire 3",
    "note": "Schmaler Tracker. Fitbit-App und unterstützte Betriebssystemversion prüfen.",
    "link": "https://store.google.com/magazine/google_pixel_watch_compare?hl=en-US",
    "deviceType": "Fitness",
    "ecosystems": [
      "apple",
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Fitbit Versa 4",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Fitbit Versa 4",
    "note": "Ältere Fitnessuhr. App und Funktionsumfang prüfen.",
    "link": "https://store.google.com/magazine/google_pixel_watch_compare?hl=en-US",
    "deviceType": "Fitness",
    "ecosystems": [
      "apple",
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Fitbit Sense 2",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Fitbit Sense 2",
    "note": "Gesundheits- und Fitnessuhr. App und Abo-Funktionen getrennt betrachten.",
    "link": "https://store.google.com/magazine/google_pixel_watch_compare?hl=en-US",
    "deviceType": "Fitness",
    "ecosystems": [
      "apple",
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Garmin Venu 4",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Garmin Venu 4",
    "note": "Kopplung über Garmin Connect. Anforderungen der App prüfen.",
    "link": "https://www8.garmin.com/manuals/webhelp/GUID-2CF5620C-E585-4E0A-9CC3-9565533EEE4D/DE-DE/Venu_4_OM_DE-DE.pdf",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple",
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Garmin Forerunner 570",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Garmin Forerunner 570",
    "note": "Trainingsuhr für Laufdaten. Kopplung und App-Funktionen prüfen.",
    "link": "https://www8.garmin.com/manuals/webhelp/GUID-25E3235D-44D2-4384-A591-DD1D71BEBCB1/DE-DE/Forerunner_570_OM_DE-DE.pdf",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple",
      "pixel",
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Smart-Gadgets|Galaxy Fit3",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Galaxy Fit3",
    "note": "Kompakter Tracker für kompatible Android-Handys. Regionale Produktseite und App-Anforderungen prüfen.",
    "link": "https://www.samsung.com/us/support/answer/ANS10004550/",
    "deviceType": "Fitness",
    "ecosystems": [
      "galaxy",
      "android"
    ]
  },
  {
    "id": "2026-11|Wohnen|immowelt · Einzimmerwohnungen",
    "category": "Wohnen",
    "city": "Neckarsulm",
    "title": "immowelt · Einzimmerwohnungen",
    "note": "Gezielte Suche nach 1- bis 1,5-Zimmer-Wohnungen.",
    "link": "https://www.immowelt.de/suche/mieten/wohnung/zimmer-1/baden-wurttemberg/neckarsulm-74172/ad08de5447"
  },
  {
    "id": "2026-11|Wohnen|ImmoScout24 · Möblierte WGs",
    "category": "Wohnen",
    "city": "Neckarsulm",
    "title": "ImmoScout24 · Möblierte WGs",
    "note": "Möblierte WG-Zimmer und Mietdauer vergleichen.",
    "link": "https://www.immobilienscout24.de/Suche/de/baden-wuerttemberg/heilbronn-kreis/neckarsulm/moeblierte-wg"
  },
  {
    "id": "2026-11|Wohnen|Kleinanzeigen · WG-Suche",
    "category": "Wohnen",
    "city": "Neckarsulm",
    "title": "Kleinanzeigen · WG-Suche",
    "note": "Lokale Anzeigen selbst filtern und Verfügbarkeit prüfen.",
    "link": "https://www.kleinanzeigen.de/s-wohnung-mieten/neckarsulm/wg/k0c203l8239"
  },
  {
    "id": "2026-11|Wohnen|Immosuchmaschine · Mietwohnungen",
    "category": "Wohnen",
    "city": "Neckarsulm",
    "title": "Immosuchmaschine · Mietwohnungen",
    "note": "Suchübersicht für die Gemeinde und den Umkreis.",
    "link": "https://www.immosuchmaschine.de/g/74172-neckarsulm/wohnung-mieten"
  },
  {
    "id": "2026-11|Wohnen|Immomiet · Mietsuche",
    "category": "Wohnen",
    "city": "Neckarsulm",
    "title": "Immomiet · Mietsuche",
    "note": "Weitere Mietangebote und aktuelle Inserate beim Portal.",
    "link": "https://www.immomiet.de/mieten/neckarsulm/"
  },
  {
    "id": "2026-11|Wohnen|ImmoScout24 · WG-Zimmer",
    "category": "Wohnen",
    "city": "Heilbronn",
    "title": "ImmoScout24 · WG-Zimmer",
    "note": "WG-Suche mit Filtern für Budget und Einzug.",
    "link": "https://www.immobilienscout24.de/Suche/de/baden-wuerttemberg/heilbronn/wg-zimmer"
  },
  {
    "id": "2026-11|Wohnen|WG-Gesucht · WG-Zimmer",
    "category": "Wohnen",
    "city": "Heilbronn",
    "title": "WG-Gesucht · WG-Zimmer",
    "note": "Zimmerangebote und Gesuche in Heilbronn.",
    "link": "https://www.wg-gesucht.de/wg-zimmer-in-Heilbronn.60.0.1.0.html"
  },
  {
    "id": "2026-11|Wohnen|Stadt Heilbronn · Mietspiegel",
    "category": "Wohnen",
    "city": "Heilbronn",
    "title": "Stadt Heilbronn · Mietspiegel",
    "note": "Vergleichsmiete einordnen. Betriebskosten separat prüfen.",
    "link": "https://www.heilbronn.de/bauen-wohnen/wohnen/mietspiegel.html"
  },
  {
    "id": "2026-11|Wohnen|HHN · Unterkunft für internationale Studierende",
    "category": "Wohnen",
    "city": "Heilbronn",
    "title": "HHN · Unterkunft für internationale Studierende",
    "note": "Infos und Suchwege des International Office.",
    "link": "https://www.hs-heilbronn.de/de/wohnung-fuer-internationale-studierende"
  },
  {
    "id": "2026-11|Wohnen|Haus & Grund Heilbronn · Vergleichsmieten",
    "category": "Wohnen",
    "city": "Heilbronn",
    "title": "Haus & Grund Heilbronn · Vergleichsmieten",
    "note": "Erläuterungen zur lokalen Vergleichsmiete.",
    "link": "https://www.hausundgrund-heilbronn.de/mietspiegel.html"
  },
  {
    "id": "2026-11|Wohnen|Stadt München · SOWON",
    "category": "Wohnen",
    "city": "München",
    "title": "Stadt München · SOWON",
    "note": "Zugang und Voraussetzungen für geförderte Wohnungen prüfen.",
    "link": "https://stadt.muenchen.de/service/info/fachbereich-wohnen/1073964/"
  },
  {
    "id": "2026-11|Wohnen|Studierendenwerk · Wohnheim-FAQ",
    "category": "Wohnen",
    "city": "München",
    "title": "Studierendenwerk · Wohnheim-FAQ",
    "note": "Häufige Fragen zu Berechtigung, Bewerbung und Wartezeit.",
    "link": "https://www.studierendenwerk-muenchen-oberbayern.de/wohnheime/faqs/"
  },
  {
    "id": "2026-11|Wohnen|ImmoScout24 · Mietwohnungen München",
    "category": "Wohnen",
    "city": "München",
    "title": "ImmoScout24 · Mietwohnungen München",
    "note": "Filter für Stadtteil, Größe und Mietpreis.",
    "link": "https://www.immobilienscout24.de/Suche/de/bayern/muenchen/wohnung-mieten"
  },
  {
    "id": "2026-11|Wohnen|WG-Gesucht · WG-Zimmer München",
    "category": "Wohnen",
    "city": "München",
    "title": "WG-Gesucht · WG-Zimmer München",
    "note": "Zimmerangebote für unterschiedliche Mietdauern.",
    "link": "https://www.wg-gesucht.de/wg-zimmer-in-Muenchen.90.0.1.0.html"
  },
  {
    "id": "2026-11|Wohnen|Studierendenwerk · Wohnanlagen",
    "category": "Wohnen",
    "city": "München",
    "title": "Studierendenwerk · Wohnanlagen",
    "note": "Standorte und Wohnformen des Studierendenwerks vergleichen.",
    "link": "https://www.studierendenwerk-muenchen-oberbayern.de/wohnheime/wohnanlagen/"
  },
  {
    "id": "2026-11|Wohnen|Stadt Ingolstadt · Qualifizierter Mietspiegel",
    "category": "Wohnen",
    "city": "Ingolstadt",
    "title": "Stadt Ingolstadt · Qualifizierter Mietspiegel",
    "note": "Lokale Vergleichsmiete anhand der amtlichen Informationen einordnen.",
    "link": "https://www.ingolstadt.de/Leben/Soziales-Wohnen/Wohnen/Mietspiegel/?La=1"
  },
  {
    "id": "2026-11|Wohnen|Studierendenwerk · Mietpreisliste Ingolstadt",
    "category": "Wohnen",
    "city": "Ingolstadt",
    "title": "Studierendenwerk · Mietpreisliste Ingolstadt",
    "note": "Dokumentierte Wohnheimentgelte und Gültigkeit der Liste prüfen.",
    "link": "https://www.werkswelt.de/data/uploads/wohnen/mietpreislisten/2026/ingolstadt/2025-10-31-mietpreisliste-ing-ab-jan-2026-deutsch-inkl.-lutz-u-neubg..pdf"
  },
  {
    "id": "2026-11|Wohnen|ImmoScout24 · Mietwohnungen Ingolstadt",
    "category": "Wohnen",
    "city": "Ingolstadt",
    "title": "ImmoScout24 · Mietwohnungen Ingolstadt",
    "note": "Suchseite für Mietwohnungen nach Stadtteil und Zimmerzahl.",
    "link": "https://www.immobilienscout24.de/Suche/de/bayern/ingolstadt/wohnung-mieten"
  },
  {
    "id": "2026-11|Wohnen|Wohnungsmarkt · THI Studierendenleben",
    "category": "Wohnen",
    "city": "Ingolstadt",
    "title": "Wohnungsmarkt · THI Studierendenleben",
    "note": "Unterkunft und Orientierung im Campusumfeld.",
    "link": "https://www.thi.de/studium/studentisches-leben/"
  },
  {
    "id": "2026-11|Wohnen|Integreat · Wohnen",
    "category": "Wohnen",
    "city": "Ingolstadt",
    "title": "Integreat · Wohnen",
    "note": "Kommunale Infos zum Wohnen und Ankommen.",
    "link": "https://integreat.app/ingolstadt/en/living-in-ingolstadt"
  },
  {
    "id": "2026-11|Autos|Audi A5 Sportback",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi A5 Sportback",
    "note": "Ältere Schrägheckvariante. Motor, Historie und Zustand vergleichen.",
    "link": "https://www.audi.de/de/gebrauchtwagenboerse/",
    "staff": true,
    "usedOnly": true,
    "segment": "Gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi A7 Sportback",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi A7 Sportback",
    "note": "Gebrauchtoption mit großem Heckzugang. Unterhaltskosten mit einkalkulieren.",
    "link": "https://www.audi.de/de/gebrauchtwagenboerse/",
    "staff": true,
    "usedOnly": true,
    "segment": "Gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi A8",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi A8",
    "note": "Gebrauchte Oberklasselimousine. Reparatur- und Versicherungskosten prüfen.",
    "link": "https://www.audi.de/de/gebrauchtwagenboerse/",
    "staff": true,
    "usedOnly": true,
    "segment": "Gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi TT Coupé",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi TT Coupé",
    "note": "Sportliche Gebrauchtoption. Wartung und Reparaturhistorie prüfen.",
    "link": "https://www.audi.de/de/gebrauchtwagenboerse/",
    "staff": true,
    "usedOnly": true,
    "segment": "Gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi A6 Limousine",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi A6 Limousine",
    "note": "Alternative zum A6 Avant. Gepäckzugang und Endpreis vergleichen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi A6 Sportback e-tron",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi A6 Sportback e-tron",
    "note": "Elektro-Option. Akku, Ladeprofil und Förderbedingungen separat prüfen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi Q5",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi Q5",
    "note": "SUV-Alternative zwischen Q3 und Q7. Ausstattung und Antrieb vergleichen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi Q7",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi Q7",
    "note": "Großer SUV. Kosten und Parkplatzbedarf berücksichtigen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi Q8",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi Q8",
    "note": "Größerer SUV. Marktpreis und Mitarbeiterangebot für dieselbe Ausstattung vergleichen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|Audi e-tron GT",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi e-tron GT",
    "note": "Elektrischer Gran Turismo. Ladeplanung, Versicherung und Kaufpreis prüfen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "2026-11|Autos|VW Golf GTI",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW Golf GTI",
    "note": "Sportliche Golf-Variante. Unterhalt und tatsächlichen Endpreis vergleichen.",
    "link": "https://www.volkswagen.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW Golf GTE",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW Golf GTE",
    "note": "Plug-in-Hybrid. Ladezugang und Fahrprofil berücksichtigen.",
    "link": "https://www.volkswagen.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW Golf R",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW Golf R",
    "note": "Leistungsvariante. Reifen, Versicherung und Wartung einplanen.",
    "link": "https://www.volkswagen.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW ID.5",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW ID.5",
    "note": "Elektro-SUV-Alternative zum ID.4. Batteriezustand und Reichweite prüfen.",
    "link": "https://www.volkswagen.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW ID.7",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW ID.7",
    "note": "Elektromodell für längere Strecken. Akku und Ausstattung vergleichen.",
    "link": "https://www.volkswagen.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW ID.7 Tourer",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW ID.7 Tourer",
    "note": "Elektrischer Kombi. Stauraum und Ladeprofil vergleichen.",
    "link": "https://www.volkswagen.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW Tayron",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW Tayron",
    "note": "SUV mit mehr Platz. Ausstattung und Sitzkonfiguration beachten.",
    "link": "https://www.volkswagen.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW Touran",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW Touran",
    "note": "Van als Option bei Platzbedarf. Sitzlayout und Ladefläche prüfen.",
    "link": "https://www.volkswagen.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW Caddy",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW Caddy",
    "note": "Hochdachkombi mit variabler Nutzung. Modellvariante und Ausstattung abgleichen.",
    "link": "https://www.volkswagen-nutzfahrzeuge.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Autos|VW Multivan",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW Multivan",
    "note": "Großes Fahrzeug mit flexiblem Innenraum. Gesamtpreis und laufende Kosten prüfen.",
    "link": "https://www.volkswagen-nutzfahrzeuge.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "2026-11|Studienstart|Python · Standardbibliothek",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Python · Standardbibliothek",
    "note": "Nachschlagewerk für Dateien, Datenformate und Werkzeuge.",
    "link": "https://docs.python.org/3/library/"
  },
  {
    "id": "2026-11|Studienstart|Python Packaging User Guide",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Python Packaging User Guide",
    "note": "Virtuelle Umgebungen, Abhängigkeiten und Paketierung lernen.",
    "link": "https://packaging.python.org/"
  },
  {
    "id": "2026-11|Studienstart|SQLite · SQL-Dokumentation",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "SQLite · SQL-Dokumentation",
    "note": "Relationale Abfragen an einer lokalen Datenbank üben.",
    "link": "https://sqlite.org/lang.html"
  },
  {
    "id": "2026-11|Studienstart|PostgreSQL · Funktionen und Operatoren",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "PostgreSQL · Funktionen und Operatoren",
    "note": "Aggregationen und Text- oder Datumsfunktionen nachschlagen.",
    "link": "https://www.postgresql.org/docs/current/functions.html"
  },
  {
    "id": "2026-11|Studienstart|DuckDB · SQL-Referenz",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "DuckDB · SQL-Referenz",
    "note": "Datenformate und analytische Abfragen dokumentiert.",
    "link": "https://duckdb.org/docs/stable/sql/introduction"
  },
  {
    "id": "2026-11|Studienstart|pandas · Benutzerhandbuch",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "pandas · Benutzerhandbuch",
    "note": "Praxis zu fehlenden Werten, Zeitreihen und Tabellenoperationen.",
    "link": "https://pandas.pydata.org/docs/user_guide/"
  },
  {
    "id": "2026-11|Studienstart|NumPy · Benutzerhandbuch",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "NumPy · Benutzerhandbuch",
    "note": "Array-Operationen und numerische Grundlagen vertiefen.",
    "link": "https://numpy.org/doc/stable/user/"
  },
  {
    "id": "2026-11|Studienstart|scikit-learn · Benutzerhandbuch",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "scikit-learn · Benutzerhandbuch",
    "note": "Modelle, Validierung und Vorverarbeitung nachschlagen.",
    "link": "https://scikit-learn.org/stable/user_guide.html"
  },
  {
    "id": "2026-11|Studienstart|SciPy · Tutorials",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "SciPy · Tutorials",
    "note": "Wissenschaftliche Berechnung und Statistik vertiefen.",
    "link": "https://docs.scipy.org/doc/scipy/tutorial/"
  },
  {
    "id": "2026-11|Studienstart|Seaborn · Tutorial",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Seaborn · Tutorial",
    "note": "Statistische Grafiken für Datenanalysen erstellen.",
    "link": "https://seaborn.pydata.org/tutorial.html"
  },
  {
    "id": "2026-11|Studienstart|Plotly Python",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Plotly Python",
    "note": "Interaktive Diagramme für Projektberichte bauen.",
    "link": "https://plotly.com/python/"
  },
  {
    "id": "2026-11|Studienstart|JupyterLab · Benutzerhandbuch",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "JupyterLab · Benutzerhandbuch",
    "note": "Notebooks und Arbeitsumgebung im Detail kennenlernen.",
    "link": "https://jupyterlab.readthedocs.io/en/stable/"
  },
  {
    "id": "2026-11|Studienstart|VS Code · Python",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "VS Code · Python",
    "note": "Python-Umgebung und Debugging einrichten.",
    "link": "https://code.visualstudio.com/docs/languages/python"
  },
  {
    "id": "2026-11|Studienstart|Microsoft Learn · Azure Fundamentals",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Microsoft Learn · Azure Fundamentals",
    "note": "Grundbegriffe zu Cloud und Azure erarbeiten.",
    "link": "https://learn.microsoft.com/de-de/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/"
  },
  {
    "id": "2026-11|Studienstart|Docker Compose · Übersicht",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Docker Compose · Übersicht",
    "note": "Mehrere Dienste für lokale Projekte gemeinsam starten.",
    "link": "https://docs.docker.com/compose/"
  },
  {
    "id": "2026-11|Studienstart|GitHub Docs · GitHub Actions",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "GitHub Docs · GitHub Actions",
    "note": "Automatische Tests und Veröffentlichungen verstehen.",
    "link": "https://docs.github.com/de/actions"
  },
  {
    "id": "2026-11|Studienstart|FastAPI · Tutorial",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "FastAPI · Tutorial",
    "note": "Datenfunktionen als API bereitstellen.",
    "link": "https://fastapi.tiangolo.com/tutorial/"
  },
  {
    "id": "2026-11|Studienstart|Streamlit · Erste Schritte",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Streamlit · Erste Schritte",
    "note": "Eine kleine interaktive Datenanwendung bauen.",
    "link": "https://docs.streamlit.io/get-started"
  },
  {
    "id": "2026-11|Studienstart|Destatis · GENESIS-Online",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Destatis · GENESIS-Online",
    "note": "Amtliche Datensätze für Analyseprojekte finden.",
    "link": "https://www-genesis.destatis.de/"
  },
  {
    "id": "2026-11|Studienstart|GovData · Datenportal",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "GovData · Datenportal",
    "note": "Öffentliche Datensätze für eigene Projekte recherchieren.",
    "link": "https://www.govdata.de/"
  },
  {
    "id": "2026-11|Aktivitäten|August-Herold-Weg",
    "category": "Aktivitäten",
    "city": "Neckarsulm",
    "title": "August-Herold-Weg",
    "note": "Wanderroute zu Weinbau und Landschaft. Streckenprofil auf der Stadtseite prüfen.",
    "link": "https://www.neckarsulm.de/startseite/willkommen/august-herold-weg.html",
    "activity": "Draußen"
  },
  {
    "id": "2026-11|Aktivitäten|Mediathek Neckarsulm",
    "category": "Aktivitäten",
    "city": "Neckarsulm",
    "title": "Mediathek Neckarsulm",
    "note": "Zum Lesen, Ausleihen oder für Veranstaltungen. Öffnungszeiten prüfen.",
    "link": "https://www.service-bw.de/zufi/organisationseinheiten/6041013",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Audi Forum Neckarsulm",
    "category": "Aktivitäten",
    "city": "Neckarsulm",
    "title": "Audi Forum Neckarsulm",
    "note": "Automobiltechnik, Ausstellungen und Besuchsangebote beim Audi Forum ansehen.",
    "link": "https://www.audi.de/audi-forum-neckarsulm/de/",
    "activity": "Technik"
  },
  {
    "id": "2026-11|Aktivitäten|Deutschordensschloss · Außenrunde",
    "category": "Aktivitäten",
    "city": "Neckarsulm",
    "title": "Deutschordensschloss · Außenrunde",
    "note": "Historisches Schloss und Umfeld von außen erkunden. Museumsbesuch separat planen.",
    "link": "https://demomu.de/",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|WT3 · Kleine Hügeltour",
    "category": "Aktivitäten",
    "city": "Neckarsulm",
    "title": "WT3 · Kleine Hügeltour",
    "note": "Rundweg im HeilbronnerLand durch Wiesen, Wald und Weinberge. Ausgangspunkt anhand der Tourbeschreibung prüfen.",
    "link": "https://www.heilbronnerland.de/tour/wt3-kleine-huegeltour-durch-wiesen-wald-weinberge",
    "activity": "Draußen"
  },
  {
    "id": "2026-11|Aktivitäten|Wartberg",
    "category": "Aktivitäten",
    "city": "Heilbronn",
    "title": "Wartberg",
    "note": "Aussicht und Spaziergang am Wartberg. Hinweise der Stadt prüfen.",
    "link": "https://www.heilbronn.de/leben/heilbronn-entdecken/sehenswuerdigkeiten/wartberg.html",
    "activity": "Draußen"
  },
  {
    "id": "2026-11|Aktivitäten|Trappenseeschloss",
    "category": "Aktivitäten",
    "city": "Heilbronn",
    "title": "Trappenseeschloss",
    "note": "Spaziergang am Trappensee mit Blick auf das Schloss. Zugang zur Anlage prüfen.",
    "link": "https://www.heilbronn.de/leben/heilbronn-entdecken/sehenswuerdigkeiten/trappenseeschloss.html",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Kunsthalle Vogelmann",
    "category": "Aktivitäten",
    "city": "Heilbronn",
    "title": "Kunsthalle Vogelmann",
    "note": "Wechselausstellungen. Programm und Ermäßigungen beim Museum prüfen.",
    "link": "https://museen.heilbronn.de/kunsthalle-vogelmann.html",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Wartberg–Waldheide",
    "category": "Aktivitäten",
    "city": "Heilbronn",
    "title": "Wartberg–Waldheide",
    "note": "Längere Runde auf einem der Heilbronner Weinwege.",
    "link": "https://www.heilbronn.de/tourismus/wein/heilbronner-weinwege/vom-wartberg-auf-die-waldheide.html",
    "activity": "Draußen"
  },
  {
    "id": "2026-11|Aktivitäten|Kilianskirche",
    "category": "Aktivitäten",
    "city": "Heilbronn",
    "title": "Kilianskirche",
    "note": "Historische Kirche im Zentrum. Besuchsmöglichkeiten vorab prüfen.",
    "link": "https://www.heilbronn.de/tourismus/kultur/sehenswertes.html",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Schloss Nymphenburg",
    "category": "Aktivitäten",
    "city": "München",
    "title": "Schloss Nymphenburg",
    "note": "Schloss und Park. Öffnungszeiten der einzelnen Bereiche getrennt prüfen.",
    "link": "https://www.muenchen.de/sehenswuerdigkeiten/burgen-und-schloesser/schloss-nymphenburg",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Tierpark Hellabrunn",
    "category": "Aktivitäten",
    "city": "München",
    "title": "Tierpark Hellabrunn",
    "note": "Zoo-Ausflug. Besuchszeiten, Anfahrt und Ermäßigungen prüfen.",
    "link": "https://www.muenchen.de/sehenswuerdigkeiten/tierpark-hellabrunn/besucherservice",
    "activity": "Draußen"
  },
  {
    "id": "2026-11|Aktivitäten|Viktualienmarkt",
    "category": "Aktivitäten",
    "city": "München",
    "title": "Viktualienmarkt",
    "note": "Rundgang durch den Markt. Öffnungszeiten unterscheiden sich je Stand.",
    "link": "https://www.muenchen.de/sehenswuerdigkeiten/top-sehenswuerdigkeiten/viktualienmarkt",
    "activity": "Draußen"
  },
  {
    "id": "2026-11|Aktivitäten|Münchner Residenz",
    "category": "Aktivitäten",
    "city": "München",
    "title": "Münchner Residenz",
    "note": "Museumsbesuch in der Innenstadt. Zugang und Tickets prüfen.",
    "link": "https://www.residenz-muenchen.de/",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Lenbachhaus",
    "category": "Aktivitäten",
    "city": "München",
    "title": "Lenbachhaus",
    "note": "Kunstmuseum mit wechselnden Ausstellungen. Besuchsplanung beim Haus.",
    "link": "https://www.lenbachhaus.de/",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Stadtmuseum Ingolstadt",
    "category": "Aktivitäten",
    "city": "Ingolstadt",
    "title": "Stadtmuseum Ingolstadt",
    "note": "Stadtgeschichte im Kavalier Hepp. Programm und Besuchszeiten prüfen.",
    "link": "https://zentrumstadtgeschichte.ingolstadt.de/Stadtmuseum/",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Bücherei im Herzogskasten",
    "category": "Aktivitäten",
    "city": "Ingolstadt",
    "title": "Bücherei im Herzogskasten",
    "note": "Lesen, Medien und Veranstaltungen im historischen Gebäude.",
    "link": "https://www.ingolstadt.de/Kultur/Bildung-Wissenschaft/Stadtb%C3%BCcherei/B%C3%BCcherei-im-Herzogskasten/",
    "activity": "Kultur"
  },
  {
    "id": "2026-11|Aktivitäten|Freibad Ingolstadt",
    "category": "Aktivitäten",
    "city": "Ingolstadt",
    "title": "Freibad Ingolstadt",
    "note": "Schwimmen in der Freibadsaison. Termine und Öffnung im städtischen Verzeichnis prüfen.",
    "link": "https://www.ingolstadt.de/Schwimmb%C3%A4der-Eisstadien/",
    "activity": "Sport"
  },
  {
    "id": "2026-11|Aktivitäten|Hallenbad Südwest",
    "category": "Aktivitäten",
    "city": "Ingolstadt",
    "title": "Hallenbad Südwest",
    "note": "Schwimmen im Hallenbad. Belegung und Öffnungszeiten beim Betreiber prüfen.",
    "link": "https://www.ingolstadt.de/Schwimmb%C3%A4der-Eisstadien/",
    "activity": "Sport"
  },
  {
    "id": "2026-11|Aktivitäten|Saturn Arena",
    "category": "Aktivitäten",
    "city": "Ingolstadt",
    "title": "Saturn Arena",
    "note": "Eissport und Veranstaltungen. Konkreten Termin beim Betreiber prüfen.",
    "link": "https://www.ingolstadt.de/Schwimmb%C3%A4der-Eisstadien/",
    "activity": "Sport"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|Stadt Neckarsulm · ÖPNV",
    "category": "ÖPNV & Pendeln",
    "city": "Neckarsulm",
    "title": "Stadt Neckarsulm · ÖPNV",
    "note": "Stadtbus, Haltestellen und lokale Mobilitätsinfos nachschlagen.",
    "link": "https://www.neckarsulm.de/969712.html",
    "segment": "Nahverkehr"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|Bahnhof Neckarsulm",
    "category": "ÖPNV & Pendeln",
    "city": "Neckarsulm",
    "title": "Bahnhof Neckarsulm",
    "note": "Abfahrten, Ausstattung und Barrierefreiheit prüfen.",
    "link": "https://www.bahnhof.de/neckarsulm",
    "segment": "Bahnhof"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|HNV · Verbindungen im Raum Neckarsulm",
    "category": "ÖPNV & Pendeln",
    "city": "Neckarsulm",
    "title": "HNV · Verbindungen im Raum Neckarsulm",
    "note": "Bus und Stadtbahn für den konkreten Start und Zielort suchen.",
    "link": "https://www.mein-hnv.de/",
    "segment": "Fahrplan"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|bwegt · Verbindungen im Land",
    "category": "ÖPNV & Pendeln",
    "city": "Neckarsulm",
    "title": "bwegt · Verbindungen im Land",
    "note": "Auskunft und Hinweise zum Nahverkehr in Baden-Württemberg.",
    "link": "https://www.bwegt.de/",
    "segment": "Fahrplan"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|D-Ticket JugendBW · Bedingungen",
    "category": "ÖPNV & Pendeln",
    "city": "Neckarsulm",
    "title": "D-Ticket JugendBW · Bedingungen",
    "note": "Alters- und Statusvoraussetzungen für das Jugendticket prüfen.",
    "link": "https://vm.baden-wuerttemberg.de/de/mobilitaet-verkehr/bahn-und-bus/oepnv-angebot-fuer-reisende/unsere-tickets-und-tarife/alles-zum-d-ticket-jugendbw",
    "segment": "Ticket"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|Stadt Heilbronn · ÖPNV",
    "category": "ÖPNV & Pendeln",
    "city": "Heilbronn",
    "title": "Stadt Heilbronn · ÖPNV",
    "note": "Übersicht zu Bus, Stadtbahn und Anbietern im Stadtgebiet.",
    "link": "https://www.heilbronn.de/umwelt-mobilitaet/mobilitaet/oepnv.html",
    "segment": "Nahverkehr"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|Heilbronn Hauptbahnhof",
    "category": "ÖPNV & Pendeln",
    "city": "Heilbronn",
    "title": "Heilbronn Hauptbahnhof",
    "note": "Aktuelle Abfahrten, Gleise und Bahnhofsausstattung prüfen.",
    "link": "https://www.bahnhof.de/heilbronn-hbf",
    "segment": "Bahnhof"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|HNV · Gemeinschaftstarif",
    "category": "ÖPNV & Pendeln",
    "city": "Heilbronn",
    "title": "HNV · Gemeinschaftstarif",
    "note": "Tarifzonen und Bedingungen für den HNV nachschlagen.",
    "link": "https://www.mein-hnv.de/fileadmin/pdf/tarif/gemeinschaftstarif.pdf",
    "segment": "Ticket"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|HNV · Tarifzonenplan",
    "category": "ÖPNV & Pendeln",
    "city": "Heilbronn",
    "title": "HNV · Tarifzonenplan",
    "note": "Den dokumentierten Zonenplan für die Route heranziehen und Gültigkeit prüfen.",
    "link": "https://download.transdev.de/transdev/uploads/pb/media_document/258/original.pdf",
    "segment": "Netzplan"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|DB Regio · JugendBW",
    "category": "ÖPNV & Pendeln",
    "city": "Heilbronn",
    "title": "DB Regio · JugendBW",
    "note": "Kaufweg, Berechtigung und Nutzung beim Verkehrsunternehmen prüfen.",
    "link": "https://www.dbregio.de/dbregiobus-bawue-de/tickets/d-ticket-jugendbw",
    "segment": "Ticket"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|MVV · Fahrtauskunft",
    "category": "ÖPNV & Pendeln",
    "city": "München",
    "title": "MVV · Fahrtauskunft",
    "note": "Verbindungen für S-Bahn, U-Bahn, Tram und Bus suchen.",
    "link": "https://efa.mvv-muenchen.de/ng/XSLT_TRIP_REQUEST2?language=de",
    "segment": "Fahrplan"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|MVV · Netzpläne",
    "category": "ÖPNV & Pendeln",
    "city": "München",
    "title": "MVV · Netzpläne",
    "note": "Passenden Netzplan und Fahrplanstand auswählen.",
    "link": "https://www.mvv-muenchen.de/fahrt-planen/fahrtinformationen/fahrplanwechsel/download/netzplaene/",
    "segment": "Netzplan"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|MVV · Bayerisches Ermäßigungsticket",
    "category": "ÖPNV & Pendeln",
    "city": "München",
    "title": "MVV · Bayerisches Ermäßigungsticket",
    "note": "Berechtigung und Bestellweg für Studierende und Auszubildende prüfen.",
    "link": "https://www.mvv-muenchen.de/tickets-abos-preise/bayerisches-ermaessigungsticket",
    "segment": "Ticket"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|MVV · Infoportal",
    "category": "ÖPNV & Pendeln",
    "city": "München",
    "title": "MVV · Infoportal",
    "note": "Baustellen und kurzfristige Änderungen vor Abfahrt nachsehen.",
    "link": "https://www.mvv-muenchen.de/fahrt-planen/fahrtinformationen/infoportal/",
    "segment": "Störungen"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|München Hauptbahnhof",
    "category": "ÖPNV & Pendeln",
    "city": "München",
    "title": "München Hauptbahnhof",
    "note": "Abfahrten und Wege im Bahnhof prüfen.",
    "link": "https://www.bahnhof.de/muenchen-hbf",
    "segment": "Bahnhof"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|VGI · Fahrplanauskunft",
    "category": "ÖPNV & Pendeln",
    "city": "Ingolstadt",
    "title": "VGI · Fahrplanauskunft",
    "note": "Aktuelle regionale Bus- und Bahnverbindungen suchen.",
    "link": "https://www.vgi.de/fahrplan_fahrplanauskuenfte",
    "segment": "Fahrplan"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|VGI · Aushangfahrpläne",
    "category": "ÖPNV & Pendeln",
    "city": "Ingolstadt",
    "title": "VGI · Aushangfahrpläne",
    "note": "Abfahrtsplan für eine konkrete Haltestelle wählen.",
    "link": "https://www.vgi.de/aushang",
    "segment": "Fahrplan"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|VGI · Liniennetzplan",
    "category": "ÖPNV & Pendeln",
    "city": "Ingolstadt",
    "title": "VGI · Liniennetzplan",
    "note": "Dokumentierten Tagesnetzplan zur Orientierung ansehen und Fahrplanstand prüfen.",
    "link": "https://www.vgi.de/FileServlet?accesskey=025a90ec-fcd6-4cb9-aca3-0b795cfbe651",
    "segment": "Netzplan"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|VGI · Deutschlandticket für Studierende",
    "category": "ÖPNV & Pendeln",
    "city": "Ingolstadt",
    "title": "VGI · Deutschlandticket für Studierende",
    "note": "Nachweis, Hochschulteilnahme und Bestellweg prüfen.",
    "link": "https://www.vgi.de/Deutschlandticket_Studierende",
    "segment": "Ticket"
  },
  {
    "id": "2026-11|ÖPNV & Pendeln|Ingolstadt Hauptbahnhof",
    "category": "ÖPNV & Pendeln",
    "city": "Ingolstadt",
    "title": "Ingolstadt Hauptbahnhof",
    "note": "Abfahrten, Bahnsteige und Umsteigewege beim Bahnhof prüfen.",
    "link": "https://www.bahnhof.de/ingolstadt-hbf",
    "segment": "Bahnhof"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Brackenheim (Umkreis)",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Brackenheim (Umkreis)",
    "note": "Filiale im Anbieter-Verzeichnis. Klassen, Kurszeiten und Anfahrt vergleichen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Eppingen (Umkreis)",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Eppingen (Umkreis)",
    "note": "Filiale im Anbieter-Verzeichnis. Klassen, Kurszeiten und Anfahrt vergleichen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Ilsfeld (Umkreis)",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Ilsfeld (Umkreis)",
    "note": "Filiale im Anbieter-Verzeichnis. Klassen, Kurszeiten und Anfahrt vergleichen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Neckargartach",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Neckargartach",
    "note": "Filiale im Anbieter-Verzeichnis. Klassen, Kurszeiten und Anfahrt vergleichen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Obersulm (Umkreis)",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Obersulm (Umkreis)",
    "note": "Filiale im Anbieter-Verzeichnis. Klassen, Kurszeiten und Anfahrt vergleichen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Öhringen (Umkreis)",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Öhringen (Umkreis)",
    "note": "Filiale im Anbieter-Verzeichnis. Klassen, Kurszeiten und Anfahrt vergleichen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Sinsheim (Umkreis)",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Sinsheim (Umkreis)",
    "note": "Filiale im Anbieter-Verzeichnis. Klassen, Kurszeiten und Anfahrt vergleichen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Weinsberg (Umkreis)",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Weinsberg (Umkreis)",
    "note": "Filiale im Anbieter-Verzeichnis. Klassen, Kurszeiten und Anfahrt vergleichen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY SGH · Truck & Bus Sontheim",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY SGH · Truck & Bus Sontheim",
    "note": "Standort für Lkw- und Busausbildung. Angebot und Voraussetzungen beim Anbieter prüfen.",
    "link": "https://academy-fahrschule-sgh.de/ueber-uns/unsere-standorte"
  },
  {
    "id": "2026-11|Fahrschulen|Fahrschule Rausch · Schwabing-West",
    "category": "Fahrschulen",
    "city": "München",
    "title": "Fahrschule Rausch · Schwabing-West",
    "note": "Filiale an der Schleißheimer Straße. Unterricht und Kurse am Standort prüfen.",
    "link": "https://www.fahrschule-rausch.de/standorte"
  },
  {
    "id": "2026-11|Fahrschulen|Fahrschule Rausch · Neuhausen",
    "category": "Fahrschulen",
    "city": "München",
    "title": "Fahrschule Rausch · Neuhausen",
    "note": "Filiale an der Nymphenburger Straße. Unterricht und Kurse am Standort prüfen.",
    "link": "https://www.fahrschule-rausch.de/standorte"
  },
  {
    "id": "2026-11|Fahrschulen|S.O.S. · Mailing",
    "category": "Fahrschulen",
    "city": "Ingolstadt",
    "title": "S.O.S. · Mailing",
    "note": "Ingolstädter Filiale. Unterricht und Einstieg beim Anbieter prüfen.",
    "link": "https://sos-fahrschule.de/"
  },
  {
    "id": "2026-11|Fahrschulen|S.O.S. · Gaimersheim (Umkreis)",
    "category": "Fahrschulen",
    "city": "Ingolstadt",
    "title": "S.O.S. · Gaimersheim (Umkreis)",
    "note": "Filiale im Umland. Anfahrt, Klassen und Zeiten abgleichen.",
    "link": "https://sos-fahrschule.de/"
  },
  {
    "id": "2026-11|Fahrschulen|Fahrschule by Hansi",
    "category": "Fahrschulen",
    "city": "Ingolstadt",
    "title": "Fahrschule by Hansi",
    "note": "Anbieter am Unterhaunstädter Weg. Klassen und Termine prüfen.",
    "link": "https://www.fahrschule-byhansi.de/"
  },
  {
    "id": "2026-11|Fahrschulen|Fahrschule Tavini",
    "category": "Fahrschulen",
    "city": "München",
    "title": "Fahrschule Tavini",
    "note": "Anbieter in München. Unterricht und Ausbildungsangebot prüfen.",
    "link": "https://fahrschule-tavini.de/"
  },
  {
    "id": "2026-11|Fahrschulen|Fahrschule Schwägerl · B197",
    "category": "Fahrschulen",
    "city": "München",
    "title": "Fahrschule Schwägerl · B197",
    "note": "Informationen zur B197-Ausbildung beim Anbieter.",
    "link": "https://www.fahrschule-schwaegerl.de/klasseb197"
  },
  {
    "id": "2026-11|Fahrschulen|Servus · Klasse B und B197",
    "category": "Fahrschulen",
    "city": "München",
    "title": "Servus · Klasse B und B197",
    "note": "Ausbildungsvarianten und Voraussetzungen bei Servus vergleichen.",
    "link": "https://fahrschule-servus.de/klasse-b-b197/"
  },
  {
    "id": "2026-11|Fahrschulen|Fahrwerkk · Anmeldung und Unterlagen",
    "category": "Fahrschulen",
    "city": "Neckarsulm",
    "title": "Fahrwerkk · Anmeldung und Unterlagen",
    "note": "Einstieg, Standortwahl und erforderliche Unterlagen beim Anbieter prüfen.",
    "link": "https://www.fahrwerkk-nsu.de/anmeldung-fahrschule-fahrwerkk-neckarsulm"
  },
  {
    "id": "2026-11|Fahrschulen|Fahrwerkk · Kontakt und Kursplanung",
    "category": "Fahrschulen",
    "city": "Neckarsulm",
    "title": "Fahrwerkk · Kontakt und Kursplanung",
    "note": "Kontakt zu den Standorten für Fragen zu Kursbeginn und Unterricht.",
    "link": "https://www.fahrwerkk-nsu.de/kontakt-fahrschule-fahrwerkk"
  },
  {
    "id": "2026-11|Fahrschulen|ACADEMY BKF · Kontakt und Filialen",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "ACADEMY BKF · Kontakt und Filialen",
    "note": "Anlaufstellen für berufliche Fahrerausbildung. Klassen und Standorte prüfen.",
    "link": "https://academy-bkf.com/kontakt/"
  },
  {
    "id": "2026-11|Vorteile|Back Market · Studierende",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Back Market · Studierende",
    "note": "Berechtigung und Rabatt auf das genaue refurbished Gerät prüfen.",
    "link": "https://www.backmarket.de/de-de/student-discount",
    "topic": "Technik",
    "kind": "Bildungspreis"
  },
  {
    "id": "2026-11|Vorteile|Logitech · Studentenprogramm",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Logitech · Studentenprogramm",
    "note": "Produkte, Verifizierung und Ausschlüsse des Programms vergleichen.",
    "link": "https://secure.logitech.com/de-de/programs/student-program",
    "topic": "Technik",
    "kind": "Bildungspreis"
  },
  {
    "id": "2026-11|Vorteile|ASUS Education Store",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "ASUS Education Store",
    "note": "Berechtigung und Endpreis des gewünschten Geräts prüfen.",
    "link": "https://www.asus.com/de/education-store/",
    "topic": "Technik",
    "kind": "Bildungspreis"
  },
  {
    "id": "2026-11|Vorteile|Microsoft Store · Studierendenrabatt",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Microsoft Store · Studierendenrabatt",
    "note": "Geräteangebote und Bedingungen prüfen. Microsoft 365 Education separat vergleichen.",
    "link": "https://www.microsoft.com/de-de/store/b/special-discount-terms",
    "topic": "Technik",
    "kind": "Bildungspreis"
  },
  {
    "id": "2026-11|Vorteile|OK1 · Lenovo Campus Shop",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "OK1 · Lenovo Campus Shop",
    "note": "Konkrete Campus-SKU und normalen Händlerpreis vergleichen.",
    "link": "https://ok1.de/",
    "topic": "Technik",
    "kind": "Bildungspreis"
  },
  {
    "id": "2026-11|Vorteile|Student Beans · Angebotsportal",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Student Beans · Angebotsportal",
    "note": "Land auf Deutschland stellen und Code-Bedingungen je Shop prüfen.",
    "link": "https://www.studentbeans.com/de",
    "topic": "Portale",
    "kind": "Wechselnde Aktionen"
  },
  {
    "id": "2026-11|Vorteile|GitKraken Student Pack",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "GitKraken Student Pack",
    "note": "Berechtigung und Laufzeit des Angebots beim Anbieter prüfen.",
    "link": "https://help.gitkraken.com/gk-dev/gk-dev-student-pack/",
    "topic": "Studium & Software",
    "kind": "Bildungszugang"
  },
  {
    "id": "2026-11|Vorteile|Unity Student",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Unity Student",
    "note": "Nachweis und zulässige Nutzung der Lizenz prüfen.",
    "link": "https://unity.com/products/unity-student",
    "topic": "Studium & Software",
    "kind": "Bildungszugang"
  },
  {
    "id": "2026-11|Vorteile|DataCamp · Classroom-Zugang",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "DataCamp · Classroom-Zugang",
    "note": "Kurszugang über eine teilnehmende Lehrperson prüfen.",
    "link": "https://support.datacamp.com/en-us/articles/17599041-classrooms-does-datacamp-offer-student-discounts",
    "topic": "Studium & Software",
    "kind": "Hochschulzugang"
  },
  {
    "id": "2026-11|Vorteile|Miro Education",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Miro Education",
    "note": "Berechtigung und Zusammenarbeit im Education-Plan prüfen.",
    "link": "https://miro.com/education-whiteboard/",
    "topic": "Studium & Software",
    "kind": "Bildungszugang"
  },
  {
    "id": "2026-11|Vorteile|Lucidchart · Education",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Lucidchart · Education",
    "note": "Verfügbarkeit für deine Hochschuladresse und enthaltene Funktionen prüfen.",
    "link": "https://lucid.co/lucidchart/use-cases/education",
    "topic": "Studium & Software",
    "kind": "Bildungszugang"
  },
  {
    "id": "2026-11|Vorteile|GitHub Copilot · Studierendenzugang",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "GitHub Copilot · Studierendenzugang",
    "note": "Verifizierung, Nutzungsgrenzen und enthaltene Funktionen im Pack prüfen.",
    "link": "https://education.github.com/pack",
    "topic": "Studium & Software",
    "kind": "Bildungszugang"
  },
  {
    "id": "2026-11|Vorteile|GitHub Codespaces · Studierendenangebot",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "GitHub Codespaces · Studierendenangebot",
    "note": "Aktuelle Inklusivnutzung und Limits im Pack nachlesen.",
    "link": "https://education.github.com/pack",
    "topic": "Studium & Software",
    "kind": "Cloud-Guthaben"
  },
  {
    "id": "2026-11|Vorteile|Deezer Student",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Deezer Student",
    "note": "Studierendenstatus, Verlängerung und aktueller Preis beim Anbieter.",
    "link": "https://www.deezer.com/de/offers/student",
    "topic": "Freizeit",
    "kind": "Abo"
  },
  {
    "id": "2026-11|Vorteile|Pinakothek der Moderne · Ermäßigungen",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Pinakothek der Moderne · Ermäßigungen",
    "note": "Nachweis und Gültigkeit für den konkreten Besuch prüfen.",
    "link": "https://www.pinakothek-der-moderne.de/sonderoeffnungszeiten-und-ermaessigungen/",
    "topic": "Freizeit",
    "kind": "Ermäßigung"
  },
  {
    "id": "2026-11|Vorteile|VGI · Deutschlandticket für Studierende",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "VGI · Deutschlandticket für Studierende",
    "note": "Hochschule, Tarifbedingungen und Nachweise vor der Bestellung prüfen.",
    "link": "https://www.vgi.de/Deutschlandticket_Studierende",
    "topic": "Mobilität",
    "kind": "Hochschulzugang"
  },
  {
    "id": "2026-11|Vorteile|MVV · Bayerisches Ermäßigungsticket",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "MVV · Bayerisches Ermäßigungsticket",
    "note": "Prüfen, ob du zur berechtigten Gruppe gehörst und wo du bestellen kannst.",
    "link": "https://www.mvv-muenchen.de/tickets-abos-preise/bayerisches-ermaessigungsticket",
    "topic": "Mobilität",
    "kind": "Hochschulzugang"
  },
  {
    "id": "2026-11|Vorteile|D-Ticket JugendBW",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "D-Ticket JugendBW",
    "note": "Alters- und Ausbildungsbedingungen für Baden-Württemberg prüfen.",
    "link": "https://vm.baden-wuerttemberg.de/de/mobilitaet-verkehr/bahn-und-bus/oepnv-angebot-fuer-reisende/unsere-tickets-und-tarife/alles-zum-d-ticket-jugendbw",
    "topic": "Mobilität",
    "kind": "Altersvorteil"
  },
  {
    "id": "2026-11|Vorteile|Studierendenwerk München · ÖPNV",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Studierendenwerk München · ÖPNV",
    "note": "Informationen zum aktuell angebotenen Ticket und zu berechtigten Studierenden prüfen.",
    "link": "https://www.studierendenwerk-muenchen-oberbayern.de/ueber-uns/semesterticketmuenchen/",
    "topic": "Mobilität",
    "kind": "Hochschulzugang"
  },
  {
    "id": "2026-11|Vorteile|Spotify · Bedingungen für das Studierendenabo",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Spotify · Bedingungen für das Studierendenabo",
    "note": "Verifizierung, Verlängerung und Änderungen in den deutschen Bedingungen nachlesen.",
    "link": "https://www.spotify.com/de/legal/student-offer-germany/",
    "topic": "Freizeit",
    "kind": "Abo-Bedingungen"
  }
];
const campusNeueFotos={
  "iPhone 16": {
    "url": "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-lineup-240909_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPhone 16 Plus": {
    "url": "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-lineup-240909_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPhone 16 Pro": {
    "url": "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPhone 16 Pro Max": {
    "url": "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPhone 15": {
    "url": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-color-lineup-230912_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPhone 15 Plus": {
    "url": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-color-lineup-230912_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPhone 15 Pro": {
    "url": "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPhone 15 Pro Max": {
    "url": "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPad Pro 11 (M4)": {
    "url": "https://www.apple.com/newsroom/images/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/article/Apple-iPad-Pro-Ultra-Retina-XDR-display-2-up-240507_inline.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPad Pro 13 (M4)": {
    "url": "https://www.apple.com/newsroom/images/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/article/Apple-iPad-Pro-Ultra-Retina-XDR-display-2-up-240507_inline.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPad Air 11 (M3)": {
    "url": "https://www.apple.com/newsroom/images/2025/03/apple-introduces-ipad-air-with-powerful-m3-chip-and-new-magic-keyboard/article/Apple-iPad-Air-hero-250304_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2025/03/apple-introduces-ipad-air-with-powerful-m3-chip-and-new-magic-keyboard/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "iPad Air 13 (M3)": {
    "url": "https://www.apple.com/newsroom/images/2025/03/apple-introduces-ipad-air-with-powerful-m3-chip-and-new-magic-keyboard/article/Apple-iPad-Air-hero-250304_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2025/03/apple-introduces-ipad-air-with-powerful-m3-chip-and-new-magic-keyboard/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "Apple Watch Series 11": {
    "url": "https://www.apple.com/newsroom/images/2025/09/apple-debuts-apple-watch-series-11-featuring-groundbreaking-health-insights/article/Apple-Watch-Series-11-health-features-250909_inline.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-apple-watch-series-11-featuring-groundbreaking-health-insights/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "Apple Watch Ultra 3": {
    "url": "https://www.apple.com/newsroom/images/2025/09/introducing-apple-watch-ultra-3/article/Apple-Watch-Ultra-3-hero-250909_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2025/09/introducing-apple-watch-ultra-3/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "Apple Watch Series 10": {
    "url": "https://www.apple.com/newsroom/images/2024/09/introducing-apple-watch-series-10/article/Apple-Watch-Series-10-profile-240909_big.jpg.large.jpg",
    "source": "https://www.apple.com/newsroom/2024/09/introducing-apple-watch-series-10/",
    "credit": "Modellreihe · Apple Newsroom"
  },
  "Trappenseeschloss": {
    "url": "https://cdn.prod.website-files.com/6798ee3a29869a43390bbdd5/68c1a211cf3bf94e4049ac48_Trappensee-mit-Trappenseeschloesschen-Heilbronn.jpg",
    "source": "https://cdn.prod.website-files.com/6798ee3a29869a43390bbdd5/68c1a211cf3bf94e4049ac48_Trappensee-mit-Trappenseeschloesschen-Heilbronn.jpg",
    "credit": "Trappensee · Bildquelle",
    "place": true
  },
  "Galaxy S25 Ultra": {
    "url": "https://cf-img-a-in.tosshub.com/lingo/btbz/images/story/202508/68ac2e0f4a8c1-google-pixel-10-pro-xl-vs-samsung-galaxy-s25-ultra-vs-apple-iphone-16-pro-max-253401411-16x9.jpg?size=690%3A388",
    "source": "https://cf-img-a-in.tosshub.com/lingo/btbz/images/story/202508/68ac2e0f4a8c1-google-pixel-10-pro-xl-vs-samsung-galaxy-s25-ultra-vs-apple-iphone-16-pro-max-253401411-16x9.jpg?size=690%3A388",
    "credit": "Vergleichsfoto mit mehreren Modellen · Business Today",
    "place": false
  },
  "Pixel 10 Pro XL": {
    "url": "https://cf-img-a-in.tosshub.com/lingo/btbz/images/story/202508/68ac2e0f4a8c1-google-pixel-10-pro-xl-vs-samsung-galaxy-s25-ultra-vs-apple-iphone-16-pro-max-253401411-16x9.jpg?size=690%3A388",
    "source": "https://cf-img-a-in.tosshub.com/lingo/btbz/images/story/202508/68ac2e0f4a8c1-google-pixel-10-pro-xl-vs-samsung-galaxy-s25-ultra-vs-apple-iphone-16-pro-max-253401411-16x9.jpg?size=690%3A388",
    "credit": "Vergleichsfoto mit mehreren Modellen · Business Today",
    "place": false
  },
  "Pixel Watch 4": {
    "url": "https://gadgetmtech.com/wp-content/uploads/2025/08/Google-Pixel-Watch-4-and-Pixel-Buds-2a.jpg",
    "source": "https://gadgetmtech.com/wp-content/uploads/2025/08/Google-Pixel-Watch-4-and-Pixel-Buds-2a.jpg",
    "credit": "Pixel Watch 4 mit Buds · GadgetMTech",
    "place": false
  }
};
