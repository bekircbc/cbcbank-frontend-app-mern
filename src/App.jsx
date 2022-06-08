import "./App.scss";
import { TransferMoney } from "./components/TransferMoney";
import { ChangeInfo } from "./components/ChangeInfo";
import { RequestKredit } from "./components/RequestKredit";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { FindBranch } from "./components/FindBranch.jsx";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { siteTitle, isLoggedIn } = useContext(AppContext);
  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <img src="images/icon.png" alt="logo" />
          <h1>{siteTitle}</h1>
        </div>

        <div className="navbar">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/transfermoney">Transfer Money</NavLink>
          <NavLink to="/changeinfo">Change Info</NavLink>
          <NavLink to="/requestkredit">Request Kredit</NavLink>
          <NavLink to="/findbranch">Find Branch</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/transfermoney" element={<TransferMoney />} />
        <Route path="/changeinfo" element={<ChangeInfo />} />
        <Route path="/requestkredit" element={<RequestKredit />} />
        <Route path="/findbranch" element={<FindBranch />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" replace /> : <Login />}
        />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
