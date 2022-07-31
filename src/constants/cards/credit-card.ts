import { CreditCardType } from '../../ts-def/credit-card/credit-card-type';

const AMEX: CreditCardType = {
  name: 'AMEX',
  issuingNetwork: 'AMEX',
  prefix: ['34', '37'],
  cardLength: 15
};
const DINERS_CLUB: CreditCardType = {
  name: 'DINERS_CLUB',
  issuingNetwork: 'DINERS CLUB',
  prefix: ['300', '301', '302', '303', '36', '38'],
  cardLength: 16
};
const DISCOVER: CreditCardType = {
  name: 'DISCOVER',
  issuingNetwork: 'DISCOVER',
  prefix: ['6011'],
  cardLength: 16
};
const ENROUTE: CreditCardType = {
  name: 'ENROUTE',
  issuingNetwork: 'ENROUTE',
  prefix: ['2014', '2149'],
  cardLength: 16
};
const JCB: CreditCardType = {
  name: 'JCB',
  issuingNetwork: 'JCB',
  prefix: ['35'],
  cardLength: 16
};
const MASTERCARD: CreditCardType = {
  name: 'MASTERCARD',
  issuingNetwork: 'MASTERCARD',
  prefix: ['51', '52', '53', '54', '55'],
  cardLength: 16
};
const VISA: CreditCardType = {
  name: 'VISA',
  issuingNetwork: 'VISA',
  prefix: ['4', '4485', '4532', '4539', '4556', '4716', '4916', '4929', '40240071'],
  cardLength: 16
};
const VOYAGER: CreditCardType = {
  name: 'VOYAGER',
  issuingNetwork: 'VOYAGER',
  prefix: ['8699'],
  cardLength: 16
};

const cardConfig = {
  AMEX,
  DINERS_CLUB,
  DISCOVER,
  ENROUTE,
  JCB,
  MASTERCARD,
  VISA,
  VOYAGER
};

const issuingNetwork: string[] = Object.keys(cardConfig);

export type keyOfCardConfigType = keyof typeof cardConfig;

export default { cardConfig, issuingNetwork };