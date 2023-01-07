// ---------first humberger --------------------
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

// -----------..................--------------The dynamic part of the work section begins-----------
const projects = [
  {
    name: 'Tonic',
    title: 'Tonic',
    technologiesModal: ['CANOPY', 'BackendDevid', '2015'],
    description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image mobile': './image/Snapshoot Portfolio1 (1).png',
    'image desktop': './image/descktop/Snapshoot Portfolio.svg',
    technologies: ['html', 'CSS', 'javaScript'],
    mytecnoskill: ['github', 'ruby', 'bootstrap'],
    'link to live version':
          '',
    'link to source':
          '',
    id: 0,
  },
  {
    name: 'Multi-Post Stories',
    title: 'Multi-Post Stories',
    technologiesModal: ['CANOPY', 'BackendDevid', '2015'],
    description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image mobile': './image/Snapshoot Portfolio1 (2).png',
    'image desktop': './image/descktop/Snapshoot Portfolio02.png',
    technologies: ['html', 'CSS', 'javaScript'],
    mytecnoskill: ['github', 'ruby', 'bootstrap'],
    'link to live version':
          '',
    'link to source':
          '',
    id: 1,
  },
  {
    name: 'Tonic',
    title: 'Facebook 360',
    technologiesModal: ['CANOPY', 'BackendDevid', '2015'],
    description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image mobile': './image/Snapshoot Portfolio1 (3).png',
    'image desktop': './image/descktop/Snapshoot Portfolio.png',
    technologies: ['html', 'CSS', 'javaScript'],
    mytecnoskill: ['github', 'ruby', 'bootstrap'],
    'link to live version':
          '',
    'link to source':
          '',
    id: 2,
  },
  {
    name: 'Multi-Post Stories',
    title: 'Uber Navigation',
    technologiesModal: ['CANOPY', 'BackendDevid', '2015'],
    description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image mobile': './image/Snapshoot Portfolio1 (4).png',
    'image desktop': './image/descktop/Snapshoot Portfolio3.png',
    technologies: ['html', 'CSS', 'javaScript'],
    mytecnoskill: ['github', 'ruby', 'bootstrap'],
    'link to live version':
          '',
    'link to source':
          '',
    id: 3,
  },
];

projects.forEach((element, k) => {
  const mywork = document.querySelector('.gridcontainer');
  const projectpopupCard = document.createElement('div');
  if (k === 1) {
    projectpopupCard.setAttribute('id', 'reverse');
  } else if (k === 3) {
    projectpopupCard.setAttribute('id', 'reverse');
  }
  const cardDetails = `<section class="cardBack">
          <div class="card_02">  <a  href="#"><img src="${projects[k]['image mobile']}" alt="img mobile"></a>
          </div>
          <div class="card_02_desc">  <a  href="#"><img class="card_02_image" src="${projects[k]['image desktop']}" alt="image desktop"></a>
          </div>
          <div class="projectdesc02">
              <div  class="tonic_02"><h2>${projects[k].name}</h2>
              </div>
              <div class="work_main">
                  <ul class="works">
                        <li class="canopy"> CANOPY</li>
                        <li class="canopy-desck"> CANOPY</li>
                        <li class="BackendDev" id="BackendDevid">BackendDev</li>
                        <li class="num"> 2015 </li>
                  </ul>
              </div>
              <div class="section1">
                              <p > A daily selection of privately personalized reads; no accounts or sign-ups required </p>
              </div>
              <div class="section1-desc">
                              
              </div>
              <div class="skil">
                      <ul class="program1" >
                            <li class="Program-skilhtml">html</li>
                            <li class="Program-skilhtml">css</li>
                            <li class="skiljava">javascript</li>
                      </ul>
              </div>
              <div class="buttonsee">
                  <button id="${projects[k].id}" class="button1"> See Project</button>
              </div>
          </div>
        </section>`;
  projectpopupCard.innerHTML += cardDetails;
  mywork.append(projectpopupCard);
});

// -------------------- button  eventListener------------------------//
const allElement = document.querySelector('#Portfolio'); // for both desktop and mobile

