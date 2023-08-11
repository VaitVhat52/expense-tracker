import { ImCross } from "react-icons/im";
import React from "react";

const Expense = (props) => {
  return (
    <div className="rounded-lg bg-neutral-focus p-3">
      <span className="flex justify-between">
        <button className="rounded-lg bg-red-600 p-2 align-bottom">
          <ImCross />
        </button>
        <p className="mt-1 inline">{props.text}</p>
        <p className="mt-1 inline">${props.amount.toFixed(2)}</p>
      </span>
    </div>
  );
};

export default Expense;
