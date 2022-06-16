'use strict';

const creditCard = require('../../../../src/fakes/credit-card');

describe('Testing credit card', () => {
  describe('Testing any', () => {
    test('Should be able to return any credit card', () => {
      expect(creditCard.any()).toMatch(/^(\d){16}$/);
    });
  });

  describe('Testing VISA', () => {
    test('Should be able to return any visa credit card', () => {
      expect(creditCard.visa.any()).toMatch(/^(\d){16}$/);
    });
  });
});
