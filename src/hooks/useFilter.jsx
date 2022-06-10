import "../styles/page_bekir.scss";
import data from "../data/db.json";

const filterAbteilung = (abt = "HR", index) => {
  return data
    .filter((m) => m.abteilung === abt)
    .map((m, i) => {
      return (
        <div key={i + index} className="employeeListPerson">
          <img
            src={`/images/bekir/employeelist/${m.picturesrc}`}
            alt={m.lastName}
          />
          <div className="name">
            {m.firstName} {m.lastName}{" "}
          </div>
          <div className="age">{m.age}</div>
        </div>
      );
    });
};

function EmployeeList() {
  return (
    <div className="bekirEmployeeList">
      <h1>Employee List</h1>
      <div className="employeeList">
        <h2>S Liebe Gmbh</h2>
        <h2>Employee List</h2>
        <h3>HR Abteilung</h3>
        <div className="employeeListAbteilung">{filterAbteilung("HR", 0)}</div>
        <h3>IT Abteilung</h3>
        <div className="employeeListAbteilung">{filterAbteilung("IT", 3)}</div>
        <h3>Einkauf Abteilung</h3>
        <div className="employeeListAbteilung">
          {filterAbteilung("Einkauf", 6)}
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
