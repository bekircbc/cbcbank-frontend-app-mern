import { useContext } from "react";
import { AppContext } from "../AppContext";
export const RequestKredit = () => {
  const {
    isLoggedIn,
    // isLoggedIn,
    //   isLoggedInHandler,
  } = useContext(AppContext);
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Request Kredit</h1>
        </>
      ) : (
        <>
          <h1>Request Kredity</h1>
        </>
      )}
    </>
  );
};
