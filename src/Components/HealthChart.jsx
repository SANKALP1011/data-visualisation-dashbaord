import React , {useState,useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import HealthData from "../Data/HealthData.json";

export const HealthChart = () =>{
  
  ChartJS.register(ArcElement,Tooltip,Legend);
  const [stepssss,setSteps] = useState([]);
  // const [calorie,setCalorie] = useState([]);
  // const [weight,setWeight] = useState([]);

  // const[salesData,setSalesData] = React.useState([]);

  // const fetchSalesData = ()=>{
  //    setSalesData(Sales)
  // }

  // React.useEffect(()=>{
  //   fetchSalesData()
  // },[])
  
  const fetchSteps = () =>{
     setSteps(HealthData)
  }

//   const fetchCalories = () =>{
//       setCalorie(HealthData);
// }

//   const fetchWeight = () =>{
//     setWeight(HealthData)
//   }

  useEffect(()=>{
    fetchSteps();
    // fetchCalories()
    // fetchWeight();
},[])


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
};

const data = {
  labels: stepssss.map((value)=>value.month),
  datasets: [{
    label: 'My First Dataset',
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
    <div>
          <Doughnut data={data} options={options} width={200} height={200}/>
    </div>
  </>
}

export default HealthChart;