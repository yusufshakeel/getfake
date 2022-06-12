'use strict';

const address = require('../../../../src/fakes/address');

describe('Testing address', () => {
  describe('Testing any', () => {
    test('Should be able to return any address object', () => {
      expect(address.any()).toStrictEqual({
        line1: expect.any(String),
        line2: expect.any(String),
        line3: expect.any(String),
        landmark: expect.any(String),
        city: expect.any(String),
        state: expect.any(String),
        postcode: expect.any(String),
        country: expect.any(String),
        countryCode: {
          alpha2: expect.any(String),
          alpha3: expect.any(String),
          numeric: expect.any(String)
        },
        latitude: expect.any(Number),
        longitude: expect.any(Number)
      });
    });
  });

  describe('Testing line1', () => {
    test('Should be able to return line1', () => {
      expect(address.line1().length).toBeGreaterThan(1);
    });
  });

  describe('Testing line2', () => {
    test('Should be able to return line2', () => {
      expect(address.line2().length).toBeGreaterThan(1);
    });
  });

  describe('Testing line3', () => {
    test('Should be able to return line3', () => {
      expect(address.line3().length).toBeGreaterThan(1);
    });
  });

  describe('Testing landmark', () => {
    test('Should be able to return landmark', () => {
      expect(address.landmark().length).toBeGreaterThan(1);
    });
  });

  describe('Testing postcode', () => {
    describe('When using default range', () => {
      test('Should be able to return postcode', () => {
        const postcode = address.postcode();
        expect(postcode).toMatch(/^\d{6}$/);
      });
    });

    describe('When using custom range', () => {
      test('Should be able to return postcode', () => {
        const postcode = address.postcode(1, 10);
        expect(postcode).toMatch(/^\d{1,2}$/);
      });
    });

    describe('When using custom range and prefix', () => {
      test('Should be able to return postcode', () => {
        const postcode = address.postcode(1000, 9999, 'ZXCV');
        expect(postcode).toMatch(/^ZXCV\d{4}$/);
      });
    });
  });

  describe('Testing country', () => {
    describe('When country code is valid', () => {
      test('Should be able to return country', () => {
        expect(address.country('IND')).toBe('India');
        expect(address.country('IN')).toBe('India');
      });
    });

    describe('When country code is invalid', () => {
      test('Should return undefined', () => {
        expect(address.country('***')).toBeUndefined();
        expect(address.country()).toBeUndefined();
      });
    });
  });

  describe('Testing countryCodeAlpha2', () => {
    describe('When country code is valid', () => {
      test('Should be able to return countryCodeAlpha2', () => {
        expect(address.countryCodeAlpha2('IND')).toBe('IN');
        expect(address.countryCodeAlpha2('IN')).toBe('IN');
      });
    });

    describe('When country code is invalid', () => {
      test('Should return undefined', () => {
        expect(address.countryCodeAlpha2('***')).toBeUndefined();
        expect(address.countryCodeAlpha2()).toBeUndefined();
      });
    });
  });

  describe('Testing countryCodeAlpha3', () => {
    describe('When country code is valid', () => {
      test('Should be able to return countryCodeAlpha3', () => {
        expect(address.countryCodeAlpha3('IND')).toBe('IND');
        expect(address.countryCodeAlpha3('IN')).toBe('IND');
      });
    });

    describe('When country code is invalid', () => {
      test('Should return undefined', () => {
        expect(address.countryCodeAlpha3('***')).toBeUndefined();
        expect(address.countryCodeAlpha3()).toBeUndefined();
      });
    });
  });

  describe('Testing countryCodeNumeric', () => {
    describe('When country code is valid', () => {
      test('Should be able to return countryCodeNumeric', () => {
        expect(address.countryCodeNumeric('IND')).toBe('356');
      });
    });

    describe('When country code is invalid', () => {
      test('Should return undefined', () => {
        expect(address.countryCodeNumeric('***')).toBeUndefined();
        expect(address.countryCodeNumeric()).toBeUndefined();
      });
    });
  });

  describe('Testing lat', () => {
    describe('When country code is valid', () => {
      test('Should be able to return lat', () => {
        const lat = address.lat('IND');
        const lat2 = address.lat('IN');
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
        expect(`${lat}`).toMatch(/(-)?\d{1,2}(\.\d{1,2})?$/);
        expect(lat).toStrictEqual(lat2);
      });
    });

    describe('When country code is invalid', () => {
      test('Should return random latitude', () => {
        const lat = address.lat('***');
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
        expect(`${lat}`).toMatch(/(-)?\d{1,2}(\.\d{1,2})?$/);
      });
    });

    describe('When country code is not provided', () => {
      test('Should return random latitude', () => {
        const lat = address.lat();
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
        expect(`${lat}`).toMatch(/(-)?\d{1,2}(\.\d{1,2})?$/);
      });
    });
  });

  describe('Testing lng', () => {
    describe('When country code is valid', () => {
      test('Should be able to return lng', () => {
        const lng = address.lng('IND');
        const lng2 = address.lng('IN');
        expect(lng).toBeGreaterThanOrEqual(-180);
        expect(lng).toBeLessThanOrEqual(180);
        expect(`${lng}`).toMatch(/(-)?\d{1,3}(\.\d{1,2})?$/);
        expect(lng).toStrictEqual(lng2);
      });
    });

    describe('When country code is invalid', () => {
      test('Should return random latitude', () => {
        const lng = address.lng('***');
        expect(lng).toBeGreaterThanOrEqual(-180);
        expect(lng).toBeLessThanOrEqual(180);
        expect(`${lng}`).toMatch(/(-)?\d{1,3}(\.\d{1,2})?$/);
      });
    });

    describe('When country code is not provided', () => {
      test('Should return random latitude', () => {
        const lng = address.lng();
        expect(lng).toBeGreaterThanOrEqual(-180);
        expect(lng).toBeLessThanOrEqual(180);
        expect(`${lng}`).toMatch(/(-)?\d{1,3}(\.\d{1,2})?$/);
      });
    });
  });
});
