import React from 'react';
import './index.css';

const FilterOptions = ({ format, playerStatus, onFormatChange, onStatusChange }) => {
  const handleFormatChange = (e) => {
    onFormatChange(e.target.value);
  };

  const handleStatusChange = (e) => {
    onStatusChange(e.target.value);
  };

  return (
    <div className="filter-options">
      <label htmlFor="format">Format:</label>
      <select id="format" value={format} onChange={handleFormatChange}>
        <option value="odi">ODI</option>
        <option value="test">Test</option>
        <option value="t20">T20</option>
      </select>

      <label htmlFor="status">Status:</label>
      <select id="status" value={playerStatus} onChange={handleStatusChange}>
        <option value="current">Current Players</option>
        <option value="retired">Retired Players</option>
      </select>
    </div>
  );
};

export default FilterOptions;
