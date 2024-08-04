import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';


// Register all necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
const data = {
    labels: ["6/30/2024-7/6/2024","7/72024-7/13/2024","7/21/2024-7/27/2024"],
    //"6/30/2024-7/6/2024","7/72024-7/13/2024","7/21/2024-7/27/2024"
    datasets: [
      {
        label: 'Orders',
        data: [1600, 800, 800],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.5, // For smooth lines
      },
      {
        label: 'Sales',
        data: [1300, 800, 450],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1, // For smooth lines
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} units`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const LineChart = () => {
    return (
      <div>
        <h2>Monthly Sales Line Chart</h2>
        <div style={{ height: '400px', width: '600px' }}>
          <Line data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default LineChart;
  
  