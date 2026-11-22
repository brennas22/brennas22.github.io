(() => {
  const steps = ['intro', 'intro-brain', 'intro-clarity', 'intro-belief', 'intro-history', 'intro-process', 'intro-accessibility', 'intro-approach', 'intro-market', 'intro-thesis', 'intro-opportunity', 'intro-scenario'];
  const labels = ['Hello', 'I’m Brenna', 'Finding the connections', 'Make it tangible', 'The process, then', 'The process, now', 'Accessibility', 'Approaching the brief', 'The landscape', 'The hypothesis', 'The observation', 'The experiment'];
  const originalTitle = document.title;
  let deck;
  let threadFrame = 0;
  let processStage = 0;
  let clarityPhase = 0;
  let computerPowerTimer;
  let spacebarReleaseTimer;
  let toolPopTimer;
  let accessBridgeTimer;
  let accessBridgeFrame=0;
  let positionThreadBadge = () => {};
  const photo = (name, alt) => `<img src="assets/${name}.jpg" alt="${alt}">`;
  const threadArtwork = `<svg class="pitch-thread" viewBox="0 0 1000 260" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true"><path data-thread-path d="M-5000 155 H-30 C38 176 99 106 153 145 C196 177 107 216 80 165 C49 107 168 84 181 149 C196 220 67 210 85 142 C103 77 207 143 151 184 C98 224 55 138 119 119 C181 101 200 188 138 179 C94 174 119 109 168 129 C221 151 184 184 230 182 C294 181 298 111 358 127 C410 141 412 183 456 161 C478 150 488 148 500 148 C548 148 555 120 602 126 C660 132 638 194 706 177 C768 161 747 112 812 122 C871 132 879 164 937 140 C966 128 989 123 1030 130 H5000" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="500" cy="148" r="13" class="pitch-thread-halo" data-thread-halo/><circle data-thread-dot cx="500" cy="148" r="7" fill="currentColor"/></svg>`;
  const threadStart = 'M-5000 155 H-30 C38 176 99 106 153 145 C196 177 107 216 80 165 C49 107 168 84 181 149 C196 220 67 210 85 142 C103 77 207 143 151 184 C98 224 55 138 119 119 C181 101 200 188 138 179 C94 174 119 109 168 129 C221 151 184 184 230 182 C294 181 298 111 358 127 C410 141 412 183 456 161 C478 150 488 148 500 148 C548 148 555 120 602 126 C660 132 638 194 706 177 C768 161 747 112 812 122 C871 132 879 164 937 140 C966 128 989 123 1030 130 H5000';
  const threadLater = 'M-5000 155 H-30 C38 176 99 133 153 145 C196 157 153 179 123 165 C102 148 150 124 168 149 C190 180 115 182 124 151 C133 122 174 152 151 167 C128 185 117 148 146 144 C177 140 180 170 159 172 C137 174 143 145 168 144 C221 142 184 184 230 182 C294 181 298 111 358 127 C410 141 412 183 456 161 C478 150 488 148 500 148 C548 148 555 120 602 126 C660 132 638 194 706 177 C768 161 742 82 812 104 C871 126 772 205 778 150 C784 100 900 114 1030 130 H5000';
  const threadBrain = 'M-5000 155 H-30 C90 120 170 200 260 170 C390 100 480 90 600 185 C790 340 260 650 250 400 C240 120 920 140 790 445 C650 730 300 80 560 170 C850 280 610 710 400 525 C180 350 560 90 720 275 C930 520 250 660 325 310 C410 -80 870 590 570 610 C250 630 180 120 490 260 C850 440 550 730 360 440 C130 110 810 10 760 370 C690 750 180 450 410 190 C640 -35 920 440 620 515 C300 610 275 180 500 360 C650 500 740 120 830 140 C900 175 970 123 1030 130 H5000';
  // One strand resolves across the observation, hypothesis, and experiment.
  let observationCurve=0;
  const observationRoute=threadStart.replace(/C([^CH]+)/g,(match,coordinates)=>{
    if(observationCurve++>=8)return match;
    return 'C'+coordinates.trim().split(/\s+/).map(Number).map((n,i)=>i%2?155+(n-155)*1.45:130+(n-130)*1.4).join(' ')+' ';
  });
  const experimentRoute=(()=>{
    let d='M-5000 155 H-30';
    for(let i=0;i<17;i++){
      const x=-30+i*1060/17,next=-30+(i+1)*1060/17;
      const y=155+Math.sin(i*.72)*6,ny=155+Math.sin((i+1)*.72)*6;
      d+=' C'+[x+(next-x)/3,y,next-(next-x)/3,ny,next,ny].join(' ');
    }
    return d+' H5000';
  })();
  const hypothesisRoute=blendThread(observationRoute,experimentRoute,.64);
  const originalScenes = [
    `<div class="pitch-welcome-composition">${threadArtwork}<h1>Hello<span class="pitch-cursor" aria-hidden="true"></span></h1></div>`,
    `<div class="pitch-welcome-composition pitch-history-composition">${threadArtwork}<h1 class="pitch-thread-badge">A long long time ago</h1><figure class="pitch-retro-computer"><div class="pitch-computer-hardware"><svg class="pitch-crt-mask" width="0" height="0" aria-hidden="true"><defs><clipPath id="pitch-crt-glass-shape" clipPathUnits="objectBoundingBox"><path d="M .065 .025 Q .5 -.012 .935 .025 C .985 .03 1 .085 1 .5 C 1 .915 .985 .972 .945 .982 Q .5 1.018 .055 .982 C .015 .972 0 .915 0 .5 C 0 .085 .015 .03 .065 .025 Z"/></clipPath></defs></svg><img class="pitch-computer-case" src="assets/retro-computer-large-monitor.png" alt="An early beige desktop computer with a CRT monitor and keyboard"><img class="pitch-spacebar-frame" src="assets/retro-computer-spacebar-pressed.png" alt="" aria-hidden="true"><div class="pitch-crt-screen" aria-hidden="true"><img class="pitch-crt-diagram" src="assets/design-process-screen.png" alt=""><img class="pitch-crt-diagram pitch-crt-actual" src="assets/design-process-actual.png" alt="My actual design process: the linear process covered in handwritten questions, sketches, feedback, experiments, and loops." aria-hidden="true"><div class="pitch-crt-glass"></div></div><button class="pitch-computer-spacebar" data-computer-spacebar aria-label="Press space bar to change the screen" title="Press space bar"></button><span class="pitch-power-light" aria-hidden="true"></span><button class="pitch-computer-power" data-computer-power aria-label="Turn computer on" title="Turn computer on"></button><span class="pitch-sr-only" role="status" data-computer-status></span></div></figure></div>`,
    `<div class="pitch-welcome-composition pitch-brain-composition">${threadArtwork}<h1 class="pitch-sr-only">Inside my brain</h1><span class="pitch-thread-badge pitch-now-badge" aria-hidden="true">Now</span></div>`,
    `<div class="pitch-observation-thread-top">${threadArtwork}</div><div class="pitch-copy pitch-project-copy"><p class="pitch-eyebrow">THE OBSERVATION</p><h1>Airbnb already inspires that kind of imagining,<br><span class="pitch-blue">but its search entry asks for structured answers.</span></h1></div><div class="pitch-search-observation"><div class="pitch-observation-toggle" role="group" aria-label="Observation example"><button type="button" data-observation-view="browse" aria-pressed="true" aria-controls="pitch-observation-browse">Treehouses</button><button type="button" data-observation-view="search" aria-pressed="false" aria-controls="pitch-observation-search">Search</button></div><div class="pitch-observation-stage"><div id="pitch-observation-search" class="pitch-observation-panel" hidden><div class="pitch-familiar-search" aria-label="Airbnb’s familiar search fields"><img class="pitch-observation-logo" src="assets/airbnb-belo.svg" alt="Airbnb"><div><span>Where</span><strong>Search destinations</strong></div><div><span>When</span><strong>Add dates</strong></div><div><span>Who</span><strong>Add guests</strong></div><span class="pitch-search-circle" aria-hidden="true"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></svg></span></div></div><figure id="pitch-observation-browse" class="pitch-observation-panel pitch-observation-screen"><img src="assets/airbnb-treehouse-category.png" alt="Airbnb’s treehouse rentals page combines an inviting home photo with location and date fields."></figure></div><div class="pitch-starting-thought"><span>THE THOUGHT BEFORE THE SEARCH</span><p>“We want to get away.<br>We’re still figuring out where and when.”</p></div></div>`,
    `<div class="pitch-observation-thread-top">${threadArtwork}</div><div class="pitch-copy pitch-project-copy"><p class="pitch-eyebrow">THE HYPOTHESIS</p><h1>What if AI helped us<br><span class="pitch-blue">imagine the trip<br>together?</span></h1></div><div class="pitch-planning-connection"><figure class="pitch-hypothesis-screen"><img src="assets/airbnb-exploratory-treehouses.png" alt="Exploring distinctive treehouses across the United States on Airbnb."></figure><p class="pitch-hypothesis-fit">Built on Airbnb’s spirit of discovery.</p></div>`,
    `<div class="pitch-observation-thread-top">${threadArtwork}</div><div class="pitch-copy pitch-project-copy"><p class="pitch-eyebrow">THE EXPERIMENT</p><h1>Generative AI could create hyper-personalized experiences that <span class="pitch-blue">let travelers imagine <em class="pitch-together">together.</em></span></h1></div><div class="pitch-experiment-prompts"><article><span>01</span><h2>Can we explore<br>possibilities before<br>choosing a trip?</h2></article><article><span>02</span><div><h2>Can a friend’s find<br>open up a new<br>possibility?</h2><p>Even when it doesn’t quite fit.</p></div></article></div>`
  ];
  function blendThread(from, to, amount) {
    const numbers = from.match(/-?\d+(?:\.\d+)?/g).map(Number);
    let i = 0;
    return to.replace(/-?\d+(?:\.\d+)?/g,n=>{const before=numbers[i++];return (before+(Number(n)-before)*amount).toFixed(3);});
  }
  // Broaden the knot itself, keeping the same SVG proportions and edge-to-edge tails.
  let tourCurve = 0;
  const threadTour = threadBrain.replace(/C([^CH]+)/g, (match, coordinates) => {
    const values = coordinates.trim().split(/\s+/).map(Number);
    if (tourCurve++ > 14) return match;
    return 'C'+values.map((n,i)=>i%2===0?(500+(n-500)*1.65).toFixed(3):n).join(' ')+' ';
  });
  function splitCubic(start,v,t=.5) {
    const mix=(p,q)=>p.map((n,i)=>n+(q[i]-n)*t);
    const a=mix(start,v.slice(0,2)),b=mix(v.slice(0,2),v.slice(2,4)),c=mix(v.slice(2,4),v.slice(4));
    const d=mix(a,b),e=mix(b,c),point=mix(d,e);
    return [[...a,...d,...point],[...e,...c,...v.slice(4)]];
  }
  function splitEarlyCurves(d) {
    let start=[-30,55],index=0;
    return d.replace(/C([^CH]+)/g,(_,coordinates)=>{
      const values=coordinates.trim().split(/\s+/).map(Number),parts=splitCubic(start,values);
      start=values.slice(4);
      return (index++<8?parts:[values]).map(v=>'C'+v.join(' ')).join(' ')+' ';
    });
  }
  // A continuous spline gives every bend a shared tangent, including the
  // larger turns and little self-crossing loops between the stops.
  const processWaypoints=[[-30,55],[220,70],[320,145],[235,110],[340,85],[720,100],[960,215],[660,345],[660,235],[660,345],[270,330],[120,440],[330,485],[270,405],[210,535],[750,470],[980,565],[1200,550]];
  const processTangents=[[180,0],[210,25],[-260,160],[80,-260],[260,150],[260,0],[0,200],[-210,0],[210,0],[-210,0],[-230,0],[40,210],[120,-180],[-160,30],[220,60],[270,0],[210,0],[200,0]];
  const processStops=[17,22,29];
  const processPaths=[0,1,2].map(stage=>{
    const points=processWaypoints.map(([x,y],i)=>i===0||i===17||[5,10,15].includes(i)?[x,y]:[x+Math.sin(i+stage)*7,y+Math.cos(i+stage)*7]);
    let result='M-5000 55 H-30';
    for(let i=0;i<points.length-1;i++) {
      const start=points[i],end=points[i+1];
      const c1=start.map((n,axis)=>n+processTangents[i][axis]/3);
      const c2=end.map((n,axis)=>n-processTangents[i+1][axis]/3);
      result+=' C'+[...c1,...c2,...end].join(' ');
    }
    const knot=[...threadStart.matchAll(/C([^CH]+)/g)].slice(0,8).map((match,curve)=>'C'+match[1].trim().split(/\s+/).map(Number).map((n,i)=>curve===0&&i===1?55:i%2?n+Math.sin(stage)*4:n+170+stage*3).join(' ')).join(' ');
    const sections=[...result.matchAll(/C([^CH]+)/g)].map(match=>match[0]);
    // Let the lower strand meander between the loose knot and Prototypes.
    sections.splice(14,1,'C285 555 380 490 440 490 C500 490 500 560 560 540 C620 520 660 470 750 470');
    const rest=sections.slice(4).join(' ');
    return splitEarlyCurves('M-5000 55 H-30 '+knot+' '+rest+' H5000');
  });
  // After Prototypes, the same strand opens into a quick succession of loops.
  const prototypeCurves=[...processPaths[2].matchAll(/C([^CH]+)/g)].slice(0,29).map(match=>match[0]).join(' ');
  let cycleTail=' C780 470 790 490 800 490';
  const loopShapes=[[24,27,-.13],[22,25,.1],[26,29,-.08],[23,26,.14],[25,28,.04],[22,26,-.1],[24,27,.09]];
  loopShapes.forEach(([rx,ry,lean],i)=>{
    const x=800+i*32,cy=490-ry,k=.5522847498;
    const point=(px,py)=>[px+lean*(py-490),py];
    const curve=(...points)=>' C'+points.flatMap(([px,py])=>point(px,py)).join(' ');
    // Gently varied height, width and lean, with the same simple round motion.
    cycleTail+=curve([x+rx*k,490],[x+rx,cy+ry*k],[x+rx,cy]);
    cycleTail+=curve([x+rx,cy-ry*k],[x+rx*k,cy-ry],[x,cy-ry]);
    cycleTail+=curve([x-rx*k,cy-ry],[x-rx,cy-ry*k],[x-rx,cy]);
    cycleTail+=curve([x-rx,cy+ry*k],[x-rx*k,490],[x,490]);
    cycleTail+=` C${x+11} ${490+(i%2?1:-1)} ${x+21} 490 ${x+32} 490`;
  });
  processPaths.push('M-5000 55 H-30 '+prototypeCurves+cycleTail+' C1060 490 1130 550 1200 550 H5000');
  processStops.push(65);
  const processNames = ['Voice','Sketching','Prototypes','Ship in rapid cycles'];
  const prototypeTools=[
    ['figma-make.png','Figma Make',-78,2,-12,'#e1eaf0'],
    ['figma.svg','Figma',-53,-39,8,'#fff8e9'],
    ['chatgpt.svg','ChatGPT',-24,-58,-9,'#d5e8d9'],
    ['replit.svg','Replit',17,-43,12,'#ffe0c9'],
    ['lovable.svg','Lovable',58,-58,-8,'#f7dce9'],
    ['v0.svg','v0',81,1,9,'#fff9ec'],
    ['claude.svg','Claude',-65,35,-8,'#f2d7c8']
  ];
  const toolBlobPaths=[
    'M.15 .18 C.32 -.03 .7 .04 .9 .25 C1.06 .45 .96 .85 .75 .93 C.53 1.03 .46 .71 .29 .8 C.02 .94 -.05 .4 .15 .18Z',
    'M.45 .02 C.69 -.05 .76 .23 .85 .42 C1.08 .76 .92 1.02 .52 .99 C.12 1.03 -.05 .76 .13 .44 C.24 .23 .2 .05 .45 .02Z',
    'M.48 .12 C.67 -.13 1 .04 .91 .34 C1.13 .55 .98 .91 .7 .86 C.58 1.1 .22 1.04 .22 .8 C-.06 .77 -.04 .39 .17 .32 C.1 .06 .33 -.04 .48 .12Z',
    'M.11 .3 C.11 -.03 .45 -.08 .56 .13 C.8 -.12 1.07 .17 .93 .43 C1.13 .74 .85 1.07 .59 .91 C.34 1.1 -.02 .97 .06 .7 C-.08 .57 -.01 .38 .11 .3Z',
    'M.63 .02 C.86 .05 1.06 .39 .96 .69 C.88 1.02 .42 1.12 .16 .89 C-.11 .67 .06 .41 .25 .33 C.44 .26 .35 -.03 .63 .02Z',
    'M.1 .15 C.25 -.06 .38 .24 .5 .18 C.7 -.04 .95 .03 .99 .4 C1.07 .85 .82 1.1 .59 .88 C.45 .77 .36 .82 .24 .98 C-.1 1.04 -.04 .35 .1 .15Z',
    'M.27 .05 C.43 -.06 .54 .12 .65 .1 C.95 -.02 1.09 .3 .91 .48 C1.1 .68 .87 1.07 .62 .89 C.42 1.11 .13 1.02 .16 .77 C-.1 .71 -.04 .4 .15 .34 C.04 .19 .12 .07 .27 .05Z'
  ];
  const prototypeToolMasks=`<svg class="pitch-tool-mask-defs" width="0" height="0" aria-hidden="true"><defs>${toolBlobPaths.map((d,i)=>`<clipPath id="pitch-tool-blob-${i}" clipPathUnits="objectBoundingBox"><path d="${d}"/></clipPath>`).join('')}</defs></svg>`;
  const prototypeToolCluster=`<span class="pitch-tool-cluster" aria-hidden="true">${prototypeTools.map(([file,name,x,y,rotation,color],i)=>`<span class="pitch-tool-chip pitch-tool-chip-${i}" title="${name}" style="--tool-x:${x}px;--tool-y:${y}px;--tool-rotation:${rotation}deg;--tool-color:${color};--tool-order:${i}"><img src="assets/tool-icons/${file}" alt="" width="24" height="24"></span>`).join('')}</span>`;
  const processScene = `<div class="pitch-process-journey">${prototypeToolMasks}<h1 class="pitch-sr-only">My process</h1><div class="pitch-process-journey-line" aria-hidden="true">${threadArtwork.replace('0 0 1000 260','0 0 1000 620')}</div><div class="pitch-process-stops" role="group" aria-label="Stops along my process">${processNames.slice(0,3).map((name,i)=>`<button class="pitch-process-stop ${i===0?'is-current':''}" data-process-step="${i}" aria-label="${name}" aria-pressed="${i===0}" disabled><span class="pitch-stop-dot" aria-hidden="true"></span>${i===2?prototypeToolCluster:''}<span class="pitch-stop-label">${name}</span></button>`).join('')}</div><div class="pitch-cycle-bracket" data-cycle-bracket role="status">Ship in rapid cycles</div><div class="pitch-cycle-bracket pitch-cycle-bracket-below" data-cycle-bracket-below>Talk to users constantly</div></div>`;
  const brainScene=`<div class="pitch-welcome-composition pitch-brain-composition">${threadArtwork}<h1 class="pitch-brenna-title">I’m Brenna.</h1><div class="pitch-role-row"><span class="pitch-role-blob role-designer"><svg viewBox="0 0 200 130" aria-hidden="true"><path d="M37 18C63-2 88 17 111 9C148-4 191 13 190 46C208 74 182 108 148 105C125 138 86 117 63 122C26 133 0 106 13 79C-4 49 9 21 37 18Z"/></svg><span>Systems<br>thinker</span></span><span class="pitch-role-blob role-maker"><svg viewBox="0 0 170 140" aria-hidden="true"><path d="M29 24C46-2 81 14 104 8C139-2 164 24 152 53C181 79 150 112 126 111C105 148 77 122 52 130C18 141 4 107 17 85C-4 59 4 35 29 24Z"/></svg><span>Maker</span></span><span class="pitch-role-blob role-solver"><svg viewBox="0 0 190 125" aria-hidden="true"><path d="M36 10C62-3 78 17 103 12C141-3 179 18 169 47C195 68 178 103 144 100C121 133 96 109 71 116C37 132 8 106 18 79C-7 55 9 17 36 10Z"/></svg><span>Problem<br>solver</span></span></div></div>`;
  // The tangle is the problem space: many threads, one discoverable route.
  const clarityTangle=blendThread(threadLater,threadBrain,.5);
  const crossingThreads=[
    'M-500 110 C-100 110 160 130 330 240 C500 350 600 180 560 330 C520 480 370 340 500 300 C630 260 800 120 1000 190 C1200 260 1400 160 1600 160',
    'M-500 430 C-50 430 240 510 420 330 C600 150 510 70 480 190 C450 310 680 420 830 320 C980 220 1300 340 1600 340',
    'M-500 520 C-50 520 320 570 650 390 C980 210 490 160 550 330 C610 500 890 530 1110 440 C1330 350 1450 480 1600 480',
    'M-500 300 C-50 300 180 80 440 240 C700 400 360 430 500 450 C640 470 850 330 1000 300 C1150 270 1300 390 1600 390'
  ];
  function loopThread(d,strand) {
    let index=0,start=d.match(/^M(-?[\d.]+)\s+(-?[\d.]+)/).slice(1).map(Number);
    return d.replace(/C([^CH]+)/g,(match,coordinates)=>{
      const values=coordinates.trim().split(/\s+/).map(Number),before=start;
      start=values.slice(4);
      if(![0,strand===2?1:2].includes(index++)) return match;
      // Replace an actual stretch of the route with an open, overlapping curl.
      // Its entry and exit stay distinct, retaining the original tangents.
      const [lead,remainder]=splitCubic(before,values,.6);
      const [section,tail]=splitCubic(lead.slice(4),remainder,.75);
      const entry=lead.slice(4),exit=section.slice(4),vector=exit.map((n,i)=>n-entry[i]);
      const length=Math.hypot(...vector)||1,tangent=vector.map(n=>n/length),normal=[-tangent[1],tangent[0]];
      const radius=(31+strand*4+index*2)*(strand%2?1:-1);
      const at=(x,y)=>entry.map((n,i)=>n+tangent[i]*length*x+normal[i]*radius*y);
      const curve=(a,b,end)=>' C'+[...a,...b,...end].map(n=>n.toFixed(3)).join(' ');
      return 'C'+lead.join(' ')
        +curve(section.slice(0,2),at(.12,-1),at(.58,-.78))
        +curve(at(1.04,-.56),at(.76,.7),at(.26,.46))
        +curve(at(-.24,.22),at(.16,-.58),at(.58,-.3))
        +curve(at(.92,-.02),section.slice(2,4),exit)
        +' C'+tail.join(' ')+' ';
    });
  }
  const mazeThreads=crossingThreads.map((d,i)=>`<path pathLength="1" d="${loopThread(d,i)}"/>`).join('');
  const clarityScene=`<div class="pitch-clarity-composition"><p class="pitch-clarity-label" data-navigate-label>Navigate ambiguity</p><h1 class="pitch-sr-only">Finding a path through ambiguity</h1><svg class="pitch-thread pitch-clarity-svg" viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true"><defs><linearGradient id="pitch-weave-edge-fade" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="620"><stop offset="0" stop-color="white" stop-opacity="0"/><stop offset=".12" stop-color="white"/><stop offset=".85" stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><mask id="pitch-weave-fade" maskUnits="userSpaceOnUse" x="-2000" y="0" width="5000" height="620"><rect x="-2000" y="0" width="5000" height="620" fill="url(#pitch-weave-edge-fade)"/></mask></defs><g class="pitch-maze-threads">${mazeThreads}</g><path data-thread-path d="${threadStart}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path class="pitch-clarity-highlight" pathLength="1"/><circle data-thread-halo class="pitch-thread-halo" cx="500" cy="148" r="13"/><circle data-thread-dot cx="500" cy="148" r="7" fill="currentColor"/></svg><span class="pitch-sr-only" role="status" data-clarity-status>Many ideas and possibilities.</span></div>`;
  const beliefScene = `<div class="pitch-belief-layout"><div class="pitch-personal-thread" aria-hidden="true">${threadArtwork.replace('0 0 1000 260','0 0 1000 620')}</div><h1><span class="pitch-belief-premise" data-navigate-label>Navigate ambiguity</span><span class="pitch-belief-statement">Show people things<br>they <span class="pitch-belief-highlight">can’t unsee</span>.</span></h1><p class="pitch-lead">I find connections between ideas and make the possibilities tangible.</p></div>`;
  const accessRoute='M-5000 155 H-30 C70 155 130 190 205 155 C260 120 280 88 330 105 C380 122 360 185 410 177 C440 172 440 137 470 140 C500 143 520 160 550 148 C580 136 602 120 635 128 C668 136 660 196 710 178 C760 160 800 140 820 110 C840 80 900 90 898 130 C896 170 827 180 830 135 C833 90 920 70 930 122 C940 174 860 206 858 155 C856 104 930 104 955 140 C980 176 1010 140 1030 130 C1040 125 1050 122 1060 122 C1070 122 1080 128 1090 130 C1110 136 1140 130 1160 130 H5000';
  const accessThread=threadArtwork.replace('<path data-thread-path',`<defs><mask id="pitch-access-gap" maskUnits="userSpaceOnUse" x="-6000" y="-1000" width="12000" height="2000"><rect x="-6000" y="-1000" width="12000" height="2000" fill="white"/><rect data-access-gap-region x="430" y="-1000" width="265" height="2000" fill="black"/></mask><clipPath id="pitch-access-bridge-region" clipPathUnits="userSpaceOnUse"><rect data-access-dotted-region x="430" y="-1000" width="265" height="2000"/></clipPath><clipPath id="pitch-access-bridge-reveal" clipPathUnits="userSpaceOnUse"><rect data-access-bridge-reveal x="430" y="-1000" width="0" height="2000"/></clipPath></defs><path data-access-bridge stroke="currentColor" stroke-width="2.2" stroke-dasharray=".1 8" stroke-linecap="round" clip-path="url(#pitch-access-bridge-region)"/><path data-access-blue stroke="#2450ff" stroke-width="2.2" stroke-linecap="round" clip-path="url(#pitch-access-bridge-reveal)"/><path data-thread-path`);
  const accessScene=`<div class="pitch-access-composition"><div class="pitch-access-thread" aria-hidden="true">${accessThread}</div><h1>Accessibility is core<br>to how I design.</h1></div>`;

  const approachRoute='M-5000 0.0 H-30 C0 0.0 14 7.2 35 9.6 C56 12.0 70 0.0 89 -3.6 C108 -7.2 124 2.4 127 19.2 C130 36.0 111 49.2 99 33.6 C87 18.0 94 -3.6 110 -6.0 C132 -9.6 141 14.4 161 14.4 C181 14.4 190 -1.2 209 -2.4 C228 -3.6 235 3.6 247 6.0 C255 8.4 259 10.8 262 14.4 C265 18.0 268 21.6 270 24.0 C280 48.0 335 54.0 310 99.6 C285 142.8 234 90.0 270 78.0 C320 62.4 365 150.0 352 193.2 C337 242.4 224 199.2 195 264.0 C170 319.2 200 355.2 258 352.8 C319 350.4 341 318.0 385 344.4 C424 368.4 454 398.4 560 398.4 H5000';
  const approachScene=`<div class="pitch-copy pitch-project-copy"><p class="pitch-eyebrow">APPROACHING THE BRIEF</p><h1>I started by<br><span class="pitch-spoken-phrase"><span class="pitch-blue">talking it out.</span><svg class="pitch-spoken-wave" viewBox="0 0 392 64" preserveAspectRatio="none" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" aria-hidden="true"><path d="M4 20.5v23" style="--voice-duration:3.30s;--voice-delay:-0.00s"/><path d="M12 11.0v42" style="--voice-duration:5.19s;--voice-delay:-1.43s"/><path d="M20 23.5v17" style="--voice-duration:4.11s;--voice-delay:-0.33s"/><path d="M28 16.5v31" style="--voice-duration:6.00s;--voice-delay:-1.76s"/><path d="M36 5.0v54" style="--voice-duration:4.92s;--voice-delay:-0.66s"/><path d="M44 18.5v27" style="--voice-duration:3.84s;--voice-delay:-2.09s"/><path d="M52 25.0v14" style="--voice-duration:5.73s;--voice-delay:-0.99s"/><path d="M60 10.0v44" style="--voice-duration:4.65s;--voice-delay:-2.42s"/><path d="M68 15.0v34" style="--voice-duration:3.57s;--voice-delay:-1.32s"/><path d="M76 22.0v20" style="--voice-duration:5.46s;--voice-delay:-0.22s"/><path d="M84 7.5v49" style="--voice-duration:4.38s;--voice-delay:-1.65s"/><path d="M92 17.5v29" style="--voice-duration:3.30s;--voice-delay:-0.55s"/><path d="M100 3.5v57" style="--voice-duration:5.19s;--voice-delay:-1.98s"/><path d="M108 23.0v18" style="--voice-duration:4.11s;--voice-delay:-0.88s"/><path d="M116 14.0v36" style="--voice-duration:6.00s;--voice-delay:-2.31s"/><path d="M124 9.0v46" style="--voice-duration:4.92s;--voice-delay:-1.21s"/><path d="M132 20.0v24" style="--voice-duration:3.84s;--voice-delay:-0.11s"/><path d="M140 12.5v39" style="--voice-duration:5.73s;--voice-delay:-1.54s"/><path d="M148 24.0v16" style="--voice-duration:4.65s;--voice-delay:-0.44s"/><path d="M156 6.0v52" style="--voice-duration:3.57s;--voice-delay:-1.87s"/><path d="M164 16.0v32" style="--voice-duration:5.46s;--voice-delay:-0.77s"/><path d="M172 21.5v21" style="--voice-duration:4.38s;--voice-delay:-2.20s"/><path d="M180 9.5v45" style="--voice-duration:3.30s;--voice-delay:-1.10s"/><path d="M188 2.5v59" style="--voice-duration:5.19s;--voice-delay:-0.00s"/><path d="M196 19.0v26" style="--voice-duration:4.11s;--voice-delay:-1.43s"/><path d="M204 12.0v40" style="--voice-duration:6.00s;--voice-delay:-0.33s"/><path d="M212 22.5v19" style="--voice-duration:4.92s;--voice-delay:-1.76s"/><path d="M220 8.0v48" style="--voice-duration:3.84s;--voice-delay:-0.66s"/><path d="M228 17.0v30" style="--voice-duration:5.73s;--voice-delay:-2.09s"/><path d="M236 4.5v55" style="--voice-duration:4.65s;--voice-delay:-0.99s"/><path d="M244 21.0v22" style="--voice-duration:3.57s;--voice-delay:-2.42s"/><path d="M252 13.5v37" style="--voice-duration:5.46s;--voice-delay:-1.32s"/><path d="M260 7.0v50" style="--voice-duration:4.38s;--voice-delay:-0.22s"/><path d="M268 24.5v15" style="--voice-duration:3.30s;--voice-delay:-1.65s"/><path d="M276 15.5v33" style="--voice-duration:5.19s;--voice-delay:-0.55s"/><path d="M284 10.5v43" style="--voice-duration:4.11s;--voice-delay:-1.98s"/><path d="M292 19.5v25" style="--voice-duration:6.00s;--voice-delay:-0.88s"/><path d="M300 4.0v56" style="--voice-duration:4.92s;--voice-delay:-2.31s"/><path d="M308 14.5v35" style="--voice-duration:3.84s;--voice-delay:-1.21s"/><path d="M316 23.0v18" style="--voice-duration:5.73s;--voice-delay:-0.11s"/><path d="M324 8.5v47" style="--voice-duration:4.65s;--voice-delay:-1.54s"/><path d="M332 18.0v28" style="--voice-duration:3.57s;--voice-delay:-0.44s"/><path d="M340 12.5v39" style="--voice-duration:5.46s;--voice-delay:-1.87s"/><path d="M348 22.0v20" style="--voice-duration:4.38s;--voice-delay:-0.77s"/><path d="M356 5.5v53" style="--voice-duration:3.30s;--voice-delay:-2.20s"/><path d="M364 16.5v31" style="--voice-duration:5.19s;--voice-delay:-1.10s"/><path d="M372 24.0v16" style="--voice-duration:4.11s;--voice-delay:-0.00s"/><path d="M380 11.5v41" style="--voice-duration:6.00s;--voice-delay:-1.43s"/><path d="M388 20.0v24" style="--voice-duration:4.92s;--voice-delay:-0.33s"/></svg></span></h1></div><div class="pitch-approach-map"><svg class="pitch-approach-strand pitch-thread" viewBox="0 0 540 360" fill="none" aria-hidden="true"><path data-thread-path d="${approachRoute}" stroke="currentColor" stroke-width="2.2"/><path d="M352 193.2 C410 193.2 405 104.4 471 104.4 L560 104.4" stroke="currentColor" stroke-width="2.2" opacity=".35"/><circle data-thread-halo cx="385" cy="287" r="13" class="pitch-thread-halo"/><circle data-thread-dot cx="385" cy="287" r="6" fill="currentColor"/></svg><span class="pitch-finance-branch">Finance?</span><span class="pitch-travel-stop">Travel</span><figure class="pitch-personal-connection pitch-travel-screen"><img src="assets/personal-travel-site.png" alt="The travel site I built for Ryan and me, showing our Dublin, London, and Edinburgh itinerary."></figure></div>`;
  const marketRoute=blendThread(threadLater,threadBrain,.55);
  const marketBrands=[
    ['mindtrip','Mindtrip','https://mindtrip.ai/','mindtrip.svg'],
    ['layla','Layla','https://layla.ai/',null],
    ['guidegeek','GuideGeek','https://guidegeek.com/','guidegeek.png'],
    ['wonderplan','Wonderplan','https://wonderplan.ai/','wonderplan.png'],
    ['vacay','Vacay','https://www.usevacay.com/','vacay.png'],
    ['wanderlog','Wanderlog','https://wanderlog.com/',null],
    ['fora','Fora','https://www.foratravel.com/',null]
  ];
  marketBrands.push(
    ['chatgpt','ChatGPT','https://chatgpt.com/','../tool-icons/chatgpt.svg'],
    ['claude','Claude','https://claude.ai/','../tool-icons/claude.svg'],
    ['perplexity','Perplexity','https://www.perplexity.ai/','../tool-icons/perplexity.svg'],
    ['kimkim','kimkim','https://www.kimkim.com/',null]
  );
  const marketGroups=[
    ['research','Think & research',['chatgpt','claude','perplexity']],
    ['itineraries','Build the itinerary',['mindtrip','wanderlog','wonderplan','vacay']],
    ['agents','Plan & book',['layla','guidegeek']],
    ['advisors','Human expertise',['fora','kimkim']]
  ];
  let marketBrandOrder=0;
  const marketScene=`<div class="pitch-market-composition"><div class="pitch-market-title"><p class="pitch-eyebrow">THE LANDSCAPE</p><h1>A crowded space.</h1></div><div class="pitch-market-thread">${threadArtwork.replace('viewBox="0 0 1000 260"','viewBox="0 0 1000 500"')}</div><div class="pitch-market-brands">${marketGroups.map(([group,title,ids])=>`<section class="pitch-market-group pitch-market-group-${group}" aria-label="${title}"><h2>${title}</h2><div class="pitch-market-cluster">${ids.map(id=>{
    const [,name,url,asset]=marketBrands.find(brand=>brand[0]===id);
    const order=marketBrandOrder++;
    return `<a class="pitch-market-brand pitch-market-${id}" style="--brand-delay:${.16+order*.085}s;--brand-tilt:${[-4,3,-2,3,-3,2,-4,4,-3,2][order%10]}deg" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${name}">${asset?`<img src="assets/travel-tools/${asset}" alt="${id==='mindtrip'?name:''}">`:''}${id==='mindtrip'?'':`<span>${name}</span>`}</a>`;
  }).join('')}</div></section>`).join('')}</div></div>`;
  const scenes = [originalScenes[0],brainScene,clarityScene,beliefScene,originalScenes[1],processScene,accessScene,approachScene,marketScene,originalScenes[4],originalScenes[3],originalScenes[5]];
  function alignApproachThread(){
    if(!deck?.classList.contains('pitch-approach'))return;
    const map=deck.querySelector('.pitch-approach-map'),svg=map.querySelector('.pitch-thread');
    map.style.translate='none';
    const height=Math.max(150,Math.min(260,innerWidth*.2364));
    const scale=Math.min(innerWidth/1000,height/260);
    const top=innerWidth<=800?-65:Math.max(-106,Math.min(-70,innerHeight*.07-170));
    const baseline=deck.querySelector('.pitch-scene').getBoundingClientRect().top+top+(height-260*scale)/2+155*scale;
    map.style.translate=`0 ${baseline-svg.getScreenCTM().f}px`;
  }
  function show(index, focus = false) {
    const route = steps[index];
    const previousLabel=route==='intro-belief'&&deck?.classList.contains('pitch-clarity-tracing')?deck.querySelector('[data-navigate-label]'):null;
    const previousLabelBounds=previousLabel?.getBoundingClientRect();
    if (route === 'intro-process') processStage = 0;
    if (route === 'intro-clarity') clarityPhase=0;
    const oldThread = deck?.querySelector('.pitch-thread');
    const previousThread = oldThread ? {matrix:(()=>{const m=oldThread.getScreenCTM();return {a:m.a,d:m.d,e:m.e,f:m.f};})(),top:oldThread.getBoundingClientRect().top, path:oldThread.querySelector('[data-thread-path]').getAttribute('d'), x:Number(oldThread.querySelector('[data-thread-dot]').getAttribute('cx')), y:Number(oldThread.querySelector('[data-thread-dot]').getAttribute('cy'))} : null;
    if(route==='intro-accessibility'&&deck?.classList.contains('pitch-process')&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      deck.querySelectorAll('.pitch-cycle-bracket').forEach(label=>{
        if(getComputedStyle(label).visibility!=='visible')return;
        const bounds=label.getBoundingClientRect(),clone=label.cloneNode(true);
        clone.setAttribute('aria-hidden','true');
        Object.assign(clone.style,{position:'fixed',left:bounds.left+'px',top:bounds.top+'px',width:bounds.width+'px',height:bounds.height+'px',transform:'none',padding:'0',margin:'0',opacity:'1',visibility:'visible',pointerEvents:'none',zIndex:'5'});
        document.body.append(clone);
        clone.animate([{opacity:1,translate:'0 0'},{opacity:0,translate:'-45px 0'}],{duration:450,easing:'ease-out',fill:'forwards'}).finished.finally(()=>clone.remove());
      });
    }
    if (route !== 'intro-history' && deck?.classList.contains('pitch-history') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const computer = deck.querySelector('.pitch-retro-computer');
      if (computer && getComputedStyle(computer).visibility === 'visible') {
        const bounds = computer.querySelector('.pitch-computer-hardware').getBoundingClientRect();
        const departure = document.createElement('div');
        departure.className = 'pitch-history pitch-computer-departure';
        departure.setAttribute('aria-hidden','true');
        Object.assign(departure.style,{left:bounds.left+'px',top:bounds.top+'px',width:bounds.width+'px',height:bounds.height+'px'});
        departure.append(computer.cloneNode(true));
        document.body.append(departure);
        departure.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(12px)'}],{duration:280,fill:'forwards'}).finished.finally(()=>departure.remove());
      }
    }
    cancelAnimationFrame(threadFrame);
    clearTimeout(accessBridgeTimer);
    cancelAnimationFrame(accessBridgeFrame);
    clearTimeout(computerPowerTimer);
    clearTimeout(spacebarReleaseTimer);
    clearTimeout(toolPopTimer);
    positionThreadBadge = () => {};
    document.documentElement.classList.add('presenting');
    const personalSection={'intro-market':'Exploring the landscape','intro-approach':'Approaching the problem','intro-thesis':'Forming an opinion','intro-opportunity':'Finding the opportunity'}[route] || 'A quick tour';
    const isProjectReveal=route==='intro-scenario';
    document.title=isProjectReveal?'The Weekend Edit · A planning concept':'Brenna Sorkin · '+personalSection;
    if (!deck) {
      deck = document.createElement('div');
      deck.id = 'presentation';
      document.body.append(deck);
      let lastPowerPointer = -Infinity;
      let lastSpacePointer = -Infinity;
      deck.addEventListener('pointerdown', event => {
        const spacebar = event.target.closest('[data-computer-spacebar]');
        if (spacebar && event.button === 0) {lastSpacePointer = performance.now();pressComputerSpacebar(true);return;}
        const power = event.target.closest('[data-computer-power]');
        if (!power || event.button !== 0) return;
        lastPowerPointer = performance.now();
        toggleComputerPower(power);
      });
      deck.addEventListener('click', event => {
        const observationView=event.target.closest('[data-observation-view]');
        if(observationView){
          const selected=observationView.dataset.observationView;
          deck.querySelectorAll('[data-observation-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.observationView===selected)));
          deck.querySelector('#pitch-observation-search').hidden=selected!=='search';
          deck.querySelector('#pitch-observation-browse').hidden=selected!=='browse';
          return;
        }
        const processStep = event.target.closest('[data-process-step]');
        if (processStep) {
          setProcessStage(Number(processStep.dataset.processStep));
          return;
        }
        const spacebar = event.target.closest('[data-computer-spacebar]');
        if (spacebar) {if (performance.now() - lastSpacePointer > 400) pressComputerSpacebar();return;}
        const power = event.target.closest('[data-computer-power]');
        if (power) {if (performance.now() - lastPowerPointer > 400) toggleComputerPower(power);return;}
        const button = event.target.closest('[data-pitch]');
        if (!button) return;
        const current = Math.max(0, steps.indexOf(location.hash.slice(1)));
        if (button.dataset.pitch === 'start') start();
        else navigatePresentation(button.dataset.pitch === 'next' ? 1 : -1);
      });
    }
    deck.classList.toggle('pitch-welcome', ['intro','intro-brain','intro-history'].includes(route));
    deck.classList.toggle('pitch-personal', !isProjectReveal);
    deck.classList.toggle('pitch-process', route === 'intro-process');
    deck.classList.toggle('pitch-belief', route === 'intro-belief');
    deck.classList.toggle('pitch-clarity',route==='intro-clarity');
    deck.classList.toggle('pitch-belief-from-trace',!!previousLabelBounds);
    deck.classList.toggle('pitch-access', route === 'intro-accessibility');
    deck.classList.toggle('pitch-approach', route === 'intro-approach');
    deck.classList.toggle('pitch-observation', route === 'intro-opportunity');
    deck.classList.toggle('pitch-hypothesis', route === 'intro-thesis');
    deck.classList.toggle('pitch-experiment', route === 'intro-scenario');
    deck.classList.toggle('pitch-market', route === 'intro-market');
    deck.classList.toggle('pitch-history', route === 'intro-history');
    deck.classList.toggle('pitch-brain', route === 'intro-brain');
    deck.classList.remove('pitch-arrived','pitch-cycles','pitch-cycle-travel','pitch-tools-ready','pitch-clarity-resolved','pitch-clarity-tracing','pitch-access-text','pitch-access-broken','pitch-access-connected','pitch-access-passed','pitch-access-morphing');
    deck.innerHTML = `<header class="pitch-header"><a class="pitch-brand" href="#intro" aria-label="Return to the presentation title">${!isProjectReveal ? 'Brenna Sorkin<span>'+personalSection+'</span>' : '<img src="assets/airbnb-belo.svg" alt="">The weekend edit<span>Making it tangible</span>'}</a><button class="pitch-skip" data-pitch="start">Skip to prototype</button></header><main class="pitch-scene pitch-scene-${index}" aria-labelledby="pitch-title">${scenes[index]}</main><footer class="pitch-footer"><div class="pitch-progress" aria-label="Screen ${index + 1} of ${steps.length}">${steps.map((step, i) => `<a href="#${step}" aria-label="${labels[i]}" ${i === index ? 'aria-current="step"' : ''}></a>`).join('')}<span>${labels[index]}</span></div><div class="pitch-navigation">${index > 0 ? '<button class="pitch-back" data-pitch="back">Back</button>' : ''}<button class="pitch-next" data-pitch="${index === steps.length - 1 ? 'start' : 'next'}">${index === steps.length - 1 ? 'Try the prototype' : 'Continue'}</button></div></footer>`;
    const title = deck.querySelector('h1');
    title.id = 'pitch-title';
    title.tabIndex = -1;
    if (focus) title.focus({preventScroll:true});
    window.scrollTo(0, 0);
    if (route === 'intro-process') deck.querySelector('.pitch-progress>span').textContent='The process, now · 1 of 4';
    if(previousLabelBounds&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const label=deck.querySelector('[data-navigate-label]'),bounds=label.getBoundingClientRect();
      const x=previousLabelBounds.left+previousLabelBounds.width/2-bounds.left-bounds.width/2,y=previousLabelBounds.top-bounds.top;
      label.animate([{transform:`translate(${x}px,${y}px)`},{transform:'translate(0,0)'}],{duration:750,easing:'cubic-bezier(.22,.65,.25,1)',fill:'both'});
    }
    if(route==='intro-approach')alignApproachThread();
    if(route==='intro-clarity') animateClarity(previousThread);
    else if(route==='intro-accessibility') animateAccessibility(previousThread);
    else if (index < 7 || route==='intro-approach' || route==='intro-opportunity' || route==='intro-thesis' || route==='intro-scenario' || route==='intro-market') animateThread(route, previousThread);
  }
  function navigatePresentation(direction) {
    const index = Math.max(0,steps.indexOf(location.hash.slice(1)));
    if(steps[index]==='intro-clarity' && ((direction===1&&clarityPhase===0)||(direction===-1&&clarityPhase===1))) {
      const svg=deck.querySelector('.pitch-thread'),dot=svg.querySelector('[data-thread-dot]');
      const previous={path:svg.querySelector('[data-thread-path]').getAttribute('d'),x:Number(dot.getAttribute('cx')),y:Number(dot.getAttribute('cy'))};
      clarityPhase=direction===1?1:0;
      cancelAnimationFrame(threadFrame);
      deck.classList.remove('pitch-arrived','pitch-clarity-resolved');
      animateClarity(previous,clarityPhase===1);
      return;
    }
    if (steps[index] === 'intro-process' && processStage+direction >= 0 && processStage+direction < processNames.length) {
      setProcessStage(processStage+direction);
      return;
    }
    if (index === steps.length-1 && direction === 1) start();
    else location.hash = steps[index+direction];
  }
  function setProcessStage(next) {
    if (!deck?.classList.contains('pitch-process') || next === processStage) return;
    const svg = deck.querySelector('.pitch-thread');
    const dot = svg.querySelector('[data-thread-dot]');
    const previous = {processStep:processStage,path:svg.querySelector('[data-thread-path]').getAttribute('d'),x:Number(dot.getAttribute('cx')),y:Number(dot.getAttribute('cy'))};
    clearTimeout(toolPopTimer);
    deck.classList.remove('pitch-tools-ready');
    processStage = next;
    deck.classList.toggle('pitch-cycles',next===3);
    deck.classList.remove('pitch-cycle-travel');
    cancelAnimationFrame(threadFrame);
    deck.classList.remove('pitch-arrived');
    deck.querySelectorAll('[data-process-step]').forEach(button=>{const active=Number(button.dataset.processStep)===next;button.classList.toggle('is-current',active);button.setAttribute('aria-pressed',String(active));});
    deck.querySelector('.pitch-progress>span').textContent = 'The process, now · '+(next+1)+' of 4';
    animateThread('intro-process',previous);
  }
  function releaseComputerSpacebar() {
    clearTimeout(spacebarReleaseTimer);
    deck?.querySelector('.pitch-computer-hardware')?.classList.remove('pitch-spacebar-down');
  }
  function pressComputerSpacebar(hold = false) {
    const computer = deck?.querySelector('.pitch-computer-hardware');
    if (!computer || !deck.classList.contains('pitch-arrived')) return;
    clearTimeout(spacebarReleaseTimer);
    computer.classList.add('pitch-spacebar-down');
    if (!hold) spacebarReleaseTimer = setTimeout(releaseComputerSpacebar, 180);
    if (!computer.classList.contains('pitch-crt-on')) return;
    const actual = computer.classList.toggle('pitch-show-actual');
    computer.querySelector('.pitch-crt-diagram:not(.pitch-crt-actual)').setAttribute('aria-hidden', String(actual));
    computer.querySelector('.pitch-crt-actual').setAttribute('aria-hidden', String(!actual));
    computer.querySelector('[data-computer-status]').textContent = actual ? 'My actual design process.' : 'The linear design process.';
  }
  document.addEventListener('pointerup', releaseComputerSpacebar);
  document.addEventListener('pointercancel', releaseComputerSpacebar);
  window.addEventListener('blur', releaseComputerSpacebar);
  document.addEventListener('keyup', event => {if (event.code === 'Space' || event.key === ' ') releaseComputerSpacebar();});
  function toggleComputerPower(button) {
    const computer = button.closest('.pitch-computer-hardware');
    const screen = computer.querySelector('.pitch-crt-screen');
    const status = computer.querySelector('[data-computer-status]');
    clearTimeout(computerPowerTimer);
    if (computer.classList.contains('pitch-crt-on') || computer.classList.contains('pitch-crt-starting')) {
      computer.classList.remove('pitch-crt-on', 'pitch-crt-starting');
      button.setAttribute('aria-label', 'Turn computer on');
      button.title = 'Turn computer on';
      screen.setAttribute('aria-hidden', 'true');
      const badge = deck?.querySelector('.pitch-thread-badge');
      if (badge) badge.textContent = 'A long long time ago';
      status.textContent = 'Computer off.';
      return;
    }
    button.setAttribute('aria-label', 'Turn computer off');
    button.title = 'Turn computer off';
    const badge = deck?.querySelector('.pitch-thread-badge');
    if (badge) badge.textContent = 'Okay it was 2020';
    status.textContent = 'Computer starting.';
    const reveal = () => {
      if (!computer.isConnected) return;
      computer.classList.remove('pitch-crt-starting');
      computer.classList.add('pitch-crt-on');
      screen.setAttribute('aria-hidden', 'false');
      computer.querySelector('.pitch-crt-diagram').alt = 'A design process: identify and understand the problem, generate and evaluate solutions, pick a solution, then design, prototype, test, build, and learn, with feedback loops toward a finished feature.';
      status.textContent = 'Computer on. Design process diagram displayed.';
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {reveal();return;}
    computer.classList.add('pitch-crt-starting');
    computerPowerTimer = setTimeout(reveal, 1200);
  }
  function threadCore(d,element) {
    const start=d.match(/^M(-?[\d.]+)\s+(-?[\d.]+)\s+H(-?[\d.]+)/);
    const last=[...d.matchAll(/C([^CH]+)/g)].at(-1)[1].trim().split(/\s+/).map(Number);
    const tail=Number(d.slice(d.lastIndexOf('H')+1));
    const prefix=Math.abs(Number(start[3])-Number(start[1]));
    return {prefix,length:element.getTotalLength()-prefix-Math.abs(tail-last[4])};
  }
  function animateClarity(previous,reveal=false) {
    deck.classList.toggle('pitch-clarity-tracing',reveal);
    const svg=deck.querySelector('.pitch-thread'),path=svg.querySelector('[data-thread-path]'),highlight=svg.querySelector('.pitch-clarity-highlight'),maze=svg.querySelector('.pitch-maze-threads');
    const dot=svg.querySelector('[data-thread-dot]'),halo=svg.querySelector('[data-thread-halo]');
    const strands=[...maze.querySelectorAll('path')],status=deck.querySelector('[data-clarity-status]');
    deck.querySelector('.pitch-progress>span').textContent='Finding the connections · '+(reveal?'2':'1')+' of 2';
    let from=previous?.path||threadStart,origin={x:previous?.x??500,y:previous?.y??148};
    if(previous?.matrix) {
      const old=previous.matrix,next=svg.getScreenCTM();
      const x=n=>(n*old.a+old.e-next.e)/next.a,y=n=>(n*old.d+old.f-next.f)/next.d;
      from=from.replace(/([MHC])([^MHC]+)/g,(_,command,coordinates)=>command+coordinates.trim().split(/\s+/).map(Number).map((n,i)=>command==='H'||i%2===0?x(n):y(n)).join(' ')+' ');
      origin={x:x(origin.x),y:y(origin.y)};
    }
    const blend=(a,b,t)=>{const nums=a.match(/-?\d+(?:\.\d+)?/g).map(Number);let i=0;return b.replace(/-?\d+(?:\.\d+)?/g,n=>{const start=nums[i++];return (start+(Number(n)-start)*t).toFixed(3);});};
    const clamp=n=>Math.max(0,Math.min(1,n));
    const ease=n=>{const t=clamp(n);return t*t*(3-2*t);};
    const core=d=>d.replace(/^M[^C]+/,'M-30 155 ').replace(/H[^H]*$/,'');
    const nearest=(d,point)=>{
      path.setAttribute('d',d);const geometry=threadCore(d,path);let fraction=0,best=Infinity;
      for(let i=0;i<=600;i++){const p=path.getPointAtLength(geometry.prefix+geometry.length*i/600),distance=(p.x-point.x)**2+(p.y-point.y)**2;if(distance<best){best=distance;fraction=i/600;}}
      return fraction;
    };
    const originFraction=nearest(from,origin),endFraction=nearest(threadStart,{x:500,y:148});
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration=reveal?2600:2300;
    let hasFinished=false;
    status.textContent=reveal?'Finding the connections.':'Threads gathering and weaving together.';
    function paint(ms) {
      const resolve=reveal?ease((ms-1050)/1350):0;
      const d=reveal?blend(from,threadStart,resolve):blend(from,clarityTangle,ease(ms/1500));
      path.setAttribute('d',d);
      maze.style.opacity=reveal?String(1-ease((ms-450)/700)):'1';
      strands.forEach((strand,i)=>{
        const progress=reveal?1:.12+.88*ease(ms/2100);
        strand.style.strokeDasharray='1';strand.style.strokeDashoffset=String(1-progress);strand.style.opacity=String(reveal?1:ease(ms/150));
      });
      highlight.setAttribute('d',core(d));highlight.style.strokeDasharray='1';
      highlight.style.strokeDashoffset=String(1-(reveal?clamp(ms/800):0));
      highlight.style.opacity=reveal?String(1-ease((ms-2250)/350)):'0';
      path.style.opacity=reveal?String(.2+resolve*.8):'1';
      const opacity=reveal?ease((ms-2350)/250):0;
      dot.style.opacity=halo.style.opacity=String(opacity);
      const geometry=threadCore(d,path),fraction=reveal?endFraction:originFraction;
      const point=path.getPointAtLength(geometry.prefix+geometry.length*fraction);
      [dot,halo].forEach(circle=>{circle.setAttribute('cx',point.x);circle.setAttribute('cy',point.y);});
      if(!reveal&&ms>=1550)status.textContent='Other ideas and constraints weave into the thread.';
      if(ms>=duration&&!hasFinished){
        hasFinished=true;
        deck.classList.add('pitch-arrived');
        if(reveal){
          deck.classList.add('pitch-clarity-resolved');
          queueMicrotask(()=>{if(svg.isConnected&&location.hash==='#intro-clarity')location.hash='intro-belief';});
        }
        status.textContent=reveal?'A clear thread to follow.':'A few intertwined threads. Continue to find the connections.';
      }
    }
    if(reduced){paint(duration);return;}
    const started=performance.now();paint(0);
    function frame(now){const elapsed=Math.min(duration,now-started);paint(elapsed);if(elapsed<duration&&svg.isConnected)threadFrame=requestAnimationFrame(frame);}
    threadFrame=requestAnimationFrame(frame);
  }
  function animateAccessibility(previous) {
    const svg=deck.querySelector('.pitch-thread'),path=svg.querySelector('[data-thread-path]'),matrix=svg.getScreenCTM();
    const dotted=svg.querySelector('[data-access-bridge]'),blue=svg.querySelector('[data-access-blue]');
    let from=previous?.path||threadStart;
    if(previous?.matrix){
      const old=previous.matrix;
      from=from.replace(/([MHC])([^MHC]+)/g,(_,command,coordinates)=>command+coordinates.trim().split(/\s+/).map(Number).map((n,i)=>command==='H'||i%2===0?(n*old.a+old.e-matrix.e)/matrix.a:(n*old.d+old.f-matrix.f)/matrix.d).join(' ')+' ');
    }
    const drift=Math.min(240,window.innerWidth*.19);
    const shiftX=(d,offset)=>d.replace(/([MHC])([^MHC]+)/g,(_,command,coordinates)=>command+coordinates.trim().split(/\s+/).map(Number).map((n,i)=>command==='H'||i%2===0?n+offset:n).join(' ')+' ');
    const target=shiftX(accessRoute,drift/matrix.a);
    // Match points by distance along the actual strand rather than by the
    // number of original Bezier commands, so its changing loops flow smoothly.
    const resample=d=>{
      path.setAttribute('d',d);
      const geometry=threadCore(d,path),count=160,step=geometry.length/count;
      const at=s=>path.getPointAtLength(geometry.prefix+Math.max(0,Math.min(geometry.length,s)));
      const tangent=s=>{
        const a=at(s-step*.08),b=at(s+step*.08),length=Math.hypot(b.x-a.x,b.y-a.y)||1;
        return {x:(b.x-a.x)/length,y:(b.y-a.y)/length};
      };
      let result=d.slice(0,d.indexOf('C'));
      for(let i=0;i<count;i++){
        const a=at(i*step),b=at((i+1)*step),ta=tangent(i*step),tb=tangent((i+1)*step);
        result+='C'+[a.x+ta.x*step/3,a.y+ta.y*step/3,b.x-tb.x*step/3,b.y-tb.y*step/3,b.x,b.y].map(n=>n.toFixed(3)).join(' ')+' ';
      }
      return result+d.slice(d.lastIndexOf('H'));
    };
    const start=resample(from).match(/-?\d+(?:\.\d+)?/g).map(Number),endPath=resample(target),end=endPath.match(/-?\d+(?:\.\d+)?/g).map(Number);
    deck.classList.add('pitch-access-morphing');
    const settle=()=>{
      if(!svg.isConnected)return;
      svg.style.transform='none';path.style.opacity='';dotted.style.opacity='';
      path.setAttribute('d',accessRoute);dotted.setAttribute('d',accessRoute);blue.setAttribute('d',accessRoute);
      deck.classList.remove('pitch-access-morphing');
      deck.classList.add('pitch-access-text');
      // Paint the statement before preparing the crossing geometry.
      accessBridgeFrame=requestAnimationFrame(()=>{
        accessBridgeFrame=requestAnimationFrame(()=>{
          if(svg.isConnected)animateThread('intro-accessibility',{path:accessRoute,x:435.4,y:160,settled:true});
        });
      });
    };
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){settle();return;}
    const paint=progress=>{
      let i=0;
      path.setAttribute('d',endPath.replace(/-?\d+(?:\.\d+)?/g,()=>{const n=i++;return (start[n]+(end[n]-start[n])*progress).toFixed(3);}));
      svg.style.transform=`translateX(${-drift*progress}px)`;
    };
    const started=performance.now();paint(0);
    function frame(now){
      if(!svg.isConnected)return;
      const t=Math.min(1,(now-started)/1900),eased=t*t*(3-2*t);paint(eased);
      if(t>=.80)deck.classList.add('pitch-access-text');
      if(t<1)threadFrame=requestAnimationFrame(frame);else settle();
    }
    threadFrame=requestAnimationFrame(frame);
  }
  function animateThread(route, previous) {
    const svg = deck.querySelector('.pitch-thread');
    const path = svg.querySelector('[data-thread-path]');
    const dot = svg.querySelector('[data-thread-dot]');
    const halo = svg.querySelector('[data-thread-halo]');
    const badge = deck.querySelector('.pitch-thread-badge');
    let from = previous?.path || threadStart;
    // Preserve the old path in screen space while moving into the taller canvas.
    if(previous?.matrix) {
      const old=previous.matrix, next=svg.getScreenCTM();
      const x=n=>(n*old.a+old.e-next.e)/next.a;
      const y=n=>(n*old.d+old.f-next.f)/next.d;
      from=from.replace(/([MHC])([^MHC]+)/g,(_,command,coordinates)=>{
        const values=coordinates.trim().split(/\s+/).map(Number);
        return command+values.map((n,i)=>command==='H'?x(n):i%2?y(n):x(n)).join(' ')+' ';
      });
      previous={...previous,x:x(previous.x),y:y(previous.y)};
    }
    let to = route === 'intro-process' ? processPaths[processStage] : route === 'intro-brain' ? threadLater : route === 'intro-history' ? threadLater : route==='intro-accessibility'?accessRoute:route==='intro-approach'?approachRoute:route==='intro-market'?marketRoute:route==='intro-opportunity'?hypothesisRoute:route==='intro-thesis'?observationRoute:route==='intro-scenario'?experimentRoute:threadStart;
    const count=d=>(d.match(/C/g)||[]).length;
    const padEnd=(d,total)=>{
      const curves=[...d.matchAll(/C([^CH]+)/g)],last=curves.at(-1)[1].trim().split(/\s+/).map(Number).slice(4);
      return d.replace(/H[^H]*$/,('C'+[...last,...last,...last].join(' ')+' ').repeat(total-curves.length)+'$&');
    };
    let entryPinned=false;
    if(route==='intro-process' && previous?.matrix && count(from)===17) {
      const curves=[...from.matchAll(/C([^CH]+)/g)].map(m=>m[1].trim().split(/\s+/).map(Number));
      let start=[Number(from.match(/^M[^H]+H(-?[\d.]+)/)[1]),Number(from.match(/^M-?[\d.]+\s+(-?[\d.]+)/)[1])];
      let best={distance:Infinity};
      curves.forEach((v,index)=>{
        for(let j=0;j<=300;j++) {
          const t=j/300,u=1-t;
          const point=start.map((n,axis)=>u*u*u*n+3*u*u*t*v[axis]+3*u*t*t*v[axis+2]+t*t*t*v[axis+4]);
          const distance=(point[0]-previous.x)**2+(point[1]-previous.y)**2;
          if(distance<best.distance) best={distance,index,t,start:[...start]};
        }
        start=v.slice(4);
      });
      const parts=splitCubic(best.start,curves[best.index],best.t);
      const before=[...curves.slice(0,best.index),parts[0]],after=[parts[1],...curves.slice(best.index+1)];
      const pinned=parts[0].slice(4);
      while(before.length<processStops[0]) before.push([...pinned,...pinned,...pinned]);
      const final=after.at(-1).slice(4);
      while(before.length+after.length<count(to)) after.push([...final,...final,...final]);
      from=from.slice(0,from.indexOf('C'))+before.concat(after).map(v=>'C'+v.join(' ')).join(' ')+from.slice(from.lastIndexOf('H'));
      entryPinned=true;
    }
    if(count(from)<count(to)) from=padEnd(from,count(to));
    if(count(to)<count(from)) to=padEnd(to,count(from));
    const startNumbers = from.match(/-?\d+(?:\.\d+)?/g).map(Number);
    const endNumbers = to.match(/-?\d+(?:\.\d+)?/g).map(Number);
    function nearestFraction(d, point) {
      path.setAttribute('d',d);
      const coreGeometry=threadCore(d,path);
      const coreLength = coreGeometry.length;
      let best = 0, distance = Infinity;
      const samples=route==='intro-accessibility'?80:1400;
      const measure=fraction=>{
        const candidate=path.getPointAtLength(coreGeometry.prefix+coreLength*fraction);
        const delta=(candidate.x-point.x)**2+(candidate.y-point.y)**2;
        if(delta<distance){distance=delta;best=fraction;}
      };
      for(let i=0;i<=samples;i++)measure(i/samples);
      if(route==='intro-accessibility'){
        const low=Math.max(0,best-1/samples),high=Math.min(1,best+1/samples);
        for(let i=0;i<=60;i++)measure(low+(high-low)*i/60);
      }
      return best;
    }
    const fromFraction = nearestFraction(from,{x:previous?.x ?? 500,y:previous?.y ?? 148});
    const toFraction = nearestFraction(to,route==='intro-process'?{x:650,y:210}:route==='intro-brain'?{x:540,y:145}:route==='intro-history'?{x:580,y:129}:route==='intro-accessibility'?{x:440,y:165}:route==='intro-approach'?{x:230,y:228}:{x:500,y:148});
    const processPoint = (d,position) => {
      const curves=[...d.matchAll(/C([^CH]+)/g)].map(match=>match[1].trim().split(/\s+/).map(Number));
      const index=Math.min(curves.length-1,Math.floor(position));
      const t=position>=curves.length?1:position-index;
      const origin=d.match(/^M[^H]+H(-?[\d.]+)/);
      const start=index?curves[index-1].slice(4):[Number(origin[1]),Number(d.match(/^M-?[\d.]+\s+(-?[\d.]+)/)[1])];
      const c=curves[index],u=1-t;
      return {x:u*u*u*start[0]+3*u*u*t*c[0]+3*u*t*t*c[2]+t*t*t*c[4],y:u*u*u*start[1]+3*u*u*t*c[1]+3*u*t*t*c[3]+t*t*t*c[5]};
    };
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let processFrom=previous?.processStep!==undefined ? processStops[previous.processStep] : processStops[0];
    if(route==='intro-process' && previous && previous.processStep===undefined && !entryPinned) {
      let best=Infinity;
      for(let i=0;i<=(from.match(/C/g)||[]).length*100;i++) {
        const point=processPoint(from,i/100), distance=(point.x-previous.x)**2+(point.y-previous.y)**2;
        if(distance<best) {best=distance;processFrom=i/100;}
      }
    }
    const cameraStart={x:Number(svg.dataset.panX||0),y:Number(svg.dataset.panY||0)};
    let currentPoint;
    positionThreadBadge = () => {
      if (!currentPoint || !svg.isConnected) return;
      const matrix = svg.getScreenCTM();
      if (!matrix) return;
      const locate = (element, point, offsetY=0) => {
        const origin = svg.createSVGPoint();origin.x=point.x;origin.y=point.y;
        const screen = origin.matrixTransform(matrix);
        const bounds = element.parentElement.getBoundingClientRect();
        element.style.left = `${screen.x-bounds.left}px`;
        element.style.top = `${screen.y-bounds.top+offsetY}px`;
      };
      if (badge) locate(badge,currentPoint,-25);
      deck.querySelectorAll('[data-thread-x]').forEach(role=>locate(role,{x:Number(role.dataset.threadX),y:Number(role.dataset.threadY)}));
      if (route === 'intro-process') {
        deck.querySelectorAll('[data-process-step]').forEach(button=>locate(button,processPoint(path.getAttribute('d'),processStops[Number(button.dataset.processStep)])));
        const bracket=deck.querySelector('[data-cycle-bracket]');
        locate(bracket,{x:900,y:390});
        bracket.style.width='340px';
        bracket.style.setProperty('--cycle-span',(260*Math.abs(matrix.a))+'px');
        const below=deck.querySelector('[data-cycle-bracket-below]');
        locate(below,{x:900,y:525});
        below.style.width='340px';
        below.style.setProperty('--cycle-span',(260*Math.abs(matrix.a))+'px');

      }
    };
    const paint = (progress, markerProgress=progress) => {
      let number = 0;
      path.setAttribute('d', to.replace(/-?\d+(?:\.\d+)?/g, () => {
        const n = number++;
        return (startNumbers[n] + (endNumbers[n] - startNumbers[n]) * progress).toFixed(3);
      }));
      if(route==='intro-process') {
        const bounds=svg.getBoundingClientRect(),scale=Math.min(bounds.width/1000,bounds.height/620);
        const destination=processStage===3?{x:-350*scale,y:0}:{x:0,y:0};
        const x=cameraStart.x+(destination.x-cameraStart.x)*progress,y=cameraStart.y+(destination.y-cameraStart.y)*progress;
        svg.style.transform=`translate(${x}px,${y}px)`;
        svg.dataset.panX=x;svg.dataset.panY=y;
      }
      if(route==='intro-accessibility') svg.querySelectorAll('[data-access-bridge],[data-access-blue]').forEach(bridge=>bridge.setAttribute('d',path.getAttribute('d')));
      const geometry=threadCore(path.getAttribute('d'),path);
      const coreLength = geometry.length;
      const fraction = fromFraction + (toFraction-fromFraction)*markerProgress;
      currentPoint = route==='intro-process' ? processPoint(path.getAttribute('d'),processFrom+(processStops[processStage]-processFrom)*markerProgress) : path.getPointAtLength(geometry.prefix + coreLength*fraction);
      [dot, halo].forEach(circle => {
        circle.setAttribute('cx', currentPoint.x);
        circle.setAttribute('cy', currentPoint.y);
      });
      positionThreadBadge();
    };
    const arrive = () => {
      if (!svg.isConnected || route==='intro') return;
      deck.classList.add('pitch-arrived');
      if(route==='intro-accessibility') {
        deck.classList.add('pitch-access-text');
        const reveal=svg.querySelector('[data-access-bridge-reveal]');
        const d=path.getAttribute('d'),start=nearestFraction(d,{x:440,y:165}),end=nearestFraction(d,{x:685,y:160}),geometry=threadCore(d,path);
        const startPoint=path.getPointAtLength(geometry.prefix+geometry.length*start),endPoint=path.getPointAtLength(geometry.prefix+geometry.length*end);
        const bridgeWidth=endPoint.x-startPoint.x;
        svg.querySelectorAll('[data-access-gap-region],[data-access-dotted-region]').forEach(region=>{region.setAttribute('x',startPoint.x);region.setAttribute('width',bridgeWidth);});
        reveal.setAttribute('x',startPoint.x);
        [dot,halo].forEach(circle=>{circle.setAttribute('cx',startPoint.x);circle.setAttribute('cy',startPoint.y);});
        const passDot=()=>{
          if(!svg.isConnected)return;
          const move=progress=>{
            const p=path.getPointAtLength(geometry.prefix+geometry.length*(start+(end-start)*progress));
            [dot,halo].forEach(circle=>{circle.setAttribute('cx',p.x);circle.setAttribute('cy',p.y);});
            dot.setAttribute('fill','#2450ff');
          };
          if(reduced){move(1);deck.classList.add('pitch-access-passed');return;}
          const begun=performance.now();
          function passFrame(now){
            if(!svg.isConnected)return;
            const t=Math.min(1,(now-begun)/1050);move(t*t*(3-2*t));
            if(t<1)accessBridgeFrame=requestAnimationFrame(passFrame);else deck.classList.add('pitch-access-passed');
          }
          accessBridgeFrame=requestAnimationFrame(passFrame);
        };
        const connect=()=>{
          if(!svg.isConnected)return;
          if(reduced){reveal.setAttribute('width',bridgeWidth);deck.classList.add('pitch-access-connected');passDot();return;}
          const begun=performance.now();
          function fillBridge(now){
            if(!svg.isConnected)return;
            const t=Math.min(1,(now-begun)/750),eased=t*t*(3-2*t);
            reveal.setAttribute('width',String(bridgeWidth*eased));
            if(t<1)accessBridgeFrame=requestAnimationFrame(fillBridge);
            else{deck.classList.add('pitch-access-connected');accessBridgeTimer=setTimeout(passDot,450);}
          }
          accessBridgeFrame=requestAnimationFrame(fillBridge);
        };
        clearTimeout(accessBridgeTimer);
        const showDotted=()=>{
          if(!svg.isConnected)return;
          deck.classList.add('pitch-access-broken');
          if(reduced)connect();else accessBridgeTimer=setTimeout(connect,900);
        };
        if(reduced)showDotted();else accessBridgeTimer=setTimeout(showDotted,350);
      }
      if(route==='intro-process' && processStage===2) {
        clearTimeout(toolPopTimer);
        toolPopTimer=setTimeout(()=>{
          if(svg.isConnected && processStage===2) deck.classList.add('pitch-tools-ready');
        },reduced?0:230);
      }
      if(route==='intro-process' && processStage===3) deck.classList.add('pitch-cycle-travel');
      if(route==='intro-process') deck.querySelectorAll('[data-process-step]').forEach(button=>{
        if(Number(button.dataset.processStep)<=processStage) {button.classList.add('is-discovered');button.disabled=false;}
      });
    };
    if (reduced || previous?.settled || (!previous && route === 'intro')) {paint(1);arrive();return;}
    const started = performance.now() + (route === 'intro-process' && previous && !deck?.classList.contains('pitch-process-moving') ? 100 : 0);
    paint(0);
    function frame(now) {
      const t = Math.max(0, Math.min(1, (now - started) / (route === 'intro-process' ? processStage===3?3600:1900 : 2400)));
      const eased = t * t * (3 - 2 * t);
      if(route==='intro-process' && processStage===3) {
        const ease=value=>{const v=Math.max(0,Math.min(1,value));return v*v*(3-2*v);};
        // Reveal and settle the strand first. The marker waits at Prototypes,
        // then runs through the fully formed loops after a brief visual pause.
        deck.classList.toggle('pitch-cycle-travel',t>=.4);
        paint(ease(t/.32),ease((t-.4)/.6));
      } else paint(eased);
      if (t < 1 && svg.isConnected) threadFrame = requestAnimationFrame(frame);
      else if (t === 1) arrive();
    }
    threadFrame = requestAnimationFrame(frame);
  }
  document.addEventListener('click',event=>{
    const logo=event.target.closest('.web-brand');
    if(!logo)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    location.hash='intro-scenario';
  },true);
  window.addEventListener('resize', () => {alignApproachThread();positionThreadBadge();});
  function start() {
    location.hash = 'home';
  }
  function sync() {
    const hash = location.hash.slice(1);
    const index = steps.indexOf(hash);
    if (!hash || index >= 0) show(Math.max(0, index), !!deck);
    else if (deck) {
      cancelAnimationFrame(threadFrame);
      clearTimeout(accessBridgeTimer);
      cancelAnimationFrame(accessBridgeFrame);
      clearTimeout(computerPowerTimer);
      clearTimeout(spacebarReleaseTimer);
      clearTimeout(toolPopTimer);
      positionThreadBadge = () => {};
      deck.remove();
      deck = null;
      document.documentElement.classList.remove('presenting');
      document.title = originalTitle;
      if (hash === 'home') {
        go('home');
        window.scrollTo(0, 0);
        const search = document.querySelector('.unified-search');
        if (search) search.focus({preventScroll:true});
      }
    }
  }
  document.addEventListener('keydown', event => {
    if (!deck || event.altKey || event.ctrlKey || event.metaKey || event.target.matches('input,textarea,[contenteditable]')) return;
    const current = Math.max(0, steps.indexOf(location.hash.slice(1)));
    if ((event.code === 'Space' || event.key === ' ') && steps[current] === 'intro-history' && !event.target.closest('[data-pitch],a')) {
      event.preventDefault();
      if (!event.repeat) pressComputerSpacebar(true);
      return;
    }
    if (event.key === 'ArrowRight' || (event.key === ' ' && !event.target.closest('button,a'))) {
      event.preventDefault();
      navigatePresentation(1);
    } else if (event.key === 'ArrowLeft' && current > 0) {
      event.preventDefault();
      navigatePresentation(-1);
    }
  });
  window.addEventListener('hashchange', sync);
  sync();
})();
