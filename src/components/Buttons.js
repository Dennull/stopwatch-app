import React from "react";

const Buttons = ({
  time,
  isTimerOn,
  startTimer,
  stopTimer,
  resetTimer,
  addLap,
}) => {
  return (
    <div className="btn-container">
      {!isTimerOn ? (
        <button className="btn start-btn" onClick={startTimer}>
          Start
        </button>
      ) : (
        <button className="btn stop-btn" onClick={stopTimer}>
          Stop
        </button>
      )}
      {!isTimerOn ? (
        <button
          className="btn reset-btn"
          onClick={resetTimer}
          disabled={time === 0}
        >
          Reset
        </button>
      ) : (
        <button className="btn lap-btn" onClick={addLap}>
          Lap
        </button>
      )}
    </div>
  );
};

export default Buttons;
