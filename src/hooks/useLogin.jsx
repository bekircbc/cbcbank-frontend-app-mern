import { useContext } from "react";
import { AppContext } from "../AppContext";
// import axios from "axios";

export const useLogin = (id, pin) => {
  const {
    accountsData,
    currentAccount,
    setCurrentAccount,
    setIsLoggedIn,
    isLoggedIn,
    //   isLoggedInHandler,
  } = useContext(AppContext);

  setCurrentAccount(
    accountsData.filter((m) => m.id === enteredId && m.pin === enteredPin)
  );

  currentAccount.isLoggedIn ? "" : (currentAccount.isLoggedIn = true);

  currentAccount ? setIsLoggedIn(true) : setIsLoggedIn(false);

  return {
    currentAccount,
    isLoggedIn,
  };
};
