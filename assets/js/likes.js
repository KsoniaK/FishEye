/* global photographerFiltres */

// La totalité des likes par photographe
function total(){
	const pElts = Array.from(document.querySelectorAll('p[data-id]'));
	const likeTotalElmt = document.getElementById('like-total');
	const prix = document.getElementById('prix-photographe');
	let result = 0 ;

	prix.textContent = photographerFiltres[0].price;

	// Boucle sur les p contenant les likes
	pElts.map(pElt => {
		const pEltsContent = Number(pElt.textContent);
		// Incrémentation + assignation de la valeur à result
		result += pEltsContent;
	});
	likeTotalElmt.textContent = result;
}

// Les likes de chaque photo
// eslint-disable-next-line no-unused-vars
function likes(imgLike){
	let nbrLike;
	const idMedia = imgLike.getAttribute('data-id');
	const pUser = document.querySelector(`p[data-id = '${idMedia}' ]`);
	
	// Si pUser ne contient pas la class 'active'
	if(!pUser.classList.contains('active')){
		// On la lui ajoute
		pUser.classList.add('active');
		// Et on incrémente de 1
		nbrLike = Number(pUser.textContent) + 1;
	}else{
		// Si non, on supprime la class 'active'
		pUser.classList.remove('active');
		// Et on décrémente de 1
		nbrLike = Number(pUser.textContent) - 1;
	}
	pUser.textContent = nbrLike;
	total(); 
}
