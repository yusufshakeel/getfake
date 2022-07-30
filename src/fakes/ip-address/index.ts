import randInt from '../../helpers/random-integer';
import localhost from './localhost';
import privateNetwork10 from './private-network/10';
import privateNetwork192 from './private-network/192';

function any(): string {
  return `${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}`;
}

module.exports = {
  any,
  localhost: localhost(),
  privateNetwork10: privateNetwork10(),
  privateNetwork192: privateNetwork192()
};