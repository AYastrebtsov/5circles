const header = document.querySelector('.header');
const mobileHeader = document.querySelector('.header__mobile');
const navigation = document.querySelector('.navigation');
const wrapper = document.querySelector('.header__wrapper');
const logo = document.querySelector('.logo--header');
const top = document.querySelector('.header__line');
const bottom = document.querySelector('.box--bottom-header');

const getMobileHeader = () => {
  mobileHeader.appendChild(top);
  mobileHeader.appendChild(bottom);
  header.appendChild(logo);
};

const getDesktopHeader = () => {
  header.insertBefore(bottom, wrapper);
  header.insertBefore(top, bottom);
  bottom.insertBefore(logo, navigation);
};

const defineCorrectBodyMargin = () => {
  const content = document.querySelector('main');
  const headerHeight = document.querySelector('header').offsetHeight;

  content.style.marginTop = `-${headerHeight}px`;
};

const listenScroll = () => {
  if (window.pageYOffset > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
};

let checker = true;

const switcher = () => {
  if (window.matchMedia('(max-width: 767px)').matches && checker === true) {
    getMobileHeader();
    checker = false;
  } if (window.matchMedia('(min-width: 768px)').matches && checker === false) {
    getDesktopHeader();
    checker = true;
  } if (window.matchMedia('(min-aspect-ratio: 17/9) and (min-width: 800px) and (max-width: 900px)').matches && checker === true) {
    getMobileHeader();
    checker = false;
  }
  return checker;
};

window.addEventListener('resize', () => {
  switcher();

  if (window.matchMedia('(min-width: 1200px)').matches || window.matchMedia('(max-width: 1200px)').matches) {
    defineCorrectBodyMargin();
  } else if (window.matchMedia('(max-width: 960px)').matches) {
    defineCorrectBodyMargin();
  } else if (window.matchMedia('(max-width: 767px)').matches) {
    defineCorrectBodyMargin();
  }
});

switcher();
window.addEventListener('scroll', listenScroll);

window.addEventListener('load', () => {
  defineCorrectBodyMargin();
}, { once: true });
