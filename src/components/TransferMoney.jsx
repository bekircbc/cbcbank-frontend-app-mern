import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";

export const TransferMoney = () => {
  const idInputRef = useRef();
  const pinInputRef = useRef();
  const {
    isLoggedIn,
    // isLoggedIn,
    //   isLoggedInHandler,
  } = useContext(AppContext);
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Transfer Money</h1>
        </>
      ) : (
        <>
          <h1>Transfer Moneyy</h1>
        </>
      )}
    </>
  );
};
