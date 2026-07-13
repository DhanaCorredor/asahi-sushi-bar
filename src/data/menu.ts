// Carta de Asahi Sushi Bar — transcrita del menú oficial.
// Fuente única de verdad para la página de inicio y la carta completa.

export type MenuItem = {
  name: string;
  jp?: string;
  desc?: string;
  /** Precio como texto para respetar el formato original (p. ej. "2,80 €"). */
  price?: string;
  /** Variantes de precio, p. ej. Caña / Doble. */
  prices?: { label: string; price: string }[];
  unit?: string;
  region?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  jp?: string;
  note?: string;
  group: "comida" | "bebida";
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "otsumami",
    title: "Otsumami",
    jp: "おつまみ",
    note: "Para empezar a compartir",
    group: "comida",
    items: [
      { name: "Edamame", desc: "Porción", price: "4 €" },
      { name: "Rollito de pato", unit: "5 u", price: "7,50 €" },
      { name: "Rollito de cerdo", unit: "5 u", price: "6,50 €" },
      { name: "Rollito de verdura", unit: "5 u", price: "5,50 €" },
      { name: "Gyozas de pato", unit: "5 u", price: "7,50 €" },
      { name: "Gyozas de cerdo", unit: "5 u", price: "5,90 €" },
      { name: "Gyozas de verdura", unit: "5 u", price: "5 €" },
      {
        name: "Karaage japonés",
        desc: "Pollo estilo japonés con un rebozado crujiente",
        price: "6,50 €",
      },
    ],
  },
  {
    id: "sashimi",
    title: "Sashimi",
    jp: "刺身",
    group: "comida",
    items: [
      { name: "Akami", unit: "6 u", desc: "Atún rojo", price: "9,50 €" },
      { name: "Sake", unit: "6 u", desc: "Salmón", price: "6,50 €" },
      { name: "Hamachi", unit: "6 u", desc: "Pez limón", price: "8,50 €" },
      {
        name: "Moriawase",
        unit: "4 u/c",
        desc: "Selección de akami, sake y hamachi",
        price: "19,20 €",
      },
    ],
  },
  {
    id: "tartar",
    title: "Tartar",
    jp: "タルタル",
    group: "comida",
    items: [
      {
        name: "Maguro",
        desc: "Tartar de atún aliñado con soja, shichimi, negi y sésamo, terminado con aguacate y setas confitadas en mantequilla",
        price: "16,50 €",
      },
      {
        name: "Sake",
        desc: "Tartar de salmón aliñado con soja, AOVE, negi y sésamo, terminado con aguacate",
        price: "14,90 €",
      },
    ],
  },
  {
    id: "nigiris",
    title: "Nigiris",
    jp: "握り",
    note: "Precio por pieza",
    group: "comida",
    items: [
      { name: "Akami", desc: "Lomo de atún clásico", price: "2,80 €" },
      {
        name: "Akami flambeado",
        desc: "Lomo de atún terminado con mantequilla de miso",
        price: "3,50 €",
      },
      { name: "Sake", desc: "Salmón clásico", price: "2,50 €" },
      {
        name: "Sake flambeado",
        desc: "Salmón flambeado con mantequilla de soja y cebolla",
        price: "2,90 €",
      },
      { name: "Hamachi", desc: "Pez limón clásico", price: "2,50 €" },
      {
        name: "Hamachi trufa",
        desc: "Pez limón terminado con paté de trufa",
        price: "3,50 €",
      },
    ],
  },
  {
    id: "makis",
    title: "Makis",
    jp: "巻き",
    note: "8 piezas",
    group: "comida",
    items: [
      {
        name: "Tokyo",
        unit: "8 pz",
        desc: "Surimi, aguacate y terminado con crujientes de langostinos y spicy mayo",
        price: "13,90 €",
      },
      {
        name: "Alaska",
        unit: "8 pz",
        desc: "Salmón, aguacate y sésamo",
        price: "13,50 €",
      },
      {
        name: "Tuna Roll",
        unit: "8 pz",
        desc: "Atún, aguacate, sésamo y cebollino",
        price: "12,90 €",
      },
      {
        name: "Ebi Crunch",
        unit: "8 pz",
        desc: "Langostino, aguacate, tobico, sésamo y terminado con migas de tempura y spicy mayo",
        price: "9,90 €",
      },
      {
        name: "Tuna Ebi",
        unit: "8 pz",
        desc: "Langostino, aguacate y terminado con atún en salsa asahi",
        price: "14,90 €",
      },
      {
        name: "Dinamita Crunch",
        unit: "8 pz",
        desc: "Surimi crunch, aguacate, terminado con salmón y mayonesa trufada",
        price: "11 €",
      },
      {
        name: "Crab Asahi",
        unit: "8 pz",
        desc: "Cangrejo de concha blanda, aguacate y negi, terminado con hamachi flambeado, mantequilla de miso y polvo shichimi",
        price: "12,50 €",
      },
    ],
  },
  {
    id: "handroll",
    title: "Hand Roll",
    jp: "手巻き",
    note: "Temaki",
    group: "comida",
    items: [
      {
        name: "Sake Spicy",
        desc: "Salmón, aceite de sésamo, cebollino, shichimi y soja",
        price: "4,50 €",
      },
      {
        name: "Ebi",
        desc: "Langostino, aguacate, salsa de anguila y asahi",
        price: "4,80 €",
      },
      {
        name: "Maguro",
        desc: "Atún, aguacate, sweet chilli, cebollino y AOVE",
        price: "7,90 €",
      },
      {
        name: "Hamachi",
        desc: "Pez limón, aguacate, paté de trufa y aceite de ajo",
        price: "3,90 €",
      },
      {
        name: "Cani Crunch",
        desc: "Surimi, aguacate, salsa de anguila y asahi",
        price: "3,50 €",
      },
    ],
  },
  {
    id: "combos",
    title: "Combos",
    group: "comida",
    items: [
      { name: "Combo 1", desc: "½ Alaska, ½ Tokio y ½ Tuna Roll", price: "14,90 €" },
      { name: "Combo 2", desc: "4 makis a elegir", price: "52,90 €" },
    ],
  },
  {
    id: "futomaki",
    title: "Futomaki",
    group: "comida",
    items: [
      {
        name: "Futomaki",
        desc: "Atún, salmón, massago y negi, marinado con sushimi, soja y AOVE. Contiene gluten, soja, huevo y pescado",
        price: "14,90 €",
      },
    ],
  },
  {
    id: "aperitivos",
    title: "Aperitivos",
    group: "bebida",
    items: [
      { name: "Manzanilla La Guita", region: "D.O. Manzanilla · Sanlúcar de Barrameda", price: "3,50 €" },
      { name: "Martini Rosso", desc: "Vermut rojo", region: "Italia, Turín", price: "3,50 €" },
      { name: "Vermut Bianco", desc: "Vermut blanco", region: "Italia, Turín", price: "3,50 €" },
    ],
  },
  {
    id: "cervezas",
    title: "Cervezas",
    group: "bebida",
    items: [
      { name: "Asahi", desc: "Pale Lager · 5%", region: "Japón, Osaka", price: "3,80 €" },
      { name: "Sapporo", desc: "Lager · 4,9%", region: "Japón, Hokkaido", price: "3,80 €" },
      {
        name: "Amstel",
        desc: "Pale Lager · 5%",
        prices: [
          { label: "Caña", price: "1,50 €" },
          { label: "Doble", price: "1,90 €" },
        ],
      },
      { name: "Heineken", desc: "Pale Lager · 5% · Tercio", price: "3,50 €" },
      { name: "Águila sin filtrar", desc: "Lager sin filtrar · 4,5%", region: "Colombia", price: "3 €" },
      { name: "Amstel Radler", desc: "Radler · 2%", price: "3 €" },
      { name: "Amstel 0,0", desc: "Sin alcohol", price: "3 €" },
      { name: "Amstel 0,0 Tostada", desc: "Tostada sin alcohol", price: "3 €" },
      { name: "Águila 0,0 sin filtrar", desc: "Sin filtrar · sin alcohol", region: "Colombia", price: "3 €" },
    ],
  },
  {
    id: "vinos",
    title: "Vinos por copa",
    group: "bebida",
    items: [
      { name: "Perelada", desc: "Cava · Espumoso", region: "España, Cataluña", price: "4 €" },
      { name: "Alma de Valdeguerra", desc: "Blanco semidulce", region: "Comunidad de Madrid", price: "3,50 €" },
      { name: "Bernon", desc: "Albariño · Blanco", region: "España, Galicia", price: "3,50 €" },
      { name: "Corcovo", desc: "Tinto", region: "Castilla-La Mancha", price: "3,50 €" },
      { name: "Peñalagua", desc: "Tinto · Ribera del Duero", region: "España, Soria", price: "3,50 €" },
      { name: "Solar de Estraunza", desc: "Tinto · Rioja", region: "España, Álava", price: "3,50 €" },
    ],
  },
  {
    id: "cocteles",
    title: "Coctelería clásica",
    group: "bebida",
    items: [
      { name: "Tinto de Verano", desc: "Vino tinto, fanta limón, vermut y fruta", price: "4,50 €" },
      { name: "Sangría", desc: "Vino, fanta limón, naranja, vermut y licor de manzana", price: "5,20 €" },
      { name: "Aperol Spritz", desc: "Aperol, cava y soda. Amargo y refrescante", price: "4,90 €" },
      { name: "Mojito", desc: "Ron blanco, hierbabuena, lima, azúcar y soda", price: "5,20 €" },
      { name: "Daiquiri", desc: "Ron blanco, zumo de lima y azúcar", price: "4,90 €" },
      { name: "Piña Colada", desc: "Ron, piña y crema de coco", price: "4,90 €" },
      { name: "Margarita", desc: "Tequila, licor de naranja y zumo de lima", price: "5,90 €" },
      { name: "Espresso Martini", desc: "Café espresso, vodka y crema de orujo", price: "5,10 €" },
    ],
  },
  {
    id: "destilados",
    title: "Destilados",
    group: "bebida",
    items: [
      { name: "Tanqueray", desc: "Ginebra", price: "6,50 €" },
      { name: "Stoli", desc: "Ginebra", price: "5,50 €" },
      { name: "Seagram's", desc: "Ginebra", price: "6,70 €" },
      { name: "Nordés", desc: "Ginebra", price: "6,50 €" },
      { name: "Puerto de Indias", desc: "Ginebra", price: "5,50 €" },
      { name: "Absolut", desc: "Vodka", price: "5,70 €" },
      { name: "Stolichnaya", desc: "Vodka", price: "5 €" },
      { name: "Barceló", desc: "Ron", price: "5,90 €" },
      { name: "Brugal", desc: "Ron", price: "5,90 €" },
      { name: "Cacique", desc: "Ron", price: "6 €" },
      { name: "Santa Teresa", desc: "Ron", price: "5,80 €" },
      { name: "Bacardi", desc: "Ron", price: "5,90 €" },
      { name: "Toki", desc: "Whisky", price: "9 €" },
      { name: "Ballantines", desc: "Whisky", price: "4,90 €" },
      { name: "Red Label", desc: "Whisky", price: "5 €" },
      { name: "Black Label", desc: "Whisky", price: "7 €" },
      { name: "Old Parr", desc: "Whisky", price: "7,80 €" },
      { name: "Jameson", desc: "Whisky", price: "5,90 €" },
      { name: "Aguardiente de Orujo", desc: "Licor", price: "3 €" },
      { name: "Licor de Hierbas", desc: "Licor", price: "3 €" },
      { name: "Crema de Orujo", desc: "Licor", price: "3 €" },
      { name: "Pacharán", desc: "Licor", price: "3 €" },
    ],
  },
];

