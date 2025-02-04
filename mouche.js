const diffusion = document.querySelector('.zone_mouche'); // Sélectionner la zone où les mouches apparaissent

// Fonction pour créer une image qui suit le curseur
function createImage(e) {
    const image = document.createElement('div');
    image.classList.add('image');

    // Définir l'image à utiliser comme background
    image.style.backgroundImage = "url('palimpseste_sources/mouche_détourée.png')"; // Remplacer par votre image

    // Obtenir les coordonnées de la souris par rapport à la zone_mouche
    const boundingRect = diffusion.getBoundingClientRect();
    const xPos = e.clientX - boundingRect.left; // Calculer la position relative dans la zone
    const yPos = e.clientY - boundingRect.top;

    // Centrer l'image autour du pointeur
    const moucheWidth = 50; // Largeur de l'image (doit correspondre à celle définie en CSS)
    const moucheHeight = 50; // Hauteur de l'image
    image.style.left = `${xPos - moucheWidth / 2}px`; // Centrer horizontalement
    image.style.top = `${yPos - moucheHeight / 2}px`; // Centrer verticalement

// Définir les déplacements aléatoires pour l'image
const randomX = (Math.random() - 0.5) * 600;
const randomY = (Math.random() - 0.5) * 600;
const rotation = (Math.random() - 0.5) * 90;


    image.style.setProperty('--x', `${randomX}px`);
    image.style.setProperty('--y', `${randomY}px`);
    image.style.setProperty('--rotate', `${rotation}deg`); // Appliquer la rotation

    // Ajouter un effet de taille aléatoire
    const scale = 0.7 + Math.random() * 1.2; // Taille aléatoire entre 0.7 et 1.9
    image.style.setProperty('--scale', scale);

    // Ajouter l'image à la zone
    diffusion.appendChild(image);

    // Supprimer l'image après l'animation
    setTimeout(() => {
        image.remove();
    }, 3000); // 3s correspond à la durée de l'animation
} 

// Écouter les mouvements de la souris pour créer les images
document.addEventListener('mousemove', createImage);
