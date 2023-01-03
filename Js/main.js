const clickhum = document.getElementById('logoburger');
const clickclose = document.getElementById('menubackpop');
const firstcardBack = document.getElementById('firstcardBackid');
const mainheader = document.getElementById('mylogo-section');

clickhum.addEventListener('click', () => {
  if (firstcardBack.className === 'firstcardBack') {
    mainheader.className = 'hide';
    firstcardBack.className = 'newmenuback';
    clickclose.className = 'menuback';
  } else {
    mainheader.className = 'header';
  }
});

clickclose.addEventListener('click', () => {
  if (clickclose.className === 'menu-back') {
    clickclose.className = 'hide';
    firstcardBack.className = 'firstcardBack';
  } else {
    firstcardBack.className = 'firstcardBack';
    clickclose.className = 'hide';
    mainheader.className = 'header';
  }
});