import englishLastNames from './english-last-names';
import englishNamesFemale from './english-names-female';
import englishNamesMale from './english-name-male';

import hebrewLastNames from './hebrew-last-names';
import hebrewNamesFemale from './hebrew-names-female';
import hebrewNamesMale from './hebrew-names-male';

import hindiLastNames from './hindi-last-names';
import hindiNamesFemale from './hindi-names-female';
import hindiNamesMale from './hindi-names-male';

import hispanicLastNames from './hispanic-last-names';
import hispanicNamesFemale from './hispanic-names-female';
import hispanicNamesMale from './hispanic-names-male';

import middleEastLastNames from './middle-east-last-names';
import middleEastNamesFemale from './middle-east-names-female';
import middleEastNamesMale from './middle-east-names-male';

import slavicLastNames from './slavic-last-names';
import slavicNamesFemale from './slavic-names-female';
import slavicNamesMale from './slavic-names-male';

import southEastAsianLastNames from './south-east-asian-last-names';
import southEastAsianNamesFemale from './south-east-asian-names-female';
import southEastAsianNamesMale from './south-east-asian-names-male';

const southAsianLastNames = [...englishLastNames, ...hindiLastNames, ...middleEastLastNames];
const southAsianNamesFemale = [
  ...englishNamesFemale,
  ...hindiNamesFemale,
  ...middleEastNamesFemale
];
const southAsianNamesMale = [...englishNamesMale, ...hindiNamesMale, ...middleEastNamesMale];

export default {
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