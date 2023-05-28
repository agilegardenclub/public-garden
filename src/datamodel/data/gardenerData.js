/* Raw data to define gardeners. */

import { Colors } from '../../Theme';

export const gardenerData = [
  {
    id: 'gardener-01',
    initials: 'JD',
    masterGardener: true,
    bgColor: Colors.blue,
    numGardens: 3,
    numYears: 2,
    numPlantings: 87,
    collaboratorIDs: ['gardener-02', 'gardener-03'],
  },
  {
    id: 'gardener-02',
    initials: 'JB',
    bgColor: Colors.green,
    numGardens: 4,
    numYears: 6,
    numPlantings: 123,
    collaboratorIDs: ['gardener-01'],
  },
  {
    id: 'gardener-03',
    initials: 'PJ',
    bgColor: Colors.pink,
    numGardens: 1,
    numYears: 1,
    numPlantings: 34,
    collaboratorIDs: ['gardener-01', 'gardener-04'],
  },
  {
    id: 'gardener-04',
    initials: 'JA',
    bgColor: Colors.brown,
    numGardens: 1,
    numYears: 1,
    numPlantings: 34,
    collaboratorIDs: ['gardener-03'],
  },
  {
    id: 'gardener-05',
    initials: 'KK',
    bgColor: Colors.yellow,
    numGardens: 1,
    numYears: 1,
    numPlantings: 34,
    collaboratorIDs: ['gardener-01', 'gardener-02'],
  },
];
