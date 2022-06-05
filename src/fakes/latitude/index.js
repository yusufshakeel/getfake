'use strict';

const randomFloat = require('../../helpers/random-float');
const { DEFAULT_NUMBER_OF_DECIMAL_PLACE } = require('../../constants');

function any(decimalPlaces = DEFAULT_NUMBER_OF_DECIMAL_PLACE) {
  return randomFloat(-90, 90, decimalPlaces);
}

module.exports = { any };
