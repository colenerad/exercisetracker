import React, { useState } from "react";

function RunningExercise({ name }) {
  const [laps, setLaps] = useState([]);

  const recordLap = () => {
    const lapTime = new Date().toLocaleTimeString();
    setLaps([...laps, lapTime]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <button onClick={recordLap}>Record Lap</button>
      <h3>Lap Times:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;
