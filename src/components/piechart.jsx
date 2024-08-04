import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: ["WooCommerce Store",'Shopify Store',],
    datasets: [
      {
        label: 'WooCommerce Store vs Shopify Store',
        data: [1484,1175], // Example values for Orders and Sales
        backgroundColor: ['rgba(255, 99, 132, 0.6)','rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
        
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
          label: function (tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };
  const PieChart = () => {
    return (
      <div>
        <h2>Orders vs Sales Pie Chart</h2>
        <div style={{ height: '400px', width: '400px' }}>
          <Pie data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default PieChart;
    