const videosList = [
	
	{
	  video: 'videos/vid1.mp4',
	  title: 'Univ4Good avec Younes Bennani de  l université Sorbonne Paris Nord ',
	  description: 'Dans cet épisode, nous sommes allés à la rencontre de Younès BENNANI, Vice-Président Transformation Numérique de l Université Sorbonne Paris Nord.Younès nous parle de la nouvelle Maison des Sciences Numériques #MSN vaisseau amiral de la transformation numérique de l université et de son rôle dans la gestion de la crise sanitaireIl nous partage également sa vision du futur de l enseignement supérieur '
	},
	{
	  video: 'videos/vid3.mp4',	
	  title: 'Younès Bennani et Sébastien Missoffe',
	  description: 'À l’occasion des ateliers numériques Google, Sébastien Missoffe, Vice-président et Directeur général de Google France et Younès Bennani se sont retrouvés autour d’un café numérique.	'
	},
	{
	  video: 'videos/vid2.mp4',
	  title: 'Assises du CSIESR 2018 – TABLE RONDE – L’INTELLIGENCE ARTIFICIELLE',
	  description: ""
	},
	{
		video: 'videos/alteca.mp4',
		title: 'Comment Alteca Collabore Avec les Université ',
		description: "alteca"
	  },
	
	{
		video: 'videos/int.mp4',
		title: ' Conférence  intelligence  artificielle entre réalité et fiction -Younès Bennani-   ',
		description: "	"

	  },

	{
		video: 'videos/vid5.mp4',
		title: 'La Maison des sciences Numériques',
		description: 'Le numérique n&rsquo;a de sens pour luniversité que sil concourt à la réussite des étudiants et favorise le travail des enseignants-chercheurs et des personnels. La stratégie du numérique à l Université Sorbonne Paris Nord (USPN) a pour objectifs de développer une vision intégrative en recherche de pointe couplée à des formations d’excellence et de booster les relations entre le monde académique et le monde industriel. Pour ce faire, l’USPN a adopté une approche inclusive du numérique qui s’est concrétisée par la création de la première Maison des Sciences Numériques (LaMSN) du paysage de l’ESRI. Tiers-lieu au cœur de l’université, LaMSN a notamment pour projet d’intégrer un complexe événementiel, un lieu de valorisation de la recherche partenariale, des espaces de pédagogie innovante et des bureaux nomades, développant ainsi un modèle original de rencontres et d’innovation entre l’université, le monde socio-économique et la société civile. '
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
  
	  document.querySelector('.main-video-container .main-video').src = src;
	  document.querySelector('.main-video-container .main-video').play();
	  document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
  
	  // Display video description
	  document.querySelector('.main-video-container .main-vid-description').innerHTML = description;
	};
  });
  