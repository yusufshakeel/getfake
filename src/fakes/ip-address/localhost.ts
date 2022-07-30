import randInt from '../../helpers/random-integer';

export default function localhost() {
  const any = (): string => {
    return `127.${randInt(0, 255)}.${randInt(0, 255)}.${randInt(0, 255)}`;
  };

  return { any };
}