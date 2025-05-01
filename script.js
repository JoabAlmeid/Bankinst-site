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
document.querySelector('.header');
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
