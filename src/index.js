function isTeensSpan(span) {
  return span > 10 && span < 20;
}

function getHundred(number, digits) {
  const hundrendsCount = Math.floor(number / 100);
  return hundrendsCount ? `${digits[hundrendsCount]} hundred ` : '';
}

function getDecade(number, teens, decades) {
  const decadesAndDigitsCount = Math.floor(number % 100);
  if (isTeensSpan(decadesAndDigitsCount)) return `${teens[decadesAndDigitsCount % 10]}`;
  return (decadesAndDigitsCount < 10) ? '' : `${decades[Math.floor(decadesAndDigitsCount / 10)]} `;
}

function getDigit(number, digits) {
  const digitsCount = Math.floor(number % 10);
  if (isTeensSpan(number % 100)) return '';
  return (digitsCount < 10) ? `${digits[digitsCount % 10]}` : '';
}

module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const decades = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return `${getHundred(number, digits)}${getDecade(number, teens, decades)}${getDigit(number, digits)}`.trim();
};
