type MainType = {
  coreData: {
    dataDay: number | null;
    dataMonth: number | null;
    dataYear: number | null;
  };
  setValue: (day: number) => void;
  setValue2: (day: number) => void;
  setValue3: (day: number) => void;
  showValue: () => void;
  showData: boolean;
  messageError: string | null;
};

export type VerifyBirthDate = (
  months: number,
  currentDate: Date,
  birthDate: Date
) => boolean;

export type CoreData = {
  dataDay: number | null;
  dataMonth: number | null;
  dataYear: number | null;
};

export type CallBack = (
  months: number,
  currentDate: Date,
  birthDate: Date
) => boolean;

export type MyFunction = (coreData: CoreData, callback: CallBack) => string;

export default MainType;
