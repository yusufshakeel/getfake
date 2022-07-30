import longitude from '../../../../src/fakes/longitude';

describe('Testing longitude', () => {
  describe('Testing any', () => {
    describe('When using default decimal place', () => {
      test('Should be able to return longitude', () => {
        const lng = longitude.any();
        expect(lng).toBeGreaterThanOrEqual(-180);
        expect(lng).toBeLessThanOrEqual(180);
        expect(`${lng}`).toMatch(/(-)?\d{1,3}(\.\d{1,2})?$/);
      });
    });

    describe('When using custom decimal place', () => {
      test('Should be able to return longitude', () => {
        const lng = longitude.any(5);
        expect(lng).toBeGreaterThanOrEqual(-180);
        expect(lng).toBeLessThanOrEqual(180);
        expect(`${lng}`).toMatch(/(-)?\d{1,3}(\.\d{4,5})?$/);
      });
    });
  });
});