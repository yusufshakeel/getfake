'use strict';

const { HEX_CHARACTERS_LOWER_CASE, MD_HASH_LENGTH } = require('../../constants');
const randomString = require('../../helpers/random-string');

function any() {
  return randomString(HEX_CHARACTERS_LOWER_CASE, MD_HASH_LENGTH);
}

function md2() {
  return any();
}

function md4() {
  return any();
}

function md5() {
  return any();
}

module.exports = { any, md2, md4, md5 };
