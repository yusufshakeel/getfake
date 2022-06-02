'use strict';

const randInt = require('../../helpers/random-integer');

module.exports = function namesFactory(source) {
  const pickName = name => {
    const totalNames = name.length;
    return name[randInt(0, totalNames - 1)];
  };

  const femaleFirstName = () => {
    return pickName(source.name.female);
  };

  const femaleMiddleName = () => {
    return femaleFirstName();
  };

  const femaleName = () => {
    return femaleFirstName();
  };

  const maleFirstName = () => {
    return pickName(source.name.male);
  };

  const maleMiddleName = () => {
    return maleFirstName();
  };

  const maleName = () => {
    return maleFirstName();
  };

  const lastName = () => {
    return pickName(source.lastName);
  };

  return {
    femaleName,
    femaleFirstName,
    femaleMiddleName,
    maleName,
    maleFirstName,
    maleMiddleName,
    lastName
  };
};
