import num from '../../../../src/fakes/number';
import {
  DEFAULT_MAX_NUMBER_INTEGER,
  DEFAULT_MIN_NUMBER_INTEGER
} from '../../../../src/constants';

describe('Testing number', () => {
  describe('Testing integer', () => {
    test('Should return integer', () => {
      const result = num.integer();
      expect(result).toBeGreaterThanOrEqual(DEFAULT_MIN_NUMBER_INTEGER);
      expect(result).toBeLessThanOrEqual(DEFAULT_MAX_NUMBER_INTEGER);
    });
  });

  describe('Testing unsigned integer', () => {
    test('Should return unsigned integer', () => {
      const result = num.unsignedInteger();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(DEFAULT_MAX_NUMBER_INTEGER);
    });
  });

  describe('Testing float', () => {
    describe('When using default number of decimal', () => {
      test('Should return float number with default number of decimal', () => {
        const result = num.float();
        expect(result).toBeGreaterThanOrEqual(DEFAULT_MIN_NUMBER_INTEGER);
        expect(result).toBeLessThanOrEqual(DEFAULT_MAX_NUMBER_INTEGER);
        expect(`${result}`).toMatch(/(-)?\d+(\.\d{2})?$/);
      });
    });

    describe('When using custom number of decimal', () => {
      test('Should return float number with default number of decimal', () => {
        const result = num.float(6);
        expect(result).toBeGreaterThanOrEqual(DEFAULT_MIN_NUMBER_INTEGER);
        expect(result).toBeLessThanOrEqual(DEFAULT_MAX_NUMBER_INTEGER);
        expect(`${result}`).toMatch(/(-)?\d+(\.\d{6})?$/);
      });
    });
  });

  describe('Testing unsigned float', () => {
    describe('When using default number of decimal', () => {
      test('Should return float number with default number of decimal', () => {
        const result = num.unsignedFloat();
        expect(result).toBeGreaterThanOrEqual(DEFAULT_MIN_NUMBER_INTEGER);
        expect(result).toBeLessThanOrEqual(DEFAULT_MAX_NUMBER_INTEGER);
        expect(`${result}`).toMatch(/(-)?\d+(\.\d{2})?$/);
      });
    });

    describe('When using custom number of decimal', () => {
      test('Should return float number with default number of decimal', () => {
        const result = num.float(6);
        expect(result).toBeGreaterThanOrEqual(DEFAULT_MIN_NUMBER_INTEGER);
        expect(result).toBeLessThanOrEqual(DEFAULT_MAX_NUMBER_INTEGER);
        expect(`${result}`).toMatch(/(-)?\d+(\.\d{6})?$/);
      });
    });
  });

  describe('Testing asString', () => {
    describe('When using default', () => {
      test('Should return number', () => {
        const result = num.asString();
        expect(result).toMatch(/^\d{6}$/);
      });
    });

    describe('When using without decimal place', () => {
      test('Should return number without decimal place', () => {
        const result = num.asString(10);
        expect(result).toMatch(/^\d{10}$/);
      });
    });

    describe('When using decimal place', () => {
      test('Should return number with decimal place', () => {
        const result = num.asString(10, 4);
        expect(result).toMatch(/^\d{6}.\d{4}$/);
      });
    });
  });
});