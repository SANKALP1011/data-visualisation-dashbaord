/*
Bubble chart component is not working right now , make it work after designinng some other components
*/
import React , {useState , useEffect} from "react";
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
import PhaseOneRev from "../Data/PhaseOneRevenue.json";
import PhaseTwoRev from "../Data/PhaseTwoRevenue.json";


export const RevenueChart = () =>{

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

    const [companyPhaseOneRevenue,setCompanyPhaseOneRevenue] = useState([]);
    const [companyTwoIncome,setCompanyTwoIncome] = useState([]);

    const fetchOneRevenue = () =>{
       setCompanyPhaseOneRevenue(PhaseOneRev);
    }
    
    const fetchTwoRevenue = () =>{
        setCompanyTwoIncome(PhaseTwoRev)
    }

   useEffect(()=>{
     fetchOneRevenue()
     fetchTwoRevenue();
   })

    const options = {
      maintainAspectRatio:false,
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Phasewise Reveneu of the company',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    };
  

   const data = {
          labels: companyPhaseOneRevenue.map((value)=>value.year),
          datasets: [{
            label:"Phase One",
            data: companyPhaseOneRevenue.map((value)=>value.revnue),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
          },
        {
          label: "Phase Two",
          data: companyTwoIncome.map((value)=>value.revnue),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          yAxisID: 'y1',
        },
      ]
   }

 
  return<>
     <div className="LineChartBox">
         <Line data={data} options={options} width={200} height={200}/>
     </div>
  </>

}
export default RevenueChart;