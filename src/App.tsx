import "./App.css";
import DaysOptions from "./components/DaysOptions";
import MonthsOptions from "./components/MonthsOptions";
import YearsOptions from "./components/YearsOptions";
import myHook from "./hooks/myHook";
import {
  verifyBirthDate,
  ageFromDateOfBirthday,
} from "./logic/ageFromDateOfBirthday";
import MyContext from "./context/MyContext";
import MainType from "./types/myTypes";

function App() {
  const {
    coreData,
    setValue,
    setValue2,
    setValue3,
    showData,
    showValue,
    messageError,
  } = myHook();

  const providerValues: MainType = {
    coreData,
    setValue,
    setValue2,
    setValue3,
    showData,
    showValue,
    messageError,
  };

  const age: string = ageFromDateOfBirthday(coreData, verifyBirthDate);

  return (
    <MyContext.Provider value={providerValues}>
      <div className="App">
        <h1>Calculadora de idade</h1>
        <div className="inputs-wrapper">
          <DaysOptions />
          <MonthsOptions />
          <YearsOptions />
        </div>
        <button className="bnt-show" onClick={() => showValue()}>
          Calcule a sua idade.
        </button>
        {showData ? (
          <p className="success-message">{age}</p>
        ) : messageError ? (
          <p className="error-message">{messageError}</p>
        ) : null}
      </div>
    </MyContext.Provider>
  );
}

export default App;
