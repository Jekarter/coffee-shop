const mainMenu = document.querySelector('.main-menu__list-main');
const menuToggle = document.querySelector('.main-menu__toggle');
const header = document.querySelector('.header');

mainMenu.classList.remove('main-menu--nojs');
header.classList.remove('header-margin');
mainMenu.classList.remove('main-menu-opened');
mainMenu.classList.remove('main-menu__toggle--opened');
mainMenu.classList.add('main-menu-closed')


menuToggle.addEventListener('click', () => {
  if (mainMenu.classList.contains('main-menu-closed')) {
    mainMenu.classList.remove('main-menu-closed');
    mainMenu.classList.add('main-menu-opened');
    header.classList.add('header-margin');
    menuToggle.classList.add('main-nav__toggle--opened')
  } else {
    mainMenu.classList.add('main-menu-closed');
    mainMenu.classList.remove('main-menu-opened');
    header.classList.remove('header-margin');
    menuToggle.classList.remove('main-nav__toggle--opened')
  }
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
