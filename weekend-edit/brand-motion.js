function airbnbThinkingMark(){
  const route='M40 8 C33 8 30 18 26 26 L9 63 C3 77 16 85 28 76 C34 72 37 66 40 61 C43 66 46 72 52 76 C64 85 77 77 71 63 L54 26 C50 18 47 8 40 8 Z';
  return `<svg class="airbnb-thinking-mark" viewBox="0 0 80 88" fill="none" aria-hidden="true"><path class="belo-outline" d="${route}"/><path class="belo-light-trail" d="${route}" pathLength="100"/><path class="belo-light" d="${route}" pathLength="100"/><path class="belo-imagine-loop" d="M40 61 C34 53 28 46 30 38 C32 28 48 28 50 38 C52 46 46 53 40 61 C40 61 40 61 40 61 Z"/></svg>`;
}

function airbnbImagineMark(){
 return `<svg class="icon belo-action-mark" viewBox="0 0 80 88" fill="none" aria-hidden="true"><path d="M40 8 C33 8 30 18 26 26 L9 63 C3 77 16 85 28 76 C34 72 37 66 40 61 C43 66 46 72 52 76 C64 85 77 77 71 63 L54 26 C50 18 47 8 40 8 Z"/><path d="M40 59 C37 46 37 46 25 43 C37 40 37 40 40 27 C43 40 43 40 55 43 C43 46 43 46 40 59 Z"/></svg>`;
}
