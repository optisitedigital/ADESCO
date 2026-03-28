/* MODIF IA : Version corrigée pour éviter le blocage mobile */
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list'); // Utilise l'ID ici !
const menuIcon = document.getElementById('menu-icon');

if (menuToggle && navList) {
    menuToggle.onclick = function(e) {
        // Empêche le clic de "traverser" le bouton et de fermer le menu aussitôt
        e.stopPropagation(); 
        
        navList.classList.toggle('active');
        
        // Change l'icône (Bars vs Times)
        if (navList.classList.contains('active')) {
            menuIcon.className = "fas fa-times";
        } else {
            menuIcon.className = "fas fa-bars";
        }
    };

    // Fermeture automatique quand on clique sur un lien (ACCUEIL, HISTORIQUE, etc.)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = () => {
            navList.classList.remove('active');
            menuIcon.className = "fas fa-bars";
        };
    });

    // Fermer si on clique n'importe où ailleurs sur l'écran
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
            navList.classList.remove('active');
            menuIcon.className = "fas fa-bars";
        }
    });
}
