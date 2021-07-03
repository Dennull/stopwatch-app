import React from "react";
import IndividualLap from "./IndividualLap";

const Laps = ({ laps, convertTime }) => {
  return <section>
    {laps.map((lap) => {
        return <IndividualLap key={lap.id} {...lap} convertTime={convertTime}/>
    })}
  </section>;
};

export default Laps;
