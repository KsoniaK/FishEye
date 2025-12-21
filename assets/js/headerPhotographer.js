// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Header page photographer
function headerPhotographer(){
	const headerPhotographer = document.getElementById('header-photographer');
	const headerContact = document.getElementById('header-contact');

	headerPhotographer.innerHTML = 
        `<div id="header-photographer_identite" aria-label="Photographer description">
            <h1 class="titre-header">${photographerFiltres[0].name}</h1>
            <h2 class="ville-pays_header">${photographerFiltres[0].city + ', ' + photographerFiltres[0].country}</h2>
            <p class="proverbe-header">${photographerFiltres[0].tagline}</p>
        </div>
        <button id="contact_button" class="contact_button" aria-haspopup="dialog" aria-controls="dialog" onclick="displayModal()">Contactez-moi</button>
        <div class="div__header-img" role="Photographer photo">
            <img class="photo-header" src="./assets/images/photos/Photographers_ID_Photos/${photographerFiltres[0].portrait}" alt="${photographerFiltres[0].name}"/>
        </div>`;
        
	headerContact.innerHTML = 
        `<h2 id="modal-heading">Contactez-moi <br> ${photographerFiltres[0].name}</h2>
        <button id="carrousel-close-contact" aria-label="Fermer la modal" onclick="closeModal()">
            <img src="assets/images/close.svg" alt="">
        </button>
        `;
        
	return(headerPhotographer, headerContact);
}



