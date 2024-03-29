import randInt from './random-integer';

/**
 * This will return a random string using the character string and required length.
 * @param {string} characterString
 * @param {number} requiredStringLength
 * @returns {string}
 */
export default function randomString(
  characterString: string,
  requiredStringLength: number
): string {
  const numberOfCharacters = characterString.length;
  const randomCharacters = [];
  for (let i = 0; i < requiredStringLength; i++) {
    randomCharacters.push(characterString[randInt(0, numberOfCharacters - 1)]);
  }
  return randomCharacters.join('');
}