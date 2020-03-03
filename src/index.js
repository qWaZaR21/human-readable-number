module.exports = function toReadable(number) {

  if (number === 0) return 'zero';

  const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const decades = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  function isTeensSpan(span) {
    return span > 10 && span < 20;
  } 

  function getHundred() {
    let value = Math.floor(number / 100);
    return value ? `${digits[value]} hundred ` : "";
  }

  function getDecade() {
    let value = Math.floor(number % 100);
    if (isTeensSpan(value)) return `${teens[value % 10]}`;
    return (value < 10) ? "" : `${decades[Math.floor(value / 10)]} `;
  }

  function getDigit() {
    let value = Math.floor(number % 10);
    if (isTeensSpan(number % 100)) return "";
    return (value < 10) ? `${digits[value % 10]}` : "";
  }

  return `${getHundred()}${getDecade()}${getDigit()}`.trim();
};
