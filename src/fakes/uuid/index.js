'use strict';

const { HEX_CHARACTERS_LOWER_CASE } = require('../../constants');
const randomString = require('../../helpers/random-string');

function any() {
  const randString = length => randomString(HEX_CHARACTERS_LOWER_CASE, length);
  return `${randString(8)}-${randString(4)}-${randString(4)}-${randString(4)}-${randString(12)}`;
}

function v4() {
  return any();
}

function v5() {
  return any();
}

module.exports = { any, v4, v5 };
