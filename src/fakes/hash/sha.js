'use strict';

const {
  HEX_CHARACTERS_LOWER_CASE,
  SHA1_HASH_LENGTH,
  SHA224_HASH_LENGTH,
  SHA256_HASH_LENGTH,
  SHA384_HASH_LENGTH,
  SHA512_HASH_LENGTH
} = require('../../constants');

const randomString = require('../../helpers/random-string');

function sha1() {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA1_HASH_LENGTH);
}

function sha224() {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA224_HASH_LENGTH);
}

function sha256() {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA256_HASH_LENGTH);
}

function sha384() {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA384_HASH_LENGTH);
}

function sha512() {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA512_HASH_LENGTH);
}

module.exports = { sha1, sha224, sha256, sha384, sha512 };
