import address from '../../../../src/fakes/address';

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
    describe('Testing byCountryCode', () => {
      describe('When country code is valid', () => {
        test('Should be able to return country', () => {
          expect(address.country.byCountryCode('IND')).toBe('India');
          expect(address.country.byCountryCode('IN')).toBe('India');
        });
      });

      describe('When country code is invalid', () => {
        test('Should return undefined', () => {
          expect(address.country.byCountryCode('***')).toBeUndefined();
          expect(address.country.byCountryCode()).toBeUndefined();
        });
      });
    });

    describe('Testing any', () => {
      test('Should return any name', () => {
        expect(address.country.any().length).toBeGreaterThan(1);
      });
    });
  });

  describe('Testing countryCodeAlpha2', () => {
    describe('Testing byCountryCode', () => {
      describe('When country code is valid', () => {
        test('Should be able to return countryCodeAlpha2', () => {
          expect(address.countryCodeAlpha2.byCountryCode('IND')).toBe('IN');
          expect(address.countryCodeAlpha2.byCountryCode('IN')).toBe('IN');
        });
      });

      describe('When country code is invalid', () => {
        test('Should return undefined', () => {
          expect(address.countryCodeAlpha2.byCountryCode('***')).toBeUndefined();
          expect(address.countryCodeAlpha2.byCountryCode()).toBeUndefined();
        });
      });
    });

    describe('Testing any', () => {
      test('Should return any countryCodeAlpha2', () => {
        expect(address.countryCodeAlpha2.any().length).toBeGreaterThan(1);
      });
    });
  });

  describe('Testing countryCodeAlpha3', () => {
    describe('Testing byCountryCode', () => {
      describe('When country code is valid', () => {
        test('Should be able to return countryCodeAlpha3', () => {
          expect(address.countryCodeAlpha3.byCountryCode('IND')).toBe('IND');
          expect(address.countryCodeAlpha3.byCountryCode('IN')).toBe('IND');
        });
      });

      describe('When country code is invalid', () => {
        test('Should return undefined', () => {
          expect(address.countryCodeAlpha3.byCountryCode('***')).toBeUndefined();
          expect(address.countryCodeAlpha3.byCountryCode()).toBeUndefined();
        });
      });
    });

    describe('Testing any', () => {
      test('Should return any countryCodeAlpha3', () => {
        expect(address.countryCodeAlpha3.any().length).toBeGreaterThan(1);
      });
    });
  });

  describe('Testing countryCodeNumeric', () => {
    describe('Testing byCountryCode', () => {
      describe('When country code is valid', () => {
        test('Should be able to return countryCodeNumeric', () => {
          expect(address.countryCodeNumeric.byCountryCode('IND')).toBe('356');
          expect(address.countryCodeNumeric.byCountryCode('IN')).toBe('356');
        });
      });

      describe('When country code is invalid', () => {
        test('Should return undefined', () => {
          expect(address.countryCodeNumeric.byCountryCode('***')).toBeUndefined();
          expect(address.countryCodeNumeric.byCountryCode()).toBeUndefined();
        });
      });
    });

    describe('Testing any', () => {
      test('Should return any countryCodeNumeric', () => {
        expect(address.countryCodeNumeric.any().length).toBeGreaterThan(1);
      });
    });
  });

  describe('Testing lat', () => {
    describe('Testing byCountryCode', () => {
      describe('When country code is valid', () => {
        test('Should be able to return lat', () => {
          const lat = address.lat.byCountryCode('IND');
          const lat2 = address.lat.byCountryCode('IN');
          expect(lat).toBeGreaterThanOrEqual(-90);
          expect(lat).toBeLessThanOrEqual(90);
          expect(`${lat}`).toMatch(/(-)?\d{1,2}(\.\d{1,2})?$/);
          expect(lat).toStrictEqual(lat2);
        });
      });

      describe('When country code is invalid', () => {
        test('Should return random latitude', () => {
          const lat = address.lat.byCountryCode('***');
          const lat2 = address.lat.byCountryCode();
          expect(lat).toBeUndefined();
          expect(lat2).toBeUndefined();
        });
      });
    });

    describe('Testing any', () => {
      test('Should return random latitude', () => {
        const lat = address.lat.any();
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
        expect(`${lat}`).toMatch(/(-)?\d{1,2}(\.\d{1,2})?$/);
      });
    });
  });

  describe('Testing lng', () => {
    describe('Testing byCountryCode', () => {
      describe('When country code is valid', () => {
        test('Should be able to return lng', () => {
          const lng = address.lng.byCountryCode('IND');
          const lng2 = address.lng.byCountryCode('IN');
          expect(lng).toBeGreaterThanOrEqual(-180);
          expect(lng).toBeLessThanOrEqual(180);
          expect(`${lng}`).toMatch(/(-)?\d{1,3}(\.\d{1,2})?$/);
          expect(lng).toStrictEqual(lng2);
        });
      });

      describe('When country code is invalid', () => {
        test('Should return undefined', () => {
          const lng = address.lng.byCountryCode('***');
          const lng2 = address.lng.byCountryCode();
          expect(lng).toBeUndefined();
          expect(lng2).toBeUndefined();
        });
      });
    });

    describe('Testing any', () => {
      test('Should return random latitude', () => {
        const lng = address.lng.any();
        expect(lng).toBeGreaterThanOrEqual(-180);
        expect(lng).toBeLessThanOrEqual(180);
        expect(`${lng}`).toMatch(/(-)?\d{1,3}(\.\d{1,2})?$/);
      });
    });
  });

  describe('Testing capital', () => {
    describe('Testing byCountryCode', () => {
      describe('When country code is valid', () => {
        test('Should be able to return capital', () => {
          expect(address.capital.byCountryCode('IND')).toBe('New Delhi');
          expect(address.capital.byCountryCode('IN')).toBe('New Delhi');
        });
      });

      describe('When country code is invalid', () => {
        test('Should return undefined', () => {
          expect(address.capital.byCountryCode('***')).toBeUndefined();
          expect(address.capital.byCountryCode()).toBeUndefined();
        });
      });
    });

    describe('Testing any', () => {
      test('Should return any capital', () => {
        expect(address.capital.any().length).toBeGreaterThanOrEqual(0);
      });
    });
  });

  describe('Testing state', () => {
    describe('Testing byCountryCode', () => {
      describe('When country code is valid', () => {
        test('Should be able to return state', () => {
          expect(address.state.byCountryCode('IND')).toBe('New Delhi');
          expect(address.state.byCountryCode('IN')).toBe('New Delhi');
        });
      });

      describe('When country code is invalid', () => {
        test('Should return undefined', () => {
          expect(address.state.byCountryCode('***')).toBeUndefined();
          expect(address.state.byCountryCode()).toBeUndefined();
        });
      });
    });

    describe('Testing any', () => {
      test('Should return any state', () => {
        expect(address.state.any().length).toBeGreaterThan(1);
      });
    });
  });
});