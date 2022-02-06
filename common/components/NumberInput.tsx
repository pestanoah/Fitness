import React, { useState } from "react";

interface NumberInputProps {
  min: number;
  max: number;
  label?: string;
  defaultValue?: number;
}

function NumberInput(props) {
  /**
   * @param {string} min
   * @param {string} max
   */
  const { min, max } = props;
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    let number = event.target.value;

    // check the bounds of the input
    number = number > max ? max : number;
    number = number < min ? min : number;

    setValue(number);
  };

  const renderedLabel = props.label ? (
    <label htmlFor="numberInput">{props.label}</label>
  ) : null;

  return (
    <div>
      {renderedLabel}
      <input
        id="numberInput"
        type="number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default NumberInput;
