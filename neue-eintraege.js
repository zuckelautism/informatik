// Nach Kategorien gruppierte Ergänzungen. Vorhandene IDs für Merklisten beibehalten.
const campusErgaenzungen=[
{
  "id": "stadt-weg|Ingolstadt|Ausbildung|Audi Ingolstadt · Kraftfahrzeugmechatronikerin oder Kraftfahrzeugmechatroniker 2027",
  "city": "Ingolstadt",
  "category": "Ausbildung",
  "title": "Audi Ingolstadt · Kraftfahrzeugmechatronikerin oder Kraftfahrzeugmechatroniker 2027",
  "note": "Audi nennt für den Beruf mindestens einen qualifizierenden Mittelschulabschluss. Die Ausschreibung nennt den 1. September 2027 als Start. Prüfe den aktuellen Bewerbungsstatus.",
  "link": "https://audi.bewerbernavigator.de/boi/bew2?project=audi&rubric=Ausbildung+Ingolstadt&screenflow=0&sid=18337",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Ingolstadt|Studienstart|TH Ingolstadt · Schnupperwochen",
  "city": "Ingolstadt",
  "category": "Studienstart",
  "title": "TH Ingolstadt · Schnupperwochen",
  "note": "Wähle eine Vorlesung und prüfe den nächsten angebotenen Termin und die Anmeldung.",
  "link": "https://www.thi.de/studium/beratungsangebote-an-der-thi/beratung-fuer-studieninteressierte/veranstaltungen-fuer-studieninteressierte/schnupperwochen/"
},
{
  "id": "stadt-weg|Ingolstadt|Wohnen|TH Ingolstadt · Marketplace",
  "city": "Ingolstadt",
  "category": "Wohnen",
  "title": "TH Ingolstadt · Marketplace",
  "note": "Prüfe Wohnangebote parallel zur Wohnheimbewerbung und frage die aktuelle Verfügbarkeit beim Anbieter an.",
  "link": "https://www.thi.de/service/marketplace/"
},
{
  "id": "stadt-weg|Jena|Ausbildung|Stadtwerke Jena · Fachinformatikerin oder Fachinformatiker für Systemintegration",
  "city": "Jena",
  "category": "Ausbildung",
  "title": "Stadtwerke Jena · Fachinformatikerin oder Fachinformatiker für Systemintegration",
  "note": "Das Berufsprofil erklärt den Einstieg in die Systemintegration. Prüfe Zugang, Arbeitsort und Ausbildungsablauf.",
  "link": "https://www.stadtwerke-jena.de/karriere/ausbildung-und-praktikum/alle-ausbildungsberufe/fachinformatiker--m-w-d--fuer-systemintegration.html",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Jena|Ausbildung|Stadtwerke Jena · Fachinformatikerin oder Fachinformatiker für Systemintegration 2027",
  "city": "Jena",
  "category": "Ausbildung",
  "title": "Stadtwerke Jena · Fachinformatikerin oder Fachinformatiker für Systemintegration 2027",
  "note": "Die Ausschreibung nennt Realschulabschluss oder Abitur, den Ausbildungsort Jena und den 9. August 2027 als Beginn. Prüfe den Bewerbungsstatus beim Arbeitgeber.",
  "link": "https://stadtwerke-jena-gruppe.dvinci.de/de/jobs/41719/ausbildung-als-fachinformatiker-mwd-fur-systemintegration",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Jena|Wohnen|Universität Jena · Eine Wohnung finden",
  "city": "Jena",
  "category": "Wohnen",
  "title": "Universität Jena · Eine Wohnung finden",
  "note": "Prüfe die Wohnalternativen und privaten Suchmöglichkeiten parallel zum Wohnheim.",
  "link": "https://www.uni-jena.de/59378/eine-wohnung-finden-in-jena"
},
{
  "id": "stadt-weg|Jena|Studienstart|Universität Jena · Schnupperstudium",
  "city": "Jena",
  "category": "Studienstart",
  "title": "Universität Jena · Schnupperstudium",
  "note": "Wähle eine Lehrveranstaltung und prüfe die Teilnahmehinweise der Universität.",
  "link": "https://www.uni-jena.de/400/schnupperstudium"
},
{
  "id": "stadt-weg|Jena|Aktivitäten|Jenaer Museen · Besuch planen",
  "city": "Jena",
  "category": "Aktivitäten",
  "title": "Jenaer Museen · Besuch planen",
  "note": "Prüfe Öffnungszeiten und Eintritt bei den Museen.",
  "link": "https://www.museen-jena.de/de/wir_ueber_uns/oeffnungszeiten/681720",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Jena|Aktivitäten|Schillers Gartenhaus · Besuch planen",
  "city": "Jena",
  "category": "Aktivitäten",
  "title": "Schillers Gartenhaus · Besuch planen",
  "note": "Prüfe die Öffnungszeiten und Anfahrt direkt bei der Universität.",
  "link": "https://www.gartenhaus.uni-jena.de/82/besuch",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Heilbronn|Aktivitäten|experimenta · Besuch planen",
  "city": "Heilbronn",
  "category": "Aktivitäten",
  "title": "experimenta · Besuch planen",
  "note": "Prüfe Öffnungszeiten und Eintritt direkt bei der experimenta.",
  "link": "https://www.experimenta.science/besuchen/oeffnungszeiten-eintrittspreise/",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Frankfurt am Main|Ausbildung|Stadt Frankfurt · Kraftfahrzeugmechatronikerin oder Kraftfahrzeugmechatroniker 2027",
  "city": "Frankfurt am Main",
  "category": "Ausbildung",
  "title": "Stadt Frankfurt · Kraftfahrzeugmechatronikerin oder Kraftfahrzeugmechatroniker 2027",
  "note": "Die Stadt nennt mindestens Realschulabschluss, Start am 1. September 2027 und Bewerbungsschluss am 16. November 2026. Prüfe den Status der Ausschreibung.",
  "link": "https://stadtfrankfurtjobs.de/Ausbildung-Kraftfahrzeugmechatroniker-in-wmd-Fachrichtung--de-j10974.html",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Gießen|Ausbildung|Stadtwerke Gießen · Fachinformatikerin oder Fachinformatiker für Systemintegration 2027",
  "city": "Gießen",
  "category": "Ausbildung",
  "title": "Stadtwerke Gießen · Fachinformatikerin oder Fachinformatiker für Systemintegration 2027",
  "note": "Die Stadtwerke nennen mindestens einen guten Realschulabschluss und den 1. August 2027 als Beginn. Prüfe den Status der Ausschreibung und die Unterlagen.",
  "link": "https://stadtwerkegiessenag.softgarden.io/job/66729393/Ausbildung-zum-zur-Fachinformatiker-in-f%C3%BCr-Systemintegration-m-w-d-ab-1.-August-2027?jobDbPVId=286806752&l=de",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Hamburg|Ausbildung|Stadt Hamburg · Verwaltungsfachangestellte",
  "city": "Hamburg",
  "category": "Ausbildung",
  "title": "Stadt Hamburg · Verwaltungsfachangestellte",
  "note": "Das Profil nennt den mittleren Schulabschluss und Notenvorgaben. Prüfe die Voraussetzungen und die Bewerbungsseite der Stadt.",
  "link": "https://www.karriere.hamburg/einstiegsmoeglichkeiten/ausbildung/verwaltung",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Hamburg|Ausbildung|vhh.mobility · Fachinformatikerin oder Fachinformatiker für Systemintegration 2027",
  "city": "Hamburg",
  "category": "Ausbildung",
  "title": "vhh.mobility · Fachinformatikerin oder Fachinformatiker für Systemintegration 2027",
  "note": "Die Anzeige nennt Hamburg-Bergedorf, den 1. August 2027 und einen sehr guten Realschulabschluss oder Abitur. Prüfe den Bewerbungsstatus beim Arbeitgeber.",
  "link": "https://vhh-mobility.de/jobs/8491/",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Hamburg|Studienstart|Universität Hamburg · Schnupperstudium Uni live!",
  "city": "Hamburg",
  "category": "Studienstart",
  "title": "Universität Hamburg · Schnupperstudium Uni live!",
  "note": "Wähle eine Lehrveranstaltung und prüfe die Teilnahmehinweise.",
  "link": "https://www.uni-hamburg.de/schule-und-uni/schnupperangebote/sp-uni-live.html"
},
{
  "id": "stadt-weg|Hamburg|Wohnen|Universität Hamburg · WG und privater Wohnungsmarkt",
  "city": "Hamburg",
  "category": "Wohnen",
  "title": "Universität Hamburg · WG und privater Wohnungsmarkt",
  "note": "Prüfe die städtischen und privaten Wohnangebote parallel zum Wohnheim.",
  "link": "https://www.uni-hamburg.de/studium/campus-leben/wohnen.html#104"
},
{
  "id": "stadt-weg|Hamburg|Aktivitäten|Hamburger Kunsthalle · Besuch planen",
  "city": "Hamburg",
  "category": "Aktivitäten",
  "title": "Hamburger Kunsthalle · Besuch planen",
  "note": "Prüfe Anfahrt, Öffnungszeiten und Eintritt beim Museum.",
  "link": "https://www.hamburger-kunsthalle.org/de/besuchen",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Hamburg|Aktivitäten|Museum für Kunst und Gewerbe Hamburg · Besuch planen",
  "city": "Hamburg",
  "category": "Aktivitäten",
  "title": "Museum für Kunst und Gewerbe Hamburg · Besuch planen",
  "note": "Prüfe Ausstellungen und Besuchszeiten beim Museum.",
  "link": "https://www.mkg-hamburg.de/besuch",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Heidelberg|Ausbildung|St. Josefskrankenhaus Heidelberg · Pflegefachfrau oder Pflegefachmann",
  "city": "Heidelberg",
  "category": "Ausbildung",
  "title": "St. Josefskrankenhaus Heidelberg · Pflegefachfrau oder Pflegefachmann",
  "note": "Das Profil erklärt die Zugangsmöglichkeiten mit Realschulabschluss oder Hauptschulabschluss und ergänzendem Abschluss. Prüfe das verlangte Praktikum und die Bewerbungsunterlagen.",
  "link": "https://www.st.josefskrankenhaus.de/pflegeausbildung/bewerbungsschritte",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Heidelberg|Wohnen|Studierendenwerk Heidelberg · Privater Wohnungsmarkt",
  "city": "Heidelberg",
  "category": "Wohnen",
  "title": "Studierendenwerk Heidelberg · Privater Wohnungsmarkt",
  "note": "Suche private Zimmer oder Wohngemeinschaften als Alternative zur Wohnheimbewerbung.",
  "link": "https://www.stw.uni-heidelberg.de/wohnen/privater-wohnungsmarkt/"
},
{
  "id": "stadt-weg|Heidelberg|Studienstart|Universität Heidelberg · Schnuppervorlesungen 2026",
  "city": "Heidelberg",
  "category": "Studienstart",
  "title": "Universität Heidelberg · Schnuppervorlesungen 2026",
  "note": "Die Universität veröffentlicht Vorlesungen für November und Dezember 2026, auch für Geschichte. Prüfe vor dem Besuch den jeweiligen Termin und die Teilnahmehinweise.",
  "link": "https://www.uni-heidelberg.de/de/studium/service-beratung/studienentscheidung-treffen/schnuppervorlesungen-im-november-und-dezember-2026"
},
{
  "id": "stadt-weg|Heidelberg|Aktivitäten|Schloss Heidelberg · Besuch planen",
  "city": "Heidelberg",
  "category": "Aktivitäten",
  "title": "Schloss Heidelberg · Besuch planen",
  "note": "Prüfe Öffnungszeiten und Zugang bei den Staatlichen Schlössern und Gärten.",
  "link": "https://www.schloss-heidelberg.de/besuchsinformation/oeffnungszeiten/",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Heilbronn|Ausbildung|Stadt Heilbronn · Verwaltungsfachangestellte",
  "city": "Heilbronn",
  "category": "Ausbildung",
  "title": "Stadt Heilbronn · Verwaltungsfachangestellte",
  "note": "Die Stadt nennt die mittlere Reife oder einen gleichwertigen Abschluss und erläutert den Ausbildungsablauf. Prüfe, ob im Bewerbungsportal ein Platz ausgeschrieben ist.",
  "link": "https://www.heilbronn.de/rathaus/karriere/ausbildungsangebote-1/offene-ausbildungsstellen/verwaltungsfachangestellter-m/w/d.html",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Heilbronn|Studienstart|Hochschule Heilbronn · Student for a Day am Bildungscampus",
  "city": "Heilbronn",
  "category": "Studienstart",
  "title": "Hochschule Heilbronn · Student for a Day am Bildungscampus",
  "note": "Wähle den Bildungscampus und frage einen Termin für einen Studiengang an.",
  "link": "https://www.hs-heilbronn.de/de/student-for-a-day"
},
{
  "id": "stadt-weg|Heilbronn|ÖPNV & Pendeln|HNV · Teilnehmende Schulen und Hochschulen beim Semesterticket",
  "city": "Heilbronn",
  "category": "ÖPNV & Pendeln",
  "title": "HNV · Teilnehmende Schulen und Hochschulen beim Semesterticket",
  "note": "Prüfe die aktuelle Partnerliste des HNV. Wenn deine Hochschule fehlt, vergleiche D-Ticket JugendBW und reguläre Tarife.",
  "link": "https://www.mein-hnv.de/abos-und-tickets/abonnements-monatskarten/semester-ticket"
},
{
  "id": "stadt-weg|Aachen|Ausbildung|regio iT · Fachinformatik 2027",
  "city": "Aachen",
  "category": "Ausbildung",
  "title": "regio iT · Fachinformatik 2027",
  "note": "Die Ausschreibung nennt mittlere Reife, gute naturwissenschaftliche Noten und Ausbildungsbeginn im August 2027. Prüfe den Bewerbungsstatus beim Arbeitgeber.",
  "link": "https://karriere.regioit.de/jobposting/e7ea482c5afa28902451ab0d27eba194331773bb",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Frankfurt am Main|Ausbildung|Stadt Frankfurt · Kraftfahrzeugmechatronik",
  "city": "Frankfurt am Main",
  "category": "Ausbildung",
  "title": "Stadt Frankfurt · Kraftfahrzeugmechatronik",
  "note": "Das städtische Ausbildungsprofil beschreibt Aufgaben, Zugang und Bewerbung. Freie Plätze findest du in den Stellenangeboten der Stadt.",
  "link": "https://frankfurt.de/karriere/schueler_innen/ausbildung/kfz",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Frankfurt am Main|Wohnen|Studierendenwerk Frankfurt · Weitere Wohnangebote",
  "city": "Frankfurt am Main",
  "category": "Wohnen",
  "title": "Studierendenwerk Frankfurt · Weitere Wohnangebote",
  "note": "Vergleiche Wohngemeinschaften und private Anbieter mit der Wohnheimbewerbung.",
  "link": "https://www.swffm.de/wohnen/andere-anbieter"
},
{
  "id": "stadt-weg|Frankfurt am Main|Studienstart|Goethe-Universität · Schnuppertage",
  "city": "Frankfurt am Main",
  "category": "Studienstart",
  "title": "Goethe-Universität · Schnuppertage",
  "note": "Die Schnuppertage richten sich an die gymnasiale Oberstufe. Prüfe Termine und wie deine Schule die Anmeldung organisiert.",
  "link": "https://www.uni-frankfurt.de/de/studium/studienorientierung/schuelerangebote/uebergreifende-angebote/schnuppertage"
},
{
  "id": "stadt-weg|Frankfurt am Main|Aktivitäten|Senckenberg Naturmuseum · Besuch planen",
  "city": "Frankfurt am Main",
  "category": "Aktivitäten",
  "title": "Senckenberg Naturmuseum · Besuch planen",
  "note": "Prüfe Eintritt, Öffnungszeiten und Anfahrt direkt beim Museum.",
  "link": "https://museumfrankfurt.senckenberg.de/de/besuch/",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Frankfurt am Main|Aktivitäten|Historisches Museum Frankfurt · Besuch planen",
  "city": "Frankfurt am Main",
  "category": "Aktivitäten",
  "title": "Historisches Museum Frankfurt · Besuch planen",
  "note": "Prüfe Ausstellungen und Besuchszeiten beim Museum.",
  "link": "https://historisches-museum-frankfurt.de/de/besuch-planen",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Frankfurt am Main|ÖPNV & Pendeln|RMV · Schülerticket Hessen für Auszubildende",
  "city": "Frankfurt am Main",
  "category": "ÖPNV & Pendeln",
  "title": "RMV · Schülerticket Hessen für Auszubildende",
  "note": "Prüfe Voraussetzungen, Geltungsbereich und Nachweis für deinen Ausbildungsweg.",
  "link": "https://www.rmv.de/c/de/tickets/sortiment/tickets-im-ueberblick/schuelerticket-hessen-fuer-schuelerinnen-schueler-und-azubis"
},
{
  "id": "stadt-weg|Gießen|Ausbildung|Stadtwerke Gießen · Fachinformatikerin oder Fachinformatiker für Systemintegration",
  "city": "Gießen",
  "category": "Ausbildung",
  "title": "Stadtwerke Gießen · Fachinformatikerin oder Fachinformatiker für Systemintegration",
  "note": "Das Berufsprofil nennt einen guten Realschulabschluss. Prüfe die Ausbildungsinhalte und die verlinkten offenen Stellen.",
  "link": "https://www.stadtwerke-giessen.de/de/unternehmen/karriere/ausbildung/fachinformatiker/in-fuer-systemintegration",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Gießen|Studienstart|JLU Gießen · Fachbereiche ausprobieren",
  "city": "Gießen",
  "category": "Studienstart",
  "title": "JLU Gießen · Fachbereiche ausprobieren",
  "note": "Wähle einen Fachbereich und prüfe die Angebote zur Studienorientierung.",
  "link": "https://www.uni-giessen.de/de/studium/studienorientierung/studieninteressierte/fachbereiche"
},
{
  "id": "stadt-weg|Gießen|Wohnen|Studierendenwerk Gießen · Wohnbörse",
  "city": "Gießen",
  "category": "Wohnen",
  "title": "Studierendenwerk Gießen · Wohnbörse",
  "note": "Suche als Alternative zum Wohnheim nach einem privaten Zimmer oder einer WG.",
  "link": "https://www.stwgi.de/wohnboerse"
},
{
  "id": "stadt-weg|Gießen|Aktivitäten|Museum für Gießen · Besuch im Alten Schloss",
  "city": "Gießen",
  "category": "Aktivitäten",
  "title": "Museum für Gießen · Besuch im Alten Schloss",
  "note": "Prüfe Besuchszeiten und aktuelle Ausstellungen bei der Stadt.",
  "link": "https://www.giessen.de/Erleben/Kultur/Museen-Ausstellungen/Oberhessisches-Museum/Besuch-im-Museum/",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Göttingen|Ausbildung|Universitätsmedizin Göttingen · Pflegefachassistenz",
  "city": "Göttingen",
  "category": "Ausbildung",
  "title": "Universitätsmedizin Göttingen · Pflegefachassistenz",
  "note": "Das Profil nennt mindestens Hauptschulabschluss und Deutschkenntnisse auf Niveau B2. Prüfe den Ablauf der Ausbildung und den aktuellen Bewerbungsweg.",
  "link": "https://www.umg.eu/karriere/ausbildung-duales-studium/pflegefachassistenz/",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Göttingen|Studienstart|Universität Göttingen · Schnupperstudium",
  "city": "Göttingen",
  "category": "Studienstart",
  "title": "Universität Göttingen · Schnupperstudium",
  "note": "Wähle eine Lehrveranstaltung und prüfe, ob du sie besuchen kannst.",
  "link": "https://www2.uni-goettingen.de/de/108374.html"
},
{
  "id": "stadt-weg|Göttingen|Wohnen|Studierendenwerk Göttingen · Privater Wohnungsmarkt",
  "city": "Göttingen",
  "category": "Wohnen",
  "title": "Studierendenwerk Göttingen · Privater Wohnungsmarkt",
  "note": "Prüfe private Zimmer oder Wohnungen als Alternative zum Wohnheim.",
  "link": "https://www.studierendenwerk-goettingen.de/studentisches-wohnen/privater-wohnungsmarkt"
},
{
  "id": "stadt-weg|Göttingen|Aktivitäten|Städtisches Museum Göttingen · Besuch planen",
  "city": "Göttingen",
  "category": "Aktivitäten",
  "title": "Städtisches Museum Göttingen · Besuch planen",
  "note": "Prüfe Ausstellungen und Öffnungszeiten direkt beim Museum.",
  "link": "https://museum.goettingen.de/portal/seiten/fuer-ihren-besuch-900001129-25480.html",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Aachen|Ausbildung|FH Aachen · Fachinformatikerin oder Fachinformatiker für Systemintegration",
  "city": "Aachen",
  "category": "Ausbildung",
  "title": "FH Aachen · Fachinformatikerin oder Fachinformatiker für Systemintegration",
  "note": "Das Ausbildungsprofil nennt mindestens Fachoberschulreife. Praxis an der FH Aachen und Berufsschule in Aachen. Prüfe den Bewerbungsweg und aktuelle Ausschreibungen.",
  "link": "https://www.fh-aachen.de/fh-aachen/arbeiten/berufsausbildung-an-der-fh-aachen/ausbildung-fachinformatikerin-systemintegration",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Aachen|Studienstart|FH Aachen · Studium kennenlernen und ausprobieren",
  "city": "Aachen",
  "category": "Studienstart",
  "title": "FH Aachen · Studium kennenlernen und ausprobieren",
  "note": "Wähle ein Orientierungsangebot und prüfe bei der FH Aachen, wie du teilnehmen kannst.",
  "link": "https://www.fh-aachen.de/fh-aachen/fh-kennenlernen/informieren-und-ausprobieren"
},
{
  "id": "stadt-weg|Aachen|Wohnen|Studierendenwerk Aachen · WohnDuo",
  "city": "Aachen",
  "category": "Wohnen",
  "title": "Studierendenwerk Aachen · WohnDuo",
  "note": "Prüfe eine Wohnpartnerschaft als Alternative zum Wohnheim und lies nach, wie die Vermittlung funktioniert.",
  "link": "https://www.studierendenwerk-aachen.de/de/wohnen/wohnduo.html"
},
{
  "id": "stadt-weg|Aachen|Aktivitäten|Ludwig Forum Aachen · Besuch planen",
  "city": "Aachen",
  "category": "Aktivitäten",
  "title": "Ludwig Forum Aachen · Besuch planen",
  "note": "Prüfe Ausstellungen, Anreise und Öffnungszeiten vor dem Besuch.",
  "link": "https://ludwigforum.de/besuchen/",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Aachen|Aktivitäten|Centre Charlemagne · Stadtmuseum Aachen",
  "city": "Aachen",
  "category": "Aktivitäten",
  "title": "Centre Charlemagne · Stadtmuseum Aachen",
  "note": "Prüfe Öffnungszeiten und Eintritt beim Stadtmuseum.",
  "link": "https://centre-charlemagne.eu/besuch/offnungszeiten-und-eintrittspreise/",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Berlin|Ausbildung|BVG · Fachkraft im Fahrbetrieb",
  "city": "Berlin",
  "category": "Ausbildung",
  "title": "BVG · Fachkraft im Fahrbetrieb",
  "note": "Das Berufsprofil nennt den mittleren Schulabschluss. Prüfe Aufgaben und Ausbildungsablauf bei der BVG. Freie Plätze stehen in der Jobsuche.",
  "link": "https://www.bvg.de/de/karriere/schueler/ausbildung/ausbildung-fachkraft-fahrbetrieb",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Berlin|Ausbildung|BVG · Fachkraft im Fahrbetrieb 2027",
  "city": "Berlin",
  "category": "Ausbildung",
  "title": "BVG · Fachkraft im Fahrbetrieb 2027",
  "note": "Die BVG nennt Ausbildungsstart im September 2027 und einen mittleren Schulabschluss bis zum 31. August 2027. Prüfe den Status im Stellenangebot.",
  "link": "https://www.bvg.de/de/karriere/jobsuche/ausbildung-fachkraft-im-fahrbetrieb-fuer-3-jahre-ab-september-2027-w-m-d",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Berlin|Wohnen|Universität der Künste Berlin · Zimmer und Wohnalternativen",
  "city": "Berlin",
  "category": "Wohnen",
  "title": "Universität der Künste Berlin · Zimmer und Wohnalternativen",
  "note": "Prüfe parallel zur Wohnheimbewerbung die Hinweise für private Zimmer und Wohngemeinschaften.",
  "link": "https://www.udk-berlin.de/service/studienberatung-und-psychologische-beratung/wohnen/"
},
{
  "id": "stadt-weg|Berlin|Studienstart|FU Berlin · Offener Hörsaal",
  "city": "Berlin",
  "category": "Studienstart",
  "title": "FU Berlin · Offener Hörsaal",
  "note": "Prüfe, welche Vorlesungen Schülerinnen, Schülern und Studieninteressierten offenstehen.",
  "link": "https://www.fu-berlin.de/sites/zfs/angebote/offener-hs/index.html"
},
{
  "id": "stadt-weg|Berlin|Aktivitäten|Futurium · Besuch planen",
  "city": "Berlin",
  "category": "Aktivitäten",
  "title": "Futurium · Besuch planen",
  "note": "Prüfe Öffnungszeiten, Anfahrt und Veranstaltungen beim Futurium.",
  "link": "https://futurium.de/de/besuch",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Berlin|Aktivitäten|Deutsches Technikmuseum · Besuch planen",
  "city": "Berlin",
  "category": "Aktivitäten",
  "title": "Deutsches Technikmuseum · Besuch planen",
  "note": "Prüfe den Eintritt, die Öffnungszeiten und die Anfahrt direkt beim Museum.",
  "link": "https://technikmuseum.berlin/besuch/infos/",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Dresden|Studienstart|TU Dresden · UNI TESTEN",
  "city": "Dresden",
  "category": "Studienstart",
  "title": "TU Dresden · UNI TESTEN",
  "note": "Wähle einen Studiengang oder eine Lehrveranstaltung und prüfe die Teilnahmebedingungen.",
  "link": "https://tu-dresden.de/studium/vor-dem-studium/uni-testen?set_language=de"
},
{
  "id": "stadt-weg|Dresden|ÖPNV & Pendeln|DVB · Tickets für Schülerinnen, Schüler und Auszubildende",
  "city": "Dresden",
  "category": "ÖPNV & Pendeln",
  "title": "DVB · Tickets für Schülerinnen, Schüler und Auszubildende",
  "note": "Prüfe, welche Ausbildung anerkannt wird und welche Nachweise dein Ticket erfordert.",
  "link": "https://www.dvb.de/de-de/tickets/schueler-studenten/"
},
  {
    "id": "stadt-weg|Tübingen|Ausbildung|UKT Elektronik 2027",
    "city": "Tübingen",
    "category": "Ausbildung",
    "title": "Universitätsklinikum Tübingen · Elektronik für Energie- und Gebäudetechnik 2027",
    "note": "Das Klinikum bildet Elektronikerinnen und Elektroniker aus. Es nennt einen guten Realschulabschluss oder einen sehr guten Hauptschulabschluss, den 1. September 2027 als Start und den 31. Dezember 2026 als Bewerbungsschluss. Prüfe den aktuellen Status im Jobportal.",
    "link": "https://jobs.medizin.uni-tuebingen.de/Job/7922/Ausbildung-Elektronikerin---Elektroniker",
    "offerType": "Ausschreibung"
  },
  {
    "id": "stadt-weg|Tübingen|Aktivitäten|Museum Alte Kulturen",
    "city": "Tübingen",
    "category": "Aktivitäten",
    "title": "Schloss Hohentübingen · Museum Alte Kulturen",
    "note": "Prüfe Öffnungszeiten und Anfahrt zum Museum der Universität.",
    "link": "https://www.unimuseum.uni-tuebingen.de/de/schloss-hohentuebingen/museum-alte-kulturen",
    "activity": "Kultur"
  },
  {
    "id": "stadt-weg|Neckarsulm|Ausbildung|Audi Mechatronik 2027",
    "city": "Neckarsulm",
    "category": "Ausbildung",
    "title": "Audi Neckarsulm · Mechatronikerin oder Mechatroniker 2027",
    "note": "Audi nennt mindestens Hauptschulabschluss und den 10. September 2027 als Start. Prüfe im Bewerbungsformular, ob dieses Angebot noch offen ist.",
    "link": "https://audi.bewerbernavigator.de/boi/bew2?sid=18490",
    "offerType": "Ausschreibung"
  },
{
  "id": "stadt-weg|Mittweida|Ausbildung|Klinik Mittweida · Pflegefachfrau oder Pflegefachmann",
  "city": "Mittweida",
  "category": "Ausbildung",
  "title": "Klinik Mittweida · Pflegefachfrau oder Pflegefachmann",
  "note": "Mit mittlerem Schulabschluss oder Hauptschulabschluss plus einer mindestens zweijährigen abgeschlossenen Berufsausbildung kannst du den Zugang prüfen. Die praktischen Einsätze finden überwiegend im Klinikum Mittweida statt. Frage nach dem nächsten verfügbaren Platz.",
  "link": "https://www.lmkgmbh.de/karriere/ausbildung/pflegefachfrau-bzw-pflegefachmann",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Mittweida|Studienstart|Hochschule Mittweida · Studieninformationstag",
  "city": "Mittweida",
  "category": "Studienstart",
  "title": "Hochschule Mittweida · Studieninformationstag",
  "note": "Prüfe das Programm und welche Studiengänge du vor Ort kennenlernen kannst.",
  "link": "https://www.hs-mittweida.de/studieninformationstag/"
},
{
  "id": "stadt-weg|Mittweida|Aktivitäten|Stadt Mittweida · Zschopautal",
  "city": "Mittweida",
  "category": "Aktivitäten",
  "title": "Stadt Mittweida · Zschopautal",
  "note": "Plane einen Ausflug mit den Streckenhinweisen der Stadt.",
  "link": "https://www.mittweida.de/tourismus-kultur/mittweida-erleben/zschopautal/",
  "activity": "Draußen"
},
{
  "id": "stadt-weg|München|Ausbildung|Bayerisches Landesamt für Steuern · Fachinformatik Anwendungsentwicklung 2027",
  "city": "München",
  "category": "Ausbildung",
  "title": "Bayerisches Landesamt für Steuern · Fachinformatik Anwendungsentwicklung 2027",
  "note": "Das Landesamt nennt den Ausbildungsort München und den 30. November 2026 als Bewerbungsschluss. Prüfe Notenvoraussetzungen und das verlinkte Bewerbungsportal.",
  "link": "https://www.lfst.bayern.de/ausbildung-karriere/ausbildung/fachinformatiker-in-anwendungsentwicklung",
  "offerType": "Ausschreibung"
},
  {
    "id": "stadt-weg|Marburg|Wohnen|Privatzimmerbörse",
    "city": "Marburg",
    "category": "Wohnen",
    "title": "Studierendenwerk Marburg · Privatzimmerbörse",
    "note": "Prüfe private Zimmerangebote parallel zur Wohnheimbewerbung und vergleiche den Weg zum Campus.",
    "link": "https://studierendenwerk-marburg.de/wohnen/privatzimmerboerse/"
  },
{
  "id": "stadt-weg|Köln|Wohnen|Universität zu Köln · Wohnen für Hilfe",
  "city": "Köln",
  "category": "Wohnen",
  "title": "Universität zu Köln · Wohnen für Hilfe",
  "note": "Prüfe, ob eine Wohnpartnerschaft mit Hilfe im Alltag für dich infrage kommt.",
  "link": "https://www.hf.uni-koeln.de/33274"
},
{
  "id": "stadt-weg|Leipzig|Aktivitäten|Stadtgeschichtliches Museum · Haus Böttchergäßchen",
  "city": "Leipzig",
  "category": "Aktivitäten",
  "title": "Stadtgeschichtliches Museum · Haus Böttchergäßchen",
  "note": "Prüfe die aktuellen Sonderausstellungen und Besuchszeiten.",
  "link": "https://www.stadtgeschichtliches-museum-leipzig.de/besuch/unsere-haeuser/haus-boettchergaesschen/",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Leipzig|Ausbildung|Leipziger Verkehrsbetriebe · Fachkraft im Fahrbetrieb 2027",
  "city": "Leipzig",
  "category": "Ausbildung",
  "title": "Leipziger Verkehrsbetriebe · Fachkraft im Fahrbetrieb 2027",
  "note": "Die Ausschreibung nennt den Zugang unabhängig vom Schulabschluss. Prüfe im Stellenangebot, ob die Bewerbung weiterhin möglich ist.",
  "link": "https://www.l.de/karriere/stellenangebote/angebot/1669179-ausbildung-zur-fachkraft-im-fahrbetrieb-fuer-bus-oder-strassenbahn-m-w-d-2027/?no_cache=1",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Köln|Ausbildung|Stadt Köln · Verwaltungsfachangestellte 2027",
  "city": "Köln",
  "category": "Ausbildung",
  "title": "Stadt Köln · Verwaltungsfachangestellte 2027",
  "note": "Die Stadt nennt die Fachoberschulreife als Zugang und den 13. Dezember 2026 als Bewerbungsfrist. Prüfe den aktuellen Status im Stellenportal.",
  "link": "https://karriere.stadt-koeln.de/job/stadtweit-Ausbildung-zumzur-Verwaltungsfachangestellten-%28mwd%29/1414231133/",
  "offerType": "Ausschreibung"
},
{
  "id": "stadt-weg|Köln|ÖPNV & Pendeln|KVB · Fahrplanauskunft",
  "city": "Köln",
  "category": "ÖPNV & Pendeln",
  "title": "KVB · Fahrplanauskunft",
  "note": "Prüfe die Fahrt zur TH Köln, Campus Südstadt, Ubierring 48. Wähle im Fahrplan deine Ankunftszeit und berücksichtige den Fußweg.",
  "link": "https://www.kvb.koeln/fahrtinfo/fahrplanauskunft/index.html"
},
{
  "id": "stadt-weg|Köln|Ausbildung|Stadt Köln · Fachangestellte für Medien- und Informationsdienste",
  "city": "Köln",
  "category": "Ausbildung",
  "title": "Stadt Köln · Fachangestellte für Medien- und Informationsdienste",
  "note": "Die städtische Übersicht führt FaMI in Archiv und Bildagentur bei Fachoberschulreife auf. Freie Ausbildungsplätze veröffentlicht die Stadt separat.",
  "link": "https://www.stadt-koeln.de/politik-und-verwaltung/ausbildung-karriere-bei-der-stadt/ausbildung/ausbildungs-studiengaenge-nach-schulabschluss",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Köln|Aktivitäten|Museum Ludwig · Besuch planen",
  "city": "Köln",
  "category": "Aktivitäten",
  "title": "Museum Ludwig · Besuch planen",
  "note": "Schlechtwetterziel am Dom. Prüfe Öffnungszeiten und Eintritt vor dem Besuch.",
  "link": "https://www.museum-ludwig.de/de/besuch/informationen/tickets-oeffnungszeiten",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Leipzig|Studium|Universität Leipzig · Geschichte B.A.",
  "city": "Leipzig",
  "category": "Studium",
  "title": "Universität Leipzig · Geschichte B.A.",
  "note": "Prüfe Studieninhalte, Zugang und Bewerbung im Studienprofil der Universität.",
  "link": "https://www.uni-leipzig.de/en/studying/prospective-students/courses-of-study/degree-programme?cHash=d60fd2269379eadc559c1d0fe5cea396&tx_t3study%5Baction%5D=show&tx_t3study%5Bcontroller%5D=Course&tx_t3study%5Bcourse%5D=31",
  "topic": "Geschichte"
},
{
  "id": "stadt-weg|Leipzig|ÖPNV & Pendeln|MDV · Fahrplanauskunft Leipzig",
  "city": "Leipzig",
  "category": "ÖPNV & Pendeln",
  "title": "MDV · Fahrplanauskunft Leipzig",
  "note": "Prüfe die Ankunft am Campus Augustusplatz. Vergleiche Fußwege und Umstiege für zwei mögliche Wohnadressen.",
  "link": "https://www.mdv.de/fahrplanauskunft/verbindung-suchen"
},
{
  "id": "stadt-weg|Leipzig|Wohnen|Studentenwerk Leipzig · RaumTeiler",
  "city": "Leipzig",
  "category": "Wohnen",
  "title": "Studentenwerk Leipzig · RaumTeiler",
  "note": "Als eingeschriebene Person findest du hier eine Alternative zur Wohnheimbewerbung und Hinweise zur privaten Wohnungssuche.",
  "link": "https://www.studentenwerk-leipzig.de/wohnen/wohnraumsuchende/"
},
{
  "id": "stadt-weg|Marburg|ÖPNV & Pendeln|AStA Marburg · Semesterticket",
  "city": "Marburg",
  "category": "ÖPNV & Pendeln",
  "title": "AStA Marburg · Semesterticket",
  "note": "Prüfe Aktivierung, Geltungsbereich und die Chipkarte für Studierende ohne geeignetes Smartphone.",
  "link": "https://asta-marburg.de/infos/semesterticket/"
},
{
  "id": "stadt-weg|Marburg|Aktivitäten|Landgrafenschloss · Museum für Kulturgeschichte",
  "city": "Marburg",
  "category": "Aktivitäten",
  "title": "Landgrafenschloss · Schlossbesuch",
  "note": "Prüfe Schlossrundgänge und Sonderausstellungen bei der Universität. Die kulturgeschichtliche Sammlung im Wilhelmsbau ist laut Universität wegen Sanierung geschlossen.",
  "link": "https://www.uni-marburg.de/de/museum/landgrafenschloss",
  "activity": "Kultur"
},
{
  "id": "stadt-weg|Marburg|Ausbildung|Stadt Marburg · Verwaltungsfachangestellte",
  "city": "Marburg",
  "category": "Ausbildung",
  "title": "Stadt Marburg · Verwaltungsfachangestellte",
  "note": "Das Profil nennt einen guten mittleren Bildungsabschluss und erläutert den Wechsel zwischen Stadtverwaltung, Berufsschule und Verwaltungsseminar.",
  "link": "https://www.marburg.de/downloads/datei/YjI1ZWQ4ODc2NmE4OGQ2Y2U4M2cyRzR4Sk5RNmFSZit5T1pobzVOdEErTEZYMHhqN0Q0ZE1oT3hoeVJzQ1Vqd1JJQVd5YUVBT1RMbmZNTVNRcmZqNDl2ZDFzQ2RNeW5PK2lvTFJ2NjIzN29NeStYWTV3ZGc3SngyRUlJc3hHTS8wVjdBOEU2ZHpWUHN2SXY0",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Mittweida|Wohnen|Studentenwerk Freiberg · Mietportal für Mittweida",
  "city": "Mittweida",
  "category": "Wohnen",
  "title": "Studentenwerk Freiberg · Mietportal für Mittweida",
  "note": "Wähle Mittweida im Mietportal. Laut Wohn-FAQ brauchst du die Immatrikulationsbescheinigung spätestens beim Vertragsabschluss.",
  "link": "https://mietportal.studentenwerk-freiberg.de/ipack4/index.html"
},
{
  "id": "stadt-weg|Mittweida|Wohnen|Studentenwerk Freiberg · Privatzimmer in Mittweida",
  "city": "Mittweida",
  "category": "Wohnen",
  "title": "Studentenwerk Freiberg · Privatzimmer in Mittweida",
  "note": "Prüfe die private Zimmervermittlung als Alternative zum Wohnheim.",
  "link": "https://www.studentenwerk-freiberg.de/wohnen/in-mittweida-wohnen/privatzimmervermittlung/"
},
{
  "id": "stadt-weg|Mittweida|Studienstart|Hochschule Mittweida · Orientierung zum Studienstart",
  "city": "Mittweida",
  "category": "Studienstart",
  "title": "Hochschule Mittweida · Orientierung zum Studienstart",
  "note": "Prüfe Zugang, Bewerbungsweg und Alltag anhand der Fragen zum Studienstart.",
  "link": "https://www.hs-mittweida.de/studieren/tipps-fuer-deinen-studienstart/"
},
{
  "id": "stadt-weg|Mittweida|Ausbildung|Landkreis Mittelsachsen · Verwaltungsfachangestellte",
  "city": "Mittweida",
  "category": "Ausbildung",
  "title": "Landkreis Mittelsachsen · Verwaltungsfachangestellte",
  "note": "Das Ausbildungsprofil erklärt Aufgaben, Ablauf und Zugang beim Landkreis. Den tatsächlichen Einsatzort und freie Plätze prüfst du in der jeweiligen Ausschreibung.",
  "link": "https://www.landkreis-mittelsachsen.de/fileadmin/Redakteure/Arbeitgeber/handout-verwaltungsfachangestellte-2024.pdf",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Mittweida|ÖPNV & Pendeln|Hochschule Mittweida · FAQ zum Semesterticket",
  "city": "Mittweida",
  "category": "ÖPNV & Pendeln",
  "title": "Hochschule Mittweida · FAQ zum Semesterticket",
  "note": "Die Hochschul-FAQ nennt für Mittweida kein Semesterticket. Wenn du pendelst, prüfe die dort verlinkten Tarifoptionen und ihre Bedingungen.",
  "link": "https://blog.hs-mittweida.de/faq/"
},
{
  "id": "stadt-weg|München|Duales Studium|Stadt München · Wirtschaftsinformatik kommunal B.Sc.",
  "city": "München",
  "category": "Duales Studium",
  "title": "Stadt München · Wirtschaftsinformatik kommunal B.Sc.",
  "note": "Prüfe Studienaufbau, Zugang und Praxisphasen im Studienprofil. Den Bewerbungsstatus für deinen Jahrgang findest du in der aktuellen Ausschreibung.",
  "link": "https://stadt.muenchen.de/infos/studium-wirtschaftsinformatik-kommunal.html"
},
{
  "id": "stadt-weg|München|Ausbildung|Stadt München · Verwaltungsfachangestellte",
  "city": "München",
  "category": "Ausbildung",
  "title": "Stadt München · Fachinformatik Systemintegration",
  "note": "Für Fachinformatikerinnen und Fachinformatiker nennt das Berufsprofil den qualifizierenden Mittelschulabschluss oder einen höheren Abschluss. Die Stadt erklärt, wie du dich bewirbst. Prüfe offene Plätze im Stellenportal.",
  "link": "https://stadt.muenchen.de/infos/ausbildung-fachinformatiker-stemintegration.html",
  "offerType": "Ausbildungsprofil"
},
{
  "id": "stadt-weg|Neckarsulm|Studienstart|Hochschule Heilbronn · Vorlesungen am Bildungscampus ausprobieren",
  "city": "Neckarsulm",
  "category": "Studienstart",
  "title": "Hochschule Heilbronn · Vorlesungen am Bildungscampus ausprobieren",
  "note": "Der Schnuppertag findet in Heilbronn statt. Wähle Bildungscampus Heilbronn, frage über das Hochschulangebot einen Termin an und plane dann die Fahrt von Neckarsulm.",
  "link": "https://www.hs-heilbronn.de/de/student-for-a-day"
},
{
  "id": "stadt-weg|Neckarsulm|Ausbildung|Audi Neckarsulm · Stellenportal zur Ausbildungsrunde 2027",
  "city": "Neckarsulm",
  "category": "Ausbildung",
  "title": "Audi Neckarsulm · Stellenportal zur Ausbildungsrunde 2027",
  "note": "Am 12.11.2026 listete das Audi-Portal Ausbildungsangebote mit Start im September 2027. Der Status gilt pro Beruf. Prüfe im einzelnen Angebot, ob die Bewerbung noch möglich ist.",
  "link": "https://audi.bewerbernavigator.de/boi/angebote?rubric=Ausbildung+Neckarsulm",
  "offerType": "Stellensuche"
},
{
  "id": "stadt-weg|Tübingen|ÖPNV & Pendeln|naldo · Tickets für Studierende",
  "city": "Tübingen",
  "category": "ÖPNV & Pendeln",
  "title": "naldo · Tickets für Studierende",
  "note": "Die Universität Tübingen nimmt am naldo-Semesterticket teil. Vergleiche Geltungsbereich, Nachweis und Tarif mit Anschluss-Semesterticket und D-Ticket JugendBW.",
  "link": "https://www.naldo.de/tickets/studierende/"
},
{
  "id": "stadt-weg|Tübingen|Wohnen|Studierendenwerk · Privatzimmervermittlung",
  "city": "Tübingen",
  "category": "Wohnen",
  "title": "Studierendenwerk · Privatzimmervermittlung",
  "note": "Suche parallel zur Wohnheimbewerbung nach privaten Zimmerangeboten und prüfe die Bedingungen der Vermittlung.",
  "link": "https://www.my-stuwe.de/wohnen/privatzimmervermittlung/"
},
{
  "id": "stadt-weg|Tübingen|Aktivitäten|Stadtmuseum Tübingen · Besuch im Kornhaus",
  "city": "Tübingen",
  "category": "Aktivitäten",
  "title": "Stadtmuseum Tübingen · Besuch im Kornhaus",
  "note": "Prüfe Besuchszeiten, Anfahrt und Führungen direkt beim Stadtmuseum.",
  "link": "https://www.stadtmuseum-tuebingen.de/dein-besuch/",
  "activity": "Kultur"
},
{
    "id": "stadt-pruefung|Berlin|Ausbildung|BVG · Ausbildungsberufe",
    "city": "Berlin",
    "category": "Ausbildung",
    "title": "BVG · Ausbildungsberufe",
    "note": "Vergleiche IT, Technik, kaufmännische Berufe und Fahrbetrieb. Prüfe die Anforderungen in der jeweiligen Ausschreibung.",
    "link": "https://www.bvg.de/de/karriere/schueler/ausbildung"
  },
  {
    "id": "stadt-pruefung|Berlin|Duales Studium|Land Berlin · Verwaltungsinformatik",
    "city": "Berlin",
    "category": "Duales Studium",
    "title": "Land Berlin · Verwaltungsinformatik",
    "note": "Prüfe Studienaufbau, Voraussetzungen und Bewerbungsweg beim Land Berlin.",
    "link": "https://www.berlin.de/landesverwaltungsamt/zentraler-rekrutierungsservice/duale-studiengaenge/kampagnen/landingpage.1147337.php"
  },
  {
    "id": "stadt-pruefung|Berlin|ÖPNV & Pendeln|BVG · Verbindungen und Störungen",
    "city": "Berlin",
    "category": "ÖPNV & Pendeln",
    "title": "BVG · Verbindungen und Störungen",
    "note": "Plane den Weg zu Hochschule oder Betrieb zur typischen Ankunftszeit. Prüfe Umstiege und Aufzugsmeldungen.",
    "link": "https://www.bvg.de/de/verbindungen"
  },
  {
    "id": "stadt-pruefung|Berlin|Wohnen|Studierendenwerk Berlin · Wohnheimbewerbung",
    "city": "Berlin",
    "category": "Wohnen",
    "title": "Studierendenwerk Berlin · Wohnheimbewerbung",
    "note": "Prüfe die Voraussetzungen und Unterlagen für die Bewerbung beim Betreiber.",
    "link": "https://www.stw.berlin/wohnen/wohnheimbewerbung/"
  },
  {
    "id": "stadt-pruefung|Berlin|Aktivitäten|Berlin · Museen mit freiem Eintritt",
    "city": "Berlin",
    "category": "Aktivitäten",
    "title": "Berlin · Museen mit freiem Eintritt",
    "note": "Wähle ein Museum und kontrolliere, wann der freie Eintritt gilt.",
    "link": "https://www.berlin.de/museum/eintritt-frei/",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Dresden|Duales Studium|DHSN Dresden · Wirtschaftsinformatik",
    "city": "Dresden",
    "category": "Duales Studium",
    "title": "DHSN Dresden · Wirtschaftsinformatik",
    "note": "Vergleiche die Module und prüfe, wie du einen Praxispartner findest.",
    "link": "https://www.dhsn.de/studienangebot/detail/wirtschaftsinformatik-dresden"
  },
  {
    "id": "stadt-pruefung|Dresden|ÖPNV & Pendeln|TU Dresden · Infos zum Semesterticket",
    "city": "Dresden",
    "category": "ÖPNV & Pendeln",
    "title": "TU Dresden · Infos zum Semesterticket",
    "note": "Prüfe Gültigkeit, Abruf und Regeln für deine Hochschule und dein Semester.",
    "link": "https://www.stura.tu-dresden.de/semesterticket"
  },
  {
    "id": "stadt-pruefung|Aachen|Ausbildung|HWK Aachen · Lehrstellenvermittlung",
    "city": "Aachen",
    "category": "Ausbildung",
    "title": "HWK Aachen · Lehrstellenvermittlung",
    "note": "Suche Ausbildungsbetriebe im Handwerk. Prüfe Ort, Voraussetzungen und Bewerbung bei der konkreten Stelle.",
    "link": "https://www.hwk-aachen.de/lehrstellenvermittlung"
  },
  {
    "id": "stadt-pruefung|Aachen|ÖPNV & Pendeln|ASEAG · Deutschlandsemesterticket",
    "city": "Aachen",
    "category": "ÖPNV & Pendeln",
    "title": "ASEAG · Deutschlandsemesterticket",
    "note": "Prüfe den Ablauf für deine Hochschule und vergleiche die Fahrtzeiten zur Unterkunft.",
    "link": "https://www.aseag.de/tickets/ticket/deutschlandticket-semester"
  },
  {
    "id": "stadt-pruefung|Aachen|Aktivitäten|Stadt Aachen · Museen",
    "city": "Aachen",
    "category": "Aktivitäten",
    "title": "Stadt Aachen · Museen",
    "note": "Wähle ein Haus aus und prüfe Eintritt, Öffnungszeiten und Anreise dort.",
    "link": "https://www.aachen.de/in-aachen-leben/kultur/museen/",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Frankfurt am Main|Ausbildung|Fraport · Ausbildungsstellen",
    "city": "Frankfurt am Main",
    "category": "Ausbildung",
    "title": "Fraport · Ausbildungsstellen",
    "note": "Filtere im Arbeitgeberportal nach Ausbildungsberuf und prüfe Voraussetzungen, Standort und Frist der Stelle.",
    "link": "https://www.jobs.fraport.de/go/Ausbildung/5379201/"
  },
  {
    "id": "stadt-pruefung|Frankfurt am Main|ÖPNV & Pendeln|RMV · Fahrpläne Frankfurt",
    "city": "Frankfurt am Main",
    "category": "ÖPNV & Pendeln",
    "title": "RMV · Fahrpläne Frankfurt",
    "note": "Prüfe Linien und Fahrzeiten für eine Werktagsverbindung zur Hochschule oder zum Betrieb.",
    "link": "https://www.rmv.de/c/de/start/frankfurt/mobilitaet-vor-ort/fahrplan-liniennetz/fahrplaene-fuer-frankfurt"
  },
  {
    "id": "stadt-pruefung|Frankfurt am Main|Aktivitäten|Museumsufer Frankfurt · Günstige Museumsbesuche",
    "city": "Frankfurt am Main",
    "category": "Aktivitäten",
    "title": "Museumsufer Frankfurt · Günstige Museumsbesuche",
    "note": "Vergleiche kostenfreie Termine und Ermäßigungen. Prüfe die Regeln für das jeweilige Haus.",
    "link": "https://www.museumsufer.de/de/eintritt-und-tickets/kostenfreie-eintritte/tipps-fuer-den-kleinen-geldbeutel/",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Göttingen|Ausbildung|Universitätsmedizin Göttingen · Bildungsakademie",
    "city": "Göttingen",
    "category": "Ausbildung",
    "title": "Universitätsmedizin Göttingen · Bildungsakademie",
    "note": "Erkunde Gesundheitsberufe und öffne das Berufsprofil für Zugang und Bewerbung.",
    "link": "https://www.umg.eu/einrichtungen/zentrale-einrichtungen-der-krankenversorgung/bildungsakademie/"
  },
  {
    "id": "stadt-pruefung|Göttingen|ÖPNV & Pendeln|GöVB · Fahrplaninformationen",
    "city": "Göttingen",
    "category": "ÖPNV & Pendeln",
    "title": "GöVB · Fahrplaninformationen",
    "note": "Prüfe deinen Arbeits- oder Campusweg mit dem Stadtbus, einschließlich Rückfahrt am Abend.",
    "link": "https://www.goevb.de/fahrplaene/fahrplaninformationen"
  },
  {
    "id": "stadt-pruefung|Hamburg|Ausbildung|Handelskammer Hamburg · Ausbildungsorientierung",
    "city": "Hamburg",
    "category": "Ausbildung",
    "title": "Handelskammer Hamburg · Ausbildungsorientierung",
    "note": "Wähle ein Berufsfeld und nutze die Hinweise der Kammer zur Suche nach einem Betrieb.",
    "link": "https://www.handelskammer-hamburg.de/aus-und-weiterbildung/berufsorientierung/meine-ausbildung-6775168"
  },
  {
    "id": "stadt-pruefung|Hamburg|Wohnen|Studierendenwerk Hamburg · Infos zur Wohnheimbewerbung",
    "city": "Hamburg",
    "category": "Wohnen",
    "title": "Studierendenwerk Hamburg · Infos zur Wohnheimbewerbung",
    "note": "Prüfe Zugangsbedingungen, Bewerbungsweg und Ablauf beim Studierendenwerk.",
    "link": "https://www.stwhh.de/wohnen/bewerbungsinformationen"
  },
  {
    "id": "stadt-pruefung|Hamburg|ÖPNV & Pendeln|hvv · Mobilität für Studierende",
    "city": "Hamburg",
    "category": "ÖPNV & Pendeln",
    "title": "hvv · Mobilität für Studierende",
    "note": "Schau nach, wie du das Ticket an deiner Hochschule erhältst und welche Regeln gelten.",
    "link": "https://www.hvv.de/de/studierende"
  },
  {
    "id": "stadt-pruefung|Hamburg|Aktivitäten|Hamburg · Kostenlose Museen und Ausstellungen",
    "city": "Hamburg",
    "category": "Aktivitäten",
    "title": "Hamburg · Kostenlose Museen und Ausstellungen",
    "note": "Suche ein Angebot aus und bestätige Öffnungszeiten sowie Eintritt direkt beim Haus.",
    "link": "https://www.hamburg.de/freizeit/kostenlose-museen-ausstellungen-333638",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Heidelberg|Ausbildung|Stadt Heidelberg · Ausbildung bei der Stadt",
    "city": "Heidelberg",
    "category": "Ausbildung",
    "title": "Stadt Heidelberg · Ausbildung bei der Stadt",
    "note": "Prüfe Berufsfelder, Zugangsvoraussetzungen und die aktuellen Ausschreibungen der Stadt.",
    "link": "https://www.heidelberg.de/hd/HD/Leben/Auszubildende.html"
  },
  {
    "id": "stadt-pruefung|Heidelberg|ÖPNV & Pendeln|VRN · Deutschlandsemesterticket",
    "city": "Heidelberg",
    "category": "ÖPNV & Pendeln",
    "title": "Universität Heidelberg · Ticketmöglichkeiten",
    "note": "Der Studierendenrat erklärt, dass die Universität Heidelberg kein Semesterticket anbietet. Prüfe stattdessen die Bedingungen von D-Ticket JugendBW und regulärem Deutschlandticket.",
    "link": "https://stura.uni-heidelberg.de/angebote/semesterticket/"
  },
  {
    "id": "stadt-pruefung|Jena|Ausbildung|Stadtwerke Jena · Ausbildung und Praktikum",
    "city": "Jena",
    "category": "Ausbildung",
    "title": "Stadtwerke Jena · Ausbildung und Praktikum",
    "note": "Vergleiche Ausbildungsprofile und nutze Praktika zur Orientierung. Details stehen bei der jeweiligen Stelle.",
    "link": "https://www.stadtwerke-jena.de/karriere/ausbildung-und-praktikum.html"
  },
  {
    "id": "stadt-pruefung|Jena|Wohnen|Studierendenwerk Thüringen · Wohnanlage Moritz-Seebeck-Straße",
    "city": "Jena",
    "category": "Wohnen",
    "title": "Studierendenwerk Thüringen · Wohnanlage Moritz-Seebeck-Straße",
    "note": "Prüfe Zimmerarten, Lage und Bewerbungsweg direkt beim Betreiber.",
    "link": "https://www.stw-thueringen.de/wohnen/jena/moritz-seebeck-strasse-15.html"
  },
  {
    "id": "stadt-pruefung|Jena|ÖPNV & Pendeln|Jenaer Nahverkehr · Fahrpläne",
    "city": "Jena",
    "category": "ÖPNV & Pendeln",
    "title": "Jenaer Nahverkehr · Fahrpläne",
    "note": "Schau nach den Bus- und Straßenbahnverbindungen zwischen Unterkunft und Ziel.",
    "link": "https://www.stadtwerke-jena.de/nahverkehr/privatkunden/fahrplaene"
  },
  {
    "id": "stadt-pruefung|Jena|Aktivitäten|Visit Jena · Museen",
    "city": "Jena",
    "category": "Aktivitäten",
    "title": "Visit Jena · Museen",
    "note": "Wähle ein Haus und prüfe Eintritt und Öffnungszeiten beim jeweiligen Betreiber.",
    "link": "https://www.visit-jena.de/kultur/museen/",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Ingolstadt|Studium|KU Ingolstadt · Betriebswirtschaftslehre B.Sc.",
    "city": "Ingolstadt",
    "category": "Studium",
    "title": "KU Ingolstadt · Betriebswirtschaftslehre B.Sc.",
    "note": "Vergleiche die Module, den Studienort und die Zulassung direkt an der KU.",
    "link": "https://www.ku.de/studienangebot/bwl-bsc"
  },
  {
    "id": "stadt-pruefung|Ingolstadt|Ausbildung|Stadt Ingolstadt · Ausbildung und Studium",
    "city": "Ingolstadt",
    "category": "Ausbildung",
    "title": "Stadt Ingolstadt · Ausbildung und Studium",
    "note": "Vergleiche kommunale Berufe und duale Angebote. Öffne das jeweilige Profil für Zugang und Bewerbungsweg.",
    "link": "https://www.ingolstadt.de/Karriere/Ausbildung-und-Studium/"
  },
  {
    "id": "stadt-pruefung|Leipzig|Duales Studium|DHSN Leipzig · Informatik",
    "city": "Leipzig",
    "category": "Duales Studium",
    "title": "DHSN Leipzig · Informatik",
    "note": "Prüfe Zulassung, Studienaufbau und Praxispartner an der Dualen Hochschule Sachsen.",
    "link": "https://www.dhsn.de/studienangebot/detail/informatik"
  },
  {
    "id": "stadt-pruefung|Leipzig|Ausbildung|Leipziger Gruppe · Ausbildung",
    "offerType": "Ausbildungsübersicht",
    "city": "Leipzig",
    "category": "Ausbildung",
    "title": "Leipziger Gruppe · Ausbildung",
    "note": "Vergleiche Ausbildungsberufe und prüfe die Anforderungen in der Ausschreibung.",
    "link": "https://www.l.de/karriere/ausbildung/"
  },
  {
    "id": "stadt-pruefung|Leipzig|Wohnen|Studentenwerk Leipzig · Wohnheimbewerbung",
    "city": "Leipzig",
    "category": "Wohnen",
    "title": "Studentenwerk Leipzig · Wohnheimbewerbung",
    "note": "Prüfe Voraussetzungen, Bewerbungsablauf und die gewünschten Wohnanlagen beim Betreiber.",
    "link": "https://www.studentenwerk-leipzig.de/wohnen/wohnheim-bewerbung/"
  },
  {
    "id": "stadt-pruefung|Leipzig|ÖPNV & Pendeln|Studentenwerk Leipzig · Semesterticket",
    "city": "Leipzig",
    "category": "ÖPNV & Pendeln",
    "title": "Studentenwerk Leipzig · Semesterticket",
    "note": "Prüfe Teilnahme, Gültigkeit und Ausgabe für deine Hochschule.",
    "link": "https://www.studentenwerk-leipzig.de/mobilitaet/semesterticket/"
  },
  {
    "id": "stadt-pruefung|Leipzig|Aktivitäten|Stadtgeschichtliches Museum Leipzig",
    "city": "Leipzig",
    "category": "Aktivitäten",
    "title": "Stadtgeschichtliches Museum Leipzig · Altes Rathaus",
    "note": "Prüfe die aktuellen Ausstellungen, Besuchszeiten und den Eintritt für das Alte Rathaus.",
    "link": "https://www.stadtgeschichtliches-museum-leipzig.de/besuch/unsere-haeuser/altes-rathaus/",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Gießen|Ausbildung|Stadtwerke Gießen · Ausbildung",
    "city": "Gießen",
    "category": "Ausbildung",
    "title": "Stadtwerke Gießen · Ausbildung",
    "note": "Vergleiche technische und kaufmännische Berufe und prüfe die konkrete Ausschreibung.",
    "link": "https://www.stadtwerke-giessen.de/de/unternehmen/karriere/ausbildung"
  },
  {
    "id": "stadt-pruefung|Gießen|ÖPNV & Pendeln|Stadtwerke Gießen · Busfahrpläne",
    "city": "Gießen",
    "category": "ÖPNV & Pendeln",
    "title": "Stadtwerke Gießen · Busfahrpläne",
    "note": "Prüfe die Linien und vergleiche Fahrzeiten zu Hochschule, Betrieb und Wohnheim.",
    "link": "https://www.stadtwerke-giessen.de/de/nahverkehr-e-mobilitaet/nahverkehr/fahrplaene"
  },
  {
    "id": "stadt-pruefung|Gießen|ÖPNV & Pendeln|AStA JLU · Deutschlandsemesterticket",
    "city": "Gießen",
    "category": "ÖPNV & Pendeln",
    "title": "AStA JLU · Deutschlandsemesterticket",
    "note": "Prüfe den Abruf und die Bedingungen für die JLU direkt beim AStA.",
    "link": "https://www.asta-giessen.de/service/semesterticket/deutschlandticket/"
  },
  {
    "id": "stadt-pruefung|Mittweida|Ausbildung|Stadt Mittweida · Ausbildungsangebote",
    "offerType": "Ausbildungsübersicht",
    "city": "Mittweida",
    "category": "Ausbildung",
    "title": "Stadt Mittweida · Ausbildungsangebote",
    "note": "Prüfe die Berufsfelder und weiterführenden Links der Stadt.",
    "link": "https://www.mittweida.de/buergerservice/kinder-und-bildung/ausbildung/"
  },
  {
    "id": "stadt-pruefung|Tübingen|Aktivitäten|Stadt Tübingen · Museen",
    "city": "Tübingen",
    "category": "Aktivitäten",
    "title": "Stadt Tübingen · Museen",
    "note": "Suche ein Haus aus und prüfe Eintritt, Öffnungszeiten und Anreise.",
    "link": "https://www.tuebingen.de/museen",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Tübingen|ÖPNV & Pendeln|TüBus · Tickets für Stadt und Region",
    "city": "Tübingen",
    "category": "ÖPNV & Pendeln",
    "title": "TüBus · Tickets für Stadt und Region",
    "note": "Vergleiche die Ticketarten und prüfe, welches Angebot zu deiner Strecke passt.",
    "link": "https://www.tuebus.de/tickets.html"
  },
  {
    "id": "stadt-pruefung|Köln|Studium|TH Köln · Soziale Arbeit B.A.",
    "city": "Köln",
    "category": "Studium",
    "title": "TH Köln · Soziale Arbeit B.A.",
    "note": "Vergleiche Praxisanteile, Module und Zugang mit anderen Studiengängen.",
    "link": "https://www.th-koeln.de/studium/soziale-arbeit-bachelor_259.php"
  },
  {
    "id": "stadt-pruefung|Köln|Studienstart|TH Köln · Schnupperangebote",
    "city": "Köln",
    "category": "Studienstart",
    "title": "TH Köln · Schnupperangebote",
    "note": "Wähle ein Format zum Ausprobieren und prüfe, ob du dich vorher anmelden musst.",
    "link": "https://www.th-koeln.de/studium/schnupperangebote_123763.php"
  },
  {
    "id": "stadt-pruefung|Köln|Ausbildung|Stadt Köln · Ausbildungsangebot",
    "offerType": "Ausbildungsübersicht",
    "city": "Köln",
    "category": "Ausbildung",
    "title": "Stadt Köln · Ausbildungsangebot",
    "note": "Wähle ein Berufsprofil und prüfe Schulabschluss, Aufgaben und Bewerbung.",
    "link": "https://www.stadt-koeln.de/politik-und-verwaltung/ausbildung-karriere-bei-der-stadt/ausbildung/ausbildungsangebot"
  },
  {
    "id": "stadt-pruefung|Köln|Duales Studium|Stadt Köln · Duale Studienangebote",
    "city": "Köln",
    "category": "Duales Studium",
    "title": "Stadt Köln · Duale Studienangebote",
    "note": "Vergleiche die kommunalen Studienangebote nach Praxisort, Abschluss und Zugang.",
    "link": "https://www.stadt-koeln.de/politik-und-verwaltung/ausbildung-karriere-bei-der-stadt/ausbildung/studienangebot?cnw_autotranslate=de"
  },
  {
    "id": "stadt-pruefung|Köln|Wohnen|Kölner Studierendenwerk · Wohnheimbewerbung",
    "city": "Köln",
    "category": "Wohnen",
    "title": "Kölner Studierendenwerk · Wohnheimbewerbung",
    "note": "Prüfe die Unterlagen und öffne die Bewerbung des Betreibers.",
    "link": "https://www.kstw.de/wohnen/bewerbung/"
  },
  {
    "id": "stadt-pruefung|Köln|ÖPNV & Pendeln|KVB · Deutschlandsemesterticket",
    "city": "Köln",
    "category": "ÖPNV & Pendeln",
    "title": "KVB · Deutschlandsemesterticket",
    "note": "Prüfe die Regeln und den Abruf an deiner Hochschule.",
    "link": "https://www.kvb.koeln/abos-und-tickets/alle-abos/deutschlandsemesterticket.html"
  },
  {
    "id": "stadt-pruefung|Köln|Aktivitäten|Köln · Flora und Botanischer Garten",
    "city": "Köln",
    "category": "Aktivitäten",
    "title": "Köln · Flora und Botanischer Garten",
    "note": "Prüfe Öffnungszeiten und plane die Anfahrt zur Flora.",
    "link": "https://www.stadt-koeln.de/leben-in-koeln/freizeit-natur-sport/parks/flora-und-botanischer-garten",
    "activity": "Draußen"
  },
  {
    "id": "stadt-pruefung|Leipzig|Studienstart|Uni Leipzig · Schnupperangebote für Geschichte, Kunst und Regionalwissenschaften",
    "city": "Leipzig",
    "category": "Studienstart",
    "title": "HTWK Leipzig · Schnupperangebote und Museologie",
    "note": "Die HTWK Leipzig bietet Einblicke in Studiengänge, darunter Museologie. Öffne das passende Format und prüfe den nächsten Termin sowie die Anmeldung.",
    "link": "https://www.htwk-leipzig.de/studieren/vor-dem-studium/schnuppertage"
  },
  {
    "id": "stadt-pruefung|Leipzig|Ausbildung|HWK Leipzig · Lehrstellen und Praktika",
    "offerType": "Stellensuche",
    "city": "Leipzig",
    "category": "Ausbildung",
    "title": "HWK Leipzig · Lehrstellen und Praktika",
    "note": "Suche nach Beruf und Arbeitsort. Ein Praktikum kann beim Vergleich zweier Berufe helfen.",
    "link": "https://www.hwk-leipzig.de/artikel/freie-lehrstellen-und-praktikumsplaetze-im-handwerk-3%2C1077%2C596.html"
  },
  {
    "id": "stadt-pruefung|Marburg|Studium|Uni Marburg · Germanistik B.A.",
    "city": "Marburg",
    "category": "Studium",
    "title": "Uni Marburg · Germanistik B.A.",
    "note": "Vergleiche Inhalte, Fächerkombination und Zugang mit Kunstgeschichte.",
    "link": "https://www.uni-marburg.de/de/studium/vor-dem-studium/studienangebot/bachelor/hauptfach/germanistik"
  },
  {
    "id": "stadt-pruefung|Marburg|Studienstart|Uni Marburg · Schnupperstudium",
    "city": "Marburg",
    "category": "Studienstart",
    "title": "Uni Marburg · Schnupperstudium",
    "note": "Suche ein Fach zum Ausprobieren und prüfe Termine und Anmeldung.",
    "link": "https://www.uni-marburg.de/de/studium/vor-dem-studium/studienfach-finden/angebote-zur-studienorientierung/angebote-fuer-schuelerinnen-und-schueler/schnupperstudium"
  },
  {
    "id": "stadt-pruefung|Marburg|Ausbildung|Stadt Marburg · Ausbildung und duales Studium",
    "offerType": "Ausbildungsübersicht",
    "city": "Marburg",
    "category": "Ausbildung",
    "title": "Stadt Marburg · Ausbildung und duales Studium",
    "note": "Öffne ein Berufsprofil und prüfe Schulabschluss, Bewerbungsfrist und Aufgaben beim Arbeitgeber.",
    "link": "https://www.marburg.de/aktuelles/jobs-und-karriere/ausbildung-und-duales-studium/"
  },
  {
    "id": "stadt-pruefung|Marburg|Duales Studium|Landkreis Marburg-Biedenkopf · Ausbildung und Studium",
    "city": "Marburg",
    "category": "Duales Studium",
    "title": "Landkreis Marburg-Biedenkopf · Ausbildung und Studium",
    "note": "Vergleiche duale Verwaltungswege. Prüfe Einsatzort, Hochschulort und Zugang bei der konkreten Ausschreibung.",
    "link": "https://www.karriere-marburg-biedenkopf.de/ausbildung-studium-praktikum-und-mehr/"
  },
  {
    "id": "stadt-pruefung|Marburg|Wohnen|Studierendenwerk Marburg · Wohnheimbewerbung",
    "city": "Marburg",
    "category": "Wohnen",
    "title": "Studierendenwerk Marburg · Wohnheimbewerbung",
    "note": "Prüfe Voraussetzungen und fülle bei Bedarf den Antrag beim Betreiber aus.",
    "link": "https://studierendenwerk-marburg.de/wohnen/onlinebewerbung/"
  },
  {
    "id": "stadt-pruefung|Marburg|ÖPNV & Pendeln|Stadtbus Marburg · Verbindungen",
    "city": "Marburg",
    "category": "ÖPNV & Pendeln",
    "title": "Stadtbus Marburg · Verbindungen",
    "note": "Plane eine Fahrt zur Hochschule oder zum Betrieb und prüfe die Rückfahrt.",
    "link": "https://www.stadtbus-marburg.de/verbindungen"
  },
  {
    "id": "stadt-pruefung|Marburg|Aktivitäten|Uni Marburg · Kunstmuseum",
    "city": "Marburg",
    "category": "Aktivitäten",
    "title": "Uni Marburg · Kunstmuseum",
    "note": "Prüfe Ausstellungen und Besuchsbedingungen auf der Museumsseite.",
    "link": "https://www.uni-marburg.de/de/museum/ausstellungen/informationen",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Mittweida|Studium|Hochschule Mittweida · Medienmanagement B.A.",
    "city": "Mittweida",
    "category": "Studium",
    "title": "Hochschule Mittweida · Medienmanagement B.A.",
    "note": "Vergleiche die Inhalte und Bewerbungsvoraussetzungen mit Angewandter Informatik.",
    "link": "https://www.hs-mittweida.de/studieren/studienangebote/medienmanagement-bachelor/"
  },
  {
    "id": "stadt-pruefung|Mittweida|Duales Studium|Hochschule Mittweida · Wirtschaftsingenieurwesen dual",
    "city": "Mittweida",
    "category": "Duales Studium",
    "title": "Hochschule Mittweida · Wirtschaftsingenieurwesen dual",
    "note": "Prüfe Studienaufbau, Voraussetzungen und Rolle des Praxisbetriebs.",
    "link": "https://www.hs-mittweida.de/studieren/studienangebote/wirtschaftsingenieurwesen-duales-studium/"
  },
  {
    "id": "stadt-pruefung|Mittweida|Wohnen|Studentenwerk Freiberg · Fragen zu Wohnheim und Bewerbung",
    "city": "Mittweida",
    "category": "Wohnen",
    "title": "Studentenwerk Freiberg · Fragen zu Wohnheim und Bewerbung",
    "note": "Informiere dich über Vergabe und Vertrag. Das Studentenwerk verlinkt sein Mietportal.",
    "link": "https://www.studentenwerk-freiberg.de/wohnen/faq/"
  },
  {
    "id": "stadt-pruefung|Mittweida|ÖPNV & Pendeln|VMS · Haltestellenplan Mittweida Busbahnhof",
    "city": "Mittweida",
    "category": "ÖPNV & Pendeln",
    "title": "VMS · Haltestellenplan Mittweida Busbahnhof",
    "note": "Prüfe den Umstieg am Busbahnhof und plane die Verbindung zum Campus im Fahrplan.",
    "link": "https://www.vms.de/haltestellenplaene/mittweida-busbahnhof/"
  },
  {
    "id": "stadt-pruefung|Mittweida|ÖPNV & Pendeln|City-Bahn · Linienfahrpläne mit C14",
    "city": "Mittweida",
    "category": "ÖPNV & Pendeln",
    "title": "City-Bahn · Linienfahrpläne mit C14",
    "note": "Vergleiche die Fahrzeiten zwischen Mittweida und Chemnitz und prüfe Änderungen für deinen Reisetag.",
    "link": "https://www.city-bahn.de/linien-fahrplaene/linienfahrplaene/"
  },
  {
    "id": "stadt-pruefung|Mittweida|Aktivitäten|Stadt Mittweida · Museum Alte Pfarrhäuser",
    "city": "Mittweida",
    "category": "Aktivitäten",
    "title": "Stadt Mittweida · Museum Alte Pfarrhäuser",
    "note": "Prüfe Ausstellungen, Öffnungszeiten und Besuchsbedingungen bei der Stadt.",
    "link": "https://www.mittweida.de/tourismus-kultur/kunst-kultur/museum-alte-pfarrhaeuser/",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|München|Studium|LMU · Geschichte B.A. Hauptfach",
    "city": "München",
    "category": "Studium",
    "title": "LMU · Geschichte B.A. Hauptfach",
    "note": "Vergleiche Epochen, Methoden und Nebenfachmöglichkeiten. Prüfe Zugang und Bewerbung an der LMU.",
    "link": "https://www.lmu.de/de/studium/studienangebot/alle-studienfaecher-und-studiengaenge/geschichte-bachelor-hauptfach-2905.html"
  },
  {
    "id": "stadt-pruefung|München|Studienstart|LMU · Schnupperangebote und Orientierung",
    "city": "München",
    "category": "Studienstart",
    "title": "LMU · Schnupperangebote und Orientierung",
    "note": "Wähle ein Format und prüfe Termine und Anmeldung.",
    "link": "https://www.lmu.de/de/studium/beratung-und-orientierung/lmu-erleben/"
  },
  {
    "id": "stadt-pruefung|München|Ausbildung|Stadt München · Ausbildung und duales Studium",
    "offerType": "Ausbildungsübersicht",
    "city": "München",
    "category": "Ausbildung",
    "title": "Stadt München · Ausbildung und duales Studium",
    "note": "Vergleiche kommunale Berufswege nach Aufgaben, Voraussetzungen und Bewerbung.",
    "link": "https://stadt.muenchen.de/rathaus/karriere/ausbildung.html"
  },
  {
    "id": "stadt-pruefung|München|Ausbildung|HWK München · Praktikums- und Lehrstellenbörse",
    "offerType": "Stellensuche",
    "city": "München",
    "category": "Ausbildung",
    "title": "HWK München · Praktikums- und Lehrstellenbörse",
    "note": "Grenze die Suche auf München und deinen Pendelradius ein. Prüfe Verfügbarkeit beim Betrieb.",
    "link": "https://www.hwk-muenchen.de/artikel/praktikums-und-lehrstellenboerse-74%2C4413%2C3783.html"
  },
  {
    "id": "stadt-pruefung|Neckarsulm|Ausbildung|Stadt Neckarsulm · Verwaltungsfachangestellte",
    "city": "Neckarsulm",
    "category": "Ausbildung",
    "title": "Stadt Neckarsulm · Verwaltungsfachangestellte",
    "note": "Das städtische Profil nennt mindestens die mittlere Reife mit guten Noten, besonders in Deutsch. Die Praxis ist im Rathaus Neckarsulm, die Berufsschule in Heilbronn. Prüfe offene Plätze im Karriereportal.",
    "offerType": "Ausbildungsprofil",
    "link": "https://karriereportal.neckarsulm.de/ausbildung-und-studium/ausbildung-verwaltungsfachangestellter-kommunalverwaltung/"
  },
  {
    "id": "stadt-pruefung|Neckarsulm|Wohnen|Stadt Neckarsulm · Wohnberechtigungsschein",
    "city": "Neckarsulm",
    "category": "Wohnen",
    "title": "Stadt Neckarsulm · Wohnberechtigungsschein",
    "note": "Prüfe, ob geförderter Wohnraum für dich infrage kommt, und welche Unterlagen die Stadt benötigt.",
    "link": "https://www.neckarsulm.de/startseite/unsere%2Bstadt/wohnberechtigungsschein%2Bund%2Bgefoerderter%2Bwohnraum.html"
  },
  {
    "id": "stadt-pruefung|Neckarsulm|ÖPNV & Pendeln|HNV · Verbindungsauskunft",
    "city": "Neckarsulm",
    "category": "ÖPNV & Pendeln",
    "title": "HNV · Verbindungsauskunft",
    "note": "Prüfe Hin- und Rückfahrt zwischen deinem Wohnort und Betrieb zu typischen Arbeitszeiten.",
    "link": "https://www.mein-hnv.de/verbindungen"
  },
  {
    "id": "stadt-pruefung|Heilbronn|Studienstart|Hochschule Heilbronn · Studieren probieren",
    "city": "Heilbronn",
    "category": "Studienstart",
    "title": "Hochschule Heilbronn · Studieren probieren",
    "note": "Wähle ein Fach und prüfe, welche Schnupperangebote am passenden Campus stattfinden.",
    "link": "https://www.hs-heilbronn.de/de/studieren-probieren"
  },
  {
    "id": "stadt-pruefung|Göttingen|Aktivitäten|Forum Wissen · Besuch planen",
    "city": "Göttingen",
    "category": "Aktivitäten",
    "title": "Forum Wissen · Besuch planen",
    "note": "Prüfe Öffnungszeiten, Eintritt und Anfahrt beim Museum der Universität.",
    "link": "https://www.forum-wissen.de/besuch/",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Heidelberg|Aktivitäten|Kurpfälzisches Museum · Besuch planen",
    "city": "Heidelberg",
    "category": "Aktivitäten",
    "title": "Kurpfälzisches Museum · Besuch planen",
    "note": "Prüfe Eintritt, Öffnungszeiten und Anreise direkt beim Museum.",
    "link": "https://www.museum-heidelberg.de/Museum-Heidelberg%2CLds/startseite/besuch/",
    "activity": "Kultur"
  },
  {
    "id": "stadt-pruefung|Gießen|Aktivitäten|Mathematikum · Besuch planen",
    "city": "Gießen",
    "category": "Aktivitäten",
    "title": "Mathematikum · Besuch planen",
    "note": "Prüfe Öffnungszeiten, Eintritt und mögliche Ermäßigungen beim Betreiber.",
    "link": "https://www.mathematikum.de/besucherinfos/aktuelle-besuchsinfos",
    "activity": "Technik"
  },
  {
    "id": "stadt-pruefung|Tübingen|Ausbildung|Bundesagentur für Arbeit · Ausbildungssuche Tübingen",
    "offerType": "Stellensuche",
    "city": "Tübingen",
    "category": "Ausbildung",
    "title": "Bundesagentur für Arbeit · Ausbildungssuche Tübingen",
    "note": "Grenze die Suche nach Beruf und Umkreis ein. Prüfe Schulabschluss und Frist in der Ausschreibung.",
    "link": "https://www.arbeitsagentur.de/jobsuche/suche?suchbereich=ausbildung&wo=T%C3%BCbingen"
  },
  {
    "id": "stadt-pruefung|Tübingen|Studium|Uni Tübingen · Geschichtswissenschaft B.A.",
    "city": "Tübingen",
    "category": "Studium",
    "title": "Uni Tübingen · Geschichtswissenschaft B.A.",
    "note": "Vergleiche Studienaufbau, Epochen und Fächerkombinationen mit Sprachwissenschaft.",
    "link": "https://uni-tuebingen.de/studium/studienangebot/verzeichnis-der-studiengaenge/detail/course/geschichtswissenschaft-bachelor-hauptfach/"
  },
  {
    "id": "stadt-pruefung|Tübingen|Studienstart|Uni Tübingen · Schnupperstudium",
    "city": "Tübingen",
    "category": "Studienstart",
    "title": "Uni Tübingen · Schnupperstudium",
    "note": "Suche eine Lehrveranstaltung und prüfe, ob du dich vorab anmelden musst.",
    "link": "https://uni-tuebingen.de/studium/studieninteresse/angebote-fuer-studieninteressierte/schnupperstudium/"
  },
  {
    "id": "stadt-pruefung|Tübingen|Ausbildung|Stadtwerke Tübingen · Ausbildungsberufe",
    "city": "Tübingen",
    "category": "Ausbildung",
    "title": "Stadtwerke Tübingen · Ausbildungsberufe",
    "note": "Vergleiche die Berufsprofile und prüfe Schulabschluss, Einsatzort und Bewerbung.",
    "link": "https://www.swtue.de/unternehmen/karriere/ausbildung-und-studium/ausbildung.html"
  },
  {
    "id": "stadt-pruefung|Tübingen|Duales Studium|Stadtwerke Tübingen · Duales Studium",
    "city": "Tübingen",
    "category": "Duales Studium",
    "title": "Stadtwerke Tübingen · Duales Studium",
    "note": "Vergleiche die Angebote mit Praxis in Tübingen. Prüfe den Hochschulort je Studiengang.",
    "link": "https://www.swtue.de/unternehmen/karriere/ausbildung-und-studium/duales-studium.html"
  },
  {
    "id": "stadt-pruefung|Tübingen|Wohnen|Studierendenwerk Tübingen-Hohenheim · Onlinebewerbung",
    "city": "Tübingen",
    "category": "Wohnen",
    "title": "Studierendenwerk Tübingen-Hohenheim · Onlinebewerbung",
    "note": "Prüfe Voraussetzungen, Unterlagen und Bewerbungsablauf beim Betreiber.",
    "link": "https://www.my-stuwe.de/wohnen/online-bewerbung/"
  },
  {
    "id": "stadt-pruefung|Tübingen|ÖPNV & Pendeln|naldo · Fahrplanauskunft",
    "city": "Tübingen",
    "category": "ÖPNV & Pendeln",
    "title": "naldo · Fahrplanauskunft",
    "note": "Plane Hin- und Rückweg zum Betrieb oder Campus für einen typischen Werktag.",
    "link": "https://www.naldo.de/fahrplan/app/"
  },

{
    "id": "2026-11-11|Handys|Nothing Phone (4a)",
    "category": "Handys",
    "city": "Überregional",
    "title": "Nothing Phone (4a)",
    "link": "https://nothing.tech/products/phone-4a",
    "note": "Android-Smartphone. Prüfe Ausstattung, Region und verfügbare Varianten beim Hersteller.",
    "deviceType": "Smartphone",
    "ecosystems": [
      "android"
    ]
  },
  {
    "id": "2026-11-11|Tablets|Lenovo Legion Tab Gen 3",
    "category": "Tablets",
    "city": "Überregional",
    "title": "Lenovo Legion Tab Gen 3",
    "link": "https://www.lenovo.com/de/de/p/tablets/android-tablets/legion-tab-series/lenovo-legion-tab-gen-3/len103g0002",
    "note": "Kompaktes Android-Tablet. Zubehör und Speichervarianten beim Hersteller abgleichen.",
    "deviceType": "Tablet",
    "ecosystems": [
      "android"
    ]
  },
  {
    "id": "2026-11-11|Smart-Gadgets|Garmin Venu X1",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Garmin Venu X1",
    "link": "https://www.garmin.com/de-DE/p/1510465/pn/010-02980-02/",
    "note": "Sportuhr für Training und Alltag. Kompatibilität und Funktionen beim Hersteller prüfen.",
    "deviceType": "Sportuhr",
    "ecosystems": [
      "apple",
      "android"
    ]
  },
  {
    "id": "2026-11-11|Wohnen|Studentenwerk Dresden · Wohnheim Wundtstraße 1",
    "category": "Wohnen",
    "city": "Dresden",
    "title": "Studentenwerk Dresden · Wohnheim Wundtstraße 1",
    "link": "https://www.studentenwerk-dresden.de/wohnen/wohnheimkatalog/details-wundtstrasse-1.html",
    "note": "Wohnheim am Campus. Zimmerarten, Voraussetzungen und Bewerbung beim Betreiber prüfen."
  },
  {
    "id": "2026-11-11|Autos|Škoda Elroq",
    "category": "Autos",
    "city": "Überregional",
    "title": "Škoda Elroq",
    "link": "https://www.skoda-auto.de/promotions/promotion-detail/elroq",
    "note": "Kompakter Elektro-SUV. Varianten und Ladebedarf beim Hersteller vergleichen.",
    "segment": "Neuwagen"
  },
  {
    "id": "2026-11-11|Fahrschulen|Die Fahrschule Dresden",
    "category": "Fahrschulen",
    "city": "Dresden",
    "title": "Die Fahrschule Dresden",
    "link": "https://www.die-fahrschule.info/",
    "note": "Führerscheinklassen, Anfahrt und Gesamtkosten direkt beim Anbieter prüfen."
  },
  {
    "id": "2026-11-11|Studienstart|TU Dresden · ServiceCenterStudium",
    "category": "Studienstart",
    "city": "Dresden",
    "title": "TU Dresden · ServiceCenterStudium",
    "link": "https://tu-dresden.de/studium/im-studium/beratung-und-service/servicecenterstudium",
    "note": "Anlaufstelle für Fragen zu Bewerbung, Einschreibung und Studienorganisation."
  },
  {
    "id": "2026-11-11|Vorteile|Studentenwerk Dresden · BAföG und Studienstarthilfe",
    "category": "Vorteile",
    "city": "Dresden",
    "title": "Studentenwerk Dresden · BAföG und Studienstarthilfe",
    "link": "https://www.studentenwerk-dresden.de/finanzierung/bafoeg.html",
    "note": "Offizielle Informationen zu Voraussetzungen und Antrag. Anspruch individuell prüfen.",
    "topic": "Studium & Software",
    "kind": "Förderung prüfen"
  },
  {
    "id": "2026-11-11|Aktivitäten|Historisches Grünes Gewölbe",
    "category": "Aktivitäten",
    "city": "Dresden",
    "title": "Historisches Grünes Gewölbe",
    "link": "https://shop.skd.museum/historisches-gruenes-gewoelbe-green-vault-timeticket.html",
    "note": "Historische Schatzkammer im Dresdner Residenzschloss. Zeitfenster und Besuchshinweise prüfen.",
    "activity": "Kultur"
  },
  {
    "id": "2026-11-11|ÖPNV & Pendeln|DVB · Dresdner Bergbahnen",
    "category": "ÖPNV & Pendeln",
    "city": "Dresden",
    "title": "DVB · Dresdner Bergbahnen",
    "link": "https://www.dvb.de/de-de/entdecken/bergbahnen",
    "note": "Standseilbahn und Schwebebahn. Fahrplan und Sondertarif vor der Fahrt prüfen."
  },
  {
    "id": "2026-11-11|Reiseideen|Schloss Moritzburg ab Dresden",
    "category": "Reiseideen",
    "city": "Dresden",
    "title": "Schloss Moritzburg ab Dresden",
    "link": "https://www.schloss-moritzburg.de/de/gaesteservice/anreise/",
    "note": "Tagesausflug zum Wasserschloss. Bus, Eintritt und Rückfahrt einzeln prüfen.",
    "segment": "Tagesausflug",
    "tripCap": 40,
    "plan": [
      "Vormittags die Busverbindung aus Dresden nach Moritzburg prüfen.",
      "Schlossbesuch oder Spaziergang am Schlossteich einplanen und Öffnung vorab prüfen.",
      "Mit Proviant planen und die passende Rückfahrt vor der Abfahrt speichern."
    ]
  },
  {
    "id": "2026-11-11|Unterkünfte|DJH Dresden-Radebeul",
    "category": "Unterkünfte",
    "city": "Dresden",
    "title": "DJH Dresden-Radebeul",
    "link": "https://www.jugendherberge.de/jugendherbergen/dresden-radebeul",
    "note": "Jugendherberge im Dresdner Umland in Radebeul. Buchung, Anfahrt und Gesamtpreis beim Betreiber prüfen.",
    "segment": "Hostel"
  },
  {
    "id": "2026-11-11|Studium|TU Dresden · Verkehrswirtschaft (B.Sc.)",
    "category": "Studium",
    "city": "Dresden",
    "title": "TU Dresden · Verkehrswirtschaft (B.Sc.)",
    "link": "https://tu-dresden.de/bu/verkehr/studium/vor-dem-studium/studienangebot/vwi",
    "note": "Bachelorstudium zu Wirtschaft und Verkehrssystemen. Studienaufbau und Zugang bei der Hochschule prüfen.",
    "topic": "Verkehrswirtschaft",
    "field": "gesellschaft"
  },

{
    "id": "dresden-erweiterung|Handys|Nothing Phone (3a) Pro",
    "category": "Handys",
    "city": "Überregional",
    "title": "Nothing Phone (3a) Pro",
    "link": "https://de.nothing.tech/products/phone-3a-pro",
    "note": "Android-Smartphone mit Nothing OS. Größe und Hersteller-Support mit anderen Modellen vergleichen.",
    "ecosystems": [
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "dresden-erweiterung|Handys|CMF Phone 2 Pro",
    "category": "Handys",
    "city": "Überregional",
    "title": "CMF Phone 2 Pro",
    "link": "https://de.nothing.tech/products/cmf-phone-2-pro",
    "note": "Android-Modell von CMF. Zubehör und Anschlussoptionen auf der Herstellerseite prüfen.",
    "ecosystems": [
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "dresden-erweiterung|Handys|Fairphone (Gen. 6)",
    "category": "Handys",
    "city": "Überregional",
    "title": "Fairphone (Gen. 6)",
    "link": "https://www.fairphone.com/the-fairphone-gen-6",
    "note": "Für die Auswahl nach Reparierbarkeit. Ersatzteile und Softwareunterstützung beim Hersteller prüfen.",
    "ecosystems": [
      "android"
    ],
    "deviceType": "Smartphone"
  },
  {
    "id": "dresden-erweiterung|Tablets|reMarkable Paper Pure",
    "category": "Tablets",
    "city": "Überregional",
    "title": "reMarkable Paper Pure",
    "link": "https://remarkable.com/products/remarkable-paper/pure",
    "note": "E-Paper-Schreibtablet für Notizen und PDFs. Stift, Dateiformate und Zubehör prüfen.",
    "deviceType": "E-Paper-Tablet",
    "ecosystems": [
      "apple",
      "android"
    ]
  },
  {
    "id": "dresden-erweiterung|Tablets|reMarkable Paper Pro",
    "category": "Tablets",
    "city": "Überregional",
    "title": "reMarkable Paper Pro",
    "link": "https://remarkable.com/products/remarkable-paper/pro",
    "note": "E-Paper-Tablet mit Farbdarstellung für Notizen und Markierungen.",
    "deviceType": "E-Paper-Tablet",
    "ecosystems": [
      "apple",
      "android"
    ]
  },
  {
    "id": "dresden-erweiterung|Tablets|reMarkable Paper Pro Move",
    "category": "Tablets",
    "city": "Überregional",
    "title": "reMarkable Paper Pro Move",
    "link": "https://remarkable.com/products/remarkable-paper/pro-move",
    "note": "Kompakteres E-Paper-Tablet zum Mitschreiben unterwegs.",
    "deviceType": "E-Paper-Tablet",
    "ecosystems": [
      "apple",
      "android"
    ]
  },
  {
    "id": "dresden-erweiterung|Smart-Gadgets|Garmin vívosmart 5",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Garmin vívosmart 5",
    "link": "https://www.garmin.com/de-DE/p/782585/pn/010-02645-10/",
    "note": "Fitnessarmband. Kopplung und benötigte Funktionen vor dem Kauf prüfen.",
    "ecosystems": [
      "apple",
      "android"
    ],
    "deviceType": "Fitness-Tracker"
  },
  {
    "id": "dresden-erweiterung|Smart-Gadgets|Garmin Lily 2",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Garmin Lily 2",
    "link": "https://www.garmin.com/de-DE/p/950277/pn/010-02839-00/",
    "note": "Kompakte Uhr für Alltag und Aktivitäten.",
    "ecosystems": [
      "apple",
      "android"
    ],
    "deviceType": "Smartwatch"
  },
  {
    "id": "dresden-erweiterung|Smart-Gadgets|Garmin Instinct 3 Solar (45 mm)",
    "category": "Smart-Gadgets",
    "city": "Überregional",
    "title": "Garmin Instinct 3 Solar (45 mm)",
    "link": "https://www.garmin.com/de-DE/p/1315317/pn/010-02934-00/",
    "note": "Outdoor-Uhr mit Solarladung. Varianten und Funktionen beim Hersteller vergleichen.",
    "ecosystems": [
      "apple",
      "android"
    ],
    "deviceType": "Sportuhr"
  },
  {
    "id": "dresden-erweiterung|Wohnen|Studentenwerk Dresden · Wohnheimkatalog",
    "category": "Wohnen",
    "city": "Dresden",
    "title": "Studentenwerk Dresden · Wohnheimkatalog",
    "link": "https://www.studentenwerk-dresden.de/wohnen/wohnheimkatalog/",
    "note": "Nach Wohnheimen und Lage filtern. Konditionen und Verfügbarkeit beim Betreiber prüfen."
  },
  {
    "id": "dresden-erweiterung|Wohnen|Studentenwerk Dresden · Wohnheimantrag",
    "category": "Wohnen",
    "city": "Dresden",
    "title": "Studentenwerk Dresden · Wohnheimantrag",
    "link": "https://www.studentenwerk-dresden.de/wohnen/antrag.html",
    "note": "Offizieller Antragsweg für ein Wohnheimzimmer. Voraussetzungen und Nachweise vorab lesen."
  },
  {
    "id": "dresden-erweiterung|Wohnen|Studentenwerk Dresden · Untermietbörse",
    "category": "Wohnen",
    "city": "Dresden",
    "title": "Studentenwerk Dresden · Untermietbörse",
    "link": "https://www.studentenwerk-dresden.de/wohnen/untermietboerse-angebote.html",
    "note": "Betreiberübersicht für zeitlich begrenzte Wohnheim-Untermiete. Angaben direkt vor Ort prüfen."
  },
  {
    "id": "dresden-erweiterung|Fahrschulen|Stephan’s Fahrschule Dresden",
    "category": "Fahrschulen",
    "city": "Dresden",
    "title": "Stephan’s Fahrschule Dresden",
    "link": "https://www.stephansfahrschule-dresden.de/",
    "note": "Anbieterinformationen zu Führerscheinklassen und Unterricht."
  },
  {
    "id": "dresden-erweiterung|Fahrschulen|Fahrschule Uwe Keipert",
    "category": "Fahrschulen",
    "city": "Dresden",
    "title": "Fahrschule Uwe Keipert",
    "link": "https://fahrschule-dresden-keipert.de/",
    "note": "Direkt beim Anbieter nach Unterricht, Klassen und vollständigen Ausbildungskosten fragen."
  },
  {
    "id": "dresden-erweiterung|Studienstart|TU Dresden · Unterstützung für Erstsemester",
    "category": "Studienstart",
    "city": "Dresden",
    "title": "TU Dresden · Unterstützung für Erstsemester",
    "link": "https://tu-dresden.de/studium/im-studium/beratung-und-service/zentrale-studienberatung/passt/erstsemester?set_language=de",
    "note": "Orientierung und Anlaufstellen vor dem Semesterstart."
  },
  {
    "id": "dresden-erweiterung|Studienstart|SLUB Dresden · Angebote für Erstsemester",
    "category": "Studienstart",
    "city": "Dresden",
    "title": "SLUB Dresden · Angebote für Erstsemester",
    "link": "https://www.slub-dresden.de/besuchen/angebote-fuer-erstsemester",
    "note": "Bibliothek kennenlernen und Hilfen für Recherche und Einstieg finden."
  },
  {
    "id": "dresden-erweiterung|Studienstart|Dresdner Hochschulsportzentrum · Buchungshinweise",
    "category": "Studienstart",
    "city": "Dresden",
    "title": "Dresdner Hochschulsportzentrum · Buchungshinweise",
    "link": "https://tu-dresden.de/dhsz/kontakt-service/hinweise-zur-buchung",
    "note": "Teilnahmebedingungen und Kursbuchung für den Hochschulsport prüfen."
  },
  {
    "id": "dresden-erweiterung|Aktivitäten|Gemäldegalerie Alte Meister",
    "category": "Aktivitäten",
    "city": "Dresden",
    "title": "Gemäldegalerie Alte Meister",
    "link": "https://gemaeldegalerie.skd.museum/",
    "note": "Gemäldesammlung im Zwinger. Vor dem Besuch Öffnungszeiten und Eintritt prüfen.",
    "activity": "Kultur"
  },
  {
    "id": "dresden-erweiterung|Aktivitäten|Verkehrsmuseum Dresden",
    "category": "Aktivitäten",
    "city": "Dresden",
    "title": "Verkehrsmuseum Dresden",
    "link": "https://www.verkehrsmuseum-dresden.de/",
    "note": "Ausstellungen rund um Verkehr und Mobilität. Programm und Besuchsinfos direkt beim Museum.",
    "activity": "Kultur"
  },
  {
    "id": "dresden-erweiterung|Aktivitäten|Deutsches Hygiene-Museum Dresden",
    "category": "Aktivitäten",
    "city": "Dresden",
    "title": "Deutsches Hygiene-Museum Dresden",
    "link": "https://www.dhmd.de/besuch/zeiten-preise",
    "note": "Ausstellungen zu Mensch und Gesellschaft. Aktuelle Besuchsbedingungen beim Museum prüfen.",
    "activity": "Kultur"
  },
  {
    "id": "dresden-erweiterung|ÖPNV & Pendeln|DVB mobil · Fahrplan und Tickets",
    "category": "ÖPNV & Pendeln",
    "city": "Dresden",
    "title": "DVB mobil · Fahrplan und Tickets",
    "link": "https://www.dvb.de/de-de/die-dvb/dvb-apps/dvb-mobil",
    "note": "Verbindungen zur Hochschule und Rückfahrt im Fahrplan prüfen."
  },
  {
    "id": "dresden-erweiterung|ÖPNV & Pendeln|DVB · Dresdner Elbfähren",
    "category": "ÖPNV & Pendeln",
    "city": "Dresden",
    "title": "DVB · Dresdner Elbfähren",
    "link": "https://www.dvb.de/de-de/entdecken/elbfaehren",
    "note": "Fährstandorte, Betriebszeiten und Tarif vor der Fahrt prüfen."
  },
  {
    "id": "dresden-erweiterung|ÖPNV & Pendeln|DVB · MOBI",
    "category": "ÖPNV & Pendeln",
    "city": "Dresden",
    "title": "DVB · MOBI",
    "link": "https://www.dvb.de/de-de/die-dvb/mobi/",
    "note": "Anlaufstelle für Sharing und verknüpfte Mobilitätsangebote in Dresden."
  },
  {
    "id": "dresden-erweiterung|Reiseideen|Von Dresden nach Pillnitz",
    "category": "Reiseideen",
    "city": "Dresden",
    "title": "Von Dresden nach Pillnitz",
    "link": "https://www.schlosspillnitz.de/gaesteservice/anreise/",
    "note": "Tagesausflug zum Schlosspark. Eintritt und Anfahrt separat prüfen.",
    "segment": "Tagesausflug",
    "plan": [
      "Vormittags die passende Verbindung nach Pillnitz prüfen und anreisen.",
      "Zeit für Schloss und Park einplanen. Eintritt vor Ort beim Betreiber prüfen.",
      "Nach einer Proviantpause die Rückfahrt nach Dresden antreten."
    ],
    "tripCap": 30
  },
  {
    "id": "dresden-erweiterung|Reiseideen|Radebeul und Lößnitzgrundbahn",
    "category": "Reiseideen",
    "city": "Dresden",
    "title": "Radebeul und Lößnitzgrundbahn",
    "link": "https://www.loessnitzgrundbahn.de/fahrplan-tarif/",
    "note": "Tagesausflug mit historischer Bahn. Sondertarif und Anschlüsse vorher prüfen.",
    "segment": "Tagesausflug",
    "plan": [
      "Von Dresden nach Radebeul fahren und den Umstieg einplanen.",
      "Eine Teilstrecke mit der Lößnitzgrundbahn und eine Pause einplanen.",
      "Rückfahrt vorab festlegen. Falls der Sondertarif nicht ins Budget passt, bei Radebeul bleiben."
    ],
    "tripCap": 40
  },
  {
    "id": "dresden-erweiterung|Reiseideen|Festung Königstein ab Dresden",
    "category": "Reiseideen",
    "city": "Dresden",
    "title": "Festung Königstein ab Dresden",
    "link": "https://www.festung-koenigstein.de/de/anfahrt-parken.html",
    "note": "Tagesausflug in die Sächsische Schweiz. Fahrplan und Eintritt vorab beim Betreiber prüfen.",
    "segment": "Tagesausflug",
    "plan": [
      "Vom Dresdner Hauptbahnhof die Verbindung nach Königstein prüfen.",
      "Den Weg vom Bahnhof zur Festung und Zeit für den Rundgang einplanen.",
      "Mit Proviantkosten rechnen und vor Abfahrt die letzte passende Rückfahrt prüfen."
    ],
    "tripCap": 45
  },
  {
    "id": "dresden-erweiterung|Unterkünfte|DJH Dresden · Jugendgästehaus",
    "category": "Unterkünfte",
    "city": "Dresden",
    "title": "DJH Dresden · Jugendgästehaus",
    "link": "https://www.jugendherberge.de/jugendherbergen/dresden-jugendgaestehaus/",
    "note": "Jugendherberge. Voraussetzungen, freie Plätze und Gesamtpreis beim Betreiber prüfen.",
    "segment": "Hostel"
  },
  {
    "id": "dresden-erweiterung|Unterkünfte|a&o Dresden Hauptbahnhof",
    "category": "Unterkünfte",
    "city": "Dresden",
    "title": "a&o Dresden Hauptbahnhof",
    "link": "https://www.aohostels.com/de/dresden/dresden-hauptbahnhof/",
    "note": "Hostel nahe Hauptbahnhof. Zimmerart und Gesamtpreis für den Termin prüfen.",
    "segment": "Hostel"
  },
  {
    "id": "dresden-erweiterung|Unterkünfte|Campingplatz Wostra",
    "category": "Unterkünfte",
    "city": "Dresden",
    "title": "Campingplatz Wostra",
    "link": "https://www.visit-dresden-elbland.de/de/camping/campingplatz-wostra/",
    "note": "Camping in Dresden. Die örtliche Tourismusseite nennt den Platz und verweist für Buchung und Saison auf den Betreiber.",
    "segment": "Campingplatz"
  },
  {
    "id": "dresden-erweiterung|Ausbildung|TU Dresden · Fachinformatik",
    "category": "Ausbildung",
    "city": "Dresden",
    "title": "TU Dresden · Fachinformatik",
    "link": "https://tu-dresden.de/tu-dresden/arbeiten-an-der-tud/berufsausbildung/berufsuebersicht/fachinformatiker-in?set_language=de",
    "note": "Offizielles Berufsprofil. Fachrichtung, Ausschreibung und Frist beim Arbeitgeber prüfen."
  },
  {
    "id": "dresden-erweiterung|Ausbildung|Universitätsklinikum Dresden · Pflegefachperson",
    "category": "Ausbildung",
    "city": "Dresden",
    "title": "Universitätsklinikum Dresden · Pflegefachperson",
    "offerType": "Ausbildungsprofil",
    "link": "https://karriere.ukdd.de/content/4-3-1-Pflegefachmann/?locale=de_DE",
    "note": "Das UKD nennt den mittleren Schulabschluss oder den Hauptschulabschluss plus eine abgeschlossene zweijährige Berufsausbildung. Die praktischen Einsätze finden am Universitätsklinikum statt."
  },
  {
    "id": "dresden-erweiterung|Ausbildung|TU Dresden · Ausbildungsberufe im Überblick",
    "category": "Ausbildung",
    "city": "Dresden",
    "title": "TU Dresden · Ausbildungsberufe im Überblick",
    "link": "https://tu-dresden.de/tu-dresden/arbeiten-an-der-tud/berufsausbildung/berufsuebersicht?set_language=de",
    "note": "Ausbildungsberufe außerhalb der IT vergleichen. Offene Stellen separat prüfen."
  },
  {
    "id": "dresden-erweiterung|Studium|TU Dresden · Medienforschung (B.A.)",
    "category": "Studium",
    "city": "Dresden",
    "title": "TU Dresden · Medienforschung (B.A.)",
    "link": "https://tu-dresden.de/gsw/phil/ifk/studium/studiengaenge/bachelor/ba_medienforschung",
    "note": "Kommunikationswissenschaftliche Studieninhalte, Methoden und Bewerbungsinfos bei der Hochschule.",
    "topic": "Medienforschung",
    "field": "gesellschaft"
  },
  {
    "id": "dresden-erweiterung|Autos|Honda Jazz e:HEV",
    "category": "Autos",
    "city": "Überregional",
    "title": "Honda Jazz e:HEV",
    "link": "https://www.honda.de/cars/new/jazz-hybrid/overview.html",
    "note": "Vollhybrid-Kleinwagen. Alltagsverbrauch und Platzangebot mit anderen Modellen vergleichen.",
    "segment": "Neuwagen"
  },
  {
    "id": "dresden-erweiterung|Autos|Renault Clio Full Hybrid E-Tech",
    "category": "Autos",
    "city": "Überregional",
    "title": "Renault Clio Full Hybrid E-Tech",
    "link": "https://www.renault.de/hybridfahrzeuge/clio/preise-versionen.html",
    "note": "Kleinwagen mit Vollhybrid-Antrieb. Ausstattungsvarianten und Konditionen direkt beim Anbieter prüfen.",
    "segment": "Neuwagen"
  },
  {
    "id": "dresden-erweiterung|Autos|Renault Captur Full Hybrid E-Tech",
    "category": "Autos",
    "city": "Überregional",
    "title": "Renault Captur Full Hybrid E-Tech",
    "link": "https://www.renault.de/hybridfahrzeuge/captur.html",
    "note": "Kompaktes SUV. Ausstattung, laufende Kosten und Versicherung für die konkrete Variante vergleichen.",
    "segment": "Neuwagen"
  },
  {
    "id": "dresden-erweiterung|Vorteile|SKD Dresden · Ermäßigungsnachweise",
    "category": "Vorteile",
    "city": "Dresden",
    "title": "SKD Dresden · Ermäßigungsnachweise",
    "link": "https://www.skd.museum/fileadmin/userfiles/Marketing/Dokumente/Verguenstigungen.pdf",
    "note": "Die Staatlichen Kunstsammlungen erklären die Voraussetzungen und Nachweise für Ermäßigungen. Geltung für das gewählte Museum prüfen.",
    "topic": "Freizeit",
    "kind": "Ermäßigung prüfen"
  },
  {
    "id": "dresden-erweiterung|Vorteile|Deutsches Hygiene-Museum · Ermäßigter Eintritt",
    "category": "Vorteile",
    "city": "Dresden",
    "title": "Deutsches Hygiene-Museum · Ermäßigter Eintritt",
    "link": "https://www.dhmd.de/besuch/zeiten-preise",
    "note": "Ermäßigungsberechtigung, Nachweis und Geltungsbereich vor dem Besuch beim Museum prüfen.",
    "topic": "Freizeit",
    "kind": "Ermäßigung prüfen"
  },
  {
    "id": "dresden-erweiterung|Vorteile|Apple Music · Studierendenabo",
    "category": "Vorteile",
    "city": "Überregional",
    "title": "Apple Music · Studierendenabo",
    "link": "https://www.apple.com/de/apple-music/",
    "note": "Das Studierendenabo und seine Voraussetzungen direkt bei Apple prüfen. Preis und Bedingungen können sich ändern.",
    "topic": "Freizeit",
    "kind": "Ermäßigung prüfen"
  },
  {
    "id": "dresden-erweiterung|Fahrschulen|FahrschulSTAR Dresden",
    "category": "Fahrschulen",
    "city": "Dresden",
    "title": "FahrschulSTAR Dresden",
    "link": "https://fahrschulstar.de/",
    "note": "Kurse und Führerscheinklassen beim Dresdner Anbieter prüfen."
  },

{
    "id": "bildung|Hamburg|soziale-arbeit",
    "city": "Hamburg",
    "category": "Studium",
    "title": "HAW Hamburg · Soziale Arbeit (B.A.)",
    "topic": "Soziale Arbeit",
    "field": "gesellschaft",
    "note": "Sozialrecht, Beratung, Sozialpolitik und Praxisphasen verbinden Theorie und Arbeit mit Menschen.",
    "link": "https://www.haw-hamburg.de/bachelor-soziale-arbeit"
  },
  {
    "id": "bildung|Frankfurt am Main|erziehungswissenschaft",
    "city": "Frankfurt am Main",
    "category": "Studium",
    "title": "Goethe-Universität Frankfurt · Erziehungswissenschaft (B.A.)",
    "topic": "Erziehungswissenschaft",
    "field": "gesellschaft",
    "note": "Du untersuchst Lernen, Bildung und Erziehung in unterschiedlichen Lebensphasen.",
    "link": "https://www.uni-frankfurt.de/de/studium/studiengaenge/erziehungswissenschaft-bachelor-hauptfach"
  },
  {
    "id": "bildung|Köln|grundschullehramt",
    "city": "Köln",
    "category": "Studium",
    "title": "Universität zu Köln · Bachelor Lehramt",
    "topic": "Grundschullehramt",
    "field": "gesellschaft",
    "note": "Fächer, Didaktik und Bildungswissenschaften werden mit Praxisphasen verbunden.",
    "link": "https://studsek.uni-koeln.de/bewerbung/1_fachsemester___grundstaendige_studiengaenge/grundstaendige_studiengaenge/bachelor_lehramt/index_ger.html"
  },
  {
    "id": "bildung|Leipzig|rechtswissenschaft",
    "city": "Leipzig",
    "category": "Studium",
    "title": "Universität Leipzig · Rechtswissenschaft (Staatsexamen)",
    "topic": "Rechtswissenschaft",
    "field": "gesellschaft",
    "note": "Du lernst juristische Fallbearbeitung im Zivilrecht, Strafrecht und öffentlichen Recht.",
    "link": "https://www.jura.uni-leipzig.de/studium/rechtswissenschaft-staatsexamen"
  },
  {
    "id": "bildung|Aachen|elektrotechnik",
    "city": "Aachen",
    "category": "Studium",
    "title": "FH Aachen · Elektrotechnik (B.Eng.)",
    "topic": "Elektrotechnik",
    "field": "technik",
    "note": "Mathematik, Schaltungen und Systemtechnik bilden die Grundlagen für verschiedene technische Vertiefungen.",
    "link": "https://www.fh-aachen.de/studium/studiengaenge/elektrotechnik-beng"
  },
  {
    "id": "bildung|Leipzig|bauingenieurwesen",
    "city": "Leipzig",
    "category": "Studium",
    "title": "HTWK Leipzig · Bauingenieurwesen (Bachelor)",
    "topic": "Bauingenieurwesen",
    "field": "technik",
    "note": "Du beschäftigst dich mit Konstruktion, Statik, Baustoffen und Infrastruktur.",
    "link": "https://www.htwk-leipzig.de/studieren/studiengaenge/bachelorstudiengaenge/bauingenieurwesen/"
  },
  {
    "id": "bildung|Göttingen|agrarwissenschaften",
    "city": "Göttingen",
    "category": "Studium",
    "title": "Universität Göttingen · Agrarwissenschaften (B.Sc.)",
    "topic": "Agrarwissenschaften",
    "field": "natur",
    "note": "Natur- und Wirtschaftswissenschaften treffen auf Fragen zu Landwirtschaft und Ernährung.",
    "link": "https://www.uni-goettingen.de/de/629908.html"
  },
  {
    "id": "bildung|Gießen|umwelt-globaler-wandel",
    "city": "Gießen",
    "category": "Studium",
    "title": "Justus-Liebig-Universität Gießen · Umwelt und globaler Wandel",
    "topic": "Umwelt und globaler Wandel",
    "field": "natur",
    "note": "Der Studiengang befasst sich mit Umweltveränderungen und natürlichen Ressourcen aus mehreren Fachrichtungen.",
    "link": "https://www.uni-giessen.de/de/studium/studienangebot/finder/studiengaenge/umweltmanagement"
  },

{
    "id": "bildung|Heidelberg|geschichte|Universität Heidelberg · Geschichte (B.A., 75 %)",
    "city": "Heidelberg",
    "category": "Studium",
    "title": "Universität Heidelberg · Geschichte (B.A., 75 %)",
    "topic": "Geschichte",
    "field": "geisteswissenschaften",
    "note": "Historische Quellen auswerten, Epochen vergleichen und begründet über gesellschaftliche Veränderungen schreiben.",
    "link": "https://www.hist.uni-heidelberg.de/de/studium/studiengaenge-ba-ma-m-ed/ba-geschichte-75"
  },
  {
    "id": "bildung|Hamburg|geschichte|Universität Hamburg · Geschichte (B.A., Hauptfach)",
    "city": "Hamburg",
    "category": "Studium",
    "title": "Universität Hamburg · Geschichte (B.A., Hauptfach)",
    "topic": "Geschichte",
    "field": "geisteswissenschaften",
    "note": "Historische Quellen auswerten, Epochen vergleichen und begründet über gesellschaftliche Veränderungen schreiben.",
    "link": "https://www.geschichte.uni-hamburg.de/studium/studiengaenge/ba-geschichte-hauptfach.html"
  },
  {
    "id": "bildung|Jena|geschichte|Universität Jena · Geschichte (B.A., Kernfach)",
    "city": "Jena",
    "category": "Studium",
    "title": "Universität Jena · Geschichte (B.A., Kernfach)",
    "topic": "Geschichte",
    "field": "geisteswissenschaften",
    "note": "Historische Quellen auswerten, Epochen vergleichen und begründet über gesellschaftliche Veränderungen schreiben.",
    "link": "https://www.uni-jena.de/6570/b-a-kf-geschichte"
  },
  {
    "id": "bildung|Berlin|germanistik|Freie Universität Berlin · Deutsche Philologie (Kombi-B.A.)",
    "city": "Berlin",
    "category": "Studium",
    "title": "Freie Universität Berlin · Deutsche Philologie (Kombi-B.A.)",
    "topic": "Germanistik und Literatur",
    "field": "geisteswissenschaften",
    "note": "Literatur interpretieren, Sprachwandel untersuchen und Texte in ihren historischen und gesellschaftlichen Zusammenhang einordnen.",
    "link": "https://www.fu-berlin.de/studium/studienangebot/grundstaendige/deutsche_philologie_kombi/index.html"
  },
  {
    "id": "bildung|Heidelberg|germanistik|Universität Heidelberg · Germanistik",
    "city": "Heidelberg",
    "category": "Studium",
    "title": "Universität Heidelberg · Germanistik",
    "topic": "Germanistik und Literatur",
    "field": "geisteswissenschaften",
    "note": "Literatur interpretieren, Sprachwandel untersuchen und Texte in ihren historischen und gesellschaftlichen Zusammenhang einordnen.",
    "link": "https://www.gs.uni-heidelberg.de/de/studium/studiengaenge/studiengaenge/studiengaenge/germanistik"
  },
  {
    "id": "bildung|Heidelberg|philosophie|Universität Heidelberg · Philosophie (B.A.)",
    "city": "Heidelberg",
    "category": "Studium",
    "title": "Universität Heidelberg · Philosophie (B.A.)",
    "topic": "Philosophie",
    "field": "geisteswissenschaften",
    "note": "Du rekonstruierst Argumente und arbeitest an Fragen zu Wissen, Ethik, Sprache und Gesellschaft.",
    "link": "https://www.uni-heidelberg.de/fakultaeten/philosophie/philsem/studienberatung/bachelor.html"
  },
  {
    "id": "bildung|Jena|philosophie|Universität Jena · Philosophie (B.A., Kernfach)",
    "city": "Jena",
    "category": "Studium",
    "title": "Universität Jena · Philosophie (B.A., Kernfach)",
    "topic": "Philosophie",
    "field": "geisteswissenschaften",
    "note": "Du rekonstruierst Argumente und arbeitest an Fragen zu Wissen, Ethik, Sprache und Gesellschaft.",
    "link": "https://www.uni-jena.de/6970/b-a-kf-philosophie"
  },
  {
    "id": "bildung|Berlin|kulturwissenschaft|Freie Universität Berlin · Sozial- und Kulturanthropologie (Kombi-B.A.)",
    "city": "Berlin",
    "category": "Studium",
    "title": "Freie Universität Berlin · Sozial- und Kulturanthropologie (Kombi-B.A.)",
    "topic": "Kulturwissenschaft und Anthropologie",
    "field": "geisteswissenschaften",
    "note": "Du vergleichst Alltagspraktiken und kulturelle Deutungen und lernst Methoden wie Interviews und teilnehmende Beobachtung kennen.",
    "link": "https://www.fu-berlin.de/studium/studienangebot/grundstaendige/sozial_kulturanthro_kombi/index.html"
  },
  {
    "id": "bildung|Göttingen|kulturwissenschaft|Universität Göttingen · Kulturanthropologie / Europäische Ethnologie (Zwei-Fächer-B.A.)",
    "city": "Göttingen",
    "category": "Studium",
    "title": "Universität Göttingen · Kulturanthropologie / Europäische Ethnologie (Zwei-Fächer-B.A.)",
    "topic": "Kulturwissenschaft und Anthropologie",
    "field": "geisteswissenschaften",
    "note": "Du vergleichst Alltagspraktiken und kulturelle Deutungen und lernst Methoden wie Interviews und teilnehmende Beobachtung kennen.",
    "link": "https://www.uni-goettingen.de/de/636657.html"
  },
  {
    "id": "bildung|Köln|medien|Universität zu Köln · Medienkulturwissenschaft (B.A.)",
    "city": "Köln",
    "category": "Studium",
    "title": "Universität zu Köln · Medienkulturwissenschaft (B.A.)",
    "topic": "Medienkulturwissenschaft",
    "field": "geisteswissenschaften",
    "note": "Du analysierst Filme, digitale Medien und öffentliche Kommunikation und untersuchst, wie Medien Kultur prägen.",
    "link": "https://mekuwi.phil-fak.uni-koeln.de/studieninteressierte/bachelor"
  },
  {
    "id": "bildung|Tübingen|sprachwissenschaft|Universität Tübingen · Allgemeine Sprachwissenschaft (B.A., Hauptfach)",
    "city": "Tübingen",
    "category": "Studium",
    "title": "Universität Tübingen · Allgemeine Sprachwissenschaft (B.A., Hauptfach)",
    "topic": "Sprachwissenschaft",
    "field": "geisteswissenschaften",
    "note": "Du untersuchst Lautsysteme, Grammatik und Bedeutung. Je nach Schwerpunkt arbeitest du mit Sprachdaten oder vergleichst Sprachen.",
    "link": "https://uni-tuebingen.de/studium/studienangebot/verzeichnis-der-studiengaenge/detail/course/allgemeine-sprachwissenschaft-bachelor-hauptfach/"
  },
  {
    "id": "bildung|Heidelberg|kunstgeschichte|Universität Heidelberg · Europäische Kunstgeschichte (B.A.)",
    "city": "Heidelberg",
    "category": "Studium",
    "title": "Universität Heidelberg · Europäische Kunstgeschichte (B.A.)",
    "topic": "Kunstgeschichte",
    "field": "geisteswissenschaften",
    "note": "Du analysierst Bilder, Architektur und Objekte, vergleichst ihre Entstehungsbedingungen und arbeitest mit visuellen Quellen.",
    "link": "https://www.kunst.uni-heidelberg.de/de/ba-europaeische-kunstgeschichte"
  },
  {
    "id": "bildung|Marburg|kunstgeschichte|Philipps-Universität Marburg · Kunstgeschichte (B.A., Hauptfach)",
    "city": "Marburg",
    "category": "Studium",
    "title": "Philipps-Universität Marburg · Kunstgeschichte (B.A., Hauptfach)",
    "topic": "Kunstgeschichte",
    "field": "geisteswissenschaften",
    "note": "Du analysierst Bilder, Architektur und Objekte, vergleichst ihre Entstehungsbedingungen und arbeitest mit visuellen Quellen.",
    "link": "https://www.uni-marburg.de/de/studium/vor-dem-studium/studienangebot/bachelor/hauptfach/kunstgeschichte"
  },
  {
    "id": "bildung|Berlin|politik|Freie Universität Berlin · Politikwissenschaft (B.A.)",
    "city": "Berlin",
    "category": "Studium",
    "title": "Freie Universität Berlin · Politikwissenschaft (B.A.)",
    "topic": "Politikwissenschaft",
    "field": "gesellschaft",
    "note": "Du untersuchst politische Institutionen, Konflikte und Entscheidungen. Methoden und politische Theorie helfen dir, Zusammenhänge zu erklären.",
    "link": "https://www.fu-berlin.de/studium/studienangebot/grundstaendige/politik/index.html"
  },
  {
    "id": "bildung|Hamburg|politik|Universität Hamburg · Politikwissenschaft (B.A., Hauptfach)",
    "city": "Hamburg",
    "category": "Studium",
    "title": "Universität Hamburg · Politikwissenschaft (B.A., Hauptfach)",
    "topic": "Politikwissenschaft",
    "field": "gesellschaft",
    "note": "Du untersuchst politische Institutionen, Konflikte und Entscheidungen. Methoden und politische Theorie helfen dir, Zusammenhänge zu erklären.",
    "link": "https://www.wiso.uni-hamburg.de/studienbuero-sozialwissenschaften/studiengaenge/ba-politikwissenschaft-hauptfach.html"
  },
  {
    "id": "bildung|Frankfurt am Main|soziologie|Goethe-Universität Frankfurt · Soziologie (B.A., Hauptfach)",
    "city": "Frankfurt am Main",
    "category": "Studium",
    "title": "Goethe-Universität Frankfurt · Soziologie (B.A., Hauptfach)",
    "topic": "Soziologie",
    "field": "gesellschaft",
    "note": "Du erforschst soziale Ungleichheit, Organisationen und gesellschaftlichen Wandel mit quantitativen und qualitativen Methoden.",
    "link": "https://www.uni-frankfurt.de/de/studium/studiengaenge/soziologie-bachelor-hauptfach"
  },

{
    "id": "bildung|Berlin|Informatik (B.Sc.)",
    "city": "Berlin",
    "category": "Studium",
    "title": "Informatik (B.Sc.) · TU Berlin",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.tu.berlin/studieren/studienangebot/gesamtes-studienangebot/studiengang/informatik-b-sc"
  },
  {
    "id": "bildung|Hamburg|Informatik (B.Sc.)",
    "city": "Hamburg",
    "category": "Studium",
    "title": "Informatik (B.Sc.) · Universität Hamburg",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.inf.uni-hamburg.de/studies/prospective-students/bachelor-application.html"
  },
  {
    "id": "bildung|Köln|Wirtschaftsinformatik (B.Sc.)",
    "city": "Köln",
    "category": "Studium",
    "title": "Wirtschaftsinformatik (B.Sc.) · Universität zu Köln",
    "topic": "Wirtschaftsinformatik",
    "note": "Verbindet Programmierung und Informationssysteme mit Betriebswirtschaft. Typische Aufgaben sind Daten auswerten und Unternehmensprozesse verbessern. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://studieninteressierte.uni-koeln.de/studienangebot/index_ger.html?app=true&id=155"
  },
  {
    "id": "bildung|Frankfurt am Main|Wirtschaftsinformatik (B.Sc.)",
    "city": "Frankfurt am Main",
    "category": "Studium",
    "title": "Wirtschaftsinformatik (B.Sc.) · Frankfurt University of Applied Sciences",
    "topic": "Wirtschaftsinformatik",
    "note": "Verbindet Programmierung und Informationssysteme mit Betriebswirtschaft. Typische Aufgaben sind Daten auswerten und Unternehmensprozesse verbessern. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.frankfurt-university.de/de/studium/bachelor-studiengange/wirtschaftsinformatik-bsc/fuer-studieninteressierte/"
  },
  {
    "id": "bildung|Tübingen|Informatik (B.Sc.)",
    "city": "Tübingen",
    "category": "Studium",
    "title": "Informatik (B.Sc.) · Universität Tübingen",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/studium/studierende/lehre-studienorganisation/studiengaenge/informatik/bachelor/"
  },
  {
    "id": "bildung|Göttingen|Angewandte Informatik (B.Sc.)",
    "city": "Göttingen",
    "category": "Studium",
    "title": "Angewandte Informatik (B.Sc.) · Universität Göttingen",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://uni-goettingen.de/de/640717.html"
  },
  {
    "id": "bildung|Marburg|Informatik (B.Sc.)",
    "city": "Marburg",
    "category": "Studium",
    "title": "Informatik (B.Sc.) · Philipps-Universität Marburg",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.uni-marburg.de/de/studium/vor-dem-studium/studienangebot/bachelor/informatikbsc"
  },
  {
    "id": "bildung|Marburg|Data Science (B.Sc.)",
    "city": "Marburg",
    "category": "Studium",
    "title": "Data Science (B.Sc.) · Philipps-Universität Marburg",
    "topic": "Data Science",
    "note": "Statistik, Programmierung und maschinelles Lernen helfen dir, Daten aufzubereiten, auszuwerten und Modelle zu überprüfen. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.uni-marburg.de/de/studium/vor-dem-studium/studienangebot/bachelor/datasciencebsc"
  },
  {
    "id": "bildung|Heidelberg|Informatik (B.Sc.)",
    "city": "Heidelberg",
    "category": "Studium",
    "title": "Informatik (B.Sc.) · Universität Heidelberg",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.uni-heidelberg.de/de/studium/alle-studienfaecher/informatik/informatik-bachelor-100"
  },
  {
    "id": "bildung|Leipzig|Informatik (B.Sc.)",
    "city": "Leipzig",
    "category": "Studium",
    "title": "Informatik (B.Sc.) · Universität Leipzig",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.mathcs.uni-leipzig.de/studium/studienangebot/informatik-b-sc"
  },
  {
    "id": "bildung|Jena|Informatik (B.Sc.)",
    "city": "Jena",
    "category": "Studium",
    "title": "Informatik (B.Sc.) · Friedrich-Schiller-Universität Jena",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.uni-jena.de/7240/b-sc-informatik"
  },
  {
    "id": "bildung|Aachen|Informatik (B.Sc.)",
    "city": "Aachen",
    "category": "Studium",
    "title": "Informatik (B.Sc.) · RWTH Aachen",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://sc.informatik.rwth-aachen.de/de/studium/bachelor/informatik/"
  },
  {
    "id": "bildung|Gießen|Angewandte Informatik (B.Sc.)",
    "city": "Gießen",
    "category": "Studium",
    "title": "Angewandte Informatik (B.Sc.) · Justus-Liebig-Universität Gießen",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.uni-giessen.de/de/studium/studienangebot/bachelor/angewandte-informatik"
  },
  {
    "id": "bildung|Mittweida|Angewandte Informatik (B.Sc.)",
    "city": "Mittweida",
    "category": "Studium",
    "title": "Angewandte Informatik (B.Sc.) · Hochschule Mittweida",
    "topic": "Informatik",
    "note": "Programmierung, Algorithmen, Mathematik und Computersysteme bilden die Basis. Je nach Hochschule kommen Wahlbereiche wie KI, Sicherheit oder Visualisierung hinzu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.hs-mittweida.de/studieren/studienangebote/angewandte-informatik-bachelor/"
  },
  {
    "id": "bildung|Köln|BWL (B.Sc.)",
    "city": "Köln",
    "category": "Studium",
    "title": "BWL (B.Sc.) · Universität zu Köln",
    "topic": "Betriebswirtschaftslehre",
    "note": "Du beschäftigst dich mit Finanzierung, Rechnungswesen, Marketing und Organisation. Später kannst du je nach Hochschule Schwerpunkte setzen. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://wiso.uni-koeln.de/de/studium/bachelor/bachelor-bwl"
  },
  {
    "id": "bildung|Heidelberg|Psychologie (B.Sc.)",
    "city": "Heidelberg",
    "category": "Studium",
    "title": "Psychologie (B.Sc.) · Universität Heidelberg",
    "topic": "Psychologie",
    "note": "Du lernst menschliches Verhalten wissenschaftlich zu untersuchen. Statistik, Forschungsmethoden sowie Entwicklungs- und Sozialpsychologie gehören dazu. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.uni-heidelberg.de/de/studium/alle-studienfaecher/psychologie/psychologie-bachelor-100"
  },
  {
    "id": "bildung|Aachen|Maschinenbau (B.Sc.)",
    "city": "Aachen",
    "category": "Studium",
    "title": "Maschinenbau (B.Sc.) · RWTH Aachen",
    "topic": "Maschinenbau",
    "note": "Mathematik, Mechanik, Werkstoffe und Konstruktion bilden die Basis. In Projekten setzt du Modelle in technische Lösungen um. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.ika.rwth-aachen.de/de/studium/studieng%C3%A4nge/maschinenbau-bsc.html"
  },
  {
    "id": "bildung|Jena|Medizin (Staatsexamen)",
    "city": "Jena",
    "category": "Studium",
    "title": "Medizin (Staatsexamen) · Friedrich-Schiller-Universität Jena",
    "topic": "Humanmedizin",
    "note": "Du verbindest naturwissenschaftliche Grundlagen mit klinischem Lernen und praktischen Ausbildungsabschnitten. Zulassung und Fristen auf der Hochschulseite prüfen.",
    "link": "https://www.uni-jena.de/4580/staatsexamen-medizin"
  },
  {
    "id": "wohnen|Heidelberg|studierendenwerk",
    "category": "Wohnen",
    "city": "Heidelberg",
    "title": "Studierendenwohnen in Heidelberg",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.stw.uni-heidelberg.de/wohnen/wohnheime/"
  },
  {
    "id": "wohnen|Tübingen|studierendenwerk",
    "category": "Wohnen",
    "city": "Tübingen",
    "title": "Studierendenwohnen in Tübingen",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.my-stuwe.de/wohnen/wohnheime-tuebingen/"
  },
  {
    "id": "wohnen|Berlin|studierendenwerk",
    "category": "Wohnen",
    "city": "Berlin",
    "title": "Studierendenwohnen in Berlin",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.stw.berlin/wohnen/wohnheime/"
  },
  {
    "id": "wohnen|Hamburg|studierendenwerk",
    "category": "Wohnen",
    "city": "Hamburg",
    "title": "Studierendenwohnen in Hamburg",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.stwhh.de/wohnen-fuer-studierende-und-auszubildende"
  },
  {
    "id": "wohnen|Frankfurt am Main|studierendenwerk",
    "category": "Wohnen",
    "city": "Frankfurt am Main",
    "title": "Studierendenwohnen in Frankfurt am Main",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.swffm.de/wohnen/uebersicht"
  },
  {
    "id": "wohnen|Gießen|studierendenwerk",
    "category": "Wohnen",
    "city": "Gießen",
    "title": "Studierendenwohnen in Gießen",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.stwgi.de/wohnen/"
  },
  {
    "id": "wohnen|Marburg|studierendenwerk",
    "category": "Wohnen",
    "city": "Marburg",
    "title": "Studierendenwohnen in Marburg",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://studierendenwerk-marburg.de/wohnen/"
  },
  {
    "id": "wohnen|Göttingen|studierendenwerk",
    "category": "Wohnen",
    "city": "Göttingen",
    "title": "Studierendenwohnen in Göttingen",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.studierendenwerk-goettingen.de/studentisches-wohnen"
  },
  {
    "id": "wohnen|Aachen|studierendenwerk",
    "category": "Wohnen",
    "city": "Aachen",
    "title": "Studierendenwohnen in Aachen",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.studierendenwerk-aachen.de/de/wohnen.html"
  },
  {
    "id": "wohnen|Köln|studierendenwerk",
    "category": "Wohnen",
    "city": "Köln",
    "title": "Studierendenwohnen in Köln",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.kstw.de/wohnen/auf-wohnungssuche/"
  },
  {
    "id": "wohnen|Leipzig|studierendenwerk",
    "category": "Wohnen",
    "city": "Leipzig",
    "title": "Studierendenwohnen in Leipzig",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.studentenwerk-leipzig.de/wohnen/"
  },
  {
    "id": "wohnen|Mittweida|studierendenwerk",
    "category": "Wohnen",
    "city": "Mittweida",
    "title": "Studierendenwohnen in Mittweida",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.studentenwerk-freiberg.de/wohnen/in-mittweida-wohnen/wohnanlagen-mw/"
  },
  {
    "id": "wohnen|Jena|studierendenwerk",
    "category": "Wohnen",
    "city": "Jena",
    "title": "Studierendenwohnen in Jena",
    "note": "Übersicht des zuständigen Studierendenwerks. Bewerbung, Standorte und Verfügbarkeit direkt beim Betreiber prüfen.",
    "link": "https://www.stw-thueringen.de/wohnen/wohnheime.html"
  },


  {
    "id": "bildung|Neckarsulm|1",
    "city": "Neckarsulm",
    "category": "Ausbildung",
    "title": "Audi Neckarsulm · Ausbildungsberufe",
    "segment": "Audi · Standort Neckarsulm",
    "note": "Vergleiche die Berufsprofile und Voraussetzungen am Standort. Wechsle für den aktuellen Status in die jeweilige Ausschreibung im Audi-Stellenportal.",
    "offerType": "Ausbildungsübersicht",
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
    "note": "Die Ausschreibung nennt Praxis im Raum Heilbronn und Neckarsulm sowie Theorie an der DHBW Heilbronn. Prüfe Zugang, Bewerbungsfrist und Verfügbarkeit im Stellenangebot.",
    "link": "https://jobs.schwarz/jobsearch/hr/duales-studium-wirtschaftsinformatik-2027-neckarsulm-m-w-d-GT5120"
  },
  {
    "id": "bildung|Neckarsulm|4",
    "city": "Neckarsulm",
    "category": "Studium",
    "title": "Wirtschaftsinformatik · Hochschule Heilbronn",
    "segment": "HHN · in der Region, Studienort prüfen",
    "note": "Option für die Region Neckarsulm. Das Studium findet am Bildungscampus Heilbronn statt. Prüfe Module und Zugangsvoraussetzungen bei der Hochschule.",
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
    "title": "Heilbronn · HNV Einzel- und Tageskarten",
    "note": "Vergleiche die Einzel- und Tageskarten und prüfe die passende Preisstufe für deine Strecke.",
    "link": "https://www.mein-hnv.de/abos-und-tickets/einzel-tageskarten/"
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

// Geprüfte Motiv- und Ortsbilder. Ortsbilder sind ausschließlich Kontext.
const campusMotivFotos = {
  "dresden-erweiterung|Tablets|reMarkable Paper Pure": {
    "url": "https://cdn.sanity.io/images/xpujt61d/production/bd9315fb99b651d857b4bc8fab29666fab97618b-1479x2547.png?rect=0,0,1479,1525&w=475&fm=webp&q=85&dpr=1",
    "source": "https://remarkable.com/de-DE/products/remarkable-paper/pure",
    "credit": "Modellreihe · remarkable.com",
    "alt": "reMarkable Paper Pure",
    "place": false
  },
  "dresden-erweiterung|Tablets|reMarkable Paper Pro": {
    "url": "https://cdn.sanity.io/images/xpujt61d/production/0deca8af1b6aceb0ed5081a209e2ba959882a2c2-5760x3784.png?w=475&fm=webp&q=85&dpr=1",
    "source": "https://remarkable.com/de-DE/products/remarkable-paper/pro",
    "credit": "Modellreihe · remarkable.com",
    "alt": "reMarkable Paper Pro",
    "place": false
  },
  "dresden-erweiterung|Tablets|reMarkable Paper Pro Move": {
    "url": "https://cdn.sanity.io/images/xpujt61d/production/31b6f0bf8753b8802bbf4cf094b85713cc549456-5760x3840.jpg?w=475&fm=webp&q=85&dpr=1",
    "source": "https://remarkable.com/de-DE/products/remarkable-paper/pro-move",
    "credit": "Modellreihe · remarkable.com",
    "alt": "reMarkable Paper Pro Move",
    "place": false
  },
  "dresden-erweiterung|ÖPNV & Pendeln|DVB · Dresdner Elbfähren": {
    "url": "https://www.dvb.de/-/media/images/inhaltsbilder/ausfluege/titelbild_faehre_caroline_704x283.jpg?la=de-DE&h=283&mw=704&w=704&hash=62164259C0BC65770E23AD9283044E51",
    "source": "https://www.dvb.de/de-de/entdecken/elbfaehren",
    "credit": "Anbieterbild · dvb.de",
    "alt": "Bild aus der Anbieterquelle für DVB · Dresdner Elbfähren",
    "place": true
  },
  "dresden-erweiterung|Unterkünfte|Campingplatz Wostra": {
    "url": "https://www.visit-dresden-elbland.de/.netlify/images?url=https%3A%2F%2Fimg.oastatic.com%2Fimg2%2F76049360%2F1920x1080c%2Fvariant.webp&w=960&h=540&fit=cover",
    "source": "https://www.visit-dresden-elbland.de/de/camping/campingplatz-wostra/",
    "credit": "Motiv aus Anbieterquelle · visit-dresden-elbland.de",
    "alt": "Campingplatz Wostra",
    "place": true
  },
  "dresden-erweiterung|Autos|Honda Jazz e:HEV": {
    "url": "https://www.honda.de/content/dam/central/cars/generic/flyout/27ym_flyout/27ym_jazz/advance_eu/27YM_Jazz_ADVANCE_EU_side_stu_R_565M_001.png/jcr:content/renditions/c1_r.png",
    "source": "https://www.honda.de/cars/new/jazz-hybrid/overview.html",
    "credit": "Modellreihe · honda.de",
    "alt": "Honda Jazz e:HEV",
    "place": false
  },
  "dresden-erweiterung|Autos|Renault Captur Full Hybrid E-Tech": {
    "url": "https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/captur-hjb-ph2/overview/editorial/captur-hjb-overview-037-mobile.jpg.ximg.small.webp/61504bc66c.webp",
    "source": "https://www.renault.de/hybridfahrzeuge/captur.html",
    "credit": "Modellreihe · renault.de",
    "alt": "Renault Captur Full Hybrid E-Tech",
    "place": false
  },
  "dresden-erweiterung|Fahrschulen|FahrschulSTAR Dresden": {
    "url": "https://fahrschulstar.de/wp-content/uploads/2024/12/HeaderFS.jpg",
    "source": "https://fahrschulstar.de/",
    "credit": "Anbieterbild · fahrschulstar.de",
    "alt": "Bild aus der Anbieterquelle für FahrschulSTAR Dresden",
    "place": true
  },
  "bildung|Köln|Wirtschaftsinformatik (B.Sc.)": {
    "url": "https://grails-prod.rrz.uni-koeln.de/sop-adm/fileUpload/download/16a30be1-dcc3-4ac8-b2c4-4db2edc0babd",
    "source": "https://studieninteressierte.uni-koeln.de/studienangebot/index_ger.html?app=true&id=155",
    "credit": "Anbieterbild · studieninteressierte.uni-koeln.de",
    "alt": "Bild aus der Anbieterquelle für Wirtschaftsinformatik (B.Sc.) · Universität zu Köln",
    "place": true
  },
  "bildung|Mittweida|Angewandte Informatik (B.Sc.)": {
    "url": "https://www.hs-mittweida.de/processed/fileadmin/_processed_/5/5/csm_HSMW_Haus_1_acbc805061.w991h661m1q75.jpg?sig=aecccc9b0a614e383a6a2e7d9f42bb5c4f870cbd",
    "source": "https://www.hs-mittweida.de/studieren/studienangebote/angewandte-informatik-bachelor/",
    "credit": "Anbieterbild · hs-mittweida.de",
    "alt": "Bild aus der Anbieterquelle für Angewandte Informatik (B.Sc.) · Hochschule Mittweida",
    "place": true
  },
  "wohnen|Tübingen|studierendenwerk": {
    "url": "https://www.my-stuwe.de/wp-content/uploads/Wohnheim-Tuebingen-Fichtenweg-121416222426-02-1030x687.jpg",
    "source": "https://www.my-stuwe.de/wohnen/wohnheime-tuebingen/",
    "credit": "Anbieterbild · my-stuwe.de",
    "alt": "Bild aus der Anbieterquelle für Studierendenwohnen in Tübingen",
    "place": true
  },
  "wohnen|Gießen|studierendenwerk": {
    "url": "https://www.stwgi.de/assets/components/phpthumbof/cache/Studentenwerk-Giessen-Wohnheim-Einzug-Umzug-Kisten-3.f1d296fdaa259437a243e98f78903a23.jpg",
    "source": "https://www.stwgi.de/wohnen/",
    "credit": "Anbieterbild · stwgi.de",
    "alt": "Bild aus der Anbieterquelle für Studierendenwohnen in Gießen",
    "place": true
  },
  "wohnen|Mittweida|studierendenwerk": {
    "url": "https://www.studentenwerk-freiberg.de/wp-content/uploads/2025/06/WohnanlageAmSchwanenteich8_Haus2-1.png",
    "source": "https://www.studentenwerk-freiberg.de/wohnen/in-mittweida-wohnen/wohnanlagen-mw/",
    "credit": "Anbieterbild · studentenwerk-freiberg.de",
    "alt": "Bild aus der Anbieterquelle für Studierendenwohnen in Mittweida",
    "place": true
  },
  "wohnen|Jena|studierendenwerk": {
    "url": "https://www.stw-thueringen.de/assets/components/phpthumbof/cache/A-Weber-Pl.2_vorn.e5ba46eb6b5d080441a4219ae3fcffaf.jpg",
    "source": "https://www.stw-thueringen.de/wohnen/wohnheime.html",
    "credit": "Anbieterbild · stw-thueringen.de",
    "alt": "Bild aus der Anbieterquelle für Studierendenwohnen in Jena",
    "place": true
  },
  "reise-ausbau|Smart-Gadgets|Apple TV 4K": {
    "url": "https://www.apple.com/v/apple-tv-4k/an/images/meta/apple-tv-4k__033vsvrb1ua6_og.png?202610121032",
    "source": "https://www.apple.com/de/apple-tv-4k/",
    "credit": "Modellreihe · apple.com",
    "alt": "Apple TV 4K",
    "place": false
  },
  "reise-ausbau|Fahrschulen|Rausch · Intensivkurs": {
    "url": "https://www.fahrschule-rausch.de/typo3conf/ext/alm_bs_theme/Resources/Public/Images/Fahrschule-Rausch/fahrschule-rausch.jpg",
    "source": "https://www.fahrschule-rausch.de/",
    "credit": "Anbieterbild · fahrschule-rausch.de",
    "alt": "Bild aus der Anbieterquelle für Rausch · Intensivkurs",
    "place": true
  },
  "reise-ausbau|Vorteile|Deutsches Museum · Eintritt und Ermäßigung": {
    "url": "https://www.deutsches-museum.de/assets/_processed_/9/1/csm_CD_L_7790_163_e1bcbeb8f7.jpg",
    "source": "https://www.deutsches-museum.de/museumsinsel/besuch",
    "credit": "Anbieterbild · deutsches-museum.de",
    "alt": "Bild aus der Anbieterquelle für Deutsches Museum · Eintritt und Ermäßigung",
    "place": true
  },
  "unterkunft|Heilbronn|Winzercafé Neipperg · Ferienwohnungen": {
    "url": "https://mein.toubiz.de/api/v1/media/429e9852-6e76-11ee-a89d-395bb2b36eb2/view?hash=c43cb6&fm=jpg&w=1024&width=1024&h=683&height=683",
    "source": "https://www.heilbronnerland.de/poi/ferienwohnungen-winzercafe-neipperg",
    "credit": "Motiv aus Anbieterquelle · heilbronnerland.de",
    "alt": "Winzercafé Neipperg · Ferienwohnungen",
    "place": true
  },
  "unterkunft|München|Campingplatz München-Thalkirchen": {
    "url": "https://campingplatz-thalkirchen.de/wp-content/uploads/2022/10/Campingplatz_Gastronomie-1024x640.jpg",
    "source": "https://campingplatz-thalkirchen.de/?lang=en",
    "credit": "Motiv aus Anbieterquelle · campingplatz-thalkirchen.de",
    "alt": "Campingplatz München-Thalkirchen",
    "place": true
  },
  "unterkunft|Ingolstadt|B&B HOTEL Ingolstadt-Hbf": {
    "url": "https://res.cloudinary.com/hzekpb1cg/image/upload/c_fill,h_1000,w_1600,f_auto/s3/public/prod/s3fs-public/bb-hotel-generic_double-room_4.b19a22ac-52041_0.jpg",
    "source": "https://www.hotel-bb.com/de/hotel/ingolstadt-hbf",
    "credit": "Motiv aus Anbieterquelle · hotel-bb.com",
    "alt": "B&B HOTEL Ingolstadt-Hbf",
    "place": true
  },
  "2026-11|Handys|Galaxy S25": {
    "url": "https://image-stgus.samsung.com/SamsungUS/support/solutions/mobile/phones/galaxy-s/s25/MOB_PH_GS_S25_Comparison-of-the-Galaxy-PA-models.jpg",
    "source": "https://www.samsung.com/us/support/answer/ANS10004600/",
    "credit": "Modellreihe · samsung.com",
    "alt": "Galaxy S25",
    "place": false
  },
  "2026-11|Handys|Galaxy S25+": {
    "url": "https://image-stgus.samsung.com/SamsungUS/support/solutions/mobile/phones/galaxy-s/s25/MOB_PH_GS_S25_Comparison-of-the-Galaxy-PA-models.jpg",
    "source": "https://www.samsung.com/us/support/answer/ANS10004600/",
    "credit": "Modellreihe · samsung.com",
    "alt": "Galaxy S25+",
    "place": false
  },
  "2026-11|Smart-Gadgets|Apple Watch Series 9": {
    "url": "https://ipcdn-web.apple.com/assets/v2/web/949c5fdd-0075-42cf-b75e-7f264c84b212",
    "source": "https://support.apple.com/de-de/guide/watch/apd2054d0d5b/watchos",
    "credit": "Modellreihe · support.apple.com",
    "alt": "Apple Watch Series 9",
    "place": false
  },
  "2026-11|Smart-Gadgets|Galaxy Fit3": {
    "url": "https://image-stgus.samsung.com/SamsungUS/support/solutions/mobile/wearables/WRBLS_GF3_Features.jpg",
    "source": "https://www.samsung.com/us/support/answer/ANS10004550/",
    "credit": "Modellreihe · samsung.com",
    "alt": "Galaxy Fit3",
    "place": false
  },
  "2026-11|Wohnen|Studierendenwerk · Wohnanlagen": {
    "url": "https://www.studierendenwerk-muenchen-oberbayern.de/fileadmin/_processed_/4/e/csm_2015122_Studentenwohnheim_Domagkpark_GEWOFAG_Lukas_Barth_cff9cf6b99.jpg",
    "source": "https://www.studierendenwerk-muenchen-oberbayern.de/wohnheime/wohnanlagen/",
    "credit": "Anbieterbild · studierendenwerk-muenchen-oberbayern.de",
    "alt": "Bild aus der Anbieterquelle für Studierendenwerk · Wohnanlagen",
    "place": true
  },
  "2026-11|Aktivitäten|Kilianskirche": {
    "url": "https://www.heilbronn.de/fileadmin/_processed_/b/1/csm_Kilianskirche_Innenstadt_Panorama_2015_am_P2204-2249-16_Header_u_1e062da972.jpg",
    "source": "https://www.heilbronn.de/tourismus/kultur/sehenswertes.html",
    "credit": "Motiv aus Anbieterquelle · heilbronn.de",
    "alt": "Kilianskirche",
    "place": true
  },
  "2026-11|Aktivitäten|Schloss Nymphenburg": {
    "url": "https://www.muenchen.de/sites/default/files/styles/3_2_w1008/public/2023-01/20221217_schlosspark-nymphenburg-schnee-anettegoettlicher.jpeg.webp",
    "source": "https://www.muenchen.de/sehenswuerdigkeiten/burgen-und-schloesser/schloss-nymphenburg",
    "credit": "Motiv aus Anbieterquelle · muenchen.de",
    "alt": "Schloss Nymphenburg",
    "place": true
  },
  "2026-11|Aktivitäten|Tierpark Hellabrunn": {
    "url": "https://www.muenchen.de/sites/default/files/styles/facebook/public/2022-06/tierpark-hellabrunn-giraffen.jpg?h=84071268",
    "source": "https://www.muenchen.de/sehenswuerdigkeiten/tierpark-hellabrunn/besucherservice",
    "credit": "Motiv aus Anbieterquelle · muenchen.de",
    "alt": "Tierpark Hellabrunn",
    "place": true
  },
  "2026-11|Aktivitäten|Viktualienmarkt": {
    "url": "https://www.muenchen.de/sites/default/files/styles/facebook/public/2023-08/viktualienmarkt-neu.jpg?h=06ac0d8c",
    "source": "https://www.muenchen.de/sehenswuerdigkeiten/top-sehenswuerdigkeiten/viktualienmarkt",
    "credit": "Motiv aus Anbieterquelle · muenchen.de",
    "alt": "Viktualienmarkt",
    "place": true
  },
  "2026-11|Aktivitäten|Bücherei im Herzogskasten": {
    "url": "https://www.ingolstadt.de/media/custom/465_1689_1_k.JPG?1507727038",
    "source": "https://www.ingolstadt.de/Kultur/Bildung-Wissenschaft/Stadtb%C3%BCcherei/B%C3%BCcherei-im-Herzogskasten/",
    "credit": "Motiv aus Anbieterquelle · ingolstadt.de",
    "alt": "Bücherei im Herzogskasten",
    "place": true
  },
  "2026-11|Fahrschulen|Fahrschule Rausch · Schwabing-West": {
    "url": "https://www.fahrschule-rausch.de/typo3conf/ext/alm_bs_theme/Resources/Public/Images/Fahrschule-Rausch/fahrschule-rausch.jpg",
    "source": "https://www.fahrschule-rausch.de/standorte",
    "credit": "Anbieterbild · fahrschule-rausch.de",
    "alt": "Bild aus der Anbieterquelle für Fahrschule Rausch · Schwabing-West",
    "place": true
  },
  "2026-11|Fahrschulen|Fahrschule Rausch · Neuhausen": {
    "url": "https://www.fahrschule-rausch.de/typo3conf/ext/alm_bs_theme/Resources/Public/Images/Fahrschule-Rausch/fahrschule-rausch.jpg",
    "source": "https://www.fahrschule-rausch.de/standorte",
    "credit": "Anbieterbild · fahrschule-rausch.de",
    "alt": "Bild aus der Anbieterquelle für Fahrschule Rausch · Neuhausen",
    "place": true
  },
  "2026-11|Fahrschulen|Fahrschule Tavini": {
    "url": "https://fahrschule-tavini.de/wp-content/uploads/2026/07/1-819x1024.png",
    "source": "https://fahrschule-tavini.de/",
    "credit": "Anbieterbild · fahrschule-tavini.de",
    "alt": "Bild aus der Anbieterquelle für Fahrschule Tavini",
    "place": true
  },
  "2026-11|Fahrschulen|Fahrschule Schwägerl · B197": {
    "url": "https://static.wixstatic.com/media/1cfe30_b74d75b2cdff4ff1abc2bc357e1aacbc~mv2.jpg/v1/fill/w_963,h_205,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cfe30_b74d75b2cdff4ff1abc2bc357e1aacbc~mv2.jpg",
    "source": "https://www.fahrschule-schwaegerl.de/klasseb197",
    "credit": "Anbieterbild · fahrschule-schwaegerl.de",
    "alt": "Bild aus der Anbieterquelle für Fahrschule Schwägerl · B197",
    "place": true
  },
  "https://pre-fahrschule.de/|PRE Fahrschule": {
    "url": "https://pre-fahrschule.de/assets/optimized/fahrschulfotos_6.webp",
    "source": "https://pre-fahrschule.de/",
    "credit": "Anbieterbild · pre-fahrschule.de",
    "alt": "Bild aus der Anbieterquelle für PRE Fahrschule",
    "place": true
  },
  "https://eppicdrive.de/|EppicDrive": {
    "url": "https://eppicdrive.de/optimized_images/zenna-studio_EppicDrive_25.01.26-01.jpg",
    "source": "https://eppicdrive.de/",
    "credit": "Anbieterbild · eppicdrive.de",
    "alt": "Bild aus der Anbieterquelle für EppicDrive",
    "place": true
  },
  "https://www.fs-langer.de/|Fahrschule Langer": {
    "url": "https://www.fs-langer.de/uploads/template/fahrschule-langer-social-graph3.png",
    "source": "https://www.fs-langer.de/",
    "credit": "Anbieterbild · fs-langer.de",
    "alt": "Bild aus der Anbieterquelle für Fahrschule Langer",
    "place": true
  },
  "Fahrschulen|https://petersfahrschule.de/|Peters Fahrschule": {
    "url": "https://petersfahrschule.de/uploads/2026/03/bmw-118d-2026.webp",
    "source": "https://petersfahrschule.de/",
    "credit": "Anbieterbild · petersfahrschule.de",
    "alt": "Bild aus der Anbieterquelle für Peters Fahrschule",
    "place": true
  },
  "Fahrschulen|https://089-fahrschule.de/|089 Fahrschule": {
    "url": "https://089-fahrschule.de/assets/images/DJI_20250907102519_0461_D-galerie-370.jpg",
    "source": "https://089-fahrschule.de/",
    "credit": "Anbieterbild · 089-fahrschule.de",
    "alt": "Bild aus der Anbieterquelle für 089 Fahrschule",
    "place": true
  },
  "Fahrschulen|https://fahrschulemuc.de/|Fahrschule MUC": {
    "url": "https://fahrschulemuc.de/wp-content/uploads/2025/01/Autos-MUC-Urban-Driving-Fahrschule-Muenchen.png",
    "source": "https://fahrschulemuc.de/",
    "credit": "Anbieterbild · fahrschulemuc.de",
    "alt": "Bild aus der Anbieterquelle für Fahrschule MUC",
    "place": true
  },
  "Fahrschulen|https://fahrschule-drivex.com/|Fahrschule DriveX": {
    "url": "https://cdn.prod.website-files.com/5e9454ee176f31e0dfca0ef9/60f95730994bfc9269c5cd15_B196%20F%C3%BChrerschein%20M%C3%BCnchen%20Fahrschule%20DriveX.jpg",
    "source": "https://fahrschule-drivex.com/",
    "credit": "Anbieterbild · fahrschule-drivex.com",
    "alt": "Bild aus der Anbieterquelle für Fahrschule DriveX",
    "place": true
  },
  "Fahrschulen|https://www.fahrschule-rausch.de/standorte/maxvorstadt|Fahrschule Rausch · Maxvorstadt": {
    "url": "https://www.fahrschule-rausch.de/typo3conf/ext/alm_bs_theme/Resources/Public/Images/Fahrschule-Rausch/fahrschule-rausch.jpg",
    "source": "https://www.fahrschule-rausch.de/standorte/maxvorstadt",
    "credit": "Anbieterbild · fahrschule-rausch.de",
    "alt": "Bild aus der Anbieterquelle für Fahrschule Rausch · Maxvorstadt",
    "place": true
  },
  "Fahrschulen|https://www.fahrschule-rausch.de/standorte|Fahrschule Rausch · Schwabing-Freimann": {
    "url": "https://www.fahrschule-rausch.de/typo3conf/ext/alm_bs_theme/Resources/Public/Images/Fahrschule-Rausch/fahrschule-rausch.jpg",
    "source": "https://www.fahrschule-rausch.de/standorte",
    "credit": "Anbieterbild · fahrschule-rausch.de",
    "alt": "Bild aus der Anbieterquelle für Fahrschule Rausch · Schwabing-Freimann",
    "place": true
  },
  "Fahrschulen|https://www.muenchen.de/service/branchenbuch/F/105.html|München.de · Fahrschulverzeichnis": {
    "url": "https://images.portal.muenchen.de/000/000/000/163/versions/fahrschule-koermer-muenchen-de_300x140_5cc2b7fd0d3e3.png",
    "source": "https://www.muenchen.de/service/branchenbuch/F/105.html",
    "credit": "Anbieterbild · muenchen.de",
    "alt": "Bild aus der Anbieterquelle für München.de · Fahrschulverzeichnis",
    "place": true
  },
  "Fahrschulen|https://sos-fahrschule.de/|S.O.S. Fahrschule": {
    "url": "https://sos-fahrschule.de/wp-content/uploads/2024/08/Titelbild-SOS-Fahrschule-o6ssa83xhavq0p7jl5mghwkhex2oank7saseosgd3s-1.jpg",
    "source": "https://sos-fahrschule.de/",
    "credit": "Anbieterbild · sos-fahrschule.de",
    "alt": "Bild aus der Anbieterquelle für S.O.S. Fahrschule",
    "place": true
  },
  "Fahrschulen|https://www.fs-langer.de/fahrschule/filialen|Langer · Etting": {
    "url": "https://www.fs-langer.de/uploads/template/fahrschule-langer-social-graph3.png",
    "source": "https://www.fs-langer.de/fahrschule/filialen",
    "credit": "Anbieterbild · fs-langer.de",
    "alt": "Bild aus der Anbieterquelle für Langer · Etting",
    "place": true
  },
  "Fahrschulen|https://www.fs-langer.de/fahrschule/filialen|Langer · Gaimersheim (Umkreis)": {
    "url": "https://www.fs-langer.de/uploads/template/fahrschule-langer-social-graph3.png",
    "source": "https://www.fs-langer.de/fahrschule/filialen",
    "credit": "Anbieterbild · fs-langer.de",
    "alt": "Bild aus der Anbieterquelle für Langer · Gaimersheim (Umkreis)",
    "place": true
  },
  "Fahrschulen|https://www.fs-langer.de/fahrschule/filialen|Langer · Großmehring (Umkreis)": {
    "url": "https://www.fs-langer.de/uploads/template/fahrschule-langer-social-graph3.png",
    "source": "https://www.fs-langer.de/fahrschule/filialen",
    "credit": "Anbieterbild · fs-langer.de",
    "alt": "Bild aus der Anbieterquelle für Langer · Großmehring (Umkreis)",
    "place": true
  },
  "Fahrschulen|https://www.fs-langer.de/fahrschule/filialen|Langer · Kösching (Umkreis)": {
    "url": "https://www.fs-langer.de/uploads/template/fahrschule-langer-social-graph3.png",
    "source": "https://www.fs-langer.de/fahrschule/filialen",
    "credit": "Anbieterbild · fs-langer.de",
    "alt": "Bild aus der Anbieterquelle für Langer · Kösching (Umkreis)",
    "place": true
  },
  "Smart-Gadgets|Galaxy Ring": {
    "url": "https://placehold.co/330x960/png",
    "source": "https://www.samsung.com/de/rings/all-rings/",
    "credit": "Modellreihe · samsung.com",
    "alt": "Galaxy Ring",
    "place": false
  },
  "Smart-Gadgets|HomePod mini 2": {
    "url": "https://www.apple.com/v/homepod-mini/k/images/overview/highlights/hero__jhtn7mk3j52e_large.jpg",
    "source": "https://www.apple.com/de/homepod-mini/",
    "credit": "Modellreihe · apple.com",
    "alt": "HomePod mini 2",
    "place": false
  },
  "Smart-Gadgets|Philips Hue Bridge": {
    "url": "https://www.assets.signify.com/is/image/Signify/8718696511800-929001180601-Carousel-AlternativeProduct-APP-02?wid=500&qlt=82",
    "source": "https://www.philips-hue.com/de-de/p/hue-hue-bridge/8719514342620",
    "credit": "Modellreihe · philips-hue.com",
    "alt": "Philips Hue Bridge",
    "place": false
  },
  "Aktivitäten|Neckarsulm|Neckarweg nach Bad Wimpfen": {
    "url": "https://mein.toubiz.de/api/v1/media/5960a6e3-c484-4f73-a6c1-d1d9c11aed66/view?hash=fc357f&fm=jpg&w=1024&width=1024&h=683&height=683",
    "source": "https://www.heilbronnerland.de/tour/neckarweg-etappe-bad-wimpfen-neckarsulm",
    "credit": "Motiv aus Anbieterquelle · heilbronnerland.de",
    "alt": "Neckarweg nach Bad Wimpfen",
    "place": true
  },
  "Aktivitäten|Heilbronn|Wertwiesenpark": {
    "url": "https://www.heilbronn.de/fileadmin/_processed_/a/a/csm_Headerbild_Wertwiesenpark_rs_1595b7a899.jpg",
    "source": "https://www.heilbronn.de/umwelt-mobilitaet/gruenes-heilbronn/parks/wertwiesenpark.html",
    "credit": "Motiv aus Anbieterquelle · heilbronn.de",
    "alt": "Wertwiesenpark",
    "place": true
  },
  "Aktivitäten|Heilbronn|Botanischer Obstgarten": {
    "url": "https://www.heilbronn.de/fileadmin/_processed_/8/7/csm_Headerbild_Botanischer-Obstgarten_rs_f9bf562d38.jpg",
    "source": "https://www.heilbronn.de/umwelt-mobilitaet/gruenes-heilbronn/parks/botanischer-obstgarten.html",
    "credit": "Motiv aus Anbieterquelle · heilbronn.de",
    "alt": "Botanischer Obstgarten",
    "place": true
  },
  "Aktivitäten|Heilbronn|Neckarbogen · Parks und Grünflächen": {
    "url": "https://www.heilbronn.de/fileadmin/_processed_/a/3/csm_Header_Parks_und_Gruenflaechen_5e333b1ee5.jpg",
    "source": "https://www.heilbronn.de/bauen-wohnen/stadtquartier-neckarbogen/parks-und-gruenflaechen.html",
    "credit": "Motiv aus Anbieterquelle · heilbronn.de",
    "alt": "Neckarbogen · Parks und Grünflächen",
    "place": true
  },
  "Aktivitäten|München|Englischer Garten": {
    "url": "https://www.muenchen.de/sites/default/files/styles/3_2_w320/public/2026-05/egarten-olyberg_3_von_4.jpg.webp",
    "source": "https://www.muenchen.de/en/sights/attractions/english-garden",
    "credit": "Motiv aus Anbieterquelle · muenchen.de",
    "alt": "Englischer Garten",
    "place": true
  },
  "Aktivitäten|München|Olympiapark": {
    "url": "https://www.muenchen.de/sites/default/files/styles/facebook/public/2026-10/69_olympiapark_2021-09_c_fabianstoffers_s_6385.jpeg?h=9b7be91d",
    "source": "https://www.muenchen.de/en/sights/attractions/olympic-park",
    "credit": "Motiv aus Anbieterquelle · muenchen.de",
    "alt": "Olympiapark",
    "place": true
  },
  "Aktivitäten|München|BMW Welt und BMW Museum": {
    "url": "https://bmw.scene7.com/is/image/BMW/Workshops%20BMW%20Welt%20und%20Museum?fmt=webp-alpha&wid=2560&fit=wrap%2C+0",
    "source": "https://www.bmw-welt.com/de/index.html",
    "credit": "Motiv aus Anbieterquelle · bmw-welt.com",
    "alt": "BMW Welt und BMW Museum",
    "place": true
  },
  "Aktivitäten|München|Pinakothek der Moderne": {
    "url": "https://www.pinakothek-der-moderne.de/wp-content/uploads/2019/04/ASF_1231_Foto-Anna-Seibel-scaled-2000x1000.jpg",
    "source": "https://www.pinakothek-der-moderne.de/besuch-planen/",
    "credit": "Motiv aus Anbieterquelle · pinakothek-der-moderne.de",
    "alt": "Pinakothek der Moderne",
    "place": true
  },
  "Aktivitäten|Ingolstadt|Bayerisches Armeemuseum": {
    "url": "https://www.armeemuseum.de/images/gebauede/Innenhof_Schloss_Reisinger.jpg",
    "source": "https://www.armeemuseum.de/de/besuch.html",
    "credit": "Motiv aus Anbieterquelle · armeemuseum.de",
    "alt": "Bayerisches Armeemuseum",
    "place": true
  },
  "dresden-erweiterung|Handys|CMF Phone 2 Pro": {
    "url": "https://checkout-au.nothing.tech/cdn/shop/files/Support_Guide_-_Bulbasaur.jpg?v=1745899683&width=640",
    "source": "https://de.nothing.tech/products/cmf-phone-2-pro",
    "credit": "Hersteller · Nothing",
    "alt": "CMF Phone 2 Pro",
    "place": false
  },
  "dresden-erweiterung|Smart-Gadgets|Garmin vívosmart 5": {
    "url": "https://res.garmin.com/en/products/010-02645-10/v/cf-lg-9c10bfb1-25dc-4a9b-92bd-a468fe89a28f.jpg",
    "source": "https://www.garmin.com/de-DE/p/782585/pn/010-02645-10/",
    "credit": "Hersteller · Garmin",
    "alt": "Garmin vívosmart 5",
    "place": false
  },
  "dresden-erweiterung|Smart-Gadgets|Garmin Lily 2": {
    "url": "https://res.garmin.com/de_DE/products/010-02839-00/v/cf-lg.jpg",
    "source": "https://www.garmin.com/de-DE/p/950277/pn/010-02839-00/",
    "credit": "Hersteller · Garmin",
    "alt": "Garmin Lily 2",
    "place": false
  },
  "dresden-erweiterung|Smart-Gadgets|Garmin Instinct 3 Solar (45 mm)": {
    "url": "https://res.garmin.com/en_GB/products/010-02934-00/v/cf-lg.jpg",
    "source": "https://www.garmin.com/de-DE/p/1315317/pn/010-02934-00/",
    "credit": "Hersteller · Garmin",
    "alt": "Garmin Instinct 3 Solar (45 mm)",
    "place": false
  },
  "reise-ausbau|Smart-Gadgets|Garmin Forerunner 165": {
    "url": "https://res.garmin.com/de_DE/products/010-02863-21/v/cf-lg.jpg",
    "source": "https://www.garmin.com/de-DE/p/1055469/",
    "credit": "Hersteller · Garmin",
    "alt": "Garmin Forerunner 165",
    "place": false
  },
  "dresden-erweiterung|Reiseideen|Von Dresden nach Pillnitz": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Dresden-Pillnitz%2C_Schloss%2C_das_Wasserpalais%2C_Elbseite.jpg/500px-Dresden-Pillnitz%2C_Schloss%2C_das_Wasserpalais%2C_Elbseite.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "source": "https://commons.wikimedia.org/wiki/File:Dresden-Pillnitz,_Schloss,_das_Wasserpalais,_Elbseite.jpg",
    "credit": "Ausflugsziel · Dguendel · CC BY 3.0",
    "alt": "Wasserpalais von Schloss Pillnitz",
    "place": true,
    "license": "CC BY 3.0"
  }
};
const campusStadtFotos = {
  "Dresden": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/DD-Schloss-gp.jpg/330px-DD-Schloss-gp.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:DD-Schloss-gp.jpg",
    "credit": "Stadtansicht · User:Kolossos · CC BY-SA 3.0",
    "alt": "Stadtansicht von Dresden",
    "place": true,
    "license": "CC BY-SA 3.0"
  },
  "Heilbronn": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Heilbronn_Innenstadt_u_Wartberg_20050918.jpg/330px-Heilbronn_Innenstadt_u_Wartberg_20050918.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Heilbronn_Innenstadt_u_Wartberg_20050918.jpg",
    "credit": "Stadtansicht · K. Jähne · CC BY-SA 3.0",
    "alt": "Stadtansicht von Heilbronn",
    "place": true,
    "license": "CC BY-SA 3.0"
  },
  "München": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/330px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    "credit": "Stadtansicht · Martin Falbisoner · CC BY-SA 3.0",
    "alt": "Stadtansicht von München",
    "place": true,
    "license": "CC BY-SA 3.0"
  },
  "Neckarsulm": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Neckarsulm_Rathaus01.JPG/330px-Neckarsulm_Rathaus01.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Neckarsulm_Rathaus01.JPG",
    "credit": "Stadtansicht · Joachim Köhler · CC BY-SA 3.0",
    "alt": "Stadtansicht von Neckarsulm",
    "place": true,
    "license": "CC BY-SA 3.0"
  },
  "Heidelberg": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/K%C3%B6nigstuhl%2C_Heidelberg%2C_U-17.jpg/330px-K%C3%B6nigstuhl%2C_Heidelberg%2C_U-17.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:K%C3%B6nigstuhl,_Heidelberg,_U-17.jpg",
    "credit": "Stadtansicht · Jörg Braukmann · CC BY-SA 4.0",
    "alt": "Stadtansicht von Heidelberg",
    "place": true,
    "license": "CC BY-SA 4.0"
  },
  "Hamburg": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Hamburg%2C_Landungsbr%C3%BCcken_--_2016_--_3131-7.jpg/330px-Hamburg%2C_Landungsbr%C3%BCcken_--_2016_--_3131-7.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Hamburg,_Landungsbr%C3%BCcken_--_2016_--_3131-7.jpg",
    "credit": "Stadtansicht · Dietmar Rabich · CC BY-SA 4.0",
    "alt": "Stadtansicht von Hamburg",
    "place": true,
    "license": "CC BY-SA 4.0"
  },
  "Köln": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Kranh%C3%A4user_Cologne%2C_April_2018_-01.jpg/330px-Kranh%C3%A4user_Cologne%2C_April_2018_-01.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Kranh%C3%A4user_Cologne,_April_2018_-01.jpg",
    "credit": "Stadtansicht · Martin Falbisoner · CC BY-SA 4.0",
    "alt": "Stadtansicht von Köln",
    "place": true,
    "license": "CC BY-SA 4.0"
  },
  "Ingolstadt": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Kreuztor_Ingoldstadt.jpg/500px-Kreuztor_Ingoldstadt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "source": "https://commons.wikimedia.org/wiki/File:Kreuztor_Ingoldstadt.jpg",
    "credit": "Stadtansicht · No machine-readable author provided.  Haui  assumed (based on copyright claims). · CC BY 2.5",
    "alt": "Kreuztor in Ingolstadt",
    "place": true,
    "license": "CC BY 2.5"
  },
  "Berlin": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Fernsehturm%2C_Alexanderplatz%2C_Berlin.jpg/500px-Fernsehturm%2C_Alexanderplatz%2C_Berlin.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "source": "https://commons.wikimedia.org/wiki/File:Fernsehturm,_Alexanderplatz,_Berlin.jpg",
    "credit": "Stadtansicht · Chris Alban Hansen · CC BY-SA 2.0",
    "alt": "Fernsehturm am Alexanderplatz in Berlin",
    "place": true,
    "license": "CC BY-SA 2.0"
  },
  "Leipzig": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/MJK65010-25_Altes_Rathaus_%28Leipzig%29.jpg/500px-MJK65010-25_Altes_Rathaus_%28Leipzig%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "source": "https://commons.wikimedia.org/wiki/File:MJK65010-25_Altes_Rathaus_(Leipzig).jpg",
    "credit": "Stadtansicht · Martin Kraft · CC BY-SA 3.0",
    "alt": "Altes Rathaus in Leipzig",
    "place": true,
    "license": "CC BY-SA 3.0"
  }
};
const campusFotoLinksOhneBeleg = new Set(["https://photos.bringfido.com/lodging/9/4/7/1722749/1722749_54614707.jpg?density=2x&size=full"]);

Object.assign(campusNeueFotos, {
  "Lenovo Legion Tab Gen 3": {
    "url": "https://p2-ofp.static.pub/fes/cms/2025/02/11/q2yd0df2qoqx8utvonvf73ldtis1le074880.jpg",
    "source": "https://www.lenovo.com/au/en/p/tablets/legion-tab-series/lenovo-legion-tab-gen-3/len103g0002",
    "credit": "Modellreihe · Lenovo",
    "place": false
  },
  "Škoda Elroq": {
    "url": "https://cdn.skoda-auto.com/images/sites/enmaster-v2/0dd793a4-0aac-41aa-9c70-745e40089b3b/25ae155e261b9f31c0487ba02ce32920",
    "source": "https://www.skoda-auto.de/promotions/promotion-detail/elroq",
    "credit": "Modellreihe · Škoda",
    "place": false
  }
});
