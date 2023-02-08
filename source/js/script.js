const mainMenu = document.querySelector('.main-menu__list-main');
const menuToggle = document.querySelector('.main-menu__toggle');
const header = document.querySelector('.header');

header.classList.remove('header-margin');
menuToggle.classList.remove('mobile-menu-icon-nojs')
mainMenu.classList.remove('main-menu--nojs', 'main-menu-opened', 'main-menu__toggle--opened');
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
