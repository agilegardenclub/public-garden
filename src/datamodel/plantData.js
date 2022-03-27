/* Raw data regarding plants. */

export const plantData = [
  {
    id: 'plant-01',
    plant: 'Asparagus',
    variety: 'Purple Passion',
    familyID: 'plantfamily-06',
    vendor: 'Johnnys',
    vendorURL: 'https://www.johnnyseeds.com/vegetables/asparagus/purple-passion-f1-asparagus-crowns-2225.html',
    description: 'Sweeter and more tender than green varieties, and a colorful option for raw eating in salads. Color fades when cooked, but excellent flavor is retained.',
  },
  {
    id: 'plant-02',
    plant: 'Broccoli',
    variety: 'Solstice',
    familyID: 'plantfamily-02',
    vendor: 'Uprising Organics',
    vendorURL: 'https://uprisingorganics.com/collections/broccoli-rapini/products/broccoli-solstice',
    description: 'Big Vigorous plants hold their tight, dark green heads high above the leaves on very long stems with excellent side shoot production.',
  },
  {
    id: 'plant-03',
    plant: 'Carrot',
    variety: 'Scarlet Nantes',
    familyID: 'plantfamily-08',
    vendor: 'Uprising Organics',
    vendorURL: 'https://uprisingorganics.com/collections/carrot/products/carrot-scarlet-nantes',
    description: 'Our open-pollinated scarlet nantes have plenty of the sweetness but also a rich real carrot flavor. Widely adapted, it is very versatile for everything from fresh baby carrots to fall storage and juicing. ',
  },
  {
    id: 'plant-04',
    plant: 'Lettuce',
    variety: 'Blue Rock',
    familyID: 'plantfamily-09',
    vendor: 'Johnnys',
    vendorURL: 'https://www.johnnyseeds.com/vegetables/lettuce/romaine-lettuce-cos/blue-rock-organic-lettuce-seed-4618G.html?cgid=romaine-lettuce#start=1',
    description: 'Attractive, dark green savoy leaves on tall, upright heads that fill out nicely and remain partially open when mature. ',
  },
  {
    id: 'plant-05',
    plant: 'Kale',
    variety: 'Dwarf Blue',
    familyID: 'plantfamily-02',
    vendor: 'Seed Savers',
    vendorURL: 'https://www.seedsavers.org/dwarf-blue-curled-organic-kale',
    description: 'Gorgeous finely curled blue-green leaves hold their color even in severe cold.',
  },
  {
    id: 'plant-06',
    plant: 'Leek',
    variety: 'PrizeTaker',
    familyID: 'plantfamily-01',
    vendor: 'Seed Savers',
    vendorURL: 'https://www.seedsavers.org/prizetaker-leek',
    description: 'Very hardy 36" tall plants with thick, solid, pure-white base. ',
  },
  {
    id: 'plant-07',
    plant: 'Radish',
    variety: 'China Rose',
    familyID: 'plantfamily-02',
    vendor: 'Baker Creek',
    vendorURL: 'https://www.rareseeds.com/store/vegetables/radishes/china-rose-radish',
    description: 'One of the oldest types of radish. A very hardy fall/winter variety. Roots are about 5” long and a rose color.',
  },
  {
    id: 'plant-08',
    plant: 'Sugar Pea',
    variety: 'Oregon Giant',
    familyID: 'plantfamily-05',
    vendor: 'Resilient Seeds',
    vendorURL: 'https://www.resilientseeds.com/store/p146/Sugar_Pea_-_Oregon_Giant_%28Certified_Organic%29.html',
    description: 'Highly recommended by Carol Deppe in “The Tao of Vegetable Gardening”, this edible-pod pea has huge pods and big crinkled seeds.',
  },
  {
    id: 'plant-09',
    plant: 'Tomato',
    variety: 'Orange King',
    familyID: 'plantfamily-07',
    vendor: 'Resilient Seeds',
    vendorURL: 'https://www.resilientseeds.com/store/p129/Tomato_-_Orange_King_%28Certified_Organic%29.html',
    description: 'Early, productive, and worth growing even as a sprawling, low-maintenance outdoor tomato in the cool Pacific Northwest. ',
  },
  {
    id: 'plant-10',
    plant: 'Chard',
    variety: 'Rainbow',
    familyID: 'plantfamily-03',
    vendor: 'Resilient Seeds',
    vendorURL: 'https://www.resilientseeds.com/store/p124/Chard%2C_Rainbow_%28Certified_Organic%29.html',
    description: 'A farmers market favorite, rainbow chard is a mix of green, red, orange, and yellow leaf types that make an attractive combination in salads or bunched on display. ',
  },

  // Jenna's data starts here.
  {
    id: 'plant-100',
    plant: 'Lettuce',
    variety: 'Royal Red',
    familyID: 'plantfamily-09',
    vendor: 'Uprising Seeds',
    vendorURL: 'https://uprisingorganics.com/products/lettuce-royal-red',
    description: 'Vibrant red tips on green leaves, this looseleaf adds a wonderful shade of red to a salad. ',
    daysToHarvest: 55,
  },
  {
    id: 'plant-101',
    plant: 'Snap Pea',
    variety: 'Sugar Snap',
    familyID: 'plantfamily-05',
    gardenerIDs: ['gardener-01'], // for seeds of unknown provenance.
    vendor: '',
    vendorURL: '',
    description: 'Seeds were from a friend, not sure of original vendor.',
    daysToHarvest: 60,
  },
  {
    id: 'plant-102',
    plant: 'Kale',
    variety: 'Dazzling Blue Lacinato',
    familyID: 'plantfamily-02',
    vendor: 'Uprising Seeds',
    vendorURL: 'https://uprisingorganics.com/collections/vegetables/products/kale-dazzling-blue',
    description: 'Wouldn\'t it be great to have Lacinato kale with the classic, deep-blue-green, savoyed leaves but with bright purple stems?',
    daysToHarvest: 60,
  },
  {
    id: 'plant-103',
    plant: 'Tomato',
    variety: 'Pinky',
    familyID: 'plantfamily-07',
    vendor: 'Uprising Seeds',
    vendorURL: 'https://uprisingorganics.com/collections/vegetables/products/tomato-pinky',
    description: 'Hailing originally from Japan, Pinky is a fabulous tasting mid-sized cherry tomato: pinkish-red, firm, and fleshy with a very sweet, rich summertime flavor. ',
    daysToHarvest: 75,
  },
  {
    id: 'plant-104',
    plant: 'Basil',
    variety: 'Italian',
    familyID: 'plantfamily-10',
    vendor: 'Uprising Seeds',
    vendorURL: 'https://uprisingorganics.com/collections/herbs/products/basil-italian-largeleaf',
    description: 'This is one large, lovely, and lush Genovese-type basil. ',
    daysToHarvest: 80,
  },
  {
    id: 'plant-105',
    plant: 'Broccoli',
    variety: 'Spring Raab',
    familyID: 'plantfamily-02',
    vendor: 'High Mowing Seeds',
    vendorURL: 'https://www.highmowingseeds.com/organic-non-gmo-spring-raab-broccoli-raab.html',
    description: 'Italian specialty with mild mustard flavor and broccoli-like florets.',
    daysToHarvest: 45,
  },
  {
    id: 'plant-106',
    plant: 'Pepper (Hot)',
    variety: 'Pimiento de Padron',
    familyID: 'plantfamily-07',
    vendor: 'Uprising Seeds',
    vendorURL: 'https://uprisingorganics.com/collections/vegetables/products/hot-pepper-pimiento-de-padron',
    description: 'Brought back from South America by Spanish monks in the 16th century and grown in the village of Padron in Galicia ever since, these smoky little numbers about drown us every summer we grow them! ',
    daysToHarvest: 65,
  },
  {
    id: 'plant-107',
    plant: 'Bean (Snap)',
    variety: 'Empress',
    familyID: 'plantfamily-05',
    vendor: 'Uprising Seeds',
    vendorURL: 'https://uprisingorganics.com/collections/vegetables/products/bean-bush-snap-empress',
    description: 'Empress is simply our best bush green bean for both eating quality and yield.',
    daysToHarvest: 55,
  },
  {
    id: 'plant-108',
    plant: 'Chard (Swiss)',
    variety: 'Rainbow',
    familyID: 'plantfamily-03',
    vendor: 'Uprising Seeds',
    vendorURL: 'https://uprisingorganics.com/collections/chard/products/chard-rainbow',
    description: 'Unquestionably the brightest burst of rainbow brilliance in the garden. ',
    daysToHarvest: 55,
  },
  {
    id: 'plant-109',
    plant: 'Chard (Heirloom)',
    variety: 'Garden Rainbow',
    familyID: 'plantfamily-03',
    vendor: 'Renee\'s Garden',
    vendorURL: 'https://www.reneesgarden.com/products/chard-organic-garden-rainbow',
    description: 'Colorful, long-standing heirloom with green leaves and crunchy stalks that show off in a rainbow of colors, including red, pink, white, and gold.',
    daysToHarvest: 50,
  },
  {
    id: 'plant-110',
    plant: 'Eggplant',
    variety: 'Violetta di Firenze',
    familyID: 'plantfamily-07',
    vendor: 'Uprising Seeds',
    vendorURL: 'https://uprisingorganics.com/collections/vegetables/products/eggplant-violetta-di-firenze',
    description: 'Beautiful bicolor white and purple heirloom variety from Florence, Italy with a mild, creamy taste that is always delicious and never bitter. ',
    daysToHarvest: 90,
  },
];

// Plant Families
// plantfamily-01: onion, garlic, leek, shallot
// plantfamily-02: broccoli, brussels sprout, cabbage, cauliflower, kale, arugula, turnip, pak choi, radish
// plantfamily-03: chard, spinach, beet
// plantfamily-04: squash, zucchini, cucumber, melon, cantaloupe, pumpkin
// plantfamily-05: bean, pea
// plantfamily-06: asparagus
// plantfamily-07: tomato, potato, eggplant, pepper
// plantfamily-08: carrot, celeriac, cilantro, fennel, parsley, dill, parsnip
// plantfamily-09: lettuce
// plantfamily-10: basil, mint
