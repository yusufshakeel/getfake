# getfake

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/getfake)
[![npm version](https://img.shields.io/badge/npm-0.36.0-blue.svg)](https://www.npmjs.com/package/getfake)
[![npm Downloads](https://img.shields.io/npm/dm/getfake.svg)](https://www.npmjs.com/package/getfake)

Generate fake values.

## Table of content

* [Getting started](#getting-started)
  * [Install](#install)
  * [Require](#require)
* [Functions](#functions)
  * [Address](#address)
  * [Credit Card](#credit-card)
  * [Email](#email)
  * [Hash](#hash)
  * [ID](#id)
  * [IP Address](#ip-address)
  * [ISBN](#isbn)
  * [Latitude](#latitude)
  * [Longitude](#longitude)
  * [MAC Address](#mac-address)
  * [Name](#name)
  * [Number](#number)
  * [Phone](#phone)
  * [Phrase](#phrase)
  * [Sentence](#sentence)
  * [Time](#time)
  * [UUID](#uuid)
  * [Word](#word)
* [Advance usage](#advance-usage)
  * [From JSON template](#from-json-template)
  * [getfakeRepeat](#getfakerepeat)
* [License](#license)
* [Donate](#donate)


## Getting started

### Install

To install this run the following command in the terminal.

```shell
npm i getfake
```

### Require

Require `getfake`.

```javascript
// ESM
import getfake from 'getfake';

// CommonJs
const { getfake } = require('getfake');
```

## Functions

## Address

For fake address.

```javascript
const address = getfake.address.any();
```

Example:

```JSON
{
  "line1": "Suite 1, Floor #20, Oak Plaza",
  "line2": "15 Street, Sector #4",
  "line3": "Close to The Luxury Palace",
  "landmark": "Behind Apple Store",
  "city": "Pretoria",
  "state": "String",
  "country": "South Africa",
  "countryCode": {
    "alpha2": "ZA",
    "alpha3": "ZAF",
    "numeric": "710"
  },
  "postcode": 909979,
  "latitude": -30.559482,
  "longitude": 22.937506
}
```

Available functions `getfake.address.*`:

* `any` - this will return address JSON
* `line1`
* `line2`
* `line3`
* `landmark`
* `postcode`
* `capital`
  * `any`
  * `byCountryCode`
* `state`
  * `any`
  * `byCountryCode`
* `country`
  * `any`
  * `byCountryCode`
* `countryCodeAlpha2`
  * `any`
  * `byCountryCode`
* `countryCodeAlpha3`
  * `any`
  * `byCountryCode`
* `countryCodeNumeric`
  * `any`
  * `byCountryCode`
* `lat`
  * `any`
  * `byCountryCode`
* `lng`
  * `any`
  * `byCountryCode`

### line1

This is for Flat Number, Home Number, Floor, etc.

```javascript
const line1 = getfake.address.line1();
```

Example: `Flat 1, Floor #21, La Grande Apartment`

### line2

This is for street, area, road etc.

```javascript
const line2 = getfake.address.line2();
```

Example: `9 Road, Sector #7`

### line3

This is for proximity.

```javascript
const line3 = getfake.address.line3();
```

Example: `Next to Green Lake View`

### landmark

This is for landmark.

```javascript
const landmark = getfake.address.landmark();
```

Example: `Opposite Grand Mall`

### postcode

This is for postcode.

```javascript
const postcode = getfake.address.postcode(start, end, prefix);
```

Example: `998030`

Arguments:

* start
  * Type: positive integer
  * Default: 100000
* end
  * Type: positive integer
  * Default: 999999
* prefix
  * Type: string
  * Default: `''` empty string

### capital.any

This is for capital.

```javascript
const capital = getfake.address.capital.any();
```

Example: `New Delhi`

### capital.byCountryCode

This is for capital.

```javascript
const capital = getfake.address.capital.byCountryCode(countryCode);
```

Example: `New Delhi`

Arguments:

* countryCode
  * Type: string - uppercase - 2 or 3 characters like 'IND', 'IN'

For invalid `countryCode` it will return `undefined`.

### state.any

This is for state.

```javascript
const state = getfake.address.state.any();
```

Example: `New Delhi`

### state.byCountryCode

This is for state.

```javascript
const state = getfake.address.state.byCountryCode(countryCode);
```

Example: `New Delhi`

Arguments:

* countryCode
  * Type: string - uppercase - 2 or 3 characters like 'IND', 'IN'

For invalid `countryCode` it will return `undefined`.

### country.any

This is for country.

```javascript
const country = getfake.address.country.any();
```

Example: `India`

### country.byCountryCode

This is for country.

```javascript
const country = getfake.address.country.byCountryCode(countryCode);
```

Example: `India`

Arguments:

* countryCode
  * Type: string - uppercase - 2 or 3 characters like 'IND', 'IN'

For invalid `countryCode` it will return `undefined`.

### countryCodeAlpha2.any

This is for 2 characters country code.

```javascript
const country = getfake.address.countryCodeAlpha2.any();
```

Example: `IN`

### countryCodeAlpha2.byCountryCode

This is for 2 characters country code.

```javascript
const country = getfake.address.countryCodeAlpha2.byCountryCode(countryCode);
```

Example: `IN`

Arguments:

* countryCode
  * Type: string - uppercase - 2 or 3 characters like 'IND', 'IN'

For invalid `countryCode` it will return `undefined`.

### countryCodeAlpha3.any

This is for 3 characters country code.

```javascript
const country = getfake.address.countryCodeAlpha3.any();
```

Example: `IND`

### countryCodeAlpha3.byCountryCode

This is for 3 characters country code.

```javascript
const country = getfake.address.countryCodeAlpha3.byCountryCode(countryCode);
```

Example: `IND`

Arguments:

* countryCode
  * Type: string - uppercase - 2 or 3 characters like 'IND', 'IN'

For invalid `countryCode` it will return `undefined`.

### countryCodeNumeric.any

This is for numeric country code.

```javascript
const country = getfake.address.countryCodeNumeric.any();
```

Example: `356`

### countryCodeNumeric.byCountryCode

This is for numeric country code.

```javascript
const country = getfake.address.countryCodeNumeric.byCountryCode(countryCode);
```

Example: `356`

Arguments:

* countryCode
  * Type: string - uppercase - 2 or 3 characters like 'IND', 'IN'

For invalid `countryCode` it will return `undefined`.

### lat.any

This is for latitude.

```javascript
const latitude = getfake.address.lat.any();
```

Example: `-52.10329`

### lat.byCountryCode

This is for latitude.

```javascript
const latitude = getfake.address.lat.byCountryCode(countryCode);
```

Example: `-52.10329`

Arguments:

* countryCode
  * Type: string - uppercase - 2 or 3 characters like 'IND', 'IN'

For invalid `countryCode` it will return `undefined`.

### lng.any

This is for longitude.

```javascript
const longitude = getfake.address.lng.any();
```

Example: `-100.77519`

### lng.byCountryCode

This is for longitude.

```javascript
const longitude = getfake.address.lng.byCountryCode(countryCode);
```

Example: `-100.77519`

Arguments:

* countryCode
  * Type: string - uppercase - 2 or 3 characters like 'IND', 'IN'

For invalid `countryCode` it will return `undefined`.

## Credit Card

For fake credit card.

```javascript
const creditCard = getfake.creditCard.any();
```

Example: `4532289439807445`

Available functions `getfake.creditCard.*`:

* `any`
* `amex`
* `dinersClub`
* `discover`
* `enRoute`
* `jcb`
* `mastercard`
* `visa`
* `voyager`

### Amex

For fake Amex credit card

```javascript
const amex = getfake.creditCard.amex.any();
```

Example: `346981070475953`

### Diners Club

For fake Diners Club credit card

```javascript
const dinersClub = getfake.creditCard.dinersClub.any();
```

Example: `3003779094744455`

### Discover

For fake Discover credit card

```javascript
const discover = getfake.creditCard.discover.any();
```

Example: `6011448881348903`

### enRoute

For fake enRoute credit card

```javascript
const enRoute = getfake.creditCard.enRoute.any();
```

Example: `2014601218861479`

### JCB

For fake JCB credit card

```javascript
const jcb = getfake.creditCard.jcb.any();
```

Example: `3561878578250742`

### MasterCard

For fake MasterCard credit card

```javascript
const mastercard = getfake.creditCard.mastercard.any();
```

Example: `5408987605338974`

### Visa

For fake Visa credit card

```javascript
const visa = getfake.creditCard.visa.any();
```

Example: `4539403188199721`

### Voyager

For fake Voyager credit card

```javascript
const voyager = getfake.creditCard.voyager.any();
```

Example: `8699736866519059`

## Email

For fake email.

```javascript
const email = getfake.email.any(option);
```

Example: `jane@example.com`

Argument:

* option
  * Object: `{firstName: string, middleName: string, lastName: string, randomNumber: number, domain: string}`
  * Default values:
    * `{ firstName: name.femaleName(), middleName: '', lastName: '', randomNumber: '', domain: 'example.com' }`

## Hash

### MD

For fake MD hash.

```javascript
const hash = getfake.hash.md.md5();
```

Example: `2c3e74bae60b76106460f80f6e22ed95`

Available functions `getfake.hash.md.*`:

* `any`
* `md2`
* `md4`
* `md5`

### SHA

For fake SHA hash.

```javascript
const hash = getfake.hash.sha.sha256();
```

Example: `d0a3e8faa7dee104414fcc55962c42c13cea0dab2b900a385a7c79c10859e574`

Available functions `getfake.hash.sha.*`:

* `sha1`
* `sha224`
* `sha256`
* `sha384`
* `sha512`

## ID

For fake IDs.

```javascript
const rut = getfake.id.chile.rut.any();
```

Example: `79.865.450-0`

Available functions `getfake.id.*`:

* `chile.rut.any`
* `usa.ssn.*`
  * `any`
  * `last4`

### chile.rut.any

For fake RUT.

```javascript
const rut = getfake.id.chile.rut.any(option);
```

Example: `79.865.450-0`

Arguments:

* option
  * Type: `{numberOfDigits: number, formatted: boolean}`
  * Default: `{numberOfDigits: 9, formatted: true}`

### usa.ssn.any

For fake SSN.

```javascript
const ssn = getfake.id.usa.ssn.any(option);
```

Example: `545-11-2222`

Arguments:

* option
  * Type: `{formatted: boolean}`
  * Default: `{formatted: true}`

### usa.ssn.last4

For fake SSN last 4 digits.

```javascript
const ssnLast4Digits = getfake.id.usa.ssn.last4();
```

Example: `2222`

## IP Address

For fake IP Address.

```javascript
const ipAddress = getfake.ipAddress.any();
```

Example: `127.0.0.1`

Available functions `getfake.ipAddress.*`:

* `any`
* `localhost`
* `privateNetwork10`
* `privateNetwork192`
  * `_168`

### any

```javascript
const ipAddress = getfake.ipAddress.any();
```

Range: 0.0.0.0 to 255.255.255.255

### localhost

```javascript
const ipAddress = getfake.ipAddress.localhost.any();
```

Available functions `getfake.ipAddress.localhost.*`:

* `any` - Range: 127.0.0.0 to 127.255.255.255

### privateNetwork10

```javascript
const ipAddress = getfake.ipAddress.privateNetwork10.any();
```

Range: 10.0.0.0 to 10.255.255.255

### privateNetwork192._168

```javascript
const ipAddress = getfake.ipAddress.privateNetwork192._168.any();
```

Range: 192.168.0.0 to 192.168.255.255

## ISBN

For fake ISBN.

```javascript
const isbn = getfake.isbn.v13.any();
```

Example: `978-0-46-222871-6`

Available functions `getfake.isbn.*`:

* `v13.any`

### v13.any

For fake ISBN-13.

```javascript
const isbn = getfake.isbn.v13.any(option);
```

Example: `978-0-46-222871-6`

Arguments:

* option
  * Type: `{formatted: boolean}`
  * Default: `{formatted: true}`


## Latitude

For fake latitude.

```javascript
const latitude = getfake.latitude.any(decimalPlaces);
```

Example: `-52.10329`

Arguments:

* decimalPlaces
  * Type: positive integer
  * Default: 2

## Longitude

For fake longitude.

```javascript
const longitude = getfake.longitude.any(decimalPlaces);
```

Example: `-100.77519`

Arguments:

* decimalPlaces
  * Type: positive integer
  * Default: 2

## MAC Address

For fake MAC address.

```javascript
const macAddress = getfake.macAddress.any();
```

Example: `89:e1:07:6a:6f:57`

## Name

For fake name.

```javascript
const firstName = getfake.name.any.firstName();
```

Example: `John`

Available name collection:

* `any`
* `english`
* `hebrew`
* `hindi`
* `hispanic`
* `middleEast`
* `slavic`
* `southAsian`
* `southEastAsian`

Available functions for the collections `getfake.name.*.*`:

* `firstName`
* `middleName`
* `lastName`
* `femaleName`
* `femaleFirstName`
* `femaleMiddleName`
* `maleName`
* `maleFirstName`
* `maleMiddleName`

## Number

For fake number.

```javascript
const intNumber = getfake.number.integer();
```

Example: `608189662`

Available functions `getfake.number.*`:

* `integer`
* `unsignedInteger`
* `float`
* `unsignedFloat`
* `asString`

### integer

```javascript
const intNumber = getfake.number.integer(min, max);
```

Example: `10`

Arguments:

* min
  * Type: integer
  * Default: -2147483647
* max
  * Type: integer
  * Default: 2147483647

### unsignedInteger

```javascript
const unsignedIntNumber = getfake.number.unsignedInteger(max);
```

Example: `10`

Arguments:

* max
  * Type: integer
  * Default: 2147483647

### float

```javascript
const floatNumber = getfake.number.float(min, max, decimal);
```

Example: `-268213349.13458`

Arguments:

* min
  * Type: integer
  * Default: -2147483647
* max
  * Type: integer
  * Default: 2147483647
* decimal
  * Type: positive integer
  * Default: 2

### unsignedFloat

```javascript
const unsignedFloatNumber = getfake.number.unsignedFloat(max, decimal);
```

Example: `268213349.13458`

Arguments:

* max
  * Type: integer
  * Default: 2147483647
* decimal
  * Type: positive integer
  * Default: 2

### asString

```javascript
const numberAsString = getfake.number.asString(totalNumberOfDigits, numberOfDecimalDigits);
```

Example: `49907897.34`

Arguments:

* totalNumberOfDigits
  * Type: positive integer
  * Default: 6
* numberOfDecimalDigits
  * Type: positive integer
  * Default: 0

## Phone

For fake phone number.

```javascript
const phone = getfake.phone.any(numberOfDigits);
```

Example: `1100000000`

Arguments:

* numberOfDigits
  * Type: positive integer
  * Default: 10

Available functions `getfake.phone.*`:

* `any`
* `formatted`

### formatted

Use this to get fake phone number with a given format.

The character `x` will be replaced with digit.

Example:

Following will generate phone number like `+91 11000 00000`.

```javascript
const result = getfake.phone.formatted('+91 11xxx xxxxx');
```

## Phrase

For fake phrase.

```javascript
const phrase = getfake.phrase.any(numberOfWords);
```

Example: `research depth food appointment cent`

Argument:

* numberOfWords
  * Type: positive integer
  * Default: 12

## Sentence

For fake sentence.

```javascript
const sentence = getfake.sentence.any(numberOfWords);
```

Example: `Keep calm and carry on.`

Argument:

* numberOfWords
  * Type: positive integer
  * If not set, then it will return sentence with some number of words.

## Time

For fake time.

```javascript
const timestamp = getfake.time.utcTimestamp();
```

Example: `2022-06-09T18:10:28.796Z`

Available functions `getfake.time.*`:

* `epoch`
* `epochInMicroSeconds`
* `fixedEpoch` - always returns a fixed value
* `zerothEpoch`
* `utcTimestamp`
* `fixedUtcTimestamp` - always returns a fixed value
* `zerothUtcTimestamp`
* `formattedDateTime`

### formattedDateTime

This takes format like the following.

```javascript
const datetime = getfake.time.formattedDateTime('MMMM DDD - DD/MM/YYYY hh:mm:ss.sss');
```

Example: `June Thu - 10/06/2022 23:41:01.633`

Where,

```text
YYYY - for year like 2022

MM - for month number 01-12

MMM - for month short name like Jan

MMMM - for month full name like January

DD - for date 01-31

DDD - for day short name like Mon

DDDD - for day full name like Monday

hh - for hour 00-23

mm - for minute 01-59

ss - for second 01-59

sss - for milliseconds 000-999
```

## UUID

For fake UUID.

```javascript
const uuid = getfake.uuid.any();
```

Example: `64c1539f-4600-718d-cfa5-b649bb5ffb00`

Available functions `getfake.uuid.*`:

* `any`
* `v4`
* `v5`

## Word

For fake word.

```javascript
const word = getfake.word.any();
```

Example: `recipe`

Available functions `getfake.word.*`:

* `any` - this will return any meaningful word
* `gibberish`


## Advance usage

## From JSON template

To generate fake JSON using template.

```javascript
const { getfake } = require('getfake');

const template = {
  data: {
    id: { $getfake: 'uuid.any' },
    user: {
      firstName: { $getfake: 'name.any.firstName' },
      middleName: { $getfake: 'name.any.middleName' },
      lastName: { $getfake: 'name.any.lastName' }
    },
    phone: {
      countryName: { $getfake: 'address.country.byCountryCode', args: ['IND'] },
      countryCode: 'IND',
      number: { $getfake: 'phone.any' },
      isVerified: true
    },
    createdAt: { $getfake: 'time.utcTimestamp' },
    items: [
      {
        id: { $getfake: 'uuid.any' },
        value: { $getfake: 'number.integer' }
      }
    ]
  }
};

const json = getfake.json.fromTemplate(template);
```

Output for the above template.

```json
{
  "data": {
    "id": "813c2fcd-4e9b-9ec3-485b-f6b14d684542",
    "user": {
      "firstName": "Palash",
      "middleName": "Russell",
      "lastName": "Fadel"
    },
    "phone": {
      "countryName": "India",
      "countryCode": "IND",
      "number": "9900000000",
      "isVerified": true
    },
    "createdAt": "2022-06-22T18:29:38.890Z",
    "items": [
      {
        "id": "000d8663-688e-2f10-04c4-bf48eb5252ee",
        "value": 1773046214
      }
    ]
  }
}
```

### Setting template using $getfake field

To set the value of a field we use something like the following.

```json
{
  "id": { "$getfake": "uuid.any" }
}
```

This is similar to `getfake.uuid.any()`.

So, the above template will give us the following result.

```json
{
  "id": "178be57a-9bd8-4ef2-8cbc-d6b6355a94d1"
}
```

### Passing arguments to $getfake function

In the following example we are passing argument.

```json
{
  "countryName": { "$getfake": "address.country.byCountryCode", "args": ["IND"] }
}
```

This is similar to `getfake.address.country.byCountryCode('IND')`

So, the above template will give us the following result.

```json
{
  "countryName": "India"
}
```

#### Another example.

```json
{
  "datetime": { "$getfake": "time.formattedDateTime", "args": ["MMMM DDD - DD/MM/YYYY hh:mm:ss.sss"] }
}
```

This one will give the following output.

```json
{
  "datetime": "June Thu - 24/06/2022 00:19:49.489"
}
```

## getfakeRepeat

Use `$getfakeRepeat` to repeat an `$item` for a specific number of `$times`.

```json
{
  "$getfakeRepeat": {
    "$times": "positive integer",
    "$item": "item to repeat"
  }
}
```

Where, `$item` can be string, boolean, number, nested object or array.

In the following example we will repeat the $item twice as $times is set to 2.

```js
const { getfake } = require('getfake');

const template = {
  users: {
    $getfakeRepeat: {
      $times: 2,
      $item: {
        id: { $getfake: 'uuid.any' },
        username: {
          firstName: { $getfake: 'name.any.firstName' },
          lastName: { $getfake: 'name.any.lastName' }
        }
      }
    }
  }
};

const json = getfake.json.fromTemplate(template);
```

This will give us the following output.

```json
{
  "users": [
    {
      "id": "34e611d4-a850-c793-3087-6638f50ba9f4",
      "username": {
        "firstName": "Jane",
        "lastName": "Doe"
      }
    },
    {
      "id": "5c3ff84d-ff90-4d5b-254d-e350a7592f84",
      "username": {
        "firstName": "John",
        "lastName": "Doe"
      }
    }
  ]
}
```

## License

It's free :smiley:

[MIT License](https://github.com/yusufshakeel/getfake/blob/main/LICENSE) Copyright (c) 2022 Yusuf Shakeel

## Donate

Feeling generous :smiley: [Donate via PayPal](https://www.paypal.me/yusufshakeel)