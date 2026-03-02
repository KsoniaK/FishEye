/* global init */

// Variable globale : elle sera utilisée dans d'autres fichiers
// eslint-disable-next-line no-unused-vars
let multimedias;

// Récupération du fichier JSON
async function getMultiMedias() {
	return fetch('./assets/data/photographers.json')
		.then(response => response.json())
		.then(response2 => {
			return response2;
		});
}

// Fonction asynchrone
const serviceStart = async () => {
	// On attend que la fonction getMultiMedias() soit appelée puis on stock dans la variable multimedias
	multimedias = await getMultiMedias();
	init();
}; 
serviceStart();


