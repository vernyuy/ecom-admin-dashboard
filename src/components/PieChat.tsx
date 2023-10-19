// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// import { useEffect, useState } from "react";
// import { getPieChartData } from '../utils/piechat-data';
// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function PieChart() {
    
//     const [piechartData, setPiechartData] = useState([])
        

//         useEffect(()=>{
//             getPieChartData().then((data:any)=>setPiechartData(data))
//         }, [piechartData.length])
//         console.log(piechartData);
//         const options = {
//             responsive: true,
//             plugins: {
//                 legend: {
//                 position: 'top' as const,
//                 },
//                 title: {
//                 display: true,
//                 text: 'Chart',
//                 },
//             },
//         }
//       const data = {
//         // labels: piechartData.pieLable,
//         datasets: [
//           {
//             label: '# of products per category',
//             data: [],
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       // };
//   return <Pie options={options} data={data} />;
// }
