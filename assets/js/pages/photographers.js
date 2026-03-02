/* global headerPhotographer, mediaCardFactory, multimedias, createDropDown, total */

// URLSearchParams : définit des méthodes utilitaires pour travailler avec la chaîne de requête (les paramètres GET) d’une URL
const url = new URLSearchParams(window.location.search);
// Retourne la première valeur associée au paramètre de recherche donné (ici l'id du photographe)
const idUrl = url.get('id');
// eslint-disable-next-line no-unused-vars
let allMedias, photographerFiltres;

// Gestion du contenu de chaque 'carte'
async function createCardGallery() {
	const listeMedia = document.getElementById('liste-media');
	// Mettre à vide la section (lors du clic sur un filtre, l'ancien affichage est remplacé)
	listeMedia.innerHTML = '';
	headerPhotographer();
	// Créer une carte media pour chaque media du photographe
	allMedias.forEach(media => listeMedia.innerHTML += mediaCardFactory(media));
}

// Fonction asynchrone
// eslint-disable-next-line no-unused-vars
async function init() {
	// Filtre les medias pour observer l'id du média et ainsi afficher la galerie du bon photographe grâce à la comparaison avec l'id du photographe dans l'URL
	allMedias = multimedias.medias.filter(medi => Number(idUrl) === medi.photographerId);
	// Filtre l'id du photographe
	photographerFiltres = multimedias.photographers.filter(photograph => Number(idUrl) === photograph.id);
	createDropDown();
	createCardGallery();
	total();
}

    

