import Header from "./components/Header/Header";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import "./index.css";

function App() {
  return (
    <>
      <div className="main-app">
        <Header />
        <CurrencyConverter />
      </div>
    </>
  );
}

export default App;
