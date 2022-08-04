function getObservationYear(observation) {
  const date = new Date(observation.observationDate);
  if (!date) {
    console.log(`Observation ${observation.observationID} has invalid date: ${observation.observationDate}`);
  }
  return (date) ? date.getFullYear() : 1900;
}

/** Just like above function, renamed to specify Notification. */
function getNotificationYear(notification) {
  const date = new Date(notification.observationDate);
  if (!date) {
    console.log(`Notification ${notification.observationID} has invalid date: ${notification.observationDate}`);
  }
  return (date) ? date.getFullYear() : 1900;
}

export function getObservations(currWeek, plantingData) {
  return plantingData.observations.filter(observation => (observation.weekOfYear === currWeek) && (getObservationYear(observation) === plantingData.year));
}

export function getNotifications(currWeek, plantingData) {
  return plantingData.notifications.filter(notification => (notification.weekOfYear === currWeek) && (getNotificationYear(notification) === plantingData.year));
}
