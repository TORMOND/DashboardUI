// import React from 'react'
import { Line } from 'react-chartjs-2';
import  { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement  
)

function LineChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Sales $',
                data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4',
              }, 
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'false',
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <div>
      <Line
  options={chartOptions}
  data={chartData}
  className='h-48'

/>
    </div>
  )
}

export default LineChart
