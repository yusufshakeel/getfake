import randInt from '../../helpers/random-integer';
import apartmentNames from '../../constants/addresses/apartment';
import countries from '../../constants/addresses/country';
import landmarks from '../../constants/addresses/landmark';
import latitude from '../latitude';
import longitude from '../longitude';
import { CountryType } from '../../ts-def/address/country-type';
import { AnyAddressType } from '../../ts-def/address/any-address-type';

const proxy: string[] = ['Opposite', 'Behind', 'Next to', 'Near', 'Close to'];

const getRandomCountry = (): CountryType => countries[randInt(0, countries.length - 1)];

const getCountryByCountryCode = (countryCode: string): CountryType | undefined =>
  countries.find(v => v.countryCodeAlpha3 === countryCode || v.countryCodeAlpha2 === countryCode);

function line1(): string {
  const numberOfApartments: number = apartmentNames.length;
  const floor: number = randInt(1, 30);
  const randomApartmentName: string = apartmentNames[randInt(0, numberOfApartments - 1)];
  const propertyNumber: number = randInt(1, 12);
  const propertyType: string[] = ['Flat', 'Door', 'Suite'];
  return `${
    propertyType[randInt(0, propertyType.length - 1)]
  } ${propertyNumber}, Floor #${floor}, ${randomApartmentName}`;
}

function line2(): string {
  const areaType: string[] = ['Phase', 'Sector'];
  const roadType: string[] = ['Street', 'Lane', 'Road', 'Main Road'];
  return `${randInt(1, 20)} ${roadType[randInt(0, roadType.length - 1)]}, ${
    areaType[randInt(0, areaType.length - 1)]
  } #${randInt(1, 10)}`;
}

function line3(): string {
  const numberOfApartments: number = apartmentNames.length;
  const randomApartmentName: string = apartmentNames[randInt(0, numberOfApartments - 1)];
  return `${proxy[randInt(0, proxy.length - 1)]} ${randomApartmentName}`;
}

function landmark(): string {
  const numberOfLandmarks: number = landmarks.length;
  const randomLandmark: string = landmarks[randInt(0, numberOfLandmarks - 1)];
  return `${proxy[randInt(0, proxy.length - 1)]} ${randomLandmark}`;
}

function postcode(start = 100000, end = 999999, prefix = ''): string {
  return `${prefix}${randInt(start, end)}`;
}

function country() {
  const byCountryCode = (countryCode = ''): string | undefined =>
    getCountryByCountryCode(countryCode.toUpperCase())?.name;

  const any = (): string => {
    const result: string[] = countries.map(v => v.name);
    return result[randInt(0, result.length - 1)];
  };

  return { byCountryCode, any };
}

function countryCodeAlpha2() {
  const byCountryCode = (countryCode = ''): string | undefined =>
    getCountryByCountryCode(countryCode.toUpperCase())?.countryCodeAlpha2;

  const any = (): string => {
    const result: string[] = countries.map(v => v.countryCodeAlpha2);
    return result[randInt(0, result.length - 1)];
  };

  return { byCountryCode, any };
}

function countryCodeAlpha3() {
  const byCountryCode = (countryCode = ''): string | undefined =>
    getCountryByCountryCode(countryCode.toUpperCase())?.countryCodeAlpha3;

  const any = (): string => {
    const result: string[] = countries.map(v => v.countryCodeAlpha3);
    return result[randInt(0, result.length - 1)];
  };

  return { byCountryCode, any };
}

function countryCodeNumeric() {
  const byCountryCode = (countryCode = ''): string | undefined =>
    getCountryByCountryCode(countryCode.toUpperCase())?.countryCodeNumeric;

  const any = (): string => {
    const result: string[] = countries.map(v => v.countryCodeNumeric);
    return result[randInt(0, result.length - 1)];
  };

  return { byCountryCode, any };
}

function lat() {
  const byCountryCode = (countryCode = ''): number | undefined =>
    getCountryByCountryCode(countryCode.toUpperCase())?.latitude;

  const any = (): number => latitude.any(5);

  return { byCountryCode, any };
}

function lng() {
  const byCountryCode = (countryCode = ''): number | undefined =>
    getCountryByCountryCode(countryCode.toUpperCase())?.longitude;

  const any = (): number => longitude.any(5);

  return { byCountryCode, any };
}

function capital() {
  const byCountryCode = (countryCode = ''): string | undefined =>
    getCountryByCountryCode(countryCode.toUpperCase())?.capital;

  const any = (): string => {
    const capitals: string[] = countries.map(v => v.capital);
    return capitals[randInt(0, capitals.length - 1)];
  };

  return { byCountryCode, any };
}

function state() {
  const byCountryCode = (countryCode = ''): string | undefined =>
    getCountryByCountryCode(countryCode.toUpperCase())?.state;

  const any = (): string => {
    const states: string[] = countries.map(v => v.state);
    return states[randInt(0, states.length - 1)];
  };

  return { byCountryCode, any };
}

function any(): AnyAddressType {
  const selectedCountry: CountryType = getRandomCountry();
  return {
    line1: line1(),
    line2: line2(),
    line3: line3(),
    landmark: landmark(),
    city: selectedCountry.capital,
    state: selectedCountry.state,
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

export default {
  any,
  line1,
  line2,
  line3,
  landmark,
  postcode,
  capital: capital(),
  state: state(),
  country: country(),
  countryCodeAlpha2: countryCodeAlpha2(),
  countryCodeAlpha3: countryCodeAlpha3(),
  countryCodeNumeric: countryCodeNumeric(),
  lat: lat(),
  lng: lng()
};