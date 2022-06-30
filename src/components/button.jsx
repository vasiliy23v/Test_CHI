import React from "react";

const Button = ({ openModal }) => {
  return (
    <div
      className="main__card-block__func__button"
      onClick={() => {
        openModal();
      }}
    >
      invest
    </div>
  );
};

export default Button;
