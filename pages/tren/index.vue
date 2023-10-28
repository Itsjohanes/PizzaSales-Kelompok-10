<template>
  <head>
    <title>Tren Penjualan Setiap Bulan | Pizza Sales Report</title>
  </head>
  <div
    class="my-5 bg-white rounded-2xl font-semibold text-center text-sm text-gray-600 p-5 shadow-md w-full"
  >
    Tren Penjualan Setiap Bulan
    <canvas id="pizzaChart" width="1024" height="720" class="mt-12"></canvas>
  </div>
  
</template>

<script setup>
  import { onMounted } from 'vue';
  import Papa from 'papaparse';
  import Chart from 'chart.js/auto';

  // Function to generate random colors
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Function to fetch and process data
async function fetchDataAndCreateChart() {
  const response = await fetch('https://www.miftahalamsyah.my.id/pizza.csv');
  const text = await response.text();

  Papa.parse(text, {
    header: true,
    dynamicTyping: true,
    complete: function (results) {
      const data = results.data;

      // Extract the order date (month) from the 'order_date' field and filter invalid dates
      data.forEach(item => {
        const orderDate = new Date(item.order_date);
        if (!isNaN(orderDate)) {
          item.order_month = orderDate.toLocaleDateString('en-US', { month: 'long' });
        } else {
          item.order_month = null;
        }
      });

      // Filter out entries with null dates
      const filteredData = data.filter(item => item.order_month !== null);

      // Sort the data by 'pizza_name' from A to Z
      filteredData.sort((a, b) => a.pizza_name.localeCompare(b.pizza_name));

      const pizzaNames = [...new Set(filteredData.map(item => item.pizza_name))];
      const orderMonths = [...new Set(filteredData.map(item => item.order_month))];

      // Create an object to organize data
      const dataValues = {};

      pizzaNames.forEach(pizzaName => {
        dataValues[pizzaName] = {};
      });

      filteredData.forEach(item => {
        dataValues[item.pizza_name][item.order_month] =
          (dataValues[item.pizza_name][item.order_month] || 0) + item.quantity;
      });

      createChart(pizzaNames, orderMonths, dataValues);
    }
  });
}

  // Function to create the chart
function createChart(rowLabels, columnLabels, data) {
  const ctx = document.getElementById('pizzaChart').getContext('2d');
  const datasets = [];

  rowLabels.forEach((label, index) => {
    const backgroundColor = getRandomColor();
    datasets.push({
      label: label,
      data: columnLabels.map(columnLabel => data[label][columnLabel] || null), // Use null for missing data
      backgroundColor: 'transparent',
      borderColor: backgroundColor,
      pointRadius: 5,
      pointHoverRadius: 7,
    });
  });

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: columnLabels,
      datasets: datasets,
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        point: {
          radius: 0, // Hide points without data
        },
      },
    },
  });
}


  onMounted(() => {
    fetchDataAndCreateChart();
  });
</script>
