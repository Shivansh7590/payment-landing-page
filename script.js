const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const openMenu = () => {
  mobileMenu.hidden = false;
  mobileMenu.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
  attachCloseMenuHandler();};
const hideMenu = () => {
  mobileMenu.hidden = true;
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', openMenu);
}
function attachCloseMenuHandler() {
  const closeMenuBtn = document.querySelector('.close-menu');
  if (closeMenuBtn) {
    closeMenuBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      hideMenu();
    };
  }
}
document.addEventListener('DOMContentLoaded', attachCloseMenuHandler);
mobileMenu && mobileMenu.addEventListener('click', function(e) {
  if (e.target.classList && e.target.classList.contains('close-menu')) {
    e.preventDefault();
    e.stopPropagation();
    hideMenu();
  }
});
document.addEventListener('click', function(e) {
  if (e.target.classList && e.target.classList.contains('close-menu')) {
    e.preventDefault();
    e.stopPropagation();
    hideMenu();
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu && !mobileMenu.hidden) hideMenu();
});
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', hideMenu);
  });
} 