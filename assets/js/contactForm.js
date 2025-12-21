// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const btnClose = document.getElementById('contact_modal');
const modal = document.getElementById('contact_modal');
const header = document.getElementById('header-photographe');
const main = document.getElementById('main');
const prenom = document.getElementById('prenom');
// const closeButton = document.getElementById('carrousel-close-contact');

// Pour les élements focalisables au clavier
const keyCodes = {tab: 9, enter: 13, escape: 27};

// Ouverture formulaire contact
function displayModal() {
	modal.style.display = 'block';
	modal.setAttribute('aria-hidden','false');
	header.setAttribute('aria-hidden','true');
	main.setAttribute('aria-hidden','true');
	prenom.focus();

	// 🔁 RECALCUL des éléments focusables
	const focusableElements = modal.querySelectorAll(
		'input, textarea, button, select, [tabindex]:not([tabindex="-1"])'
	);

	const firstFocusable = focusableElements[0];
	const lastFocusable = focusableElements[focusableElements.length - 1];

	firstFocusable.focus();

	modal.addEventListener('keydown', function(e) {
		if (e.key === 'Tab') {
			if (e.shiftKey && document.activeElement === firstFocusable) {
				e.preventDefault();
				lastFocusable.focus();
			} else if (!e.shiftKey && document.activeElement === lastFocusable) {
				e.preventDefault();
				firstFocusable.focus();
			}
		}

		if (e.key === 'Escape') {
			closeModal();
		}
	});
}
// Fermeture formulaire contact
function closeModal() {
	const contactButton = document.getElementById('contact_button');
	contactButton.focus(); // 👈 remettre le focus
	modal.style.display = 'none';
	modal.setAttribute('aria-hidden','true');
	header.setAttribute('aria-hidden','false');
	main.setAttribute('aria-hidden','false');
}

// // Création d'un “focus trap” : Lorsqu’une modale est ouverte, le focus doit rester à l’intérieur.
// modal.addEventListener('keydown', function(e) {
// 	if (e.key === 'Tab') {
// 		if (e.shiftKey) { // Shift + Tab
// 			if (document.activeElement === firstFocusable) {
// 				e.preventDefault();
// 				lastFocusable.focus();
// 			}
// 		} else { // Tab
// 			if (document.activeElement === lastFocusable) {
// 				e.preventDefault();
// 				firstFocusable.focus();
// 			}
// 		}
// 	}
// 	if (e.key === 'Escape') { 
// 		closeModal(); 
// 	}
// });




// On affiche dans la console les données renseignées par l'utilisateur à la soumission du formulaire
function getValue() {
	// Sélectionner l'élément input et récupérer sa valeur
	const prenom = document.getElementById('prenom').value;
	const nom = document.getElementById('nom').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	
	// Afficher la valeur dans la console
	if(prenom == '' || nom == '' || email == '' || message == ''){
		alert('Merci de remplir tous les champs du formulaire');
	}else{
		console.log('Prénom:' + prenom + ' Nom:' + nom + ' Email:' + email + ' Message:' + message);
		modal.style.display = 'none';
		modal.setAttribute = ('aria-hidden', 'true');
		header.setAttribute = ('aria-hidden', 'false');
		main.setAttribute = ('aria-hidden', 'false');
		// Vider formulaire
		document.forms[0].reset();
	}
}

