// src/App.js
import React from 'react';
import ListofPlayers from './Playerslist';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = false; // Change to false to switch views

  return (
    <div style={{ margin: '20px' }}>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
