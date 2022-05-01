/* Raw data regarding plants. */

export const plantData = [
  {
    id: 'plant-01',
    plant: 'Asparagus',
    variety: 'Jersey Knight',
    familyID: 'plantfamily-10',
    vendorID: 'vendor-10',
    description: 'Sweeter and more tender than green varieties, and a colorful option for raw eating in salads. Color fades when cooked, but excellent flavor is retained.',
  },
  {
    id: 'plant-02',
    plant: 'Broccoli',
    variety: 'Solstice',
    familyID: 'plantfamily-02',
    vendorID: 'vendor-02',
    description: 'Big Vigorous plants hold their tight, dark green heads high above the leaves on very long stems with excellent side shoot production.',
  },
  {
    id: 'plant-03',
    plant: 'Carrot',
    variety: 'Scarlet Nantes',
    familyID: 'plantfamily-08',
    vendorID: 'vendor-02',
    description: 'Our open-pollinated scarlet nantes have plenty of the sweetness but also a rich real carrot flavor. Widely adapted, it is very versatile for everything from fresh baby carrots to fall storage and juicing. ',
  },
  {
    id: 'plant-04',
    plant: 'Lettuce',
    variety: 'Blue Rock',
    familyID: 'plantfamily-09',
    vendorID: 'vendor-01',
    description: 'Attractive, dark green savoy leaves on tall, upright heads that fill out nicely and remain partially open when mature. ',
  },
  {
    id: 'plant-05',
    plant: 'Kale',
    variety: 'Dwarf Blue',
    familyID: 'plantfamily-02',
    vendorID: 'vendor-03',
    description: 'Gorgeous finely curled blue-green leaves hold their color even in severe cold.',
  },
  {
    id: 'plant-06',
    plant: 'Leek',
    variety: 'PrizeTaker',
    familyID: 'plantfamily-01',
    vendorID: 'vendor-03',
    description: 'Very hardy 36" tall plants with thick, solid, pure-white base. ',
  },
  {
    id: 'plant-07',
    plant: 'Radish',
    variety: 'China Rose',
    familyID: 'plantfamily-02',
    vendorID: 'vendor-04',
    description: 'One of the oldest types of radish. A very hardy fall/winter variety. Roots are about 5” long and a rose color.',
  },
  {
    id: 'plant-08',
    plant: 'Sugar Pea',
    variety: 'Oregon Giant',
    familyID: 'plantfamily-05',
    vendorID: 'vendor-05',
    description: 'Highly recommended by Carol Deppe in “The Tao of Vegetable Gardening”, this edible-pod pea has huge pods and big crinkled seeds.',
  },
  {
    id: 'plant-09',
    plant: 'Tomato',
    variety: 'Orange King',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-05',
    description: 'Early, productive, and worth growing even as a sprawling, low-maintenance outdoor tomato in the cool Pacific Northwest. ',
  },
  {
    id: 'plant-10',
    plant: 'Chard',
    variety: 'Rainbow',
    familyID: 'plantfamily-03',
    vendorID: 'vendor-05',
    description: 'A farmers market favorite, rainbow chard is a mix of green, red, orange, and yellow leaf types that make an attractive combination in salads or bunched on display. ',
  },

  // Jenna's data starts here.
  {
    id: 'plant-100',
    plant: 'Lettuce',
    variety: 'Royal Red',
    familyID: 'plantfamily-09',
    vendorID: 'vendor-02',
    description: 'Vibrant red tips on green leaves, this looseleaf adds a wonderful shade of red to a salad. ',
    daysToHarvest: 55,
  },
  {
    id: 'plant-101',
    plant: 'Pea',
    variety: 'Sugar Snap',
    familyID: 'plantfamily-05',
    gardenerIDs: ['gardener-01'], // for seeds of unknown provenance.
    vendorID: 'vendor-00',
    description: 'Seeds were from a friend, not sure of original vendor.',
    daysToHarvest: 60,
  },
  {
    id: 'plant-102',
    plant: 'Kale',
    variety: 'Dazzling Blue Lacinato',
    familyID: 'plantfamily-02',
    vendorID: 'vendor-02',
    description: 'Wouldn\'t it be great to have Lacinato kale with the classic, deep-blue-green, savoyed leaves but with bright purple stems?',
    daysToHarvest: 60,
  },
  {
    id: 'plant-103',
    plant: 'Tomato',
    variety: 'Pinky',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Hailing originally from Japan, Pinky is a fabulous tasting mid-sized cherry tomato: pinkish-red, firm, and fleshy with a very sweet, rich summertime flavor. ',
    daysToHarvest: 75,
  },
  {
    id: 'plant-104',
    plant: 'Basil',
    variety: 'Italian',
    familyID: 'plantfamily-06',
    vendorID: 'vendor-02',
    description: 'This is one large, lovely, and lush Genovese-type basil. ',
    daysToHarvest: 80,
  },
  {
    id: 'plant-105',
    plant: 'Broccoli',
    variety: 'Spring Raab',
    familyID: 'plantfamily-02',
    vendorID: 'vendor-02',
    description: 'Italian specialty with mild mustard flavor and broccoli-like florets.',
    daysToHarvest: 45,
  },
  {
    id: 'plant-106',
    plant: 'Pepper',
    variety: 'Pimiento de Padron',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Brought back from South America by Spanish monks in the 16th century and grown in the village of Padron in Galicia ever since, these smoky little numbers about drown us every summer we grow them! ',
    daysToHarvest: 65,
  },
  {
    id: 'plant-107',
    plant: 'Bean',
    variety: 'Empress Snap',
    familyID: 'plantfamily-05',
    vendorID: 'vendor-02',
    description: 'Empress is simply our best bush green bean for both eating quality and yield.',
    daysToHarvest: 55,
  },
  {
    id: 'plant-108',
    plant: 'Chard',
    variety: 'Rainbow',
    familyID: 'plantfamily-03',
    vendorID: 'vendor-02',
    description: 'Unquestionably the brightest burst of rainbow brilliance in the garden. ',
    daysToHarvest: 55,
  },
  {
    id: 'plant-109',
    plant: 'Chard',
    variety: 'Garden Rainbow',
    familyID: 'plantfamily-03',
    vendorID: 'vendor-07',
    description: 'Colorful, long-standing heirloom with green leaves and crunchy stalks that show off in a rainbow of colors, including red, pink, white, and gold.',
    daysToHarvest: 50,
  },
  {
    id: 'plant-110',
    plant: 'Eggplant',
    variety: 'Violetta di Firenze',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Beautiful bicolor white and purple heirloom variety from Florence, Italy with a mild, creamy taste that is always delicious and never bitter. ',
    daysToHarvest: 90,
  },
  {
    id: 'plant-111',
    plant: 'Kale',
    variety: 'Red Russian',
    familyID: 'plantfamily-02',
    vendorID: 'vendor-02',
    description: 'Not often found in supermarkets due to their shorter shelf life, the oak-leaved kales are the most tender of all kales.  ',
    daysToHarvest: 55,
  },
  {
    id: 'plant-112',
    plant: 'Basil',
    variety: 'Italian',
    familyID: 'plantfamily-06',
    vendorID: 'vendor-08',
    description: 'Certified Organic Starts',
    daysToHarvest: 70,
  },
  {
    id: 'plant-113',
    plant: 'Lettuce',
    variety: 'Red Oak Leaf',
    familyID: 'plantfamily-09',
    vendorID: 'vendor-06',
    description: 'Burgundy oakleaf with golden sheen, perfect for teenage heads or baby leaves in all seasons.',
    daysToHarvest: 60,
  },
  {
    id: 'plant-113',
    plant: 'Lettuce',
    variety: 'Red Oak Leaf',
    familyID: 'plantfamily-09',
    vendorID: 'vendor-06',
    description: 'Burgundy oakleaf with golden sheen, perfect for teenage heads or baby leaves in all seasons.',
    daysToHarvest: 60,
  },
  {
    id: 'plant-114',
    plant: 'Tomato',
    variety: 'Sun Gold',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-08',
    description: 'Certified Organic Starts',
    daysToHarvest: 100,
  },
  {
    id: 'plant-115',
    plant: 'Bean',
    variety: 'Scarlet Runner',
    familyID: 'plantfamily-05',
    vendorID: 'vendor-09',
    description: '',
    daysToHarvest: 75,
  },
  {
    id: 'plant-116',
    plant: 'Kale',
    variety: 'Red Russian',
    familyID: 'plantfamily-02',
    vendorID: 'vendor-08',
    description: 'Certified Organic Starts',
    daysToHarvest: 95,
  },
  {
    id: 'plant-117',
    plant: 'Bean',
    variety: 'Soldier',
    familyID: 'plantfamily-05',
    vendorID: 'vendor-02',
    description: 'Certified Organic Starts',
    daysToHarvest: 60,
  },
  {
    id: 'plant-118',
    plant: 'Zucchini',
    variety: 'Cocozelle',
    familyID: 'plantfamily-04',
    vendorID: 'vendor-02',
    description: 'Classic, striped summer squash.',
    daysToHarvest: 60,
  },
  {
    id: 'plant-119',
    plant: 'Zucchini',
    variety: 'Dark Star',
    familyID: 'plantfamily-04',
    vendorID: 'vendor-02',
    description: 'Here is a zuke to rival all the corporate-owned hybrids currently hijacking the zucchini market. ',
    daysToHarvest: 50,
  },
  {
    id: 'plant-120',
    plant: 'Kale',
    variety: 'Dwarf Blue Scotch',
    familyID: 'plantfamily-02',
    vendorID: 'vendor-02',
    description: 'Classic green curly kale.',
    daysToHarvest: 55,
  },
  {
    id: 'plant-121',
    plant: 'Tomato',
    variety: 'Sheyboygan',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Very early and productive indeterminate paste tomato.',
    daysToHarvest: 80,
  },
  {
    id: 'plant-122',
    plant: 'Lettuce',
    variety: "Flashy Trout's Back",
    familyID: 'plantfamily-09',
    vendorID: 'vendor-02',
    description: 'Beautiful romaine with stunning splashes of red speckles',
    daysToHarvest: 55,
  },
  {
    id: 'plant-123',
    plant: 'Tomato',
    variety: 'Matina',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Uniform and prolific indeterminate slicing tomato.',
    daysToHarvest: 70,
  },
  {
    id: 'plant-124',
    plant: 'Tomato',
    variety: 'Fiaschetto di Manduria',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Small, plum/paste determinate tomato',
    daysToHarvest: 70,
  },
  {
    id: 'plant-125',
    plant: 'Pepper',
    variety: 'Bridge to Paris',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Sweet, bright red fruits up to 8 inches.  Great for frying.',
    daysToHarvest: 85,
  },
  {
    id: 'plant-126',
    plant: 'Pepper',
    variety: 'Petit Marseillais',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Sweet, yellow fruits up to 5 inches long.  Fantastic picklers.',
    daysToHarvest: 85,
  },
  {
    id: 'plant-127',
    plant: 'Pepper',
    variety: 'Criolla di Cochina',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Sweet, 4 inch fist -ized peppers with thin flesh.',
    daysToHarvest: 85,
  },
  {
    id: 'plant-128',
    plant: 'Pepper',
    variety: 'Marta Polka',
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Popular, lobed bell-type sweet, yellow pepper.',
    daysToHarvest: 90,
  },
  {
    id: 'plant-129',
    plant: 'Beet',
    variety: 'Touchstone Gold',
    familyID: 'plantfamily-03',
    vendorID: 'vendor-02',
    description: 'Golden beet.',
    daysToHarvest: 60,
  },
  {
    id: 'plant-130',
    plant: 'Squash',
    variety: 'Zeppelin Delicata',
    familyID: 'plantfamily-04',
    vendorID: 'vendor-02',
    description: 'Sweet, moist flash on fruits weighing up to a pound.',
    daysToHarvest: 95,
  },
  {
    id: 'plant-131',
    plant: 'Squash',
    variety: 'Potimarron',
    familyID: 'plantfamily-04',
    vendorID: 'vendor-02',
    description: 'Chestnut flavor with flakey skin.  Similar to Red Kuri.',
    daysToHarvest: 85,
  },
  {
    id: 'plant-132',
    plant: 'Cucumber',
    variety: 'Vorgebirgstrauben',
    familyID: 'plantfamily-04',
    vendorID: 'vendor-02',
    description: 'Sweet, small German pickler.',
    daysToHarvest: 85,
  },
  {
    id: 'plant-133',
    plant: 'Pumpkin',
    variety: 'Winter Luxury',
    familyID: 'plantfamily-04',
    vendorID: 'vendor-02',
    description: 'Subtly netted skin and sweet flesh.',
    daysToHarvest: 95,
  },
  {
    id: 'plant-134',
    plant: 'Carrots',
    variety: 'Rainbow Mix',
    familyID: 'plantfamily-08',
    vendorID: 'vendor-02',
    description: 'Mix of Scarlet Nantes, Dragon, and Yellowstone',
    daysToHarvest: 65,
  },
  {
    id: 'plant-135',
    plant: 'Ground Cherry',
    variety: "Aunt Molly's",
    familyID: 'plantfamily-07',
    vendorID: 'vendor-02',
    description: 'Yellow, fruit dropw to ground when ripe. Great for snacking.',
    daysToHarvest: 75,
  },
  {
    id: 'plant-136',
    plant: 'Sunflower',
    variety: 'Garden Anarchy Mix',
    familyID: 'plantfamily-09',
    vendorID: 'vendor-02',
    description: 'Expect to be surprised by an unpredictable array of various combinations.',
    daysToHarvest: 90,
  },
  {
    id: 'plant-137',
    plant: 'Dill',
    variety: 'Goldkrone',
    familyID: 'plantfamily-08',
    vendorID: 'vendor-02',
    description: 'Vigorous, slow to bolt variety.',
    daysToHarvest: 45,
  },
  {
    id: 'plant-138',
    plant: 'Raspberry',
    variety: 'Golden',
    familyID: 'plantfamily-10',
    vendorID: '',
    description: 'Sweet, golden/salmon variety',
    daysToHarvest: 365,
  },
];

// Plant Families
// plantfamily-01: onion, garlic, leek, shallot
// plantfamily-02: broccoli, brussels sprout, cabbage, cauliflower, kale, arugula, turnip, pak choi, radish, mustard, kohlrabi, cress, collard
// plantfamily-03: chard, spinach, beet, amaranth
// plantfamily-04: squash, zucchini, cucumber, melon, cantaloupe, pumpkin
// plantfamily-05: bean, pea, peanuts
// plantfamily-06: corn, buckwheat, okra, wheat, basil ->CHANGED to other annuals
// plantfamily-07: tomato, potato, eggplant, pepper, ground cherry, tomatillo
// plantfamily-08: carrot, celeriac, cilantro, fennel, parsley, dill, parsnip, chervil
// plantfamily-09: lettuce, radicchio, endive, sunflowers, chamomile, salsify
// plantfamily-10: mint, rosemary, sage, lemon balm, asparagus, berries, sorrel, artichoke, sweet potato ->CHANGED to other perennials