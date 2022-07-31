import {
  randomPrefixAndCardLengthForIssuingNetwork,
  randomCardNumberWithoutChecksum,
  randomCardNumberWithChecksum
} from './random-card-number';
import creditCard from '../../constants/cards/credit-card';
import randInt from '../../helpers/random-integer';

const issuingNetworkSpecificCardNumber = (network: string): string => {
  const { prefix, cardLength } = randomPrefixAndCardLengthForIssuingNetwork(network);
  return randomCardNumberWithChecksum(randomCardNumberWithoutChecksum(prefix, cardLength));
};

function any(): string {
  const { issuingNetwork: allIssuingNetwork } = creditCard;
  const randomIssuingNetwork: string = allIssuingNetwork[randInt(0, allIssuingNetwork.length - 1)];
  const { prefix, cardLength } = randomPrefixAndCardLengthForIssuingNetwork(randomIssuingNetwork);
  return randomCardNumberWithChecksum(randomCardNumberWithoutChecksum(prefix, cardLength));
}

function amex() {
  const any = (): string => {
    return issuingNetworkSpecificCardNumber(creditCard.cardConfig.AMEX.name);
  };

  return { any };
}

function dinersClub() {
  const any = (): string => {
    return issuingNetworkSpecificCardNumber(creditCard.cardConfig.DINERS_CLUB.name);
  };

  return { any };
}

function discover() {
  const any = (): string => {
    return issuingNetworkSpecificCardNumber(creditCard.cardConfig.DISCOVER.name);
  };

  return { any };
}

function enRoute() {
  const any = (): string => {
    return issuingNetworkSpecificCardNumber(creditCard.cardConfig.ENROUTE.name);
  };

  return { any };
}

function jcb() {
  const any = (): string => {
    return issuingNetworkSpecificCardNumber(creditCard.cardConfig.JCB.name);
  };

  return { any };
}

function mastercard() {
  const any = (): string => {
    return issuingNetworkSpecificCardNumber(creditCard.cardConfig.MASTERCARD.name);
  };

  return { any };
}

function visa() {
  const any = (): string => {
    return issuingNetworkSpecificCardNumber(creditCard.cardConfig.VISA.name);
  };

  return { any };
}

function voyager() {
  const any = (): string => {
    return issuingNetworkSpecificCardNumber(creditCard.cardConfig.VOYAGER.name);
  };

  return { any };
}

export default {
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