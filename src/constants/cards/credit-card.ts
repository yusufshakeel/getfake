import { CreditCardType } from '../../ts-def/credit-card/credit-card-type';

const AMEX: CreditCardType = {
  issuingNetwork: 'AMEX',
  prefix: ['34', '37'],
  cardLength: 15
};
const DINERS_CLUB: CreditCardType = {
  issuingNetwork: 'DINERS CLUB',
  prefix: ['300', '301', '302', '303', '36', '38'],
  cardLength: 16
};
const DISCOVER: CreditCardType = {
  issuingNetwork: 'DISCOVER',
  prefix: ['6011'],
  cardLength: 16
};
const ENROUTE: CreditCardType = {
  issuingNetwork: 'ENROUTE',
  prefix: ['2014', '2149'],
  cardLength: 16
};
const JCB: CreditCardType = {
  issuingNetwork: 'JCB',
  prefix: ['35'],
  cardLength: 16
};
const MASTERCARD: CreditCardType = {
  issuingNetwork: 'MASTERCARD',
  prefix: ['51', '52', '53', '54', '55'],
  cardLength: 16
};
const VISA: CreditCardType = {
  issuingNetwork: 'VISA',
  prefix: ['4', '4485', '4532', '4539', '4556', '4716', '4916', '4929', '40240071'],
  cardLength: 16
};
const VOYAGER: CreditCardType = {
  issuingNetwork: 'VOYAGER',
  prefix: ['8699'],
  cardLength: 16
};

export const issuingNetwork: string[] = [
  'AMEX',
  'DINERS_CLUB',
  'DISCOVER',
  'ENROUTE',
  'JCB',
  'MASTERCARD',
  'VISA',
  'VOYAGER'
];

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

export type keyOfCardConfigType = keyof typeof cardConfig;

export default { cardConfig };