'use strict';

const randomInteger = require('../../../src/helpers/random-integer');

describe('Testing random integer', () => {
  describe('When min and max both are set to 0', () => {
    test('Should return 0', () => {
      expect(randomInteger(0, 0)).toBe(0);
    });
  });

  describe('When min is set to 0 and max is set to 1', () => {
    test('Should return either 0 or 1', () => {
      const randomInt = randomInteger(0, 1);
      expect(randomInt).toBeLessThanOrEqual(1);
      expect(randomInt).toBeGreaterThanOrEqual(0);
    });
  });
});
