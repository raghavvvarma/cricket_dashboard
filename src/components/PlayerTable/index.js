import React from 'react';
import './index.css';

const PlayerTable = ({ players }) => {
  return (
    <div className="player-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Matches Played</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.score}</td>
              <td>{player.matchesPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
