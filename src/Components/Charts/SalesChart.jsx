import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Sales from "../../Data/Sales.json";

export const DonughtChart = () =>{
    ChartJS.register(ArcElement,Tooltip,Legend);

    const[salesData,setSalesData] = React.useState([]);

    const fetchSalesData = ()=>{
       setSalesData(Sales)
    }

    React.useEffect(()=>{
      fetchSalesData()
    },[])

    const data = {
        labels: salesData.map((value)=>value.year),
        datasets: [{
          label: 'My First Dataset',
          data: salesData.map((value)=>value.sales),
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

    return <>
    <div className="DoughtChartBox">
          <Doughnut data={data} options={options} width={200} height={200}/>
    </div>
         
    </>
}
export default DonughtChart;