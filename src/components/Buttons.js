import React from "react";

const Buttons = ({ isTimerOn, startTimer, stopTimer }) => {
  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button>Lap</button>
    </div>
  );
};

export default Buttons;
