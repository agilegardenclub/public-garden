/* Raw Data to define chapters. */

export const chapterData = [
  {
    id: 'chapter-01',
    name: 'Bellingham, WA',
    pictures: [
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/bellingham-chapter-map.png`,
        caption: 'Chapter Map',
        date: 'March, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/bellingham-climate.png`,
        caption: 'Climate Overview',
        date: 'March, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-001.jpg`,
        caption: 'Chapter Garden',
        date: 'August, 2021',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-002.jpg`,
        caption: 'Chapter Garden',
        date: 'July, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-003.jpg`,
        caption: 'Chapter Garden',
        date: 'July, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-004.jpg`,
        caption: 'Chapter Garden',
        date: 'July, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-005.jpg`,
        caption: 'Chapter Garden',
        date: 'July, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-006.jpg`,
        caption: 'Chapter Garden',
        date: 'July, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-007.jpg`,
        caption: 'Chapter Garden',
        date: 'July, 2022',
      },
    ],
    age: 6,
    zipCodes: ['98225', '98226', '98227', '98228', '98229'],
    zoneIDs: ['zone-8a', 'zone-8b'],
    members: 123,
    gardens: 87,
    varietalRatings: [
      {
        type: 'popular',
        ratings: [
          { varietalID: 'varietal-01', numRatings: 276 },
          { varietalID: 'varietal-02', numRatings: 242 },
          { varietalID: 'varietal-03', numRatings: 234 },
          { varietalID: 'varietal-04', numRatings: 201 },
          { varietalID: 'varietal-05', numRatings: 193 },
        ],
      },
      {
        type: 'yield',
        ratings: [
          { varietalID: 'varietal-10', rating: 5, numRatings: 112 },
          { varietalID: 'varietal-06', rating: 4.5, numRatings: 67 },
          { varietalID: 'varietal-05', rating: 4.5, numRatings: 49 },
          { varietalID: 'varietal-04', rating: 4.5, numRatings: 92 },
          { varietalID: 'varietal-03', rating: 4.5, numRatings: 138 },
        ],
      },
      {
        type: 'local',
        ratings: [
          { varietalID: 'varietal-06', rating: 4.5, numRatings: 34 },
          { varietalID: 'varietal-08', rating: 4.5, numRatings: 23 },
          { varietalID: 'varietal-03', rating: 4.5, numRatings: 45 },
          { varietalID: 'varietal-04', rating: 4.5, numRatings: 38 },
          { varietalID: 'varietal-05', rating: 4.5, numRatings: 72 },
        ],
      },
    ],
  },
];
