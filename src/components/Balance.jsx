import React from "react";

const Balance = (props) => {
  return (
    <div>
      <h2 className="mt-14 text-center text-3xl">
        Balance: ${props.balance.toFixed(2)}
      </h2>
    </div>
  );
};

export default Balance;
