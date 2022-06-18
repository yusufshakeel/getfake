'use strict';

const {
  getSumOfDigits,
  getCheckDigit,
  getFormattedRutNumber,
  rut
} = require('../../../../../src/fakes/id/chile/rut');

describe('Testing Chile RUT id', () => {
  describe('Testing getSumOfDigits', () => {
    test('Should be able to return sum of digits for modulus 11 algorithm', () => {
      expect(getSumOfDigits('3471849')).toBe(143);
      expect(getSumOfDigits('10303771')).toBe(90);
      expect(getSumOfDigits('10446485')).toBe(135);
      expect(getSumOfDigits('23681839')).toBe(166);
      expect(getSumOfDigits('35897260')).toBe(190);
    });
  });

  describe('Testing getCheckDigit', () => {
    test('Should be able to return check digit from the sum of digit for the modulus 11 algorithm', () => {
      expect(getCheckDigit(143)).toBe('0');
      expect(getCheckDigit(90)).toBe('9');
      expect(getCheckDigit(135)).toBe('8');
      expect(getCheckDigit(166)).toBe('K');
      expect(getCheckDigit(190)).toBe('8');
    });
  });

  describe('Testing getFormattedRutNumber', () => {
    test('Should be able to return formatted RUT id', () => {
      expect(getFormattedRutNumber('3471849', '0')).toBe('3.471.849-0');
      expect(getFormattedRutNumber('10303771', '9')).toBe('10.303.771-9');
      expect(getFormattedRutNumber('10446485', '8')).toBe('10.446.485-8');
      expect(getFormattedRutNumber('23681839', 'K')).toBe('23.681.839-K');
      expect(getFormattedRutNumber('35897260', '8')).toBe('35.897.260-8');
    });
  });

  describe('Testing rut', () => {
    describe('Testing any', () => {
      describe('When using default options', () => {
        test('Should be able to return RUT id', () => {
          expect(rut().any()).toMatch(/^\d{2}(\.\d{3}){2}-(\d|K)$/);
        });
      });

      describe('When using custom options', () => {
        test('Should be able to return RUT id', () => {
          expect(rut().any({ numberOfDigits: 8, formatted: false })).toMatch(/^\d{7}(\d|K)$/);
        });
      });
    });
  });
});
