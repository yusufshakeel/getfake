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

  describe('Testing uuid', () => {
    test('Should be able to return uuid any', () => {
      expect(getfake.uuid.any()).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/gi
      );
    });
  });
});
