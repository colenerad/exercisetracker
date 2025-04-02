// components/Home.js
import React from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

const exercises = [
  { name: 'Push Ups', type: 'repetition', suggested: 'Jumping Jacks' },
  { name: 'Plank', type: 'duration', suggested: 'Push Ups' },
  { name: 'Jumping Jacks', type: 'repetition', suggested: 'Plank' },
  { name: 'Running', type: 'running', suggested: 'Push Ups' }, // You mentioned this
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() =>
        navigation.navigate(
          item.type === 'duration'
            ? 'DurationExercise'
            : item.type === 'repetition'
            ? 'RepetitionExercise'
            : 'RunningExercise',
          {
            exercise: item,
            allExercises: exercises,
          }
        )
      }
      containerStyle={{ margin: 10 }}
    />
  );

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
