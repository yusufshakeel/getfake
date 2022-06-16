'use strict';

const cardConfig = {
  AMEX: {
    issuingNetwork: 'AMEX',
    prefix: ['34', '37'],
    cardLength: 15
  },
  MASTERCARD: {
    issuingNetwork: 'MASTERCARD',
    prefix: ['51', '52', '53', '54', '55'],
    cardLength: 16
  },
  VISA: {
    issuingNetwork: 'VISA',
    prefix: ['4485', '4532', '4539', '4556', '4716', '4916', '4929'],
    cardLength: 16
  }
};

const issuingNetwork = Object.keys(cardConfig);

module.exports = {
  cardConfig,
  issuingNetwork
};
