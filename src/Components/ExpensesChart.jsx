import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import Expenses from "../Data/Savings.json";

export const ExpensesChart = () =>{
    const [expnese,setExpense] = useState([]);

    const fetchExpense = () =>{
        setExpense(Expenses)
    }

    useEffect(()=>{
        fetchExpense()
    },[]);

    const data = {
        labels: expnese.map((value)=>value.year),
        datasets: [{
            label: "Customers",
            data: expnese.map((value)=>value.expenses),
            backgroundColor:[
              "#2E0249",
              "#FF0000",
              "#570A57",
              "#00FFDD",
              "#FF0075" 
            ],
            hoverOffset: 4
        }
     ],
      };


    const options = {
        maintainAspectRatio:false,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Yealy Expenses',
          },
        },
      };

    return<>
      <div className="ExpenseChart">
          <Line data={data} options={options} width={200} height={200}/>
      </div>
    </>
}
export default ExpensesChart; 