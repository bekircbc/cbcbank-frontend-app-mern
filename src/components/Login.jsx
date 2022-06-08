import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";
// import { Home } from "./Home";

export const Login = () => {
  const idInputRef = useRef();
  const pinInputRef = useRef();
  // function submitHandler(e) {
  //   e.preventDefault();
  //   const enteredId = idInputRef.current.value;
  //   const enteredPin = pinInputRef.current.value;
  // }
  const {
    data,
    currentAccount,
    setCurrentAccount,
    setIsLoggedIn,
    // isLoggedIn,
    //   isLoggedInHandler,
  } = useContext(AppContext);

  function isLoggedInHandler(event) {
    event.preventDefault();
    const enteredId = idInputRef.current.value;
    const enteredPin = pinInputRef.current.value;
    setCurrentAccount(
      data.accounts.filter((m) => m.id === enteredId && m.pin === enteredPin)
    );

    currentAccount ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form className="formCard">
        <label htmlFor="id">User Id</label>
        <input type="text" required id="id" ref={idInputRef} />

        <label htmlFor="pin">Pin</label>
        <input type="number" required id="pin" ref={pinInputRef} />

        <button className="btnLogin" onClick={isLoggedInHandler}>
          Login
        </button>
      </form>
    </div>
  );
};
