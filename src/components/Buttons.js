import React from "react";

const Buttons = ({ isTimerOn, startTimer, stopTimer, resetTimer, addLap }) => {
  return (
    <div>
      {!isTimerOn ? <button onClick={startTimer}>Start</button> : <button onClick={stopTimer}>Stop</button> }
      {!isTimerOn ? <button onClick={resetTimer}>Reset</button> : <button onClick={addLap}>Lap</button>}
    </div>
  );
};

export default Buttons;
