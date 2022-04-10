/* Raw Data to define chapters. */

export const chapterData = [
  {
    id: 'chapter-01',
    name: 'Bellingham, WA',
    pictures: [
      {
        url: `${process.env.PUBLIC_URL}/img/bellingham-chapter-map.png`,
        caption: 'Chapter Map',
        date: 'March, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/bellingham-climate.png`,
        caption: 'Climate Overview',
        date: 'March, 2022',
      },
    ],
    age: 6,
    zipCodes: ['98225', '98226', '98227', '98228', '98229'],
    zoneIDs: ['zone-8a', 'zone-8b'],
    members: 123,
    gardens: 87,
    plantRatings: [
      {
        type: 'popular',
        ratings: [
          { plantID: 'plant-01', numRatings: 276 },
          { plantID: 'plant-02', numRatings: 242 },
          { plantID: 'plant-03', numRatings: 234 },
          { plantID: 'plant-04', numRatings: 201 },
          { plantID: 'plant-05', numRatings: 193 },
        ],
      },
      {
        type: 'yield',
        ratings: [
          { plantID: 'plant-10', rating: 5, numRatings: 112 },
          { plantID: 'plant-06', rating: 4.5, numRatings: 67 },
          { plantID: 'plant-05', rating: 4.5, numRatings: 49 },
          { plantID: 'plant-04', rating: 4.5, numRatings: 92 },
          { plantID: 'plant-03', rating: 4.5, numRatings: 138 },
        ],
      },
      {
        type: 'local',
        ratings: [
          { plantID: 'plant-06', rating: 4.5, numRatings: 34 },
          { plantID: 'plant-08', rating: 4.5, numRatings: 23 },
          { plantID: 'plant-03', rating: 4.5, numRatings: 45 },
          { plantID: 'plant-04', rating: 4.5, numRatings: 38 },
          { plantID: 'plant-05', rating: 4.5, numRatings: 72 },
        ],
      },
    ],
  },
];
