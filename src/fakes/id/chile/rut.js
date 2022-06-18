'use strict';

const randString = require('../../../helpers/random-string');
const { NUMERIC_DIGITS } = require('../../../constants');

function getFormattedRutNumber(rutNumberWithoutCheckDigit, checkDigit) {
  return (
    rutNumberWithoutCheckDigit
      .split('')
      .reverse()
      .reduce((reversedRutNumber, currentDigit, index) => {
        if (index > 0 && index % 3 === 0) {
          return [...reversedRutNumber, '.', currentDigit];
        }
        return [...reversedRutNumber, currentDigit];
      }, [])
      .reverse()
      .join('') +
    '-' +
    checkDigit
  );
}

function getCheckDigit(sumOfDigits) {
  const remainder = 11 - (sumOfDigits % 11);
  if (remainder === 11) return '0';
  else if (remainder === 10) return 'K';
  return `${remainder}`;
}

function getSumOfDigits(rutNumberWithoutCheckDigit) {
  return rutNumberWithoutCheckDigit
    .split('')
    .reverse()
    .reduce((sum, currentDigit, index) => {
      const digit = +currentDigit;
      const product = digit * (2 + (index % 6));
      return sum + product;
    }, 0);
}

function rut() {
  /**
   * @param {{numberOfDigits: number, formatted: boolean}} option Default numberOfDigits=8 formatted=true
   * @return {string}
   */
  const any = option => {
    const numberOfDigits = option?.numberOfDigits ?? 9;
    const formatted = option?.formatted ?? true;
    const rutNumberWithoutCheckDigit = randString(NUMERIC_DIGITS, numberOfDigits - 1);
    const sumOfDigits = getSumOfDigits(rutNumberWithoutCheckDigit);
    const checkDigit = getCheckDigit(sumOfDigits);
    return formatted
      ? getFormattedRutNumber(rutNumberWithoutCheckDigit, checkDigit)
      : `${rutNumberWithoutCheckDigit}${checkDigit}`;
  };

  return { any };
}

module.exports = { rut, getFormattedRutNumber, getCheckDigit, getSumOfDigits };
