/* global photographerFiltres */

// Création des médias (opérateur (ternaire) conditionnel = 3 opérandes (1 condition, 2 expressions)) et likes pour chaque photographe
// eslint-disable-next-line no-unused-vars
function mediaCardFactory(media) {
	const photosMedia = `<img src="./assets/images/photos/${photographerFiltres[0].name}/${media.image}" class="images-media" alt="${media.title}"/>`;
	const videosMedia = `<video src="./assets/images/photos/${photographerFiltres[0].name}/${media.video}" class="videos-media" controls alt="${media.title}"></video>`;

	return `
        <article class="media">
            <button class="media-button" data-id="${media.id}" onclick="openModalCarousel(this)" aria-label="Ouvrir le média dans le carrousel">
                ${media.image ? photosMedia : videosMedia}
            </button>
            <div class="description-photos">
                <p class="titre-photo">${media.title}</p>
                <div class="div-jaime">
                    <p class="jaime-photo" data-id="${media.id}">${media.likes}</p>
                    <button class="likes-button" onclick="likes(this)" data-id="${media.id}" aria-label="Ajouter un like">
                        <img src="./assets/images/like.png" class="likes-img" alt="">
                    </button>
                </div>
            </div>
        </article>`;
}

