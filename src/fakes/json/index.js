'use strict';

const getfake = require('../../all-fakes-expect-json');

function fromTemplate(obj) {
  if (typeof obj === 'object') {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value === 'object') {
        if (value['$getfake']) {
          const args = value['args'] ?? [];
          const gfFunctions = value['$getfake'].split('.');
          obj[key] = gfFunctions.reduce((result, current) => {
            return result[current];
          }, getfake)(...args);
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

module.exports = { fromTemplate };
