'use strict';

const randInt = require('../../helpers/random-integer');
const apartmentNames = require('../../constants/addresses/apartment');
const countries = require('../../constants/addresses/country');
const landmarks = require('../../constants/addresses/landmark');
const latitude = require('../latitude');
const longitude = require('../longitude');

const proxy = ['Opposite', 'Behind', 'Next to', 'Near', 'Close to'];

const getRandomCountry = () => countries[randInt(0, countries.length - 1)];

const getCountryByCountryCode = countryCode =>
  countries.find(v => v.countryCodeAlpha3 === countryCode || v.countryCodeAlpha2 === countryCode);

function line1() {
  const numberOfApartments = apartmentNames.length;
  const floor = randInt(1, 30);
  const randomApartmentName = apartmentNames[randInt(0, numberOfApartments - 1)];
  const propertyNumber = randInt(1, 12);
  const propertyType = ['Flat', 'Door', 'Suite'];
  return `${
    propertyType[randInt(0, propertyType.length - 1)]
  } ${propertyNumber}, Floor #${floor}, ${randomApartmentName}`;
}

function line2() {
  const areaType = ['Phase', 'Sector'];
  const roadType = ['Street', 'Lane', 'Road', 'Main Road'];
  return `${randInt(1, 20)} ${roadType[randInt(0, roadType.length - 1)]}, ${
    areaType[randInt(0, areaType.length - 1)]
  } #${randInt(1, 10)}`;
}

function line3() {
  const numberOfApartments = apartmentNames.length;
  const randomApartmentName = apartmentNames[randInt(0, numberOfApartments - 1)];
  return `${proxy[randInt(0, proxy.length - 1)]} ${randomApartmentName}`;
}

function landmark() {
  const numberOfLandmarks = landmarks.length;
  const randomLandmark = landmarks[randInt(0, numberOfLandmarks - 1)];
  return `${proxy[randInt(0, proxy.length - 1)]} ${randomLandmark}`;
}

function postcode(start = 100000, end = 999999, prefix = '') {
  return `${prefix}${randInt(start, end)}`;
}

function country(countryCode) {
  return getCountryByCountryCode(countryCode?.toUpperCase())?.name;
}

function countryCodeAlpha2(countryCode) {
  return getCountryByCountryCode(countryCode?.toUpperCase())?.countryCodeAlpha2;
}

function countryCodeAlpha3(countryCode) {
  return getCountryByCountryCode(countryCode?.toUpperCase())?.countryCodeAlpha3;
}

function countryCodeNumeric(countryCode) {
  return getCountryByCountryCode(countryCode?.toUpperCase())?.countryCodeNumeric;
}

function lat(countryCode) {
  return getCountryByCountryCode(countryCode?.toUpperCase())?.latitude ?? latitude.any(5);
}

function lng(countryCode) {
  return getCountryByCountryCode(countryCode?.toUpperCase())?.longitude ?? longitude.any(5);
}

function any() {
  const selectedCountry = getRandomCountry();
  return {
    line1: line1(),
    line2: line2(),
    line3: line3(),
    landmark: landmark(),
    city: selectedCountry.capital,
    state: 'String',
    country: selectedCountry.name,
    countryCode: {
      alpha2: selectedCountry.countryCodeAlpha2,
      alpha3: selectedCountry.countryCodeAlpha3,
      numeric: selectedCountry.countryCodeNumeric
    },
    postcode: postcode(),
    latitude: selectedCountry.latitude,
    longitude: selectedCountry.longitude
  };
}

module.exports = {
  any,
  line1,
  line2,
  line3,
  landmark,
  postcode,
  country,
  countryCodeAlpha2,
  countryCodeAlpha3,
  countryCodeNumeric,
  lat,
  lng
};