export const foodCategories = menu.filter((c) => c.group === "comida");
export const drinkCategories = menu.filter((c) => c.group === "bebida");

/** Platos destacados para la portada ("Lo imprescindible"). */
export const signatureDishes: (MenuItem & { category: string })[] = [
  {
    name: "Moriawase",
    category: "Sashimi",
    desc: "Selección de akami, sake y hamachi",
    price: "19,20 €",
  },
  {
    name: "Tartar de Maguro",
    category: "Tartar",
    desc: "Atún con soja, shichimi, negi, aguacate y setas confitadas",
    price: "16,50 €",
  },
  {
    name: "Crab Asahi",
    category: "Makis",
    desc: "Cangrejo de concha blanda, hamachi flambeado y shichimi",
    price: "12,50 €",
  },
  {
    name: "Tuna Ebi",
    category: "Makis",
    desc: "Langostino y aguacate, coronado con atún en salsa asahi",
    price: "14,90 €",
  },
  {
    name: "Akami flambeado",
    category: "Nigiris",
    desc: "Lomo de atún con mantequilla de miso",
    price: "3,50 €",
  },
  {
    name: "Temaki Maguro",
    category: "Hand Roll",
    desc: "Atún, aguacate, sweet chilli, cebollino y AOVE",
    price: "7,90 €",
  },
];
