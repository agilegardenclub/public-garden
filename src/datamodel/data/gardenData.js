/* Raw data regarding gardens. */

export const gardenData = [
  /*                  JENNA GARDEN          */
  {
    id: 'garden-01',
    name: '45ght3cf',
    size: '900 sq ft',
    climateVictoryGarden: true,
    lastUpdate: 'March 12, 2022',
    gardenerIDs: ['gardener-01', 'gardener-02'],
    pictures: [
      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-007-birds-eye-view.jpg`, caption: 'Layout. Blue: 2018. Green: 2019. Purple: 2021. Orange: 2021.', date: 'March, 2022' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-001.jpg`, caption: 'Flowers at the heads of beds 4 and 5.', date: 'May, 2020' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-002.jpg`, caption: 'Bed 7 Carrots succession sowed. Bed 11 Sunflowers & amaranth.', date: 'August, 2019' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-003.jpg`, caption: 'Sunflowers hiding the winter squash in bed 11', date: 'June, 2020' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-004.jpg`, caption: 'Greens and herbs still growing right after the solstice', date: 'December, 2020' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-005.jpg`, caption: 'Bed 6 with zuchinni, herb boxes, and newly planted raspberries', date: 'May, 2020' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-006.jpg`, caption: 'Nice view of beds 1-8 before the plants take over', date: 'March, 2020' },
    ],
    plantingData: [
      /* 2021 Data */
      { plantingID: 'planting-001', year: 2021, bedID: '01', plantID: 'plant-101', startDate: '2/15/2021', transplantDate: '3/6/2021', firstHarvestDate: '6/3/2021', endDate: '7/15/2021', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-002', year: 2021, bedID: '03', plantID: 'plant-100', startDate: '2/15/2021', transplantDate: '3/18/2021', firstHarvestDate: '', endDate: '4/1/2021', outcomes: { germination: 3, appearance: 1, resistance: 1, yield: 1 }, usedGreenhouse: true },

      { plantingID: 'planting-003', year: 2021, bedID: '04', plantID: 'plant-108', startDate: '4/4/2021', transplantDate: '', firstHarvestDate: '5/18/2021', endDate: '8/2/2021', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-004', year: 2021, bedID: '04', plantID: 'plant-108', startDate: '4/29/2021', transplantDate: '', firstHarvestDate: '5/25/2021', endDate: '3/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-004.1', year: 2021, bedID: '04', plantID: 'plant-108', startDate: '5/7/2021', transplantDate: '6/20/2021', firstHarvestDate: '7/25/2021', endDate: '3/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-005', year: 2021, bedID: '05', plantID: 'plant-107', startDate: '4/18/2021', transplantDate: '5/5/2021', firstHarvestDate: '7/10/2021', endDate: '9/1/2021', outcomes: { germination: 5, appearance: 5, resistance: 5, yield: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-006', year: 2021, bedID: '06', plantID: 'plant-102', startDate: '2/21/2021', transplantDate: '3/27/2021', firstHarvestDate: '6/3/2021', endDate: '9/15/2021', outcomes: { germination: 4, appearance: 4, resistance: 5, yield: 4 }, usedGreenhouse: true },

      { plantingID: 'planting-007', year: 2021, bedID: '06', plantID: 'plant-105', startDate: '4/4/2021', transplantDate: '', firstHarvestDate: '6/4/2021', endDate: '7/10/2021', outcomes: { germination: 5, appearance: 3, resistance: 3, yield: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-008', year: 2021, bedID: '07', plantID: 'plant-103', startDate: '3/14/2021', transplantDate: '5/6/2021', firstHarvestDate: '7/10/2021', endDate: '9/23/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4 }, usedGreenhouse: true },

      { plantingID: 'planting-009', year: 2021, bedID: '07', plantID: 'plant-104', startDate: '3/28/2021', transplantDate: '5/8/2021', firstHarvestDate: '7/1/2021', endDate: '10/12/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-010', year: 2021, bedID: 'GH', plantID: 'plant-106', startDate: '3/28/2021', transplantDate: '', firstHarvestDate: '7/02/2021', endDate: '10/31/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4 }, usedGreenhouse: true },

      { plantingID: 'planting-011', year: 2021, bedID: 'GH', plantID: 'plant-110', startDate: '3/28/2021', transplantDate: '', firstHarvestDate: '8/10/2021', endDate: '9/14/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4 }, usedGreenhouse: true },

      { plantingID: 'planting-011.1', year: 2021, bedID: '10', plantID: 'plant-118', startDate: '5/6/2021', transplantDate: '', firstHarvestDate: '7/16/2021', endDate: '9/15/2021', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      /* 2020 Data */

      { plantingID: 'planting-012', year: 2020, bedID: '01', plantID: 'plant-116', fromStart: true, startDate: '3/30/2020', transplantDate: '', firstHarvestDate: '6/10/2020', endDate: '12/15/2020', outcomes: { appearance: 5, resistance: 5, yield: 5, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-013', year: 2020, bedID: '02', plantID: 'plant-101', startDate: '3/24/2020', transplantDate: '', firstHarvestDate: '6/12/2020', endDate: '7/25/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-014', year: 2020, bedID: '03', plantID: 'plant-105', startDate: '3/24/2020', transplantDate: '', firstHarvestDate: '6/2/2020', endDate: '10/01/2020', outcomes: { germination: 5, appearance: 4, resistance: 5, yield: 4, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-015', year: 2020, bedID: '03', plantID: 'plant-111', startDate: '3/24/2020', transplantDate: '', firstHarvestDate: '7/14/2020', endDate: '10/01/2020', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-016', year: 2020, bedID: '03', plantID: 'plant-113', startDate: '3/24/2020', transplantDate: '', firstHarvestDate: '7/14/2020', endDate: '10/01/2020', outcomes: { germination: 3, appearance: 4, resistance: 4, yield: 3, flavor: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-017', year: 2020, bedID: '04', plantID: 'plant-114', fromStart: true, startDate: '4/26/2020', transplantDate: '', firstHarvestDate: '8/1/2020', endDate: '10/1/2020', outcomes: { appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-018', year: 2020, bedID: '05', plantID: 'plant-112', fromStart: true, startDate: '5/6/2020', transplantDate: '', firstHarvestDate: '7/5/2020', endDate: '10/16/2020', outcomes: { appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-019', year: 2020, bedID: '05', plantID: 'plant-115', fromStart: false, startDate: '6/28/2020', transplantDate: '', firstHarvestDate: '8/5/2020', endDate: '9/1/2020', outcomes: { germination: 3, appearance: 2, resistance: 5, yield: 2, flavor: 2 }, usedGreenhouse: false },

      { plantingID: 'planting-020', year: 2020, bedID: '06', plantID: 'plant-117', startDate: '5/5/2020', transplantDate: '', firstHarvestDate: '8/1/2020', endDate: '10/15/2020', outcomes: { germination: 4, appearance: 4, resistance: 4, yield: 3, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-021', year: 2020, bedID: '07', plantID: 'plant-115', startDate: '4/18/2020', transplantDate: '', firstHarvestDate: '7/1/2020', endDate: '9/15/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 4 }, usedGreenhouse: false },
    ],

    observationData: [
      { observationID: 'observation-001', plantingID: 'planting-011.1', observationDate: '9/5/2021', tags: ['disease'], description: 'Powdery mildew found on zuchinni, but still ample flowers and fruit production.', picture: 'observation-001.jpg', gardenerID: 'gardener-01' },
      { observationID: 'observation-002', plantingID: 'planting-002', observationDate: '3/20/2021', tags: ['pest', 'help'], description: 'Two unknown caterpillar species on lettuce, no substantial harm to lettuce.  Caterpillars removed and not seen again. What are these?', picture: 'observation-002.jpg', gardenerID: 'gardener-01' },
    ],
  },
  /*                       JESSIE GARDEN               */
  {
    id: 'garden-02',
    name: '67abh39db',
    size: '1200 sq ft',
    climateVictoryGarden: false,
    lastUpdate: 'March 12, 2022',
    gardenerIDs: ['gardener-02'],
    pictures: [
      { url: `${process.env.PUBLIC_URL}/img/gardens/67abh39db/garden-007-birds-eye-view.jpg`, caption: 'Layout. Blue: 2018. Green: 2019. Purple: 2021. Orange: 2021.', date: 'March, 2022' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/67abh39db/garden-001.jpg`, caption: 'Flowers at the heads of beds 4 and 5.', date: 'May, 2020' },
    ],
    plantingData: [
      /* 2021 Data */
      { plantingID: 'planting-1001', year: 2021, bedID: '1', plantID: 'plant-119', startDate: '5/6/2021', transplantDate: '', firstHarvestDate: '7/16/2021', endDate: '9/15/2021', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },
    ],
  },
];
