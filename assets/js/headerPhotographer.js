/* global photographerFiltres */

// Header page photographer
// eslint-disable-next-line no-unused-vars
function headerPhotographer(){
	const headerPhotographer = document.getElementById('header-photographer');
	const headerContact = document.getElementById('header-contact');

	headerPhotographer.innerHTML = 
        `<section id="header-photographer_identite">
            <h1 class="titre-header">${photographerFiltres[0].name}</h1>
            <h2 class="ville-pays_header">${photographerFiltres[0].city + ', ' + photographerFiltres[0].country}</h2>
            <p class="proverbe-header">${photographerFiltres[0].tagline}</p>
        </section>
        <button id="contact_button" class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <div class="div__header-img">
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



