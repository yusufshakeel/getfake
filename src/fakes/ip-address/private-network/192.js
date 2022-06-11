'use strict';

const randInt = require('../../../helpers/random-integer');

function privateNetwork192() {
  const _168 = {
    any: () => {
      return `192.168.${randInt(0, 255)}.${randInt(0, 255)}`;
    }
  };

  return { _168 };
}

module.exports = privateNetwork192;
