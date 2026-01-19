export interface Activity {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  duration: string;
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  rating: number;
  reviewCount: number;
  includes: string[];
  highlights: string[];
  itinerary: ItineraryStep[];
  practicalInfo: PracticalInfo;
  faqs: FAQ[];
  reviews: Review[];
}

export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
}

export interface PracticalInfo {
  meetingPoint: string;
  difficulty: string;
  groupSize: string;
  language: string;
  whatToBring: string[];
  included: string[];
  notIncluded: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
}

export const activities: Activity[] = [
  {
    id: "quad-palmeraie",
    name: "Aventure en Quad - Palmeraie",
    category: "adventure",
    price: 35,
    originalPrice: 50,
    duration: "2-3h",
    image: "/src/assets/images/activities/quad-sunset.webp",
    gallery: [
      "/src/assets/images/activities/quad-sunset.webp",
      "/src/assets/images/activities/quad-group.webp",
      "/src/assets/images/activities/quad-ride.webp",
      "/src/assets/images/activities/quad-adventure.webp"
    ],
    description: "Explorez la Palmeraie de Marrakech en quad Yamaha 250cc",
    longDescription: "Vivez une aventure palpitante à travers les paysages de la Palmeraie de Marrakech. Pilotez un quad Yamaha 250cc à travers les pistes de terre, les palmeraies et les villages berbères traditionnels. Une expérience unique pour les amateurs de sensations fortes et de nature sauvage, avec pause thé dans un village traditionnel.",
    rating: 4.9,
    reviewCount: 234,
    includes: ["Quad Yamaha 250cc", "Équipement complet", "Guide professionnel", "Thé marocain", "Transport"],
    highlights: [
      "Quad Yamaha 250cc dernière génération",
      "Traversée de villages berbères authentiques",
      "Pause thé dans un village traditionnel",
      "Photos souvenirs incluses",
      "Coucher de soleil sur demande"
    ],
    itinerary: [
      { time: "Départ", title: "Prise en charge", description: "Transport depuis votre hôtel/riad à Marrakech" },
      { time: "15 min", title: "Briefing sécurité", description: "Instructions de conduite et équipement de protection" },
      { time: "1h30", title: "Aventure Quad", description: "Exploration des pistes à travers la palmeraie et les villages" },
      { time: "30 min", title: "Pause thé", description: "Dégustation de thé marocain dans un village berbère" },
      { time: "Retour", title: "Transfert hôtel", description: "Retour confortable à votre hébergement" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Facile à Modérée",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Vêtements confortables", "Chaussures fermées", "Lunettes de soleil", "Crème solaire"],
      included: [
        "Transport aller-retour",
        "Quad Yamaha 250cc",
        "Équipement de protection complet",
        "Guide professionnel",
        "Thé marocain",
        "Assurance"
      ],
      notIncluded: [
        "Pourboires",
        "Photos professionnelles (en option)",
        "Dépenses personnelles"
      ]
    },
    faqs: [
      {
        question: "Faut-il un permis de conduire ?",
        answer: "Non, aucun permis n'est requis. Le briefing sécurité est suffisant pour maîtriser le quad."
      },
      {
        question: "L'activité est-elle adaptée aux débutants ?",
        answer: "Absolument ! Nos guides adaptent le parcours et la vitesse à votre niveau."
      },
      {
        question: "Puis-je monter en duo ?",
        answer: "Oui, vous pouvez partager un quad à deux pour le même prix."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Lucas M.",
        rating: 5,
        date: "Février 2024",
        content: "Expérience incroyable ! Les paysages sont magnifiques et le guide était super sympa.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      },
      {
        id: 2,
        author: "Sophie D.",
        rating: 5,
        date: "Janvier 2024",
        content: "Parfait pour les amateurs de sensations fortes. Le thé dans le village était un plus appréciable.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "quad-agafay",
    name: "Quad dans le Désert d'Agafay",
    category: "adventure",
    price: 45,
    originalPrice: 65,
    duration: "2-3h",
    image: "/src/assets/images/activities/quad-agafay-pool.webp",
    gallery: [
      "/src/assets/images/activities/quad-agafay-pool.webp",
      "/src/assets/images/activities/quad-agafay-dust.webp",
      "/src/assets/images/activities/quad-agafay-group.webp",
      "/src/assets/images/activities/quad-agafay-duo.webp",
      "/src/assets/images/activities/quad-agafay-village.webp"
    ],
    description: "Aventure quad dans le désert de pierres d'Agafay avec vue sur l'Atlas",
    longDescription: "Découvrez le désert d'Agafay en quad pour une aventure hors des sentiers battus. Ce désert de pierres offre des paysages lunaires spectaculaires avec vue imprenable sur les montagnes de l'Atlas. Parfait pour les amateurs d'adrénaline qui veulent combiner sensations fortes et beauté naturelle.",
    rating: 4.8,
    reviewCount: 189,
    includes: ["Quad 250cc", "Équipement protection", "Guide", "Thé", "Transport"],
    highlights: [
      "Paysages désertiques lunaires",
      "Vue panoramique sur l'Atlas",
      "Pistes techniques et fun",
      "Coucher de soleil (option)",
      "Photos souvenirs"
    ],
    itinerary: [
      { time: "Départ", title: "Prise en charge", description: "Transport depuis votre hôtel" },
      { time: "20 min", title: "Briefing", description: "Instructions et équipement" },
      { time: "2h", title: "Aventure Quad", description: "Exploration du désert d'Agafay" },
      { time: "20 min", title: "Pause", description: "Thé et photos" },
      { time: "Retour", title: "Transfert", description: "Retour à votre hôtel" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Modérée",
      groupSize: "2-10 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Vêtements fermés", "Lunettes", "Crème solaire", "Appareil photo"],
      included: ["Transport", "Quad", "Équipement", "Guide", "Thé", "Assurance"],
      notIncluded: ["Pourboires", "Photos pro (option)"]
    },
    faqs: [
      {
        question: "Quelle est la différence avec la Palmeraie ?",
        answer: "Agafay offre des paysages désertiques rocheux plus sauvages, tandis que la Palmeraie est verdoyante avec des palmiers."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Marc T.",
        rating: 5,
        date: "Mars 2024",
        content: "Sensations fortes garanties ! Le désert d'Agafay est impressionnant.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "montgolfiere",
    name: "Vol en Montgolfière au Lever du Soleil",
    category: "adventure",
    price: 200,
    originalPrice: 250,
    duration: "5h",
    image: "/src/assets/images/activities/montgolfiere-sunrise.webp",
    gallery: [
      "/src/assets/images/activities/montgolfiere-sunrise.webp",
      "/src/assets/images/activities/montgolfiere-takeoff.webp",
      "/src/assets/images/activities/montgolfiere-night.webp",
      "/src/assets/images/activities/montgolfiere-landscape.webp",
      "/src/assets/images/activities/montgolfiere-sky.webp",
      "/src/assets/images/activities/montgolfiere-sunset.webp"
    ],
    description: "Survolez Marrakech et l'Atlas au lever du soleil en montgolfière",
    longDescription: "Vivez une expérience magique en survolant les paysages spectaculaires de Marrakech au lever du soleil. Du ciel, admirez les montagnes de l'Atlas, la palmeraie, les villages berbères et le désert d'Agafay. Une aventure inoubliable couronnée par un petit-déjeuner berbère traditionnel à l'atterrissage.",
    rating: 5.0,
    reviewCount: 156,
    includes: ["Vol 1h", "Petit-déjeuner berbère", "Certificat souvenir", "Transport 4x4"],
    highlights: [
      "Vol d'une heure au lever du soleil",
      "Vue panoramique sur l'Atlas et le désert",
      "Petit-déjeuner berbère traditionnel",
      "Certificat de vol souvenir",
      "Transport en 4x4 inclus"
    ],
    itinerary: [
      { time: "5h00", title: "Prise en charge", description: "Départ de votre hôtel en 4x4" },
      { time: "6h00", title: "Préparation", description: "Gonflage de la montgolfière et briefing" },
      { time: "6h30", title: "Décollage", description: "Envol au lever du soleil" },
      { time: "7h30", title: "Atterrissage", description: "Célébration et petit-déjeuner berbère" },
      { time: "9h00", title: "Retour", description: "Transfert vers votre hôtel" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Très facile",
      groupSize: "4-16 personnes par montgolfière",
      language: "Français, Anglais",
      whatToBring: ["Vêtements chauds (matinées fraîches)", "Appareil photo", "Chaussures plates"],
      included: [
        "Transport en 4x4",
        "Vol en montgolfière (1h)",
        "Pilote certifié",
        "Petit-déjeuner berbère complet",
        "Certificat de vol",
        "Assurance vol"
      ],
      notIncluded: [
        "Pourboires",
        "Photos/vidéos professionnelles",
        "Dépenses personnelles"
      ]
    },
    faqs: [
      {
        question: "Le vol peut-il être annulé ?",
        answer: "En cas de conditions météo défavorables, le vol est reporté ou remboursé intégralement."
      },
      {
        question: "Y a-t-il des restrictions d'âge ?",
        answer: "Les enfants à partir de 6 ans peuvent participer. Non recommandé aux femmes enceintes."
      },
      {
        question: "Combien de personnes par montgolfière ?",
        answer: "Nos montgolfières accueillent de 4 à 16 passagers selon le modèle."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Marie-Claire F.",
        rating: 5,
        date: "Mars 2024",
        content: "Le plus beau lever de soleil de ma vie ! L'Atlas vu du ciel est magique.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "chameau-palmeraie",
    name: "Balade à Dos de Chameau - Palmeraie",
    category: "nature",
    price: 25,
    originalPrice: 40,
    duration: "1-2h",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/d2daa107ff6b37140d01fafba2a01625.jpg-1.webp",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/d2daa107ff6b37140d01fafba2a01625.jpg-1.webp",
      "https://images.unsplash.com/photo-1452022449339-59005948ec5b?w=800",
      "https://images.unsplash.com/photo-1549221987-25a490f65d34?w=800",
      "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800"
    ],
    description: "Promenade relaxante à dos de dromadaire dans la Palmeraie de Marrakech",
    longDescription: "Découvrez la Palmeraie de Marrakech de manière authentique, à dos de dromadaire. Cette balade paisible vous emmène à travers les 13 000 hectares de palmiers dattiers, offrant une immersion dans le Maroc traditionnel. Terminez par une pause thé dans un village berbère typique.",
    rating: 4.8,
    reviewCount: 312,
    includes: ["Balade relaxante", "Thé marocain", "Assurance", "Transport"],
    highlights: [
      "Traversée de la Palmeraie historique",
      "Dromadaires bien soignés et dociles",
      "Pause thé dans un village berbère",
      "Photos souvenirs",
      "Coucher de soleil en option"
    ],
    itinerary: [
      { time: "Départ", title: "Transfert", description: "Prise en charge à votre hôtel" },
      { time: "20 min", title: "Arrivée Palmeraie", description: "Rencontre avec les dromadaires" },
      { time: "1h", title: "Balade", description: "Promenade à travers les palmiers" },
      { time: "30 min", title: "Pause thé", description: "Détente dans un village traditionnel" },
      { time: "Retour", title: "Transfert", description: "Retour à votre hôtel" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Très facile",
      groupSize: "2-20 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Vêtements confortables", "Chapeau", "Crème solaire", "Appareil photo"],
      included: [
        "Transport aller-retour",
        "Balade en dromadaire",
        "Guide chamelier",
        "Thé et gâteaux marocains",
        "Assurance"
      ],
      notIncluded: [
        "Pourboires",
        "Achats personnels"
      ]
    },
    faqs: [
      {
        question: "La balade est-elle adaptée aux enfants ?",
        answer: "Oui, dès 3 ans. Les petits montent avec un adulte."
      },
      {
        question: "Les dromadaires sont-ils bien traités ?",
        answer: "Absolument. Nous travaillons avec des partenaires certifiés qui respectent le bien-être animal."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Julie B.",
        rating: 5,
        date: "Décembre 2023",
        content: "Expérience authentique et reposante. Les enfants ont adoré !",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "chameau-agafay",
    name: "Balade à Dos de Chameau - Désert Agafay",
    category: "nature",
    price: 35,
    originalPrice: 50,
    duration: "2h",
    image: "/src/assets/images/activities/agafay-camel-ride.webp",
    gallery: [
      "/src/assets/images/activities/agafay-camel-ride.webp",
      "/src/assets/images/activities/agafay-lounge.webp",
      "/src/assets/images/activities/agafay-sunset.webp",
      "/src/assets/images/activities/agafay-motorcycle.webp"
    ],
    description: "Balade en chameau dans le désert d'Agafay avec coucher de soleil",
    longDescription: "Vivez l'expérience désertique à dos de dromadaire dans le magnifique désert d'Agafay. Cette balade vous offre des paysages lunaires spectaculaires avec vue sur les montagnes de l'Atlas. L'option coucher de soleil transforme cette excursion en un moment magique et inoubliable.",
    rating: 4.9,
    reviewCount: 245,
    includes: ["Balade 2h", "Thé berbère", "Transport", "Photos"],
    highlights: [
      "Paysages désertiques uniques",
      "Vue sur l'Atlas",
      "Coucher de soleil (option)",
      "Thé et pause traditionnelle",
      "Ambiance authentique"
    ],
    itinerary: [
      { time: "Départ", title: "Transfert", description: "Prise en charge à l'hôtel" },
      { time: "45 min", title: "Arrivée Agafay", description: "Rencontre avec les chameaux" },
      { time: "2h", title: "Balade", description: "Exploration du désert" },
      { time: "30 min", title: "Pause", description: "Thé et coucher de soleil" },
      { time: "Retour", title: "Transfert", description: "Retour à Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Facile",
      groupSize: "2-15 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Vêtements confortables", "Chapeau", "Lunettes", "Appareil photo"],
      included: ["Transport", "Balade chameau", "Guide", "Thé"],
      notIncluded: ["Pourboires", "Dîner (option)"]
    },
    faqs: [
      {
        question: "Peut-on combiner avec un dîner ?",
        answer: "Oui, nous proposons l'option dîner au camp pour prolonger l'expérience."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Caroline P.",
        rating: 5,
        date: "Avril 2024",
        content: "Coucher de soleil magique ! Une expérience à ne pas manquer.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "cours-cuisine",
    name: "Cours de Cuisine Marocaine",
    category: "food",
    price: 45,
    originalPrice: 65,
    duration: "4h",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29-1.jpeg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29-1.jpeg",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800",
      "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
    ],
    description: "Apprenez les secrets de la cuisine marocaine avec un chef local",
    longDescription: "Plongez dans l'art culinaire marocain lors d'un cours de cuisine authentique dans le désert d'Agafay. Accompagné d'un chef local, découvrez les techniques ancestrales pour préparer tajines, couscous, pastilla et pâtisseries orientales. Dégustez ensuite vos créations dans un cadre exceptionnel avec vue sur l'Atlas.",
    rating: 5.0,
    reviewCount: 98,
    includes: ["Cours avec chef local", "Repas complet", "Recettes traditionnelles", "Transport"],
    highlights: [
      "Cours avec un chef expérimenté",
      "Marché aux épices (en option)",
      "Préparation de 3 plats traditionnels",
      "Dégustation de vos créations",
      "Livre de recettes offert"
    ],
    itinerary: [
      { time: "9h00", title: "Prise en charge", description: "Départ vers le désert d'Agafay" },
      { time: "10h00", title: "Introduction", description: "Présentation des ingrédients et épices" },
      { time: "10h30", title: "Préparation", description: "Cuisine des plats traditionnels" },
      { time: "13h00", title: "Dégustation", description: "Repas avec vue sur l'Atlas" },
      { time: "14h00", title: "Retour", description: "Transfert vers Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Très facile",
      groupSize: "2-10 personnes",
      language: "Français, Anglais",
      whatToBring: ["Appareil photo", "Bonne humeur"],
      included: [
        "Transport aller-retour",
        "Tous les ingrédients",
        "Chef professionnel",
        "Repas complet",
        "Boissons",
        "Livre de recettes"
      ],
      notIncluded: [
        "Pourboires",
        "Achats personnels"
      ]
    },
    faqs: [
      {
        question: "Quels plats allons-nous préparer ?",
        answer: "Tajine de poulet aux citrons confits, salade marocaine, et pastilla aux amandes généralement."
      },
      {
        question: "Je suis végétarien, est-ce possible ?",
        answer: "Bien sûr ! Nous adaptons le menu à vos préférences alimentaires."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Camille R.",
        rating: 5,
        date: "Janvier 2024",
        content: "Le chef était passionné et pédagogue. Mon tajine était délicieux !",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "diner-spectacle-chez-ali",
    name: "Dîner Spectacle Chez Ali - Fantasia",
    category: "culture",
    price: 45,
    originalPrice: 60,
    duration: "4h",
    image: "/src/assets/images/activities/chez-ali-entrance.webp",
    gallery: [
      "/src/assets/images/activities/chez-ali-entrance.webp",
      "/src/assets/images/activities/chez-ali-tent.webp",
      "/src/assets/images/activities/chez-ali-show.webp",
      "/src/assets/images/activities/chez-ali-restaurant.webp",
      "/src/assets/images/activities/chez-ali-fantasia.webp"
    ],
    description: "Soirée spectacle Fantasia avec dîner marocain traditionnel",
    longDescription: "Plongez dans la culture marocaine lors d'une soirée exceptionnelle Chez Ali. Profitez d'un dîner traditionnel composé de spécialités marocaines tout en admirant le spectacle de la Fantasia : cavaliers berbères, danseurs, acrobates et musiciens vous transporteront dans les traditions ancestrales du Maroc.",
    rating: 4.6,
    reviewCount: 312,
    includes: ["Dîner marocain 5 plats", "Spectacle Fantasia", "Folklore berbère", "Transport"],
    highlights: [
      "Spectacle équestre Fantasia",
      "Dîner marocain complet (5 plats)",
      "Danseuses du ventre",
      "Musiciens gnaouas",
      "Feu d'artifice (certains soirs)"
    ],
    itinerary: [
      { time: "19h30", title: "Prise en charge", description: "Départ de votre hôtel" },
      { time: "20h00", title: "Accueil", description: "Arrivée et thé de bienvenue" },
      { time: "20h30", title: "Dîner", description: "Repas traditionnel 5 plats" },
      { time: "21h30", title: "Spectacle", description: "Fantasia, danses et musique" },
      { time: "23h30", title: "Retour", description: "Transfert vers votre hôtel" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Très facile",
      groupSize: "Places individuelles",
      language: "Multilingue",
      whatToBring: ["Appareil photo", "Veste légère (soirées fraîches)"],
      included: [
        "Transport aller-retour",
        "Dîner marocain complet",
        "Spectacle Fantasia",
        "Boissons pendant le dîner"
      ],
      notIncluded: [
        "Pourboires",
        "Boissons alcoolisées",
        "Photos professionnelles"
      ]
    },
    faqs: [
      {
        question: "Le spectacle est-il adapté aux enfants ?",
        answer: "Oui, le spectacle est familial et les enfants adorent généralement."
      },
      {
        question: "Y a-t-il des options végétariennes ?",
        answer: "Oui, prévenez-nous lors de la réservation."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Patrick L.",
        rating: 4,
        date: "Novembre 2023",
        content: "Belle soirée, spectacle impressionnant. Le dîner était copieux et bon.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "diner-agafay-coucher-soleil",
    name: "Dîner au Coucher du Soleil - Désert Agafay",
    category: "food",
    price: 65,
    originalPrice: 85,
    duration: "5h",
    image: "/src/assets/images/activities/diner-agafay-sunset.webp",
    gallery: [
      "/src/assets/images/activities/diner-agafay-sunset.webp",
      "/src/assets/images/activities/diner-agafay-tent.webp",
      "/src/assets/images/activities/diner-agafay-horizon.webp",
      "/src/assets/images/activities/diner-agafay-table.webp",
      "/src/assets/images/activities/diner-agafay-cushions.webp"
    ],
    description: "Dîner gastronomique dans le désert d'Agafay au coucher du soleil",
    longDescription: "Vivez une expérience culinaire exceptionnelle dans le cadre magique du désert d'Agafay. Admirez le coucher de soleil sur les montagnes de l'Atlas avant de savourer un dîner traditionnel marocain sous les étoiles. Musique live et ambiance intimiste garanties.",
    rating: 4.9,
    reviewCount: 178,
    includes: ["Dîner 4 plats", "Coucher de soleil", "Musique live", "Transport"],
    highlights: [
      "Coucher de soleil sur l'Atlas",
      "Dîner sous les étoiles",
      "Musique traditionnelle live",
      "Camp de luxe",
      "Ambiance romantique"
    ],
    itinerary: [
      { time: "16h00", title: "Départ", description: "Prise en charge à l'hôtel" },
      { time: "17h00", title: "Arrivée", description: "Thé de bienvenue" },
      { time: "18h00", title: "Coucher de soleil", description: "Moment magique" },
      { time: "19h30", title: "Dîner", description: "Repas gastronomique" },
      { time: "21h30", title: "Retour", description: "Transfert Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Très facile",
      groupSize: "2-20 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Veste légère", "Appareil photo"],
      included: ["Transport", "Thé bienvenue", "Dîner 4 plats", "Musique live"],
      notIncluded: ["Boissons alcoolisées", "Pourboires"]
    },
    faqs: [
      {
        question: "Peut-on passer la nuit ?",
        answer: "Oui, nous proposons l'option nuit en tente de luxe."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Marie et Pierre",
        rating: 5,
        date: "Février 2024",
        content: "Soirée romantique parfaite ! Le dîner était exquis et l'ambiance magique.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "hammam-spa",
    name: "Hammam & Spa Traditionnel",
    category: "wellness",
    price: 35,
    originalPrice: 50,
    duration: "2h",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-07-26-at-12.27.10-1.jpeg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-07-26-at-12.27.10-1.jpeg",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800"
    ],
    description: "Expérience authentique de hammam marocain avec gommage et massage",
    longDescription: "Offrez-vous une pause bien-être dans un hammam traditionnel marocain. Profitez d'un rituel complet incluant bain de vapeur, gommage au savon noir et gant kessa, enveloppement au rhassoul et massage relaxant à l'huile d'argan. Une expérience purifiante pour le corps et l'esprit.",
    rating: 4.8,
    reviewCount: 289,
    includes: ["Hammam", "Gommage savon noir", "Enveloppement rhassoul", "Massage huile d'argan"],
    highlights: [
      "Hammam traditionnel authentique",
      "Gommage au savon noir et kessa",
      "Enveloppement au ghassoul",
      "Massage relaxant huile d'argan",
      "Thé à la menthe offert"
    ],
    itinerary: [
      { time: "Arrivée", title: "Accueil", description: "Bienvenue et vestiaire" },
      { time: "30 min", title: "Hammam", description: "Bain de vapeur purificant" },
      { time: "30 min", title: "Gommage", description: "Savon noir et kessa" },
      { time: "20 min", title: "Rhassoul", description: "Enveloppement purifiant" },
      { time: "30 min", title: "Massage", description: "Huile d'argan relaxante" }
    ],
    practicalInfo: {
      meetingPoint: "Spa partenaire (transfert inclus)",
      difficulty: "Très facile",
      groupSize: "Individuel ou duo",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Maillot de bain", "Change de vêtements"],
      included: ["Transfert", "Serviettes", "Produits", "Thé"],
      notIncluded: ["Pourboires", "Soins supplémentaires"]
    },
    faqs: [
      {
        question: "Est-ce mixte ?",
        answer: "Les séances sont généralement séparées. Nous proposons aussi des options couples."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Sophie M.",
        rating: 5,
        date: "Mars 2024",
        content: "Pur moment de détente ! Le gommage était incroyable.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "jardin-majorelle",
    name: "Visite Jardin Majorelle & Musée YSL",
    category: "culture",
    price: 25,
    originalPrice: 35,
    duration: "3h",
    image: "/src/assets/images/activities/majorelle-villa.webp",
    gallery: [
      "/src/assets/images/activities/majorelle-villa.webp",
      "/src/assets/images/activities/majorelle-vase.webp",
      "/src/assets/images/activities/majorelle-pond.webp",
      "/src/assets/images/activities/majorelle-fountain.webp",
      "/src/assets/images/activities/ysl-museum.webp",
      "/src/assets/images/activities/ysl-sculpture.webp",
      "/src/assets/images/activities/musee-berbere.webp"
    ],
    description: "Découvrez le célèbre Jardin Majorelle et le Musée Yves Saint Laurent",
    longDescription: "Visitez le légendaire Jardin Majorelle, créé par le peintre Jacques Majorelle et restauré par Yves Saint Laurent et Pierre Bergé. Admirez les cactus géants, les bambous et le fameux bleu Majorelle, puis explorez le Musée Yves Saint Laurent adjacent, dédié au célèbre couturier français.",
    rating: 4.9,
    reviewCount: 456,
    includes: ["Entrée Jardin Majorelle", "Musée Berbère", "Musée YSL", "Transport"],
    highlights: [
      "Jardin Majorelle iconique",
      "Bleu Majorelle unique",
      "Musée Berbère",
      "Musée Yves Saint Laurent",
      "Guide francophone"
    ],
    itinerary: [
      { time: "Départ", title: "Transfert", description: "Prise en charge à l'hôtel" },
      { time: "1h30", title: "Jardin Majorelle", description: "Visite guidée du jardin" },
      { time: "45 min", title: "Musée Berbère", description: "Collection ethnographique" },
      { time: "45 min", title: "Musée YSL", description: "Hommage au couturier" },
      { time: "Retour", title: "Transfert", description: "Retour à l'hôtel" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Très facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais",
      whatToBring: ["Appareil photo", "Chapeau", "Eau"],
      included: ["Transport", "Entrées", "Guide"],
      notIncluded: ["Pourboires", "Achats boutique"]
    },
    faqs: [
      {
        question: "Peut-on y aller sans guide ?",
        answer: "Oui, mais le guide apporte un éclairage historique précieux."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Emma V.",
        rating: 5,
        date: "Avril 2024",
        content: "Un havre de paix au cœur de Marrakech. Le bleu Majorelle est hypnotisant.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "buggy-palmeraie",
    name: "Buggy dans la Palmeraie",
    category: "adventure",
    price: 45,
    originalPrice: 60,
    duration: "2-3h",
    image: "/src/assets/images/activities/buggy-palmeraie.webp",
    gallery: [
      "/src/assets/images/activities/buggy-palmeraie.webp",
      "/src/assets/images/activities/buggy-desert.webp",
      "/src/assets/images/activities/buggy-fleet.webp",
      "/src/assets/images/activities/buggy-group.webp"
    ],
    description: "Aventure en buggy à travers la Palmeraie de Marrakech",
    longDescription: "Pilotez un buggy puissant à travers les pistes de la Palmeraie de Marrakech. Cette activité offre plus de confort et de puissance que le quad, idéale pour les couples ou les familles. Traversez les villages berbères et profitez d'une pause thé traditionnelle.",
    rating: 4.8,
    reviewCount: 167,
    includes: ["Buggy", "Équipement", "Guide", "Thé", "Transport"],
    highlights: [
      "Buggy puissant et confortable",
      "Idéal pour 2 personnes",
      "Traversée villages berbères",
      "Pause thé traditionnel",
      "Photos incluses"
    ],
    itinerary: [
      { time: "Départ", title: "Transfert", description: "Prise en charge hôtel" },
      { time: "15 min", title: "Briefing", description: "Instructions et équipement" },
      { time: "2h", title: "Aventure", description: "Exploration Palmeraie" },
      { time: "20 min", title: "Pause", description: "Thé berbère" },
      { time: "Retour", title: "Transfert", description: "Retour hôtel" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Modérée",
      groupSize: "2-8 personnes (1-4 buggies)",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Vêtements fermés", "Lunettes", "Crème solaire"],
      included: ["Transport", "Buggy", "Équipement", "Guide", "Thé", "Assurance"],
      notIncluded: ["Pourboires", "Photos pro"]
    },
    faqs: [
      {
        question: "Faut-il un permis ?",
        answer: "Oui, un permis de conduire est requis pour le buggy."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "François D.",
        rating: 5,
        date: "Mai 2024",
        content: "Super fun ! Le buggy est plus confortable que le quad.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "nuit-bivouac-agafay",
    name: "Nuit en Bivouac - Désert Agafay",
    category: "adventure",
    price: 85,
    originalPrice: 120,
    duration: "24h",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/agafay-rocky-dunes-636x426.webp",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/agafay-rocky-dunes-636x426.webp",
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
      "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800",
      "https://images.unsplash.com/photo-1517623249442-af85e65ee9f7?w=800"
    ],
    description: "Nuit magique sous les étoiles dans un camp de luxe au désert d'Agafay",
    longDescription: "Vivez une nuit inoubliable dans le désert d'Agafay. Arrivez pour le coucher de soleil, savourez un dîner traditionnel sous les étoiles, dormez dans une tente berbère confortable et réveillez-vous au lever du soleil avec les montagnes de l'Atlas en toile de fond. Une expérience authentique et romantique.",
    rating: 4.9,
    reviewCount: 234,
    includes: ["Nuit en tente", "Dîner", "Petit-déjeuner", "Activités", "Transport"],
    highlights: [
      "Coucher de soleil sur l'Atlas",
      "Dîner sous les étoiles",
      "Tente berbère confortable",
      "Musique traditionnelle",
      "Lever de soleil magique"
    ],
    itinerary: [
      { time: "15h00", title: "Départ", description: "Prise en charge hôtel" },
      { time: "16h00", title: "Arrivée", description: "Installation et thé" },
      { time: "18h00", title: "Sunset", description: "Coucher de soleil" },
      { time: "20h00", title: "Dîner", description: "Repas traditionnel" },
      { time: "Nuit", title: "Bivouac", description: "Nuit sous les étoiles" },
      { time: "7h00", title: "Lever", description: "Petit-déjeuner" },
      { time: "10h00", title: "Retour", description: "Transfert Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Vêtements chauds", "Appareil photo", "Nécessaire toilette"],
      included: ["Transport", "Tente", "Repas", "Activités", "Animation"],
      notIncluded: ["Boissons alcoolisées", "Pourboires"]
    },
    faqs: [
      {
        question: "Les tentes sont-elles confortables ?",
        answer: "Oui, nos tentes sont équipées de vrais lits, couvertures chaudes et éclairage."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Laura et Thomas",
        rating: 5,
        date: "Octobre 2024",
        content: "Expérience magique ! Les étoiles, le silence, l'ambiance... Parfait !",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "cascades-ouzoud",
    name: "Cascades d'Ouzoud - Excursion Journée",
    category: "nature",
    price: 40,
    originalPrice: 55,
    duration: "10h",
    image: "/src/assets/images/activities/ouzoud-falls.webp",
    gallery: [
      "/src/assets/images/activities/ouzoud-falls.webp",
      "/src/assets/images/activities/ouzoud-monkey.webp",
      "/src/assets/images/activities/ouzoud-panorama.webp",
      "/src/assets/images/activities/ouzoud-boats.webp",
      "/src/assets/images/activities/ouzoud-boat-ride.webp"
    ],
    description: "Découvrez les plus hautes cascades d'Afrique du Nord",
    longDescription: "Partez à la découverte des majestueuses Cascades d'Ouzoud, les plus hautes d'Afrique du Nord avec leurs 110 mètres de chute. Cette excursion d'une journée vous emmène à travers les paysages de l'Atlas, avec possibilité de baignade dans les bassins naturels et rencontre avec les macaques de Barbarie qui peuplent le site.",
    rating: 4.9,
    reviewCount: 287,
    includes: ["Transport", "Guide", "Temps libre baignade", "Rencontre macaques"],
    highlights: [
      "Cascades de 110 mètres de haut",
      "Baignade dans les bassins naturels",
      "Observation des macaques de Barbarie",
      "Randonnée jusqu'à la base des cascades",
      "Déjeuner traditionnel berbère en option"
    ],
    itinerary: [
      { time: "8h00", title: "Départ", description: "Prise en charge à votre hôtel" },
      { time: "10h30", title: "Arrivée", description: "Arrivée aux cascades d'Ouzoud" },
      { time: "11h00", title: "Randonnée", description: "Descente vers la base des cascades" },
      { time: "12h30", title: "Déjeuner", description: "Repas dans un restaurant local" },
      { time: "14h00", title: "Baignade", description: "Temps libre pour la baignade" },
      { time: "16h00", title: "Retour", description: "Route vers Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Modérée",
      groupSize: "2-15 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Maillot de bain", "Serviette", "Chaussures de marche", "Crème solaire", "Appareil photo"],
      included: ["Transport aller-retour", "Guide", "Temps libre"],
      notIncluded: ["Déjeuner", "Boissons", "Pourboires"]
    },
    faqs: [
      {
        question: "Peut-on se baigner ?",
        answer: "Oui, les bassins naturels au pied des cascades permettent la baignade."
      },
      {
        question: "Y a-t-il vraiment des singes ?",
        answer: "Oui, des macaques de Barbarie vivent autour des cascades. Ne les nourrissez pas."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Claire B.",
        rating: 5,
        date: "Mars 2024",
        content: "Spectaculaire ! Les cascades sont impressionnantes et la baignade rafraîchissante.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "visite-marrakech",
    name: "Visite Culturelle de Marrakech",
    category: "culture",
    price: 40,
    originalPrice: 55,
    duration: "7h",
    image: "/src/assets/images/activities/marrakech-jemaa-fna.webp",
    gallery: [
      "/src/assets/images/activities/marrakech-jemaa-fna.webp",
      "/src/assets/images/activities/marrakech-koutoubia.webp",
      "/src/assets/images/activities/marrakech-koutoubia-fountain.webp",
      "/src/assets/images/activities/marrakech-menara.webp",
      "/src/assets/images/activities/marrakech-souk.webp",
      "/src/assets/images/activities/marrakech-medina.webp",
      "/src/assets/images/activities/marrakech-museum-door.webp"
    ],
    description: "Explorez les trésors historiques de la ville ocre",
    longDescription: "Découvrez les joyaux de Marrakech lors d'une visite guidée complète. De la majestueuse mosquée Koutoubia au somptueux Palais Bahia, des mystérieux Tombeaux Saadiens aux souks animés, plongez dans l'histoire millénaire de la ville ocre avec un guide expert francophone.",
    rating: 4.8,
    reviewCount: 312,
    includes: ["Guide expert", "Entrées monuments", "Déjeuner marocain", "Transport"],
    highlights: [
      "Mosquée Koutoubia (extérieur)",
      "Palais Bahia",
      "Tombeaux Saadiens",
      "Medersa Ben Youssef",
      "Souks traditionnels",
      "Place Jemaa el-Fna"
    ],
    itinerary: [
      { time: "9h00", title: "Départ", description: "Prise en charge à l'hôtel" },
      { time: "9h30", title: "Koutoubia", description: "La plus grande mosquée de Marrakech" },
      { time: "10h30", title: "Palais Bahia", description: "Chef-d'œuvre de l'architecture marocaine" },
      { time: "11h30", title: "Tombeaux", description: "Tombeaux Saadiens" },
      { time: "12h30", title: "Déjeuner", description: "Restaurant traditionnel" },
      { time: "14h00", title: "Medersa", description: "Ancienne école coranique" },
      { time: "15h00", title: "Souks", description: "Exploration des marchés" },
      { time: "16h00", title: "Retour", description: "Fin de visite" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Espagnol, Arabe",
      whatToBring: ["Chaussures confortables", "Chapeau", "Eau", "Appareil photo"],
      included: ["Transport", "Guide", "Entrées", "Déjeuner"],
      notIncluded: ["Boissons", "Achats personnels", "Pourboires"]
    },
    faqs: [
      {
        question: "La visite convient-elle aux enfants ?",
        answer: "Oui, c'est une excellente façon de leur faire découvrir la culture marocaine."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Michel P.",
        rating: 5,
        date: "Janvier 2024",
        content: "Guide passionné et très cultivé. Une visite enrichissante !",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "merzouga",
    name: "Aventure à Merzouga - Désert du Sahara",
    category: "adventure",
    price: 299,
    originalPrice: 399,
    duration: "2 jours",
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/ignacio-ceballos-eP94dHUaY1U-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/07/ignacio-ceballos-eP94dHUaY1U-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
      "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800",
      "https://images.unsplash.com/photo-1517623249442-af85e65ee9f7?w=800"
    ],
    description: "Vivez l'expérience ultime du Sahara à Merzouga",
    longDescription: "Partez pour une aventure inoubliable de 2 jours dans le désert du Sahara à Merzouga. Traversez les gorges du Dadès et du Todra, admirez les dunes dorées de l'Erg Chebbi, vivez un coucher de soleil magique à dos de dromadaire et passez une nuit sous les étoiles dans un camp de luxe berbère.",
    rating: 5.0,
    reviewCount: 189,
    includes: ["Transport 4x4", "Nuit en camp de luxe", "Repas", "Trekking chameau", "Guide"],
    highlights: [
      "Dunes de l'Erg Chebbi (jusqu'à 150m)",
      "Nuit en camp de luxe sous les étoiles",
      "Trek à dos de dromadaire au coucher du soleil",
      "Gorges du Dadès et du Todra",
      "Route des Mille Kasbahs",
      "Lever de soleil sur les dunes"
    ],
    itinerary: [
      { time: "Jour 1 - 7h", title: "Départ", description: "Route vers Ouarzazate" },
      { time: "Jour 1 - 12h", title: "Gorges", description: "Gorges du Dadès, déjeuner" },
      { time: "Jour 1 - 16h", title: "Arrivée", description: "Arrivée Merzouga, trek chameau" },
      { time: "Jour 1 - 19h", title: "Camp", description: "Dîner et nuit en camp" },
      { time: "Jour 2 - 6h", title: "Sunrise", description: "Lever de soleil sur les dunes" },
      { time: "Jour 2 - 8h", title: "Petit-dej", description: "Petit-déjeuner au camp" },
      { time: "Jour 2 - 18h", title: "Retour", description: "Retour à Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Modérée",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Vêtements chauds", "Lunettes de soleil", "Crème solaire", "Appareil photo"],
      included: ["Transport 4x4", "Nuit camp luxe", "Repas", "Trek chameau", "Guide"],
      notIncluded: ["Boissons", "Pourboires", "Dépenses personnelles"]
    },
    faqs: [
      {
        question: "Fait-il très froid la nuit ?",
        answer: "Les nuits peuvent être fraîches (5-10°C). Les tentes sont équipées de couvertures chaudes."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Jean-Marc L.",
        rating: 5,
        date: "Décembre 2023",
        content: "Expérience incroyable ! Le lever de soleil sur les dunes est magique.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "ouarzazate-kasbahs",
    name: "Ouarzazate & Kasbahs",
    category: "culture",
    price: 50,
    originalPrice: 70,
    duration: "1 journée",
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/hassan-ouajbir-INcADDyMwwo-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/07/hassan-ouajbir-INcADDyMwwo-unsplash-scaled.jpg",
      "/src/assets/images/destinations/ouarzazate-ait-benhaddou.webp",
      "/src/assets/images/destinations/ouarzazate-studios.webp",
      "/src/assets/images/destinations/ouarzazate-kasbah.webp"
    ],
    description: "Explorez le Hollywood du Maroc et ses kasbahs légendaires",
    longDescription: "Découvrez Ouarzazate, surnommée le 'Hollywood du Maroc', porte d'entrée du Sahara. Visitez la Kasbah Aït Ben Haddou, classée UNESCO, explorez les Atlas Studios où ont été tournés de nombreux films hollywoodiens, et admirez les paysages spectaculaires de la route des Mille Kasbahs.",
    rating: 4.7,
    reviewCount: 178,
    includes: ["Transport", "Guide", "Entrées aux sites", "Déjeuner"],
    highlights: [
      "Kasbah Aït Ben Haddou (UNESCO)",
      "Atlas Studios (Gladiator, Game of Thrones)",
      "Col du Tizi n'Tichka (2260m)",
      "Kasbah Taourirt",
      "Route des Mille Kasbahs"
    ],
    itinerary: [
      { time: "7h00", title: "Départ", description: "Prise en charge à l'hôtel" },
      { time: "10h00", title: "Tichka", description: "Traversée du col (2260m)" },
      { time: "11h00", title: "Aït Ben Haddou", description: "Visite de la kasbah UNESCO" },
      { time: "13h00", title: "Déjeuner", description: "Restaurant traditionnel" },
      { time: "14h30", title: "Studios", description: "Visite des Atlas Studios" },
      { time: "16h00", title: "Taourirt", description: "Kasbah de Taourirt" },
      { time: "19h00", title: "Retour", description: "Retour à Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Facile",
      groupSize: "2-15 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Chapeau", "Lunettes de soleil", "Appareil photo", "Eau"],
      included: ["Transport climatisé", "Guide", "Entrées", "Déjeuner"],
      notIncluded: ["Boissons", "Pourboires"]
    },
    faqs: [
      {
        question: "La route est-elle sûre ?",
        answer: "Oui, la route est bien entretenue. Nos chauffeurs sont expérimentés."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Anne-Marie D.",
        rating: 5,
        date: "Février 2024",
        content: "Fascinant ! Aït Ben Haddou est à couper le souffle.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "vallee-ourika",
    name: "Vallée de l'Ourika - Cascades & Nature",
    category: "nature",
    price: 45,
    originalPrice: 60,
    duration: "1 journée",
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/matthew-fainman-3yonP2JaGTU-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/07/matthew-fainman-3yonP2JaGTU-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800"
    ],
    description: "Randonnée et cascades dans les montagnes de l'Atlas",
    longDescription: "Échappez à la chaleur de Marrakech et découvrez la fraîcheur de la Vallée de l'Ourika, nichée dans les contreforts du Haut Atlas. Randonnez jusqu'aux sept cascades, visitez des villages berbères traditionnels, découvrez une coopérative d'huile d'argan et savourez un déjeuner berbère authentique au bord de la rivière.",
    rating: 4.8,
    reviewCount: 234,
    includes: ["Transport", "Guide", "Déjeuner berbère", "Visite coopérative"],
    highlights: [
      "Sept cascades de Setti Fatma",
      "Villages berbères traditionnels",
      "Coopérative d'huile d'argan",
      "Déjeuner au bord de la rivière",
      "Panoramas sur l'Atlas"
    ],
    itinerary: [
      { time: "9h00", title: "Départ", description: "Prise en charge à l'hôtel" },
      { time: "10h00", title: "Coopérative", description: "Visite coopérative d'argan" },
      { time: "11h00", title: "Vallée", description: "Arrivée dans la vallée" },
      { time: "11h30", title: "Randonnée", description: "Montée vers les cascades" },
      { time: "13h00", title: "Déjeuner", description: "Restaurant au bord de l'eau" },
      { time: "15h00", title: "Village", description: "Visite d'un village berbère" },
      { time: "17h00", title: "Retour", description: "Retour à Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Modérée (randonnée 1h30)",
      groupSize: "2-15 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Chaussures de marche", "Maillot de bain", "Crème solaire", "Eau"],
      included: ["Transport", "Guide", "Déjeuner", "Visite coopérative"],
      notIncluded: ["Boissons", "Pourboires", "Achats personnels"]
    },
    faqs: [
      {
        question: "La randonnée est-elle difficile ?",
        answer: "C'est une randonnée modérée de 1h30. Des chaussures confortables sont recommandées."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Sylvie R.",
        rating: 5,
        date: "Mai 2024",
        content: "Journée parfaite ! Le déjeuner au bord de la rivière était délicieux.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "essaouira",
    name: "Essaouira - Médina & Plages",
    category: "nature",
    price: 45,
    originalPrice: 60,
    duration: "1 journée",
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/rigel-No_Y3bn4lNQ-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/07/rigel-No_Y3bn4lNQ-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1555881400-69294e40a5ef?w=800",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
    ],
    description: "Découvrez la perle de l'Atlantique et sa médina UNESCO",
    longDescription: "Partez à la découverte d'Essaouira, ancienne Mogador, ville côtière aux remparts blancs et bleus. Explorez la médina classée UNESCO, flânez dans le port de pêche animé, dégustez du poisson frais grillé et profitez de la brise atlantique sur les longues plages de sable.",
    rating: 4.9,
    reviewCount: 289,
    includes: ["Transport", "Guide", "Temps libre", "Visite médina"],
    highlights: [
      "Médina classée UNESCO",
      "Port de pêche pittoresque",
      "Remparts et bastions portugais",
      "Galeries d'art",
      "Plages et sports nautiques",
      "Poisson frais grillé"
    ],
    itinerary: [
      { time: "8h00", title: "Départ", description: "Prise en charge à l'hôtel" },
      { time: "10h30", title: "Arrivée", description: "Arrivée à Essaouira" },
      { time: "11h00", title: "Médina", description: "Visite guidée de la médina" },
      { time: "12h30", title: "Port", description: "Port de pêche" },
      { time: "13h00", title: "Déjeuner", description: "Poisson frais (libre)" },
      { time: "14h30", title: "Libre", description: "Temps libre (plage, souks)" },
      { time: "17h00", title: "Retour", description: "Départ vers Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Facile",
      groupSize: "2-15 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Veste coupe-vent", "Maillot de bain", "Crème solaire", "Appareil photo"],
      included: ["Transport climatisé", "Guide", "Visite guidée"],
      notIncluded: ["Déjeuner", "Boissons", "Activités nautiques", "Pourboires"]
    },
    faqs: [
      {
        question: "Il fait froid à Essaouira ?",
        answer: "La brise atlantique rafraîchit l'air. Prévoyez une veste légère."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Christine M.",
        rating: 5,
        date: "Avril 2024",
        content: "Coup de cœur ! La médina est magnifique et le poisson délicieux.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "asilah",
    name: "Asilah - Ville Côtière",
    category: "culture",
    price: 55,
    originalPrice: 75,
    duration: "1 journée",
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/aziz-acharki-Bl-azXExvOs-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/08/aziz-acharki-Bl-azXExvOs-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1555881400-69294e40a5ef?w=800",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
    ],
    description: "Découvrez la ville aux murs peints et fresques colorées",
    longDescription: "Asilah, perle de la côte atlantique marocaine, vous séduira par ses murs blanchis ornés de fresques murales colorées, vestiges de son festival culturel annuel. Explorez la médina aux ruelles fleuries, les remparts portugais et profitez des plages paisibles de cette ville d'artistes.",
    rating: 4.6,
    reviewCount: 145,
    includes: ["Transport", "Guide", "Visite médina", "Temps libre"],
    highlights: [
      "Médina aux murs blanchis",
      "Fresques murales colorées",
      "Remparts portugais du XVe siècle",
      "Plages tranquilles",
      "Galeries d'artistes"
    ],
    itinerary: [
      { time: "7h00", title: "Départ", description: "Prise en charge à l'hôtel" },
      { time: "11h00", title: "Arrivée", description: "Arrivée à Asilah" },
      { time: "11h30", title: "Médina", description: "Visite de la médina" },
      { time: "13h00", title: "Déjeuner", description: "Restaurant local (libre)" },
      { time: "14h30", title: "Libre", description: "Plage et exploration" },
      { time: "16h00", title: "Retour", description: "Route vers Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Espagnol",
      whatToBring: ["Appareil photo", "Maillot de bain", "Crème solaire"],
      included: ["Transport", "Guide", "Visite guidée"],
      notIncluded: ["Déjeuner", "Boissons", "Pourboires"]
    },
    faqs: [
      {
        question: "Quand a lieu le festival d'art ?",
        answer: "Le festival culturel d'Asilah a lieu généralement en été (juillet-août)."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Isabelle F.",
        rating: 5,
        date: "Juin 2024",
        content: "Ville charmante et photogénique. Les fresques sont superbes !",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen - La Perle Bleue",
    category: "culture",
    price: 55,
    originalPrice: 75,
    duration: "1 journée",
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/milad-alizadeh-JibMa0FbyHw-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/08/milad-alizadeh-JibMa0FbyHw-unsplash-scaled.jpg",
      "/src/assets/images/destinations/chefchaouen-1.webp",
      "/src/assets/images/destinations/chefchaouen-2.webp",
      "/src/assets/images/destinations/chefchaouen-3.webp"
    ],
    description: "Explorez la ville bleue la plus photogénique du Maroc",
    longDescription: "Chefchaouen, nichée dans les montagnes du Rif, est célèbre pour ses ruelles et maisons peintes en bleu. Cette ville magique vous transportera dans un autre monde avec ses artisans, ses panoramas montagneux et son atmosphère paisible. Un paradis pour les photographes et les amoureux de l'authentique.",
    rating: 4.9,
    reviewCount: 378,
    includes: ["Transport", "Guide local", "Visite médina", "Temps libre"],
    highlights: [
      "Médina entièrement bleue",
      "Place Outa el Hammam",
      "Kasbah et musée",
      "Artisanat local (tissages)",
      "Panorama sur le Rif",
      "Atmosphère paisible"
    ],
    itinerary: [
      { time: "6h00", title: "Départ", description: "Départ matinal de Marrakech" },
      { time: "11h00", title: "Arrivée", description: "Arrivée à Chefchaouen" },
      { time: "11h30", title: "Médina", description: "Visite guidée de la ville bleue" },
      { time: "13h00", title: "Déjeuner", description: "Restaurant avec vue" },
      { time: "14h30", title: "Libre", description: "Exploration et photos" },
      { time: "16h00", title: "Retour", description: "Route vers Marrakech" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      whatToBring: ["Appareil photo", "Chaussures confortables", "Veste légère"],
      included: ["Transport", "Guide", "Visite guidée"],
      notIncluded: ["Déjeuner", "Boissons", "Achats", "Pourboires"]
    },
    faqs: [
      {
        question: "Pourquoi la ville est-elle bleue ?",
        answer: "La tradition viendrait des Juifs qui s'y sont installés au XVe siècle. Le bleu symboliserait le ciel et la spiritualité."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Pierre D.",
        rating: 5,
        date: "Mars 2024",
        content: "Magique ! Chaque rue est plus belle que la précédente. Un must !",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "imlil-trekking",
    name: "Trekking à Imlil - Montagnes de l'Atlas",
    category: "adventure",
    price: 45,
    originalPrice: 60,
    duration: "1 journée",
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/alpha-plus-wmwnqKDZHfo-unsplash-1-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/08/alpha-plus-wmwnqKDZHfo-unsplash-1-scaled.jpg",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800"
    ],
    description: "Randonnée dans le Haut Atlas et villages berbères authentiques",
    longDescription: "Partez à la découverte du Haut Atlas depuis Imlil, point de départ vers le Mont Toubkal. Randonnez à travers des paysages montagneux spectaculaires, visitez des villages berbères traditionnels accrochés aux flancs des montagnes et partagez un déjeuner authentique chez l'habitant.",
    rating: 4.8,
    reviewCount: 267,
    includes: ["Transport 4x4", "Guide de montagne", "Déjeuner berbère", "Thé à la menthe"],
    highlights: [
      "Vue sur le Mont Toubkal (4167m)",
      "Villages berbères d'Imlil",
      "Randonnée en montagne",
      "Déjeuner chez l'habitant",
      "Culture berbère authentique"
    ],
    itinerary: [
      { time: "8h00", title: "Départ", description: "Prise en charge à l'hôtel" },
      { time: "9h30", title: "Imlil", description: "Arrivée à Imlil" },
      { time: "10h00", title: "Randonnée", description: "Trek vers les villages" },
      { time: "12h30", title: "Déjeuner", description: "Chez l'habitant" },
      { time: "14h00", title: "Village", description: "Visite d'un village berbère" },
      { time: "16h00", title: "Retour", description: "Descente et retour" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Modérée",
      groupSize: "2-10 personnes",
      language: "Français, Anglais, Berbère",
      whatToBring: ["Chaussures de randonnée", "Vêtements chauds", "Crème solaire", "Eau"],
      included: ["Transport 4x4", "Guide", "Déjeuner", "Thé"],
      notIncluded: ["Boissons", "Pourboires"]
    },
    faqs: [
      {
        question: "Faut-il être sportif ?",
        answer: "Le trek est modéré (2-3h de marche). Une condition physique normale suffit."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Julien T.",
        rating: 5,
        date: "Octobre 2024",
        content: "Paysages grandioses ! Le déjeuner chez l'habitant était très chaleureux.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "cooperative-argan",
    name: "Coopérative d'Argan - Expérience Authentique",
    category: "food",
    price: 60,
    originalPrice: 80,
    duration: "2-3h",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-2.jpeg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-2.jpeg",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800",
      "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
    ],
    description: "Découvrez les secrets de l'huile d'argan avec les femmes berbères",
    longDescription: "Visitez une coopérative d'huile d'argan gérée par des femmes berbères. Découvrez le processus ancestral de fabrication de l'huile d'argan, de la récolte des noix au pressage traditionnel. Dégustez l'amlou (pâte d'amandes à l'argan) et emportez des produits authentiques directement des productrices.",
    rating: 4.7,
    reviewCount: 156,
    includes: ["Transport", "Visite guidée", "Démonstration", "Dégustation"],
    highlights: [
      "Fabrication traditionnelle de l'huile d'argan",
      "Rencontre avec les femmes berbères",
      "Dégustation d'amlou",
      "Produits cosmétiques naturels",
      "Commerce équitable"
    ],
    itinerary: [
      { time: "Départ", title: "Transfert", description: "Prise en charge à l'hôtel" },
      { time: "45 min", title: "Arrivée", description: "Coopérative de femmes" },
      { time: "30 min", title: "Démonstration", description: "Pressage traditionnel" },
      { time: "30 min", title: "Dégustation", description: "Huile d'argan et amlou" },
      { time: "30 min", title: "Boutique", description: "Achat de produits" },
      { time: "Retour", title: "Transfert", description: "Retour à l'hôtel" }
    ],
    practicalInfo: {
      meetingPoint: "Prise en charge à l'hôtel",
      difficulty: "Très facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Berbère",
      whatToBring: ["Appareil photo", "Espèces pour achats"],
      included: ["Transport", "Guide", "Visite", "Dégustation"],
      notIncluded: ["Achats personnels", "Pourboires"]
    },
    faqs: [
      {
        question: "L'huile d'argan est-elle authentique ?",
        answer: "Oui, vous verrez la fabrication devant vous et achèterez directement aux productrices."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Nathalie B.",
        rating: 5,
        date: "Novembre 2024",
        content: "Expérience enrichissante ! Les femmes sont adorables et l'amlou délicieux.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  }
];

export const activityCategories = [
  { id: "all", name: "Toutes" },
  { id: "adventure", name: "Aventure" },
  { id: "nature", name: "Nature" },
  { id: "culture", name: "Culture" },
  { id: "food", name: "Gastronomie" },
  { id: "wellness", name: "Bien-être" }
];

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};

export const getActivitiesByCategory = (category: string): Activity[] => {
  if (category === "all") return activities;
  return activities.filter(activity => activity.category === category);
};
