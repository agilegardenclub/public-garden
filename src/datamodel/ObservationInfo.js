export function getObservations(currWeek, plantingData) {
  return plantingData.observations.filter(observation => observation.weekOfYear === currWeek);
}

export function getNotifications(currWeek, plantingData) {
  return plantingData.notifications.filter(notification => notification.weekOfYear === currWeek);
}
