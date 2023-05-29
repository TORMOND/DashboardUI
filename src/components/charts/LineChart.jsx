// import React from 'react'
import { Line } from 'react-chartjs-2';
import  { useState, useEffect } from 'react';

function LineChart() {
    const [chartData, setChartData] = useState({
        datasets: [],
      });
    
      const [chartOptions, setChartOptions] = useState({});
    //   const labels = Utils.months({count: 7});
    //   const data = {
    //     labels: labels,
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       fill: false,
    //       borderColor: 'rgb(75, 192, 192)',
    //       tension: 0.1
    //     }]
    // }
    
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
                    position: 'top',
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
  options={chartData}
  data={chartOptions}

/>
    </div>
  )
}

export default LineChart
