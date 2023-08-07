import "./App.css";
import Balance from "./components/Balance";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import IncreaseDecrease from "./components/IncreaseDecrease";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Balance />
      <IncreaseDecrease />
      <ExpenseList />
    </div>
  );
}

export default App;
