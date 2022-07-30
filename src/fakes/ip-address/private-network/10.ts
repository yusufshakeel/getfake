import randInt from '../../../helpers/random-integer';

export default function privateNetwork10() {
  const any = (): string => {
    return `10.${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}`;
  };

  return { any };
}