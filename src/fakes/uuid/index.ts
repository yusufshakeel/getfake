import { HEX_CHARACTERS_LOWER_CASE } from '../../constants';
import randomString from '../../helpers/random-string';

function any(): string {
  const randString = (length: number): string => randomString(HEX_CHARACTERS_LOWER_CASE, length);
  return `${randString(8)}-${randString(4)}-${randString(4)}-${randString(4)}-${randString(12)}`;
}

function v4(): string {
  return any();
}

function v5(): string {
  return any();
}

export default { any, v4, v5 };