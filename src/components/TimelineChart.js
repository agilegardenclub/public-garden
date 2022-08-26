import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { weekToString } from '../datamodel/WeekOfYear';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const barColor = {
  startDate: 'rgb(44, 186, 0)',
  transplantDate: 'rgb(252, 136, 3)',
  firstHarvestDate: 'rgb(3, 119, 252)',
  endDate: 'rgb(252, 3, 232)',
};

function getToolTipLabel(tooltipItem) {
  const type = tooltipItem.label;
  const weekString = weekToString(parseInt(type, 10));
  const level = tooltipItem.dataset.label;
  const value = tooltipItem.formattedValue;
  return [`${value} ${type} ${level} `, weekString];
}

export const options = {
  responsive: true,
  plugins: { tooltip: { callbacks: { label: getToolTipLabel } }, legend: { display: true }, title: { display: true, text: 'Chart' } },
  scales: { x: { display: true }, y: { display: false } },
};

const sampleTimelineData = {
  startDate: { 12: 4, 13: 5, 14: 1 },
  transplantDate: { 16: 2, 17: 4, 18: 5 },
  firstHarvestDate: { 36: 2, 38: 4, 39: 5 },
  endDate: { 38: 2, 39: 4, 42: 5, 43: 5 },
};

// Cute trick for initializing array with [1, 2, 3, ... 52]:
// https://stackoverflow.com/a/33352604
const labels = Array.from({ length: 52 }, (_, i) => i + 1);

// TODO: OFF BY ONE ERROR!
function makeDataSet(timelineData) {
  const dataSet = new Array(52).fill(0);
  // eslint-disable-next-line guard-for-in
  for (const field in timelineData) {
    dataSet[field] = timelineData[field];
  }
  return dataSet;
}

function makeData(timelineData) {
  return {
    labels,
    datasets: [
      { label: 'Start',
        data: makeDataSet(timelineData.startDate),
        borderColor: barColor.startDate,
        backgroundColor: barColor.startDate,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
      { label: 'Transplant',
        data: makeDataSet(timelineData.transplantDate),
        borderColor: barColor.transplantDate,
        backgroundColor: barColor.transplantDate,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
      { label: 'First Harvest',
        data: makeDataSet(timelineData.firstHarvestDate),
        borderColor: barColor.firstHarvestDate,
        backgroundColor: barColor.firstHarvestDate,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
      { label: 'End',
        data: makeDataSet(timelineData.endDate),
        borderColor: barColor.endDate,
        backgroundColor: barColor.endDate,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };
}

export function TimelineChart() {
  return <Bar options={options} data={makeData(sampleTimelineData)} />;
}

TimelineChart.propTypes = {
  timelineData: PropTypes.object,
};
