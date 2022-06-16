'use strict';

const randString = require('../../helpers/random-string');
const randInt = require('../../helpers/random-integer');
const { NUMERIC_DIGITS } = require('../../constants');
const creditCard = require('../../constants/cards/credit-card');

function randomPrefixAndCardLengthForIssuingNetwork(network) {
  const { prefix, cardLength } = creditCard.cardConfig[network];
  return { prefix: prefix[randInt(0, prefix.length - 1)], cardLength };
}

function randomCardNumberWithoutChecksum(prefix, cardLength) {
  const requiredLength = cardLength - 1 - prefix.length;
  const randomNumber = randString(NUMERIC_DIGITS, requiredLength);
  return `${prefix}${randomNumber}`;
}

function randomCardNumberWithChecksum(cardNumberWithoutChecksum) {
  const sum = cardNumberWithoutChecksum
    .split('')
    .reverse()
    .reduce((sum, curr, index) => {
      const digit = +curr;
      if (index % 2 === 0) {
        const doubled = digit * 2;
        return sum + (doubled > 9 ? doubled - 9 : doubled);
      }
      return sum + digit;
    }, 0);
  const checksum = (sum * 9) % 10;
  return `${cardNumberWithoutChecksum}${checksum}`;
}

module.exports = {
  randomPrefixAndCardLengthForIssuingNetwork,
  randomCardNumberWithoutChecksum,
  randomCardNumberWithChecksum
};
