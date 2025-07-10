const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');   // Animate hamburger icon
  navMenu.classList.toggle('active');     // Show/hide nav menu
});
