export interface EventType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  icon: string;
  highlights: string[];
  services: ServiceItem[];
  packages: Package[];
  faqs: FAQ[];
  testimonials: Testimonial[];
}

export interface ServiceItem {
  name: string;
  description: string;
  icon?: string;
}

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  author: string;
  eventType: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
}

export const eventTypes: EventType[] = [
  {
    id: "mariages",
    title: "Mariages",
    description: "Le plus beau jour de votre vie mérite une organisation parfaite",
    longDescription: "Créez le mariage de vos rêves à Marrakech, la ville rouge aux mille couleurs. Nos wedding planners expérimentés vous accompagnent dans chaque étape, de la sélection du lieu à la coordination du jour J. Palais, riads, jardins ou désert : nous créons des décors féeriques pour un moment inoubliable.",
    image: "https://atlasforevents.com/wp-content/uploads/2024/06/bride-groom-having-their-wedding-beach-scaled-1.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/06/bride-groom-having-their-wedding-beach-scaled-1.jpg",
      "https://atlasforevents.com/wp-content/uploads/2024/06/view-table-arrangement-by-wedding-planner-scaled-1.jpg",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800"
    ],
    icon: "Heart",
    highlights: [
      "Wedding planner dédié francophone",
      "Sélection des plus beaux lieux de Marrakech",
      "Décoration florale sur mesure",
      "Traiteur gastronomique marocain et international",
      "Coordination complète le jour J",
      "Gestion des prestataires"
    ],
    services: [
      { name: "Organisation complète", description: "De A à Z, nous gérons tous les aspects de votre mariage" },
      { name: "Décoration & Scénographie", description: "Création d'univers uniques avec fleurs, tissus et lumières" },
      { name: "Traiteur", description: "Cuisine marocaine raffinée ou internationale" },
      { name: "Musique & Animation", description: "DJ, groupes live, Gipsy Sueño" },
      { name: "Photo & Vidéo", description: "Photographes et vidéastes professionnels" },
      { name: "Transport & Hébergement", description: "Logistique complète pour vos invités" }
    ],
    packages: [
      {
        name: "Essentiel",
        price: "À partir de 5 000€",
        description: "Coordination jour J + essentiels",
        features: ["Coordination le jour J", "1 réunion préparatoire", "Traiteur recommandé", "Décoration basique"]
      },
      {
        name: "Prestige",
        price: "À partir de 15 000€",
        description: "Organisation complète premium",
        features: ["Organisation de A à Z", "Wedding planner dédié", "Décoration sur mesure", "Traiteur gastronomique", "Photo + Vidéo", "Animation musicale"],
        popular: true
      },
      {
        name: "Royal",
        price: "Sur devis",
        description: "Mariage d'exception sans limites",
        features: ["Tout le pack Prestige", "Lieu d'exception exclusif", "Décoration luxe", "Traiteur étoilé", "Hébergement invités", "Transport VIP", "Feu d'artifice"]
      }
    ],
    faqs: [
      {
        question: "Combien de temps à l'avance dois-je réserver ?",
        answer: "Nous recommandons de réserver 6 à 12 mois à l'avance, surtout pour les mariages en haute saison (avril-juin, septembre-novembre)."
      },
      {
        question: "Pouvez-vous organiser un mariage civil au Maroc ?",
        answer: "Nous organisons la cérémonie laïque et la fête. Pour le mariage civil, il doit être effectué dans votre pays d'origine."
      },
      {
        question: "Quel budget prévoir ?",
        answer: "Les budgets varient de 10 000€ à 100 000€+ selon vos envies. Nous travaillons avec tous les budgets pour créer votre mariage idéal."
      },
      {
        question: "Proposez-vous des mariages intimes ?",
        answer: "Absolument ! Les élopements et micro-mariages sont notre spécialité. Dès 10 personnes."
      }
    ],
    testimonials: [
      {
        id: 1,
        author: "Léa & Thomas",
        eventType: "Mariage - 150 invités",
        rating: 5,
        date: "Mai 2024",
        content: "Un mariage de rêve ! L'équipe Atlas a transformé notre vision en réalité. Le palais était somptueux et nos invités n'en reviennent toujours pas.",
        avatar: "https://images.unsplash.com/photo-1519741497674-611481863552?w=100&h=100&fit=crop&crop=face"
      },
      {
        id: 2,
        author: "Sophie & Marc",
        eventType: "Mariage intime - 30 invités",
        rating: 5,
        date: "Octobre 2023",
        content: "Notre mariage dans le désert d'Agafay était magique. Le coucher de soleil, les bougies, la musique... Parfait !",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "fiancailles",
    title: "Fiançailles",
    description: "Célébrez votre engagement dans un cadre exceptionnel",
    longDescription: "Vos fiançailles méritent un cadre à la hauteur de votre amour. Que vous souhaitiez une soirée intime sur un rooftop avec vue sur la Médina ou une grande fête traditionnelle, nous créons l'ambiance parfaite pour célébrer votre engagement avec vos proches.",
    image: "https://atlasforevents.com/wp-content/uploads/2024/06/view-table-arrangement-by-wedding-planner-scaled-1.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/06/view-table-arrangement-by-wedding-planner-scaled-1.jpg",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800"
    ],
    icon: "Sparkles",
    highlights: [
      "Lieux romantiques et exclusifs",
      "Décoration personnalisée",
      "Traiteur marocain ou international",
      "Animation musicale",
      "Photographe professionnel",
      "Demande en mariage surprise"
    ],
    services: [
      { name: "Organisation sur mesure", description: "Fête de fiançailles personnalisée" },
      { name: "Demande en mariage", description: "Organisation de demandes surprises inoubliables" },
      { name: "Décoration romantique", description: "Fleurs, bougies, éclairages féeriques" },
      { name: "Traiteur", description: "Buffet, dîner assis ou cocktail" },
      { name: "Musique", description: "DJ, musiciens live" },
      { name: "Photo souvenir", description: "Séance photo couple incluse" }
    ],
    packages: [
      {
        name: "Intime",
        price: "À partir de 1 500€",
        description: "Soirée romantique pour deux",
        features: ["Lieu privatif", "Dîner gastronomique", "Décoration florale", "Photographe 1h"]
      },
      {
        name: "Famille",
        price: "À partir de 3 500€",
        description: "Célébration avec vos proches",
        features: ["Lieu pour 30-50 personnes", "Traiteur complet", "Décoration sur mesure", "DJ ou musique live", "Photo + Vidéo"],
        popular: true
      },
      {
        name: "Grand",
        price: "Sur devis",
        description: "Grande fête de fiançailles",
        features: ["Lieu d'exception", "100+ invités", "Décoration luxe", "Traiteur gastronomique", "Orchestre live", "Animation complète"]
      }
    ],
    faqs: [
      {
        question: "Pouvez-vous organiser une demande en mariage surprise ?",
        answer: "C'est notre spécialité ! Rooftop, désert, montgolfière, riad... Nous créons le moment parfait."
      },
      {
        question: "Quel délai pour organiser des fiançailles ?",
        answer: "Un minimum de 2-3 semaines est recommandé, mais nous pouvons faire des miracles en moins de temps."
      }
    ],
    testimonials: [
      {
        id: 1,
        author: "Pierre & Julie",
        eventType: "Fiançailles - 50 invités",
        rating: 5,
        date: "Décembre 2023",
        content: "La demande en mariage organisée par Atlas était incroyable. Elle a dit oui sous les étoiles du désert !",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "anniversaires",
    title: "Anniversaires",
    description: "Des fêtes mémorables pour tous les âges",
    longDescription: "Qu'il s'agisse d'un anniversaire d'enfant, d'un passage à la trentaine, d'un 50ème mémorable ou d'un anniversaire de mariage, nous créons des fêtes sur mesure qui marqueront les esprits. Thématiques originales, lieux insolites et animations exceptionnelles.",
    image: "https://atlasforevents.com/wp-content/uploads/2024/06/party-portraits-young-adults-having-fun-scaled-1.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/06/party-portraits-young-adults-having-fun-scaled-1.jpg",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800",
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800"
    ],
    icon: "Cake",
    highlights: [
      "Thématiques personnalisées",
      "Lieux originaux et exclusifs",
      "Gâteaux et pâtisseries sur mesure",
      "Animations adaptées à l'âge",
      "Décoration immersive",
      "DJ et ambiance festive"
    ],
    services: [
      { name: "Fêtes d'enfants", description: "Thèmes magiques, clowns, spectacles" },
      { name: "Anniversaires adultes", description: "Soirées chic ou décontractées" },
      { name: "Anniversaires de mariage", description: "Célébrations romantiques" },
      { name: "Surprise parties", description: "Organisation secrète de A à Z" },
      { name: "Gâteaux spectaculaires", description: "Pièces montées personnalisées" },
      { name: "Entertainment", description: "Shows, artistes, animations" }
    ],
    packages: [
      {
        name: "Kids Party",
        price: "À partir de 800€",
        description: "Fête d'anniversaire enfant",
        features: ["Lieu adapté", "Animation 2h", "Goûter complet", "Décoration thématique", "Gâteau personnalisé"]
      },
      {
        name: "Birthday Bash",
        price: "À partir de 2 500€",
        description: "Fête d'anniversaire adulte",
        features: ["Lieu privatisé", "Traiteur cocktail/buffet", "DJ 4h", "Décoration", "Gâteau", "Photos"],
        popular: true
      },
      {
        name: "Milestone",
        price: "Sur devis",
        description: "Anniversaires marquants (30, 40, 50...)",
        features: ["Lieu d'exception", "Organisation complète", "Traiteur gastronomique", "Animation premium", "Show surprise", "Vidéo souvenir"]
      }
    ],
    faqs: [
      {
        question: "Proposez-vous des thèmes spécifiques ?",
        answer: "Absolument ! Casino, années 80, Gatsby, tropicale, Disney... Nous réalisons tous vos souhaits thématiques."
      },
      {
        question: "Pouvez-vous organiser une surprise ?",
        answer: "Oui ! Nous gérons tout en secret : invitations, logistique, et coordination le jour J."
      }
    ],
    testimonials: [
      {
        id: 1,
        author: "Nathalie R.",
        eventType: "50ème anniversaire",
        rating: 5,
        date: "Septembre 2023",
        content: "Mon mari a eu la surprise de sa vie ! Une soirée parfaite avec tous nos amis, organisée dans le secret.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "evjf-evjg",
    title: "EVJF / EVJG",
    description: "Des moments de folie entre amis avant le grand jour",
    longDescription: "Offrez à la future mariée ou au futur marié une expérience inoubliable à Marrakech ! Entre activités sensationnelles, spa de luxe, soirées endiablées et moments de complicité, nous créons le weekend parfait pour enterrer la vie de célibataire en beauté.",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/7xm508608.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/7xm508608.jpg",
      "https://images.unsplash.com/photo-1529543544277-0b91cdab9668?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=800"
    ],
    icon: "PartyPopper",
    highlights: [
      "Programmes sur mesure 2-4 jours",
      "Hébergement villa ou riad privatif",
      "Activités fun et insolites",
      "Spa et hammam de luxe",
      "Soirées dans les meilleurs clubs",
      "Transport VIP inclus"
    ],
    services: [
      { name: "Hébergement", description: "Villas ou riads privatifs avec piscine" },
      { name: "Activités", description: "Quad, chameau, cuisine, spa, piscine..." },
      { name: "Soirées", description: "Meilleurs clubs, rooftops, soirées privées" },
      { name: "Transport", description: "Van VIP avec chauffeur" },
      { name: "Surprises", description: "Cadeaux, animations, stripteases..." },
      { name: "Photos/Vidéos", description: "Souvenirs immortalisés" }
    ],
    packages: [
      {
        name: "Weekend Fun",
        price: "À partir de 200€/pers",
        description: "2 jours d'aventure",
        features: ["1 nuit riad", "1 activité au choix", "1 soirée club", "Petit-déjeuner", "Transport"]
      },
      {
        name: "Crazy Week-end",
        price: "À partir de 350€/pers",
        description: "3 jours intenses",
        features: ["2 nuits villa privée", "2 activités", "Spa hammam", "2 soirées", "Brunch", "Transport VIP"],
        popular: true
      },
      {
        name: "Ultimate EVJF/G",
        price: "Sur devis",
        description: "4 jours de folie",
        features: ["3 nuits villa luxe", "Programme complet", "Spa privé", "Chef à domicile", "Soirée privée exclusive", "Photographe"]
      }
    ],
    faqs: [
      {
        question: "Combien de personnes minimum ?",
        answer: "Nos formules sont conçues pour des groupes de 6 à 20 personnes."
      },
      {
        question: "Pouvez-vous organiser des surprises ?",
        answer: "C'est notre spécialité ! Gags, cadeaux, activités insolites... Tout est possible."
      },
      {
        question: "Les hommes et femmes sont séparés ?",
        answer: "Nous proposons des programmes distincts EVJF et EVJG, adaptés à chaque groupe."
      }
    ],
    testimonials: [
      {
        id: 1,
        author: "Groupe Sarah",
        eventType: "EVJF - 12 filles",
        rating: 5,
        date: "Avril 2024",
        content: "3 jours de folie ! La villa était incroyable, les activités géniales et les soirées mémorables. Sarah était aux anges !",
        avatar: "https://images.unsplash.com/photo-1529543544277-0b91cdab9668?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "soirees-privees",
    title: "Soirées Privées",
    description: "Galas, corporate events et célébrations exclusives",
    longDescription: "Des soirées d'exception pour les moments qui comptent. Qu'il s'agisse d'un gala d'entreprise, d'une soirée de lancement, d'un dîner privé ou d'une fête exclusive, nous transformons vos événements en expériences inoubliables dans les lieux les plus prestigieux de Marrakech.",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/7xm564269.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/7xm564269.jpg",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
    ],
    icon: "Users",
    highlights: [
      "Lieux d'exception privatisés",
      "Traiteur gastronomique",
      "Animation haut de gamme",
      "Scénographie immersive",
      "Coordination professionnelle",
      "Expériences uniques"
    ],
    services: [
      { name: "Corporate events", description: "Séminaires, team building, galas d'entreprise" },
      { name: "Soirées privées", description: "Anniversaires, célébrations, réceptions" },
      { name: "Lancements", description: "Produits, marques, inaugurations" },
      { name: "Dîners de gala", description: "Tables d'exception, service 5 étoiles" },
      { name: "Production", description: "Son, lumière, vidéo, scénographie" },
      { name: "Entertainment", description: "Artistes, shows, performances" }
    ],
    packages: [
      {
        name: "Cocktail",
        price: "À partir de 3 000€",
        description: "Réception standing",
        features: ["Lieu 50-100 pers", "Cocktail dînatoire", "Service 3h", "Décoration", "DJ ambiance"]
      },
      {
        name: "Gala",
        price: "À partir de 8 000€",
        description: "Dîner assis haut de gamme",
        features: ["Lieu prestige", "Dîner gastronomique", "Décoration luxe", "Animation live", "Photo/Vidéo"],
        popular: true
      },
      {
        name: "Prestige",
        price: "Sur devis",
        description: "Événement sur mesure",
        features: ["Lieu exclusif privatisé", "Organisation complète", "Traiteur étoilé", "Scénographie immersive", "Entertainment premium", "Production complète"]
      }
    ],
    faqs: [
      {
        question: "Quels types de lieux proposez-vous ?",
        answer: "Palais, riads de luxe, rooftops, jardins, désert d'Agafay, musées... Marrakech regorge de lieux exceptionnels."
      },
      {
        question: "Proposez-vous des team buildings ?",
        answer: "Oui ! Activités sportives, cuisine, rallye médina, ateliers créatifs... Nous créons des expériences fédératrices."
      }
    ],
    testimonials: [
      {
        id: 1,
        author: "Entreprise XYZ",
        eventType: "Gala 200 personnes",
        rating: 5,
        date: "Février 2024",
        content: "Un séminaire et gala exceptionnels. L'organisation était parfaite, nos équipes en parlent encore !",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "gipsy-sueno",
    title: "Gipsy Sueño",
    description: "Animation musicale internationale de renommée",
    longDescription: "Gipsy Sueño est notre groupe phare, mêlant musiques du monde, flamenco, rumba et rythmes envoûtants. Avec des musiciens talentueux et une énergie communicative, ils transforment chaque événement en fête inoubliable. Disponibles pour mariages, soirées privées et événements corporate.",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/71137665_2230934303699493_6792019247049474048_n.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/71137665_2230934303699493_6792019247049474048_n.jpg",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800"
    ],
    icon: "Music",
    highlights: [
      "Groupe de 4 à 8 musiciens",
      "Répertoire international varié",
      "Flamenco, rumba, gipsy, world music",
      "Ambiance festive garantie",
      "Expérience scénique internationale",
      "Personnalisation du répertoire"
    ],
    services: [
      { name: "Mariages", description: "Animation cérémonie, cocktail et soirée" },
      { name: "Soirées privées", description: "Fêtes, anniversaires, célébrations" },
      { name: "Corporate", description: "Galas, séminaires, inaugurations" },
      { name: "Concerts", description: "Performances live complètes" },
      { name: "Duo/Trio acoustique", description: "Formule intimiste pour petits événements" },
      { name: "Full band", description: "Formation complète avec percussions" }
    ],
    packages: [
      {
        name: "Acoustique",
        price: "À partir de 1 200€",
        description: "Duo ou trio intimiste",
        features: ["2-3 musiciens", "2h de musique", "Répertoire acoustique", "Idéal cocktail/dîner"]
      },
      {
        name: "Classic",
        price: "À partir de 2 500€",
        description: "Formation standard",
        features: ["4-5 musiciens", "3h de musique", "Sonorisation incluse", "Répertoire varié", "2 sets"],
        popular: true
      },
      {
        name: "Full Band",
        price: "À partir de 4 000€",
        description: "Show complet",
        features: ["6-8 musiciens", "4h+ de musique", "Production son/lumière", "Show interactif", "Chorégraphies", "Guests possibles"]
      }
    ],
    faqs: [
      {
        question: "Quels styles musicaux proposent-ils ?",
        answer: "Flamenco, rumba, gipsy kings, musiques latines, pop internationale, et reprises adaptées à vos goûts."
      },
      {
        question: "Peuvent-ils jouer en extérieur ?",
        answer: "Oui, le groupe s'adapte à tous les environnements avec sa propre sonorisation."
      },
      {
        question: "Peut-on personnaliser le répertoire ?",
        answer: "Absolument ! Nous adaptons les sets à vos envies et pouvons apprendre des chansons spéciales."
      }
    ],
    testimonials: [
      {
        id: 1,
        author: "Marine & Alexandre",
        eventType: "Mariage",
        rating: 5,
        date: "Juin 2024",
        content: "Gipsy Sueño a mis le feu à notre mariage ! Tous nos invités ont dansé jusqu'au bout de la nuit.",
        avatar: "https://images.unsplash.com/photo-1519741497674-611481863552?w=100&h=100&fit=crop&crop=face"
      }
    ]
  }
];

export const getEventTypeById = (id: string): EventType | undefined => {
  return eventTypes.find(e => e.id === id);
};

export const getAllEventTypes = (): EventType[] => {
  return eventTypes;
};
