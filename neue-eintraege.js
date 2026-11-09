// Nach Kategorien gruppierte Ergänzungen. Vorhandene IDs für Merklisten beibehalten.
const campusErgaenzungen=[

  {
    "id": "bildung|Neckarsulm|1",
    "city": "Neckarsulm",
    "category": "Ausbildung",
    "title": "Audi Neckarsulm · Ausbildungsberufe",
    "segment": "Audi · Standort Neckarsulm",
    "note": "Ausbildungsberufe und Bewerbungsfristen beim Standort prüfen. Die Übersicht zeigt auch, welche Stellen für deinen Jahrgang ausgeschrieben sind.",
    "link": "https://www.audi.com/de/deine-ausbildung-in-neckarsulm-17491"
  },
  {
    "id": "bildung|Neckarsulm|2",
    "city": "Neckarsulm",
    "category": "Duales Studium",
    "title": "Audi · Duales Studium",
    "segment": "Audi · Standortwahl",
    "note": "Bachelorangebote, Praxisphasen und teilnehmende Standorte auf der Karriereseite vergleichen.",
    "link": "https://www.audi.com/de/duales-studium-17504"
  },
  {
    "id": "bildung|Neckarsulm|3",
    "city": "Neckarsulm",
    "category": "Duales Studium",
    "title": "Schwarz Gruppe · Wirtschaftsinformatik",
    "segment": "Schwarz Gruppe · Neckarsulm",
    "note": "Anbieterquelle für das duale Studium in Neckarsulm. Jahrgang, Bewerbungsfrist und Verfügbarkeit direkt prüfen.",
    "link": "https://jobs.schwarz/jobsearch/hr/duales-studium-wirtschaftsinformatik-2027-neckarsulm-m-w-d-GT5120"
  },
  {
    "id": "bildung|Neckarsulm|4",
    "city": "Neckarsulm",
    "category": "Studium",
    "title": "Wirtschaftsinformatik · Hochschule Heilbronn",
    "segment": "HHN · in der Region, Studienort prüfen",
    "note": "Hochschuloption im Raum Heilbronn. Studienort, Module und Zugangsvoraussetzungen vor der Bewerbung prüfen.",
    "link": "https://www.hs-heilbronn.de/de/wirtschaftsinformatik"
  },
  {
    "id": "bildung|Heilbronn|5",
    "city": "Heilbronn",
    "category": "Studium",
    "title": "Wirtschaftsinformatik · Hochschule Heilbronn",
    "segment": "Hochschule Heilbronn",
    "note": "Verknüpft Wirtschaft und Informatik. Studienort und Zugangsvoraussetzungen beim Studiengang prüfen.",
    "link": "https://www.hs-heilbronn.de/de/wirtschaftsinformatik"
  },
  {
    "id": "bildung|Heilbronn|6",
    "city": "Heilbronn",
    "category": "Studium",
    "title": "Information Engineering (B.Sc.) · TUM",
    "segment": "TUM Campus Heilbronn",
    "note": "Studiengang am Campus Heilbronn. Unterrichtssprache und Bewerbungsbedingungen nachlesen.",
    "link": "https://chn.tum.de/de/studiengaenge/bachelor-in-information-engineering"
  },
  {
    "id": "bildung|Heilbronn|7",
    "city": "Heilbronn",
    "category": "Duales Studium",
    "title": "Wirtschaftsinformatik · Data Science",
    "segment": "DHBW Heilbronn",
    "note": "Studieninhalte und Liste dualer Partner für Wirtschaftsinformatik und Datenanalyse prüfen.",
    "link": "https://www.heilbronn.dhbw.de/studium/bachelor-angebote/wirtschaftsinformatik-data-science/duale-partner-und-studienplaetze/"
  },
  {
    "id": "bildung|Heilbronn|8",
    "city": "Heilbronn",
    "category": "Ausbildung",
    "title": "Stadt Heilbronn · offene Ausbildungsstellen",
    "segment": "Stadt Heilbronn",
    "note": "Städtisches Bewerbungsportal mit veröffentlichten Ausschreibungen. Fachrichtung und Frist je Eintrag prüfen.",
    "link": "https://www.heilbronn.de/rathaus/karriere/ausbildungsangebote-1/offene-ausbildungsstellen.html"
  },
  {
    "id": "bildung|München|9",
    "city": "München",
    "category": "Studium",
    "title": "Wirtschaftsinformatik (B.Sc.) · TUM",
    "segment": "Technische Universität München",
    "note": "Bachelor-Infos zu Informatik, Wirtschaft und Bewerbungsverfahren.",
    "link": "https://www.cit.tum.de/cit/studium/studiengaenge/bachelor-wirtschaftsinformatik/"
  },
  {
    "id": "bildung|München|10",
    "city": "München",
    "category": "Studium",
    "title": "Informatik · LMU München",
    "segment": "Ludwig-Maximilians-Universität München",
    "note": "Studiengänge und Kombinationsmöglichkeiten beim Institut vergleichen.",
    "link": "https://www.ifi.lmu.de/studium/studiengaenge/"
  },
  {
    "id": "bildung|München|11",
    "city": "München",
    "category": "Duales Studium",
    "title": "Verbundstudium und vertiefte Praxis",
    "segment": "Hochschule München",
    "note": "Duale Modelle und Studienangebote vergleichen. Praxispartner und jeweilige Anforderungen prüfen.",
    "link": "https://hm.edu/studium_1/studienangebote_1/dual_1/Angebot_Verbundstudium_SmvP.de.html"
  },
  {
    "id": "bildung|München|12",
    "city": "München",
    "category": "Ausbildung",
    "title": "BMW Group · Ausbildungsstandort München",
    "segment": "BMW Group Werk München",
    "note": "Ausbildungsangebote für den Standort beim Arbeitgeber prüfen. Ausschreibungen sind jahrgangsabhängig.",
    "link": "https://www.bmwgroup.jobs/de/de/pupils/apprenticeship-locations/headquarters-plant-munich.html"
  },
  {
    "id": "bildung|Ingolstadt|13",
    "city": "Ingolstadt",
    "category": "Studium",
    "title": "Wirtschaftsinformatik (B.Sc.) · THI",
    "segment": "Technische Hochschule Ingolstadt",
    "note": "Module, Studienablauf und Bewerbung auf der offiziellen Studiengangsseite nachlesen.",
    "link": "https://www.thi.de/studium/studienangebote/details/wirtschaftsinformatik-bsc/"
  },
  {
    "id": "bildung|Ingolstadt|14",
    "city": "Ingolstadt",
    "category": "Studium",
    "title": "Digital Business (B.Sc.) · THI",
    "segment": "Technische Hochschule Ingolstadt",
    "note": "Alternative mit Schwerpunkt auf digitalen Geschäftsmodellen. Inhalte und Zugang prüfen.",
    "link": "https://www.thi.de/studium/studienangebote/details/digital-business-bsc/"
  },
  {
    "id": "bildung|Ingolstadt|15",
    "city": "Ingolstadt",
    "category": "Duales Studium",
    "title": "Duales Studium an der Fakultät Informatik",
    "segment": "Technische Hochschule Ingolstadt",
    "note": "Modelle und Praxispartner im Bereich Informatik kennenlernen.",
    "link": "https://www.thi.de/fakultaet-informatik/duales-studium-an-der-fakultaet-informatik/"
  },
  {
    "id": "bildung|Ingolstadt|16",
    "city": "Ingolstadt",
    "category": "Ausbildung",
    "title": "Audi Ingolstadt · Ausbildungsberufe",
    "segment": "Audi · Standort Ingolstadt",
    "note": "Berufe und Bewerbungsablauf am Standort prüfen. Verfügbarkeit je Ausbildungsjahr abgleichen.",
    "link": "https://www.audi.com/de/deine-ausbildung-in-ingolstadt-17490"
  },
  {
    "id": "reise-ausbau|Handys|iPhone 14",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 14",
    "note": "Gebrauchtoption. Akku, Anschluss und Update-Unterstützung prüfen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "reise-ausbau|Handys|iPhone 14 Plus",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 14 Plus",
    "note": "Größere 14er-Variante. Gewicht und Akkuzustand vergleichen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "reise-ausbau|Handys|iPhone 14 Pro",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 14 Pro",
    "note": "Pro-Vorgänger für die Gebraucht- und Refurbished-Suche.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "reise-ausbau|Handys|iPhone 14 Pro Max",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 14 Pro Max",
    "note": "Großes älteres Pro-Modell. Zustand und Reparaturhistorie prüfen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "reise-ausbau|Handys|iPhone 13",
    "category": "Handys",
    "city": "Überregional",
    "title": "iPhone 13",
    "note": "Älteres Standardmodell. Verbleibende Softwareunterstützung und Akku abgleichen.",
    "link": "https://www.apple.com/de/iphone/compare/",
    "ecosystems": [
      "apple"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "reise-ausbau|Tablets|Galaxy Tab A9",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab A9",
    "note": "Kompakt für Lesen und Videos. Zubehör separat prüfen.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "reise-ausbau|Tablets|Galaxy Tab A9+",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab A9+",
    "note": "Größere A9-Variante für Medien und geteilte Ansichten.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "reise-ausbau|Tablets|Galaxy Tab S9",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab S9",
    "note": "S-Reihe als Vergleich zu deinem Tab S9 FE. Display und Stift prüfen.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "reise-ausbau|Tablets|Galaxy Tab S9+",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab S9+",
    "note": "Größere S9-Variante. Maße und Hülle abgleichen.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "reise-ausbau|Tablets|Galaxy Tab S9 Ultra",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Galaxy Tab S9 Ultra",
    "note": "Großformat der S9-Reihe. Gewicht mit Tastatur beachten.",
    "link": "https://www.samsung.com/us/tablets/compare/",
    "ecosystems": [
      "galaxy",
      "android"
    ],
    "deviceType": "Tablet"
  },
  {
    "id": "reise-ausbau|Smart-Gadgets|Apple Watch Series 8",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Apple Watch Series 8",
    "note": "Ältere Apple Watch für kompatible iPhones. Akku und Unterstützung prüfen.",
    "link": "https://support.apple.com/de-de/guide/watch/apd2054d0d5b/watchos",
    "deviceType": "Smartwatch",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "reise-ausbau|Smart-Gadgets|AirPods (3. Generation)",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "AirPods (3. Generation)",
    "note": "Ältere AirPods. Auf Android ist Bluetooth-Audio mit weniger Extras möglich.",
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
    "id": "reise-ausbau|Smart-Gadgets|Apple TV 4K",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Apple TV 4K",
    "note": "Für HDMI-Fernseher. Apple-Konto und gewünschte Apps prüfen.",
    "link": "https://www.apple.com/de/apple-tv-4k/",
    "deviceType": "Streaming",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "reise-ausbau|Smart-Gadgets|HomePod",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "HomePod",
    "note": "Größerer Apple-Lautsprecher. Voraussetzungen für die Einrichtung beim Hersteller prüfen.",
    "link": "https://www.apple.com/de/homepod/",
    "deviceType": "Smart Home",
    "ecosystems": [
      "apple"
    ]
  },
  {
    "id": "reise-ausbau|Smart-Gadgets|Garmin Forerunner 165",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Garmin Forerunner 165",
    "note": "Laufuhr für Garmin Connect. App- und Telefonkompatibilität prüfen.",
    "link": "https://www.garmin.com/de-DE/p/1055469/",
    "deviceType": "Sportuhr",
    "ecosystems": [
      "apple",
      "galaxy",
      "pixel",
      "android"
    ]
  },
  {
    "id": "reise-ausbau|Wohnen|meinestadt.de · Studentisches Wohnen",
    "category": "Wohnen",
    "city": "Neckarsulm",
    "title": "meinestadt.de · Studentisches Wohnen",
    "note": "Wohnungs- und WG-Suche für Studierende in Neckarsulm.",
    "link": "https://www.meinestadt.de/neckarsulm/immobilien/wohnen-studium"
  },
  {
    "id": "reise-ausbau|Wohnen|Welcome Center · Wohnen in der Region",
    "category": "Wohnen",
    "city": "Heilbronn",
    "title": "Welcome Center · Wohnen in der Region",
    "note": "Orientierung zum Mietmarkt und zu Wohnungsunterlagen.",
    "link": "https://www.welcomecenter-heilbronn-franken.eu/en/internationals/living.html"
  },
  {
    "id": "reise-ausbau|Wohnen|München Modell · Mietwohnungen",
    "category": "Wohnen",
    "city": "München",
    "title": "München Modell · Mietwohnungen",
    "note": "Zugang und Einkommensvoraussetzungen der Stadt prüfen.",
    "link": "https://stadt.muenchen.de/infos/muenchen-modell-miete.html"
  },
  {
    "id": "reise-ausbau|Wohnen|ImmoScout24 · WG-Zimmer Ingolstadt",
    "category": "Wohnen",
    "city": "Ingolstadt",
    "title": "ImmoScout24 · WG-Zimmer Ingolstadt",
    "note": "WG-Zimmer, Lage und Einzugsdatum vergleichen.",
    "link": "https://www.immobilienscout24.de/Suche/de/bayern/ingolstadt/wg-zimmer"
  },
  {
    "id": "reise-ausbau|Wohnen|TUM · Wohnen für Studierende",
    "category": "Wohnen",
    "city": "München",
    "title": "TUM · Wohnen für Studierende",
    "note": "Hochschulübersicht zu Suchwegen und Unterstützung.",
    "link": "https://www.tum.de/studium/im-studium/wohnen-und-arbeiten/wohnen"
  },
  {
    "id": "reise-ausbau|Autos|Audi Q5 Sportback",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi Q5 Sportback",
    "note": "Coupé-SUV. Ladefläche und Mitarbeiter-Endpreis mit dem Q5 vergleichen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "reise-ausbau|Autos|Audi Q3 Sportback",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi Q3 Sportback",
    "note": "Sportback-Variante. Sitzposition und Kofferraum abgleichen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "reise-ausbau|Autos|Audi A6 Avant e-tron",
    "category": "Autos",
    "city": "Überregional",
    "title": "Audi A6 Avant e-tron",
    "note": "Elektrischer Kombi. Lademöglichkeit und Ausstattung prüfen.",
    "link": "https://www.audi.de/de/neuwagen/",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.audi.de/de/gebrauchtwagenboerse/"
  },
  {
    "id": "reise-ausbau|Autos|VW ID. Buzz",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW ID. Buzz",
    "note": "Elektrischer Bus. Ladebedarf und Stauraum vergleichen.",
    "link": "https://www.volkswagen-nutzfahrzeuge.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "reise-ausbau|Autos|VW California",
    "category": "Autos",
    "city": "Überregional",
    "title": "VW California",
    "note": "Campingfahrzeug für Reisen. Alltagstauglichkeit und Gesamtkosten prüfen.",
    "link": "https://www.volkswagen-nutzfahrzeuge.de/de/modelle.html",
    "staff": true,
    "usedOnly": false,
    "segment": "Neu und gebraucht",
    "used": "https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html"
  },
  {
    "id": "reise-ausbau|Fahrschulen|Rausch · Intensivkurs",
    "category": "Fahrschulen",
    "city": "München",
    "title": "Rausch · Intensivkurs",
    "note": "Kursformat, Plätze und Voraussetzungen auf der Anbieterseite prüfen.",
    "link": "https://www.fahrschule-rausch.de/"
  },
  {
    "id": "reise-ausbau|Fahrschulen|S.O.S. · Fahrschulwechsel",
    "category": "Fahrschulen",
    "city": "Ingolstadt",
    "title": "S.O.S. · Fahrschulwechsel",
    "note": "Infos zum Wechsel bei bereits begonnener Ausbildung.",
    "link": "https://sos-fahrschule.de/"
  },
  {
    "id": "reise-ausbau|Fahrschulen|Dexheimer · Filialen und Kursplanung",
    "category": "Fahrschulen",
    "city": "Heilbronn",
    "title": "Dexheimer · Filialen und Kursplanung",
    "note": "Anbieterübersicht für Standorte und Theoriezeiten im Umkreis.",
    "link": "https://www.fahrschule-dexheimer.de/fahrschule/filialen"
  },
  {
    "id": "reise-ausbau|Fahrschulen|Fahrwerkk · Klassenübersicht",
    "category": "Fahrschulen",
    "city": "Neckarsulm",
    "title": "Fahrwerkk · Klassenübersicht",
    "note": "Vor der Anmeldung passende Klasse und Standort prüfen.",
    "link": "https://www.fahrwerkk-nsu.de/"
  },
  {
    "id": "reise-ausbau|Fahrschulen|Peters · Kontakt und Anfahrt",
    "category": "Fahrschulen",
    "city": "München",
    "title": "Peters · Kontakt und Anfahrt",
    "note": "Unterrichtsort, Beratung und Erreichbarkeit beim Anbieter abgleichen.",
    "link": "https://petersfahrschule.de/kontakt/"
  },
  {
    "id": "reise-ausbau|Studienstart|OpenHPI · Kurse",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "OpenHPI · Kurse",
    "note": "Online-Kurse zu Informatik, Daten und digitalen Grundlagen recherchieren.",
    "link": "https://open.hpi.de/courses"
  },
  {
    "id": "reise-ausbau|Studienstart|Python · Virtuelle Umgebungen",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Python · Virtuelle Umgebungen",
    "note": "Projektabhängigkeiten in getrennten Umgebungen verwalten.",
    "link": "https://docs.python.org/3/tutorial/venv.html"
  },
  {
    "id": "reise-ausbau|Studienstart|Apache Arrow · Python",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "Apache Arrow · Python",
    "note": "Spaltenformate und Parquet für Datenprojekte kennenlernen.",
    "link": "https://arrow.apache.org/docs/python/"
  },
  {
    "id": "reise-ausbau|Studienstart|dbt · Dokumentation",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "dbt · Dokumentation",
    "note": "SQL-Transformationen dokumentieren und testen.",
    "link": "https://docs.getdbt.com/docs/introduction"
  },
  {
    "id": "reise-ausbau|Studienstart|GitHub Docs · Markdown",
    "category": "Studienstart",
    "city": "Überregional",
    "title": "GitHub Docs · Markdown",
    "note": "Projektberichte und README-Dateien strukturieren.",
    "link": "https://docs.github.com/de/get-started/writing-on-github"
  },
  {
    "id": "reise-ausbau|Vorteile|Deutsches Museum · Eintritt und Ermäßigung",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Deutsches Museum · Eintritt und Ermäßigung",
    "note": "Ermäßigungsnachweis und Preis für deinen Besuch direkt prüfen.",
    "link": "https://www.deutsches-museum.de/museumsinsel/besuch",
    "topic": "Freizeit",
    "kind": "Ermäßigung prüfen"
  },
  {
    "id": "reise-ausbau|Vorteile|Lenbachhaus · Besuch und Tickets",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Lenbachhaus · Besuch und Tickets",
    "note": "Ticketarten und mögliche Ermäßigungen beim Museum vergleichen.",
    "link": "https://www.lenbachhaus.de/besuch",
    "topic": "Freizeit",
    "kind": "Ermäßigung prüfen"
  },
  {
    "id": "reise-ausbau|Vorteile|DB · D-Ticket für Ausbildung und Studium",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "DB · D-Ticket für Ausbildung und Studium",
    "note": "Regionale Angebote und Bedingungen nachlesen.",
    "link": "https://www.bahn.de/faq/deutschland-ticket-schueler-azubis",
    "topic": "Mobilität",
    "kind": "Bedingungen prüfen"
  },
  {
    "id": "reise-ausbau|Vorteile|Apple · Bildungsangebote im Überblick",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Apple · Bildungsangebote im Überblick",
    "note": "Bildungspreise und Berechtigungsnachweise für Geräte und Dienste prüfen.",
    "link": "https://www.apple.com/de/education/college-students/",
    "topic": "Technik",
    "kind": "Bedingungen prüfen"
  },
  {
    "id": "reise-ausbau|Vorteile|Cisco Networking Academy",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Cisco Networking Academy",
    "note": "Kurskatalog für Netzwerk- und IT-Grundlagen. Gebühren je Kurs prüfen.",
    "link": "https://www.netacad.com/",
    "topic": "Studium & Software",
    "kind": "Bedingungen prüfen"
  },
  {
    "id": "reise-ausbau|Aktivitäten|Neckarsulm · Städtische Freizeittipps",
    "category": "Aktivitäten",
    "city": "Neckarsulm",
    "title": "Neckarsulm · Städtische Freizeittipps",
    "note": "Lokale Freizeitorte und Ausflugsideen bei der Stadt entdecken.",
    "link": "https://www.neckarsulm.de/startseite/willkommen/freizeittipps.html",
    "activity": "Kultur"
  },
  {
    "id": "reise-ausbau|Aktivitäten|Heilbronn · Städtische Museen",
    "category": "Aktivitäten",
    "city": "Heilbronn",
    "title": "Heilbronn · Städtische Museen",
    "note": "Ausstellungen und Programme der städtischen Museen vergleichen.",
    "link": "https://museen.heilbronn.de/",
    "activity": "Kultur"
  },
  {
    "id": "reise-ausbau|Aktivitäten|München · Spaziergänge",
    "category": "Aktivitäten",
    "city": "München",
    "title": "München · Spaziergänge",
    "note": "Städtische Routen für einen unkomplizierten Ausflug aussuchen.",
    "link": "https://www.muenchen.de/freizeit/tipps-fuer-spaziergaenge",
    "activity": "Draußen"
  },
  {
    "id": "reise-ausbau|Aktivitäten|Audi Forum · Sonderausstellungen",
    "category": "Aktivitäten",
    "city": "Ingolstadt",
    "title": "Audi Forum · Sonderausstellungen",
    "note": "Aktuelle Sonderausstellungen und Termine beim Audi Forum nachsehen.",
    "link": "https://www.audi.de/audi-forum-ingolstadt/de/ausstellungen/",
    "activity": "Technik"
  },
  {
    "id": "reise-ausbau|Aktivitäten|Ingolstädter Bläser · Konzerte",
    "category": "Aktivitäten",
    "city": "Ingolstadt",
    "title": "Ingolstädter Bläser · Konzerte",
    "note": "Programm und Termine auf der städtischen Veranstaltungsseite prüfen.",
    "link": "https://www.ingolstadt.de/Kultur/Veranstaltungen/Musik-Konzerte/Ingolst%C3%A4dter-Bl%C3%A4ser/",
    "activity": "Kultur"
  },
  {
    "id": "reise-ausbau|ÖPNV & Pendeln|Zartmann · Fahrpreise und Linien",
    "category": "ÖPNV & Pendeln",
    "city": "Neckarsulm",
    "title": "Zartmann · Fahrpreise und Linien",
    "note": "Infos des regionalen Busunternehmens zur konkreten Fahrt prüfen.",
    "link": "https://buszartmann.de/fahrpreise"
  },
  {
    "id": "reise-ausbau|ÖPNV & Pendeln|Heilbronn · HNV-Fahrpreise 2026",
    "category": "ÖPNV & Pendeln",
    "city": "Heilbronn",
    "title": "Heilbronn · HNV-Fahrpreise 2026",
    "note": "Dokumentierten Preisstand und Gültigkeit für die geplante Fahrt prüfen.",
    "link": "https://www.h3nv.de/fileadmin/pdf/fahrplanwechsel/fahrplan2026/fahrpreise_01-2026_vorabinfo.pdf"
  },
  {
    "id": "reise-ausbau|ÖPNV & Pendeln|MVV-App",
    "category": "ÖPNV & Pendeln",
    "city": "München",
    "title": "MVV-App",
    "note": "Verbindungen und Tickets in der App des Verbunds planen.",
    "link": "https://www.mvv-muenchen.de/fahrt-planen/mvv-app"
  },
  {
    "id": "reise-ausbau|ÖPNV & Pendeln|Studierendenwerk · Verkehr in München",
    "category": "ÖPNV & Pendeln",
    "city": "München",
    "title": "Studierendenwerk · Verkehr in München",
    "note": "Hinweise zu ÖPNV-Angeboten für Studierende und zum Bestellweg.",
    "link": "https://www.studierendenwerk-muenchen-oberbayern.de/ueber-uns/semesterticketmuenchen/"
  },
  {
    "id": "reise-ausbau|ÖPNV & Pendeln|DB Regio · München–Nürnberg-Express",
    "category": "ÖPNV & Pendeln",
    "city": "Ingolstadt",
    "title": "DB Regio · München–Nürnberg-Express",
    "note": "Regionalverkehr auf der Strecke recherchieren. Zeiten separat in der Fahrtauskunft prüfen.",
    "link": "https://regional.bahn.de/regionen/bayern/ueber-uns/wir-und-unsere-partner/ring_west_teilnetz"
  },
  {
    "id": "reiseideen|Bad Wimpfen · Altstadt und Neckar",
    "category": "Reiseideen",
    "city": "Neckarsulm",
    "title": "Bad Wimpfen · Altstadt und Neckar",
    "note": "Ein Tagesausflug mit Altstadt, Aussicht und Spaziergang am Fluss.",
    "link": "https://www.badwimpfen.de/gaeste-bereich/freizeit-geniessen/wandern/spaziergang-am-neckar",
    "plan": [
      "Vormittags mit dem Nahverkehr nach Bad Wimpfen und durch die Fachwerk-Altstadt laufen.",
      "Mittags mit mitgebrachtem Proviant Pause machen.",
      "Nachmittags die Neckarrunde gehen und vor der Rückfahrt den Fahrplan prüfen."
    ],
    "tripCap": 25,
    "segment": "Tagesausflug"
  },
  {
    "id": "reiseideen|Heidelberg · Altstadt und Alte Brücke",
    "category": "Reiseideen",
    "city": "Heilbronn",
    "title": "Heidelberg · Altstadt und Alte Brücke",
    "note": "Ein Tag am Neckar. Die Route bleibt auch ohne Schlossticket abwechslungsreich.",
    "link": "https://www.heidelberg-marketing.de/entdecken",
    "plan": [
      "Vormittags die Regionalverbindung prüfen und in der Altstadt starten.",
      "Mittags an der Alten Brücke oder am Neckar eine Proviantpause einlegen.",
      "Nachmittags am Fluss spazieren. Schlossbesuch nur ergänzen, wenn der Eintritt ins Budget passt."
    ],
    "tripCap": 35,
    "segment": "Tagesausflug"
  },
  {
    "id": "reiseideen|Augsburg · Altstadt zu Fuß",
    "category": "Reiseideen",
    "city": "München",
    "title": "Augsburg · Altstadt zu Fuß",
    "note": "Regionalzug und ein selbst geführter Stadtspaziergang mit optionalem Fuggerei-Besuch.",
    "link": "https://www.augsburg-tourismus.de/de/aktivitaeten/stadtspaziergaenge",
    "plan": [
      "Vormittags zum Rathausplatz und in die Altstadt gehen.",
      "Mittags eine Pause mit Proviant oder einem einfachen Imbiss einplanen.",
      "Nachmittags die Altstadtrunde fortsetzen oder bei Budgetspielraum die Fuggerei besuchen. Rückfahrt prüfen."
    ],
    "tripCap": 35,
    "segment": "Tagesausflug"
  },
  {
    "id": "reiseideen|Regensburg · Steinerne Brücke und Donau",
    "category": "Reiseideen",
    "city": "Ingolstadt",
    "title": "Regensburg · Steinerne Brücke und Donau",
    "note": "Ein Tagesausflug mit Uferwegen und Altstadt, den du zu Fuß planen kannst.",
    "link": "https://tourismus.regensburg.de/erleben-entdecken/sehenswuerdigkeiten-unesco-welterbe/steinerne-bruecke",
    "plan": [
      "Vormittags eine passende Regionalverbindung nach Regensburg suchen.",
      "Von der Altstadt zur Steinernen Brücke gehen und am Wasser Pause machen.",
      "Nachmittags die andere Donauseite erkunden und zum Bahnhof zurücklaufen."
    ],
    "tripCap": 35,
    "segment": "Tagesausflug"
  },
  {
    "id": "reiseideen|Nürnberg · Altstadt und Burgviertel",
    "category": "Reiseideen",
    "city": "Ingolstadt",
    "title": "Nürnberg · Altstadt und Burgviertel",
    "note": "Stadtrundgang auf eigene Faust. Kostenpflichtige Burgbereiche sind optional.",
    "link": "https://tourismus.nuernberg.de/stadtfuehrung/rundgang-auf-eigene-faust-spaziergang-durch-die-altstadt/",
    "plan": [
      "Vormittags die Fahrt nach Nürnberg prüfen und am Hauptbahnhof in die Altstadt starten.",
      "Mittags an der Pegnitz Pause machen. Proviant hält den Essensposten planbar.",
      "Nachmittags Richtung Kaiserburg laufen. Innenbesichtigung und Rückfahrt nach Zeit und Budget wählen."
    ],
    "tripCap": 40,
    "segment": "Tagesausflug"
  },
  {
    "id": "unterkunft|Neckarsulm|Welcome Hotel Neckarsulm",
    "category": "Unterkünfte",
    "city": "Neckarsulm",
    "title": "Welcome Hotel Neckarsulm",
    "note": "Hotel im Stadtgebiet. Gesamtpreis für deinen Termin und Anfahrt zur Praxisstelle prüfen.",
    "link": "https://www.welcome-hotels.com/hotels/neckarsulm/",
    "segment": "Hotel"
  },
  {
    "id": "unterkunft|Neckarsulm|Hotel An der Linde",
    "category": "Unterkünfte",
    "city": "Neckarsulm",
    "title": "Hotel An der Linde",
    "note": "Hotel in Neckarsulm. Zimmer, Verpflegung und Anreise beim Anbieter prüfen.",
    "link": "https://an-der-linde.de/Hotel/",
    "segment": "Hotel"
  },
  {
    "id": "unterkunft|Neckarsulm|Stadthaus Neckarsulm",
    "category": "Unterkünfte",
    "city": "Neckarsulm",
    "title": "Stadthaus Neckarsulm",
    "note": "Möblierte Serviced Apartments. Mindestaufenthalt und Ausstattung erfragen.",
    "link": "https://www.stadthaus-neckarsulm.de/",
    "segment": "Apartment / Ferienwohnung"
  },
  {
    "id": "unterkunft|Neckarsulm|Sperrfechter Freizeitpark · Oedheim",
    "category": "Unterkünfte",
    "city": "Neckarsulm",
    "title": "Sperrfechter Freizeitpark · Oedheim",
    "note": "Camping im Umkreis. Saison, Zeltplatz und Fahrt nach Neckarsulm vorab prüfen.",
    "link": "https://www.sperrfechter-freizeit.de/home.html",
    "segment": "Camping"
  },
  {
    "id": "unterkunft|Heilbronn|DJH Jugendherberge Heilbronn",
    "category": "Unterkünfte",
    "city": "Heilbronn",
    "title": "DJH Jugendherberge Heilbronn",
    "note": "Zimmerart, Mitgliedschaft und enthaltene Mahlzeiten für deinen Termin prüfen.",
    "link": "https://www.jugendherberge.de/jugendherbergen/heilbronn/",
    "segment": "Jugendherberge / Hostel"
  },
  {
    "id": "unterkunft|Heilbronn|Boardinghouse Heilbronn",
    "category": "Unterkünfte",
    "city": "Heilbronn",
    "title": "Boardinghouse Heilbronn",
    "note": "Apartment-Unterkunft im Stadtgebiet. Ausstattung und Mindestdauer direkt klären.",
    "link": "https://boardinghouse-heilbronn.de/index.html",
    "segment": "Apartment / Ferienwohnung"
  },
  {
    "id": "unterkunft|Heilbronn|Winzercafé Neipperg · Ferienwohnungen",
    "category": "Unterkünfte",
    "city": "Heilbronn",
    "title": "Winzercafé Neipperg · Ferienwohnungen",
    "note": "Ferienwohnung im Umland. Für einen kurzen Aufenthalt Erreichbarkeit und Mindestdauer prüfen.",
    "link": "https://www.heilbronnerland.de/poi/ferienwohnungen-winzercafe-neipperg",
    "segment": "Apartment / Ferienwohnung"
  },
  {
    "id": "unterkunft|Heilbronn|Campingpark Breitenauer See · Umland",
    "category": "Unterkünfte",
    "city": "Heilbronn",
    "title": "Campingpark Breitenauer See · Umland",
    "note": "Camping außerhalb der Stadt. Saison, Stellplatz und Nahverkehr vorab prüfen.",
    "link": "https://www.heilbronnerland.de/poi/5-sterne-campingpark-breitenauer-see",
    "segment": "Camping"
  },
  {
    "id": "unterkunft|München|DJH Jugendherberge München City",
    "category": "Unterkünfte",
    "city": "München",
    "title": "DJH Jugendherberge München City",
    "note": "Stadtunterkunft. Zimmeraufteilung, Mitgliedschaft und verfügbare Termine prüfen.",
    "link": "https://www.jugendherberge.de/jugendherbergen/muenchen-city/",
    "segment": "Jugendherberge / Hostel"
  },
  {
    "id": "unterkunft|München|THE TENT München",
    "category": "Unterkünfte",
    "city": "München",
    "title": "THE TENT München",
    "note": "Saisonales Angebot mit unterschiedlichen Schlafmöglichkeiten. Öffnung und Buchungsbedingungen prüfen.",
    "link": "https://www.the-tent.com/",
    "segment": "Jugendherberge / Hostel"
  },
  {
    "id": "unterkunft|München|Campingplatz München-Thalkirchen",
    "category": "Unterkünfte",
    "city": "München",
    "title": "Campingplatz München-Thalkirchen",
    "note": "Stadtcamping. Öffnungszeiten, Stellplätze und Anbindung vorab nachsehen.",
    "link": "https://campingplatz-thalkirchen.de/?lang=en",
    "segment": "Camping"
  },
  {
    "id": "unterkunft|München|AINO Aparthotel München",
    "category": "Unterkünfte",
    "city": "München",
    "title": "AINO Aparthotel München",
    "note": "Aparthotel in Neuhausen-Nymphenburg. Zimmerausstattung und Preis zum Termin prüfen.",
    "link": "https://www.aino-aparthotel.de/",
    "segment": "Apartment / Ferienwohnung"
  },
  {
    "id": "unterkunft|Ingolstadt|DJH Jugendherberge Ingolstadt",
    "category": "Unterkünfte",
    "city": "Ingolstadt",
    "title": "DJH Jugendherberge Ingolstadt",
    "note": "Zimmer und Verpflegung beim Betreiber prüfen. Mitgliedschaft bei der Kalkulation beachten.",
    "link": "https://www.jugendherberge.de/jugendherbergen/ingolstadt/",
    "segment": "Jugendherberge / Hostel"
  },
  {
    "id": "unterkunft|Ingolstadt|B&B HOTEL Ingolstadt-Hbf",
    "category": "Unterkünfte",
    "city": "Ingolstadt",
    "title": "B&B HOTEL Ingolstadt-Hbf",
    "note": "Hotel am Hauptbahnhof. Gesamtpreis für Datum und Zimmerbelegung prüfen.",
    "link": "https://www.hotel-bb.com/de/hotel/ingolstadt-hbf",
    "segment": "Hotel"
  },
  {
    "id": "unterkunft|Ingolstadt|INhouse Boardinghouse",
    "category": "Unterkünfte",
    "city": "Ingolstadt",
    "title": "INhouse Boardinghouse",
    "note": "Apartment-Unterkunft auf Zeit. Aufenthaltsdauer und Ausstattung anfragen.",
    "link": "https://www.inhouse-boardinghouse.de/",
    "segment": "Apartment / Ferienwohnung"
  },
  {
    "id": "unterkunft|Ingolstadt|AZUR Camp Auwaldsee",
    "category": "Unterkünfte",
    "city": "Ingolstadt",
    "title": "AZUR Camp Auwaldsee",
    "note": "Camping am Auwaldsee. Saison, Platzart und Zuschläge beim Betreiber prüfen.",
    "link": "https://www.azur-camping.com/de/camp/Camp-Auwaldsee",
    "segment": "Camping"
  },
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
  },
  "Bad Wimpfen · Altstadt und Neckar": {
    "url": "https://gruppenreisen.tourismus-bw.de/wp-content/uploads/sites/2/job-manager-uploads/featured_image/2023/02/2022_Bad-Wimpfen-Panorama_Be_Ausschnitt.jpg",
    "source": "https://gruppenreisen.tourismus-bw.de/wp-content/uploads/sites/2/job-manager-uploads/featured_image/2023/02/2022_Bad-Wimpfen-Panorama_Be_Ausschnitt.jpg",
    "credit": "Tourismus Baden-Württemberg",
    "place": true
  },
  "Heidelberg · Altstadt und Alte Brücke": {
    "url": "https://www.jobcenter-hd.de/fileadmin/_processed_/1/0/csm_header-heidelberg_123cee1253.jpg",
    "source": "https://www.jobcenter-hd.de/fileadmin/_processed_/1/0/csm_header-heidelberg_123cee1253.jpg",
    "credit": "Jobcenter Heidelberg · Stadtansicht",
    "place": true
  },
  "Augsburg · Altstadt zu Fuß": {
    "url": "https://www.radio-augsburg.de/storage/thumbs/1275x/nqp4ws3xbriwm.webp",
    "source": "https://www.radio-augsburg.de/storage/thumbs/1275x/nqp4ws3xbriwm.webp",
    "credit": "Radio Augsburg · Rathaus und Perlachturm",
    "place": true
  },
  "Regensburg · Steinerne Brücke und Donau": {
    "url": "https://www.denkmalschutz.de/fileadmin/media/Bilder/Objekte/BY/id6517_regensburg_bruecke3_rossner.jpg",
    "source": "https://www.denkmalschutz.de/fileadmin/media/Bilder/Objekte/BY/id6517_regensburg_bruecke3_rossner.jpg",
    "credit": "Deutsche Stiftung Denkmalschutz · Foto Rössner",
    "place": true
  },
  "Nürnberg · Altstadt und Burgviertel": {
    "url": "https://www.hotelvictoria.de/fileadmin/_processed_/6/b/csm_altstadtpanorama-nuernberg-mit-kaiserburg_uwe-niklas_000341_1400x560_36de7fd1f5.jpg",
    "source": "https://www.hotelvictoria.de/fileadmin/_processed_/6/b/csm_altstadtpanorama-nuernberg-mit-kaiserburg_uwe-niklas_000341_1400x560_36de7fd1f5.jpg",
    "credit": "Uwe Niklas · Hotel Victoria",
    "place": true
  },
  "Welcome Hotel Neckarsulm": {
    "url": "https://www.welcome-hotels.com/site/assets/files/20472/welcome_hotel_neckarsulm_classic_4k.2560x988.jpg",
    "source": "https://www.welcome-hotels.com/hotels/neckarsulm/",
    "credit": "Welcome Hotels · Zimmerbeispiel",
    "place": true
  },
  "Stadthaus Neckarsulm": {
    "url": "https://static.wixstatic.com/media/fcda6c_b72b83d3c0b948a995a0c70960e234d1~mv2.jpg/v1/fill/w_492%2Ch_369%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/fcda6c_b72b83d3c0b948a995a0c70960e234d1~mv2.jpg",
    "source": "https://www.stadthaus-neckarsulm.de/",
    "credit": "Stadthaus Neckarsulm · Apartmentbeispiel",
    "place": true
  },
  "DJH Jugendherberge Heilbronn": {
    "url": "https://photos.bringfido.com/lodging/9/4/7/1722749/1722749_54614707.jpg?density=2x&size=full",
    "source": "https://photos.bringfido.com/lodging/9/4/7/1722749/1722749_54614707.jpg?density=2x&size=full",
    "credit": "BringFido · Außenansicht",
    "place": true
  },
  "DJH Jugendherberge München City": {
    "url": "https://www.tz.de/bilder/2023/03/03/92121376/31142823-die-2022-neu-eroeffnete-jugendherberge-am-winthirplatz-in-muenchen-3T7a.jpg",
    "source": "https://www.tz.de/bilder/2023/03/03/92121376/31142823-die-2022-neu-eroeffnete-jugendherberge-am-winthirplatz-in-muenchen-3T7a.jpg",
    "credit": "tz · Außenansicht",
    "place": true
  }
};
