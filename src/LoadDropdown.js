// LoadDropdown.js
import React, { useState } from "react";
import Select from "react-select";

const loadsize = {
  Load1t: ["Up to 1 tons"],
  Load2t: ["From 1 tons to 2 tons"],
  Load3t: ["From 2 tons to 3 tons"],
  Load4t: ["From 3 tons to 4 tons"],
  Load5t: ["5 tons or more"]
};

const options = [
  { value: "Load1t", label: " 1 tonnes" },
  { value: "Load2t", label: " 2 tonnes" },
  { value: "Load3t", label: " 3 tonnes" },
  { value: "Load4t", label: " 4 tonnes" },
  { value: "Load5t", label: " 5 tonnes" }
];

const LoadDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelectedItems(loadsize[selectedOption.value] || []);
  };

  return (
    <div>
      <h2>Select a load:</h2>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      {selectedOption && (
        <div>
          <p>You selected: {selectedOption.label}</p>
          <p>Load sizes:</p>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoadDropdown;
