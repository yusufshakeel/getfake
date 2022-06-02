'use strict';

const englishWords = require('../../constants/words/en');
const randInt = require('../../helpers/random-integer');
const { DEFAULT_NUMBER_OF_WORDS_IN_PHRASE } = require('../../constants');

function any(numberOfWords = DEFAULT_NUMBER_OF_WORDS_IN_PHRASE) {
  const length = englishWords.length;
  const words = [];
  for (let i = 0; i < numberOfWords; i++) {
    words.push(englishWords[randInt(0, length)]);
  }
  return words.join(' ');
}

module.exports = { any };
