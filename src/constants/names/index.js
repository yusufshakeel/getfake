'use strict';

const englishLastNames = require('./english-last-names');
const englishNamesFemale = require('./english-names-female');
const englishNamesMale = require('./english-name-male');

const hebrewLastNames = require('./hebrew-last-names');
const hebrewNamesFemale = require('./hebrew-names-female');
const hebrewNamesMale = require('./hebrew-names-male');

const hindiLastNames = require('./hindi-last-names');
const hindiNamesFemale = require('./hindi-names-female');
const hindiNamesMale = require('./hindi-names-male');

const hispanicLastNames = require('./hispanic-last-names');
const hispanicNamesFemale = require('./hispanic-names-female');
const hispanicNamesMale = require('./hispanic-names-male');

const middleEastLastNames = require('./middle-east-last-names');
const middleEastNamesFemale = require('./middle-east-names-female');
const middleEastNamesMale = require('./middle-east-names-male');

const slavicLastNames = require('./slavic-last-names');
const slavicNamesFemale = require('./slavic-names-female');
const slavicNamesMale = require('./slavic-names-male');

const southEastAsianLastNames = require('./south-east-asian-last-names');
const southEastAsianNamesFemale = require('./south-east-asian-names-female');
const southEastAsianNamesMale = require('./south-east-asian-names-male');

const southAsianLastNames = [...englishLastNames, ...hindiLastNames, ...middleEastLastNames];
const southAsianNamesFemale = [
  ...englishNamesFemale,
  ...hindiNamesFemale,
  ...middleEastNamesFemale
];
const southAsianNamesMale = [...englishNamesMale, ...hindiNamesMale, ...middleEastNamesMale];

module.exports = {
  any: {
    name: {
      female: Array.from(
        new Set([
          ...englishNamesFemale,
          ...hebrewNamesFemale,
          ...hispanicNamesFemale,
          ...southAsianNamesFemale,
          ...middleEastNamesFemale,
          ...slavicNamesFemale
        ])
      ),
      male: Array.from(
        new Set([
          ...englishNamesMale,
          ...hebrewNamesMale,
          ...hispanicNamesMale,
          ...southAsianNamesMale,
          ...middleEastNamesMale,
          ...slavicNamesMale
        ])
      )
    },
    lastName: Array.from(
      new Set([
        ...englishLastNames,
        ...hebrewLastNames,
        ...hispanicLastNames,
        ...southAsianLastNames,
        ...middleEastLastNames,
        ...slavicLastNames
      ])
    )
  },
  english: {
    name: { female: englishNamesFemale, male: englishNamesMale },
    lastname: englishLastNames
  },
  hebrew: {
    name: { female: hebrewNamesFemale, male: hebrewNamesMale },
    lastname: hebrewLastNames
  },
  hindi: {
    name: { female: hindiNamesFemale, male: hindiNamesMale },
    lastname: hindiLastNames
  },
  hispanic: {
    name: { female: hispanicNamesFemale, male: hispanicNamesMale },
    lastname: hispanicLastNames
  },
  middleEast: {
    name: { female: middleEastNamesFemale, male: middleEastNamesMale },
    lastname: middleEastLastNames
  },
  slavic: {
    name: { female: slavicNamesFemale, male: slavicNamesMale },
    lastname: slavicLastNames
  },
  southAsian: {
    name: { female: southAsianNamesFemale, male: southAsianNamesMale },
    lastname: southAsianLastNames
  },
  southEastAsian: {
    name: { female: southEastAsianNamesFemale, male: southEastAsianNamesMale },
    lastname: southEastAsianLastNames
  }
};
