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
        postcode: expect.any(Number),
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
});