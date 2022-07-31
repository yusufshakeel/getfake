import randomString from '../../../src/helpers/random-string';

describe('Testing random string', () => {
  test('Should return random string', () => {
    const characterString = 'abc123';
    const requiredStringLength = 32;
    const randString = randomString(characterString, requiredStringLength);
    expect(randString).toMatch(/[abc123]{32}/);
  });
});