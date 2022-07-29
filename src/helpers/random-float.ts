import { DEFAULT_NUMBER_OF_DECIMAL_PLACE } from '../constants';

/**
 * This will return a float value between min and max both inclusive.
 * @param {number} min The starting float value.
 * @param {number} max The ending float value.
 * @param {number} decimals The decimal place.
 * @returns {number} Random float value between min and max both inclusive.
 */
export default function randomFloat(
  min: number,
  max: number,
  decimals: number = DEFAULT_NUMBER_OF_DECIMAL_PLACE
): number {
  return parseFloat(
    (Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)).toFixed(decimals)
  );
}