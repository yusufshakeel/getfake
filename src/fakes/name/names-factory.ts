import randInt from '../../helpers/random-integer';

type NameObject = { female: string[], male: string[] };
type SourceObject = { name: NameObject, lastName: string[] };

export default function namesFactory(source: SourceObject) {
  const pickName = (name: string[]): string => {
    const totalNames = name.length;
    return name[randInt(0, totalNames - 1)];
  };

  const femaleFirstName = (): string => {
    return pickName(source.name.female);
  };

  const femaleMiddleName = (): string => {
    return femaleFirstName();
  };

  const femaleName = (): string => {
    return femaleFirstName();
  };

  const maleFirstName = (): string => {
    return pickName(source.name.male);
  };

  const maleMiddleName = (): string => {
    return maleFirstName();
  };

  const maleName = (): string => {
    return maleFirstName();
  };

  const lastName = (): string => {
    return pickName(source.lastName);
  };

  const firstName = (): string => {
    return pickName([...source.name.female, ...source.name.male]);
  };

  const middleName = (): string => {
    return firstName();
  };

  return {
    firstName,
    middleName,
    lastName,
    femaleName,
    femaleFirstName,
    femaleMiddleName,
    maleName,
    maleFirstName,
    maleMiddleName
  };
}