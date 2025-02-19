import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
{ name: "Push-ups", type: "repetition" },
{ name: "Jumping Jacks", type: "duration" },
{ name: "Sit-ups", type: "repetition" },
{ name: "Plank", type: "duration" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Exercise Tracker</h1>

      {!selectedExercise ? (
        <>
  <h2>Select an Exercise:</h2>
{exercises.map((exercise, index) => (
<button
key={index}
onClick={() => setSelectedExercise(exercise)}
style={{ margin: "5px", padding: "10px" }}
>
{exercise.name}
</button>
          ))}
 </>
) : (
<>
<button onClick={() => setSelectedExercise(null)} style={{ marginBottom: "20px" }}>
Back to Menu
</button>
{selectedExercise.type === "repetition" ? (
<RepetitionExercise name={selectedExercise.name} />
) : (
<DurationExercise name={selectedExercise.name} />
 )}
</>
)}
</div>
  );
}

export default App;
