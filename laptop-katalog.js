(function initialize(deals){
 const euro=n=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(n);
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const total=d=>d.price==null||d.shipping==null?null:d.price+d.shipping;
 const priceLabel=d=>d.price==null?"Preis offen":euro(d.price);
 const byPrice=(a,b)=>(a.price??Infinity)-(b.price??Infinity);
 function attachPhotoFallback(){
  for(const image of results.querySelectorAll(".product-photo")){
   const display=()=>{if(image.naturalWidth===0){image.hidden=true;image.parentElement.querySelector(".photo-fallback").hidden=false;}};
   image.addEventListener("load",display);
   image.addEventListener("error",display);
   if(image.complete)display();
  }
 }
 const snapshotAge=d=>{const m=String(d.checked).match(/^(\d{2})\.(\d{2})\.(\d{4})/);if(!m)return null;return Math.max(0,Math.floor((Date.now()-Date.UTC(+m[3],+m[2]-1,+m[1]))/86400000));};
 const shipping=d=>d.shipping==null?"Versand unbekannt":d.shipping===0?"inkl. Versand":`zzgl. ${euro(d.shipping)} Versand`;
 const safeLink=safeCampusLink;
 const results=document.getElementById("results"),counter=document.getElementById("counter"),dialog=document.getElementById("detail");

 const get=id=>document.getElementById(id);
 const profiles={
  study:[32,32,"any","Python, SQL, BI und erste Docker-Projekte. Die Bewertung verwendet die unten sichtbaren Kriterien."],
  data:[32,64,"any","Notebooks, Statistik und größere lokale Datensätze. 64 GB Kapazität lässt Spielraum für spätere Upgrades."],
  ai:[32,64,"any","ML-Experimente und Modelltraining. GPU, VRAM und Framework-Kompatibilität separat prüfen, da sie im Katalog nicht einheitlich erfasst sind."],
  cloud:[32,64,"any","Container, Datenpipelines und virtuelle Maschinen. Host-Betriebssystem und Virtualisierungsfunktionen separat prüfen."],
  business:[16,16,"compact","BI-Dashboards, Präsentationen und mobile Zusammenarbeit. Displaygröße dient als Anhaltspunkt für Mobilität."],
  custom:[32,32,"any","Passe RAM, Kapazität und bevorzugte Displaygröße an deine Projekte an."]
 };
 const filterIds=["profile","budget","budgetMode","size","upgrade","ram","capacity","preferredSize"];
 const defaults=Object.fromEntries(filterIds.map(id=>[id,get(id).value]));
 let finderUid="";
 const storageKey=()=>campusAccountStorageKey("campus-deals-finder-v1",finderUid);
 let saved={}, favorites, compared, targets, storageWritable=true;
 const validIds=new Set(deals.map(d=>d.id));
 const savedIds=items=>new Set(Array.isArray(items)?items.filter(id=>validIds.has(id)):[]);
 const readFinder=()=>finderUid&&storageWritable?(readCampusStorage(storageKey())??saved):saved;
 function applyFinder(value,restoreFilters=false){
  saved=value;
  favorites=savedIds(value.favorites);
  compared=new Set([...savedIds(value.compared)].slice(0,3));
  targets=new Map(deals.flatMap(d=>Number.isFinite(value.targets?.[d.id])&&value.targets[d.id]>0?[[d.id,value.targets[d.id]]]:[]));
  if(!restoreFilters)return;
  for(const id of filterIds){
   const field=get(id), stored=value.filters?.[id];
   field.value=typeof stored==="string"?stored:defaults[id];
   if(!field.checkValidity()||(field.tagName==="SELECT"&&!field.value))field.value=defaults[id];
  }
 }
 applyFinder(readFinder(),true);
 let onlyFavorites=false, laptopLimit=9;
 const budget=()=>get("budget").checkValidity()?get("budget").valueAsNumber:NaN;
 const withinBudget=d=>Number.isFinite(budget())&&total(d)!=null&&Math.round(total(d)*100)<=Math.round(budget()*100);
 const fitsSize=(d,size)=>size==="any"||(size==="compact"?d.size<=14:d.size>14);
 function fit(d){
  const criteria=[d.ram>=Number(get("ram").value),d.cap>=Number(get("capacity").value)];
  if(get("preferredSize").value!=="any")criteria.push(fitsSize(d,get("preferredSize").value));
  return Math.round(100*criteria.filter(Boolean).length/criteria.length);
 }
 const dealScore=d=>total(d)==null||!Number.isFinite(budget())?null:Math.min(100,Math.round(80*budget()/total(d)));
 const scoreLabel=d=>dealScore(d)==null?"Offen":dealScore(d)+" / 100";
 const ramLabel=d=>d.upgrade?"Bis "+d.cap+" GB aufrüstbar":"Fest verbaut";
 const dateLabel=date=>date.slice(0,10).split("-").reverse().join(".");
 function save(changes){
  applyFinder({...readFinder(),...changes});
  let status="";
  try {if(finderUid)localStorage.setItem(storageKey(),JSON.stringify(saved));}
  catch {
   storageWritable=false;
   status="Browserspeicher nicht verfügbar. Änderungen gelten für diese Sitzung.";
  }
  get("finderStatus").textContent=status;
  return !status;
 }
 const saveFilters=()=>save({filters:Object.fromEntries(filterIds.map(id=>[id,get(id).value]))});
 function alarm(d){
  const target=targets.get(d.id);
  if(target==null)return "Kein Zielpreis gesetzt";
  const prefix="Ziel "+euro(target)+" · ";
  if(d.price==null)return prefix+"Noch kein Preisstand";
  if(total(d)==null)return prefix+"Versandendpreis offen";
  return prefix+(Math.round(total(d)*100)<=Math.round(target*100)?"Snapshot im Ziel":"Snapshot über Ziel");
 }
 function drawComparison(){
  const items=[...compared].map(id=>deals.find(d=>d.id===id));
  get("comparison").hidden=items.length===0;
  const rows=[
   ["CPU",d=>esc(d.cpu)],["Betriebssystem",d=>esc(d.os??"Je Konfiguration prüfen")],["Display",d=>esc(d.size)+" Zoll · "+esc(d.display)],
   ["RAM / Aufrüstung",d=>esc(d.ram)+" GB · "+esc(ramLabel(d))],["SSD",d=>esc(d.storage)],
   ["Profil-Fit",d=>fit(d)+" %"],["Deal-Score (Snapshot)",scoreLabel],
   ["Dokumentierter Endpreis",d=>d.price==null?"Kein Preis erfasst":total(d)==null?"Versand offen":euro(total(d))],
   ["Preisstand / Quelle",d=>`<a href="${esc(safeLink(d.source))}" target="_blank" rel="noopener noreferrer">${esc(d.checked)} · ${esc(d.shop)}</a>`],
   ["Preisalarm",d=>esc(alarm(d))]
  ];
  get("comparison").querySelector(".compare-scroll").innerHTML=items.length?`<table>
   <caption>${items.length} von 3 Vergleichsplätzen · dokumentierte Preisstände</caption>
   <thead><tr><th scope="col">Merkmal</th>${items.map(d=>`<th scope="col">${esc(d.brand)} ${esc(d.name)}<br>${esc(d.model)}</th>`).join("")}</tr></thead>
   <tbody>${rows.map(([label,value])=>`<tr><th scope="row">${label}</th>${items.map(d=>`<td>${value(d)}</td>`).join("")}</tr>`).join("")}</tbody></table>`:"";
 }
 document.getElementById("stat-models").textContent=deals.length;
 document.getElementById("stat-low").textContent=euro(Math.min(...deals.filter(d=>d.price!=null).map(d=>d.price)));
 function deltaTag(d){
  let hs=d.history.filter(h=>h.shop===d.shop&&safeLink(h.source)!=="#").sort((a,b)=>a.date.localeCompare(b.date));
  if(hs.length<2)return "";
  let prev=hs.at(-2),latest=hs.at(-1);
  if(latest.price===prev.price)return "";
  if(Math.abs(latest.price-d.price)>.01)return "";
  const diff=latest.price-prev.price,percent=100*diff/prev.price;
  return `<div class="delta">${diff>0?"▲":"▼"} ${diff>0?"+":""}${euro(diff)} (${diff>0?"+":""}${percent.toFixed(1).replace(".",",")} %) seit ${esc(prev.date.split("-").reverse().join("."))} · ${esc(d.shop)}</div>`;
 }
 const requestedLaptop=new URLSearchParams(location.search).get("laptop");
 const byId=deals.find(d=>d.id===requestedLaptop);
 let linkedIds=new Set(byId?[byId.id]:deals.filter(d=>d.model===requestedLaptop).map(d=>d.id));
 function draw(){
  let q=document.getElementById("query").value.toLocaleLowerCase("de"),sort=document.getElementById("sort").value;
  const activeBrand=get("brandFilter").value;
  let data=deals.filter(d=>(activeBrand==="Alle"||activeBrand===d.brand)&&[d.brand,d.name,d.model,d.cpu,d.detail].join(" ").toLocaleLowerCase("de").includes(q));

  data=data.filter(d=>fitsSize(d,get("size").value)
   &&(get("upgrade").value==="any"||d.upgrade===(get("upgrade").value==="yes"))
   &&(get("budgetMode").value==="any"||withinBudget(d))
   &&(!onlyFavorites||favorites.has(d.id)));
  if(linkedIds.size)data=deals.filter(d=>linkedIds.has(d.id));
  get("directLaptopHint").hidden=!linkedIds.size;
  get("profileNote").textContent=profiles[get("profile").value][3];
  get("wishlist").textContent="Wunschliste ("+favorites.size+")";
  drawComparison();
  if(sort==="fit")data.sort((a,b)=>fit(b)-fit(a)||byPrice(a,b));
  if(sort==="deal")data.sort((a,b)=>(dealScore(b)??-1)-(dealScore(a)??-1)||byPrice(a,b));
  if(sort==="price")data.sort((a,b)=>byPrice(a,b));
  if(sort==="small")data.sort((a,b)=>a.size-b.size||byPrice(a,b));
  if(sort==="big")data.sort((a,b)=>b.size-a.size||byPrice(a,b));
  if(sort==="fresh")data.sort((a,b)=>{const parse=d=>{const m=String(d.checked).match(/^(\d{2})\.(\d{2})\.(\d{4})(?:,?\s*(\d{2}):(\d{2}))?/);return m?Date.UTC(+m[3],+m[2]-1,+m[1],+(m[4]||0),+(m[5]||0)):0};return parse(b)-parse(a)||byPrice(a,b)});
  if(sort==="budget")data.sort((a,b)=>Number(withinBudget(b))-Number(withinBudget(a))||byPrice(a,b));
  counter.textContent=`${data.length} von ${deals.length} Konfigurationen${data.length>laptopLimit?` · ${laptopLimit} angezeigt`:""}`;
  const more=get("moreLaptops");
  more.hidden=data.length<=laptopLimit;
  more.textContent="Mehr Laptops anzeigen ("+Math.max(0,data.length-laptopLimit)+")";
  results.innerHTML=data.slice(0,laptopLimit).map(d=>`<article class="card" data-id="${esc(d.id)}">
  <div class="device ${esc(d.brand.toLowerCase())}"><div class="minilaptop" aria-hidden="true"></div>${photos[d.id]?`<img class="product-photo" src="${esc(photos[d.id][0])}" alt="${esc(photos[d.id][2])}" loading="lazy" referrerpolicy="no-referrer">`:""}${`<span class="photo-fallback"${photos[d.id]?" hidden":""}>${campusSymbol("Laptops")}<small>Symbolgrafik · Foto offen</small></span>`}<span class="screenSize">${esc(d.size.toString().replace(".",","))} Zoll</span></div>
  <div class="cardbody"><div class="rowtop"><span class="brandname">${esc(d.brand)}</span><span class="tag">${esc(d.tag)}</span></div>
  <h3>${esc(d.name)}</h3><div class="model">${esc(d.model)} · ${esc(d.cpu)}</div>
  <div class="specs"><span class="spec">${esc(d.size.toString().replace(".",","))} Zoll</span><span class="spec">${esc(d.ram)} GB RAM</span><span class="spec">${esc(d.storage)} SSD</span><span class="spec">${d.upgrade?`bis ${esc(d.cap)} GB RAM aufrüstbar`:"RAM verlötet"}</span></div>
  <p class="desc">${esc(d.detail)}</p>
  <div class="bottom">${deltaTag(d)}<div class="price">${priceLabel(d)}<small>${d.price==null?"Herstellerkonfiguration":shipping(d)}</small></div>
  <div class="total">${d.price==null?"Technische Daten beim Hersteller":total(d)==null?"Endpreis inkl. Versand unbekannt":"Dokumentierter Gesamtpreis: "+euro(total(d))}</div><div class="shop">${esc(d.shop)}</div>
  <div class="btnline"><button class="btn" type="button" data-action="detail">Details & Preisverlauf</button></div>
  <div class="tools"><button type="button" class="btn ghost" data-action="favorite" aria-label="Wunschliste: ${esc(d.model)}" aria-pressed="${favorites.has(d.id)}">Merken</button><button type="button" class="btn ghost" data-action="compare" aria-label="Vergleich: ${esc(d.model)}" aria-pressed="${compared.has(d.id)}">Vergleichen</button></div><div class="verify">Profil-Fit ${fit(d)} % · Deal-Score ${scoreLabel(d)}<br>${esc(alarm(d))}<br><span class="stale">${d.price==null?"Modell ohne Preisbeleg":"Historischer Snapshot · kein Livepreis"}</span><br>Quellen-/Preisstand: ${esc(d.checked)}${snapshotAge(d)!==null?` · ${snapshotAge(d)} Tage alt`:""} · Klick für Quellen</div></div></div></article>`).join("")||'<div class="empty">Keine passenden Modelle gefunden.</div>';
  attachPhotoFallback();
 }
 function plot(history){
  if(history.length<2)return `<div class="chartbox"><div class="empty">Für dieses Modell liegen weniger als zwei dokumentierte Verlaufspunkte vor. Weitere belegte Einzelangebote findest du unten.</div></div>`;
  history=[...history].sort((a,b)=>a.date.localeCompare(b.date));
  const w=720,h=230,left=72,right=18,top=22,bottom=44;
  const vals=history.map(p=>p.price),min=Math.min(...vals),max=Math.max(...vals),pad=Math.max(30,(max-min)*.22);
  const low=Math.max(0,min-pad),high=max+pad;
  const first=Date.parse(history[0].date), span=Date.parse(history.at(-1).date)-first;
  const x=i=>left+(w-left-right)*(span?(Date.parse(history[i].date)-first)/span:i/(history.length-1));
  const y=v=>top+(h-top-bottom)*(high-v)/(high-low);
  const ticks=[0,1,2,3,4];
  const grids=ticks.map(i=>{let val=low+(high-low)*i/4,yy=y(val);return `<line x1="${left}" x2="${w-right}" y1="${yy}" y2="${yy}" stroke="var(--line)" stroke-width="1"/><text x="${left-10}" y="${yy+4}" text-anchor="end" fill="var(--muted)" font-size="12">${Math.round(val)} €</text>`}).join("");
  const dots=history.map((a,i)=>`<circle cx="${x(i)}" cy="${y(a.price)}" r="6" fill="#a5f1bf" stroke="#0b1b23" stroke-width="3"><title>${esc(a.date)}: ${euro(a.price)}</title></circle><text x="${x(i)}" y="${h-15}" text-anchor="middle" fill="var(--muted)" font-size="11">${esc(a.date.slice(8,10)+"."+a.date.slice(5,7)+"."+a.date.slice(2,4))}</text>`).join("");
  return `<div class="chartbox"><svg role="img" aria-label="Preisbeobachtungen mit ${history.length} belegten Zeitpunkten" viewBox="0 0 ${w} ${h}">${grids}${dots}</svg><p class="chartnote">Dokumentierte Gerätepreise ohne Versand. Händlerzuordnungen sind nicht für jeden Punkt einzeln belegt. Die Punkte zeigen einzelne Beobachtungen; daraus lässt sich kein gesicherter Rabatt ableiten.</p></div>`;
 }
 let lastTrigger=null;
 function openDetail(id){
  const d=deals.find(x=>x.id===id);if(!d)return;
  document.getElementById("modalBrand").textContent=d.brand+" · Modellvergleich";
  document.getElementById("modalTitle").textContent=d.name;
  document.getElementById("modalModel").textContent=d.model+" · "+d.cpu;
  let hs=(d.history||[]).filter(h=>safeLink(h.source)!=="#").sort((a,b)=>a.date.localeCompare(b.date)),offers=d.price==null?[]:d.offers?.length?d.offers:[{shop:d.shop,price:d.price,shipping:d.shipping,date:d.checked,url:d.source}];
  const sourceDates=hs.length?`<p class="chartnote">Preisbelege (ohne Versand): ${hs.map(h=>`<a href="${esc(safeLink(h.source))}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">${esc(dateLabel(h.date))} · ${euro(h.price)} ↗</a>`).join(" · ")}</p>`:"";
  document.getElementById("modalBody").innerHTML=`
  <div class="pillrow"><span class="pill">${esc(d.display)}</span><span class="pill">${esc(d.ram)} GB RAM</span><span class="pill">${esc(d.storage)} SSD</span><span class="pill">${d.upgrade?`bis ${esc(d.cap)} GB aufrüstbar`:"RAM nicht erweiterbar"}</span></div>
  <div class="modStats"><div class="modStat"><small>Dokumentierter Preis (Versand ggf. offen)</small><b>${priceLabel(d)}</b></div><div class="modStat"><small>Händler</small><b style="font-size:14px">${esc(d.shop)}</b></div><div class="modStat"><small>Preisstand / Quelle</small><b>${esc(d.checked)}</b></div></div>
  <p style="color:var(--muted);font-size:13px">${esc(d.detail)}</p>
  ${photos[d.id]?`<a class="image-source" href="${esc(photos[d.id][1])}" target="_blank" rel="noopener noreferrer">Bild: ${esc(photos[d.id][2])} ↗</a>`:""}

  <h3>Preisalarm im Browser</h3>
  <p class="chartnote" id="alarmState" role="status">${esc(alarm(d))}</p>
  <form class="target">
    <label>Zielpreis inkl. Versand (€)<input name="target" type="number" required min="0.01" step="0.01" value="${targets.get(d.id)??""}" placeholder="z. B. 1500"></label>
    <button class="btn ghost" type="submit">Ziel speichern</button>
    <button class="btn ghost" type="button" id="removeTarget">Ziel löschen</button>
  </form>
  <p class="chartnote">Der Status bezieht sich auf den dokumentierten Preisstand. Diese Seite prüft keine Preise im Hintergrund und verschickt keine Benachrichtigungen.</p>
  <h3>Preisentwicklung</h3>${plot(hs)}${sourceDates}
  <h3>Dokumentierte Händlerangebote</h3><p class="chartnote">Die Händlerstände können abgelaufen sein. Die Sortierung „Jüngster Preisstand“ verwendet das Datum des Angebots, nicht das Abrufdatum. Gesamtpreise gelten nur für die dokumentierte Versandart; bei unbekanntem Versand ist kein Gesamtpreis berechenbar.</p>
  ${offers.length?"":`<p class="chartnote">Für diese Konfiguration ist kein Händlerangebot hinterlegt.</p>`}
  ${offers.map(o=>`<div class="offerrow"><div><strong>${esc(o.shop)}</strong><small>Stand: ${esc(o.date)} · ${o.availability?esc(o.availability)+" · ":"Verfügbarkeit zum heutigen Zeitpunkt unbekannt · "}${o.shipping==null?"Versand offen":o.shipping===0?"inkl. Versand":"zzgl. "+euro(o.shipping)+" Versand"}</small></div><div style="display:flex;align-items:center;gap:12px"><b>${euro(o.price)}${o.shipping==null?"":`<small style="display:block;font-weight:400;color:var(--muted)">Gesamt ${euro(o.price+o.shipping)}</small>`}</b><a href="${esc(safeLink(o.url))}" target="_blank" rel="noopener noreferrer">Ansehen ↗</a></div></div>`).join("")}
  <div class="modalActions"><a class="btn" href="${esc(safeLink(d.source))}" target="_blank" rel="noopener noreferrer">${d.price==null?"Technische Daten":"Angebote prüfen"} ↗</a>${d.geizhals?`<a class="btn ghost" href="${esc(safeLink(d.geizhals))}" target="_blank" rel="noopener noreferrer">Geizhals-Preisverlauf ↗</a>`:""}</div>
  <p class="chartnote">Historische Händlerangebote und Preisvergleichs-Einstiege sind nicht gleichwertig. Bei neu ergänzten Modellen kann der Angebotszeitpunkt unbekannt sein. Preis, Lieferbarkeit und Versand vor Kauf direkt beim Händler prüfen.</p>`;

  const form=dialog.querySelector(".target");
  function updateTarget(value){
   applyFinder(readFinder());
   if(Number.isFinite(value)&&value>0)targets.set(d.id,value);
   else targets.delete(d.id);
   const stored=save({targets:Object.fromEntries(targets)});
   get("alarmState").textContent=alarm(d)+(stored?"":" · Nur für diese Sitzung gespeichert");
  }
  form.addEventListener("submit",e=>{e.preventDefault();updateTarget(form.elements.target.valueAsNumber);});
  get("removeTarget").addEventListener("click",()=>{form.reset();form.elements.target.value="";updateTarget(NaN);});
  if(!dialog.open){lastTrigger=document.activeElement;dialog.showModal();}

 }

 results.addEventListener("click",e=>{
  const card=e.target.closest("[data-id]");
  if(!card)return;
  const id=card.dataset.id, action=e.target.closest("[data-action]")?.dataset.action;
  if(action==="favorite"||action==="compare"){
   applyFinder(readFinder());
   const selection=action==="favorite"?favorites:compared;
   if(selection.has(id))selection.delete(id);
   else if(action==="compare"&&selection.size===3){
    get("finderStatus").textContent="Der Vergleich hat drei Plätze. Entferne zuerst ein Modell.";
    return;
   }else selection.add(id);
   save(action==="favorite"?{favorites:[...favorites]}:{compared:[...compared]});
   draw();
   (results.querySelector(`[data-id="${CSS.escape(id)}"] [data-action="${action}"]`)||get("wishlist")).focus();
   return;
  }
  openDetail(id);
 });
 dialog.addEventListener("close",()=>{
  const id=lastTrigger?.closest("[data-id]")?.dataset.id;
  draw();
  if(id)results.querySelector(`[data-id="${CSS.escape(id)}"] [data-action="detail"]`)?.focus();
 });
 for(const id of filterIds)get(id).addEventListener("change",()=>{
  if(id==="profile"&&get("profile").value!=="custom"){
   const [ram,capacity,size]=profiles[get("profile").value];
   get("ram").value=ram; get("capacity").value=capacity; get("preferredSize").value=size;
  }
  if(["ram","capacity","preferredSize"].includes(id))get("profile").value="custom";
  saveFilters();
  resetLaptopView();
 });
 get("wishlist").addEventListener("click",()=>{
  onlyFavorites=!onlyFavorites;
  get("wishlist").setAttribute("aria-pressed",onlyFavorites);
  resetLaptopView();
 });
 get("clearCompare").addEventListener("click",()=>{save({compared:[]});draw();get("wishlist").focus();});
 get("resetFinder").addEventListener("click",()=>{
  for(const id of filterIds)get(id).value=defaults[id];
  get("query").value="";
  get("sort").value="budget";
  get("brandFilter").value="Alle";
  onlyFavorites=false;
  get("wishlist").setAttribute("aria-pressed","false");
  saveFilters();
  resetLaptopView();
 });
 document.getElementById("closeModal").addEventListener("click",()=>dialog.close());
 dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

 function resetLaptopView(){linkedIds.clear();laptopLimit=9;draw();}
 get("clearDirectLaptop").addEventListener("click",()=>{get("query").value="";resetLaptopView();get("query").focus();});
 get("brandFilter").addEventListener("change",resetLaptopView);
 get("query").addEventListener("input",resetLaptopView);
 get("sort").addEventListener("change",resetLaptopView);
 get("moreLaptops").addEventListener("click",()=>{
  const previous=laptopLimit;
  laptopLimit+=9;
  draw();
  results.querySelectorAll('[data-action="detail"]')[previous]?.focus();
 });

 const refreshFinder=()=>{applyFinder(readFinder(),true);draw();};
 watchCampusStorage(storageKey,refreshFinder);
 window.addEventListener("campus-account",event=>{
  const nextUid=event.detail?.uid??"";
  if(finderUid && finderUid!==nextUid){
   get("query").value="";
   get("brandFilter").selectedIndex=0;
   get("sort").selectedIndex=0;
  }
  finderUid=nextUid;
  saved={};storageWritable=true;onlyFavorites=false;laptopLimit=9;
  get("wishlist").setAttribute("aria-pressed","false");
  refreshFinder();
 });
 draw();showCampusUpdate("Laptops");
})(deals);