import randString from '../../../helpers/random-string';
import randInt from '../../../helpers/random-integer';
import { NUMERIC_DIGITS } from '../../../constants';

type optionSSNType = {formatted: boolean};

function ssn() {
  /**
   * @param {{formatted: boolean}} option Default: formatted=true
   */
  const any = (option: optionSSNType = { formatted: true }): string => {
    const formatted = option?.formatted ?? true;
    const areaNumber = randInt(1, 772).toString().padStart(3, '0');
    return formatted
      ? `${areaNumber}-${randString(NUMERIC_DIGITS, 2)}-${randString(NUMERIC_DIGITS, 4)}`
      : `${areaNumber}${randString(NUMERIC_DIGITS, 2)}${randString(NUMERIC_DIGITS, 4)}`;
  };

  const last4 = (): string => randString(NUMERIC_DIGITS, 4);

  return { any, last4 };
}

export { ssn };