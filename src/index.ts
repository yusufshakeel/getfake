import allFakesExceptJson from './all-fakes-expect-json';
import json from './fakes/json';

export const getfake = { ...allFakesExceptJson, json };
export default getfake;