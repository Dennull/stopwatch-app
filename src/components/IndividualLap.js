import React from "react";

const IndividualLap = ({id, lapTime, convertTime}) => {
  const convertedTime = convertTime(lapTime);
  return <div>
    <p>Lap: {id}</p>
    <p>Time: {convertedTime.hr}:{convertedTime.min}:{convertedTime.sec}:{convertedTime.ms}</p>
  </div>;
};

export default IndividualLap;
