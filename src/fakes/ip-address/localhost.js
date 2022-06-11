'use strict';

const randInt = require('../../helpers/random-integer');

function localhost() {
  const any = () => {
    return `127.${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}`;
  };

  return { any };
}

module.exports = localhost;
