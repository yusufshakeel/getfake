import randomString from '../../helpers/random-string';
import randomInteger from '../../helpers/random-integer';
import randomFloat from '../../helpers/random-float';
import {
  DEFAULT_NUMBER_OF_DIGITS_IN_NUMBER,
  DEFAULT_NUMBER_OF_DECIMAL_PLACE,
  DEFAULT_MIN_NUMBER_INTEGER,
  DEFAULT_MAX_NUMBER_INTEGER,
  NUMERIC_DIGITS
} from '../../constants';

function integer(min = DEFAULT_MIN_NUMBER_INTEGER, max = DEFAULT_MAX_NUMBER_INTEGER): number {
  return randomInteger(min, max);
}

function unsignedInteger(max = DEFAULT_MAX_NUMBER_INTEGER): number {
  return randomInteger(0, max);
}

function float(
  min = DEFAULT_MIN_NUMBER_INTEGER,
  max = DEFAULT_MAX_NUMBER_INTEGER,
  decimal = DEFAULT_NUMBER_OF_DECIMAL_PLACE
): number {
  return randomFloat(min, max, decimal);
}

function unsignedFloat(
  max = DEFAULT_MAX_NUMBER_INTEGER,
  decimal = DEFAULT_NUMBER_OF_DECIMAL_PLACE
): number {
  return randomFloat(0, max, decimal);
}

function asString(
  totalNumberOfDigits = DEFAULT_NUMBER_OF_DIGITS_IN_NUMBER,
  numberOfDecimalDigits = 0
): string {
  const numberOfDigitsBeforeDecimalPlace = totalNumberOfDigits - numberOfDecimalDigits;
  const numberOfDigitsBeforeDecimalPoint = randomString(
    NUMERIC_DIGITS,
    numberOfDigitsBeforeDecimalPlace
  );
  const numberOfDigitsAfterDecimalPoint =
    numberOfDecimalDigits > 0 ? `.${randomString(NUMERIC_DIGITS, numberOfDecimalDigits)}` : '';
  return `${numberOfDigitsBeforeDecimalPoint}${numberOfDigitsAfterDecimalPoint}`;
}

export default { integer, unsignedInteger, float, unsignedFloat, asString };