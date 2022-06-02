'use strict';

const phrase = require('../../../../src/fakes/phrase');

describe('Testing phrase', () => {
  describe('Testing any', () => {
    describe('When no word count is passed', () => {
      test('Should return phrase', () => {
        const result = phrase.any();
        expect(result.split(' ').length).toBe(12);
      });
    });

    describe('When word count is passed', () => {
      test('Should return phrase', () => {
        const result = phrase.any(3);
        expect(result.split(' ').length).toBe(3);
      });
    });
  });
});
