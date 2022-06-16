'use strict';

const {
  randomPrefixAndCardLengthForIssuingNetwork,
  randomCardNumberWithoutChecksum,
  randomCardNumberWithChecksum
} = require('../../../../src/fakes/credit-card/random-card-number');
const creditCard = require('../../../../src/constants/cards/credit-card');

describe('Testing random card number', () => {
  describe('Testing randomPrefixAndCardLengthForIssuingNetwork', () => {
    describe('Testing mastercard', () => {
      test('Should be able to return random card prefix and card length as per issuing network', () => {
        const result = randomPrefixAndCardLengthForIssuingNetwork('MASTERCARD');
        expect(result.cardLength).toStrictEqual(creditCard.cardConfig.MASTERCARD.cardLength);
        expect(creditCard.cardConfig.MASTERCARD.prefix.includes(result.prefix)).toBeTruthy();
      });
    });

    describe('Testing visa', () => {
      test('Should be able to return random card prefix and card length as per issuing network', () => {
        const result = randomPrefixAndCardLengthForIssuingNetwork('VISA');
        expect(result.cardLength).toStrictEqual(creditCard.cardConfig.VISA.cardLength);
        expect(creditCard.cardConfig.VISA.prefix.includes(result.prefix)).toBeTruthy();
      });
    });
  });

  describe('Testing randomCardNumberWithoutChecksum', () => {
    test('Should be able to return random card number without checksum digit', () => {
      expect(randomCardNumberWithoutChecksum('1234', 16)).toMatch(/^1234(\d){11}$/);
    });
  });

  describe('Testing randomCardNumberWithChecksum', () => {
    test('Should be able to return random card number with checksum digit', () => {
      expect(randomCardNumberWithChecksum('3852000002323')).toBe('38520000023237');
      expect(randomCardNumberWithChecksum('37500280571106')).toBe('375002805711069');
      expect(randomCardNumberWithChecksum('37144963539843')).toBe('371449635398431');
      expect(randomCardNumberWithChecksum('492996231434693')).toBe('4929962314346934');
      expect(randomCardNumberWithChecksum('453957294150618')).toBe('4539572941506180');
      expect(randomCardNumberWithChecksum('519224323432654')).toBe('5192243234326547');
      expect(randomCardNumberWithChecksum('601150548895022')).toBe('6011505488950223');
    });
  });
});
