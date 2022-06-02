'use strict';

const quotes = require('../../constants/quotes');
const randInt = require('../../helpers/random-integer');

function any(numberOfWords = -1) {
  const totalNumberOfQuotes = quotes.length;
  if (numberOfWords < 0) {
    const selectedQuotes = [];
    const numberOfQuotesToSelect = randInt(1, 3);
    for (let i = 0; i < numberOfQuotesToSelect; i++) {
      selectedQuotes.push(quotes[randInt(0, totalNumberOfQuotes - 1)]);
    }
    return selectedQuotes.join(' ');
  }

  const selectedWords = [];
  while (selectedWords.length < numberOfWords) {
    const quote = quotes[randInt(0, totalNumberOfQuotes - 1)];
    const words = quote.split(' ');
    selectedWords.push(...words);
  }

  return selectedWords.splice(0, numberOfWords).join(' ');
}

module.exports = { any };
