import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const Chart = () => {
  const [data, setData] = useState([]);

  // Example data
  const exampleData = [
    { department: 'Dept A', registeredCount: 10, closedCount: 5 },
    { department: 'Dept B', registeredCount: 8, closedCount: 3 },
    // Add more data as needed
  ];

  useEffect(() => {
    // Simulate fetching data from an API endpoint
    // Replace this with your actual data fetching logic
    setTimeout(() => {
      setData(exampleData);
    }, 1000); // Simulating a delay of 1 second
  }, []);

  const labels = data.map((el) => el.department.slice(0, 5));

  const chartdata = {
    labels,
    datasets: [
      {
        label: 'Total',
        data: data.map((el) => el.registeredCount),
        backgroundColor: 'blue',
      },
      {
        label: 'Closed',
        data: data.map((el) => el.closedCount),
        backgroundColor: 'green',
      },
    ],
  };

  return (
    <Box>
      <Box>Department wise - Total Vs Closed</Box>
      <Box w={{ base: '100%', md: '50%', sm: '100%' }} borderRadius={'15px'} p={'20px'} style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
        <Bar options={options} data={chartdata} />
      </Box>
    </Box>
  );
};

export default Chart;
