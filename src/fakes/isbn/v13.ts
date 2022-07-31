import randString from '../../helpers/random-string';
import randInt from '../../helpers/random-integer';
import { NUMERIC_DIGITS } from '../../constants';

type v13OptionType = { formatted: boolean };

function formattedIsbn(isbnWithoutCheckDigit: string, checkDigit: string): string {
  return `${isbnWithoutCheckDigit.substring(0, 3)}-${isbnWithoutCheckDigit.substring(
    3,
    4
  )}-${isbnWithoutCheckDigit.substring(4, 6)}-${isbnWithoutCheckDigit.substring(
    6,
    12
  )}-${checkDigit}`;
}

function getIsbnWithoutCheckDigit(): string {
  const EAN = ['978', '979']; // European Article Number
  const selectedEAN = EAN[randInt(0, EAN.length - 1)];
  return `${selectedEAN}${randString(NUMERIC_DIGITS, 9)}`;
}

function getCheckDigit(isbnWithoutCheckDigit: string): string {
  const sum = isbnWithoutCheckDigit.split('').reduce((sum, currentDigit, index) => {
    const digit = +currentDigit;
    if (index % 2 === 0) {
      return sum + digit;
    }
    return sum + digit * 3;
  }, 0);
  const mod10Result = 10 - (sum % 10);
  return mod10Result === 10 ? '0' : `${mod10Result}`;
}

function v13() {
  /**
   * @param {{formatted: boolean}} option Default formatted=true
   * @return {string}
   */
  const any = (option: v13OptionType = { formatted: true }): string => {
    const { formatted } = option;
    const isbnWithoutCheckDigit = getIsbnWithoutCheckDigit();
    const checkDigit = getCheckDigit(isbnWithoutCheckDigit);
    return formatted
      ? formattedIsbn(isbnWithoutCheckDigit, checkDigit)
      : `${isbnWithoutCheckDigit}${checkDigit}`;
  };

  return { any };
}

export { v13, getCheckDigit, getIsbnWithoutCheckDigit, formattedIsbn };