import React from "react";
import Expense from "./Expense";

const ExpenseList = () => {
  return (
    <div className="expenseList mx-[30%] flex max-h-72 flex-col gap-3 overflow-scroll rounded-b-lg bg-secondary-content p-4">
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
