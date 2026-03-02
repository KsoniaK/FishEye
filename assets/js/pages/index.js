/* global multimedias, photographerFactory */


// Gestion du contenu de la page index
// eslint-disable-next-line no-unused-vars
function init() {
	const photographersSection = document.querySelector('.photographer_section');
	// Pour chaque photographe
	multimedias.photographers.forEach((photographer) => {
		// Appel de la fonction qui créée le contenu de la page d'accueil
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		// Insertion dans le DOM
		photographersSection.appendChild(userCardDOM);
		// photographersSection.innerHTML += userCardDOM;
	});
}

