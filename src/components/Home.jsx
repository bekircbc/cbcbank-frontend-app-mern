import { useContext } from "react";
import { AppContext } from "../AppContext";

export const Home = () => {
  const { data, isLoggedIn, currentAccount } = useContext(AppContext);
  return (
    <>
      <h1>Home</h1>
      {isLoggedIn ? (
        <>
          <div>Welcome, {currentAccount.owner}</div>
          <div>Interest Rate : {currentAccount.interestRate}</div>
          <div>
            {currentAccount.map((m, i) => {
              return (
                <>
                  <div>
                    {m.movements[i]} {m.movementsDates[i]}
                  </div>
                </>
              );
            })}
            <div>{Math.sum(currentAccount.movements)}</div>
          </div>
          <div>
            {data.werbung.map((m) => {
              return (
                <div key={m.id}>
                  <img src={m.url} alt={m.name} />
                  <h2>{m.name}</h2>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          {data.werbung.map((m) => {
            return (
              <div key={m.id}>
                <img src={m.url} alt={m.name} />
                <h2>{m.name}</h2>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
