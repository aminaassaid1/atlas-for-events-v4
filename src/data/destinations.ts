export interface Destination {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  category: string;
  rating: number;
  reviewCount: number;
  includes: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  practicalInfo: PracticalInfo;
  faqs: FAQ[];
  reviews: Review[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface PracticalInfo {
  bestSeason: string;
  difficulty: string;
  groupSize: string;
  language: string;
  departure: string;
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

export const destinations: Destination[] = [
  {
    id: "merzouga",
    name: "Merzouga - Désert du Sahara",
    duration: "3 jours / 2 nuits",
    price: 280,
    originalPrice: 350,
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/ignacio-ceballos-eP94dHUaY1U-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/07/ignacio-ceballos-eP94dHUaY1U-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
      "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800",
      "https://images.unsplash.com/photo-1517623249442-af85e65ee9f7?w=800"
    ],
    description: "Trekking à chameau, Erg Chebbi et camps de luxe dans le Sahara",
    longDescription: "Embarquez pour une aventure inoubliable au cœur du Sahara marocain. Cette expédition de 3 jours vous emmène à travers les majestueuses dunes de l'Erg Chebbi, où vous découvrirez la magie du désert sous les étoiles. Montez à dos de dromadaire au coucher du soleil, dormez dans un camp de luxe traditionnel, et réveillez-vous avec les premiers rayons du soleil illuminant les dunes dorées.",
    category: "Désert",
    rating: 5.0,
    reviewCount: 127,
    includes: ["1 nuit hôtel", "1 nuit bivouac luxe", "Balade dromadaire", "Demi-pension", "Transport 4x4"],
    highlights: [
      "Balade à dos de dromadaire au coucher du soleil",
      "Nuit sous les étoiles dans un camp de luxe",
      "Lever de soleil sur les dunes de l'Erg Chebbi",
      "Dîner traditionnel berbère avec musique",
      "Traversée des oasis et palmeraies"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Vallée du Dadès",
        description: "Départ de Marrakech à travers le Haut Atlas via le col du Tizi n'Tichka. Arrêt à Ouarzazate et visite de la Kasbah Aït Ben Haddou.",
        activities: ["Traversée du Haut Atlas", "Visite Aït Ben Haddou", "Déjeuner à Ouarzazate", "Nuit à la Vallée du Dadès"]
      },
      {
        day: 2,
        title: "Vallée du Dadès - Merzouga",
        description: "Route vers Merzouga via les Gorges du Todra. Arrivée dans l'après-midi pour une balade à dos de dromadaire jusqu'au camp.",
        activities: ["Gorges du Todra", "Balade en dromadaire", "Coucher de soleil sur les dunes", "Dîner berbère et musique"]
      },
      {
        day: 3,
        title: "Merzouga - Marrakech",
        description: "Lever de soleil sur les dunes puis retour vers Marrakech via Erfoud et Errachidia.",
        activities: ["Lever de soleil", "Petit-déjeuner au camp", "Retour Marrakech", "Arrivée en soirée"]
      }
    ],
    practicalInfo: {
      bestSeason: "Septembre à Mai",
      difficulty: "Facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport en 4x4 climatisé",
        "1 nuit en hôtel/riad",
        "1 nuit en camp de luxe",
        "Balade à dos de dromadaire",
        "Demi-pension (dîners et petits-déjeuners)",
        "Guide professionnel francophone"
      ],
      notIncluded: [
        "Déjeuners",
        "Boissons",
        "Pourboires",
        "Assurance voyage",
        "Dépenses personnelles"
      ]
    },
    faqs: [
      {
        question: "Quelle est la meilleure période pour visiter le Sahara ?",
        answer: "La meilleure période est de septembre à mai. Les mois d'été (juin-août) peuvent être très chauds avec des températures dépassant 45°C."
      },
      {
        question: "Le voyage est-il adapté aux enfants ?",
        answer: "Oui, ce voyage est adapté aux enfants à partir de 6 ans. Les balades en dromadaire sont sécurisées et encadrées."
      },
      {
        question: "Que dois-je emporter ?",
        answer: "Prévoyez des vêtements légers pour la journée, chauds pour les nuits fraîches, un chapeau, des lunettes de soleil, et de la crème solaire."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Marie L.",
        rating: 5,
        date: "Janvier 2024",
        content: "Une expérience magique ! Le camp était luxueux et le coucher de soleil sur les dunes restera gravé dans ma mémoire.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        id: 2,
        author: "Pierre D.",
        rating: 5,
        date: "Décembre 2023",
        content: "Guide exceptionnel, organisation parfaite. Les étoiles dans le désert sont incroyables !",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "ouarzazate",
    name: "Ouarzazate - Hollywood du Maroc",
    duration: "1 jour",
    price: 30,
    originalPrice: 50,
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/hassan-ouajbir-INcADDyMwwo-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/07/hassan-ouajbir-INcADDyMwwo-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800",
      "https://images.unsplash.com/photo-1548820070-26f8c22e0c8e?w=800",
      "https://images.unsplash.com/photo-1553522991-71439aa62779?w=800"
    ],
    description: "Explorez le désert et les Kasbahs historiques, Hollywood du Maroc",
    longDescription: "Découvrez Ouarzazate, surnommée le 'Hollywood du Maroc', porte d'entrée du Sahara et capitale du cinéma africain. Cette excursion d'une journée vous fait traverser le spectaculaire col du Tizi n'Tichka et visiter les sites emblématiques comme la Kasbah Aït Ben Haddou, classée au patrimoine mondial de l'UNESCO, et les fameux Atlas Studios où ont été tournés de nombreux films hollywoodiens.",
    category: "Culture",
    rating: 4.8,
    reviewCount: 89,
    includes: ["Kasbah Taourirt", "Ait Ben Haddou UNESCO", "Atlas Studios", "Transport"],
    highlights: [
      "Kasbah Aït Ben Haddou classée UNESCO",
      "Visite des Atlas Studios",
      "Traversée du col Tizi n'Tichka (2260m)",
      "Kasbah Taourirt",
      "Panoramas sur la vallée du Drâa"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Ouarzazate - Marrakech",
        description: "Journée complète à la découverte des trésors de Ouarzazate et de ses environs.",
        activities: [
          "Départ 7h de Marrakech",
          "Traversée du Haut Atlas",
          "Visite Aït Ben Haddou",
          "Déjeuner à Ouarzazate",
          "Atlas Studios",
          "Kasbah Taourirt",
          "Retour Marrakech 19h"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Très facile",
      groupSize: "2-15 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport climatisé aller-retour",
        "Guide professionnel",
        "Entrées aux sites",
        "Eau minérale"
      ],
      notIncluded: [
        "Déjeuner",
        "Boissons",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Quels films ont été tournés à Ouarzazate ?",
        answer: "De nombreux films célèbres : Gladiator, Lawrence d'Arabie, Game of Thrones, Kingdom of Heaven, et bien d'autres."
      },
      {
        question: "La route est-elle sécurisée ?",
        answer: "Oui, la route est bien entretenue. Nos chauffeurs sont expérimentés et connaissent parfaitement le trajet."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Sophie M.",
        rating: 5,
        date: "Février 2024",
        content: "Journée fascinante ! Aït Ben Haddou est absolument magnifique, on se croirait dans un film.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "ourika",
    name: "Vallée de l'Ourika",
    duration: "8 heures",
    price: 20,
    originalPrice: 45,
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/matthew-fainman-3yonP2JaGTU-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/07/matthew-fainman-3yonP2JaGTU-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800"
    ],
    description: "Cascades majestueuses, randonnées et villages berbères traditionnels",
    longDescription: "Échappez à l'agitation de Marrakech le temps d'une journée pour découvrir la fraîcheur de la vallée de l'Ourika. Cette excursion vous emmène au pied de l'Atlas, à travers des villages berbères authentiques, jusqu'aux célèbres cascades de Setti Fatma. Profitez d'une randonnée revigorante, découvrez l'artisanat local et savourez un déjeuner traditionnel au bord de la rivière.",
    category: "Nature",
    rating: 4.9,
    reviewCount: 156,
    includes: ["Cascades Setti Fatma", "Villages berbères", "Jardins botaniques", "Transport"],
    highlights: [
      "Cascades de Setti Fatma",
      "Villages berbères traditionnels",
      "Jardins aromatiques",
      "Coopérative d'argan",
      "Déjeuner berbère au bord de l'eau"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Vallée de l'Ourika",
        description: "Journée d'évasion dans les montagnes de l'Atlas.",
        activities: [
          "Départ 9h de Marrakech",
          "Arrêt coopérative d'argan",
          "Visite jardin aromatique",
          "Déjeuner berbère",
          "Randonnée aux cascades",
          "Retour Marrakech 17h"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Mars à Novembre",
      difficulty: "Modérée (randonnée optionnelle)",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport aller-retour",
        "Guide local",
        "Visite coopérative d'argan",
        "Visite jardin aromatique"
      ],
      notIncluded: [
        "Déjeuner (environ 8€)",
        "Pourboires guides locaux",
        "Achats personnels"
      ]
    },
    faqs: [
      {
        question: "La randonnée est-elle difficile ?",
        answer: "La randonnée jusqu'à la première cascade est facile (20 min). Les cascades supérieures demandent plus d'effort."
      },
      {
        question: "Peut-on se baigner ?",
        answer: "Oui, en été vous pouvez vous rafraîchir dans les bassins naturels. Prévoyez un maillot de bain."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Jean-Marc B.",
        rating: 5,
        date: "Mars 2024",
        content: "Journée parfaite ! Les cascades sont magnifiques et le déjeuner au bord de l'eau était délicieux.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "essaouira",
    name: "Essaouira - Perle de l'Atlantique",
    duration: "10 heures",
    price: 20,
    originalPrice: 45,
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/rigel-No_Y3bn4lNQ-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/07/rigel-No_Y3bn4lNQ-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800",
      "https://images.unsplash.com/photo-1553913861-c372b5c93b02?w=800",
      "https://images.unsplash.com/photo-1580746738099-62dbda180c32?w=800"
    ],
    description: "Médina historique UNESCO, plages et poisson frais",
    longDescription: "Découvrez Essaouira, la perle de l'Atlantique. Cette ville portuaire au charme envoûtant vous séduira par sa médina classée au patrimoine mondial de l'UNESCO, ses remparts face à l'océan, et son atmosphère artistique unique. Flânez dans les ruelles où Jimi Hendrix trouva l'inspiration, dégustez le meilleur poisson frais du Maroc au port, et laissez-vous bercer par les alizés.",
    category: "Côte",
    rating: 4.8,
    reviewCount: 203,
    includes: ["Médina UNESCO", "Atelier marqueterie", "Mellah", "Déjeuner poisson frais", "Transport"],
    highlights: [
      "Médina classée UNESCO",
      "Port de pêche traditionnel",
      "Remparts et sqalas",
      "Quartier des artisans (thuya)",
      "Plage et kitesurf"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Essaouira - Marrakech",
        description: "Journée complète à la découverte de la cité des alizés.",
        activities: [
          "Départ 8h de Marrakech",
          "Arrêt coopérative d'argan",
          "Arrivée Essaouira 11h",
          "Visite médina et remparts",
          "Déjeuner au port",
          "Temps libre",
          "Retour Marrakech 18h"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Très facile",
      groupSize: "2-15 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport climatisé aller-retour",
        "Arrêt coopérative d'argan",
        "Guide dans la médina",
        "Temps libre (3h minimum)"
      ],
      notIncluded: [
        "Déjeuner",
        "Achats personnels",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps libre avons-nous à Essaouira ?",
        answer: "Vous disposez d'environ 5-6 heures sur place pour explorer à votre rythme."
      },
      {
        question: "Le vent est-il gênant ?",
        answer: "Essaouira est connue pour ses alizés. Prévoyez une veste légère, surtout en fin de journée."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Claire F.",
        rating: 5,
        date: "Avril 2024",
        content: "Coup de cœur pour Essaouira ! L'ambiance est magique et le poisson grillé au port est un délice.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen - La Perle Bleue du Maroc",
    duration: "2 jours / 1 nuit",
    price: 135,
    originalPrice: 180,
    image: "/src/assets/images/destinations/chefchaouen-1.webp",
    gallery: [
      "/src/assets/images/destinations/chefchaouen-1.webp",
      "/src/assets/images/destinations/chefchaouen-2.webp",
      "/src/assets/images/destinations/chefchaouen-3.webp",
      "/src/assets/images/destinations/chefchaouen-4.webp",
      "/src/assets/images/destinations/chefchaouen-5.webp"
    ],
    description: "Explorez la ville bleue emblématique nichée dans les montagnes du Rif",
    longDescription: "Découvrez Chefchaouen, la ville bleue mythique du Maroc, nichée dans les montagnes du Rif. Cette escapade de 2 jours vous plonge dans un monde de ruelles teintées de bleu, d'artisanat local et de paysages montagneux époustouflants. Une expérience unique qui éveillera vos sens et restera gravée dans votre mémoire.",
    category: "Culture",
    rating: 4.9,
    reviewCount: 145,
    includes: ["1 nuit en riad", "Petit-déjeuner", "Visite guidée médina", "Transport"],
    highlights: [
      "Médina aux murs bleus",
      "Artisanat local (tissage, cuir)",
      "Cascade d'Akchour (optionnel)",
      "Source Ras el-Maa",
      "Panorama sur les montagnes du Rif"
    ],
    itinerary: [
      {
        day: 1,
        title: "Départ - Chefchaouen",
        description: "Voyage à travers le Maroc vers la perle bleue.",
        activities: ["Départ matinal", "Traversée des paysages", "Arrivée à Chefchaouen", "Installation au riad", "Visite de la médina"]
      },
      {
        day: 2,
        title: "Chefchaouen - Retour",
        description: "Matinée libre et retour.",
        activities: ["Petit-déjeuner", "Temps libre ou cascade d'Akchour", "Déjeuner", "Retour"]
      }
    ],
    practicalInfo: {
      bestSeason: "Mars à Novembre",
      difficulty: "Facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech ou Fès",
      included: [
        "Transport climatisé",
        "1 nuit en riad de charme",
        "Petit-déjeuner",
        "Guide local"
      ],
      notIncluded: [
        "Déjeuners et dîners",
        "Excursion cascade",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Pourquoi la ville est-elle bleue ?",
        answer: "La tradition remonte aux réfugiés juifs espagnols au 15ème siècle. Le bleu symbolise le ciel et le divin."
      },
      {
        question: "La randonnée aux cascades est-elle incluse ?",
        answer: "Non, mais nous pouvons l'organiser en option (supplément de 15€)."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Emma V.",
        rating: 5,
        date: "Mai 2024",
        content: "Un rêve éveillé ! Chaque ruelle est plus belle que la précédente. Le riad était parfait.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "fes",
    name: "Fès - La Cité Impériale",
    duration: "2 jours / 1 nuit",
    price: 150,
    originalPrice: 200,
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/annie-spratt-tJf8i2vqHLw-unsplash-scaled.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/08/annie-spratt-tJf8i2vqHLw-unsplash-scaled.jpg",
      "https://images.unsplash.com/photo-1553913861-c372b5c93b02?w=800",
      "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800",
      "https://images.unsplash.com/photo-1580746738099-62dbda180c32?w=800"
    ],
    description: "Découvrez la plus ancienne médina du monde et le patrimoine impérial de Fès",
    longDescription: "Fès est le cœur spirituel et culturel du Maroc. Cette excursion de 2 jours vous fait découvrir la plus grande médina médiévale du monde, ses souks labyrinthiques, ses célèbres tanneries et son patrimoine architectural exceptionnel. Une immersion totale dans l'histoire millénaire du royaume.",
    category: "Culture",
    rating: 4.9,
    reviewCount: 178,
    includes: ["1 nuit en riad", "Petit-déjeuner", "Guide officiel", "Transport"],
    highlights: [
      "Médina Fès el-Bali (UNESCO)",
      "Tanneries Chouara",
      "Université Al Quaraouiyine",
      "Palais Royal",
      "Souks traditionnels"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Fès",
        description: "Voyage vers la cité impériale avec arrêts panoramiques.",
        activities: ["Départ matinal", "Arrêts paysages", "Arrivée Fès", "Installation riad", "Première découverte"]
      },
      {
        day: 2,
        title: "Fès - Visite - Retour",
        description: "Journée complète de visite puis retour.",
        activities: ["Petit-déjeuner", "Visite médina et tanneries", "Déjeuner traditionnel", "Retour Marrakech"]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Modérée (beaucoup de marche)",
      groupSize: "2-10 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport climatisé",
        "1 nuit en riad",
        "Petit-déjeuner",
        "Guide officiel de Fès",
        "Entrées monuments"
      ],
      notIncluded: [
        "Déjeuners et dîners",
        "Achats personnels",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Peut-on se perdre dans la médina ?",
        answer: "Notre guide officiel connaît chaque ruelle. Vous découvrirez les trésors cachés en toute sérénité."
      },
      {
        question: "L'odeur des tanneries est-elle supportable ?",
        answer: "On vous offre de la menthe fraîche pour atténuer l'odeur. C'est une expérience authentique unique !"
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Philippe R.",
        rating: 5,
        date: "Mars 2024",
        content: "Voyage dans le temps garanti. La médina de Fès est fascinante, notre guide était passionné.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "ouzoud",
    name: "Cascades d'Ouzoud",
    duration: "1 jour",
    price: 25,
    originalPrice: 40,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Ouzoud-Waterfalls-636x426.jpg.webp",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/Ouzoud-Waterfalls-636x426.jpg.webp",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
      "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=800",
      "https://images.unsplash.com/photo-1520302723167-2e35c4bcad6a?w=800"
    ],
    description: "Les plus hautes cascades du Maroc au cœur de l'Atlas",
    longDescription: "Découvrez les majestueuses cascades d'Ouzoud, les plus hautes du Maroc avec leurs 110 mètres de chute. Situées au cœur de l'Atlas, ces cascades offrent un spectacle naturel époustouflant. Observez les singes magots dans leur habitat naturel, baignez-vous dans les bassins naturels et savourez un déjeuner berbère face à ce panorama exceptionnel.",
    category: "Nature",
    rating: 4.8,
    reviewCount: 234,
    includes: ["Guide local", "Temps libre baignade", "Observation singes", "Transport"],
    highlights: [
      "Cascades de 110 mètres",
      "Singes magots en liberté",
      "Baignade dans les bassins naturels",
      "Balade en barque (optionnel)",
      "Déjeuner berbère"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Cascades d'Ouzoud - Marrakech",
        description: "Journée nature au cœur de l'Atlas.",
        activities: [
          "Départ 8h de Marrakech",
          "Arrivée aux cascades",
          "Descente et découverte",
          "Déjeuner face aux cascades",
          "Temps libre baignade",
          "Retour Marrakech 18h"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Mars à Novembre",
      difficulty: "Modérée (escaliers)",
      groupSize: "2-15 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport climatisé",
        "Guide local",
        "Temps libre"
      ],
      notIncluded: [
        "Déjeuner (8-10€)",
        "Balade en barque (3€)",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Peut-on se baigner ?",
        answer: "Oui, de mai à septembre les bassins sont parfaits pour la baignade. Apportez votre maillot !"
      },
      {
        question: "Les singes sont-ils dangereux ?",
        answer: "Non, mais gardez vos affaires près de vous et ne les nourrissez pas."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Léa M.",
        rating: 5,
        date: "Juillet 2024",
        content: "Magnifique ! La baignade était rafraîchissante et les singes adorables. À ne pas manquer.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "agadir",
    name: "Agadir - Station Balnéaire",
    duration: "2 jours / 1 nuit",
    price: 120,
    originalPrice: 160,
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/view-agadir-city-from-the-kasbah-morocco.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/08/view-agadir-city-from-the-kasbah-morocco.jpg",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
      "https://images.unsplash.com/photo-1596046478951-f55bc993cf7c?w=800",
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800"
    ],
    description: "Soleil, plages dorées et détente sur la côte atlantique",
    longDescription: "Évadez-vous vers Agadir, la station balnéaire la plus ensoleillée du Maroc. Profitez de ses 300 jours de soleil par an, de ses plages de sable doré et de sa promenade maritime. Une escapade parfaite pour combiner détente, sports nautiques et découverte de la ville reconstruite après le tremblement de terre de 1960.",
    category: "Côte",
    rating: 4.7,
    reviewCount: 167,
    includes: ["1 nuit hôtel bord de mer", "Petit-déjeuner", "Temps libre plage", "Transport"],
    highlights: [
      "Plage de sable fin (6 km)",
      "Promenade maritime",
      "Kasbah et vue panoramique",
      "Souk El Had",
      "Sports nautiques"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Agadir",
        description: "Voyage vers la côte et après-midi détente.",
        activities: ["Départ matinal", "Traversée paysages", "Arrivée Agadir", "Installation hôtel", "Après-midi plage"]
      },
      {
        day: 2,
        title: "Agadir - Retour",
        description: "Matinée libre et retour.",
        activities: ["Petit-déjeuner", "Plage ou visite Kasbah", "Déjeuner", "Retour Marrakech"]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Très facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport climatisé",
        "1 nuit hôtel 4 étoiles",
        "Petit-déjeuner"
      ],
      notIncluded: [
        "Déjeuners et dîners",
        "Sports nautiques",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Peut-on prolonger le séjour ?",
        answer: "Absolument ! Nous proposons des extensions avec des activités comme le surf ou l'excursion à Paradise Valley."
      },
      {
        question: "La plage est-elle sécurisée ?",
        answer: "Oui, la plage principale est surveillée et équipée de tous les services."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Thomas B.",
        rating: 5,
        date: "Août 2024",
        content: "Parfait pour décompresser ! L'hôtel était top et la plage magnifique.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "imlil",
    name: "Imlil - Vallée du Toubkal",
    duration: "1 jour",
    price: 35,
    originalPrice: 50,
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/morocco-atlas-mountains-imlil.jpg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2022/08/morocco-atlas-mountains-imlil.jpg",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800"
    ],
    description: "Randonnée dans les montagnes de l'Atlas au pied du Toubkal",
    longDescription: "Découvrez Imlil, village berbère niché à 1740m d'altitude, point de départ des randonnées vers le Mont Toubkal, plus haut sommet d'Afrique du Nord (4167m). Cette excursion vous offre une immersion dans la vie traditionnelle des montagnards berbères, avec des paysages à couper le souffle et un déjeuner chez l'habitant.",
    category: "Nature",
    rating: 4.9,
    reviewCount: 189,
    includes: ["Guide de montagne", "Déjeuner berbère", "Randonnée guidée", "Transport"],
    highlights: [
      "Village d'Imlil (1740m)",
      "Randonnée dans l'Atlas",
      "Maison d'hôtes berbère",
      "Déjeuner traditionnel",
      "Vue sur le Toubkal"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Imlil - Marrakech",
        description: "Journée montagne dans l'Atlas.",
        activities: [
          "Départ 8h30 de Marrakech",
          "Arrivée Imlil",
          "Randonnée vers Aroumd",
          "Déjeuner chez l'habitant",
          "Retour Marrakech 17h"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Mars à Novembre",
      difficulty: "Modérée",
      groupSize: "2-10 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport climatisé",
        "Guide de montagne certifié",
        "Déjeuner berbère",
        "Thé de bienvenue"
      ],
      notIncluded: [
        "Boissons supplémentaires",
        "Mule (optionnel)",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Quel niveau de condition physique faut-il ?",
        answer: "Un niveau moyen suffit. La randonnée dure environ 2-3h avec des pauses."
      },
      {
        question: "Peut-on monter au sommet du Toubkal ?",
        answer: "L'ascension du Toubkal nécessite 2 jours. Nous proposons cette option séparément."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Antoine L.",
        rating: 5,
        date: "Octobre 2024",
        content: "Paysages époustouflants et accueil berbère chaleureux. Le déjeuner était délicieux.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "agafay",
    name: "Désert d'Agafay",
    duration: "1 jour ou 1 nuit",
    price: 45,
    originalPrice: 70,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/agafay-rocky-dunes-636x426.webp",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/agafay-rocky-dunes-636x426.webp",
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
      "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=800",
      "https://images.unsplash.com/photo-1517623249442-af85e65ee9f7?w=800"
    ],
    description: "L'expérience désertique à 45 minutes de Marrakech",
    longDescription: "Le désert d'Agafay offre une expérience désertique unique à seulement 45 minutes de Marrakech. Ce désert de pierres avec vue sur l'Atlas est le cadre parfait pour un coucher de soleil mémorable, un dîner sous les étoiles ou une nuit en camp de luxe. Combinez quad, balade à dos de chameau et gastronomie berbère.",
    category: "Désert",
    rating: 4.8,
    reviewCount: 256,
    includes: ["Coucher de soleil", "Dîner berbère", "Musique live", "Transport"],
    highlights: [
      "Coucher de soleil sur l'Atlas",
      "Dîner traditionnel sous les étoiles",
      "Spectacle de musique berbère",
      "Option quad ou chameau",
      "Camps de luxe (option nuit)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech - Agafay - Marrakech",
        description: "Soirée magique dans le désert d'Agafay.",
        activities: [
          "Départ 15h de Marrakech",
          "Arrivée au camp",
          "Thé de bienvenue",
          "Coucher de soleil",
          "Dîner et spectacle",
          "Retour Marrakech 22h"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Très facile",
      groupSize: "2-20 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport aller-retour",
        "Thé de bienvenue",
        "Dîner 3 plats",
        "Spectacle musique"
      ],
      notIncluded: [
        "Boissons alcoolisées",
        "Activités optionnelles (quad, chameau)",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Quelle est la différence avec le Sahara ?",
        answer: "Agafay est un désert de pierres (pas de sable) mais offre des paysages lunaires magnifiques et la proximité de Marrakech."
      },
      {
        question: "Peut-on passer la nuit ?",
        answer: "Oui, nous proposons des options avec nuit en camp de luxe (supplément)."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Julie et Marc",
        rating: 5,
        date: "Novembre 2024",
        content: "Soirée romantique parfaite ! Le coucher de soleil était incroyable et le dîner excellent.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  }
];

export const categories = [
  { id: "all", name: "Toutes" },
  { id: "Désert", name: "Désert" },
  { id: "Culture", name: "Culture" },
  { id: "Nature", name: "Nature" },
  { id: "Côte", name: "Côte" }
];

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(dest => dest.id === id);
};

export const getDestinationsByCategory = (category: string): Destination[] => {
  if (category === "all") return destinations;
  return destinations.filter(dest => dest.category === category);
};
