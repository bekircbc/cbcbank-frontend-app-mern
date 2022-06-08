import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const accUrlAccounts = "http://localhost:4556/accounts";
const accUrlWerbung = "http://localhost:4556/werbung";
export const AppProvider = ({ children }) => {
  const siteTitle = "CBC Bank";
  const [accounts, setAccounts] = useState([]);
  const [werbung, setWerbung] = useState([]);
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
      setAccounts((await axios.get(accUrlAccounts)).data);
      setWerbung((await axios.get(accUrlWerbung)).data);
    })();
  }, []);

  console.log(accounts, werbung);

  return (
    <AppContext.Provider
      value={{
        siteTitle,
        accounts,
        werbung,
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
