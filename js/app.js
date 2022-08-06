const ul = document.querySelector('.menu-ul');
const hamburger = document.querySelector('.hamburger');
const div = document.createElement('div');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  div.classList.add('overlay');
  // hamburger.style.display = 'block';
  close.style.display = 'block';
  div.appendChild(ul);
  document.body.appendChild(div);
  close.addEventListener('click', () => {
    div.style.display = 'none';
  });
  ul.forEach((n) => n.addEventListener('click', () => {
    div.style.display = 'none';
  }));
});

const halls = [
  {
    name: 'Mtoni Kijichi',
    designation: 'Dar Es Salaam',
    description: 'A five stars hall which can accomodate more than 500 participants at once',
    Image: './images/second-image.jpeg',
  },
  {
    name: 'Mbezi Beach',
    designation: 'Dar Es Salaam',
    description: 'A five stars hall which can accomodate more than 500 participants at once',
    Image: './images/sixth-hall.jpeg',
  },
  {
    name: 'Chimwaga Hall',
    designation: 'Dodoma',
    description: 'A five stars hall which can accomodate more than 1500 participants at once',
    Image: './images/fourt-hall.jpeg',
  },
  {
    name: 'Magu Hall',
    designation: 'Chato',
    description: 'A five stars hall with which can accomodate more than 500 participants',
    Image: './images/fifth-hall.jpeg',
  },
  {
    name: 'Nyegezi Social',
    designation: 'Mwanza',
    description: 'A five stars hall which can accomodate more than 2000 participants at once',
    Image: './images/fifth.jpeg',
  },
  {
    name: 'Side Resolt',
    designation: 'Morogoro',
    description: 'A five stars hall which can accomodate more than 500 participants at once',
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
    <ul class="top-left-feature">
        <li class="li-feature-name color-b">${hall.name}</li>
        <li class="li-feature-item-desc color-o">${hall.designation}</li>
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

const morebtn = document.getElementById('btn-more');
const lessbtn = document.getElementById('btn-less');
const partners = document.querySelector('.bottom');

morebtn.addEventListener('click', () => {
  partners.classList.toggle('show');
  morebtn.style.display = 'none';
  document.getElementsByClassName('bottom')[0].style.display = 'flex';
});

lessbtn.addEventListener('click', () => {
  partners.classList.toggle('hide');
  morebtn.style.display = 'flex';
  document.getElementsByClassName('bottom')[0].style.display = 'none';
});
