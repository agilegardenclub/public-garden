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
        seedIDs: ['seed-01', 'seed-02', 'seed-03', 'seed-04', 'seed-05', 'seed-06', 'seed-07', 'seed-08', 'seed-09', 'seed-10'],
        gardenerIDs: ['gardener-01', 'gardener-02'],
      },
    ],
    climateVictoryGarden: true,
    seedOutcomes: [
      {
        seedID: 'seed-01',
        numSeasons: 3,
        flavor: 4,
        yield: 5,
        appearance: 3.5,
        pestResistance: 5,
      },
      {
        seedID: 'seed-02',
        numSeasons: 4,
        flavor: 2,
        yield: 3,
        appearance: 3.5,
        pestResistance: 1,
      },
      {
        seedID: 'seed-03',
        numSeasons: 1,
        flavor: 3,
        yield: 4,
        appearance: 2,
        pestResistance: 3,
      },
      {
        seedID: 'seed-04',
        numSeasons: 5,
        flavor: 3,
        yield: 5,
        appearance: 2,
        pestResistance: 1,
      },
      {
        seedID: 'seed-05',
        numSeasons: 2,
        flavor: 4,
        yield: 5,
        appearance: 5,
        pestResistance: 5,
      },
      {
        seedID: 'seed-06',
        numSeasons: 2,
        flavor: 1,
        yield: 1,
        appearance: 2,
        pestResistance: 2,
      },
      {
        seedID: 'seed-07',
        numSeasons: 4,
        flavor: 1,
        yield: 3,
        appearance: 3,
        pestResistance: 1,
      },
      {
        seedID: 'seed-08',
        numSeasons: 3,
        flavor: 3,
        yield: 3,
        appearance: 5,
        pestResistance: 5,
      },
      {
        seedID: 'seed-09',
        numSeasons: 3,
        flavor: 5,
        yield: 5,
        appearance: 5,
        pestResistance: 5,
      },
      {
        seedID: 'seed-10',
        numSeasons: 3,
        flavor: 4,
        yield: 5,
        appearance: 3.5,
        pestResistance: 5,
      },
    ],
    lastUpdate: 'March 12, 2022',
  },
];
