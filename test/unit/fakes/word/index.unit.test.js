'use strict';

const word = require('../../../../src/fakes/word');

describe('Testing word', () => {
  describe('Testing any', () => {
    test('Should be able to return a word', () => {
      const result = word.any();
      expect(result.length).toBeGreaterThan(1);
    });
  });

  describe('Testing gibberish', () => {
    test('Should be able to return a word', () => {
      const result = word.gibberish();
      expect(result.length).toBeGreaterThan(1);
    });
  });
});
