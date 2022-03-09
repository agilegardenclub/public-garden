// Mockup of data model.

// eslint-disable-next-line max-classes-per-file
const gardeners = [
  {
    id: 'gardener-01',
    name: 'J.D.',
  },
  {
    id: 'gardener-02',
    name: 'K.A.',
  },
];

const gardens = [
  {
    id: 'garden-01',
    name: '45ght3cf',
    pictures: ['https://agilegardenclub.com/public-garden-45ght3cf/img/garden.jpg'],
    history: [
      {
        year: 2022,
        size: 300,
        beds: 12,
        seedIDs: ['seed-01', 'seed-02', 'seed-03', 'seed-04', 'seed-05', 'seed-06', 'seed-07', 'seed-08', 'seed-09', 'seed-10'],
        gardenerIDs: ['gardener-01', 'gardener-02'],
      },
    ],
    lastUpdate: 'March 12, 2022',
  },
];

const seeds = [
  {
    id: 'seed-01',
    name: 'Asparagus',
  },
  {
    id: 'seed-02',
    name: 'Broccoli',
  },
  {
    id: 'seed-03',
    name: 'Carrot',
  },
  {
    id: 'seed-04',
    name: 'Echinacea',
  },
  {
    id: 'seed-05',
    name: 'Kale',
  },
  {
    id: 'seed-06',
    name: 'Potato',
  },
  {
    id: 'seed-07',
    name: 'Radish',
  },
  {
    id: 'seed-08',
    name: 'Turnip',
  },
  {
    id: 'seed-09',
    name: 'Watermelon',
  },
  {
    id: 'seed-10',
    name: 'Zucchini',
  },
];

const chapters = [
  {
    id: 'chapter-01',
    name: 'Bellingham, WA',
    pictures: ['https://agilegardenclub.com/public-garden-45ght3cf/img/bellingham-chapter-map.png'],
    age: 6,
    zipCodes: ['98225', '98226', '98227', '98228', '98229'],
    zoneIDs: ['zone-8a', 'zone-8b'],
    members: 123,
    gardens: 87,
    seedInfo: [
      {
        type: 'popular',
        seedIDs: ['seed-01', 'seed-02', 'seed-03', 'seed-04', 'seed-05', 'seed-06', 'seed-07', 'seed-08', 'seed-09', 'seed-10'],
      },
      {
        type: 'success',
        seedIDs: ['seed-01', 'seed-02', 'seed-03', 'seed-04', 'seed-05', 'seed-06', 'seed-07', 'seed-08', 'seed-09', 'seed-10'],
      },
      {
        type: 'local',
        seedIDs: ['seed-01', 'seed-02', 'seed-03', 'seed-04', 'seed-05', 'seed-06', 'seed-07', 'seed-08', 'seed-09', 'seed-10'],
      },
    ],
  },
];

class GardenOverview {
  // eslint-disable-next-line no-shadow
  constructor(garden, gardeners, seeds) {
    this.garden = garden;
    this.gardeners = gardeners;
    this.seeds = seeds;
  }

  getGardenerNames() {
    const gardenerIDs = this.garden.history[0].gardenerIDs;
    return gardenerIDs.map(id => this.gardeners[id].name);
  }

  getAge() {
    return this.garden.history.length;
  }

  getBeds() {
    return this.garden.history[0].beds;
  }

  getPlants() {
    const seedIDs = this.garden.history[0].seedIDs;
    return seedIDs.map(id => this.seeds[id].name);
  }
}

class ChapterOverview {
  // eslint-disable-next-line no-shadow
  constructor(chapter, seeds) {
    this.chapter = chapter;
    this.seeds = seeds;
  }
}

export const gardenOverview = new GardenOverview(gardens[0], gardeners, seeds);
export const chapterOverview = new ChapterOverview(chapters[0], seeds);
