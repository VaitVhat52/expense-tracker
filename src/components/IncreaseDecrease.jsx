import React from "react";

const IncreaseDecrease = () => {
  return (
    <>
      <div className="mx-[30%] mt-5 flex justify-center gap-1 rounded-t-lg bg-secondary-content p-4">
        <span className="text-2xl">Increase</span>
        <div className="divider divider-vertical h-9"></div>
        <span className="text-2xl">Decrease</span>
      </div>
      <div className="mx-[30%] flex justify-center gap-1 bg-secondary-content p-4">
        <span className="text-2xl text-green-600">$XX.XX</span>
        <span className="ml-[12%] text-2xl text-red-600">$XX.XX</span>
      </div>
    </>
  );
};

export default IncreaseDecrease;
