'use strict';

const longitude = require('../../../../src/fakes/longitude');

describe('Testing longitude', () => {
  describe('Testing any', () => {
    describe('When using default decimal place', () => {
      test('Should be able to return longitude', () => {
        const lat = longitude.any();
        expect(lat).toBeGreaterThanOrEqual(-180);
        expect(lat).toBeLessThanOrEqual(180);
        expect(`${lat}`).toMatch(/(-)?\d{1,3}(\.\d{1,2})?$/);
      });
    });

    describe('When using custom decimal place', () => {
      test('Should be able to return longitude', () => {
        const lat = longitude.any(5);
        expect(lat).toBeGreaterThanOrEqual(-180);
        expect(lat).toBeLessThanOrEqual(180);
        expect(`${lat}`).toMatch(/(-)?\d{1,3}(\.\d{4,5})?$/);
      });
    });
  });
});
