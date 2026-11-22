const CONTRIBUTION_KEY='weekend-group-contributions';
let contributionProposal=null,contributionConflict=null,contributionBuildTimers=[];
function groupContributions(){try{return JSON.parse(localStorage.getItem(CONTRIBUTION_KEY)||'[]').filter(x=>x&&['hudson','nashville','charleston'].includes(x.trip)&&['shared','kept'].includes(x.status)&&typeof x.id==='string'&&typeof x.note==='string'&&typeof x.author==='string'&&typeof x.planTitle==='string'&&typeof x.planDescription==='string'&&Number.isFinite(x.delta)).slice(-20)}catch{return []}}
function saveGroupContributions(items){localStorage.setItem(CONTRIBUTION_KEY,JSON.stringify(items.slice(-20)))}
function latestGroupContribution(trip){return groupContributions().filter(x=>x.trip===trip).at(-1)}
function activeGroupContribution(t){return groupContributions().filter(x=>x.trip===t.id&&!x.savedOnly).at(-1)}
function contributionCost(t){return activeGroupContribution(t)?.delta||0}
function contributionPlan(t,index,nights){const item=activeGroupContribution(t);return item&&index===(nights>1?1:0)?[esc(isRecipientView()?item.planTitle.replace(/Leah found/g,'You found').replace(/Leah’s find/g,'your find'):item.planTitle),esc(isRecipientView()?item.planDescription.replace(/the place Leah shared/g,'the place you shared'):item.planDescription)]:null}
function cancelContributionBuild(){contributionBuildTimers.forEach(clearTimeout);contributionBuildTimers=[]}
function contributionNoteCards(t){return groupContributions().filter(x=>x.trip===t.id).map(x=>`<article class="note-card contribution-note" data-contribution-comment="${esc(x.id)}"><div class="contribution-comment-author"><span>L</span><b>${isRecipientView()&&x.author==='Leah'?'You':esc(x.author)}</b><small>${x.savedOnly?'Saved for later':x.resolution==='closer'?'Found a closer fit':'Added a find'}</small></div><p>${esc(x.note)}</p>${contributionSource(x)}${x.originalFind?`<p class="contribution-original-find">Inspired by <a href="${esc(cleanContributionLink(x.originalFind.url)||'#')}" target="_blank" rel="noopener">${esc(x.originalFind.title)}</a>. Kept the night-out feeling, stayed in the Hudson Valley.</p>`:''}<div class="contribution-comment-actions">${x.savedOnly?'':`<button class="subtle-btn" data-contribution-show-plan>See it in our plan</button>`}${!isRecipientView()?'<button class="subtle-btn" data-contribution-reply>Reply</button>':''}</div></article>`).join('')}
function scrollToContribution(where='plan',id){
 requestAnimationFrame(()=>requestAnimationFrame(()=>{
  const target=where==='comments'?Array.from(document.querySelectorAll('[data-contribution-comment]')).find(x=>x.dataset.contributionComment===id)||document.querySelector('#comments'):document.querySelector('.contribution-day');
  if(!target)return;
  const tabs=document.querySelector(isRecipientView()?'.recipient-trip-tabs':'.world-nav');
  const offset=tabs&&window.getComputedStyle(tabs).position==='sticky'?tabs.getBoundingClientRect().height:0;
  const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:Math.max(0,target.getBoundingClientRect().top+window.scrollY-offset-18),behavior:reduced?'instant':'smooth'});
  target.classList.add('contribution-focus');setTimeout(()=>target.classList.remove('contribution-focus'),2200);
 }));
}
function cleanContributionLink(value){try{const u=new URL(value);if(!['https:','http:'].includes(u.protocol)||u.username||u.password)return null;return u.href}catch{return null}}
function contributionSource(item){const url=cleanContributionLink(item.url);return url?`<a class="contribution-source" href="${esc(url)}" target="_blank" rel="noopener"><span>↗</span><div><small>${item.resolution==='closer'?(isRecipientView()?'INSPIRED BY YOUR FIND':'INSPIRED BY LEAH’S FIND'):(isRecipientView()?'YOUR FIND':'LEAH’S FIND')}</small><b>${esc(item.sourceTitle||new URL(url).hostname)}</b><span>${esc(new URL(url).hostname.replace(/^www\./,''))}</span></div></a>`:''}
function openCollaborativeSuggestion(prompt=''){
 const t=current();
 dialog('Bring a little of your world.',`<div class="contribution-person"><span>L</span><div><b>Your find</b><small>Adding to our ${t.id==='hudson'?'cabin':esc(t.short)} idea</small></div></div><form id="contribution-form"><label for="contribution-link">A place, a post, something you found</label><div class="contribution-paste-field"><input id="contribution-link" name="link" type="url" placeholder="Paste a link…" required autocomplete="off"></div><div id="contribution-pasted-preview"></div><label for="contribution-note">What do you love about it?</label><textarea id="contribution-note" name="note" maxlength="400" placeholder="Why do you think we’d love this?" required>${esc(prompt)}</textarea><p class="contribution-input-error" role="alert"></p><button class="solid-btn full" type="submit">${airbnbImagineMark()} Fit this into our weekend</button></form>`);
}
function contributionVenueTitle(url){const host=new URL(url).hostname.replace(/^www\./,'');return host==='thebellhouseny.com'?'The Bell House':host==='townecrier.com'?'Towne Crier Café':host==='theavalonlounge.com'?'The Avalon Lounge':host}
function fillContributionLink(input){if(input.value.trim())return;input.value=current().id==='hudson'?'https://www.thebellhouseny.com/':socialSources[current().id].post;previewPastedContribution()}
function previewPastedContribution(){
 const input=document.querySelector('#contribution-link'),preview=document.querySelector('#contribution-pasted-preview');if(!input||!preview)return;
 const url=cleanContributionLink(input.value.trim());if(!url){preview.innerHTML='';return}
 preview.innerHTML=contributionSource({url,sourceTitle:contributionVenueTitle(url)});
}
function makeContribution(note,t,link){
 const url=cleanContributionLink(link);if(!url)return null;const avalon=new URL(url).hostname.replace(/^www\./,'')==='theavalonlounge.com';
 const party=/night out|big night|music|danc|party|go(?:ing)? out/i.test(note),slow=/unwind|nothing|slow|relax|unplanned|downtime/i.test(note),budget=/budget|expensive|cheap|less money/i.test(note);
 const kind=(party||avalon)?'night-out':slow?'unwind':budget?'budget':'find';
 const old=state.changes[t.id]||{},delta=(party||avalon)?(old.party?0:45):budget?(old.budget?0:-75):0;
 const planTitle=party?(t.id==='hudson'?'A slow day. One good night out.':'A long dinner. Follow the music.'):slow?'A whole afternoon with nowhere to be.':'A very good dinner, made together.';
 const planDescription=party?(t.id==='hudson'?'Keep the slow morning at the cabin. Head into town for dinner and live music, then share a ride home. Leave the next morning beautifully unplanned.':'Keep the lazy morning. Make an evening of dinner and live music, with a shared ride back to our home base.'):slow?'Keep our home base and the good dinner. Leave the afternoon open for a walk, a book, or seeing what everyone feels like.':'Keep our home base. Pick up something good at the market and cook dinner together instead of booking a private dinner.';
 return {url,sourceTitle:contributionVenueTitle(url),id:'leah-'+Date.now()+'-'+Math.random().toString(36).slice(2,8),trip:t.id,author:'Leah',note,kind,delta,planTitle:avalon?'A slow day. A night at the Avalon.':kind==='find'?'An evening for our new find.':planTitle,planDescription:avalon?'Keep the slow morning at the cabin. Head to The Avalon Lounge in Catskill for Korean food and check the lineup for our dates. Share a ride back, with the next morning left open.':kind==='find'?'An open evening for our new find. Keep the rest of our weekend loose, and check the details together.':planDescription,status:'shared',stayTitle:selectedListing(t).title,dates:{...tripDates(t)},headline:avalon?'Same cabin. Leah found the night out.':kind==='find'?'Our weekend, with a little of Leah.':party?(t.id==='hudson'?'Same cabin. One good night out.':'Same home base. One good night out.'):slow?'A little less planned. A little more us.':'Same weekend. A little easier on the budget.'};
}
function buildContribution(note,link){
 const proposal=makeContribution(note,current(),link);
 if(!proposal){document.querySelector('.contribution-input-error').textContent='Add a place or post link so we can bring your find into the weekend.';return}
 cancelContributionBuild();contributionProposal=proposal;
 if(proposal.trip==='hudson'&&new URL(proposal.url).hostname.replace(/^www\./,'')==='thebellhouseny.com'){
  contributionConflict={...proposal};
  dialog('Let’s take a look.',`<div class="contribution-building" role="status" aria-live="polite"><span class="contribution-spark">${airbnbImagineMark()}</span><h3>Getting to know your find.</h3>${contributionSource(proposal)}<div class="contribution-build-steps"><p class="arrived">✓ Looking at the place you shared</p><p data-contribution-step="1">Seeing how it fits around our cabin</p></div></div>`);
  contributionBuildTimers.push(setTimeout(()=>document.querySelector('[data-contribution-step="1"]')?.classList.add('arrived'),650));
  contributionBuildTimers.push(setTimeout(()=>showContributionConflict(),1600));return;
 }
 dialog('Let’s try that.',`<div class="contribution-building" role="status" aria-live="polite"><span class="contribution-spark">${airbnbImagineMark()}</span><h3>Making room for your find.</h3>${contributionSource(proposal)}<div class="contribution-build-steps"><p class="arrived">✓ Keeping our stay and dates</p><p data-contribution-step="1">Fitting your find around our stay</p><p data-contribution-step="2">Leaving our slow mornings open</p></div></div>`);
 [650,1350].forEach((delay,i)=>contributionBuildTimers.push(setTimeout(()=>document.querySelector(`[data-contribution-step="${i+1}"]`)?.classList.add('arrived'),delay)));
 contributionBuildTimers.push(setTimeout(()=>finishContribution(),2200));
}
function showContributionConflict(){
 if(!contributionConflict)return;
 const item=contributionConflict,t=trips.find(x=>x.id===item.trip);
 dialog('Love the find. It’s in Brooklyn.',`<div class="contribution-conflict-tag">Brooklyn, NY · Outside our Hudson Valley plans</div>${contributionSource(item)}<p class="contribution-conflict-explanation">Our cabin is in ${esc(selectedListing(t).location)}. This would turn a night out into a city outing, with more time getting there and back.</p><div class="contribution-conflict-choices"><button data-contribution-resolve="outing"><b>Make room for it</b><span>See what a Brooklyn outing would change.</span></button><button data-contribution-resolve="closer"><b>Find something closer</b><span>Keep the intimate-venue feeling near our cabin.</span></button><button data-contribution-resolve="save"><b>Just save it</b><span>Keep the find. Leave our plan as it is.</span></button></div><p class="contribution-conflict-kept">Our cabin and dates stay the same, either way.</p>`);
}
function showBrooklynOuting(){
 if(!contributionConflict)return;
 dialog('Make an outing of it?',`${contributionSource(contributionConflict)}<div class="contribution-outing-preview"><div><small>KEEP</small><b>A slow breakfast at the cabin.</b></div><div><small>CHANGE</small><b>Our open afternoon becomes travel + time in Brooklyn.</b></div><div><small>EVENING</small><b>Dinner, then check what’s on at The Bell House.</b><p>Plan a ride back. Keep the next morning open.</p></div></div><p class="contribution-conflict-explanation">Transport and show tickets still need pricing. We’ll keep them separate from the current estimate.</p><button class="solid-btn full" data-contribution-resolve="add-outing">Make room for Brooklyn</button><button class="subtle-btn contribution-secondary" data-contribution-resolve="back">Back to the options</button>`);
}
function findCloserContribution(){
 if(!contributionConflict)return;
 dialog('Keep the feeling. Stay closer.',`<div class="contribution-building" role="status" aria-live="polite"><span class="contribution-spark">${airbnbImagineMark()}</span><h3>A small stage. A good night out.</h3><p>Looking around the Hudson Valley for the feeling you loved.</p></div>`);
 contributionBuildTimers.push(setTimeout(()=>showCloserContribution(),1200));
}
function showCloserContribution(){
 if(!contributionConflict)return;
 dialog('This could be our kind of night.',`<p class="contribution-alternative-why">An intimate room, live music, and dinner together—this time in Beacon. A similar feeling, with a different lineup to explore.</p><a class="contribution-alternative-card" href="https://townecrier.com/" target="_blank" rel="noopener"><span>♫</span><div><small>BEACON, NEW YORK</small><h3>Towne Crier Café</h3><p>Live music · Restaurant & bar</p><span>View the venue and lineup</span></div></a><div class="contribution-alternative-fit"><b>What carries over</b><p>A proper night out together, with our afternoon at the cabin left open.</p><b>What to check</b><p>The lineup, table space for eight, and the ride there for our dates.</p></div><button class="solid-btn full" data-contribution-resolve="add-closer">Add this instead</button><button class="subtle-btn contribution-secondary" data-contribution-resolve="back">Back to my find</button>`);
}
function resolveContribution(choice){
 if(!contributionConflict)return;
 if(choice==='back'){showContributionConflict();return}
 if(choice==='outing'){showBrooklynOuting();return}
 if(choice==='closer'){findCloserContribution();return}
 const original=contributionConflict;
 if(choice==='save')contributionProposal={...original,savedOnly:true,delta:0,resolution:'saved',pricingPending:false};
 else if(choice==='add-outing')contributionProposal={...original,resolution:'outing',delta:0,pricingPending:true,planTitle:'A slow morning. A Brooklyn outing.',planDescription:'Keep breakfast at the cabin. Make room in the afternoon to travel to Brooklyn, eat together, and check what’s on at The Bell House. Arrange the ride back, with the next morning left open.'};
 else if(choice==='add-closer')contributionProposal={...original,url:'https://townecrier.com/',sourceTitle:'Towne Crier Café',resolution:'closer',delta:0,pricingPending:true,originalFind:{url:original.url,title:original.sourceTitle},planTitle:'A cabin afternoon. A little live music.',planDescription:'Keep our slow morning and open afternoon at the cabin. Head to Towne Crier Café in Beacon for dinner and check the live-music lineup for our dates. Arrange a ride back together.'};
 else return;
 contributionConflict=null;finishContribution();
}
function contributionBudgetNote(t){const item=activeGroupContribution(t);return item?.pricingPending?`<p class="contribution-cost-note">${item.resolution==='outing'?'Brooklyn transport and show tickets':'Dinner, transport, and any show tickets'} still to price; not added to this estimate.</p>`:''}
function finishContribution(){
 if(!contributionProposal)return;
 const item={...contributionProposal,status:'shared'};contributionProposal=null;
 saveGroupContributions([...groupContributions().filter(x=>x.id!==item.id),item]);close();render();
 scrollToContribution(item.savedOnly?'comments':'plan',item.id);
 if(window.parent!==window)window.parent.postMessage({type:'weekend-contribution-shared',id:item.id},location.origin);
}
function undoOwnContribution(id){
 if(!isRecipientView())return;
 const item=groupContributions().find(x=>x.id===id&&x.author==='Leah');if(!item)return;
 saveGroupContributions(groupContributions().filter(x=>x.id!==id));render();
 if(window.parent!==window)window.parent.postMessage({type:'weekend-contribution-undone',id},location.origin);
}
function contributionBanner(t){
 const item=latestGroupContribution(t.id);if(!item||!isRecipientView())return '';
 return `<div class="contribution-added-bar"><span>✓ ${item.savedOnly?'Saved your find for later.':'Added your find to our plan.'}</span><button class="subtle-btn" data-contribution-undo="${esc(item.id)}">Undo</button>${window.parent!==window?'<button class="subtle-btn contribution-desktop-return" data-contribution-return>Back to the shared trip</button>':''}</div>`;
}
function contributionEntry(t){if(!isRecipientView()||latestGroupContribution(t.id))return '';return `<aside class="contribution-entry"><div><span class="kicker">It’s our weekend, after all.</span><p>What would make this feel more like us?</p></div><button data-contribution-start>${airbnbImagineMark()} ${t.id==='hudson'?'Bring a spot from your saves.':'Add something you found.'}</button></aside>`}
function contributionOverview(){return ''}
function contributionDaySource(t,index,nights){const item=activeGroupContribution(t);return item&&index===(nights>1?1:0)?contributionSource(item)+contributionBudgetNote(t):''}
function contributionDayCredit(t,index,nights){const item=activeGroupContribution(t);return item&&index===(nights>1?1:0)?`<span class="contribution-day-credit">${airbnbImagineMark()} ${isRecipientView()?'Your find, in the plan':'Added by Leah'}</span>`:''}
function reloadSharedPlanner(){try{const latest=JSON.parse(localStorage.getItem('weekend-edit-v2')||'{}');for(const key of ['picks','kept','comments','changes','dates','stays','buildPreferences'])if(latest[key])state[key]=latest[key]}catch{}}
function reviewGroupContribution(id){const item=groupContributions().find(x=>x.id===id);if(!item)return;reloadSharedPlanner();state.page=item.trip;history.replaceState(null,'','#'+item.trip);render();scrollToContribution('comments',item.id)}
document.addEventListener('click',event=>{
 const b=event.target.closest('button');if(!b)return;
 if(b.hasAttribute('data-contribution-return')){event.stopImmediatePropagation();const item=latestGroupContribution(state.page);if(item&&window.parent!==window)window.parent.postMessage({type:'weekend-contribution-return',id:item.id},location.origin);return}if(b.hasAttribute('data-contribution-start')){event.stopImmediatePropagation();openCollaborativeSuggestion();return}
 if(b.dataset.contributionResolve){event.stopImmediatePropagation();resolveContribution(b.dataset.contributionResolve);return}
 if(b.dataset.contributionUndo){event.stopImmediatePropagation();undoOwnContribution(b.dataset.contributionUndo);return}
 if(b.hasAttribute('data-contribution-show-plan')){event.stopImmediatePropagation();scrollToContribution('plan');return}
 if(b.hasAttribute('data-contribution-reply')){event.stopImmediatePropagation();const input=document.querySelector('#comment-form input');input?.focus({preventScroll:true});input?.scrollIntoView({behavior:'smooth',block:'center'});return}
 if(b.dataset.contributionReview){event.stopImmediatePropagation();reviewGroupContribution(b.dataset.contributionReview);return}

});
document.addEventListener('submit',event=>{if(event.target.id!=='contribution-form')return;event.preventDefault();event.stopImmediatePropagation();const note=event.target.elements.note.value.trim();if(note)buildContribution(note,event.target.elements.link.value.trim())});

document.addEventListener('input',event=>{if(event.target.id==='contribution-link')previewPastedContribution()});

window.addEventListener('storage',event=>{if(event.key===CONTRIBUTION_KEY){const y=window.scrollY;render();window.scrollTo(0,y)}});

function resetSharedComments(){window.resetTripPrototype()}

document.addEventListener('focusin',event=>{if(event.target.id==='contribution-link')fillContributionLink(event.target)});
