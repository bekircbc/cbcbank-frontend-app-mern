import { useContext } from "react";
import { AppContext } from "../AppContext";
export const ChangeInfo = () => {
  const {
    isLoggedIn,
    // isLoggedIn,
    //   isLoggedInHandler,
  } = useContext(AppContext);
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Change Personal Information</h1>
        </>
      ) : (
        <>
          <h1>Change Personal Informationy</h1>
        </>
      )}
    </>
  );
};
