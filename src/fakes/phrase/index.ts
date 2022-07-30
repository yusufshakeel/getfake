import englishWords from '../../constants/words/en';
import randInt from '../../helpers/random-integer';
import { DEFAULT_NUMBER_OF_WORDS_IN_PHRASE } from '../../constants';

function any(numberOfWords = DEFAULT_NUMBER_OF_WORDS_IN_PHRASE): string {
  const length = englishWords.length;
  const words = [];
  for (let i = 0; i < numberOfWords; i++) {
    words.push(englishWords[randInt(0, length)]);
  }
  return words.join(' ');
}

export default { any };