import randomString from '../../helpers/random-string';
import randomInteger from '../../helpers/random-integer';
import { DEFAULT_NUMBER_OF_DIGITS_IN_PHONE, NUMERIC_DIGITS } from '../../constants';

function any(numberOfDigits = DEFAULT_NUMBER_OF_DIGITS_IN_PHONE): string {
  return randomString(NUMERIC_DIGITS, numberOfDigits);
}

/**
 * This function will return phone number based on the format.
 *
 * The character x will be replaced by digit.
 *
 * Example: '+91 11xxx xxxxx' will return number like '+91 11000 00000'
 *
 * @param {string} format
 * @return {string}
 */
function formatted(format: string): string {
  const phoneNumberCharacters: string[] = [];
  format.split('').forEach(character => {
    if (character !== 'x' && character !== 'X') {
      phoneNumberCharacters.push(character);
    } else {
      phoneNumberCharacters.push(String(randomInteger(0, 9)));
    }
  });
  return phoneNumberCharacters.join('');
}

export default { any, formatted };