'use strict';

const nameFactory = require('../../../../src/fakes/name/names-factory');

describe('Testing name factory', () => {
  const source = {
    name: { female: ['Jane'], male: ['John'] },
    lastName: ['Doe']
  };

  test('Should be able to return name factory methods', () => {
    const any = nameFactory(source);
    expect(any.femaleName()).toBe('Jane');
    expect(any.femaleFirstName()).toBe('Jane');
    expect(any.femaleMiddleName()).toBe('Jane');
    expect(any.maleName()).toBe('John');
    expect(any.maleFirstName()).toBe('John');
    expect(any.maleMiddleName()).toBe('John');
    expect(any.lastName()).toBe('Doe');
    expect(['Jane', 'John'].includes(any.firstName())).toBeTruthy();
  });
});
