'use strict';

const randInt = require('../../helpers/random-integer');
const localhost = require('./localhost');

function any() {
  return `${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}`;
}

module.exports = {
  any,
  localhost: localhost()
};
