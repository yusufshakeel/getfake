import { HEX_CHARACTERS_LOWER_CASE, MD_HASH_LENGTH } from '../../constants';
import randomString from '../../helpers/random-string';

function any(): string {
  return randomString(HEX_CHARACTERS_LOWER_CASE, MD_HASH_LENGTH);
}

function md2(): string {
  return any();
}

function md4(): string {
  return any();
}

function md5(): string {
  return any();
}

export default { any, md2, md4, md5 };