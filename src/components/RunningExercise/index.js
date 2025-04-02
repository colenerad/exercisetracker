// components/RunningExercise/index.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function RunningExercise({ route, navigation }) {
  const { exercise, allExercises } = route.params;
  const [laps, setLaps] = useState([]);

  const recordLap = () => {
    const lapTime = new Date().toLocaleTimeString();
    setLaps([...laps, lapTime]);
  };

  const suggestedExercise = allExercises.find(
    (ex) => ex.name === exercise.suggested
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>{exercise.name}</Text>
      <Button title="Record Lap" onPress={recordLap} containerStyle={{ marginTop: 10 }} />
      <Text style={{ fontSize: 20, marginTop: 20 }}>Lap Times:</Text>
      {laps.map((lap, index) => (
        <Text key={index}>Lap {index + 1}: {lap}</Text>
      ))}

      <Button
        title={`Suggested: ${suggestedExercise.name}`}
        onPress={() =>
          navigation.push(
            suggestedExercise.type === 'duration'
              ? 'DurationExercise'
              : suggestedExercise.type === 'repetition'
              ? 'RepetitionExercise'
              : 'RunningExercise',
            { exercise: suggestedExercise, allExercises }
          )
        }
        containerStyle={{ marginTop: 20 }}
      />
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
        containerStyle={{ marginTop: 10 }}
      />
    </View>
  );
}
