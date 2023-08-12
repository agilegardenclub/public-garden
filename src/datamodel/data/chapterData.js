/* Raw Data to define chapters. */

export const chapterData = [
  {
    id: 'chapter-01',
    name: 'Whatcom, WA',
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
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-004.JPG`,
        caption: 'Chapter Garden',
        date: 'July, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/chapters/bellingham/chapter-005.JPG`,
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
    zipCodes: ['98220', '98225', '98226', '98227', '98228', '98229', '98230', '98231', '98240', '98244', '98247', '98248', '98262', '98264', '98266', '98276', '98281', '98295'],
    zoneIDs: ['zone-8a', 'zone-8b'],
    varietyRatings: [
      {
        type: 'popular',
        ratings: [
          { varietyID: 'variety-01', numRatings: 276 },
          { varietyID: 'variety-02', numRatings: 242 },
          { varietyID: 'variety-03', numRatings: 234 },
          { varietyID: 'variety-04', numRatings: 201 },
          { varietyID: 'variety-05', numRatings: 193 },
        ],
      },
      {
        type: 'yield',
        ratings: [
          { varietyID: 'variety-10', rating: 5, numRatings: 112 },
          { varietyID: 'variety-06', rating: 4.5, numRatings: 67 },
          { varietyID: 'variety-05', rating: 4.5, numRatings: 49 },
          { varietyID: 'variety-04', rating: 4.5, numRatings: 92 },
          { varietyID: 'variety-03', rating: 4.5, numRatings: 138 },
        ],
      },
      {
        type: 'local',
        ratings: [
          { varietyID: 'variety-06', rating: 4.5, numRatings: 34 },
          { varietyID: 'variety-08', rating: 4.5, numRatings: 23 },
          { varietyID: 'variety-03', rating: 4.5, numRatings: 45 },
          { varietyID: 'variety-04', rating: 4.5, numRatings: 38 },
          { varietyID: 'variety-05', rating: 4.5, numRatings: 72 },
        ],
      },
    ],
  },
];
