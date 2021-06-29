import React from "react";

// Import pages
import Buttons from "./components/Buttons";
import Laps from "./components/Laps";
import Timer from "./components/Timer";

const App = () => {
  return (
    <main>
      <Timer />
      <Buttons />
    </main>
  );
};

export default App;
