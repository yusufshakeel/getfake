'use strict';

const randString = require('../../../helpers/random-string');
const randInt = require('../../../helpers/random-integer');
const { NUMERIC_DIGITS } = require('../../../constants');

function ssn() {
  /**
   * @param {{formatted: boolean}} option Default: formatted=true
   */
  const any = option => {
    const formatted = option?.formatted ?? true;
    const areaNumber = randInt(1, 772).toString().padStart(3, 0);
    return formatted
      ? `${areaNumber}-${randString(NUMERIC_DIGITS, 2)}-${randString(NUMERIC_DIGITS, 4)}`
      : `${areaNumber}${randString(NUMERIC_DIGITS, 2)}${randString(NUMERIC_DIGITS, 4)}`;
  };

  const last4 = () => randString(NUMERIC_DIGITS, 4);

  return { any, last4 };
}

module.exports = { ssn };
