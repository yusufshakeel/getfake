import getFakeFunctions from '../../all-fakes-expect-json';
import { JSON_TEMPLATE } from '../../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deepClone = (v: any): string => JSON.parse(JSON.stringify(v));

// eslint-disable-next-line @typescript-eslint/no-explicit-any,complexity
function fromTemplate(obj: any) {
  if (obj === null || obj === undefined) {
    return obj;
  } else if (typeof obj === 'object') {
    if (obj[JSON_TEMPLATE.$GETFAKE_REPEAT]) {
      const { $times, $item } = obj[JSON_TEMPLATE.$GETFAKE_REPEAT];
      const repeatResult = [];
      for (let i = 1; i <= $times; i++) {
        typeof $item === 'object' ? repeatResult.push(fromTemplate(deepClone($item))) : repeatResult.push(fromTemplate($item));
      }
      obj = repeatResult;
    } else if (obj[JSON_TEMPLATE.$GETFAKE]) {
      const args = obj['args'] ?? [];
      const gfFunctions = obj[JSON_TEMPLATE.$GETFAKE].split('.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      obj = gfFunctions.reduce((result: any, current: any) => {
        return result[current];
      }, getFakeFunctions)(...args);
    } else {
      for (const key in obj) {
        const value = obj[key];
        obj[key] = typeof value === 'object' ? fromTemplate(value) : value;
      }
    }
  }
  return obj;
}

export default { fromTemplate };