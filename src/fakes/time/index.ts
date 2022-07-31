import {
  TIME_FIXED_EPOCH,
  TIME_FIXED_UTC_TIMESTAMP,
  TIME_ZEROTH_EPOCH,
  TIME_ZEROTH_EPOCH_UTC_TIMESTAMP,
  MONTH_SHORT_NAME,
  MONTH_FULL_NAME,
  DAY_SHORT_NAME,
  DAY_FULL_NAME
} from '../../constants';

import { DateInstanceType } from '../../ts-def/time/date-instance-type';

function utcTimestamp(): string {
  return new Date().toISOString();
}

function fixedUtcTimestamp(): string {
  return TIME_FIXED_UTC_TIMESTAMP;
}

function zerothUtcTimestamp(): string {
  return TIME_ZEROTH_EPOCH_UTC_TIMESTAMP;
}

function epoch(): number {
  const date = new Date();
  return Math.floor(+date / 1000);
}

function epochInMicroSeconds(): number {
  const date = new Date();
  return Math.floor(+date);
}

function fixedEpoch(): number {
  return TIME_FIXED_EPOCH;
}

function zerothEpoch(): number {
  return TIME_ZEROTH_EPOCH;
}

/**
 * This will return the data time as per the format passed.
 *
 * Format string can have the following placeholders.
 *
 * YYYY - for year
 *
 * MM - for month number 1-12
 *
 * MMM - for month short name like Jan
 *
 * MMMM - for month full name like January
 *
 * DD - for date 1-31
 *
 * DDD - for day short name like Mon
 *
 * DDDD - for day full name like Monday
 *
 * hh - for hour
 *
 * mm - for minute
 *
 * ss - for second
 *
 * sss - for milliseconds
 *
 * Example: "MMMM DDD - DD/MM/YYYY hh:mm:ss.sss" will give output like
 * "January Thu - 01/01/1970 00:10:20.123"
 *
 * @param {string} format
 * @param {Date} dateInstance
 * @returns {string}
 */
function formattedDateTime(format: string, dateInstance: DateInstanceType = new Date()): string {
  const date = String(dateInstance.getDate() + 1).padStart(2, '0');
  const month = String(dateInstance.getMonth() + 1).padStart(2, '0');
  const hours = String(dateInstance.getHours()).padStart(2, '0');
  const minutes = String(dateInstance.getMinutes()).padStart(2, '0');
  const seconds = String(dateInstance.getSeconds()).padStart(2, '0');
  const milliSeconds = String(dateInstance.getMilliseconds()).padStart(3, '0');

  return format
    .replace('DDD', DAY_SHORT_NAME[dateInstance.getDay()])
    .replace('DDDD', DAY_FULL_NAME[dateInstance.getDay()])
    .replace('YYYY', String(dateInstance.getFullYear()))
    .replace('MMMM', MONTH_FULL_NAME[dateInstance.getMonth()])
    .replace('MMM', MONTH_SHORT_NAME[dateInstance.getMonth()])
    .replace('hh', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
    .replace('sss', milliSeconds)
    .replace('MM', month)
    .replace('DD', date);
}

export default {
  utcTimestamp,
  epoch,
  epochInMicroSeconds,
  fixedUtcTimestamp,
  fixedEpoch,
  zerothUtcTimestamp,
  zerothEpoch,
  formattedDateTime
};