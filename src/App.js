import React from 'react';
import DonughtChart from './Components/SalesChart';
import BarChart from './Components/SavingChart';
import LineChart  from './Components/CustomerChart';
import RevenueChart from "../src/Components/RevenueChart"
import HealthCard from './Components/Card/HealthCard';
import ExpensesChart from './Components/ExpensesChart';

function App() {
  return (
    <div className="App">
      <DonughtChart/>
        <BarChart/>
        <LineChart/>
        <RevenueChart/>
        <HealthCard/>
        <ExpensesChart/>
    </div>
  );
}

export default App;
