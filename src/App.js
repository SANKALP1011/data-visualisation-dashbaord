import React from 'react';
import DonughtChart from './Components/ DonughtChart';
import BarChart from './Components/BarChart';
import  LineChart  from './Components/LineChart';
import BubbleChart from './Components/BubbleChart';

function App() {
  return (
    <div className="App">
      <DonughtChart/>
        <BarChart/>
        <LineChart/>
        <BubbleChart/>
    </div>
  );
}

export default App;
