'use strict';

const fakeWords = require('../../../src/constants/words/fake');
const wordsEnglish = require('../../../src/constants/words/en');
const randInt = require('../../../src/helpers/random-integer');

function any() {
  const totalNumberOfWords = wordsEnglish.length;
  return wordsEnglish[randInt(0, totalNumberOfWords - 1)];
}

function gibberish() {
  const totalNumberOfWords = fakeWords.length;
  return fakeWords[randInt(0, totalNumberOfWords - 1)];
}

module.exports = { any, gibberish };
