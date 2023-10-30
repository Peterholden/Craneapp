import React, { useState } from "react";
import Select from "react-select";

const cranefootsize = {
  LTM1025: ["500mm x 500mm"],
  LTM1030: ["500mm x 500mm"],
  LTM1100: ["550mm x 550mm"],
  LTM1200: ["600mm x 600mm"],
  LTM1800: ["1000mm x 1000mm"],
  GroveGMK3055: ["500mm x 500mm"]
};

const options = [
  { value: "LTM1025", label: "Liebherr LTM1025" },
  { value: "LTM1030", label: "Liebherr LTM1030" },
  { value: "LTM1100", label: "Liebherr LTM1100" },
  { value: "LTM1200", label: "Liebherr LTM1200" },
  { value: "LTM1800", label: "Liebherr LTM1800" },
  { value: "GroveGMK3055", label: "Grove GMK3055" }
];

const CraneDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelectedItems(cranefootsize[selectedOption.value] || []);
  };

  return (
    <div>
      <h2>Select a crane:</h2>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      {selectedOption && (
        <div>
          <p>You selected: {selectedOption.label}</p>
          <p>Crane Outrigger foot size:</p>
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

export default CraneDropdown;
