const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__wrapper');
const overlay = document.querySelector('.header__overlay');

const showMobileMenu = (evt) => {
  if (evt.target.classList.contains('header__overlay')) {
    body.classList.remove('burger__mobile-menu');
    overlay.classList.remove('header__overlay--visible');
    burger.classList.remove('cross');
    menu.classList.remove('header__wrapper--opened');
  } else {
    body.classList.toggle('burger__mobile-menu');
    overlay.classList.toggle('header__overlay--visible');
    burger.classList.toggle('cross');
    menu.classList.toggle('header__wrapper--opened');
  }
};

burger.addEventListener('click', showMobileMenu);
overlay.addEventListener('click', showMobileMenu);
