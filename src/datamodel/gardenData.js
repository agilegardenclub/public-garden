/* Raw data regarding gardens. */

export const gardenData = [
  {
    id: 'garden-01',
    name: '45ght3cf',
    pictures: [
      {
        url: `${process.env.PUBLIC_URL}/img/garden-007-birds-eye-view.jpg`,
        caption: 'Garden layout. Blue: 2018. Green: 2019. Purple: 2021. Orange: 2021.',
        date: 'March, 2022',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-001.jpg`,
        caption: 'Flowers at the heads of beds 4 and 5.',
        date: 'May, 2020',
      },
      {
        url: `${process.env.PUBLIC_URL}/img/garden-002.jpg`,
        caption: 'Bed 7 Carrots succession sowed. Bed 11 Sunflowers & amaranth.',
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
        caption: 'Bed 6 with zuchinni, herb boxes, and newly planted raspberries',
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
        beds: 18,
        plantIDs: ['plant-100', 'plant-101', 'plant-102', 'plant-103', 'plant-104', 'plant-105', 'plant-106', 'plant-107', 'plant-108', 'plant-109'],
        gardenerIDs: ['gardener-01', 'gardener-02'],
        plantingData: [
          {
            bedID: '01',
            bedPlantings: [
              {
                plantID: 'plant-101',
                usedGreenhouse: true,
                startDate: '2/15/2021',
                transplantDate: '3/6/2021',
                firstHarvestDate: '6/3/2021',
                endDate: '7/15/2021',
                outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5 },
              },
            ],
          },
          {
            bedID: '03',
            bedPlantings: [
              {
                plantID: 'plant-100',
                usedGreenhouse: true,
                startDate: '2/15/2021',
                transplantDate: '3/18/2021',
                firstHarvestDate: '',
                endDate: '4/1/2021',
                observations: [{ date: '3/1/2021', gardenerID: 'gardener-01', description: 'Crop failed' }],
                outcomes: { germination: 3, appearance: 1, resistance: 1, yield: 1 },
              },
            ],
          },
          {
            bedID: '04',
            bedPlantings: [
              {
                plantID: 'plant-108',
                usedGreenhouse: true,
                startDate: '4/4/2021',
                transplantDate: '',
                firstHarvestDate: '5/18/2021',
                endDate: '8/2/2021',
                outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5 },
              },
              {
                plantID: 'plant-108',
                usedGreenhouse: true,
                startDate: '4/29/2021',
                transplantDate: '',
                firstHarvestDate: '5/25/2021',
                endDate: '3/1/2022',
                outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5 },
              },
              {
                plantID: 'plant-108',
                usedGreenhouse: true,
                startDate: '5/7/2021',
                transplantDate: '6/20/2021',
                firstHarvestDate: '7/25/2021',
                endDate: '3/1/2022',
                outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5 },
              },
            ],
          },
          {
            bedID: '05',
            bedPlantings: [
              {
                plantID: 'plant-107',
                usedGreenhouse: true,
                startDate: '4/18/2021',
                transplantDate: '5/5/2021',
                firstHarvestDate: '7/10/2021',
                endDate: '9/1/2021',
                outcomes: { germination: 5, appearance: 5, resistance: 5, yield: 5 },
              },
            ],
          },
          {
            bedID: '06',
            bedPlantings: [
              {
                plantID: 'plant-102',
                usedGreenhouse: true,
                startDate: '2/21/2021',
                transplantDate: '3/27/2021',
                firstHarvestDate: '6/3/2021',
                endDate: '9/15/2021',
                outcomes: { germination: 4, appearance: 4, resistance: 5, yield: 4 },
              },
              {
                plantID: 'plant-105',
                usedGreenhouse: true,
                startDate: '4/4/2021',
                transplantDate: '',
                firstHarvestDate: '6/4/2021',
                endDate: '7/10/2021',
                outcomes: { germination: 5, appearance: 3, resistance: 3, yield: 3 },
              },
            ],
          },
          {
            bedID: '07',
            bedPlantings: [
              {
                plantID: 'plant-103',
                bedID: '7',
                usedGreenhouse: true,
                startDate: '3/14/2021',
                transplantDate: '5/6/2021',
                firstHarvestDate: '7/10/2021',
                endDate: '9/23/2021',
                outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4 },
              },
              {
                plantID: 'plant-104',
                bedID: '7',
                usedGreenhouse: true,
                startDate: '3/28/2021',
                transplantDate: '5/8/2021',
                firstHarvestDate: '7/1/2021',
                endDate: '10/12/2021',
                outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5 },
              },
            ],
          },
          {
            bedID: 'GH',
            bedPlantings: [
              {
                plantID: 'plant-106',
                usedGreenhouse: true,
                startDate: '3/28/2021',
                transplantDate: '',
                firstHarvestDate: '7/02/2021',
                endDate: '10/31/2021',
                outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4 },
              },
              {
                plantID: 'plant-110',
                usedGreenhouse: true,
                startDate: '3/28/2021',
                transplantDate: '',
                firstHarvestDate: '8/10/2021',
                endDate: '9/14/2021',
                outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4 },
              },
            ],
          },
        ],
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
