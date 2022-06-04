import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import Savings from "../Data/Savings.json";


export const BarChart = () =>{

    ChartJS.register( CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend)

    const [savingsData,setSavingsData] = React.useState([]);

    const fetchSavingsData = () =>{
        setSavingsData(Savings);
        console.log(savingsData.map((value)=>value.savings))
    }

    React.useEffect(()=>{
        fetchSavingsData();
    },[])

    const options = {
        maintainAspectRatio:false,
        indexAxis: 'x',
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Savings',
          },
        },
      };
   
    const data = {
        labels: savingsData.map((value)=>value.year),
        datasets: [{
            label: "Savings",
            data: savingsData.map((value)=>value.savings),
            backgroundColor: [
              "#2E0249",
              "#FF0000",
              "#570A57",
              "#00FFDD",
              "#FF0075"
            ],
            hoverOffset: 4
     }],
    };

    return<>
       <div className="BarChartBox">
          <Bar data={data} options={options} height={200} width={200}/>
       </div>
    </>
}
export default BarChart;