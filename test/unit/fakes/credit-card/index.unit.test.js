'use strict';

const creditCard = require('../../../../src/fakes/credit-card');

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

  describe('Testing DISCOVER', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.discover.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing VISA', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.visa.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing MASTERCARD', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.mastercard.any()).toMatch(/^(\d){16}$/);
    });
  });
});
