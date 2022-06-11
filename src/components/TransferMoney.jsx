import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";
import { useTransferMoney } from "../hooks/useTransferMoney";

export const TransferMoney = () => {
  const receiverIdRef = useRef();
  const receiverIbanRef = useRef();
  const receiverOwnerRef = useRef();
  const amountRef = useRef();
  const {
    currentAccount,
    receiverAccount,
    setReceiverAccount,
    isLoggedIn,
    // isLoggedIn,
    //   isLoggedInHandler,
  } = useContext(AppContext);

  function transferMoneyHandler(event) {
    event.preventDefault();
    const receiverId = receiverIdRef.current.value;
    const receiverIban = receiverIbanRef.current.value;
    const receiverOwner = receiverOwnerRef.current.value;
    const amount = amountRef.current.value;
    useTransferMoney(receiverId, receiverIban, receiverOwner, amount);
  }

  return (
    <div className="login">
      {isLoggedIn ? (
        <>
          <h1>Login</h1>

          <form className="formCard">
            <label htmlFor="id">Receiver Id</label>
            <input type="text" required id="id" ref={receiverIdRef} />

            <label htmlFor="IBAN">Receiver IBAN</label>
            <input type="text" required id="IBAN" ref={receiverIbanRef} />

            <label htmlFor="owner">Receiver Owner</label>
            <input type="text" required id="owner" ref={receiverOwnerRef} />
            <label htmlFor="amount">Amount</label>
            <input type="number" required id="amount" ref={amountRef} />
            <button className="btnTransferMoney" onClick={transferMoneyHandler}>
              Transfer Money
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>Login first to transfer money.</h1>
        </>
      )}
    </div>
  );
};
