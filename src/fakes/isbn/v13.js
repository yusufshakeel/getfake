'use strict';

const randString = require('../../helpers/random-string');
const randInt = require('../../helpers/random-integer');
const { NUMERIC_DIGITS } = require('../../constants');

function formattedIsbn(isbnWithoutCheckDigit, checkDigit) {
  return `${isbnWithoutCheckDigit.substring(0, 3)}-${isbnWithoutCheckDigit.substring(
    3,
    4
  )}-${isbnWithoutCheckDigit.substring(4, 6)}-${isbnWithoutCheckDigit.substring(
    6,
    12
  )}-${checkDigit}`;
}

function getIsbnWithoutCheckDigit() {
  const EAN = ['978', '979']; // European Article Number
  const selectedEAN = EAN[randInt(0, EAN.length - 1)];
  return `${selectedEAN}${randString(NUMERIC_DIGITS, 9)}`;
}

function getCheckDigit(isbnWithoutCheckDigit) {
  const sum = isbnWithoutCheckDigit.split('').reduce((sum, currentDigit, index) => {
    const digit = +currentDigit;
    if (index % 2 === 0) {
      return sum + digit;
    }
    return sum + digit * 3;
  }, 0);
  const mod10Result = 10 - (sum % 10);
  return mod10Result === 10 ? '0' : `${mod10Result}`;
}

function v13() {
  /**
   * @param {{formatted: boolean}} option Default formatted=true
   * @return {string}
   */
  const any = option => {
    const formatted = option?.formatted ?? true;
    const isbnWithoutCheckDigit = getIsbnWithoutCheckDigit();
    const checkDigit = getCheckDigit(isbnWithoutCheckDigit);
    return formatted
      ? formattedIsbn(isbnWithoutCheckDigit, checkDigit)
      : `${isbnWithoutCheckDigit}${checkDigit}`;
  };

  return { any };
}

module.exports = { v13, getCheckDigit, getIsbnWithoutCheckDigit, formattedIsbn };
