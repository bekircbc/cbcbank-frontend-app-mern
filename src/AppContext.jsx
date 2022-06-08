import { createContext, useState, useEffect } from "react";
import axios from "axios";
export { accData } from "./data/data";

export const AppContext = createContext();

const url = "https://cbcbank-backend-app-mern.herokuapp.com/";

export const AppProvider = ({ children }) => {
  const siteTitle = "CBC Bank";
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState({});
  // const [currentLogindata, setCurrentLogindata] = useState();

  // function isLoggedInHandler(event) {
  //   event.preventDefault();
  //   const enteredId = idInputRef.current.value;
  //   const enteredPin = pinInputRef.current.value;

  //   data.logindata.map((m) => {
  //     if (m.id === enteredId && m.pin === enteredPin) {
  //       setCurrentLogindata(m);
  //       setCurrentAccount(
  //         data.accounts.map(
  //           (m) =>
  //             m.owner === currentLogindata.owner &&
  //             m.iban === currentLogindata.iban
  //         )
  //       );
  //       setIsLoggedIn(true);
  //     }
  //   });
  // }

  useEffect(() => {
    (async () => {
      setData((await axios.get(url)).data);
    })();
  }, []);

  data ? data : setData(accData);

  console.log(data);

  return (
    <AppContext.Provider
      value={{
        siteTitle,
        data,
        currentAccount,
        setCurrentAccount,
        // currentLogindata,
        // setCurrentLogindata,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
