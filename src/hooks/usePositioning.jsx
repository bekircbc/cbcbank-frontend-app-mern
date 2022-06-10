import { useState } from "react";
import "../styles/page_bekir.scss";

function MovingBox() {
  const [xPosition, setXPosition] = useState(275);
  const [yPosition, setYPosition] = useState(275);

  return (
    <div className="MovingBox">
      <h2>Move an element left, right, center when button is pressed</h2>
      <div className="controls">
        <div className="row">
          <button className="up" onClick={() => setYPosition(yPosition - 5)}>
            Up
          </button>
        </div>
        <div className="row">
          <button className="left" onClick={() => setXPosition(xPosition + 5)}>
            Left
          </button>
          <button
            className="center"
            onClick={() => {
              setXPosition(275);
              setYPosition(275);
            }}
          >
            Center
          </button>
          <button className="right" onClick={() => setXPosition(xPosition - 5)}>
            Right
          </button>
        </div>
        <div className="row">
          <button className="down" onClick={() => setYPosition(yPosition + 5)}>
            Down
          </button>
        </div>
      </div>
      <div className="gameArea">
        <div
          className="box"
          style={{ top: `${yPosition}px`, right: `${xPosition}px` }}
        ></div>
      </div>
    </div>
  );
}

export default MovingBox;
