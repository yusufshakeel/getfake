import sentence from '../../../../src/fakes/sentence';

describe('Testing sentence', () => {
  describe('When no word count is mentioned', () => {
    test('Should return one sentence of any length', () => {
      const result = sentence.any();
      expect(result.split(' ').length).toBeGreaterThan(1);
    });
  });

  describe('When no word count is mentioned', () => {
    test('Should return one sentence of specific length', () => {
      const result = sentence.any(20);
      expect(result.split(' ').length).toBe(20);
    });
  });
});