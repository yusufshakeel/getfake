import md from '../../../../src/fakes/hash/md';

describe('Testing md hashing', () => {
  const regEx = /^[0-9a-f]{32}$/gi;

  describe('Testing any', () => {
    test('Should return valid md hash', () => {
      expect(md.any()).toMatch(regEx);
    });
  });

  describe('Testing md2', () => {
    test('Should return valid md hash', () => {
      expect(md.md2()).toMatch(regEx);
    });
  });

  describe('Testing md4', () => {
    test('Should return valid md hash', () => {
      expect(md.md4()).toMatch(regEx);
    });
  });

  describe('Testing md5', () => {
    test('Should return valid md hash', () => {
      expect(md.md5()).toMatch(regEx);
    });
  });
});