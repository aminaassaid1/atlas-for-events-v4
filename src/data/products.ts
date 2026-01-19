export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  promoPrice?: number;
  category: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "sculpture-tigre",
    title: "Sculpture de Tigre",
    description: "Patiné pour créer des nuances de couleur profondes, cette sculpture de tigre ajoute une touche sauvage et captivante à tout environnement où elle est exposée.",
    price: 1200,
    promoPrice: 950,
    category: "animals",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_446105775_1447896869153270_1767624893679144948_n.jpg",
    featured: true,
  },
  {
    id: "sculpture-francaise",
    title: "Décor Rustique Français",
    description: "Une pièce d'artisanat qui apporte une touche de caractère français et une allure rustique raffinée à tout décor.",
    price: 2100,
    category: "art",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_405526959_2086872588329838_7097565981473782259_n.jpg",
  },
  {
    id: "masque-fer",
    title: "Masque en Fer",
    description: "Un masque en fer peut symboliser la force, la permanence et la protection. Les traits et expressions du masque peuvent également véhiculer des émotions ou des messages spécifiques.",
    price: 400,
    promoPrice: 300,
    category: "art",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_404625983_918108063167758_456017404151619637_n.jpg",
  },
  {
    id: "sculpture-love",
    title: "Sculpture 'Love'",
    description: "Love est bien plus qu'un simple mot, c'est un signe universel de connexion profonde et d'affection sincère.",
    price: 1200,
    promoPrice: 1000,
    category: "love",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_426362713_1416635565605604_5737235251505988302_n.jpg",
    featured: true,
  },
  {
    id: "sculpture-coeur",
    title: "Cœur en Métal",
    description: "Cœur, une œuvre d'art unique qui combine la symbolique profonde de l'amour et des émotions avec la robustesse et la durabilité du métal.",
    price: 350,
    promoPrice: 250,
    category: "love",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_363397227_1276068149703332_8660124873249972597_n.jpg",
  },
  {
    id: "musicien-traditionnel",
    title: "Musicien Traditionnel",
    description: "Statut musicien traditionnel, une œuvre d'art remarquable qui fusionne la richesse culturelle de la musique folklorique avec la robustesse et l'élégance du métal.",
    price: 1200,
    promoPrice: 950,
    category: "art",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_366468486_1336392386950978_4583135099507275873_n.jpg",
  },
  {
    id: "sculpture-poulpe",
    title: "Sculpture de Poulpe",
    description: "Cette sculpture de poulpe en fer est une célébration de la beauté naturelle et de la créativité artistique, transformant un être marin complexe en une œuvre d'art métallique impressionnante.",
    price: 600,
    promoPrice: 500,
    category: "animals",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_336314321_949159476214796_2713949355795524875_n.jpg",
  },
  {
    id: "moto-classique",
    title: "Moto Classique en Fer",
    description: "La moto classique en fer, exposée en plein éclat, est une pièce maîtresse qui capture l'essence de l'âge d'or des deux-roues tout en mettant en avant la solidité et la durabilité du métal.",
    price: 600,
    promoPrice: 480,
    category: "art",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_340175591_1218518492113323_5604309101263040371_n.jpg",
  },
  {
    id: "danseuse",
    title: "Danseuse en Métal",
    description: "L'œuvre capture le moment suspendu d'une danseuse en pleine performance, tout en mettant en avant le travail artistique du métal.",
    price: 1200,
    promoPrice: 950,
    category: "art",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_350855543_821640626376442_2563639300462206681_n.jpg",
    featured: true,
  },
  {
    id: "chevaux-coeur",
    title: "Chevaux en Cœur",
    description: "La sculpture représente deux chevaux en fer, entrelacés pour former un cœur, symbolisant l'amour et l'harmonie.",
    price: 600,
    promoPrice: 490,
    category: "love",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_352742043_832002301777708_1043833392189585069_n.jpg",
  },
  {
    id: "aloe-vera",
    title: "Aloe Vera en Fer",
    description: "L'aloe vera est souvent associé à la guérison et à la protection en raison de ses propriétés médicinales. Une sculpture en fer peut ajouter une dimension de force et de durabilité à ce symbolisme, représentant la résilience et la pérennité.",
    price: 1200,
    promoPrice: 950,
    category: "nature",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_356247948_218060877792856_870404231871872033_n.jpg",
  },
  {
    id: "chien-gardien",
    title: "Chien Gardien",
    description: "Cette sculpture en fer représentant un chien enragé incarne la force, la protection et la vigilance. Méticuleusement façonnée, elle se dresse comme un gardien, suscitant des émotions intenses.",
    price: 1000,
    promoPrice: 900,
    category: "animals",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_332804900_190977726888807_420786158872697835_n.jpg",
  },
  {
    id: "chien-majestueux",
    title: "Gardien de Métal",
    description: "Cette magnifique sculpture de chien, fabriquée à partir de pièces métalliques, est bien plus qu'une simple œuvre d'art. Avec sa posture imposante et ses détails minutieux, ce chien devient un véritable gardien.",
    price: 600,
    promoPrice: 490,
    category: "animals",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_333191225_182544461143385_1641709296420581110_n.jpg",
  },
  {
    id: "table-fer",
    title: "Table en Fer Forgé",
    description: "Ajoutez une touche industrielle chic à votre intérieur avec cette table en fer forgé. Fabriquée à partir de fer robuste, cette pièce combine à la perfection fonctionnalité et design raffiné.",
    price: 600,
    promoPrice: 490,
    category: "art",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_333083288_763474918538476_7013887538194844501_n.jpg",
  },
  {
    id: "cheval-metallique",
    title: "Cheval Métallique",
    description: "Cette magnifique sculpture de cheval en métal est une fusion unique entre la force brute et l'élégance. Forgée à partir de pièces mécaniques récupérées, cette œuvre d'art capture la puissance et la grâce de cet animal noble.",
    price: 600,
    promoPrice: 480,
    category: "animals",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_334185902_197191692912242_6089816500759657632_n.jpg",
  },
  {
    id: "gorille-rouge",
    title: "Gorille en Fer Rouge",
    description: "Ce gorille en fer rouge est bien plus qu'une sculpture décorative. Représentant la force, la puissance, et la protection, cette pièce artistique imposante de 1,8m est fabriquée à partir de matériaux durables.",
    price: 600,
    promoPrice: 490,
    category: "animals",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_323841078_716556763318356_5348694906768779134_n.jpeg",
  },
  {
    id: "fee-sculpture",
    title: "Sculpture Fée en Fer",
    description: "Découvrez une sculpture captivante alliant la force du fer et la beauté de l'art féerique. Ce chef-d'œuvre représente une fée assise, fusionnant harmonie et solidité dans un design unique.",
    price: 3500,
    promoPrice: 3000,
    category: "art",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_323937554_465605432447126_2009281168850065877_n.jpeg",
    featured: true,
  },
  {
    id: "lion-majestueux",
    title: "Lion en Fer Sculpté",
    description: "Ajoutez une touche de grandeur et de majesté à votre espace avec ce lion fabriqué en fer. Parfait pour un jardin, un espace extérieur ou même une galerie intérieure, cette œuvre d'art allie robustesse et symbolisme.",
    price: 2500,
    promoPrice: 2200,
    category: "animals",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_327563158_162827876502835_3674423743897636290_n.jpg",
    featured: true,
  },
  {
    id: "cactus-bleu",
    title: "Cactus Figue de Barbarie",
    description: "Apportez une touche unique et artistique à votre décoration intérieure ou extérieure avec cette représentation audacieuse d'un cactus en métal. Symbole de résilience et d'art contemporain.",
    price: 600,
    promoPrice: 480,
    category: "nature",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_324393054_203940202118371_5761780136401158672_n.jpeg",
  },
  {
    id: "cactus-artistique",
    title: "Cactus Artistique",
    description: "Découvrez ce cactus en fer unique, une pièce d'art qui allie l'élégance naturelle des plantes succulentes avec la robustesse du métal. Conçu avec des détails réalistes et une finition impeccable.",
    price: 600,
    promoPrice: 460,
    category: "nature",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_324070855_199349772650401_5703573515266047967_n.jpeg",
  },
  {
    id: "coeur-recycle",
    title: "Cœur en Pièces Auto",
    description: "Cette magnifique sculpture intitulée 'Love' est fabriquée à partir de pièces d'auto recyclées, symbolisant l'amour et la connexion universelle. Réalisée à la main par des artisans talentueux.",
    price: 2000,
    promoPrice: 1500,
    category: "love",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/charmingart0505_323953202_218768757254423_4496043203147168358_n.jpeg",
  },
];

export const categories = [
  { id: "all", name: "Tous" },
  { id: "animals", name: "Animaux" },
  { id: "art", name: "Art & Déco" },
  { id: "love", name: "Amour" },
  { id: "nature", name: "Nature" },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByIds = (ids: string[]): Product[] => {
  return products.filter(product => ids.includes(product.id));
};

export const MAX_PRICE = 3500;
