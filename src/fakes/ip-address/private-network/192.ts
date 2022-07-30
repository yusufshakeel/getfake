import randInt from '../../../helpers/random-integer';

export default function privateNetwork192() {
  const _168 = {
    any: (): string => {
      return `192.168.${randInt(0, 255)}.${randInt(0, 255)}`;
    }
  };

  return { _168 };
}