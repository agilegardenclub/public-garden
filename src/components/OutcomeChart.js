import React from 'react';
import _ from 'lodash';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const outcomeDescriptions = [
  { type: 'Germination',
    1: 'Failure. No seeds germinated.',
    2: 'Poor. Approximately a quarter of the seeds germinated.',
    3: 'OK. Approximately half of the seeds germinated.',
    4: 'Good. Approximately 3/4 of the seeds germinated',
    5: 'Outstanding. 90% of more of the seeds germinated.',
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
    5: 'Outstanding. No observable damage. ',
  },
  { type: 'Yield',
    1: 'None. The planting died and/or did not yield any food.',
    2: 'Minimal.  The planting yielded significantly less food than expected. ',
    3: 'OK. The planting yielded an expected amount of food. ',
    4: 'Good. The planting yielded somewhat more food than expected. ',
    5: 'Outstanding.  The planting yielded significantly more food than expected.',
  },
];

function getToolTipLabel(tooltipItem) {
  const type = tooltipItem.label.split(' ')[0];
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

// const sampleOutcomeData = {
//   appearance: { 1: 5, 2: 0, 3: 0, 4: 0, 5: 0 },
//   flavor: { 1: 0, 2: 0, 3: 5, 4: 0, 5: 0 },
//   germination: { 1: 0, 2: 0, 3: 5, 4: 0, 5: 0 },
//   resistance: { 1: 0, 2: 0, 3: 0, 4: 5, 5: 0 },
//   yield: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 5 },
// };

function totalOutcomes(outcomeData, field) {
  let total = 0;
  for (let i = 1; i <= 5; i++) {
    total += outcomeData[field][i];
  }
  return total;
}

function makeLabel(outcomeData, field) {
  return `${_.capitalize(field)} (${totalOutcomes(outcomeData, field)})`;
}

export const outcomeColorPalette = ['rgb(255, 0, 0)', 'rgb(255, 115, 119)', 'rgb(211,211,211)', 'rgb(163, 255, 0)', 'rgb(44, 186, 0)'];

function makeData(outcomeData) {
  return {
    labels: [
      makeLabel(outcomeData, 'appearance'),
      makeLabel(outcomeData, 'flavor'),
      makeLabel(outcomeData, 'germination'),
      makeLabel(outcomeData, 'resistance'),
      makeLabel(outcomeData, 'yield'),
    ],
    datasets: [
      { label: '1',
        data: [outcomeData.appearance[1], outcomeData.flavor[1], outcomeData.germination[1], outcomeData.resistance[1], outcomeData.yield[1]],
        borderColor: outcomeColorPalette[0],
        backgroundColor: outcomeColorPalette[0],
      },
      {
        label: '2',
        data: [outcomeData.appearance[2], outcomeData.flavor[2], outcomeData.germination[2], outcomeData.resistance[2], outcomeData.yield[2]],
        borderColor: outcomeColorPalette[1],
        backgroundColor: outcomeColorPalette[1],
      },
      {
        label: '3',
        data: [outcomeData.appearance[3], outcomeData.flavor[3], outcomeData.germination[3], outcomeData.resistance[3], outcomeData.yield[3]],
        borderColor: outcomeColorPalette[2],
        backgroundColor: outcomeColorPalette[2],
      },
      {
        label: '4',
        data: [outcomeData.appearance[4], outcomeData.flavor[4], outcomeData.germination[4], outcomeData.resistance[4], outcomeData.yield[4]],
        borderColor: outcomeColorPalette[3],
        backgroundColor: outcomeColorPalette[3],
      },
      {
        label: '5',
        data: [outcomeData.appearance[5], outcomeData.flavor[5], outcomeData.germination[5], outcomeData.resistance[5], outcomeData.yield[5]],
        borderColor: outcomeColorPalette[4],
        backgroundColor: outcomeColorPalette[4],
      },
    ],
  };
}

export function OutcomeChart({ outcomeData }) {
  return <Bar options={options} data={makeData(outcomeData)} />;
}

OutcomeChart.propTypes = {
  outcomeData: PropTypes.object,
};
