import allFakesExceptJson from './all-fakes-expect-json';
import json from './fakes/json';

const getfake = { ...allFakesExceptJson, json };

export default getfake;