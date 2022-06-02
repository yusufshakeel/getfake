'use strict';

const randomString = require('../../../src/helpers/random-string');

describe('Testing random string', () => {
  test('Should return random string', () => {
    const characterString = 'abc123';
    const requiredStringLength = 32;
    let randString = randomString(characterString, requiredStringLength);
    expect(randString).toMatch(/[abc123]{32}/);
  });
});
