'use strict';

const { HEX_CHARACTERS_LOWER_CASE } = require('../../constants');
const randomString = require('../../helpers/random-string');

function any() {
  const randString = length => randomString(HEX_CHARACTERS_LOWER_CASE, length);
  return `${randString(2)}:${randString(2)}:${randString(2)}:${randString(2)}:${randString(
    2
  )}:${randString(2)}`;
}

module.exports = { any };
