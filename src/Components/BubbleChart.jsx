import React , {useState , useEffect} from "react";
import { Bubble } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import Revenue from "../Data/Company.json";

export const BubbleChart = () =>{

    ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

    const [companyIncome,setCompanyIncome] = useState([]);
    
    const fetchRevenue = () =>{
        setCompanyIncome(Revenue)
        console.log(console.log(companyIncome.map((value)=>value.year)))
    }

    useEffect(()=>{
       fetchRevenue()
    },[])

     const data = {
        labels: companyIncome.map((value)=>value.year),
        datasets: [
          {
            label: 'Red dataset',
            data: ({
              x: companyIncome.map((value)=>value.revnue) ,
              y: companyIncome.map((value)=>value.revnue) ,
              r: companyIncome.map((value)=>value.revnue) ,
          }),
            backgroundColor: [
                "#2E0249",
                "#FF0000",
                "#570A57",
                "#00FFDD",
                "#FF0075" 
        ],
        hoverOffset: 4
    }
    ]
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
        text: 'Sales',
      },
    },
    scales: {
        y: {
          beginAtZero: true,
        },
      },
    
  };

  return<>
     <div className="LineChartBox">
         <Bubble data={data} options={options} width={200} height={200}/>
     </div>
  </>

}
export default BubbleChart