/* Raw Data to define chapters. */

export const chapterData = [
  {
    id: 'chapter-01',
    name: 'Bellingham, WA',
    pictures: [
      { url: `${process.env.PUBLIC_URL}/img/bellingham-chapter-map.png`, caption: 'Chapter Map' },
      { url: `${process.env.PUBLIC_URL}/img/bellingham-climate.png`, caption: 'Climate Overview' },
    ],
    age: 6,
    zipCodes: ['98225', '98226', '98227', '98228', '98229'],
    zoneIDs: ['zone-8a', 'zone-8b'],
    members: 123,
    gardens: 87,
    seedRatings: [
      {
        type: 'popular',
        ratings: [
          { seedID: 'seed-01', numRatings: 276 },
          { seedID: 'seed-02', numRatings: 242 },
          { seedID: 'seed-03', numRatings: 234 },
          { seedID: 'seed-04', numRatings: 201 },
          { seedID: 'seed-05', numRatings: 193 },
        ],
      },
      {
        type: 'yield',
        ratings: [
          { seedID: 'seed-10', rating: 5, numRatings: 112 },
          { seedID: 'seed-06', rating: 4.5, numRatings: 67 },
          { seedID: 'seed-05', rating: 4.5, numRatings: 49 },
          { seedID: 'seed-04', rating: 4.5, numRatings: 92 },
          { seedID: 'seed-03', rating: 4.5, numRatings: 138 },
        ],
      },
      {
        type: 'local',
        ratings: [
          { seedID: 'seed-06', rating: 4.5, numRatings: 34 },
          { seedID: 'seed-08', rating: 4.5, numRatings: 23 },
          { seedID: 'seed-03', rating: 4.5, numRatings: 45 },
          { seedID: 'seed-04', rating: 4.5, numRatings: 38 },
          { seedID: 'seed-05', rating: 4.5, numRatings: 72 },
        ],
      },
    ],
  },
];
