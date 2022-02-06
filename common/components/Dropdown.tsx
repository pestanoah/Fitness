import React, { useState } from "react";

interface DropdownProps {
  options: { name: string; id: number }[];
  handleChange: (event: React.ChangeEvent<any>) => void;
}

function Dropdown(props: DropdownProps) {
  /**
   * options - name of the options and a value for each option
   */
  const { options, handleChange } = props;
  const [selectedValue, setSelectedValue] = useState(options[0].id);

  const handleDropdownChange = (event: React.ChangeEvent<any>) => {
    setSelectedValue(event.target.value);
    handleChange(event);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <option value={option.id} key={index}>
        {option.name}
      </option>
    );
  });
  return (
    <div>
      <select
        className="form-select"
        value={selectedValue}
        onChange={handleDropdownChange}
      >
        {renderedOptions}
      </select>
    </div>
  );
}

export default Dropdown;
