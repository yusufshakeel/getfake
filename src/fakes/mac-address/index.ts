import { HEX_CHARACTERS_LOWER_CASE } from '../../constants';
import randomString from '../../helpers/random-string';

function any(): string {
  const randString = (length: number): string => randomString(HEX_CHARACTERS_LOWER_CASE, length);
  return `${randString(2)}:${randString(2)}:${randString(2)}:${randString(2)}:${randString(
    2
  )}:${randString(2)}`;
}

export default { any };