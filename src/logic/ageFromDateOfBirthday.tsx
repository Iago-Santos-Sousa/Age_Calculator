import { MyFunction, VerifyBirthDate } from "../types/myTypes";

const verifyBirthDate: VerifyBirthDate = (months, currentDate, birthDate) => {
  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    return true;
  }
  return false;
};

const ageFromDateOfBirthday: MyFunction = (coreData, callback) => {
  const currentDate: Date = new Date();
  const parseData: string = `${coreData.dataYear}/${coreData.dataMonth}/${coreData.dataDay}`;
  const birthDate: Date = new Date(parseData);
  let age: number = currentDate.getFullYear() - birthDate.getFullYear();
  let months: number = currentDate.getMonth() - birthDate.getMonth();
  let days: number = birthDate.getDate() - currentDate.getDate();

  if (callback(months, currentDate, birthDate)) {
    // se o mês for menor que 0(número negativo) ou mês for igual a 0 e dia atual for menor que o dia do aniversário
    age--;
    days += +31;
    months += 12;
    return `Você tem ${age} anos de idade, ${months} meses, e restam ${days} dias para o seu aniversário!`;
  }

  return `Você tem: ${age} anos de idade!`;
};

export { ageFromDateOfBirthday, verifyBirthDate };
