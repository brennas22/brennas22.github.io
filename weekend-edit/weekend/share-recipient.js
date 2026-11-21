let shareTransitionTimer;
function cancelShareTransition(){clearTimeout(shareTransitionTimer)}
async function copyShareLink(button){
  if(button.disabled)return;
  const url=shareUrl(),t=current(),home=state.page==='home';
  const snapshot={url,title:home?'One bride. Three very good ideas.':t.title.replace(/<[^>]*>/g,' '),image:home?'charleston':t.id==='hudson'?'cabin':t.id,detail:home?'Nashville, the cabin, or Charleston?':t.short+' · '+dateLabel(t)};
  button.disabled=true;
  try{await navigator.clipboard.writeText(url)}catch{
    button.disabled=false;
    let error=button.parentElement.querySelector('.share-copy-error');
    if(!error){error=document.createElement('p');error.className='share-copy-error';error.setAttribute('role','alert');button.parentElement.append(error)}
    error.textContent='Couldn’t copy the link. Please try again.';return;
  }
  if(!button.isConnected)return;
  button.classList.add('is-copied');button.setAttribute('aria-label','Link copied');button.innerHTML=icon('check')+'<span class="share-copy-label">Copied</span>';
  if(new URLSearchParams(location.search).has('recipient'))return;
  cancelShareTransition();
  shareTransitionTimer=setTimeout(()=>{if(button.isConnected)openRecipientStory(snapshot)},1100);
}
function recipientInvitation(snapshot){return `<section class="recipient-invitation"><div class="recipient-invitation-body"><div class="recipient-invite-collage"><img src="../assets/nashville.jpg" alt="A night out"><img src="../assets/cabin.jpg" alt="A cabin weekend"><img src="../assets/charleston.jpg" alt="A coastal escape"></div><span class="recipient-inviter-avatar">B</span><p class="recipient-inviter">Brenna invited you to plan a trip</p><h1>Good weekends<br>start with good people.</h1><div class="recipient-invite-trip"><b>The bachelorette edit</b><span>${esc(snapshot.detail)}</span></div><p class="recipient-invite-description">Explore the ideas, bring your finds, and make a little room for everyone.</p></div><div class="recipient-join-footer"><div class="recipient-join-account"><span>L</span><div><b>Leah</b><small>Your Airbnb account</small></div></div><button class="recipient-join-trip">Join trip</button><p class="recipient-join-fine">You’ll be able to add to the shared plan.</p></div></section>`}
function attachRecipientJoinFlow({preview,joinButton,frame,invite,messages,app,stage,url,onReady}){
 let joined=false;
 preview.onclick=()=>{messages.hidden=true;app.hidden=false;stage.classList.add('link-opened');if(!joined)joinButton.focus()};
 joinButton.onclick=()=>{if(joined)return;joined=true;joinButton.disabled=true;joinButton.textContent='Joining…';frame.src=url.href};
 frame.addEventListener('load',()=>{if(!joined)return;invite.hidden=true;frame.hidden=false;onReady?.();frame.focus()});
 return {hasJoined:()=>joined};
}
function openRecipientStory(snapshot){
  close();
  const app=document.querySelector('#app'),oldOverflow=document.body.style.overflow;
  const stage=document.createElement('section');stage.className='recipient-story';stage.setAttribute('role','dialog');stage.setAttribute('aria-modal','true');stage.setAttribute('aria-label','A friend opens the shared weekend');
  const url=new URL(snapshot.url);url.searchParams.set('recipient','1');
  stage.innerHTML=`<div class="recipient-narrative"><button class="recipient-exit">← Back to Brenna’s trip</button><p>THE LINK LANDS IN THE GROUP CHAT</p><h1>A little room<br>for everyone.</h1><span>Brenna shared the possibilities. Join the trip and bring a find of your own.</span><small>Leah’s phone</small></div><div class="recipient-phone"><div class="recipient-island"></div><div class="recipient-status"><b>9:41</b><span>▮▮▮ &nbsp;◒ &nbsp;▰</span></div><div class="recipient-messages"><header class="messages-head"><span class="messages-chevron">‹</span><div class="group-avatars"><i>B</i><i>L</i><i>J</i></div><b>Weekend people ♡ <span>›</span></b><small>8 people</small></header><div class="message-thread"><p class="message-time">Today 9:41 AM</p><div class="message-out">Okay who’s ready to make this weekend happen??</div><div class="message-in"><small>Jules</small><p>Me 🙋‍♀️ I need a weekend away!</p></div><div class="message-in message-arrive"><small>Brenna</small><p>I made us a little something 👀</p><button class="message-link" aria-label="Open the shared Weekend Edit in Airbnb"><img src="../assets/${esc(snapshot.image)}.jpg" alt="A glimpse of the weekend"><span><small>THE WEEKEND EDIT</small><strong>${esc(snapshot.title)}</strong><em>${esc(snapshot.detail)}</em><span>airbnb.com · Open in Airbnb</span></span></button></div><div class="message-out message-reaction">Wait this is SO cute. Opening now ✨</div></div><div class="message-composer"><span>＋</span><div>iMessage <span>↑</span></div></div></div><div class="recipient-airbnb-app" hidden><div class="recipient-app-return"><button class="back-to-messages">‹ Messages</button></div><header class="recipient-app-header"><span class="recipient-app-brand"><svg class="airbnb-belo" width="30" height="32" aria-hidden="true" viewBox="69 64 142 152" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M202.958 157.86C192.603 135.329 181.256 112.469 169.689 89.9378C167.596 85.7614 163.63 77.7383 160.105 73.4519C155.037 67.2972 147.546 64 139.945 64C132.344 64 124.853 67.2972 119.785 73.4519C116.26 77.7383 112.294 85.7614 110.201 89.9378C98.6338 112.469 87.287 135.329 76.9317 157.86C75.6098 160.827 72.4151 167.861 71.2033 171.048C69.7711 174.895 69 179.072 69 183.248C69 201.383 83.211 216 102.159 216C117.802 216 130.251 205.999 139.945 195.557C149.639 205.999 162.088 216 177.731 216C196.679 216 211 201.383 211 183.248C211 179.072 210.119 174.895 208.687 171.048C207.475 167.861 204.28 160.827 202.958 157.86ZM139.945 178.082C132.123 167.971 124.853 155.442 124.853 145.33C124.853 135.219 132.013 130.163 139.945 130.163C147.877 130.163 155.147 135.549 155.147 145.33C155.147 155.112 147.766 167.971 139.945 178.082ZM177.731 204.68C166.146 204.68 156.209 196.597 147.408 186.886C156.483 175.594 166.494 159.608 166.494 145.33C166.494 128.515 153.385 118.843 139.945 118.843C126.505 118.843 113.506 128.515 113.506 145.33C113.506 159.605 123.447 175.585 132.489 186.877C123.687 196.593 113.747 204.68 102.159 204.68C89.6005 204.68 80.3468 195.118 80.3468 183.248C80.3468 180.39 80.7874 177.753 81.7789 175.005C82.7704 172.477 85.9651 165.443 87.287 162.696C97.6424 140.165 108.769 117.524 120.336 94.9935C122.429 90.8171 125.954 83.893 128.598 80.7057C131.462 77.1887 135.428 75.3203 139.945 75.3203C144.462 75.3203 148.427 77.1887 151.292 80.7057C153.936 83.893 157.461 90.8171 159.554 94.9935C171.121 117.524 182.247 140.165 192.603 162.696C193.925 165.443 197.119 172.477 198.111 175.005C199.102 177.753 199.653 180.39 199.653 183.248C199.653 195.118 190.289 204.68 177.731 204.68Z" fill="currentColor"/>\n</svg></span><span class="recipient-app-context"><b>The weekend edit</b><small>Trip invitation</small></span><button class="recipient-app-share" aria-label="Share this trip">${icon('share')}</button></header>${recipientInvitation(snapshot)}<iframe hidden title="The shared Weekend Edit inside the Airbnb app"></iframe></div><div class="recipient-home-indicator"></div></div>`;
  document.body.append(stage);app.inert=true;document.body.style.overflow='hidden';
  const preview=stage.querySelector('.message-link'),airbnbApp=stage.querySelector('.recipient-airbnb-app'),messages=stage.querySelector('.recipient-messages'),frame=stage.querySelector('iframe');
  let sharedContributionId=null;
  const invite=stage.querySelector('.recipient-invitation'),joinButton=stage.querySelector('.recipient-join-trip');
  const exit=()=>{stage.remove();window.removeEventListener('message',onContributionMessage);reloadSharedPlanner();render();if(sharedContributionId)reviewGroupContribution(sharedContributionId);app.inert=false;document.body.style.overflow=oldOverflow;document.removeEventListener('keydown',keyHandler,true);document.querySelector('[data-action="share"]')?.focus()};
  const onContributionMessage=event=>{
    if(event.origin!==location.origin||event.source!==frame.contentWindow||!['weekend-contribution-shared','weekend-contribution-return','weekend-contribution-undone','weekend-comments-reset'].includes(event.data?.type))return;
    if(event.data.type==='weekend-comments-reset'){sharedContributionId=null;exit();toast('Comments reset. Ready for another run.');return}
    if(event.data.type==='weekend-contribution-undone'){if(sharedContributionId===event.data.id){sharedContributionId=null;stage.querySelector('.recipient-return-organizer')?.remove();stage.querySelector('.message-contribution-response')?.remove();stage.querySelector('.recipient-narrative h1').textContent='Keep exploring together.';stage.querySelector('.recipient-narrative>span').textContent='Our plan has room for another find.'}return}
    const item=groupContributions().find(x=>x.id===event.data.id);if(!item)return;
    sharedContributionId=item.id;if(event.data.type==='weekend-contribution-return'){exit();return}
    stage.querySelector('.recipient-narrative>p').textContent='A LITTLE OF EVERYONE, IN THE PLAN';
    stage.querySelector('.recipient-narrative h1').textContent=item.savedOnly?'A good find. For another time.':'You brought a find. The weekend got better.';
    stage.querySelector('.recipient-narrative>span').textContent=item.savedOnly?'Your find is saved for everyone. Our itinerary stays as it is.':'Your spot is in our shared plan. Everyone can build on it.';
    let button=stage.querySelector('.recipient-return-organizer');if(!button){button=document.createElement('button');button.className='recipient-return-organizer';stage.querySelector('.recipient-narrative').append(button)}
    button.textContent='See the shared trip on desktop';button.onclick=exit;
    let response=stage.querySelector('.message-contribution-response');if(!response){response=document.createElement('div');response.className='message-out message-contribution-response';stage.querySelector('.message-thread').append(response)}
    response.textContent=item.savedOnly?'Saved a spot for another time—our cabin plans stay as they are.':'I found a spot for our '+(item.trip==='hudson'?'cabin':item.trip)+' weekend! Added it to the plan 👀';
  };
  window.addEventListener('message',onContributionMessage);
  const keyHandler=e=>{if(e.key==='Escape'){e.stopImmediatePropagation();exit()}if(e.key==='Tab'){const controls=[...stage.querySelectorAll('button,iframe')].filter(b=>b.getClientRects().length);const first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};
  document.addEventListener('keydown',keyHandler,true);
  stage.querySelector('.recipient-exit').onclick=exit;
  const joinFlow=attachRecipientJoinFlow({preview,joinButton,frame,invite,messages,app:airbnbApp,stage,url,onReady:()=>{stage.querySelector('.recipient-app-context small').textContent='8 friends · Planning together';stage.querySelector('.recipient-app-share').hidden=false}});
  stage.querySelector('.recipient-app-share').hidden=true;
  stage.querySelector('.recipient-app-share').onclick=()=>{if(joinFlow.hasJoined())try{frame.contentWindow.share()}catch{}};
  stage.querySelectorAll('.back-to-messages').forEach(b=>b.onclick=()=>{airbnbApp.hidden=true;messages.hidden=false;stage.classList.remove('link-opened');preview.focus()});
  stage.querySelector('.recipient-exit').focus();
}
if(new URLSearchParams(location.search).has('recipient'))document.body.classList.add('recipient-view');
function recipientNavigation(){
  if(!new URLSearchParams(location.search).has('recipient'))return '';
  return `<nav class="recipient-trip-tabs" aria-label="Choose a weekend">${[['home','All ideas'],...trips.map(t=>[t.id,t.short])].map(([id,label])=>`<button data-page="${id}" ${state.page===id?'aria-current="page"':''}>${esc(label)}</button>`).join('')}</nav>`;
}
function recipientActions(){
  if(!new URLSearchParams(location.search).has('recipient'))return '';
  const home=state.page==='home',picked=state.picks.includes(state.page),count=state.kept.length+state.picks.length;
  return `<nav class="recipient-action-dock" aria-label="Shared trip actions"><button data-action="saved" class="recipient-dock-icon">${icon('heart')}<span>Keepers${count?' · '+count:''}</span></button><button data-action="comments" class="recipient-dock-icon" aria-label="Read comments and add a note">${icon('comment')}<span>Comments</span></button>${home?'':`<button data-action="edit" class="recipient-dock-icon">${icon('spark')}<span>Suggest</span></button>`}<button class="recipient-dock-primary" ${home?'data-action="compare"':`data-pick="${state.page}" aria-pressed="${picked}"`}>${home?'Compare ideas':picked?'On my shortlist':'I’m into this'}</button></nav>`;
}

function openTripComments(){
  const home=state.page==='home',trip=home?{id:'home'}:current();
  dialog(home?'The group chat, all in one place.':'Thoughts on '+trip.short+'?',`<div class="recipient-comments-list" aria-live="polite">${comments(trip)||'<p class="recipient-comments-empty">What do we think? Leave the first note.</p>'}</div><form id="trip-note-form" class="recipient-note-form"><label for="trip-note">Your note</label><textarea id="trip-note" name="comment" placeholder="I’m already picturing us here…" maxlength="400" required></textarea><button type="submit" class="solid-btn full">Add note</button></form>`);
}
document.addEventListener('submit',event=>{
  if(event.target.id!=='trip-note-form')return;
  event.preventDefault();
  const input=event.target.elements.comment,text=input.value.trim();if(!text)return;
  state.comments[state.page]=[...(state.comments[state.page]||[]),text];persist();
  const trip=state.page==='home'?{id:'home'}:current();
  document.querySelector('.recipient-comments-list').innerHTML=comments(trip);
  const inline=document.querySelector('#comments');if(inline)inline.innerHTML=comments(trip);
  input.value='';close();document.querySelector('[data-action="comments"]')?.focus();
});
function isRecipientView(){return new URLSearchParams(location.search).has('recipient')}
function recipientDateRange(start,end){
  const a=parseDay(start),b=parseDay(end),sameMonth=a.getUTCMonth()===b.getUTCMonth()&&a.getUTCFullYear()===b.getUTCFullYear();
  return formatDay(start)+'–'+(sameMonth?b.getUTCDate():formatDay(end));
}
function recipientHeroMeta(t){return `<div class="recipient-hero-meta"><span>${esc(t.place)}</span><span>${nightCount(t)} nights · 8 guests</span></div>`}
function recipientDateSection(t){
  const selected=tripDates(t),options=dateSuggestions(),custom=!options.some(d=>d.start===selected.start&&d.end===selected.end);
  if(custom)options.push({...selected,label:'Your dates',custom:true});
  return `<section class="date-explorer recipient-dates" aria-label="Explore dates for ${t.short}"><div class="date-heading"><div><div class="kicker">Find our weekend</div><h2>When works for us?</h2></div><button class="subtle-btn" data-action="dates">Set dates</button></div><div class="recipient-date-list">${options.map((d,i)=>{const active=d.start===selected.start&&d.end===selected.end,nights=Math.round((parseDay(d.end)-parseDay(d.start))/dateDay);return `<button class="recipient-date-row" ${d.custom?'data-action="dates"':`data-date-option="${i}"`} aria-pressed="${active}" aria-label="${esc(dateLabel(t,d))}, ${nights} nights, $${stayEstimate(t,d)+activityEstimate(t)} per person estimated${active?', selected':''}"><span class="recipient-date-indicator">${active?icon('check'):''}</span><span class="recipient-date-copy"><strong>${recipientDateRange(d.start,d.end)}</strong><small>${nights} nights · ${parseDay(d.start).getUTCFullYear()}${active?' · Selected':''}</small></span><span class="recipient-date-price"><b>$${stayEstimate(t,d)+activityEstimate(t)}</b><small>/ person est.</small></span></button>`}).join('')}</div><p class="date-model-note">Stay + activities, per person. Final prices and availability on Airbnb.</p></section>`;
}
