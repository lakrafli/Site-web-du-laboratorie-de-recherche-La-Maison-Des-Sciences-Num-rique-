const videosList = [
	{
		video: 'videos/teaser.mp4',
		title: 'Teaser',
		description: 'Nos équipes de recherche collaborent quotidiennement pour apporter une brique à la connaissance scientifique mondiale. Des apports indispensables pour aider la société à affronter les défis mondiaux tels que la lutte contre le cancer.Dans ce premier film, l’université y dévoile la vitalité de sa recherche pluridisciplinaire, sa capacité à explorer et à transformer le monde.'
	  },
	
	
	{
	  video: 'videos/medcin.mp4	',
	  title: 'Pr Thomas GREGORY ',
	  description: 'Pr Thomas GREGORY Chef  du service de chirugie orthopédique  et Traumatolique  Hôpital universitaire  Avicenne AP-HP'
	},
	{
		video: 'videos/24.mp4',
		title: 'Tour du Monde  🌎 de Chirurgies Assistées par #RéalitéMixte	',	
		description: '13 chirurgiens de 13 pays effectueront des interventions chirurgicales assistées par des #MixedReality, et des professionnels de la santé du monde entier se réuniront pour des entretiens exclusifs et des tables rondes. Ce tour du monde de chirurgies holographiques voyagera dans les pays suivants: 🇫🇷 France , 🇧🇪 Belgique,🇩🇪  Allemagne, 🇺🇦 Ukraine, 🏴󠁧󠁢󠁥󠁮󠁧󠁿  Angleterre, 🇲🇦  Maroc,  🇿🇦 AfriqueduSud, 🇮🇳  Inde, EmiratsArabesUnis, 🇺🇸   EtatsUnis,  🇧🇷  Brésil ,🇧🇴  Bolivie, 🇧🇴  Mexique. '
	  },	
	  {
		video: 'videos/Dr Thomas Grégory Chirurgie et technologies.mp4',
		title: 'Dr Thomas Grégory -  Chirurgie et technologie ',
		description: '  Le Dr Thomas Gregory est chirurgien orthopédique,chef du	service de chirurgie orthopédique de lhôpital Avicenne AP-HP son équipe a réalisé la 1ère opération de lépaule	assistée par la réalité augmentée en décembre dernier '
	
	  },
	  {
		video: 'videos/Le chirurgien augmenté par Thomas Gregory.mp4',
		title: ' Le chirurgien augmenté par Thomas Gregory ',
		description: 'Sciences & sens de l’intelligence artificielle, colloque du 19 novembre 2019 à la Maison des sciences de l’homme Paris-Nord Le chirurgien augmenté par Thomas Gregory, Docteur, UFR SMBH'
	
	  },
	  {
		video: 'videos/VirtualityTV par LADN  Dr Thomas Gregory réalité augmentée  chirurgie.mp4',
		title: ' VirtualityTV par L ADN - Dr. Thomas Gregory : réalité augmentée & chirurgie ',
		description: 'La chirurgie est en train de vivre un tournant dans son histoire. Elle passe d’état “d’art chirurgical” à l’état de “chirurgie numérique” avec des procédures augmentées et standardisée pour un résultat plus précis et plus sécurisé pour le patient. Réalité virtuelle, réalité mixte et intelligence artificielle sont  les piliers de cette transformation numérique de la chirurgie autour de la simulation chirurgicale et du chirurgien augmenté.VirtualityTV par L ADN - Avec Wizilive'
	
	  },

	  {
		video: 'videos/Docteur Thomas Gregory hospitalo-universitaire à luniversité Paris 13.mp4',
		title: '   Docteur Thomas Gregory, hospitalo-universitaire à l université Paris 13  ',
		description: 'Rencontre avec Docteur Thomas Gregory, hospitalo-universitaire à l université Paris 13 chef de service de chirurgie orthopédique et traumatique de l hôpital Avicenne de Bobigny.'
	
	  }

	
	
	
  ];
  
  const categories = [...new Set(videosList.map((item) => item.title))];
  document.getElementById('videosList').innerHTML = categories.map((title) => {
	const video = videosList.find((item) => item.title === title);
	return (
	  `<div class="list" data-title="${title}">
		<video src="${video.video}" class="list-video"></video>
		<h3 class="list-title">${title}</h3>
	  </div>`
	);
  }).join('');
  
  let videoList = document.querySelectorAll('.video-list-container .list');
  videoList.forEach(vid => {
	vid.onclick = () => {
	  videoList.forEach(remove => { remove.classList.remove('active'); });
  
	  // Toggle active class
	  vid.classList.add('active');
  
	  // Update main video
	  let src = vid.querySelector('.list-video').src;
	  let title = vid.dataset.title;
	  let description = videosList.find((item) => item.title === title).description;
	  let b
  
	  document.querySelector('.main-video-container .main-video').src = src;
	  document.querySelector('.main-video-container .main-video').play();
	  document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
  
	  // Display video description
	  document.querySelector('.main-video-container .main-vid-description').innerHTML = description;
	};
  });
  