import numeral from "numeral";
import { useState, useEffect } from "react";
import "../styles/page_bekir.scss";

function Numeraljs() {
  const [data, setData] = useState(0);
  const [formatType, setFormatType] = useState("0,0a");

  const formatTypeHandler = (data, formatType) => {
    return numeral(data).format(formatType);
  };

  useEffect(() => {
    formatTypeHandler(data, formatType);
  }, [data, formatType]);
  return (
    <div className="numeraljs">
      <h2>Write the number into input field</h2>
      <h3>Numeraljs will format the number</h3>
      <nav className="navbar">
        <button onClick={() => setFormatType("0,0.0000")}>
          Num : "0,0.0000"
        </button>
        <button onClick={() => setFormatType("0.0[0000]")}>
          Num : "0.0[0000]"
        </button>
        <button onClick={() => setFormatType("(0,0.0000)")}>
          Num : "(0,0.0000)"
        </button>
        <button onClick={() => setFormatType("0.0a")}>Num : "0.0a"</button>
        <button onClick={() => setFormatType("0.00b")}>Byte : "0.00b"</button>
        <button onClick={() => setFormatType("0 a")}>Num : "0 a"</button>
        <button onClick={() => setFormatType("0o")}>Num : "0o"</button>
        <button onClick={() => setFormatType("0%")}>Percentage</button>
        <button onClick={() => setFormatType("0,0[.]00$")}>Currency</button>
        <button onClick={() => setFormatType("00:00:00")}>Time</button>
        <button onClick={() => setFormatType("0,0e+0")}>Exponential</button>
      </nav>
      <div className="formData">
        <div className="firstNumber">Written Data : {data}</div>
        <div>Formatted Data : {formatTypeHandler(data, formatType)} </div>

        <form>
          <div className="row">
            <div className="data">
              <input
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div className="label">
              Write number, byte, currnecy, percentage,time, expo to format
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Numeraljs;
