'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

//  SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//THESE TWO ARE THE MOST USEFUL
//selects just the first header
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//searches for the id in the HTML
document.getElementById('section--1');

//gets everything that is a button in HTML
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//gets everything that has 'btn' written in class
document.getElementsByClassName('btn');

// CREATING AND INSERTING ELEMENTS

//creates DOM element and stores it in message
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

//the message can't be in two places at once, so it chooses the last
// header.prepend(message);
header.append(message);

//a way to copy the element so you can have the same message on the top and bottom of the page:
// header.append(message.cloneNode(true));

//makes it go before the node(which here is header) and after header
// header.before(message);
header.after(message);

// DELETING ELEMENTS
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Styles //////
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.designer);

logo.alt = 'Beautiful minimalist logo';

// Non-stantard
console.log(logo.designer);
//can't show properties created, only official. But you can do it like that to show it
console.log(logo.getAttribute('designer'));
//you can even create properties in the HTML
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
//gets the absolute link
console.log(link.href);
//gets the link in the HTML
console.log(link.getAttribute('href'));

// Data attributes (every atribute that has 'data' written enters here)
console.log(logo.dataset.versionNumber);

// Classes (podemos criar classes nos elementos)
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//DONT USE (WILL OVERWRITE EVERY CLASS
logo.className = 'jonas';
