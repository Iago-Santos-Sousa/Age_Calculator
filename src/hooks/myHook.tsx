import { useState } from "react";
import MainType from "../types/myTypes";

const myHook = (): MainType => {
  const [dataDay, setDataDay] = useState<number | null>(null);
  const [dataMonth, setDataMonth] = useState<number | null>(null);
  const [dataYear, setDataYear] = useState<number | null>(null);
  const [showData, setShowData] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>("");

  const setValue = (day: number): void => {
    setDataDay(day);
  };

  const setValue2 = (month: number): void => {
    setDataMonth(month);
  };

  const setValue3 = (year: number): void => {
    setDataYear(year);
  };

  const showValue = (): void => {
    if (!dataDay || !dataMonth || !dataYear) {
      console.log(dataDay, dataMonth, dataYear);
      setMessageError("Informe todos os campos!");
      return;
    }
    console.log(dataDay, dataMonth, dataYear);
    return setShowData(true);
  };

  return {
    coreData: {
      dataDay,
      dataMonth,
      dataYear,
    },
    setValue,
    setValue2,
    setValue3,
    showValue,
    showData,
    messageError,
  };
};

export default myHook;
