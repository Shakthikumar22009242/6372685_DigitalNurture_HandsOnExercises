// src/IndianPlayers.js
import React from 'react';

function IndianPlayers() {
  const players = [
    'Player1',
    'Player2',
    'Player3',
    'Player4',
    'Player5',
    'Player6',
    'Player7',
    'Player8',
    'Player9',
    'Player10',
    'Player11',
  ];

  // Destructuring odd and even players
  const oddPlayers = players.filter((_, index) => index % 2 === 0); // 0,2,4... (odd positions)
  const evenPlayers = players.filter((_, index) => index % 2 !== 0); // 1,3,5... (even positions)

  // T20 and Ranji Trophy arrays
  const T20players = ['T20_Player1', 'T20_Player2', 'T20_Player3'];
  const RanjiTrophyPlayers = ['Ranji_Player1', 'Ranji_Player2', 'Ranji_Player3'];

  // Merge arrays using spread operator
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players</h2>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
