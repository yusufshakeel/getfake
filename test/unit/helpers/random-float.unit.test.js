'use strict';

const randomFloat = require('../../../src/helpers/random-float');

describe('Testing random float', () => {
  describe('When using default decimal and min and max is set to 0', () => {
    test('Should return 0', () => {
      expect(randomFloat(0, 0)).toBe(0);
    });
  });

  describe('When using default decimal and max is 1 and min is -1', () => {
    test('Should return float number between -1 to 1', () => {
      const result = randomFloat(-1, 1);
      expect(result).toBeGreaterThanOrEqual(-1);
      expect(result).toBeLessThanOrEqual(1);
      expect(`${result}`).toMatch(/^(-)?\d+(\.\d{2})?$/);
    });
  });

  describe('When using specific decimal place and max is 1 and min is -1', () => {
    test('Should return float number between -1 to 1', () => {
      const result = randomFloat(-1, 1, 6);
      expect(result).toBeLessThanOrEqual(1);
      expect(result).toBeGreaterThanOrEqual(-1);
      expect(`${result}`).toMatch(/^(-)?\d+(\.\d{5,6})?$/);
    });
  });
});
