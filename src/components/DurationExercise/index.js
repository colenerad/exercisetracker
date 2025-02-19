import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <h3>Time: {formatTime(time)}</h3>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setIsRunning(false); setTime(0); }} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;
