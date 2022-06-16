'use strict';

const randInt = require('../../helpers/random-integer');
const creditCard = require('../../constants/cards/credit-card');
const {
  randomPrefixAndCardLengthForIssuingNetwork,
  randomCardNumberWithoutChecksum,
  randomCardNumberWithChecksum
} = require('./random-card-number');

function any() {
  const { issuingNetwork: allIssuingNetwork } = creditCard;
  const randomIssuingNetwork = allIssuingNetwork[randInt(0, allIssuingNetwork.length - 1)];
  const { prefix, cardLength } = randomPrefixAndCardLengthForIssuingNetwork(randomIssuingNetwork);
  return randomCardNumberWithChecksum(randomCardNumberWithoutChecksum(prefix, cardLength));
}

function visa() {
  const any = () => {
    const { prefix, cardLength } = randomPrefixAndCardLengthForIssuingNetwork('VISA');
    return randomCardNumberWithChecksum(randomCardNumberWithoutChecksum(prefix, cardLength));
  };

  return { any };
}

module.exports = { any, visa: visa() };