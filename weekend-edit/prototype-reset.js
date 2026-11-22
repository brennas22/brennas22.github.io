/* Hidden replay shortcut, shared by desktop and the recipient phone. */
(()=>{
 const home=new URL('./#home',document.currentScript.src).href;
 const owns=key=>key.startsWith('weekend-')||key==='trip-prompt'||key==='trip-saved';
 function clearSession(){for(const key of Object.keys(sessionStorage))if(owns(key))sessionStorage.removeItem(key)}
 function restart(){
  clearSession();
  const target=window.top;
  if(target.location.href===home)target.location.reload();
  else target.location.replace(home);
 }
 window.resetTripPrototype=()=>{
  for(const key of Object.keys(localStorage))if(owns(key))localStorage.removeItem(key);
  localStorage.setItem('weekend-prototype-reset',String(Date.now()));
  localStorage.removeItem('weekend-prototype-reset');
  restart();
 };
 document.addEventListener('keydown',event=>{
  if(event.code!=='KeyR'||!event.altKey||!event.shiftKey||event.metaKey||event.ctrlKey)return;
  event.preventDefault();event.stopImmediatePropagation();window.resetTripPrototype();
 },true);
 window.addEventListener('storage',event=>{
  if(event.key==='weekend-prototype-reset'&&event.newValue)restart();
 });
})();
