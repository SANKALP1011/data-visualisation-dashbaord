import React , {useState,useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import HealthData from "../Data/HealthData.json";

export const HealthChart = () =>{
  
  ChartJS.register(ArcElement,Tooltip,Legend);
  const [stepssss,setSteps] = useState([]);
  const [calorie,setCalorie] = useState([]);
  const [weight,setWeight] = useState([]);

  
  const fetchSteps = () =>{
     setSteps(HealthData)
  }

  const fetchCalories = () =>{
      setCalorie(HealthData);
}

  const fetchWeight = () =>{
    setWeight(HealthData)
  }

  useEffect(()=>{
    fetchSteps();
    fetchCalories()
    fetchWeight();
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

const dataOne = {
  labels: stepssss.map((value)=>value.month),
  datasets: [{
    label: 'Steps',
    data: stepssss.map((value)=>value.steps),
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
    <div className="HealthChartBox">
          <Doughnut data={dataOne} options={options} width={130} height={130}/>
    </div>
  </>
}

export default HealthChart;