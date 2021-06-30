import React from "react";

const Timer = ({ time }) => {
  const convertTime = (msTime) => {
    const ms = Math.floor(msTime % 1000) / 10;
    const sec = Math.floor(msTime / 1000) % 60;
    const min = Math.floor(msTime / (1000 * 60)) % 60;
    const hour = Math.floor(msTime / (1000 * 60 * 60)) % 24;
    const convertedTime = { ms, sec, min, hour };
    return convertedTime;
  };

  const convertedTime = convertTime(time);

  return (
    <section>
      <p>
        {convertedTime.hour >= 10 ? (
          <span>{convertedTime.hour}:</span>
        ) : (
          <span>0{convertedTime.hour}:</span>
        )}
        {convertedTime.min >= 10 ? (
          <span>{convertedTime.min}:</span>
        ) : (
          <span>0{convertedTime.min}:</span>
        )}
        {convertedTime.sec >= 10 ? (
          <span>{convertedTime.sec}:</span>
        ) : (
          <span>0{convertedTime.sec}:</span>
        )}
        {convertedTime.ms >= 10 ? (
          <span>{convertedTime.ms}</span>
        ) : (
          <span>0{convertedTime.ms}</span>
        )}
      </p>
    </section>
  );
};

export default Timer;
