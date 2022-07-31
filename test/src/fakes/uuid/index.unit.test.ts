import uuid from '../../../../src/fakes/uuid';

describe('Testing uuid', () => {
  const regEx = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/gi;

  describe('Testing uuid any', () => {
    test('Should return valid uuid hash', () => {
      expect(uuid.any()).toMatch(regEx);
    });
  });

  describe('Testing uuid v4', () => {
    test('Should return valid uuid hash', () => {
      expect(uuid.v4()).toMatch(regEx);
    });
  });

  describe('Testing uuid v5', () => {
    test('Should return valid uuid hash', () => {
      expect(uuid.v5()).toMatch(regEx);
    });
  });
});