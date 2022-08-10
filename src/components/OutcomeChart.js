import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: 'y',
  elements: { bar: { borderWidth: 2 } },
  responsive: true,
  plugins: { legend: { display: false }, title: { display: true, text: 'Outcomes' } },
  scales: { x: { stacked: true }, y: { stacked: true } },
};

const sampleOutcomeData = [
  { type: 'Germination', values: [3, 3, 3, 3, 3] },
  { type: 'Appearance', values: [6, 0, 1, 1, 7] },
  { type: 'Flavor', values: [0, 0, 0, 6, 9] },
  { type: 'Resistance', values: [5, 7, 3, 0, 0] },
  { type: 'Yield', values: [0, 7, 8, 0, 0] },
];

export const outcomeColorPalette = ['rgb(255, 0, 0)', 'rgb(255, 167, 0)', 'rgb(255, 244, 0)', 'rgb(163, 255, 0)', 'rgb(44, 186, 0)'];

function makeData(outcomeData) {
  return {
    labels: outcomeData.map(outcome => outcome.type),
    datasets: [
      {
        label: 'Very poor',
        data: outcomeData.map(outcome => outcome.values[0]),
        borderColor: outcomeColorPalette[0],
        backgroundColor: outcomeColorPalette[0],
      },
      {
        label: 'Poor',
        data: outcomeData.map(outcome => outcome.values[1]),
        borderColor: outcomeColorPalette[1],
        backgroundColor: outcomeColorPalette[1],
      },
      {
        label: 'Middle',
        data: outcomeData.map(outcome => outcome.values[2]),
        borderColor: outcomeColorPalette[2],
        backgroundColor: outcomeColorPalette[2],
      },
      {
        label: 'Good',
        data: outcomeData.map(outcome => outcome.values[3]),
        borderColor: outcomeColorPalette[3],
        backgroundColor: outcomeColorPalette[3],
      },
      {
        label: 'Very good',
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
