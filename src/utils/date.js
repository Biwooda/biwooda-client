export function isBeforeToday(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return today > date;
}

export function getDaysDifference(start, end) {
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
}
