'use strict';

const randInt = require('../../helpers/random-integer');
const creditCard = require('../../constants/cards/credit-card');
const {
  randomPrefixAndCardLengthForIssuingNetwork,
  randomCardNumberWithoutChecksum,
  randomCardNumberWithChecksum
} = require('./random-card-number');

const issuingNetworkSpecificCardNumber = network => {
  const { prefix, cardLength } = randomPrefixAndCardLengthForIssuingNetwork(network);
  return randomCardNumberWithChecksum(randomCardNumberWithoutChecksum(prefix, cardLength));
};

function any() {
  const { issuingNetwork: allIssuingNetwork } = creditCard;
  const randomIssuingNetwork = allIssuingNetwork[randInt(0, allIssuingNetwork.length - 1)];
  const { prefix, cardLength } = randomPrefixAndCardLengthForIssuingNetwork(randomIssuingNetwork);
  return randomCardNumberWithChecksum(randomCardNumberWithoutChecksum(prefix, cardLength));
}

function amex() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('AMEX');
  };

  return { any };
}

function visa() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('VISA');
  };

  return { any };
}

function mastercard() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('MASTERCARD');
  };

  return { any };
}

module.exports = { any, amex: amex(), visa: visa(), mastercard: mastercard() };
