import React from "react";

const Timer = ({ time, convertTime }) => {
  const convertedTime = convertTime(time);

  return (
    <section className="timer-section">
      <p className="timer">
        {convertedTime.hour >= 10 ? (
          <span className="timer-digit">{convertedTime.hour}:</span>
        ) : (
          <span className="timer-digit">0{convertedTime.hour}:</span>
        )}
        {convertedTime.min >= 10 ? (
          <span className="timer-digit">{convertedTime.min}:</span>
        ) : (
          <span className="timer-digit">0{convertedTime.min}:</span>
        )}
        {convertedTime.sec >= 10 ? (
          <span className="timer-digit">{convertedTime.sec}:</span>
        ) : (
          <span className="timer-digit">0{convertedTime.sec}:</span>
        )}
        {convertedTime.ms >= 10 ? (
          <span className="timer-digit">{convertedTime.ms}</span>
        ) : (
          <span className="timer-digit">0{convertedTime.ms}</span>
        )}
      </p>
    </section>
  );
};

export default Timer;
