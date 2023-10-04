import fingerprint from '../../assets/svg/undraw_fingerprint_login_re_t71l.svg';
import logoAstro from '../../assets/svg/favicon.svg';

export type capssaleraT = {
  id: number;
  imatge: string;
  alt: string;
};

export const capssalera = [
  {
    id: 1,
    imatge: fingerprint.src,
    alt: 'fingerprint',
  },
];

export type mesInfoT = {
  id: number;
  text: string;
  imatge: string;
};

export const mesInfo = [
  {
    id: 1,
    text: 'Més info 1',
    imatge: logoAstro.src,
  },
  {
    id: 2,
    text: 'Més info 2',
    imatge: logoAstro.src,
  },
  {
    id: 3,
    text: 'Més info 3',
    imatge: logoAstro.src,
  },
  {
    id: 4,
    text: 'Més info 4',
    imatge: logoAstro.src,
  },
];

export type carateristiquesT = {
  id: number;
  titol: string;
  text: string;
};

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
    titol:
      'Lorem ipsum dolor, sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, animi iste eius assumenda eum necessitatibus optio ad excepturi, ut dolorum eveniet quas reiciendis blanditiis?',
  },
  {
    id: 6,
    titol: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eum, provident expedita, porro quod officiis earum repellendus voluptatum illo tempore asperiores. Voluptatem odit, beatae unde sunt hic assumenda aspernatur commodi nesciunt. Id, eaque.',
  },
];
