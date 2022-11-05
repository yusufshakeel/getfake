import json from '../../../../src/fakes/json';

describe('Testing JSON', () => {
  describe('Testing fromTemplate', () => {
    describe('When template is a json', () => {
      describe('When using simple template', () => {
        test('Should be able to generate simple values', () => {
          const template = { $getfake: 'word.any' };
          expect(json.fromTemplate(template)).toStrictEqual(expect.any(String));
        });

        test('Should be able to generate nested values', () => {
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

      describe('When using repeat', () => {
        test('Should be able to repeat simple values', () => {
          const template = {
            $getfakeRepeat: {
              $times: 2,
              $item: { $getfake: 'word.any' }
            }
          };

          expect(json.fromTemplate(template)).toStrictEqual([
            expect.any(String),
            expect.any(String)
          ]);
        });

        test('Should be able to repeat nested values', () => {
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
            },
            repeatConstantValues: {
              $getfakeRepeat: {
                $times: 5,
                $item: 'HAPPY'
              }
            },
            constantValues: ['hello', 'world']
          };

          expect(json.fromTemplate(template)).toStrictEqual({
            constantValues: [
              'hello',
              'world'
            ],
            repeatConstantValues: [
              'HAPPY',
              'HAPPY',
              'HAPPY',
              'HAPPY',
              'HAPPY'
            ],
            users: [
              {
                id: expect.any(String),
                username: {
                  firstName: expect.any(String),
                  lastName: expect.any(String)
                }
              },
              {
                id: expect.any(String),
                username: {
                  firstName: expect.any(String),
                  lastName: expect.any(String)
                }
              }
            ]
          });
        });
      });
    });

    describe('When there is no template', () => {
      test('Should return input as is', () => {
        expect(json.fromTemplate('Hello')).toBe('Hello');
        expect(json.fromTemplate(1)).toBe(1);
        expect(json.fromTemplate(true)).toBe(true);
        expect(json.fromTemplate(null)).toBe(null);
        expect(json.fromTemplate(undefined)).toBe(undefined);
        expect(json.fromTemplate({ a: 1 })).toStrictEqual({ a: 1 });
        expect(json.fromTemplate([1, 'a', true])).toStrictEqual([1, 'a', true]);
      });
    });
  });
});