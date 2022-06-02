'use strict';

const { any, v4, v5 } = require('../../../../src/fakes/uuid');

describe('Testing uuid', () => {
  const regEx = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/gi;

  describe('Testing uuid any', () => {
    test('Should return valid uuid hash', () => {
      expect(any()).toMatch(regEx);
    });
  });

  describe('Testing uuid v4', () => {
    test('Should return valid uuid hash', () => {
      expect(v4()).toMatch(regEx);
    });
  });

  describe('Testing uuid v5', () => {
    test('Should return valid uuid hash', () => {
      expect(v5()).toMatch(regEx);
    });
  });
});
