import name from '../name';
const { any: anyName } = name;

type emailAnyOptionType = {
  firstName: string,
  middleName: string,
  lastName: string,
  randomNumber: number|string,
  domain: string
};

/**
 * This will return random email.
 * @param {{firstName: string, middleName: string, lastName: string, randomNumber: number|string, domain: string}} option
 * @returns {string}
 */
function any(
  option: emailAnyOptionType = {
    firstName: anyName.femaleName(),
    middleName: '',
    lastName: '',
    randomNumber: '',
    domain: 'example.com'
  }
): string {
  const { firstName, middleName, lastName, randomNumber, domain } = option;
  return `${firstName}${middleName}${lastName}${randomNumber}@${domain}`
    .toLowerCase()
    .replace(/\s/g, '');
}

export default { any };