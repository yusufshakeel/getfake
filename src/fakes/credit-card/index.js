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

function dinersClub() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('DINERS_CLUB');
  };

  return { any };
}

function discover() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('DISCOVER');
  };

  return { any };
}

function enRoute() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('ENROUTE');
  };

  return { any };
}

function jcb() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('JCB');
  };

  return { any };
}

function mastercard() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('MASTERCARD');
  };

  return { any };
}

function visa() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('VISA');
  };

  return { any };
}

function voyager() {
  const any = () => {
    return issuingNetworkSpecificCardNumber('VISA');
  };

  return { any };
}

module.exports = {
  any,
  amex: amex(),
  dinersClub: dinersClub(),
  discover: discover(),
  enRoute: enRoute(),
  jcb: jcb(),
  mastercard: mastercard(),
  visa: visa(),
  voyager: voyager()
};
