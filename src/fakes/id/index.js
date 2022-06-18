'use strict';

const { rut } = require('./chile/rut');
const { ssn } = require('./usa/ssn');

module.exports = {
  chile: { rut: rut() },
  usa: { ssn: ssn() }
};
