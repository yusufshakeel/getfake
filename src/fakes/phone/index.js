'use strict';

const randomString = require('../../helpers/random-string');
const randomInteger = require('../../helpers/random-integer');
const { DEFAULT_NUMBER_OF_DIGITS_IN_PHONE, NUMERIC_DIGITS } = require('../../constants');

function any(numberOfDigits = DEFAULT_NUMBER_OF_DIGITS_IN_PHONE) {
  return randomString(NUMERIC_DIGITS, numberOfDigits);
}

/**
 * This function will return phone number based on the format.
 *
 * The character x will be replaced by digit.
 *
 * Example: '+91 11xxx xxxxx' will return number like '+91 11000 00000'
 *
 * @param {string} format
 * @return {string}
 */
function formatted(format) {
  const phoneNumberCharacters = [];
  format.split('').forEach(character => {
    if (character !== 'x' && character !== 'X') {
      phoneNumberCharacters.push(character);
    } else {
      phoneNumberCharacters.push(randomInteger(0, 9));
    }
  });
  return phoneNumberCharacters.join('');
}

module.exports = { any, formatted };
