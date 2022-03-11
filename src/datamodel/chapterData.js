/* Raw Data to define chapters. */

export const chapterData = [
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
        type: 'outcome',
        seedIDs: ['seed-03', 'seed-07', 'seed-01', 'seed-04', 'seed-10', 'seed-06', 'seed-02', 'seed-08', 'seed-09', 'seed-05'],
      },
      {
        type: 'local',
        seedIDs: ['seed-09', 'seed-07', 'seed-05', 'seed-04', 'seed-03', 'seed-06', 'seed-02', 'seed-08', 'seed-01', 'seed-10'],
      },
    ],
  },
];
