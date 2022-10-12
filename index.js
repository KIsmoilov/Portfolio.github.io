// @import './projects';

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('popupMenu')) {
    menu.classList.remove('popupMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('popupMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});


// let popupWindow = {
//   name: 'Keeping track of hundreds of components',
//   description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
//   linkLive: 'See live',
//   linkSource: 'See source',
// }

const projects = [];

const projectOne = {
  id: 'projectOne',
  img: './images/popup-image.svg',
  name: 'Keeping track of hundreds of components',
  tech: ['Ruby on rails', 'Css', 'JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectOne);

const projectTwo = {
  id: 'projectTwo',
  img: './images/popup-image.svg',
  name: 'Keeping track of hundreds of components',
  tech: ['Ruby on rails', 'Css', 'JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectTwo);

const projectThree = {
  id: 'projectThree',
  img: './images/popup-image.svg',
  name: 'Keeping track of hundreds of components',
  tech: ['Ruby on rails', 'Css', 'JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectThree);

const projectFour = {
  id: 'projectFour',
  img: './images/popup-image.svg',
  name: 'Keeping track of hundreds of components',
  tech: ['Ruby on rails', 'Css', 'JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectFour);

const projectFive = {
  id: 'projectFive',
  img: './images/popup-image.svg',
  name: 'Keeping track of hundreds of components',
  tech: ['Ruby on rails', 'Css', 'JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectFive);

const projectSix = {
  id: 'projectSix',
  img: './images/popup-image.svg',
  name: 'Keeping track of hundreds of components',
  tech: ['Ruby on rails', 'Css', 'JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectSix);

function projectClick(event) {
  const clickedId = event.target.id;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === clickedId) {
      const body = document.querySelector('body');
      const popupSection = document.createElement('section');
      popupSection.className = 'popupSection';
      body.appendChild(popupSection);

      const imageContainer = document.createElement('div');
      imageContainer.className = 'popupImage';
      popupSection.appendChild(imageContainer);

      const closeIcon = document.createElement('button');
      closeIcon.innerHTML = '<button onclick="closeWindow()" id="closeIcon" ><img src="images/closed-icon.svg" alt="CloseIcon"/></i></button>';
      popupSection.appendChild(closeIcon);

      const img = document.createElement('img');
      img.setAttribute('src', projects[i].img);
      img.setAttribute('width','300');
      img.setAttribute('height','220');
      img.setAttribute('alt','Project image');
      imageContainer.appendChild(img);

      const titleContainer = document.createElement('div');
      popupSection.appendChild(titleContainer);

      const h3 = document.createElement('h3');
      h3.innerHTML = projects[i].name;
      titleContainer.appendChild(h3);

      const techContainer = document.createElement('div');
      popupSection.appendChild(techContainer);

      const techList = document.createElement('ul');
      techContainer.appendChild(techList);

      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < projects[i].tech.length; j++) {
        const list = document.createElement('li');
        list.innerHTML = projects[i].tech[j];
        techList.appendChild(list);
      }

      const popupText = document.createElement('div');
      popupSection.appendChild(popupText);

      const p = document.createElement('p');
      p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea';
      popupText.appendChild(p);

      const link = document.createElement('div');
      popupSection.appendChild(link);

      const seeLive = document.createElement('button');
      seeLive.innerHTML = '<button type="button" class="btn">See Live</button ';
      link.appendChild(seeLive);

      const seeSource = document.createElement('button');
      seeSource.innerHTML = '<button type="button" class="btn">See Source</button ';
      link.appendChild(seeSource);

    }
  }
}

function closeWindow() { 
  const iconClose = document.getElementsByClassName('popupSection');
  iconClose[0].style.display = 'none';
  iconClose[0].remove();
}


// const closeSection = document.getElementById('closeIcon');
// if (closeSection !== null) {
//   closeSection.addEventListener('click', closeWindow);
// }

