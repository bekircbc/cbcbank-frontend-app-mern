import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";
import { useLogin } from "../hooks/useLogin";
// import { Home } from "./Home";

export const Login = () => {
  const idInputRef = useRef();
  const pinInputRef = useRef();

  const {
    accountsData,
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
    // setCurrentAccount(
    //   accountsData.filter((m) => m.id === enteredId && m.pin === enteredPin)
    // );

    // currentAccount.isLoggedIn ? "" : (currentAccount.isLoggedIn = true);
    useLogin(enteredId, enteredPin);
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
