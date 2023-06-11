import React, { useState } from 'react';
import PlayerTable from '../PlayerTable';
import ScoreCard from '../ScoreCard';
import FilterOptions from '../FilterOptions';
import Graph from '../Graph';
import { playersData } from '../../data/playersData';
import './index.css';

const PlayerDashboard = () => {
  const [format, setFormat] = useState('odi');
  const [playerStatus, setPlayerStatus] = useState('current');

  const handleFormatChange = (selectedFormat) => {
    setFormat(selectedFormat);
  };

  const handleStatusChange = (selectedStatus) => {
    setPlayerStatus(selectedStatus);
  };

  const filteredPlayers = playersData.filter(
    (player) => player.format === format && player.status === playerStatus
  );

  return (
    <div className="player-dashboard">
      <h1>Indian Cricket Players Dashboard</h1>
      <FilterOptions
        format={format}
        playerStatus={playerStatus}
        onFormatChange={handleFormatChange}
        onStatusChange={handleStatusChange}
      />
      <ScoreCard players={filteredPlayers} />
      <PlayerTable players={filteredPlayers} />
      <Graph players={filteredPlayers} />
    </div>
  );
};

export default PlayerDashboard;
