export function hasObservation(currWeek, plantingData) {
  const observationWeeks = plantingData.observations.map(observation => observation.weekOfYear);
  return observationWeeks.includes(currWeek);
}

export function getObservations(currWeek, plantingData) {
  return plantingData.observations.filter(observation => observation.weekOfYear === currWeek);
}
