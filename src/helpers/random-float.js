'use strict';

const { DEFAULT_NUMBER_OF_DECIMAL_PLACE } = require('../constants');
/**
 * This will return a float value between min and max both inclusive.
 * @param {number} min The starting float value.
 * @param {number} max The ending float value.
 * @param {number} decimals The decimal place.
 * @returns {number} Random float value between min and max both inclusive.
 */
module.exports = function randomFloat(min, max, decimals = DEFAULT_NUMBER_OF_DECIMAL_PLACE) {
  return parseFloat(
    (Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)).toFixed(decimals)
  );
};
