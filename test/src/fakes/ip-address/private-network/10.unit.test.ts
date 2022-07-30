import privateNetwork10 from '../../../../../src/fakes/ip-address/private-network/10';

describe('Testing private network 10 ip address', () => {
  describe('Testing any', () => {
    test('Should be able to return any ip address', () => {
      expect(privateNetwork10().any()).toMatch(
        /^10(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}$/
      );
    });
  });
});