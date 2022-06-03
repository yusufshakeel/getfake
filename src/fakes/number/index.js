'use strict';

const randomString = require('../../helpers/random-string');
const randomInteger = require('../../helpers/random-integer');
const randomFloat = require('../../helpers/random-float');
const {
  DEFAULT_NUMBER_OF_DIGITS_IN_NUMBER,
  DEFAULT_NUMBER_OF_DECIMAL_PLACE,
  DEFAULT_MIN_NUMBER_INTEGER,
  DEFAULT_MAX_NUMBER_INTEGER,
  NUMERIC_DIGITS
} = require('../../constants');

function integer() {
  return randomInteger(DEFAULT_MIN_NUMBER_INTEGER, DEFAULT_MAX_NUMBER_INTEGER);
}

function unsignedInteger() {
  return randomInteger(0, DEFAULT_MAX_NUMBER_INTEGER);
}

function float(decimal = DEFAULT_NUMBER_OF_DECIMAL_PLACE) {
  return randomFloat(DEFAULT_MIN_NUMBER_INTEGER, DEFAULT_MAX_NUMBER_INTEGER, decimal);
}

function unsignedFloat(decimal = DEFAULT_NUMBER_OF_DECIMAL_PLACE) {
  return randomFloat(0, DEFAULT_MAX_NUMBER_INTEGER, decimal);
}

function asString(
  totalNumberOfDigits = DEFAULT_NUMBER_OF_DIGITS_IN_NUMBER,
  numberOfDecimalDigits = 0
) {
  const numberOfDigitsBeforeDecimalPlace = totalNumberOfDigits - numberOfDecimalDigits;
  const numberOfDigitsBeforeDecimalPoint = randomString(
    NUMERIC_DIGITS,
    numberOfDigitsBeforeDecimalPlace
  );
  const numberOfDigitsAfterDecimalPoint =
    numberOfDecimalDigits > 0 ? `.${randomString(NUMERIC_DIGITS, numberOfDecimalDigits)}` : '';
  return `${numberOfDigitsBeforeDecimalPoint}${numberOfDigitsAfterDecimalPoint}`;
}

module.exports = { integer, unsignedInteger, float, unsignedFloat, asString };
