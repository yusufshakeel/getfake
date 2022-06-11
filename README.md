# getfake

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/getfake)
[![npm version](https://img.shields.io/badge/npm-0.17.0-blue.svg)](https://www.npmjs.com/package/getfake)
[![npm Downloads](https://img.shields.io/npm/dm/getfake.svg)](https://www.npmjs.com/package/getfake)

This is a JavaScript project that will give fake values.

## Table of content

* [Getting started](#getting-started)
  * [Install](#install)
  * [Require](#require)
* [Functions](#functions)
  * [Email](#email)
  * [Hash](#hash)
  * [IP Address](#ip-address)
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
const getfake = require('getfake');
```

## Functions

### Email

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


### Hash

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

#### SHA

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

### IP Address

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

#### any

```javascript
const ipAddress = getfake.ipAddress.any();
```

Range: 0.0.0.0 to 255.255.255.255

#### localhost

```javascript
const ipAddress = getfake.ipAddress.localhost.any();
```

Available functions `getfake.ipAddress.localhost.*`:

* `any` - Range: 127.0.0.0 to 127.255.255.255

#### privateNetwork10

```javascript
const ipAddress = getfake.ipAddress.privateNetwork10.any();
```

Range: 10.0.0.0 to 10.255.255.255

#### privateNetwork192._168

```javascript
const ipAddress = getfake.ipAddress.privateNetwork192._168.any();
```

Range: 192.168.0.0 to 192.168.255.255

### Latitude

For fake latitude.

```javascript
const latitude = getfake.latitude.any(decimalPlaces);
```

Example: `-52.10329`

Arguments:

* decimalPlaces
  * Type: positive integer
  * Default: 2

### Longitude

For fake longitude.

```javascript
const longitude = getfake.longitude.any(decimalPlaces);
```

Example: `-100.77519`

Arguments:

* decimalPlaces
  * Type: positive integer
  * Default: 2

### MAC Address

For fake MAC address.

```javascript
const macAddress = getfake.macAddress.any();
```

Example: `89:e1:07:6a:6f:57`

### Name

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

### Number

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

#### float

```javascript
const floatNumber = getfake.number.float(decimal);
```

Example: `-268213349.13458`

Arguments:

* decimal
  * Type: positive integer
  * Default: 2

#### unsignedFloat

```javascript
const unsignedFloatNumber = getfake.number.unsignedFloat(decimal);
```

Example: `268213349.13458`

Arguments:

* decimal
  * Type: positive integer
  * Default: 2

#### asString

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

### Phone

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

#### formatted

Use this to get fake phone number with a given format.

The character `x` will be replaced with digit.

Example:

Following will generate phone number like `+91 11000 00000`.

```javascript
const result = getfake.phone.formatted('+91 11xxx xxxxx');
```

### Phrase

For fake phrase.

```javascript
const phrase = getfake.phrase.any(numberOfWords);
```

Example: `research depth food appointment cent`

Argument:

* numberOfWords
  * Type: positive integer
  * Default: 12

### Sentence

For fake sentence.

```javascript
const sentence = getfake.sentence.any(numberOfWords);
```

Example: `Keep calm and carry on.`

Argument:

* numberOfWords
  * Type: positive integer
  * If not set, then it will return sentence with some number of words.

### Time

For fake time.

```javascript
const timestamp = getfake.time.utcTimestamp();
```

Example: `2022-06-09T18:10:28.796Z`

Available functions `getfake.time.*`:

* `epoch`
* `fixedEpoch` - always returns a fixed value
* `zerothEpoch`
* `utcTimestamp`
* `fixedUtcTimestamp` - always returns a fixed value
* `zerothUtcTimestamp`
* `formattedDateTime`

#### formattedDateTime

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

### UUID

For fake UUID.

```javascript
const uuid = getfake.uuid.any();
```

Example: `64c1539f-4600-718d-cfa5-b649bb5ffb00`

Available functions `getfake.uuid.*`:

* `any`
* `v4`
* `v5`

### Word

For fake word.

```javascript
const word = getfake.word.any();
```

Example: `recipe`

Available functions `getfake.word.*`:

* `any` - this will return any meaningful word
* `gibberish`


## License

It's free :smiley:

[MIT License](https://github.com/yusufshakeel/getfake/blob/main/LICENSE) Copyright (c) 2022 Yusuf Shakeel

### Donate

Feeling generous :smiley: [Donate via PayPal](https://www.paypal.me/yusufshakeel)