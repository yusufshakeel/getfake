'use strict';

const randInt = require('../../../helpers/random-integer');

function privateNetwork10() {
  const any = () => {
    return `10.${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}`;
  };

  return { any };
}

module.exports = privateNetwork10;
