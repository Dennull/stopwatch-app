import React, { useState } from "react";

const Timer = () => {
  const defaultTime = { hr: 0, min: 0, sec: 0, ms: 0 };

  const [time, setTime] = useState(defaultTime);
  const [isTimerOn, setisTimerOn] = useState(false);

  return (
    <section>
      <p>
        {time.hr > 10 ? <span>{time.hr}:</span> : <span>0{time.hr}:</span>}
        {time.min > 10 ? <span>{time.min}:</span> : <span>0{time.min}:</span>}
        {time.sec > 10 ? <span>{time.sec}:</span> : <span>0{time.sec}:</span>}
        {time.ms > 10 ? <span>{time.ms}:</span> : <span>0{time.ms}</span>}
      </p>
    </section>
  );
};

export default Timer;
