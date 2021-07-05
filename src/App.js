import React, { useState, useRef } from "react";

// Import pages
import Buttons from "./components/Buttons";
import Laps from "./components/Laps";
import Timer from "./components/Timer";

const App = () => {
  const [time, setTime] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);
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

  const resetTimer = () => {
    setTime(0);
    setLaps([]);
  };

  const convertTime = (msTime) => {
    const ms = Math.floor(msTime % 1000) / 10;
    const sec = Math.floor(msTime / 1000) % 60;
    const min = Math.floor(msTime / (1000 * 60)) % 60;
    const hour = Math.floor(msTime / (1000 * 60 * 60)) % 24;
    const convertedTime = { ms, sec, min, hour };
    return convertedTime;
  };

  const addLap = () => {
    const newLap = { id: laps.length + 1, lapTime: time };
    const newLaps = [...laps, newLap];
    setLaps(newLaps);
  };

  return (
    <main>
      <Timer time={time} convertTime={convertTime} />
      <Buttons
        isTimerOn={isTimerOn}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        addLap={addLap}
      />
      <Laps laps={laps} convertTime={convertTime} />
    </main>
  );
};

export default App;
