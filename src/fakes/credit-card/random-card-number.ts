import randString from '../../helpers/random-string';
import randInt from '../../helpers/random-integer';
import creditCard, { keyOfCardConfigType } from '../../constants/cards/credit-card';
import { NUMERIC_DIGITS } from '../../constants';

function randomPrefixAndCardLengthForIssuingNetwork(
  network: string
): { prefix: string, cardLength: number } {
  const { prefix, cardLength } = creditCard.cardConfig[network as keyOfCardConfigType];
  return { prefix: prefix[randInt(0, prefix.length - 1)], cardLength };
}

function randomCardNumberWithoutChecksum(prefix: string, cardLength: number): string {
  const requiredLength: number = cardLength - 1 - prefix.length;
  const randomNumber: string = randString(NUMERIC_DIGITS, requiredLength);
  return `${prefix}${randomNumber}`;
}

function randomCardNumberWithChecksum(cardNumberWithoutChecksum: string): string {
  const sum: number = cardNumberWithoutChecksum
    .split('')
    .reverse()
    .reduce((sum: number, curr: string, index: number): number => {
      const digit = +curr;
      if (index % 2 === 0) {
        const doubled = digit * 2;
        return sum + (doubled > 9 ? doubled - 9 : doubled);
      }
      return sum + digit;
    }, 0);
  const checksum: number = (sum * 9) % 10;
  return `${cardNumberWithoutChecksum}${checksum}`;
}

export {
  randomPrefixAndCardLengthForIssuingNetwork,
  randomCardNumberWithoutChecksum,
  randomCardNumberWithChecksum
};