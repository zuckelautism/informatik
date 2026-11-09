function campusSymbol(category) {
 const paths={
  Laptops:'<rect x="7" y="8" width="26" height="17" rx="2"/><path d="M3 30h34l-3-5H6z"/>',
  Handys:'<rect x="13" y="4" width="14" height="32" rx="3"/><path d="M18 8h4m-3 24h2"/>',
  Tablets:'<rect x="8" y="5" width="24" height="30" rx="3"/><path d="M19 31h2"/>',
  "Smart-Gadgets":'<rect x="11" y="11" width="18" height="18" rx="5"/><path d="M16 11V4h8v7m-8 18v7h8v-7m-8-9h8"/>',
  Wohnen:'<path d="m4 19 16-13 16 13M8 16v18h24V16M17 34V23h6v11"/>',
  Autos:'<path d="m6 19 4-8h20l4 8v10H6zM6 20h28M12 24h3m10 0h3M10 29v3m20-3v3"/>',
  Fahrschulen:'<circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="3"/><path d="M7 19h10m6 0h10M20 23v10"/>',
  Studienstart:'<path d="M20 10C14 6 8 6 4 8v23c5-2 10-1 16 2 6-3 11-4 16-2V8c-4-2-10-2-16 2zm0 0v23"/>',
  Vorteile:'<path d="M4 20 20 4h15v15L19 35z"/><circle cx="28" cy="11" r="2"/>',
  Aktivitäten:'<path d="m4 32 10-14 6 7 6-11 10 18z"/><circle cx="12" cy="10" r="4"/>',
  "ÖPNV & Pendeln":'<rect x="8" y="5" width="24" height="26" rx="4"/><path d="M8 21h24M20 5v16m-5 10-4 5m14-5 4 5M13 26h1m12 0h1"/>'
 };
 return '<svg viewBox="0 0 40 40" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">'+(paths[category]||paths.Studienstart)+'</svg>';
}

function showCampusUpdate(category) {
 const el=document.getElementById("campusUpdate");
 if(!el)return;
 const format=value=>new Intl.DateTimeFormat("de-DE",{
  dateStyle:"medium",timeStyle:"short",timeZone:"Europe/Berlin"
 }).format(new Date(value));
 const report=campusPruefstand.kategorien[category];
 const last=campusPruefstand.letzterLauf;
 const interval="Prüfintervall: 3 Stunden";
 const status=last?"Letzter planmäßiger Lauf: "+format(last)+" (Berlin)":"Erster planmäßiger Lauf steht aus";
 const result=report?" · "+report:"";
 el.textContent=interval+" · "+status+result;
}
