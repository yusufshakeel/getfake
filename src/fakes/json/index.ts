import getFakeFunctions from '../../all-fakes-expect-json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromTemplate(obj: any) {
  if (typeof obj === 'object') {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object') {
        if (value['$getfake']) {
          const args = value['args'] ?? [];
          const gfFunctions = value['$getfake'].split('.');
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          obj[key] = gfFunctions.reduce((result: any, current: any) => {
            return result[current];
          }, getFakeFunctions)(...args);
        } else {
          fromTemplate(value);
        }
      } else {
        obj[key] = value;
      }
    }
  }
  return obj;
}

export default { fromTemplate };