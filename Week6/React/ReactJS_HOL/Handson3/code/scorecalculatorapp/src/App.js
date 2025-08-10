import React from 'react';
import CalculateScore from './Components/CalculatorScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Shakthi Kumar" 
        School="Saveetha Engineering College" 
        Total={450} 
        Goal={500} 
      />
    </div>
  );
}

export default App;
