function initializeMeatball() {
  document.querySelector('.meatball')?.addEventListener('click', () => {
    document.querySelector('.navbar-links')?.classList.toggle('expanded');
  });
}

initializeMeatball();

document.addEventListener('astro:after-swap', () => {
  initializeMeatball();
});