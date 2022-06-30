import React from "react";
import Button from "./button";

const Modal = ({
  active,
  setActive,
  openModal,
  handleInvested,
  title,
  available,
  annualised_return,
  term_remaining,
  ltv,
  amount,
  loanAvailable,
  loanAvailableDeduct,
}) => {
  const allFunc = (a) => {
    handleInvested(true);
    loanAvailableDeduct(a);
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content__name">Invest in Loan</div>
        <div className="modal-content__descr">
          <div className="modal-content__descr__title">{title}</div>
          <div className="modal-content__descr__amount">
            Amount available: ${loanAvailable}
          </div>
          <div className="modal-content__descr__ends">
            Loan ends in: {Math.floor(Number(term_remaining) / 2629746)} month{" "}
            {Math.floor(Number(term_remaining) / 86400)} days
          </div>
        </div>
        <div className="modal-content__invest">
          <div className="modal-content__invest__amount">Investment amount</div>
          <div className="modal-content__invest__form">
            <form className="modal-content__invest__form-block">
              <input
                type="text"
                id="fname"
                placeholder="Input amount of money"
              />
            </form>
            <span onClick={() => allFunc(100)}>
              <Button openModal={openModal} />
            </span>
          </div>
          <span
            onClick={() => setActive(false)}
            className="modal-content__invest__cross"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 8L8 24"
                stroke="#303247"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8L24 24"
                stroke="#303247"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
