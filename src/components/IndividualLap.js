import React from "react";

const IndividualLap = ({ id, lapTime, convertTime }) => {
  const convertedTime = convertTime(lapTime);
  return (
    <div>
      <p>
        <span>Lap {id} </span>
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
    </div>
  );
};

export default IndividualLap;
