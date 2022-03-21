/* Raw data regarding gardens. */

export const gardenData = [
  {
    id: 'garden-01',
    name: '45ght3cf',
    pictures: [
      {
        url: `${process.env.PUBLIC_URL}/img/garden.jpg`,
        caption: 'Spring, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-2.jpg`,
        caption: 'August, 2021',
      },
    ],
    // History must be in reverse chronological order.
    history: [
      {
        year: 2022,
        size: 300,
        beds: 12,
        plantIDs: ['plant-100', 'plant-101', 'plant-102', 'plant-103', 'plant-104', 'plant-105', 'plant-106', 'plant-107', 'plant-108', 'plant-109'],
        gardenerIDs: ['gardener-01', 'gardener-02'],
      },
    ],
    climateVictoryGarden: true,
    plantOutcomes: [
      {
        plantID: 'plant-100',
        numSeasons: 3,
        flavor: 4,
        yield: 5,
        appearance: 3.5,
        pestResistance: 5,
      },
      {
        plantID: 'plant-101',
        numSeasons: 4,
        flavor: 2,
        yield: 3,
        appearance: 3.5,
        pestResistance: 1,
      },
      {
        plantID: 'plant-102',
        numSeasons: 1,
        flavor: 3,
        yield: 4,
        appearance: 2,
        pestResistance: 3,
      },
      {
        plantID: 'plant-103',
        numSeasons: 1,
        flavor: 3,
        yield: 4,
        appearance: 2,
        pestResistance: 3,
      },
      {
        plantID: 'plant-104',
        numSeasons: 5,
        flavor: 3,
        yield: 5,
        appearance: 2,
        pestResistance: 1,
      },
      {
        plantID: 'plant-105',
        numSeasons: 2,
        flavor: 4,
        yield: 5,
        appearance: 5,
        pestResistance: 5,
      },
      {
        plantID: 'plant-106',
        numSeasons: 2,
        flavor: 1,
        yield: 1,
        appearance: 2,
        pestResistance: 2,
      },
      {
        plantID: 'plant-107',
        numSeasons: 4,
        flavor: 1,
        yield: 3,
        appearance: 3,
        pestResistance: 1,
      },
      {
        plantID: 'plant-108',
        numSeasons: 3,
        flavor: 3,
        yield: 3,
        appearance: 5,
        pestResistance: 5,
      },
      {
        plantID: 'plant-109',
        numSeasons: 3,
        flavor: 5,
        yield: 5,
        appearance: 5,
        pestResistance: 5,
      },
    ],
    lastUpdate: 'March 12, 2022',
  },
];
