'use strict';

const allFakesExceptJson = require('./src/all-fakes-expect-json');
const json = require('./src/fakes/json');

module.exports = { ...allFakesExceptJson, json };
