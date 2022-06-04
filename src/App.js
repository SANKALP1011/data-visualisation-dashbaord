import React from 'react';
import DonughtChart from './Components/ DonughtChart';
import BarChart from './Components/BarChart';
import  LineChart  from './Components/LineChart';

function App() {
  return (
    <div className="App">
      <DonughtChart/>
        <BarChart/>
        <LineChart/>
    </div>
  );
}

export default App;
