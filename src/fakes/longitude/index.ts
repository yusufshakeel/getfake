import randomFloat from '../../helpers/random-float';
import { DEFAULT_NUMBER_OF_DECIMAL_PLACE } from '../../constants';

function any(decimalPlaces = DEFAULT_NUMBER_OF_DECIMAL_PLACE): number {
  return randomFloat(-180, 180, decimalPlaces);
}

export default { any };