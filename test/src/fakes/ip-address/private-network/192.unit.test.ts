import privateNetwork192 from '../../../../../src/fakes/ip-address/private-network/192';

describe('Testing private network 192 ip address', () => {
  describe('Testing 192.168.*.*', () => {
    test('Should be able to return any ip address', () => {
      expect(privateNetwork192()._168.any()).toMatch(
        /^192.168(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){2}$/
      );
    });
  });
});