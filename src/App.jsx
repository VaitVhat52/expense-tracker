import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import IncreaseDecrease from "./components/IncreaseDecrease";
import Form from "./components/Form";

function App() {
  const [expenseItems, setExpenseItems] = useState([
    {
      id: 1,
      text: "Test 1",
      amount: 12.21,
    },
    {
      id: 2,
      text: "Test 2",
      amount: 12.22,
    },
    {
      id: 3,
      text: "Test 3",
      amount: 32.21,
    },
    {
      id: 4,
      text: "Test 4",
      amount: 150.21,
    },
    {
      id: 5,
      text: "Test 5",
      amount: 12.71,
    },
  ]);

  return (
    <div className="flex flex-col">
      <Header />
      <Balance />
      <IncreaseDecrease />
      <ExpenseList expenseItems={expenseItems} />
      <Form />
    </div>
  );
}

export default App;
