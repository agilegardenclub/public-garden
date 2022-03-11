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
    lastUpdate: 'March 12, 2022',
  },
];
