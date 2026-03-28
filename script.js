/* MODIF CLIENT : Gestion Menu Mobile Hamburger */
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animation simple du bouton
    menuToggle.classList.toggle('open');
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
