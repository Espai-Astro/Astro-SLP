import {
	fingerprint,
	searchApp,
	funMoments,
	happyFeeling,
	mindFullness,
	deliveryTruck,
	female,
	femaleB,
	maleB,
	male,
	completed,
	completion,
	mobileContent,
	reminder
} from './index';

export const enllassos = [
  {
    id: 1,
    url: '#presentacio',
    nom: "presentació"
  },
  {
    id: 2,
    url: '#mesInfo',
    nom: "més informació"
  },
  {
    id: 3,
    url: '#caracteristiques',
    nom: "característiques"
  },
  {
    id: 4,
    url: '#projectes',
    nom: "projectes"
  },
  {
    id: 5,
    url: '#nosaltres',
    nom: "nosaltres"
  },
]

export const imatges = [
  {
    id: 1,
    src: fingerprint.src,
    alt: 'fingerprint',
  },
  {
    id: 2,
    src: searchApp.src,
    alt: 'searchApp',
  },
];

export const info = [
  {
    id: 1,
    text: 'Completed',
    src: completed.src,
    alt: 'logo Astro',
  },
  {
    id: 2,
    text: 'Completion',
    src: completion.src,
    alt: 'logo Astro',
  },
  {
    id: 3,
    text: 'Mobile content',
    src: mobileContent.src,
    alt: 'logo Astro',
  },
  {
    id: 4,
    text: 'Reminder',
    src: reminder.src,
    alt: 'logo Astro',
  },
];

export const caracteristiques = [
  {
    id: 1,
    titol: 'Lorem, ipsum dolor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum voluptates nisi.',
  },
  {
    id: 2,
    titol: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aperiam consequatur aut error deserunt nobis. Explicabo, illum dolores eligendi, possimus numquam ea labore eos exercitationem quibusdam, amet atque minima accusamus!',
  },
  {
    id: 3,
    titol: 'Lorem ipsum dolor, sit',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, magni cupiditate praesentium asperiores iusto possimus doloribus et, officia eius hic, nemo similique!',
  },
  {
    id: 4,
    titol: 'Lorem ipsum',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, repellendus.',
  },
  {
    id: 5,
    titol: 'Lorem ipsum dolor, sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, animi iste eius assumenda eum necessitatibus optio ad excepturi, ut dolorum eveniet quas reiciendis blanditiis?',
  },
  {
    id: 6,
    titol: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet repellendus, adipisicing elit. Harum eum, provident expedita, porro quod officiis earum repellendus voluptatum illo tempore asperiores. Voluptatem odit, beatae unde sunt hic assumenda aspernatur commodi nesciunt. Id, eaque.',
    claus: ['asperiores', 'repellendus', 'repellendus'],
  },
];

export const projectes = [
  {
    id: 1,
    titol: 'Lorem ipsum dolor',
    descripcio:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus ex eius exercitationem, ut dolorem quidem pariatur eveniet autem laborum ipsa inventore. Libero tenetur est dolore dicta, recusandae saepe enim repellat aliquam vel odio, quia non officia commodi aperiam repudiandae veritatis voluptates impedit ad architecto! Vero vitae doloribus ad nostrum neque dolores non iusto, aliquam vel in, fugit tempora minus. Consequuntur, numquam officiis accusamus sit architecto totam molestiae fugit hic amet enim iusto velit iure eum? Voluptatum deserunt corporis, animi magnam nam, eius nobis nemo vero, quaerat officia hic.',
    claus: ['voluptates', 'repudiandae', 'veritatis'],
    src: funMoments.src,
    alt: 'funMoments',
  },
  {
    id: 2,
    titol: 'Lorem ipsum',
    descripcio:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus ex eius exercitationem, ut dolorem quidem pariatur eveniet autem laborum ipsa inventore. Libero tenetur est dolore dicta, recusandae saepe enim repellat aliquam vel odio, quia non officia commodi aperiam repudiandae veritatis voluptates impedit ad architecto! Vero vitae doloribus ad nostrum neque dolores non iusto, aliquam vel in, fugit tempora minus. Consequuntur, numquam officiis accusamus sit architecto totam molestiae fugit hic amet enim iusto velit iure eum? Voluptatum deserunt corporis, animi magnam nam, eius nobis nemo vero, quaerat officia hic. Commodi nobis unde sapiente! Illum voluptate id accusamus amet dolorem dolores deserunt aliquam magnam voluptates? Culpa mollitia labore et? Beatae, commodi.',
    claus: ['architecto', 'accusamus', 'commodi'],
    src: happyFeeling.src,
    alt: 'happyFeeling',
  },
  {
    id: 3,
    titol: 'Lorem ipsum dolor sit amet consectetur.',
    descripcio:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus ex eius exercitationem, ut dolorem quidem pariatur eveniet autem laborum ipsa inventore. Libero tenetur est dolore dicta, recusandae saepe enim repellat aliquam vel odio, quia non officia commodi aperiam repudiandae veritatis voluptates impedit ad architecto! Vero vitae doloribus ad nostrum neque dolores non iusto, aliquam vel in, fugit tempora minus. Consequuntur, numquam officiis accusamus sit architecto totam molestiae fugit hic amet enim iusto velit iure eum? Voluptatum deserunt corporis, animi magnam nam, eius nobis nemo vero, quaerat officia hic.',
    claus: ['inventore', 'exercitationem', 'velit'],
    src: mindFullness.src,
    alt: 'MindFullness',
  },
  {
    id: 4,
    titol: 'Lorem ipsum dolor sit amet  consectetur adipisicing elit.',
    descripcio:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus ex eius exercitationem, ut dolorem quidem pariatur eveniet autem laborum ipsa inventore. Libero tenetur est dolore dicta, recusandae saepe enim repellat aliquam vel odio, quia non officia commodi aperiam repudiandae veritatis voluptates impedit ad architecto! Vero vitae doloribus ad nostrum neque dolores non iusto, aliquam vel in, fugit tempora minus.',
    claus: ['exercitationem', 'iusto', 'fugit'],
    src: deliveryTruck.src,
    alt: 'DeliveryTruck',
  },
];

export const nosaltres = [
  {
    id: 3,
    nom: "Augusta Montivento",
    src: female.src,
    alt: 'Female',
  },
  {
    id: 4,
    nom: "Catalina Breschia",
    src: femaleB.src,
    alt: 'FemaleB',
  },
  {
    id: 5,
    nom: "Julius Mendrum",
    src: male.src,
    alt: 'Male',
  },
  {
    id: 6,
    nom: "Gregorius Pelis",
    src: maleB.src,
    alt: 'MaleB',
  },
];
