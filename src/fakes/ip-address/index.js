'use strict';

const randInt = require('../../helpers/random-integer');
const localhost = require('./localhost');
const privateNetwork10 = require('./private-network/10');
const privateNetwork192 = require('./private-network/192');

function any() {
  return `${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}`;
}

module.exports = {
  any,
  localhost: localhost(),
  privateNetwork10: privateNetwork10(),
  privateNetwork192: privateNetwork192()
};
