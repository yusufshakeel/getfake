'use strict';

const {
  v13,
  getIsbnWithoutCheckDigit,
  getCheckDigit,
  formattedIsbn
} = require('../../../../src/fakes/isbn/v13');

describe('Testing ISBN-13', () => {
  describe('Testing getIsbnWithoutCheckDigit', () => {
    test('Should be able to return isbn without check digit', () => {
      expect(getIsbnWithoutCheckDigit()).toMatch(/^(978|979)\d{9}$/);
    });
  });

  describe('Testing getCheckDigit', () => {
    test('Should be able to return check digit', () => {
      expect(getCheckDigit('978046222871')).toBe('6');
      expect(getCheckDigit('979253973969')).toBe('8');
      expect(getCheckDigit('0')).toBe('0');
    });
  });

  describe('Testing formattedIsbn', () => {
    test('Should be able to return formatted isbn', () => {
      expect(formattedIsbn('978046222871', '6')).toBe('978-0-46-222871-6');
    });
  });

  describe('Testing any', () => {
    describe('When using default option', () => {
      test('Should be able to return isbn', () => {
        const result = v13().any();
        expect(result).toMatch(/^(978|979)-\d-\d{2}-\d{6}-\d$/);
      });
    });

    describe('When using custom option', () => {
      test('Should be able to return isbn', () => {
        const result = v13().any({ formatted: false });
        expect(result).toMatch(/^(978|979)\d{10}$/);
      });
    });
  });
});
