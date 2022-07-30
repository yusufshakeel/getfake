import randomFloat from '../../helpers/random-float';
import { DEFAULT_NUMBER_OF_DECIMAL_PLACE } from '../../constants';

function any(decimalPlaces = DEFAULT_NUMBER_OF_DECIMAL_PLACE): number {
  return randomFloat(-90, 90, decimalPlaces);
}

export default { any };