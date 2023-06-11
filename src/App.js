import React, { useState } from 'react';

import './App.css'
import PlayersTable from './components/PlayerTable/index';
import Scorecard from './components/ScoreCard/index';
import Graph from './components/Graph/index';

import { playersData } from './data/playersData';

const App = () => {
  const [format, setFormat] = useState('odi');
  const [status, setStatus] = useState('current');

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const filteredPlayers = playersData.filter(
    (player) => player.format === format && player.status === status
  );

  return (
    <div className="app">
      <h1>Indian Cricket Players Dashboard</h1>
      <div className="filters">
        <label htmlFor="format">Format:</label>
        <select name="format" id="format" value={format} onChange={handleFormatChange}>
          <option value="odi">ODI</option>
          <option value="test">Test</option>
          <option value="t20">T20</option>
        </select>
        <label htmlFor="status">Status:</label>
        <select name="status" id="status" value={status} onChange={handleStatusChange}>
          <option value="current">Current</option>
          <option value="retired">Retired</option>
        </select>
      </div>
      <PlayersTable players={filteredPlayers} />
      <Scorecard players={filteredPlayers} />
      <Graph players={filteredPlayers} />
    </div>
  );
};

export default App;
