import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { data } from "./data/data";

export const AppContext = createContext();

const url = "https://cbcbank-backend-app-mern.herokuapp.com/";

export const AppProvider = ({ children }) => {
  const siteTitle = "CBC Bank";
  const [bankData, setBankData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState([]);
  // const [currentLogindata, setCurrentLogindata                                                                                                   ] = useState();

  useEffect(() => {
    (async () => {
      setBankData((await axios.get(url)).data);
    })();
  }, []);

  console.log(bankData);

  return (
    <AppContext.Provider
      value={{
        siteTitle,
        bankData,
        setBankData,
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
