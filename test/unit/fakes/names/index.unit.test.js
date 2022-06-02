'use strict';

const name = require('../../../../src/fakes/name');

describe('Testing name', () => {
  test('Should be able to generate any name', () => {
    const firstName = name.any.femaleFirstName();
    const lastName = name.any.lastName();
    expect(firstName.length).toBeGreaterThan(1);
    expect(lastName.length).toBeGreaterThan(1);
  });
});
