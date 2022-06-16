'use strict';

const cardConfig = {
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
