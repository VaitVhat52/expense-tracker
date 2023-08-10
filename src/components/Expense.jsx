import { ImCross } from "react-icons/im";
import React from "react";

const Expense = () => {
  return (
    <div className="rounded-lg bg-neutral-focus p-3">
      <span className="flex justify-between">
        <button className="rounded-lg bg-red-600 p-2 align-bottom">
          <ImCross />
        </button>
        <p className="mt-1 inline">Text</p>
        <p className="mt-1 inline">$XX.XX</p>
      </span>
    </div>
  );
};

export default Expense;
