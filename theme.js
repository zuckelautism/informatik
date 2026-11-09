const campusThemeKey="campus-theme-v1";
const campusThemes=new Set(["coastal","slate","rose","dark"]);
function campusSavedTheme(){
 try{
  const theme=localStorage.getItem(campusThemeKey);
  return campusThemes.has(theme)?theme:"coastal";
 }catch{return "coastal";}
}
function campusApplyTheme(theme,remember=false){
 const selected=campusThemes.has(theme)?theme:"coastal";
 document.documentElement.dataset.theme=selected;
 if(remember)try{localStorage.setItem(campusThemeKey,selected);}catch{}
}
campusApplyTheme(campusSavedTheme());
