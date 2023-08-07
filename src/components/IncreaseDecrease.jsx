import React from "react";

const IncreaseDecrease = () => {
  return (
    <>
      <div className="flex gap-1 justify-center mt-5 bg-secondary-content p-4 mx-[30%]">
        <span className="text-2xl">Increase</span>
        <div className="divider divider-horizontal" />
        <span className="text-2xl">Decrease</span>
      </div>
      <div className="flex gap-1 justify-center bg-secondary-content p-4 mx-[30%]">
        <span className="text-2xl text-green-600">$XX.XX</span>
        <div className="divider divider-horizontal" />
        <span className="text-2xl text-red-600">$XX.XX</span>
      </div>
    </>
  );
};

export default IncreaseDecrease;
