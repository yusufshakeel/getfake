'use strict';

const cardConfig = {
  AMEX: {
    issuingNetwork: 'AMEX',
    prefix: ['34', '37'],
    cardLength: 15
  },
  DINERS_CLUB: {
    issuingNetwork: 'DINERS CLUB',
    prefix: ['300', '301', '302', '303', '36', '38'],
    cardLength: 16
  },
  DISCOVER: {
    issuingNetwork: 'DISCOVER',
    prefix: ['6011'],
    cardLength: 16
  },
  ENROUTE: {
    issuingNetwork: 'ENROUTE',
    prefix: ['2014', '2149'],
    cardLength: 16
  },
  JCB: {
    issuingNetwork: 'JCB',
    prefix: ['35'],
    cardLength: 16
  },
  MASTERCARD: {
    issuingNetwork: 'MASTERCARD',
    prefix: ['51', '52', '53', '54', '55'],
    cardLength: 16
  },
  VISA: {
    issuingNetwork: 'VISA',
    prefix: ['4', '4485', '4532', '4539', '4556', '4716', '4916', '4929', '40240071'],
    cardLength: 16
  }
};

const issuingNetwork = Object.keys(cardConfig);

module.exports = {
  cardConfig,
  issuingNetwork
};
