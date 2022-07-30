import { NUMERIC_DIGITS } from '../../../constants';
import randString from '../../../helpers/random-string';

type RUTOptionType = {numberOfDigits: number, formatted: boolean};

function getFormattedRutNumber(rutNumberWithoutCheckDigit: string, checkDigit: string) {
  return (
    rutNumberWithoutCheckDigit
      .split('')
      .reverse()
      .reduce((reversedRutNumber: string[], currentDigit: string, index: number) => {
        if (index > 0 && index % 3 === 0) {
          return [...reversedRutNumber, '.', currentDigit];
        }
        return [...reversedRutNumber, currentDigit];
      }, [])
      .reverse()
      .join('') +
    '-' +
    checkDigit
  );
}

function getCheckDigit(sumOfDigits: number): string {
  const remainder = 11 - (sumOfDigits % 11);
  if (remainder === 11) return '0';
  else if (remainder === 10) return 'K';
  return `${remainder}`;
}

function getSumOfDigits(rutNumberWithoutCheckDigit: string): number {
  return rutNumberWithoutCheckDigit
    .split('')
    .reverse()
    .reduce((sum, currentDigit, index) => {
      const digit = +currentDigit;
      const product = digit * (2 + (index % 6));
      return sum + product;
    }, 0);
}

function rut() {
  /**
   * @param {{numberOfDigits: number, formatted: boolean}} option Default numberOfDigits=9 formatted=true
   * @return {string}
   */
  const any = (option: RUTOptionType = { numberOfDigits: 9, formatted: true }): string => {
    const numberOfDigits = option?.numberOfDigits ?? 9;
    const formatted = option?.formatted ?? true;
    const rutNumberWithoutCheckDigit = randString(NUMERIC_DIGITS, numberOfDigits - 1);
    const sumOfDigits = getSumOfDigits(rutNumberWithoutCheckDigit);
    const checkDigit = getCheckDigit(sumOfDigits);
    return formatted
      ? getFormattedRutNumber(rutNumberWithoutCheckDigit, checkDigit)
      : `${rutNumberWithoutCheckDigit}${checkDigit}`;
  };

  return { any };
}

export { rut, getFormattedRutNumber, getCheckDigit, getSumOfDigits };