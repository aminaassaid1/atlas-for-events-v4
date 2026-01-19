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
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800"
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
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Buggy-Tour-at-the-plam-grove-of-Marrakech.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/Buggy-Tour-at-the-plam-grove-of-Marrakech.jpg",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800"
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
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-11.58.10.jpeg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-11.58.10.jpeg",
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800",
      "https://images.unsplash.com/photo-1474623809196-26c1d33457cc?w=800",
      "https://images.unsplash.com/photo-1520428456505-6c0f94e1cdee?w=800"
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
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/agafay-rocky-dunes-636x426.webp",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/agafay-rocky-dunes-636x426.webp",
      "https://images.unsplash.com/photo-1452022449339-59005948ec5b?w=800",
      "https://images.unsplash.com/photo-1549221987-25a490f65d34?w=800",
      "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800"
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
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/9cabd722-e487-4d05-be00-109180fcf9d9.avif",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/9cabd722-e487-4d05-be00-109180fcf9d9.avif",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800"
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
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Cours-de-cuisine-marocaine-authentique-dans-le-desert-dAgafay.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/Cours-de-cuisine-marocaine-authentique-dans-le-desert-dAgafay.jpg",
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
      "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800",
      "https://images.unsplash.com/photo-1517623249442-af85e65ee9f7?w=800"
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
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Jardin-Majorelle-Marrakech.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/Jardin-Majorelle-Marrakech.jpg",
      "https://images.unsplash.com/photo-1553913861-c372b5c93b02?w=800",
      "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800",
      "https://images.unsplash.com/photo-1580746738099-62dbda180c32?w=800"
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
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Buggy-Tour-at-the-plam-grove-of-Marrakech.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/Buggy-Tour-at-the-plam-grove-of-Marrakech.jpg",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800"
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
