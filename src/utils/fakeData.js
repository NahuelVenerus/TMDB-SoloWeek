const hpPoster = require("../assets/HP The Philosophers Stone Poster.jpg");
const tlotrPoster = require("../assets/TLOTR Fellowship of the Ring.jpg");

export const movies = [
  {
    id: 1,
    original_title: "Harry Potter And the Philosopher's Stone",
    year: 2001,
    rating: 7.6,
    genres: ["Fantasia", "Aventura", "Familia"],
    duration: "2h32m",
    description:
      'Harry Potter y la piedra filosofal se toma el tiempo necesario para irnos presentando con un absorbente y elegante ritmo narrativo su microcosmos fantástico, sus criaturas y objetos mágicos, que posibilitarán que Harry abandone su despótico hogar familiar adoptivo en su undécimo cumpleaños para ingresar en el Colegio Hogwarts de Magia y Hechicería, donde podrá empezar a desarrollar sus destrezas como mago.\nLa suma de elementos del apartado técnico y artístico se complementan con gran acierto en una prodigiosa puesta en escena que nos lleva desde el andén 8 y ¾ pasando por una tienda de varitas y escobas hasta la confrontación con un monstruo de tres cabezas y un impresionante partido de "quidditch" en el aire. Columbus sabe armar una primera entrega para niños y grandes, donde los efectos especiales están al servicio de la historia, la música contribuye a la hipnosis y cuyo guión ejecuta una estupenda presentación de personajes y una esmerada dosificación de información para llegar al round final de esta primera aventura de Harry Potter.',
    poster_path: hpPoster,
  },
  {
    id: 2,
    original_title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    genres: ["Fantasia", "Aventura"],
    duration: "2h58m",
    description:
      "En este episodio de la trilogía, el joven y tímido hobbit, Frodo Bolsón, hereda un anillo. Lejos de ser una simple baratija, se trata del Anillo único, un instrumento de poder que permitiría a Sauron, el Señor Oscuro, reinar en la Tierra Media y convertir en esclavos a sus habitantes. Frodo, con la ayuda de una Compañía formada por hobbits, hombres, un mago, un enano y un elfo, tiene la misión de llevar el Anillo viajando por toda la Tierra Media hasta el Monte del Destino, lugar donde fue forjado, y destruirlo para siempre. Un tal periplo supone aventurarse muy lejos en Mordor, la tierra del Señor Oscuro, donde se concentra su ejército de orcos maléficos... La Compañía, no solo debe combatir las fuerzas externas del mal, sino también las fuerzas internas y la influencia corruptora que ejerce el propio anillo. El final de la historia está íntimamente ligado a la suerte de la Compañía.",
    poster_path: tlotrPoster,
  },
];

export const users = [
  {
    id: 1,
    nickname: "Ashneroh",
    username: "nahuelvenerus",
    password: "elNahueVene",
    favorites: [],
  },
];
