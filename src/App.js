import React, { useState, useRef } from "react";

// Import pages
import Buttons from "./components/Buttons";
import Laps from "./components/Laps";
import Timer from "./components/Timer";

const App = () => {
  const [time, setTime] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const timerRef = useRef();

  const startTimer = () => {
    setIsTimerOn(true);
    setTime((time) => time + 10);
    timerRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  };

  const stopTimer = () => {
    setIsTimerOn(false);
    clearInterval(timerRef.current);
  };

  return (
    <main>
      <Timer time={time} />
      <Buttons
        isTimerOn={isTimerOn}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
    </main>
  );
};

export default App;
