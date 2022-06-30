import React from "react";
const TotalAmount = ({}) => {
  return (
    <div className="total-amount">
      <div className="total-amount__left">
        Total amount available for investment:
      </div>
      <div className="total-amount__right">$ {}</div>
    </div>
  );
};

export default TotalAmount;
