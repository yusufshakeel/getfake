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
function formattedDateTime(format: string, dateInstance: Date = new Date()): string {
  const getMilliseconds = (millisecondsString: string): string => {
    if (millisecondsString.length === 1) {
      return `00${millisecondsString}`;
    } else if (`${millisecondsString}`.length === 2) {
      return `0${millisecondsString}`;
    }
    return millisecondsString;
  };

  const date = dateInstance.getDate() + 1;
  const month = dateInstance.getMonth() + 1;

  return format
    .replace('DDD', DAY_SHORT_NAME[dateInstance.getDay()])
    .replace('DDDD', DAY_FULL_NAME[dateInstance.getDay()])
    .replace('YYYY', dateInstance.getFullYear())
    .replace('MMMM', MONTH_FULL_NAME[dateInstance.getMonth()])
    .replace('MMM', MONTH_SHORT_NAME[dateInstance.getMonth()])
    .replace(
      'hh',
      `${dateInstance.getHours()}`.length === 1
        ? `0${dateInstance.getHours()}`
        : dateInstance.getHours()
    )
    .replace(
      'mm',
      `${dateInstance.getMinutes()}`.length === 1
        ? `0${dateInstance.getMinutes()}`
        : dateInstance.getMinutes()
    )
    .replace(
      'ss',
      `${dateInstance.getSeconds()}`.length === 1
        ? `0${dateInstance.getSeconds()}`
        : dateInstance.getSeconds()
    )
    .replace('sss', getMilliseconds(`${dateInstance.getMilliseconds()}`))
    .replace('MM', `${month}`.length === 1 ? `0${month}` : month)
    .replace('DD', `${date}`.length === 1 ? `0${date}` : date);
}

module.exports = {
  utcTimestamp,
  epoch,
  epochInMicroSeconds,
  fixedUtcTimestamp,
  fixedEpoch,
  zerothUtcTimestamp,
  zerothEpoch,
  formattedDateTime
};