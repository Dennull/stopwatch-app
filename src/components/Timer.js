import React, { useState } from "react";

const Timer = () => {
  const defaultTime = { hr: 0, min: 0, sec: 0, ms: 0 };

  const [time, setTime] = useState(defaultTime);
  const [timerOn, setTimerOn] = useState(false);

  return (
    <section>
      <p>
        <span>{time.hr}:</span>
        <span>{time.min}:</span>
        <span>{time.sec}:</span>
        <span>{time.ms}:</span>
      </p>
    </section>
  );
};

export default Timer;
