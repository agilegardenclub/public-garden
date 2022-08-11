import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const outcomeDescriptions = [
  { type: 'Germination',
    1: 'Failure. No seeds germinated.',
    2: 'Poor. Approximately a quarter of the seeds germinated.',
    3: 'OK. Approximately half of the seeds germinated.',
    4: 'Good. Approximately 3/4 of the seeds germinated',
    5: 'Exceptional. 90% of more of the seeds germinated.',
  },
  { type: 'Flavor',
    1: 'Tastes bad. Not worth eating.',
    2: 'Tastes bland. Worth eating, but only a little. ',
    3: 'Tastes OK.  Average flavor.',
    4: 'Tastes good. Above average flavor, enjoyable to eat.',
    5: 'Tastes great. Can\'t imagine it tasting better. ',
  },
  { type: 'Appearance',
    1: 'Almost all ugly. 90% or more of the crop is ugly.',
    2: 'Mostly ugly. Over 50% of the crop is ugly.',
    3: 'Mostly OK. Over 50% of the crop is OK. ',
    4: 'Mostly beautiful. Over 50% of the crop is beautiful.',
    5: 'Almost all beautiful. 90% or more of the crop is beautiful.',
  },
  { type: 'Resistance',
    1: 'Extremely poor. 90% or more of the planting have damage. ',
    2: 'Very poor. More than half of the plantings suffers damage.',
    3: 'OK.  No more than a quarter of plantings have damage.',
    4: 'Good. Only a few plantings have damage.',
    5: 'Exceptional. No observable damage. ',
  },
  { type: 'Yield',
    1: 'None. The planting died and/or did not yield any food.',
    2: 'Minimal.  The planting yielded significantly less food than expected. ',
    3: 'OK. The planting yielded an expected amount of food. ',
    4: 'Good. The planting yielded somewhat more food than expected. ',
    5: 'Exceptional.  The planting yielded significantly more food than expected.',
  },
];

function getToolTipLabel(tooltipItem) {
  const type = tooltipItem.label;
  const level = tooltipItem.dataset.label;
  const value = tooltipItem.formattedValue;
  const levelText = outcomeDescriptions.find(description => description.type === type)[level];
  return `Plantings: ${value} (${levelText})`;
}

export const options = {
  indexAxis: 'y',
  elements: { bar: { borderWidth: 2 } },
  responsive: true,
  plugins: { tooltip: { callbacks: { label: getToolTipLabel } }, legend: { display: false }, title: { display: false } },
  scales: { x: { stacked: true, display: false }, y: { stacked: true } },
};

export const outcomeTypes = outcomeDescriptions.map(description => description.type);

const sampleOutcomeData = [
  { type: 'Germination', values: [3, 3, 3, 3, 3] },
  { type: 'Appearance', values: [6, 0, 1, 1, 7] },
  { type: 'Flavor', values: [0, 0, 0, 6, 9] },
  { type: 'Resistance', values: [5, 7, 3, 0, 0] },
  { type: 'Yield', values: [0, 7, 8, 0, 0] },
];

export const outcomeColorPalette = ['rgb(255, 0, 0)', 'rgb(255, 115, 119)', 'rgb(211,211,211)', 'rgb(163, 255, 0)', 'rgb(44, 186, 0)'];

function makeData(outcomeData) {
  return {
    labels: outcomeData.map(outcome => outcome.type),
    datasets: [
      { label: '1',
        data: outcomeData.map(outcome => outcome.values[0]),
        borderColor: outcomeColorPalette[0],
        backgroundColor: outcomeColorPalette[0],
      },
      {
        label: '2',
        data: outcomeData.map(outcome => outcome.values[1]),
        borderColor: outcomeColorPalette[1],
        backgroundColor: outcomeColorPalette[1],
      },
      {
        label: '3',
        data: outcomeData.map(outcome => outcome.values[2]),
        borderColor: outcomeColorPalette[2],
        backgroundColor: outcomeColorPalette[2],
      },
      {
        label: '4',
        data: outcomeData.map(outcome => outcome.values[3]),
        borderColor: outcomeColorPalette[3],
        backgroundColor: outcomeColorPalette[3],
      },
      {
        label: '5',
        data: outcomeData.map(outcome => outcome.values[4]),
        borderColor: outcomeColorPalette[4],
        backgroundColor: outcomeColorPalette[4],
      },
    ],
  };
}

export function OutcomeChart() {
  return <Bar options={options} data={makeData(sampleOutcomeData)} />;
}
