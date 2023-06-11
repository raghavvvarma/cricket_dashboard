import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './index.css';

const Graph = ({ players }) => {
  const data = players.map((player) => ({
    name: player.name,
    score: player.score,
    matchesPlayed: player.matchesPlayed,
  }));

  return (
    <div className="graph">
      <h2>Players' Performance Graph</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
        <Bar dataKey="matchesPlayed" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Graph;
