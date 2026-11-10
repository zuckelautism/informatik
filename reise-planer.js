(() => {
 const panel=document.getElementById("tripBudget");
 if(!panel)return;
 const get=id=>document.getElementById(id);
 const output=get("tripResult");
 const euros=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"});
 const readCents=id=>{
  const input=get(id);
  return input.value&&input.checkValidity()?Math.round(input.valueAsNumber*100):null;
 };
 function draw(){
  const nights=get("tripNights");
  const count=nights.value&&nights.checkValidity()?nights.valueAsNumber:null;
  get("tripBed").disabled=count===0;
  const budget=readCents("tripCap");
  const ride=readCents("tripTransport"), food=readCents("tripFood"), other=readCents("tripExtras");
  const bed=count===0?0:readCents("tripBed");
  if([budget,ride,food,other,bed,count].some(value=>value===null)){
   output.textContent="Trage dein Budget und die Kosten pro Person ein. Verwende 0, wenn ein Posten entfällt.";
   return;
  }
  const total=ride+food+other+bed*count;
  const difference=budget-total;
  const result=difference===0?"Genau im Zielbudget.":euros.format(Math.abs(difference)/100)+(difference>0?" übrig.":" über dem Budget.");
  output.textContent="Dein Plan: "+euros.format(total/100)+" pro Person. "+result;
 }
 let uid="";
 window.addEventListener("campus-account",event=>{
  const nextUid=event.detail?.uid??"";
  if(uid && uid!==nextUid){
   panel.querySelectorAll("input").forEach(input=>{input.value=input.defaultValue;});
   draw();
  }
  uid=nextUid;
 });
 panel.addEventListener("input",draw);
 get("catalogGrid").addEventListener("click",event=>{
  const button=event.target.closest("[data-trip-cap]");
  if(!button)return;
  get("tripCap").value=button.dataset.tripCap;
  get("tripTransport").focus();
  draw();
 });
 draw();
})();
