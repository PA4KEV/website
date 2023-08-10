import React from 'react';

const Dropdown = ({ selectedColor, handleColorChange }) => { 
  return (
    <div>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="">Make selection</option>
        <option value="ginzan_onsen">Ginzan Onsen</option>
        <option value="shuri_castle">Shuri Castle</option>
        <option value="itsukushima_shrine">Itsukushima Shrine</option>
        <option value="sendai_daikannon">Sendai Daikannon</option>
      </select>
      <br />
    </div>
  );
};

export default Dropdown;
