import React from 'react';
import DonughtChart from './Components/SalesChart';
import BarChart from './Components/SavingChart';
import LineChart  from './Components/CustomerChart';
import BubbleChart from './Components/RevenueChart';
import HealthChart from './Components/HealthChart';

function App() {
  return (
    <div className="App">
      <DonughtChart/>
        <BarChart/>
        <LineChart/>
        <HealthChart/>
        {/* <BubbleChart/> */}
    </div>
  );
}

export default App;