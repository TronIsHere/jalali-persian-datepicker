import "./App.css";
import JalaliPersianDatePicker from "./components/JalaliPersianDate";

function App() {
  return (
    <>
      <JalaliPersianDatePicker
        selected={{ jy: 1400, jm: 1, jd: 1 }}
        onSelect={(date) => console.log(date)}
      />
    </>
  );
}

export default App;
