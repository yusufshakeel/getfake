# getfake

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/getfake)
[![npm version](https://img.shields.io/badge/npm-0.7.0-blue.svg)](https://www.npmjs.com/package/getfake)
[![npm Downloads](https://img.shields.io/npm/dm/getfake.svg)](https://www.npmjs.com/package/getfake)

This is a JavaScript project that will give fake values.

## Table of content

* [Getting started](#getting-started)
  * [Install](#install)
  * [Require](#require)
* [Functions](#functions)
  * [Email](#email)
  * [Hash](#hash)
  * [Name](#name)
  * [Phrase](#phrase)
  * [Sentence](#sentence)
  * [Time](#time)
  * [UUID](#uuid)


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

Available:

* `any`
* `md2`
* `md4`
* `md5`

#### SHA

For fake SHA hash.

```javascript
const hash = getfake.hash.sha.sha256();
```

Available:

* `sha1`
* `sha224`
* `sha256`
* `sha384`
* `sha512`

### Name

For fake name.

```javascript
const firstName = getfake.name.any.firstName();
const lastName = getfake.name.any.lastName();
const femaleName = getfake.name.any.femaleName();
const femaleFirstName = getfake.name.any.femaleFirstName();
const femaleMiddleName = getfake.name.any.femaleMiddleName();
```

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

Available functions:

* `firstName`
* `lastName`
* `femaleName`
* `femaleFirstName`
* `femaleMiddleName`
* `maleName`
* `maleFirstName`
* `maleMiddleName`

### Phrase

For fake phrase.

```javascript
const phrase = getfake.phrase.any(numberOfWords);
```

Argument:
* numberOfWords
  * Type: positive integer
  * Default: 12

### Sentence

For fake sentence.

```javascript
const sentence = getfake.sentence.any(numberOfWords);
```

Argument:
* numberOfWords
  * Type: positive integer
  * If not set, then it will return sentence with some number of words.

### Time

For fake time.

```javascript
const timestamp = getfake.time.utcTimestamp();
```

Available:

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

Example: 

For format `MMMM DDD - DD/MM/YYYY hh:mm:ss.sss` we will get `January Thu - 01/01/1970 00:10:20.123`

### UUID

For fake UUID.

```javascript
const uuid = getfake.uuid.any();
```

Available:

* `any`
* `v4`
* `v5`


## License

It's free :smiley:

[MIT License](https://github.com/yusufshakeel/getfake/blob/main/LICENSE) Copyright (c) 2022 Yusuf Shakeel

### Donate

Feeling generous :smiley: [Donate via PayPal](https://www.paypal.me/yusufshakeel)