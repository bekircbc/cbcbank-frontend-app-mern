import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";
export const RequestKredit = () => {
  const currentIbanRef = useRef();
  const currentOwnerRef = useRef();
  const kreditAmountRef = useRef();
  const kreditTermRef = useRef();
  const {
    isLoggedIn,
    // isLoggedIn,
    //   isLoggedInHandler,
  } = useContext(AppContext);

  // function isLoggedInHandler(event) {
  //   event.preventDefault();
  //   const enteredId = idInputRef.current.value;
  //   const enteredPin = pinInputRef.current.value;
  //   setCurrentAccount(
  //     data.accounts.filter((m) => m.id === enteredId && m.pin === enteredPin)
  //   );

  //   currentAccount ? setIsLoggedIn(true) : setIsLoggedIn(false);
  // }

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="requestKredit">
            <h1>Request Kredit</h1>

            <form className="formCard">
              <label htmlFor="currentIban">IBAN</label>
              <input
                type="text"
                required
                id="currentIban"
                ref={currentIbanRef}
              />

              <label htmlFor="currentOwner">Owner of Account</label>
              <input
                type="text"
                required
                id="currentOwner"
                ref={currentOwnerRef}
              />

              <label htmlFor="kreditAmount">Kredit Amount</label>
              <input
                type="number"
                required
                id="kreditAmount"
                ref={kreditAmountRef}
              />

              <label htmlFor="kreditTerm">Kredit Term</label>
              <input
                type="number"
                required
                id="kreditTerm"
                ref={kreditTermRef}
              />
              <button className="btnLogin" onClick={isLoggedInHandler}>
                Login
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <h1>Login to request kredit..</h1>
        </>
      )}
    </>
  );
};
