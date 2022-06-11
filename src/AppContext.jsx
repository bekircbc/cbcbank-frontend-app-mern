import { createContext, useState, useEffect } from "react";
// import axios from "axios";
import { data } from "./data/data";

export const AppContext = createContext();

// const url = "https://cbcbank-backend-app-mern.herokuapp.com/";

export const AppProvider = ({ children }) => {
  const siteTitle = "CBC Bank";
  const [accountsData, setAccountsData] = useState([]);
  const [werbungsData, setWerbungsData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState([]);
  const [receiverAccount, setReceiverAccount] = useState([]);
  // const [currentLogindata, setCurrentLogindata                                                                                                   ] = useState();

  // useEffect(() => {
  //   (async () => {
  //     setBankData((await axios.get(url)).data);
  //   })();
  // }, []);

  // console.log(bankData);

  useEffect(() => {
    setAccountsData(data.accounts);
    setWerbungsData(data.werbungs);
  }, []);

  return (
    <AppContext.Provider
      value={{
        siteTitle,
        accountsData,
        setAccountsData,
        currentAccount,
        setCurrentAccount,
        receiverAccount,
        setReceiverAccount,
        werbungsData,
        setWerbungsData,
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
