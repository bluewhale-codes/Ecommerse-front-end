import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

import { Doughnut , Line } from 'react-chartjs-2'



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


  const lineState = {
    labels:["Inital Amount" , "Amount Earned"],
    datasets:[
        {
            label:"TOTAL AMOUNT",
            backgroundColor:["tomato"],
            hoverBackgroundColor:['red'],
            data:[0,4000]
        }
    ]
  };



const ordersChart = () => {
    // return <Bar data={data} />;
    <div className='lineChart'>
           <Line  data={lineState} />
    </div>
  
}

export default ordersChart