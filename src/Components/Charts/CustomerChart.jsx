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
import CustomersData from "../../Data/Sales.json";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const CustomerChart = () =>{
      const [customers,setCustomers] = useState([]);

      const fetchCustomnersData = () =>{
          setCustomers(CustomersData);
      }
      useEffect(()=>{
          fetchCustomnersData()
      },[]);

    const data = {
        labels: customers.map((value)=>value.year),
        datasets: [{
            label: "Customers",
            data: customers.map((value)=>value.customers),
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
            text: 'Customers',
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        }
      };

      return<>
        <div className="LineChartBox">
            <Line data={data} options={options} width={200} height={200}/>
        </div>
      </>
    

  }
  export default CustomerChart