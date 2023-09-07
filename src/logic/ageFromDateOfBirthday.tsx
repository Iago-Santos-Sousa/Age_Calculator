import { MyFunction } from "../types/myTypes";

const ageFromDateOfBirthday: MyFunction = (coreData) => {
  const currentDate: Date = new Date();
  const parseData: string = `${coreData.dataYear}/${coreData.dataMonth}/${coreData.dataDay}`;
  const birthDate: Date = new Date(parseData);
  let age: number = currentDate.getFullYear() - birthDate.getFullYear();
  let months: number = currentDate.getMonth() - birthDate.getMonth();

  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return `Você tem ${age} anos de idade.`;
};

export { ageFromDateOfBirthday };
