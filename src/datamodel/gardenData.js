/* Raw data regarding gardens. */

export const gardenData = [
  {
    id: 'garden-01',
    name: '45ght3cf',
    pictures: [
      {
        url: `${process.env.PUBLIC_URL}/img/garden-007-birds-eye-view.jpg`,
        caption: 'Garden layout. Each color represents a phase of garden expansion. Blue: 2018. Green: 2019. Purple: 2021. Orange: 2021.',
        date: 'March, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-001.jpg`,
        caption: 'Flowers at the heads of beds 4 and 5.',
        date: 'May, 2020',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-002.jpg`,
        caption: 'Carrots in bed 7 were succession sowed.  Sunflowers in bed 11 happily shading out the amaranth.',
        date: 'August, 2019',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-003.jpg`,
        caption: 'Sunflowers hiding the winter squash in bed 11',
        date: 'June, 2020',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-004.jpg`,
        caption: 'Greens and herbs still growing right after the solstice',
        date: 'December, 2020',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-005.jpg`,
        caption: 'Bed 6 with two happy zuchinni, the herb boxes, and newly planted raspberries in the back',
        date: 'May, 2020',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-006.jpg`,
        caption: 'Nice view of beds 1-8 before the plants take over',
        date: 'March, 2020',
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
