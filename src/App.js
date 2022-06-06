import React from 'react';
import TopCard from './Components/Card/TopCard';
import MidCard from './Components/Card/MidCard';
import { BottomCard } from './Components/Card/BottomCard';
import UserTop from './Components/UserTop/UserTop';

function App() {
  return (
    <div className="App">
      <UserTop/>
      <TopCard/>
      <MidCard/>
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
