import React from "react";

const Buttons = ({ isTimerOn, startTimer, stopTimer }) => {
  return (
    <div>
      {!isTimerOn ? <button onClick={startTimer}>Start</button> : <button onClick={stopTimer}>Stop</button> }
      {!isTimerOn ? <button>Reset</button> : <button>Lap</button>}
    </div>
  );
};

export default Buttons;
