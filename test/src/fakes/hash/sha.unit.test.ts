import sha from '../../../../src/fakes/hash/sha';

const { sha1, sha224, sha256, sha384, sha512 } = sha;

describe('Testing hash - SHA', () => {
  test('Should be able to return sha1 hash', () => {
    expect(sha1()).toMatch(/^[0-9a-f]{40}$/gi);
  });

  test('Should be able to return sha224 hash', () => {
    expect(sha224()).toMatch(/^[0-9a-f]{56}$/gi);
  });

  test('Should be able to return sha256 hash', () => {
    expect(sha256()).toMatch(/^[0-9a-f]{64}$/gi);
  });

  test('Should be able to return sha384 hash', () => {
    expect(sha384()).toMatch(/^[0-9a-f]{96}$/gi);
  });

  test('Should be able to return sha512 hash', () => {
    expect(sha512()).toMatch(/^[0-9a-f]{128}$/gi);
  });
});