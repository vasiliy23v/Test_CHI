import React from "react";
const TotalAmount = ({ sumFunc }) => {
  return (
    <div className="total-amount">
      <div className="total-amount__left">
        Total amount available for investment:
      </div>
      <div className="total-amount__right">${238456}</div>
    </div>
  );
};

export default TotalAmount;
