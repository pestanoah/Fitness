import React from "react";
import NumberInput from "./NumberInput";

function SetCreator() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NumberInput min={0} max={2000} label="Weight:" />
        </div>
        <div className="col">
          <NumberInput min={1} max={100} label="Reps:" />
        </div>
      </div>
    </div>
  );
}

export default SetCreator;
