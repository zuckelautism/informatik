(() => {
 "use strict";
 const get=id=>document.getElementById(id);
 const form=get("profileForm");
 const authStatus=get("authStatus");
 const profileStatus=get("profileStatus");
 const signInButton=get("googleSignIn");
 const signOutButton=get("signOut");
 const saveButton=get("saveProfile");
 const key="campus-profile-preview-v1";
 const interestLabels={
  informatik:"Informatik", "daten-ki":"Daten & KI", wirtschaft:"Wirtschaft", technik:"Technik",
  wohnen:"Wohnen", mobilitaet:"Mobilität", freizeit:"Freizeit", sparen:"Sparen"
 };
 const fields={firstName:"firstName",path:"profilePath",city:"profileCity",theme:"profileTheme"};
 const socialFields={discord:"profileDiscord",instagram:"profileInstagram",linkedin:"profileLinkedin",email:"profileEmail"};
 const choices={
  path:["offen","studium","ausbildung"],
  city:["","Neckarsulm","Heilbronn","München","Ingolstadt"],
  theme:["coastal","slate","rose","dark"]
 };
 const limitPhoto=120000;
 let avatar="", authClient=null, user=null, generation=0, imageGeneration=0, photoPending=false;
 let profileReady=true, saving=false;

 function cleanText(value,max){
  return typeof value==="string"?value.trim().slice(0,max):"";
 }
 function cleanProfile(raw={}){
  const state={};
  for(const [name,values] of Object.entries(choices))state[name]=values.includes(raw[name])?raw[name]:values[0];
  state.firstName=cleanText(raw.firstName,40);
  state.interests=[...new Set(Array.isArray(raw.interests)?raw.interests.filter(id=>Object.hasOwn(interestLabels,id)):[])];
  state.socials=Object.fromEntries(Object.keys(socialFields).map(id=>[id,cleanText(raw.socials?.[id],id==="discord"?120:180)]));
  state.photo=typeof raw.photo==="string"&&raw.photo.length<=limitPhoto&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(raw.photo)?raw.photo:"";
  return state;
 }
 function readForm(){
  return cleanProfile({
   ...Object.fromEntries(Object.entries(fields).map(([name,id])=>[name,get(id).value])),
   interests:[...get("interestOptions").querySelectorAll("input:checked")].map(input=>input.value),
   socials:Object.fromEntries(Object.entries(socialFields).map(([name,id])=>[name,get(id).value])),
   photo:avatar
  });
 }
 function renderAvatar(){
  const el=get("profileAvatar");
  el.replaceChildren();
  if(avatar){
   const image=document.createElement("img");
   image.src=avatar;
   image.alt="";
   el.append(image);
  }else el.textContent=Array.from(get("firstName").value.trim())[0]?.toLocaleUpperCase("de")||"?";
 }
 function renderSocials(socials){
  const list=get("profileLinks");
  list.replaceChildren();
  const instagram=/^@?[A-Za-z0-9_.]{1,30}$/.test(socials.instagram)
   ? "https://www.instagram.com/"+socials.instagram.replace(/^@/,"")+"/":safeCampusLink(socials.instagram);
  const linkedin=safeCampusLink(socials.linkedin);
  const discord=safeCampusLink(socials.discord);
  const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(socials.email)?"mailto:"+encodeURIComponent(socials.email):"#";
  const links=[
   ["Instagram",instagram,/^https:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9_.]+\/?(?:\?.*)?$/.test(instagram)],
   ["LinkedIn",linkedin,/^https:\/\/(?:[a-z]{2}\.|www\.)?linkedin\.com\/in\/[\w%.-]+\/?(?:\?.*)?$/.test(linkedin)],
   ["Discord",discord,/^https:\/\/(?:www\.)?discord\.com\/users\/\d+\/?$/.test(discord)],
   ["E-Mail",email,email!=="#"]
  ];
  for(const [label,href,valid] of links){
   if(!valid)continue;
   const link=document.createElement("a");
   link.className="btn ghost";link.textContent=label;link.href=href;
   if(label!=="E-Mail"){link.target="_blank";link.rel="noopener noreferrer";}
   list.append(link);
  }
  if(socials.discord&&!links[2][2]){
   const handle=document.createElement("span");
   handle.className="muted";handle.textContent="Discord: "+socials.discord;
   list.append(handle);
  }
 }
 function renderProfile(state){
  imageGeneration++;
  photoPending=false;
  for(const [name,id] of Object.entries(fields))get(id).value=state[name];
  for(const [name,id] of Object.entries(socialFields))get(id).value=state.socials[name];
  for(const input of get("interestOptions").querySelectorAll("input"))input.checked=state.interests.includes(input.value);
  get("photoFile").value="";
  avatar=state.photo;
  campusApplyTheme(state.theme);
  renderAvatar();
  renderSocials(state.socials);
  renderRecommendations(state);
 }
 const priority={
  studium:["Studium","Duales Studium","Studienstart","Vorteile","Wohnen","ÖPNV & Pendeln"],
  ausbildung:["Ausbildung","Duales Studium","ÖPNV & Pendeln","Wohnen","Fahrschulen"],
  offen:["Studium","Ausbildung","Duales Studium","Studienstart","Aktivitäten"]
 };
 const interestCategories={
  informatik:["Studium","Duales Studium","Studienstart"],"daten-ki":["Studium","Duales Studium","Studienstart"],
  wirtschaft:["Studium","Duales Studium","Ausbildung"],technik:["Smart-Gadgets","Handys","Tablets","Ausbildung"],
  wohnen:["Wohnen","Unterkünfte"],mobilitaet:["ÖPNV & Pendeln","Fahrschulen","Autos"],
  freizeit:["Aktivitäten","Reiseideen"],sparen:["Vorteile","Reiseideen"]
 };
 const educationTypes=new Set(["Studium","Duales Studium","Ausbildung"]);
 const preferredType=(type,path)=>path==="offen"||!educationTypes.has(type)||priority[path].slice(0,2).includes(type);
 const fold=value=>String(value??"").toLocaleLowerCase("de").normalize("NFD").replace(/\p{Diacritic}/gu,"");
 const signals={
  informatik:/informatik|python|sql|programmier|software/,
  "daten-ki":/data|daten|\bki\b|machine learning|analytics/,
  wirtschaft:/wirtschaft|business|kauf|management/,
  technik:/technik|elektronik|maschinenbau|hardware/
 };
 function getRecommendations(profile){
  const weights=priority[profile.path];
  const date=new Intl.DateTimeFormat("sv-SE",{timeZone:"Europe/Berlin",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  const eligible=campusEntries.filter(item=>!item.until||item.until>=date);
  const ranked=eligible.filter(item=>preferredType(item.category,profile.path))
   .filter(item=>!profile.city||item.city===profile.city||item.city==="Überregional")
   .map((item,index)=>{
    const position=weights.indexOf(item.category);
    const base=position<0?0:8-position;
    const local=profile.city&&item.city===profile.city?6:0;
    const text=fold(item.title+" "+item.note);
    const matches=profile.interests.filter(tag=>interestCategories[tag].includes(item.category)||signals[tag]?.test(text));
    return {item,index,score:base+local+matches.length*4,matches};
   }).filter(row=>row.score>0).sort((a,b)=>b.score-a.score||a.index-b.index);
  const chosen=[],byCategory=new Map();
  const add=row=>{
   chosen.push(row);
   const category=row.item.category;
   byCategory.set(category,(byCategory.get(category)||0)+1);
  };
  // Keep the selected education path represented even when many interests match other cards.
  const primary=ranked.find(row=>row.item.category===(profile.path==="ausbildung"?"Ausbildung":"Studium"));
  if(primary)add(primary);
  if(profile.path==="offen"){
   const vocational=ranked.find(row=>row.item.category==="Ausbildung");
   if(vocational)add(vocational);
  }
  for(const row of ranked){
   if(chosen.length===9)break;
   if(!chosen.includes(row)&&(byCategory.get(row.item.category)||0)<3)add(row);
  }
  return chosen;
 }
 function renderRecommendations(profile){
  const paths={offen:"Orientierung",studium:"Studium",ausbildung:"Ausbildung"};
  get("recommendContext").textContent=[paths[profile.path],profile.city||"alle Städte",...profile.interests.map(id=>interestLabels[id])].join(" · ");
  const grid=get("recommendCards");
  grid.replaceChildren();
  for(const {item,matches} of getRecommendations(profile)){
   const card=document.createElement("article");
   card.className="catalog-card";
   const tag=document.createElement("div");
   tag.className="eyebrow";
   tag.textContent=item.category+" · "+item.city;
   const title=document.createElement("h4");
   title.textContent=item.title;
   const desc=document.createElement("p");
   desc.textContent=item.note;
   const link=document.createElement("a");
   link.className="btn ghost";
   link.href=safeCampusLink(item.link);
   link.target="_blank";
   link.rel="noopener noreferrer";
   link.textContent="Quelle öffnen ↗";
   card.append(tag,title,desc);
   if(matches.length){
    const reasons=document.createElement("p");
    reasons.className="benefit-meta";
    reasons.textContent="Passt zu "+matches.map(id=>interestLabels[id]).join(", ");
    card.append(reasons);
   }
   card.append(link);
   grid.append(card);
  }
  if(!grid.childElementCount)grid.textContent="Für diese Auswahl gibt es noch keine passenden Empfehlungen.";
 }
 function photoFromFile(file){
  return new Promise((resolve,reject)=>{
   const url=URL.createObjectURL(file);
   const image=new Image();
   image.onerror=()=>{URL.revokeObjectURL(url);reject(new Error("Foto kann nicht gelesen werden."));};
   image.onload=()=>{
    URL.revokeObjectURL(url);
    try{
     const width=image.naturalWidth,height=image.naturalHeight;
     if(!width||!height||width*height>40000000)throw new Error("Das Bild ist zu groß.");
     const canvas=document.createElement("canvas");
     const side=Math.min(width,height);
     canvas.width=canvas.height=256;
     const ctx=canvas.getContext("2d");
     ctx.fillStyle="#edf2f4";ctx.fillRect(0,0,256,256);
     ctx.drawImage(image,(width-side)/2,(height-side)/2,side,side,0,0,256,256);
     const photo=canvas.toDataURL("image/jpeg",0.78);
     if(!photo.startsWith("data:image/jpeg;")||photo.length>limitPhoto)throw new Error("Das Bild lässt sich nicht klein genug speichern.");
     resolve(photo);
    }catch(error){reject(error);}
   };
   image.src=url;
  });
 }
 function syncControls(){
  saveButton.disabled=!profileReady||saving||photoPending;
  signInButton.disabled=!authClient||!!user||saving;
  signOutButton.hidden=!user;
 }
 for(const [id,label] of Object.entries(interestLabels)){
  const wrapper=document.createElement("label");
  const checkbox=document.createElement("input");
  checkbox.type="checkbox";checkbox.value=id;
  wrapper.append(checkbox,document.createTextNode(label));
  get("interestOptions").append(wrapper);
 }
 form.addEventListener("input",event=>{
  const id=event.target.id;
  if(id==="profileTheme")campusApplyTheme(get(id).value);
  else if(id==="firstName")renderAvatar();
  else if(Object.values(socialFields).includes(id))renderSocials(readForm().socials);
  else if(id==="profilePath"||id==="profileCity"||event.target.closest("#interestOptions"))renderRecommendations(readForm());
 });
 get("photoFile").addEventListener("change",async event=>{
  const file=event.target.files?.[0];
  if(!file)return;
  const current=++imageGeneration;
  if(file.size>8000000||!["image/jpeg","image/png","image/webp"].includes(file.type)){
   photoPending=false;syncControls();
   profileStatus.textContent="Wähle ein JPG-, PNG- oder WebP-Bild bis 8 MB.";return;
  }
  photoPending=true;syncControls();
  profileStatus.textContent="Profilbild wird vorbereitet …";
  try{
   const photo=await photoFromFile(file);
   if(current!==imageGeneration)return;
   avatar=photo;
   renderAvatar();
   profileStatus.textContent="Profilbild vorbereitet. Speichere dein Profil.";
  }catch(error){if(current===imageGeneration)profileStatus.textContent=error.message;}
  finally{if(current===imageGeneration){photoPending=false;syncControls();}}
 });
 get("removePhoto").addEventListener("click",()=>{
  imageGeneration++;photoPending=false;avatar="";get("photoFile").value="";
  renderAvatar();syncControls();profileStatus.textContent="Bild entfernt. Speichere dein Profil.";
 });
 form.addEventListener("submit",async event=>{
  event.preventDefault();
  if(saveButton.disabled)return;
  const state=readForm(), current=generation, account=user;
  if(!state.firstName){profileStatus.textContent="Gib deinen Vornamen ein.";get("firstName").focus();return;}
  saving=true;syncControls();profileStatus.textContent="Profil wird gespeichert …";
  try{
   if(account)await authClient.save(account.uid,state);
   else localStorage.setItem(key,JSON.stringify(state));
   if(current!==generation)return;
   campusApplyTheme(state.theme,true);
   profileStatus.textContent=account?"Profil in deinem Konto gespeichert.":"Profil auf diesem Gerät gespeichert.";
  }catch{
   if(current===generation)profileStatus.textContent=account?"Das Profil konnte nicht gespeichert werden. Prüfe Verbindung und Firebase-Regeln.":"Der Browserspeicher ist nicht verfügbar oder voll.";
  }finally{saving=false;syncControls();}
 });

 function guest(){
  const data=readCampusStorage(key)||{};
  return cleanProfile({...data,theme:data.theme??campusSavedTheme()});
 }
 renderProfile(guest());
 async function handleUser(account){
  const current=++generation;
  user=account;
  profileStatus.textContent="";
  profileReady=!account;
  if(!account){
   authStatus.textContent="Du kannst ein Profil lokal ausprobieren oder dich mit Google anmelden.";
   renderProfile(guest());syncControls();return;
  }
  authStatus.textContent="Mit Google angemeldet. Profil wird geladen …";
  renderProfile(cleanProfile({firstName:account.displayName?.trim().split(/\s+/)[0],theme:campusSavedTheme()}));
  syncControls();
  try{
   const stored=await authClient.load(account.uid);
   if(current!==generation)return;
   if(stored){
    const state=cleanProfile(stored);
    renderProfile(state);
    campusApplyTheme(state.theme,true);
   }
   authStatus.textContent=stored?"Angemeldet · Profil privat":"Angemeldet · Wähle deinen Weg und speichere dein Profil.";
   profileReady=true;
  }catch{
   if(current===generation)authStatus.textContent="Angemeldet, aber das Profil konnte nicht geladen werden. Prüfe Verbindung und Firestore-Freigabe.";
  }finally{syncControls();}
 }
 const config=typeof campusFirebaseConfig==="object"&&campusFirebaseConfig;
 if(!config?.apiKey||!config.authDomain||!config.projectId||!config.appId){
  authStatus.textContent="Firebase ist noch nicht verbunden. Du kannst das Profil auf diesem Gerät ausprobieren.";
  syncControls();
  return;
 }
 async function setup(){
  const cdn="https://www.gstatic.com/firebasejs/13.2.0/";
  try{
   const [appModule,authModule,dbModule]=await Promise.all([
    import(cdn+"firebase-app.js"),import(cdn+"firebase-auth.js"),import(cdn+"firebase-firestore.js")
   ]);
   const app=appModule.initializeApp(config),auth=authModule.getAuth(app),db=dbModule.getFirestore(app);
   const reference=uid=>dbModule.doc(db,"profiles",uid);
   authClient={
    signIn:()=>authModule.signInWithPopup(auth,new authModule.GoogleAuthProvider()),
    signOut:()=>authModule.signOut(auth),
    load:async uid=>{const result=await dbModule.getDoc(reference(uid));return result.exists()?result.data():null;},
    save:(uid,state)=>dbModule.setDoc(reference(uid),{...state,updatedAt:dbModule.serverTimestamp()})
   };
   signInButton.addEventListener("click",async()=>{
    signInButton.disabled=true;
    try{await authClient.signIn();}
    catch(error){
     const hints={
      "auth/unauthorized-domain":"Diese Domain muss in Firebase Authentication zugelassen werden.",
      "auth/popup-blocked":"Das Anmeldefenster wurde blockiert. Erlaube Pop-ups und versuche es erneut.",
      "auth/operation-not-allowed":"Der Google-Anbieter ist im Firebase-Projekt noch nicht aktiviert."
     };
     authStatus.textContent=hints[error.code]||"Die Anmeldung wurde nicht abgeschlossen.";
    }finally{syncControls();}
   });
   signOutButton.addEventListener("click",async()=>{
    try{await authClient.signOut();}catch{authStatus.textContent="Abmelden fehlgeschlagen. Bitte erneut versuchen.";}
   });
   authModule.onAuthStateChanged(auth,handleUser,()=>{authStatus.textContent="Die Anmeldung konnte nicht geprüft werden.";syncControls();});
  }catch{
   authStatus.textContent="Firebase konnte nicht geladen werden. Die lokale Profilvorschau ist verfügbar.";
   syncControls();
  }
 }
 setup();
})();
