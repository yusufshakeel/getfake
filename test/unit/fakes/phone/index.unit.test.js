'use strict';

const phone = require('../../../../src/fakes/phone');

describe('Testing phone', () => {
  describe('Testing any', () => {
    describe('When no specific number of digits mentioned', () => {
      test('Should return phone number with default number of digits', () => {
        expect(phone.any()).toMatch(/^\d{10}$/);
      });
    });

    describe('When specific number of digits mentioned', () => {
      test('Should return phone number with required number of digits', () => {
        expect(phone.any(5)).toMatch(/^\d{5}$/);
      });
    });
  });

  describe('Testing formatted', () => {
    test('Should be able to return phone number in specified format', () => {
      const result = phone.formatted('+91 11xxx xxxxx');
      expect(result).toMatch(/^\+91 11\d\d\d \d\d\d\d\d$/);
    });
  });
});
