import { useContext } from "react";
import { AppContext } from "../AppContext";
export const FindBranch = () => {
  const {
    isLoggedIn,
    // isLoggedIn,
    //   isLoggedInHandler,
  } = useContext(AppContext);
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Find Branch</h1>
        </>
      ) : (
        <>
          <h1>Find Branchy</h1>
        </>
      )}
    </>
  );
};
