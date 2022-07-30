import {
  HEX_CHARACTERS_LOWER_CASE,
  SHA1_HASH_LENGTH,
  SHA224_HASH_LENGTH,
  SHA256_HASH_LENGTH,
  SHA384_HASH_LENGTH,
  SHA512_HASH_LENGTH
} from '../../constants';

import randomString from '../../helpers/random-string';

function sha1(): string {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA1_HASH_LENGTH);
}

function sha224(): string {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA224_HASH_LENGTH);
}

function sha256(): string {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA256_HASH_LENGTH);
}

function sha384(): string {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA384_HASH_LENGTH);
}

function sha512(): string {
  return randomString(HEX_CHARACTERS_LOWER_CASE, SHA512_HASH_LENGTH);
}

export default { sha1, sha224, sha256, sha384, sha512 };