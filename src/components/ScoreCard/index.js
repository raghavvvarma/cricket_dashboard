import React from 'react';
import './index.css';

const Scorecard = ({ players }) => {
  return (
    <div className="score-card">
      {players.map((player) => (
        <div key={player.id} className="card">
          <h3>{player.name}</h3>
          <p>Score: {player.score}</p>
          <p>Matches Played: {player.matchesPlayed}</p>
        </div>
      ))}
    </div>
  );
};

export default Scorecard;
