export function toTime(number) {
  return `${String(Math.floor(number / 60)).padStart(2, '0')}:${String(
    number % 60
  ).padStart(2, '0')}`;
}
