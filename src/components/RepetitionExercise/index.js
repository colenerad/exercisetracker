import React, { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <h3>Repetitions: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default RepetitionExercise;
