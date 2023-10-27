export type EnllaçT = {
  id: number;
  url: string;
  nom: string;
};

export type ImatgeT = {
  id: number;
  src: string;
  alt: string;
};

export type InfoT = {
  id: number;
  text: string;
  src: string;
  alt: string;
};

export type CaracteristicaT = {
  id: number;
  titol: string;
  text: string;
};

export type ProjecteT = {
  id: number;
  titol: string;
  descripcio: string;
  claus: string[];
  src: string;
  alt: string;
};

export type NosaltresT = {
  id: number;
  nom: string;
  src: string;
  alt: string;
};

export type ContacteT = {
  nom: string;
  correu: string;
  telefon: string;
  adreça: string;
  codi: string;
  poblacio: string;
};

export type XsT = {
  id: number;
  nom: string;
  src: string;
};
