'use strict';

const json = require('../../../../src/fakes/json');

describe('Testing JSON', () => {
  describe('Testing fromTemplate', () => {
    describe('When template is a json', () => {
      test('Should be able to generate json from template', () => {
        const template = {
          data: {
            id: { $getfake: 'uuid.any' },
            user: {
              firstName: { $getfake: 'name.any.firstName' },
              lastName: { $getfake: 'name.any.lastName' },
              middleName: { $getfake: 'name.any.middleName' }
            },
            phone: {
              country: { $getfake: 'address.country.byCountryCode', args: ['IND'] },
              countryCode: 'IND',
              number: { $getfake: 'phone.any' },
              isVerified: true
            },
            message: { $getfake: 'time.utcTimestamp' },
            items: [
              {
                id: { $getfake: 'uuid.any' },
                vales: [1, 2, { $getfake: 'uuid.any' }, 4]
              },
              {
                id: { $getfake: 'uuid.any' },
                vales: [
                  1,
                  2,
                  {
                    id: { $getfake: 'uuid.any' },
                    vales: [1, 2, { $getfake: 'uuid.any' }, 4]
                  },
                  4
                ]
              }
            ]
          }
        };
        expect(json.fromTemplate(template)).toStrictEqual({
          data: {
            id: expect.any(String),
            user: {
              firstName: expect.any(String),
              lastName: expect.any(String),
              middleName: expect.any(String)
            },
            phone: {
              country: 'India',
              countryCode: 'IND',
              number: expect.any(String),
              isVerified: true
            },
            message: expect.any(String),
            items: [
              {
                id: expect.any(String),
                vales: [1, 2, expect.any(String), 4]
              },
              {
                id: expect.any(String),
                vales: [
                  1,
                  2,
                  {
                    id: expect.any(String),
                    vales: [1, 2, expect.any(String), 4]
                  },
                  4
                ]
              }
            ]
          }
        });
      });
    });

    describe('When there is no template', () => {
      test('Should return input as is', () => {
        expect(json.fromTemplate('Hello')).toBe('Hello');
      });
    });
  });
});
