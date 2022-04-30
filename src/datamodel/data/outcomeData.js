/* Raw Data to define outcomes for a chapter. */

export const outcomeData = [
  {
    id: 'outcome-data-01',
    chapterID: 'chapter-01',
    ratings: [
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
