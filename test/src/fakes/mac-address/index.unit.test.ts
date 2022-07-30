import macAddress from '../../../../src/fakes/mac-address';

describe('Testing mac address', () => {
  test('Testing any', () => {
    expect(macAddress.any()).toMatch(
      /^[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}$/gi
    );
  });
});