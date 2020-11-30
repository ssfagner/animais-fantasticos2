import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menulist = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menulist.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menulist, eventos, () => {
      menulist.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }
  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
