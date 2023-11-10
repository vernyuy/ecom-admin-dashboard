import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import dashboardService from '../redux-store/feature/dashboard/dashboardService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Last 7 days',
    },
  },
};
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];

const labels = ['Sunnday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export function BarChat() {
  let test = [12, 45, 64, 23, 2, 56, 67];
  const [data, setdata] = useState([])
  useEffect(() => {
    const dataset = async () => {
      const result = await dashboardService.chartData()
      setdata(result as never)
    }
    dataset()
    console.log(dataset())
  }, [])
  const graphData = {
    responsive: true,
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: data,
      backgroundColor: '#07B61A',
    },{
      label: 'Users',
      data: data,
      backgroundColor: '#07B61A',
    }
  ],
};
  return <Bar options={options} data={graphData} />;
}
