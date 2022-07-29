import fakeWords from '../../constants/words/fake';
import wordsEnglish from '../../constants/words/en';
import randInt from '../../helpers/random-integer';

function any(): string {
  const totalNumberOfWords = wordsEnglish.length;
  return wordsEnglish[randInt(0, totalNumberOfWords - 1)];
}

function gibberish(): string {
  const totalNumberOfWords = fakeWords.length;
  return fakeWords[randInt(0, totalNumberOfWords - 1)];
}

export default { any, gibberish };