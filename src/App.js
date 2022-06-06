import React from 'react';
import DonughtChart from './Components/Charts/SalesChart';
import BarChart from './Components/Charts/SavingChart';
import LineChart  from './Components/Charts/CustomerChart';
import RevenueChart from "./Components/Charts/RevenueChart"
import HealthCard from './Components/Card/HealthCard';
import ExpensesChart from './Components/Charts/ExpensesChart';
import { GroceryCard } from './Components/Card/GroceryCard';
import TopCard from './Components/Card/TopCard';
import BottomCard from './Components/Card/BottomCard';

function App() {
  return (
    <div className="App">
      <TopCard/>
      <BottomCard/>
      {/* <DonughtChart/>
        <BarChart/>
        <LineChart/>
        <RevenueChart/>
        <HealthCard/>
        <ExpensesChart/>
        <GroceryCard/> */}
    </div>
  );
}

export default App;
