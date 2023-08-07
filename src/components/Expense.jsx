import React from "react";

const Expense = () => {
  return (
    <div className="bg-neutral-focus p-3 rounded-lg">
      <span className="flex justify-between">
        <button className="bg-red-600 px-2 py-1 rounded-lg align-bottom">
          X
        </button>
        <p className="inline mt-1">Text</p>
        <p className="inline mt-1">$XX.XX</p>
      </span>
    </div>
  );
};

export default Expense;
