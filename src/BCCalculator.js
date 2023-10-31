import React, { useState } from "react";

function BearingCapacityCalculator() {
  const [angle, setAngle] = useState(0);
  const [breadth, setBreadth] = useState(0);
  const [length, setLength] = useState(0);
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);
  const [sq, setSq] = useState(null);
  const [sy, setSy] = useState(null);
  const [sc, setSc] = useState(null); // Added state for Sc

  const handleAngleChange = (e) => {
    setAngle(parseFloat(e.target.value));
  };

  const handleBreadthChange = (e) => {
    setBreadth(parseFloat(e.target.value));
  };

  const handleLengthChange = (e) => {
    setLength(parseFloat(e.target.value));
  };

  const calculateBoth = () => {
    const radians = (angle * (Math.PI / 180)); // Convert degrees to radians
    const NqValue = Math.tan(Math.PI / 4 + (radians / 2)) ** 2 * Math.exp(Math.PI * Math.tan(radians));
    setResult1(NqValue);

    const NyValue = 1.5 * (NqValue - 1) * (Math.tan((angle * Math.PI) / 180));
    setResult2(NyValue);

    const NcValue = (NqValue - 1) / (Math.tan((angle * Math.PI) / 180));
    setResult3(NcValue);

    const sqValue = 1 + 1.5 * Math.tan(angle * Math.PI / 180) * (breadth / length);
    setSq(sqValue);

    const syValue = 1 - 0.1 * (breadth / length);
    setSy(syValue);

    const scValue = 1 + 0.2 * (breadth / length); // Calculate Sc
    setSc(scValue);
  };

  return (
    <div>
      <h2>Bearing Capacity Factors Calculator</h2>
      <h3>For Granular Material</h3>
      <div>
        <label>Phi angle of layer in degrees:</label>
        <input type="number" value={angle} onChange={handleAngleChange} />
      </div>
      <div>
        <label>Breadth in m:</label>
        <input type="number" value={breadth} onChange={handleBreadthChange} />
      </div>
      <div>
        <label>Length in m:</label>
        <input type="number" value={length} onChange={handleLengthChange} />
      </div>
      <button onClick={calculateBoth}>Calculate Bearing capacity factors</button>
      {result1 !== null && (
        <p> Nq = {result1}</p>
      )}
      {result2 !== null && (
        <p> Ny = {result2}</p>
      )}
      {result3 !== null && (
        <p> Nc = {result3}</p>
      )}
      {sq !== null && (
        <p> Sq = {sq}</p>
      )}
      {sy !== null && (
        <p> Sy = {sy}</p>
      )}
      {sc !== null && (
        <p> Sc = {sc}</p>
      )}
    </div>
  );
}

export default BearingCapacityCalculator;
