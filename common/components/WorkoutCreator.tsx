import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ExerciseCreator from "./ExerciseCreator";

function WorkoutCreator() {
  interface Exercise {
    id: number;
  }

  interface Workout {
    exercises: Exercise[];
  }

  interface Day {
    name: string;
    id: number;
  }

  const days: Day[] = [
    { name: "Sunday", id: 0 },
    { name: "Monday", id: 1 },
    { name: "Tuesday", id: 2 },
    { name: "Wednesday", id: 3 },
    { name: "Thursday", id: 4 },
    { name: "Friday", id: 5 },
    { name: "Saturday", id: 6 },
  ];

  // Index is the day number, value is the exercises for that day
  // Index 0 is the first day, index 1 is the second day, etc.
  const initalData: Workout[] = Array.apply(null, Array(7)).map(() => {
    return {
      exercises: [],
    };
  });

  const [programData, setProgramData] = useState(initalData);

  // state for the day dropdown
  const [selectedDay, setSelectedDay] = useState(days[0].id);

  const addExercise = (event) => {
    event.preventDefault();
    programData[selectedDay].exercises.push({
      id: programData[selectedDay].exercises.length,
    });
    setProgramData([...programData]);
  };

  const removeExercise = (event) => {
    event.preventDefault();
    programData[selectedDay].exercises.pop();
    setProgramData([...programData]);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const renderedExercises = programData[selectedDay].exercises.map(
    (exercise, index) => {
      return <ExerciseCreator key={index} />;
    }
  );

  return (
    <div>
      <h2>Workout creator</h2>
      <p>Day</p>
      <Dropdown options={days} handleChange={handleDayChange} />
      {renderedExercises}
      <button className="btn btn-secondary" onClick={addExercise}>
        Add Exercise
      </button>
      <button className="btn btn-secondary" onClick={removeExercise}>
        Remove Exercise
      </button>
    </div>
  );
}

export default WorkoutCreator;
