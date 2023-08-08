import React from "react";
import Expense from "./Expense";

const ExpenseList = () => {
  return (
    <div className="expenseList flex flex-col gap-3 max-h-72 overflow-scroll bg-secondary-content p-4 mx-[30%] rounded-b-lg">
      <Expense />
      <Expense />
      <Expense />
      <Expense />
      <Expense />
      <Expense />
      <Expense />
      <Expense />
    </div>
  );
};

export default ExpenseList;
