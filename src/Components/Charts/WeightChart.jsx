import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS , Tooltip,Legend,ArcElement} from "chart.js";
import HealthData from "../../Data/HealthData.json";

export const WeightChart = () =>{
    const [weight,setWeight] = useState([]);

    const fetchWeight = () =>{
        setWeight(HealthData)
    }

    useEffect(()=>{
        fetchWeight()
    },[]);

    const options = {
        maintainAspectRatio:false,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Weight',
          },
          tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        legend: {
          display: false
      },
        },
      };

      const data = {
        labels: weight.map((value)=>value.month),
        datasets: [{
          label: 'Weight',
          data: weight.map((value)=>value.weight),
          backgroundColor: [
            "#2E0249",
            "#FF0000",
            "#570A57",
            "#00FFDD",
            "#FF0075",
            "#F1D00A",
            "#C996CC",
            "#F73D93",
            "#1E5128",
            "#FF4C29",
            "#C6DE41",
            "#141010"
          ],
          hoverOffset: 4
        }],
      
      };

      return<>
         <div className="WeightChartBox">
             <Doughnut data={data} options={options} width={130} height={130}/>
         </div>
      </>

}
export default WeightChart;