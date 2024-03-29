import creditCard from '../../../../src/fakes/credit-card';

describe('Testing credit card', () => {
  describe('Testing any', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.any()).toMatch(/^(\d){15,16}$/);
    });
  });

  describe('Testing AMEX', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.amex.any()).toMatch(/^(\d){15}$/);
    });
  });

  describe('Testing DINERS_CLUB', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.dinersClub.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing ENROUTE', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.enRoute.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing JCB', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.jcb.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing DISCOVER', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.discover.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing MASTERCARD', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.mastercard.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing VISA', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.visa.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing VOYAGER', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.voyager.any()).toMatch(/^(\d){16}$/);
    });
  });
});