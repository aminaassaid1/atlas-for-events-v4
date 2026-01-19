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
    image: "/src/assets/images/activities/merzouga-camp.webp",
    gallery: [
      "/src/assets/images/activities/merzouga-camp.webp",
      "/src/assets/images/activities/merzouga-camel.webp",
      "/src/assets/images/activities/merzouga-quad.webp",
      "/src/assets/images/activities/merzouga-caravan.webp",
      "/src/assets/images/activities/merzouga-aerial.webp",
      "/src/assets/images/activities/merzouga-dunes.webp"
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
    image: "/src/assets/images/destinations/ouarzazate-ait-benhaddou.webp",
    gallery: [
      "/src/assets/images/destinations/ouarzazate-ait-benhaddou.webp",
      "/src/assets/images/destinations/ouarzazate-cinema.webp",
      "/src/assets/images/destinations/ouarzazate-kasbah.webp",
      "/src/assets/images/destinations/ouarzazate-studios.webp",
      "/src/assets/images/destinations/ouarzazate-panorama.webp"
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
    image: "/src/assets/images/destinations/fes-tanneries-2.webp",
    gallery: [
      "/src/assets/images/destinations/fes-tanneries-2.webp",
      "/src/assets/images/destinations/fes-riad.webp",
      "/src/assets/images/destinations/fes-tanneries-1.webp",
      "/src/assets/images/destinations/fes-murailles.webp",
      "/src/assets/images/destinations/fes-panorama.webp"
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
    image: "/src/assets/images/activities/ouzoud-falls.webp",
    gallery: [
      "/src/assets/images/activities/ouzoud-falls.webp",
      "/src/assets/images/activities/ouzoud-monkey.webp",
      "/src/assets/images/activities/ouzoud-panorama.webp",
      "/src/assets/images/activities/ouzoud-boats.webp",
      "/src/assets/images/activities/ouzoud-boat-ride.webp"
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
  },
  {
    id: "cooperative-argan",
    name: "Visite Coopérative d'Argan MARJANA",
    duration: "Demi-journée",
    price: 40,
    originalPrice: 60,
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-2.jpeg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-2.jpeg",
      "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55.jpeg",
      "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-3.jpeg",
      "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-1.jpeg",
      "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.54.jpeg"
    ],
    description: "Découvrez MARJANA, une immersion dans la production d'Argan au Maroc",
    longDescription: "Chez MARJANA, nous offrons aux visiteurs une opportunité exclusive de découvrir l'héritage riche et le processus minutieux derrière nos précieux produits à base d'argan. Notre coopérative est bien plus qu'un lieu de production ; c'est une plongée au cœur de la tradition et du savoir-faire marocains. Découvrez la magie de l'huile d'argan dans la première coopérative au Maroc accréditée par l'État et reconnue à l'international.",
    category: "Culture",
    rating: 4.9,
    reviewCount: 89,
    includes: ["Visite guidée", "Démonstrations interactives", "Dégustation produits", "Transport"],
    highlights: [
      "Visites guidées de la production",
      "Démonstrations interactives avec artisans",
      "Aperçus culturels sur l'huile d'argan",
      "Dégustation de produits",
      "Boutique avec produits certifiés"
    ],
    itinerary: [
      {
        day: 1,
        title: "Visite de la Coopérative MARJANA",
        description: "Immersion complète dans la production traditionnelle d'huile d'argan.",
        activities: [
          "Prise en charge à l'hôtel",
          "Arrivée à la coopérative",
          "Visite guidée du processus de production",
          "Démonstrations avec artisans",
          "Dégustation des produits",
          "Shopping à la boutique",
          "Retour à l'hôtel"
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
        "Transport aller-retour",
        "Visite guidée complète",
        "Démonstrations",
        "Dégustation"
      ],
      notIncluded: [
        "Achats personnels",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure la visite ?",
        answer: "La visite complète dure environ 2-3 heures, incluant les démonstrations et la dégustation."
      },
      {
        question: "Peut-on acheter des produits sur place ?",
        answer: "Oui, notre boutique propose tous nos produits certifiés directement à la source."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Nathalie B.",
        rating: 5,
        date: "Décembre 2024",
        content: "Expérience fascinante ! J'ai adoré voir le processus traditionnel et les produits sont excellents.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "trekking-agafay",
    name: "Aventure dans l'Agafay - Trekking Chameau",
    duration: "3-4 heures",
    price: 50,
    image: "/src/assets/images/activities/agafay-camel-ride.webp",
    gallery: [
      "/src/assets/images/activities/agafay-camel-ride.webp",
      "/src/assets/images/activities/agafay-lounge.webp",
      "/src/assets/images/activities/agafay-sunset.webp",
      "/src/assets/images/activities/agafay-motorcycle.webp"
    ],
    description: "Trekking à dos de chameau et délices culturels dans le désert d'Agafay",
    longDescription: "Vivez une aventure unique dans le désert d'Agafay avec une promenade à dos de chameau et une immersion dans la culture locale. Explorez les magnifiques paysages désertiques et découvrez la richesse des traditions marocaines dans ce cadre exceptionnel. Notre chauffeur viendra vous chercher à votre hôtel ou riad à Marrakech pour débuter cette expérience unique.",
    category: "Désert",
    rating: 4.8,
    reviewCount: 156,
    includes: ["Balade à dos de chameau", "Immersion culturelle", "Repas marocain traditionnel", "Transport"],
    highlights: [
      "Balade à dos de chameau avec vues imprenables",
      "Immersion culturelle berbère",
      "Démonstrations et rencontres authentiques",
      "Repas marocain traditionnel (tajine, couscous)",
      "Paysages époustouflants du désert"
    ],
    itinerary: [
      {
        day: 1,
        title: "Aventure Trekking Agafay",
        description: "Expérience complète mêlant trekking et culture dans le désert d'Agafay.",
        activities: [
          "Prise en charge à l'hôtel/riad",
          "Trajet vers le désert d'Agafay",
          "Balade à dos de chameau",
          "Découverte culture berbère",
          "Repas traditionnel",
          "Retour à Marrakech"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Facile",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport aller-retour",
        "Promenade à dos de chameau",
        "Repas traditionnel",
        "Guide local"
      ],
      notIncluded: [
        "Boissons",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure l'excursion ?",
        answer: "L'excursion dure environ 3 à 4 heures, y compris la promenade et le repas."
      },
      {
        question: "Que comprend le repas traditionnel ?",
        answer: "Le repas inclut des plats marocains authentiques comme le tajine et le couscous, préparés avec des ingrédients locaux."
      },
      {
        question: "Le transport est-il inclus ?",
        answer: "Oui, le transport aller-retour depuis votre hôtel ou riad est inclus."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "François M.",
        rating: 5,
        date: "Janvier 2025",
        content: "Une expérience magique ! La balade en chameau était superbe et le repas délicieux.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "palmeraie-chameau",
    name: "Balade Chameau dans la Palmeraie",
    duration: "1-2 heures",
    price: 25,
    originalPrice: 40,
    image: "/src/assets/images/activities/chameau-palmeraie-group.webp",
    gallery: [
      "/src/assets/images/activities/chameau-palmeraie-group.webp",
      "/src/assets/images/activities/chameau-palmeraie-ride.webp",
      "/src/assets/images/activities/chameau-palmeraie-rest.webp",
      "/src/assets/images/activities/chameau-palmeraie-sunset.webp"
    ],
    description: "Expérience envoûtante à dos de chameau dans la Palmeraie de Marrakech",
    longDescription: "Embarquez pour une captivante balade à dos de chameau à travers la luxuriante Palmeraie de Marrakech, une oasis tranquille remplie de milliers de palmiers. Ce cadre serein est idéal pour se détendre et se reconnecter avec la nature. Rejoignez-nous pour un voyage inoubliable dans l'un des lieux les plus pittoresques de Marrakech.",
    category: "Nature",
    rating: 4.9,
    reviewCount: 234,
    includes: ["Balade chameau", "Thé marocain traditionnel", "Transferts", "Assurance"],
    highlights: [
      "Palmeraie luxuriante aux milliers de palmiers",
      "Balade relaxante à dos de chameau",
      "Thé traditionnel marocain",
      "Cadre serein et paisible",
      "Transport en minivan climatisé"
    ],
    itinerary: [
      {
        day: 1,
        title: "Balade à Dos de Chameau - Palmeraie",
        description: "Découverte de la Palmeraie de Marrakech à dos de chameau.",
        activities: [
          "Prise en charge à l'hôtel/riad",
          "Trajet vers la Palmeraie",
          "Balade à dos de chameau (1-2h)",
          "Thé traditionnel marocain",
          "Retour à Marrakech"
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
        "Transport aller-retour en minivan climatisé",
        "Thé traditionnel marocain",
        "Assurance incluse"
      ],
      notIncluded: [
        "Pourboires",
        "Photos souvenirs"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure la balade à dos de chameau ?",
        answer: "La balade dure environ 1 à 2 heures, selon votre rythme et les pauses."
      },
      {
        question: "Le transport est-il inclus ?",
        answer: "Oui, les transferts aller-retour depuis votre hôtel ou riad sont inclus."
      },
      {
        question: "Peut-on réserver pour un groupe ?",
        answer: "Oui, les réservations pour groupes sont possibles. Contactez-nous pour plus de détails."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Sophie L.",
        rating: 5,
        date: "Décembre 2024",
        content: "Moment magique dans la palmeraie ! Les chameaux étaient adorables et le thé délicieux.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "quad-marrakech",
    name: "Aventure en Quad - Palmeraie",
    duration: "2-3 heures",
    price: 35,
    image: "/src/assets/images/activities/quad-sunset.webp",
    gallery: [
      "/src/assets/images/activities/quad-sunset.webp",
      "/src/assets/images/activities/quad-group.webp",
      "/src/assets/images/activities/quad-ride.webp",
      "/src/assets/images/activities/quad-adventure.webp"
    ],
    description: "Excursion en quad palpitante à travers la Palmeraie de Marrakech",
    longDescription: "Découvrez la fascinante Palmeraie de Marrakech lors d'une palpitante excursion en quad à travers ses paysages sereins, parsemés de milliers de palmiers. Cette aventure offre une opportunité parfaite pour se détendre, apprécier la beauté naturelle, et vivre une montée d'adrénaline. Réservez dès maintenant pour une expérience inoubliable !",
    category: "Aventure",
    rating: 4.7,
    reviewCount: 178,
    includes: ["Quad Yamaha 250cc", "Équipement complet", "Thé marocain", "Transport"],
    highlights: [
      "Quad Yamaha 250 cc tout-terrain",
      "Équipement complet (gants, casques, lunettes)",
      "Thé traditionnel marocain",
      "Guides professionnels",
      "Assurance incluse"
    ],
    itinerary: [
      {
        day: 1,
        title: "Excursion Quad Palmeraie",
        description: "Aventure en quad à travers la Palmeraie de Marrakech.",
        activities: [
          "Prise en charge à l'hôtel/riad",
          "Trajet vers la Palmeraie",
          "Briefing sécurité et équipement",
          "Excursion en quad (2-3h)",
          "Pause thé traditionnel",
          "Retour à Marrakech"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Modérée",
      groupSize: "2-12 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Transport aller-retour en minivan climatisé",
        "Quad Yamaha 250 cc",
        "Thé traditionnel marocain",
        "Équipement (gants, casques, lunettes)",
        "Guides professionnels",
        "Assurance incluse"
      ],
      notIncluded: [
        "Pourboires",
        "Photos/vidéos"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure l'excursion en quad ?",
        answer: "La durée est généralement de 2 à 3 heures, en fonction du parcours et des pauses."
      },
      {
        question: "Quel type de quad est utilisé ?",
        answer: "Nous utilisons des quads Yamaha 250 cc pour cette excursion."
      },
      {
        question: "Le transport est-il inclus ?",
        answer: "Oui, les transferts aller-retour depuis votre hôtel ou riad sont inclus dans l'excursion."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Marc D.",
        rating: 5,
        date: "Janvier 2025",
        content: "Adrénaline garantie ! Super parcours et les guides étaient top.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "montgolfiere",
    name: "Vol en Montgolfière - Atlas",
    duration: "5 heures",
    price: 180,
    originalPrice: 200,
    image: "/src/assets/images/activities/montgolfiere-sunrise.webp",
    gallery: [
      "/src/assets/images/activities/montgolfiere-sunrise.webp",
      "/src/assets/images/activities/montgolfiere-takeoff.webp",
      "/src/assets/images/activities/montgolfiere-night.webp",
      "/src/assets/images/activities/montgolfiere-landscape.webp",
      "/src/assets/images/activities/montgolfiere-sky.webp",
      "/src/assets/images/activities/montgolfiere-sunset.webp"
    ],
    description: "Survolez les villages berbères et l'Atlas en montgolfière",
    longDescription: "Embarquez pour une aventure aérienne unique à Marrakech à bord d'une majestueuse montgolfière. Profitez de vues panoramiques époustouflantes sur les villages berbères pittoresques et les montagnes de l'Atlas, tout en survolant le ciel marocain. Votre aventure commence avec un transfert en 4x4 depuis votre hôtel vers un camp berbère de luxe, où un petit-déjeuner délicieux vous attend.",
    category: "Premium",
    rating: 5.0,
    reviewCount: 145,
    includes: ["Vol 1h", "Petit-déjeuner berbère", "Certificat souvenir", "Transport 4x4"],
    highlights: [
      "Vol de 40 à 60 minutes en montgolfière",
      "Vues panoramiques sur l'Atlas",
      "Petit-déjeuner dans un camp berbère de luxe",
      "Certificat souvenir remis",
      "Transport en 4x4"
    ],
    itinerary: [
      {
        day: 1,
        title: "Vol en Montgolfière au-dessus de Marrakech",
        description: "Expérience aérienne inoubliable au lever du soleil.",
        activities: [
          "Prise en charge 5h00-5h30 à l'hôtel",
          "Transfert en 4x4 vers le camp berbère",
          "Petit-déjeuner au camp",
          "Vol en montgolfière (40-60 min)",
          "Atterrissage et certificat",
          "Retour à Marrakech"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Très facile",
      groupSize: "Minimum 2 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech (5h00-5h30)",
      included: [
        "Transport 4x4 aller-retour",
        "Petit-déjeuner camp berbère",
        "Vol montgolfière 1h",
        "Certificat souvenir"
      ],
      notIncluded: [
        "Photos/vidéos professionnelles",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure l'excursion ?",
        answer: "L'excursion dure environ 5 heures, y compris le vol en montgolfière et le petit-déjeuner."
      },
      {
        question: "Quelle est la meilleure période pour le vol ?",
        answer: "Les vols ont lieu tôt le matin, généralement entre 5h00 et 5h30, pour des conditions optimales."
      },
      {
        question: "Y a-t-il une limite de participants ?",
        answer: "Oui, le vol nécessite un minimum de 2 participants."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Claire et Thomas",
        rating: 5,
        date: "Décembre 2024",
        content: "Expérience magique ! Le lever de soleil sur l'Atlas depuis la montgolfière est inoubliable.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "cours-cuisine",
    name: "Cours de Cuisine Marocaine - Agafay",
    duration: "4 heures",
    price: 45,
    originalPrice: 60,
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29-1.jpeg",
    gallery: [
      "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29-1.jpeg",
      "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.28.jpeg",
      "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29.jpeg",
      "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29-2.jpeg",
      "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.30.jpeg"
    ],
    description: "Cours de cuisine authentique dans le désert d'Agafay",
    longDescription: "Plongez dans les saveurs riches de la cuisine marocaine avec un cours de cuisine immersif dans le magnifique désert d'Agafay. Apprenez à préparer des plats traditionnels tout en profitant d'un cadre exceptionnel, loin de l'agitation de la ville. Sous la direction d'un chef marocain, vous apprendrez à cuisiner des plats emblématiques tels que le tajine et le couscous.",
    category: "Gastronomie",
    rating: 4.9,
    reviewCount: 112,
    includes: ["Cours avec chef", "Repas complet", "Recettes", "Transport"],
    highlights: [
      "Cuisine pratique avec chef local",
      "Cadre désertique exceptionnel",
      "Repas traditionnel complet",
      "Recettes à emporter",
      "Ingrédients locaux frais"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cours de Cuisine dans le Désert d'Agafay",
        description: "Immersion culinaire dans un cadre unique.",
        activities: [
          "Transfert depuis votre hôtel/riad",
          "Accueil dans le désert",
          "Initiation au cours de cuisine",
          "Préparation des plats marocains",
          "Dégustation du repas préparé",
          "Retour à Marrakech"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Très facile",
      groupSize: "2-10 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech (10h00)",
      included: [
        "Transport aller-retour",
        "Cours de cuisine complet",
        "Tous les ingrédients",
        "Repas (entrées, plat, dessert)",
        "Recettes"
      ],
      notIncluded: [
        "Boissons",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure l'activité ?",
        answer: "La durée de l'activité est de 4 heures, y compris le transfert et le repas."
      },
      {
        question: "Y a-t-il des options végétariennes ?",
        answer: "Oui, des plats végétariens peuvent être préparés sur demande."
      },
      {
        question: "Quel est le point de rendez-vous ?",
        answer: "Le chauffeur viendra vous chercher directement à votre hôtel ou riad à Marrakech."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Marie-Anne F.",
        rating: 5,
        date: "Novembre 2024",
        content: "Super expérience ! Le chef était adorable et j'ai appris à faire un vrai tajine.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "buggy-palmeraie",
    name: "Aventure en Buggy - Palmeraie",
    duration: "2 heures",
    price: 70,
    image: "/src/assets/images/activities/buggy-palmeraie.webp",
    gallery: [
      "/src/assets/images/activities/buggy-palmeraie.webp",
      "/src/assets/images/activities/buggy-desert.webp",
      "/src/assets/images/activities/buggy-fleet.webp",
      "/src/assets/images/activities/buggy-group.webp"
    ],
    description: "Aventure palpitante en buggy dans la Palmeraie de Marrakech",
    longDescription: "Préparez-vous pour une aventure en buggy exaltante à travers la captivante palmeraie entourant Marrakech. Cette activité palpitante offre une perspective unique des paysages sahariens, combinant excitation et vues imprenables. Traversez des sentiers escarpés et admirez les paysages sahariens. Faites une pause dans un village berbère pour savourer un thé à la menthe traditionnel.",
    category: "Aventure",
    rating: 4.8,
    reviewCount: 167,
    includes: ["Buggy", "Pause thé berbère", "Guide", "Transport"],
    highlights: [
      "Explorer la pittoresque palmeraie en buggy",
      "Sentiers escarpés et paysages sahariens",
      "Pause dans un village berbère",
      "Thé à la menthe traditionnel",
      "Montée d'adrénaline garantie"
    ],
    itinerary: [
      {
        day: 1,
        title: "Aventure Buggy dans la Palmeraie",
        description: "Balade palpitante en buggy à travers la palmeraie.",
        activities: [
          "Ramassage à l'hôtel/riad",
          "Briefing et session pratique",
          "Balade en buggy à travers la palmeraie",
          "Pause thé dans un village berbère",
          "Retour à votre hôtel/riad"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Modérée",
      groupSize: "2-10 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech (9h00-14h00)",
      included: [
        "Transport aller-retour",
        "Buggy",
        "Équipements de protection",
        "Thé à la menthe",
        "Guide instructeur"
      ],
      notIncluded: [
        "Pourboires",
        "Photos/vidéos"
      ]
    },
    faqs: [
      {
        question: "Est-ce que l'activité est sécurisée ?",
        answer: "Oui, un briefing complet et des équipements de protection sont fournis avant le départ."
      },
      {
        question: "Combien de temps dure l'activité ?",
        answer: "La durée de l'activité est d'environ 2 heures, y compris la pause thé."
      },
      {
        question: "Y a-t-il une prise en charge à l'hôtel ?",
        answer: "Oui, nous venons vous chercher directement à votre hôtel ou riad à Marrakech."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Julien P.",
        rating: 5,
        date: "Janvier 2025",
        content: "Sensations fortes garanties ! Le buggy était top et le thé dans le village berbère très sympa.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "diner-chez-ali",
    name: "Dîner Spectacle Chez Ali",
    duration: "4 heures",
    price: 45,
    image: "/src/assets/images/activities/chez-ali-entrance.webp",
    gallery: [
      "/src/assets/images/activities/chez-ali-entrance.webp",
      "/src/assets/images/activities/chez-ali-tent.webp",
      "/src/assets/images/activities/chez-ali-show.webp",
      "/src/assets/images/activities/chez-ali-restaurant.webp",
      "/src/assets/images/activities/chez-ali-fantasia.webp"
    ],
    description: "Soirée magique avec dîner marocain et spectacle Fantasia",
    longDescription: "Vivez une soirée extraordinaire au complexe Chez Ali, où la magie des Mille et Une Nuits prend vie. Savourez un dîner marocain délicieux et profitez d'un spectacle folklorique captivant, incluant des performances équestres et des acrobaties impressionnantes. Terminez la soirée avec des feux d'artifice éblouissants.",
    category: "Spectacle",
    rating: 4.7,
    reviewCount: 289,
    includes: ["Dîner marocain", "Spectacle folklore", "Fantasia", "Transport"],
    highlights: [
      "Folklore marocain avec troupes berbères",
      "Dîner marocain authentique sous tente berbère",
      "Fantasia et acrobates équestres",
      "Spectacle de feux d'artifice",
      "Ambiance Mille et Une Nuits"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dîner Magique et Spectacle Chez Ali",
        description: "Soirée de culture et divertissement marocains.",
        activities: [
          "Prise en charge à l'hôtel/riad (19h30-20h30)",
          "Accueil par les troupes berbères",
          "Dîner sous une tente berbère",
          "Spectacles de danse et musique",
          "Fantasia et feux d'artifice",
          "Retour à l'hôtel/riad"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Très facile",
      groupSize: "2-50 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech (19h30-20h30)",
      included: [
        "Transport aller-retour",
        "Dîner marocain traditionnel",
        "Spectacles folkloriques et Fantasia"
      ],
      notIncluded: [
        "Boissons",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure la soirée ?",
        answer: "La soirée dure environ 4 heures, avec un départ entre 19h30 et 20h30."
      },
      {
        question: "Les boissons sont-elles incluses dans le dîner ?",
        answer: "Les boissons ne sont pas incluses dans le tarif du dîner."
      },
      {
        question: "Quel est le point de rendez-vous ?",
        answer: "Nous venons vous chercher directement à votre hôtel ou riad à Marrakech."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Isabelle C.",
        rating: 5,
        date: "Décembre 2024",
        content: "Soirée magique ! Les spectacles étaient impressionnants et le dîner copieux.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "sunset-agafay",
    name: "Coucher de Soleil et Dîner Agafay",
    duration: "5 heures",
    price: 45,
    image: "/src/assets/images/activities/diner-agafay-sunset.webp",
    gallery: [
      "/src/assets/images/activities/diner-agafay-sunset.webp",
      "/src/assets/images/activities/diner-agafay-tent.webp",
      "/src/assets/images/activities/diner-agafay-horizon.webp",
      "/src/assets/images/activities/diner-agafay-table.webp",
      "/src/assets/images/activities/diner-agafay-cushions.webp"
    ],
    description: "Coucher de soleil et dîner magique dans le désert d'Agafay avec dromadaires",
    longDescription: "Évadez-vous de l'agitation de Marrakech et plongez dans la beauté sereine du désert d'Agafay. Situé à seulement trente kilomètres de Marrakech, ce paysage désertique unique offre un havre de paix et un spectacle naturel à couper le souffle. Vivez un moment inoubliable avec un coucher de soleil suivi d'un délicieux dîner sous un ciel étoilé.",
    category: "Désert",
    rating: 4.9,
    reviewCount: 198,
    includes: ["Promenade dromadaire", "Coucher de soleil", "Dîner étoilé", "Transport"],
    highlights: [
      "Oasis dans le désert d'Agafay",
      "Vues panoramiques sur les montagnes",
      "Évasion désertique authentique",
      "Dîner traditionnel sous les étoiles",
      "Promenade à dos de dromadaire"
    ],
    itinerary: [
      {
        day: 1,
        title: "Coucher de Soleil et Dîner dans le Désert",
        description: "Soirée magique dans le désert d'Agafay.",
        activities: [
          "Prise en charge à l'hôtel/riad",
          "Trajet vers le désert d'Agafay",
          "Promenade à dos de dromadaire",
          "Coucher de soleil panoramique",
          "Dîner traditionnel sous les étoiles",
          "Retour à Marrakech"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Très facile",
      groupSize: "2-20 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech (après-midi)",
      included: [
        "Transport aller-retour",
        "Promenade dromadaire",
        "Dîner traditionnel",
        "Spectacle"
      ],
      notIncluded: [
        "Boissons alcoolisées",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure l'excursion ?",
        answer: "L'excursion dure environ 5 heures, y compris le trajet aller-retour depuis Marrakech."
      },
      {
        question: "Peut-on personnaliser cette expérience ?",
        answer: "Oui, nous pouvons adapter cette excursion selon vos besoins spécifiques."
      },
      {
        question: "Quelles sont les options de transport incluses ?",
        answer: "Les transferts aller-retour depuis votre hôtel ou riad à Marrakech sont inclus."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Émilie et Lucas",
        rating: 5,
        date: "Janvier 2025",
        content: "Soirée romantique parfaite ! Le coucher de soleil était magnifique et le dîner délicieux.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "cascades-ouzoud",
    name: "Excursion Cascades d'Ouzoud",
    duration: "10 heures",
    price: 40,
    image: "/src/assets/images/activities/ouzoud-falls.webp",
    gallery: [
      "/src/assets/images/activities/ouzoud-falls.webp",
      "/src/assets/images/activities/ouzoud-monkey.webp",
      "/src/assets/images/activities/ouzoud-panorama.webp",
      "/src/assets/images/activities/ouzoud-boats.webp",
      "/src/assets/images/activities/ouzoud-boat-ride.webp"
    ],
    description: "Excursion aux plus hautes cascades du Maroc (110m)",
    longDescription: "Vivez une expérience inoubliable avec cette excursion d'une journée depuis Marrakech vers les majestueuses Cascades d'Ouzoud, les plus hautes cascades du Maroc avec une chute impressionnante de 110 mètres. Situées dans les montagnes de l'Atlas, ces chutes spectaculaires sont entourées de paysages naturels verdoyants, offrant une évasion parfaite pour les amoureux de la nature.",
    category: "Nature",
    rating: 4.8,
    reviewCount: 267,
    includes: ["Cascades", "Baignade", "Macaques", "Transport"],
    highlights: [
      "Expérience gastronomique panoramique",
      "Merveilles naturelles verdoyantes",
      "Aventure aquatique et baignade",
      "Rencontre avec les macaques de Barbarie",
      "Chutes de 110 mètres"
    ],
    itinerary: [
      {
        day: 1,
        title: "Excursion Cascades d'Ouzoud",
        description: "Journée découverte des plus hautes cascades du Maroc.",
        activities: [
          "Prise en charge à l'hôtel/riad",
          "Trajet vers les cascades",
          "Arrivée et exploration",
          "Repas avec vue sur les cascades",
          "Baignade dans les bassins naturels",
          "Observation des macaques",
          "Retour à Marrakech"
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
        "Transport aller-retour",
        "Chauffeur expérimenté"
      ],
      notIncluded: [
        "Déjeuner",
        "Balade en barque",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure l'excursion ?",
        answer: "L'excursion dure environ 10 heures, y compris le trajet aller-retour depuis Marrakech."
      },
      {
        question: "Peut-on nager dans les cascades ?",
        answer: "Oui, vous pouvez profiter d'une baignade rafraîchissante dans les bassins situés au pied des cascades."
      },
      {
        question: "Quel est le point de rendez-vous ?",
        answer: "Le point de rendez-vous est votre hôtel ou riad à Marrakech."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Nicolas R.",
        rating: 5,
        date: "Octobre 2024",
        content: "Magnifique journée ! Les cascades sont impressionnantes et la baignade rafraîchissante.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "visite-marrakech",
    name: "Visite Privée des Trésors de Marrakech",
    duration: "7 heures",
    price: 40,
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
    description: "Découvrez les trésors de Marrakech : Koutoubia, Bahia, Souks",
    longDescription: "Explorez Marrakech comme jamais auparavant ! Cette excursion vous fera découvrir les lieux incontournables de la ville, ainsi que ses trésors cachés. Préparez-vous à être émerveillé par l'histoire, l'architecture, et la culture qui font la richesse de Marrakech. De la majestueuse Mosquée Koutoubia au somptueux Palais Bahia, en passant par les souks animés.",
    category: "Culture",
    rating: 5.0,
    reviewCount: 145,
    includes: ["Guide privé", "Entrées sites", "Mellah", "Souks"],
    highlights: [
      "La majestueuse Mosquée Koutoubia",
      "Le Mellah (ancien Quartier Juif)",
      "Les Tombeaux Saadiens",
      "Le Palais Bahia",
      "L'effervescence du Souk"
    ],
    itinerary: [
      {
        day: 1,
        title: "Visite Culturelle Privée de Marrakech",
        description: "Journée complète de découverte des trésors de la médina.",
        activities: [
          "Rendez-vous 9h00",
          "Visite Mosquée Koutoubia",
          "Découverte du Mellah",
          "Tombeaux Saadiens",
          "Palais Bahia",
          "Exploration des Souks",
          "Fin de visite 16h00"
        ]
      }
    ],
    practicalInfo: {
      bestSeason: "Toute l'année",
      difficulty: "Modérée (beaucoup de marche)",
      groupSize: "1-8 personnes",
      language: "Français, Anglais, Arabe",
      departure: "Marrakech",
      included: [
        "Guide privé professionnel",
        "Frais d'entrée tous sites",
        "Visite personnalisée"
      ],
      notIncluded: [
        "Déjeuner",
        "Achats personnels",
        "Pourboires"
      ]
    },
    faqs: [
      {
        question: "Combien de temps dure la visite ?",
        answer: "La visite dure environ 7 heures, de 9h à 16h."
      },
      {
        question: "Y a-t-il des frais d'entrée supplémentaires ?",
        answer: "Les frais d'entrée dans les sites comme le Palais Bahia ou les Tombeaux Saadiens sont inclus dans le tarif."
      },
      {
        question: "Peut-on personnaliser l'itinéraire ?",
        answer: "Oui, cette visite privée peut être adaptée à vos préférences."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Patricia M.",
        rating: 5,
        date: "Janvier 2025",
        content: "Guide passionné et connaissant parfaitement l'histoire de Marrakech. Visite inoubliable !",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    ]
  }
];

export const categories = [
  { id: "all", name: "Toutes" },
  { id: "Désert", name: "Désert" },
  { id: "Culture", name: "Culture" },
  { id: "Nature", name: "Nature" },
  { id: "Côte", name: "Côte" },
  { id: "Aventure", name: "Aventure" },
  { id: "Premium", name: "Premium" },
  { id: "Gastronomie", name: "Gastronomie" },
  { id: "Spectacle", name: "Spectacle" }
];

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(dest => dest.id === id);
};

export const getDestinationsByCategory = (category: string): Destination[] => {
  if (category === "all") return destinations;
  return destinations.filter(dest => dest.category === category);
};
