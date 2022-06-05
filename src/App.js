import React from 'react';
import DonughtChart from './Components/SalesChart';
import BarChart from './Components/SavingChart';
import LineChart  from './Components/CustomerChart';
import RevenueChart from "../src/Components/RevenueChart"
import HealthChart from './Components/StepsChart';
import  CalorieChart  from './Components/Caloriecharts';
import WeightChart  from './Components/WeightChart';

function App() {
  return (
    <div className="App">
      <DonughtChart/>
        <BarChart/>
        <LineChart/>
        <HealthChart/>
        <CalorieChart/>
        <WeightChart/>
        <RevenueChart/>
    </div>
  );
}

export default App;
