import React from 'react';
import DonughtChart from './Components/Charts/SalesChart';
import BarChart from './Components/Charts/SavingChart';
import LineChart  from './Components/Charts/CustomerChart';
import RevenueChart from "./Components/Charts/RevenueChart"
import HealthCard from './Components/Card/HealthCard';
import ExpensesChart from './Components/Charts/ExpensesChart';
import GroceryList from './Components/List/GroceryList';

function App() {
  return (
    <div className="App">
      <DonughtChart/>
        <BarChart/>
        <LineChart/>
        <RevenueChart/>
        <HealthCard/>
        <ExpensesChart/>
        <GroceryList/>
    </div>
  );
}

export default App;