function creatpopcard(event) {
  const newpopup = document.createElement('div');
  newpopup.classList.add('popup-displaycard');
  // document.body.append(newpopup);
  mainheader.className = 'hide';

  firstcardBack.appendChild(newpopup);

  allElement.classList.add('newmenuback');

  const header = document.createElement('div');
  header.classList.add('pop-headerDisplay');

  const heading = document.createElement('h2');
  heading.classList.add('tonicpop');

  const tecnoprogrammingtype = document.createElement('ul');// teno
  tecnoprogrammingtype.classList.add('workspop');

  const proimage = document.createElement('img');
  proimage.classList.add('imgPopup');

  const proimagedeskpop = document.createElement('img');// new image desk
  proimagedeskpop.classList.add('imgPopupdesc');

  const positionpart = document.createElement('div');
  positionpart.classList.add('position-descr-dv');

  const prodescription = document.createElement('p');
  prodescription.classList.add('section1');

  const languagepart = document.createElement('div');
  languagepart.classList.add('langbtn-div');

  const mydataList = document.createElement('div');
  mydataList.classList.add('langbtn-div-mydatalist');

  const programmingtype = document.createElement('dv');
  programmingtype.classList.add('program1');

  const projectbtncontainer = document.createElement('div');

  const closeButton = document.createElement('button');
  closeButton.classList.add('popup-closeButton');
  closeButton.id = 'close-button';

  // append elements inside the div

  newpopup.append(header);
  newpopup.append(heading);
  newpopup.append(closeButton);
  newpopup.append(tecnoprogrammingtype);
  newpopup.append(proimage);
  newpopup.append(proimagedeskpop);

  newpopup.append(positionpart);
  newpopup.append(prodescription);

  newpopup.append(languagepart);

  newpopup.append(mydataList);

  newpopup.append(programmingtype);

  newpopup.append(projectbtncontainer);

  header.append(heading);
  header.append(closeButton);
  const btnseelive = document.createElement('a');
  const btnseesource = document.createElement('a');

  projectbtncontainer.append(btnseelive);
  projectbtncontainer.append(btnseesource);

  positionpart.append(prodescription);
  positionpart.append(languagepart);

  positionpart.append(programmingtype);
  positionpart.append(mydataList);
  positionpart.append(projectbtncontainer);

  languagepart.append(programmingtype);
  languagepart.append(mydataList);
  languagepart.append(projectbtncontainer);

  const projectnewId = parseInt(event.target.id, 20);
  for (let i = 0; i < projects[projectnewId].technologiesModal.length; i += 1) {
    const technolist = document.createElement('li');
    technolist.className = 'canopypop';
    technolist.textContent = projects[projectnewId].technologiesModal[i];
    tecnoprogrammingtype.appendChild(technolist);
  }

  heading.textContent = projects[projectnewId].name;
  proimage.src = projects[projectnewId]['image mobile'];
  proimagedeskpop.src = projects[projectnewId]['image desktop'];

  prodescription.textContent = projects[projectnewId].description;
  projectbtncontainer.classList.add('btncont-dv');

  for (let i = 0; i < projects[projectnewId].technologies.length; i += 1) {
    const projectLi = document.createElement('li');
    projectLi.className = 'Program-skilhtml';
    projectLi.textContent = projects[projectnewId].technologies[i];
    programmingtype.appendChild(projectLi);
  }

  for (let i = 0; i < projects[projectnewId].technologies.length; i += 1) {
    const mydataprojectLi = document.createElement('ul');
    mydataprojectLi.className = 'Program-skilhtm-deskpop';
    mydataprojectLi.textContent = projects[projectnewId].mytecnoskill[i];
    mydataList.appendChild(mydataprojectLi);
  }

  btnseelive.href = projects[projectnewId]['link to live version'];
  btnseelive.classList.add('seelive-pp');
  btnseelive.target = '_blank';
  btnseelive.textContent = 'See Live';
  btnseesource.href = projects[projectnewId]['link to source'];
  btnseesource.classList.add('seesource-pp');
  btnseesource.target = '_blank';
  btnseesource.textContent = 'See Source';

  function closeButtonFunction() {
    allElement.classList.remove('newmenuback');
    newpopup.remove();
    if (mainheader.className === 'hide') {
      mainheader.className = 'header';
    }
  }
  const clickCloseButton = document.getElementById('close-button');
  clickCloseButton.addEventListener('click', closeButtonFunction);
}
const buttonsee = document.querySelectorAll('.button1');
buttonsee.forEach((btn) => {
  btn.addEventListener('click', creatpopcard);
});
