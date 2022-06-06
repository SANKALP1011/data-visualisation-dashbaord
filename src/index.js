import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/App.css"
import App from './App';
import "../src/Styles/DonughtChart.css";
import "../src/Styles/LineChart.css";
import "../src/Styles/HealthChart.css";
import "../src/Styles/CalorieChart.css";
import "../src/Styles/WeightChart.css";
import "../src/Styles/Card/HealthCard.css";
import "../src/Styles/Font/Fonts.css";
import "../src/Styles/ExpenseChart.css";
import "../src/Styles/Card/GroceryCard.css";
import "../src/Styles/Card/TopCard.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

