// function hamburger() {
// //   const hamburgerMenu = document.getElementsByClassName('nav-icon');
// //   const hamburgerMenuExit = document.getElementsByClassName('close');
// //   const hamburgerMenuItems = document.getElementsByClassName('hamburger-list');

//   hamburgerMenu[0].addEventListener('click', () => {
//     document.getElementsByClassName('menu')[0].style.display = 'flex';
//   });

//   hamburgerMenuExit[0].addEventListener('click', () => {
//     document.getElementsByClassName('menu')[0].style.display = 'none';
//   });

//   [...hamburgerMenuItems].forEach((element) => {
//     element.addEventListener('click', () => {
//       document.getElementsByClassName('menu')[0].style.display = 'none';
//     });
//   });
// }
// hamburger();

function menu() {
  const hamburgerMenu = document.getElementsByClassName('hamburger-menu');
  const hamburgerClose = document.getElementsByClassName('close');
  const menuList = document.getElementsByClassName('menu-li');
  const viewMore = document.getElementsByClassName('btn-more');

  hamburgerMenu[0].addEventListener('click', () => {
    document.getElementsByClassName('menu-ul')[0].style.display = 'flex';
  });

  hamburgerClose[0].addEventListener('click', () => {
    document.getElementsByClassName('menu-ul')[0].style.display = 'none';
  });

  [...menuList].forEach((element) => {
    element.addEventListener('click', () => {
      document.getElementsByClassName('menu-ul')[0].style.display = 'none';
    });

    viewMore[0].addEventListener('click', () => {
      document.getElementsByClassName('bottom')[0].style.display = 'flex';
    });
  });
}

menu();

const halls = [
  {
    name: 'Aidan',
    designation: 'Software',
    description: 'Hello there am trying',
    Image: './images/second-image.jpeg',
  },
  {
    name: 'Aidan',
    designation: 'Software',
    description: 'Hello there am trying',
    Image: './images/sixth-hall.jpeg',
  },
  {
    name: 'Aidan',
    designation: 'Software',
    description: 'Hello there am trying',
    Image: './images/fourt-hall.jpeg',
  },
  {
    name: 'Aidan',
    designation: 'Software',
    description: 'Hello there am trying',
    Image: './images/fifth-hall.jpeg',
  },
  {
    name: 'Aidan',
    designation: 'Software',
    description: 'Hello there am trying',
    Image: './images/fifth.jpeg',
  },
  {
    name: 'Aidan',
    designation: 'Software',
    description: 'Hello there am trying',
    Image: './images/fourt-hall.jpeg',
  },
];

const speakersDiv = document.getElementById('speakers');
let item = '';
halls.map((hall) => {
  item += `
<div class="feature-item">
<div class="feature-img">
    <img src="${hall.Image}" alt="image one">
</div>
<div class="feature-content">
    <ul class="top-feature">
        <li class="li-feature-item color-b">${hall.name}</li>
        <li class="li-feature-item color-o">${hall.designation}</li>
    </ul>
    <ul class="top-feature">
        <li class="li-feature-item color-b">${hall.description} </li>
    </ul>
</div>
</div>
 `;
  return item;
});
speakersDiv.innerHTML = item;

// const hamburgericon = document.getElementById('hmbgbtn');
// const closebtn = document.getElementById('closebtn');
// const navbar = document.querySelector('.navbar');
const morebtn = document.getElementById('btn-more');
const lessbtn = document.getElementById('btn-less');
const partners = document.querySelector('.bottom');
const footer = document.getElementById('footer');

morebtn.addEventListener('click', () => {
  partners.classList.toggle('show');
  morebtn.style.display = 'none';
  footer.style.display = 'flex';
  lessbtn.style.display = 'flex';
});

lessbtn.addEventListener('click', () => {
  partners.classList.toggle('hide');
  morebtn.style.display = 'none';
  footer.style.display = 'none';
  lessbtn.style.display = 'none';
});