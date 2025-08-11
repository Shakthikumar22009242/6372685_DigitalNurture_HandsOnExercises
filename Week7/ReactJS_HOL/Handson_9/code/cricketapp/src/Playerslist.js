// src/ListofPlayers.js
import React from 'react';

const players = [
  { name: 'Player1', score: 75 },
  { name: 'Player2', score: 68 },
  { name: 'Player3', score: 80 },
  { name: 'Player4', score: 55 },
  { name: 'Player5', score: 90 },
  { name: 'Player6', score: 45 },
  { name: 'Player7', score: 78 },
  { name: 'Player8', score: 69 },
  { name: 'Player9', score: 85 },
  { name: 'Player10', score: 60 },
  { name: 'Player11', score: 72 },
];

function ListofPlayers() {
  // Filter players with scores below 70 using arrow function
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map(({ name, score }, index) => (
          <li key={index}>
            {name} - Score: {score}
          </li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {filteredPlayers.map(({ name, score }, index) => (
          <li key={index}>
            {name} - Score: {score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
