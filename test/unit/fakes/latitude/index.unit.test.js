'use strict';

const latitude = require('../../../../src/fakes/latitude');

describe('Testing latitude', () => {
  describe('Testing any', () => {
    describe('When using default decimal place', () => {
      test('Should be able to return latitude', () => {
        const lat = latitude.any();
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
        expect(`${lat}`).toMatch(/(-)?\d{1,2}(\.\d{1,2})?$/);
      });
    });

    describe('When using custom decimal place', () => {
      test('Should be able to return latitude', () => {
        const lat = latitude.any(5);
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
        expect(`${lat}`).toMatch(/(-)?\d{1,2}(\.\d{4,5})?$/);
      });
    });
  });
});
