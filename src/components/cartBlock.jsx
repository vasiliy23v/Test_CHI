import React, { useState } from "react";
import Button from "./button";
import Modal from "./modal";

const CartBlock = ({
  title,
  id,
  available,
  term_remaining,
  ltv,
  amount,
  /*takeState,*/
}) => {
  const [invested, setInvested] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  let [loanAvailable, setLoanAvailable] = useState(
    Number(available.replace(",", ""))
  );

  const loanAvailableDeduct = (sum) => {
    setLoanAvailable((loanAvailable -= sum));
    /*takeState(loanAvailable);*/
  };
  const handleInvested = () => {
    setInvested(true);
  };

  const handleOpenModal = () => {
    setModalActive(modalActive === true ? false : true);
  };

  return (
    <section className="main__card-block">
      <div className="main__card-block__text">
        <div className="main__card-block__text__name">{title}</div>
        <div className="main__card-block__text__descr">
          Loan details and values
        </div>
      </div>
      <div className="main__card-block__func">
        <div
          className={
            invested == true
              ? "main__card-block__func__state active"
              : "main__card-block__func__state"
          }
        >
          Invested
        </div>
        <Button openModal={handleOpenModal} />
      </div>
      <Modal
        key={id}
        active={modalActive}
        setActive={setModalActive}
        openModal={handleOpenModal}
        handleInvested={handleInvested}
        title={title}
        available={available}
        term_remaining={term_remaining}
        ltv={ltv}
        amount={amount}
        loanAvailable={loanAvailable}
        loanAvailableDeduct={loanAvailableDeduct}
      />
    </section>
  );
};

export default CartBlock;
