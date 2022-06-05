import React , {useState,useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import HealthData from "../Data/HealthData.json";

export const StepsChart = () =>{
  
  ChartJS.register(ArcElement,Tooltip,Legend);
  const [stepssss,setSteps] = useState([]);


  
  const fetchSteps = () =>{
     setSteps(HealthData)
  }

  useEffect(()=>{
    fetchSteps();
},[])


const options = {
  maintainAspectRatio:false,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Steps',
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
  labels: stepssss.map((value)=>value.month),
  datasets: [{
    label: 'Steps',
    data: stepssss.map((value)=>value.steps),
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
    <div className="HealthChartBox">
          <Doughnut data={data} options={options} width={130} height={130}/>
    </div>
  </>
}

export default StepsChart;