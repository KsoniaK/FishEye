// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Création du filtre
function createDropDown() {
	const container = document.getElementById('filtre-container');
	if (!container) return;

	container.innerHTML = `
		<div class="custom-select">
			<button
				id="filter-button"
				class="select-trigger"
				aria-haspopup="listbox"
				aria-expanded="false"
				aria-controls="filter-list">
				Popularité
				<span class="arrow"></span>
			</button>

			<ul
				id="filter-list"
				class="select-list"
				role="listbox"
				hidden>
			</ul>
		</div>
	`;

	// INIT après création HTML
	initCustomSelect();
}

// Au clique, faire apparaître et disparaître le menu filtre
function initCustomSelect() {
	const button = document.getElementById('filter-button');
	const list = document.getElementById('filter-list');

	// ⚠️ protection si le HTML n'existe pas
	if (!button || !list) return;

	// Valeur sélectionnée par défaut
	let currentFilter = 'Popularité';

	// Tous les filtres possibles
	const filters = ['Popularité', 'Date', 'Titre'];

	function renderSelect() {
		// Mise à jour du bouton
		button.childNodes[0].textContent = currentFilter;

		// Nettoyage de la liste
		list.innerHTML = '';

		// Création des 2 filtres restants
		filters
			.filter(f => f !== currentFilter)
			.forEach(filter => {
				const li = document.createElement('li');
				li.setAttribute('role', 'option');
				li.setAttribute('tabindex', '0');
				li.textContent = filter;

				li.addEventListener('click', () => selectOption(filter));
				li.addEventListener('keydown', (e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						selectOption(filter);
					}
					if (e.key === 'ArrowDown') {
						li.nextElementSibling?.focus();
					}
					if (e.key === 'ArrowUp') {
						li.previousElementSibling?.focus();
					}
					if (e.key === 'Escape') {
						closeList();
						button.focus();
					}
				});

				list.appendChild(li);
			});
	}

	// Fonctions d'ouverture et de fermeture
	function openList() {
		list.hidden = false;
		button.setAttribute('aria-expanded', 'true');

		list.addEventListener('keydown', trapFocus);

		list.querySelector('[role="option"]')?.focus();
	}


	function closeList() {
		list.hidden = true;
		button.setAttribute('aria-expanded', 'false');

		list.removeEventListener('keydown', trapFocus);
	}


	function selectOption(value) {
		currentFilter = value;
		trie(value);
		closeList();
		renderSelect();
		button.focus();
	}

	// Ouverture / fermeture au clic
	button.addEventListener('click', () => {
		const expanded = button.getAttribute('aria-expanded') === 'true';
		expanded ? closeList() : openList();
	});

	// Ouverture clavier
	button.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			openList();
		}
	});

	// clic extérieur → fermeture
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.custom-select')) {
			closeList();
		}
	});

	renderSelect();

	function trapFocus(e) {
		const options = list.querySelectorAll('[role="option"]');
		if (!options.length) return;

		const first = options[0];
		const last = options[options.length - 1];

		if (e.key === 'Tab') {
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}
	}

}


// Tries du filtre
// Paramètre de la fonction: contenu d'<option>
function trie(conteneurOption) {
	switch (conteneurOption) {

	// Dans le cas où l'option popularité est selectionée:
	case 'Popularité':
		// Trie des likes du plus grand au plus petit nombre
		allMedias.sort(function (a, b) {
			return b.likes - a.likes;
		});
		break;

	// Dans le cas où l'option date est selectionée:
	case 'Date':
		// Trie des date du plus ancien au plus récent
		allMedias.sort(function (a, b) {
			return new Date(a.date) - new Date(b.date);
		});
		break;

	// Dans le cas où l'option titre est selectionée:
	case 'Titre':
		// Trie des titres par ordre alphabétique une fois qu'ils ont été mis en minuscule
		allMedias.sort(function (a, b) {
			return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
		});
		break;
	}

	createCardGallery(allMedias);
}
