export type enllassT = {
  id: number;
  url: string;
  nom: string;
}

export type imatgeT = {
  id: number;
  src: string;
  alt: string;
};

export type infoT = {
  id: number;
  text: string;
  src: string;
  alt: string;
};

export type caracteristicaT = {
  id: number;
  titol: string;
  text: string;
};

export type projecteT = {
	id: number;
	titol: string;
  descripcio: string;
  claus: string[];
  src: string;
  alt: string;
}

export type nosaltresT = {
  id: number;
  nom: string;
  src: string;
  alt: string;
}

export type contacteT = {
  nom: string;
  correu: string;
  telefon: string;
  adreça: string;
  codi: string;
  poblacio: string;
}

export type xsT = {
  id: number;
  nom: string;
  src: string;
}
