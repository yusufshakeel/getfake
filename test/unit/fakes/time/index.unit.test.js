'use strict';

const time = require('../../../../src/fakes/time');

describe('Testing time', () => {
  describe('Testing UTC timestamp', () => {
    test('Should be able to return utc timestamp', () => {
      expect(time.utcTimestamp()).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
    });
  });

  describe('Testing fixed UTC timestamp', () => {
    test('Should be able to return utc timestamp', () => {
      expect(time.fixedUtcTimestamp()).toBe('2022-01-01T01:23:21.281Z');
    });
  });

  describe('Testing zeroth UTC timestamp', () => {
    test('Should be able to return utc timestamp', () => {
      expect(time.zerothUtcTimestamp()).toBe('1970-01-01T00:00:00.000Z');
    });
  });

  describe('Testing epoch', () => {
    test('Should be able to return epoch', () => {
      const epoch = time.epoch();
      expect(typeof epoch).toBe('number');
      expect(`${epoch}`).toMatch(/^\d+$/);
    });
  });

  describe('Testing fixed epoch', () => {
    test('Should be able to return epoch', () => {
      expect(time.fixedEpoch()).toBe(1604161316);
    });
  });

  describe('Testing zeroth epoch', () => {
    test('Should be able to return epoch', () => {
      expect(time.zerothEpoch()).toBe(0);
    });
  });

  describe('Testing date time', () => {
    test('Should be able to return formatted date time', () => {
      const datetime = time.formattedDateTime('MMM DDD, DD/MM/YYYY hh:mm:ss.sss');
      expect(datetime).toMatch(
        /^[\w]{3}\s[\w]{3},\s[\d]{2}\/[\d]{2}\/[\d]{4}\s[\d]{2}:[\d]{2}:[\d]{2}\.[\d]{3}$/
      );
    });

    describe('When passing custom date', () => {
      const fakeDateInstance = {
        getDate: () => 1,
        getMonth: () => 1,
        getDay: () => 1,
        getHours: () => 1,
        getMinutes: () => 1,
        getSeconds: () => 1,
        getMilliseconds: () => 1,
        getFullYear: () => 2022
      };

      describe('With 1 digit millisecond', () => {
        test('Should be able to return formatted date time', () => {
          const datetime = time.formattedDateTime(
            'MMM DDD, DD/MM/YYYY hh:mm:ss.sss',
            fakeDateInstance
          );
          expect(datetime).toMatch(
            /^[\w]{3}\s[\w]{3},\s[\d]{2}\/[\d]{2}\/[\d]{4}\s[\d]{2}:[\d]{2}:[\d]{2}\.[\d]{3}$/
          );
        });
      });

      describe('With 2 digit millisecond', () => {
        test('Should be able to return formatted date time', () => {
          const datetime = time.formattedDateTime('MMM DDD, DD/MM/YYYY hh:mm:ss.sss', {
            ...fakeDateInstance,
            getDate: () => 10,
            getMonth: () => 10,
            getMinutes: () => 10,
            getSeconds: () => 10,
            getHours: () => 10,
            getMilliseconds: () => 10
          });
          expect(datetime).toMatch(
            /^[\w]{3}\s[\w]{3},\s[\d]{2}\/[\d]{2}\/[\d]{4}\s[\d]{2}:[\d]{2}:[\d]{2}\.[\d]{3}$/
          );
        });
      });

      describe('With 3 digit millisecond', () => {
        test('Should be able to return formatted date time', () => {
          const datetime = time.formattedDateTime('MMM DDD, DD/MM/YYYY hh:mm:ss.sss', {
            ...fakeDateInstance,
            getDate: () => 10,
            getMonth: () => 10,
            getMinutes: () => 10,
            getSeconds: () => 10,
            getHours: () => 10,
            getMilliseconds: () => 123
          });
          expect(datetime).toMatch(
            /^[\w]{3}\s[\w]{3},\s[\d]{2}\/[\d]{2}\/[\d]{4}\s[\d]{2}:[\d]{2}:[\d]{2}\.[\d]{3}$/
          );
        });
      });
    });
  });
});
