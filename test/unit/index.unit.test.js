'use strict';

const getfake = require('../../index');

describe('Testing getfake', () => {
  describe('Testing email', () => {
    test('Should be able to return any email', () => {
      expect(getfake.email.any()).toMatch(/@example.com$/);
    });
  });

  describe('Testing hash', () => {
    test('Should be able to return sha256', () => {
      expect(getfake.hash.sha.sha256()).toMatch(/^[0-9a-f]{64}$/gi);
    });

    test('Should be able to return md5', () => {
      expect(getfake.hash.md.md5()).toMatch(/^[0-9a-f]{32}$/gi);
    });
  });

  describe('Testing ip address', () => {
    test('Should be able to return any ip address', () => {
      expect(getfake.ipAddress.any()).toMatch(
        /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}$/
      );
    });

    test('Should be able to return any 10.*.*.* private ip address', () => {
      expect(getfake.ipAddress.privateNetwork10.any()).toMatch(
        /^10(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}$/
      );
    });
  });

  describe('Testing latitude', () => {
    test('Should be able to return any latitude', () => {
      const result = getfake.latitude.any();
      expect(result).toBeGreaterThanOrEqual(-90);
      expect(result).toBeLessThanOrEqual(90);
    });
  });

  describe('Testing longitude', () => {
    test('Should be able to return any longitude', () => {
      const result = getfake.longitude.any();
      expect(result).toBeGreaterThanOrEqual(-180);
      expect(result).toBeLessThanOrEqual(180);
    });
  });

  describe('Testing mac address', () => {
    test('Should be able to return any mac address', () => {
      expect(getfake.macAddress.any()).toMatch(
        /^[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}$/gi
      );
    });
  });

  describe('Testing name', () => {
    test('Should be able to return any random name', () => {
      const firstName = getfake.name.any.femaleName();
      const middleName = getfake.name.any.femaleMiddleName();
      const lastName = getfake.name.any.lastName();
      expect(firstName.length).toBeGreaterThan(1);
      expect(middleName.length).toBeGreaterThan(1);
      expect(lastName.length).toBeGreaterThan(1);
    });
  });

  describe('Testing number', () => {
    test('Should be able to return any number', () => {
      const result = getfake.number.asString(64, 16);
      expect(result).toMatch(/^\d{48}.\d{16}$/);
    });
  });

  describe('Testing phone', () => {
    test('Should be able to return any phone', () => {
      const result = getfake.phone.any();
      expect(result.length).toBe(10);
    });
  });

  describe('Testing phrase', () => {
    test('Should be able to return any phrase', () => {
      const result = getfake.phrase.any();
      expect(result.split(' ').length).toBe(12);
    });
  });

  describe('Testing time', () => {
    test('Should be able to return any time', () => {
      expect(getfake.time.zerothUtcTimestamp()).toBe('1970-01-01T00:00:00.000Z');
    });
  });

  describe('Testing sentence', () => {
    test('Should be able to return any sentence', () => {
      const result = getfake.sentence.any();
      expect(result.split(' ').length).toBeGreaterThan(1);
    });
  });

  describe('Testing uuid', () => {
    test('Should be able to return uuid any', () => {
      expect(getfake.uuid.any()).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/gi
      );
    });
  });

  describe('Testing word', () => {
    test('Should be able to return word any', () => {
      expect(getfake.word.any().length).toBeGreaterThan(1);
    });
  });
});
