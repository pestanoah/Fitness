import React from "react";
import Dropdown from "./Dropdown";
import SetCreator from "./SetCreator";

function ExerciseCreator() {
  const [sets, setSets] = React.useState([{ id: 0 }]);

  const removeSet = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    setSets(sets.slice(0, sets.length - 1));
  };

  const renderedSets = sets.map((set, index) => {
    return (
      <div className="container" key={index}>
        <SetCreator />
      </div>
    );
  });

  const addSet = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    setSets(
      sets.concat({
        id: sets.length,
      })
    );
  };

  const handleDropdownChange = (event: React.ChangeEvent<any>) => {
    console.log("Exercise changed to id:", event.target.value);
    // clear the added sets
    setSets([{ id: 0 }]);
  };

  return (
    <div>
      <h3>Exercise Creator</h3>
      <Dropdown
        options={[
          { name: "Bench", id: 1 },
          { name: "Squat", id: 2 },
        ]}
        handleChange={handleDropdownChange}
      />
      {renderedSets}
      <button className="btn btn-secondary btn-sm" onClick={addSet}>
        Add Set
      </button>
      <button className="btn btn-secondary btn-sm" onClick={removeSet}>
        Remove Set
      </button>
    </div>
  );
}

export default ExerciseCreator;
