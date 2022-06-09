'use strict';

const { any: anyName } = require('../name');

/**
 * This will return random email.
 * @param {{firstName: string, middleName: string, lastName: string, randomNumber: number, domain: string}} option
 * @returns {string}
 */
function any(
  option = {
    firstName: anyName.femaleName(),
    middleName: '',
    lastName: '',
    randomNumber: '',
    domain: 'example.com'
  }
) {
  const { firstName, middleName, lastName, randomNumber, domain } = option;
  return `${firstName}${middleName}${lastName}${randomNumber}@${domain}`
    .toLowerCase()
    .replace(/\s/g, '');
}

module.exports = { any };
