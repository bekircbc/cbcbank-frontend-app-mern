import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { data } from "./data/data";

export const AppContext = createContext();

const url = "https://cbcbank-backend-app-mern.herokuapp.com/";

export const AppProvider = ({ children }) => {
  const siteTitle = "CBC Bank";
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState({});
  // const [currentLogindata, setCurrentLogindata] = useState();

  useEffect(() => {
    (async () => {
      setData((await axios.get(url)).data);
    })();
  }, []);

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
