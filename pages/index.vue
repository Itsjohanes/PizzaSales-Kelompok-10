<template>
  <head>
    <title>Pizza Sales Report</title>
  </head>
  <div class="mt-5 w-full mx-auto">
    <div class="grid grid-cols-2 w-full gap-4">
      <div class="bg-white p-5 shadow-md rounded-2xl flex-col">
        <div class="text-md">{{ totalQuantity }}</div>
        <div class="text-sm text-stone-400">Pizza Terjual</div>
      </div>
      <div class="bg-white p-5 shadow-md rounded-2xl flex-col">
        <div class="text-md">${{ totalSales.toFixed(2) }}</div>
        <div class="text-sm text-stone-400">Total Pendapatan</div>
      </div>
    </div>

    <div class="grid grid-cols-2 w-full gap-4">
      <div class="pie-chart-container bg-white rounded-2xl shadow-md p-5">
        <h2 class="text-sm">Penjualan Berdasarkan Kategori</h2>
        <canvas id="pizzaSizeChart" width="200" height="200"></canvas>
      </div>

      <div class="pie-chart-container bg-white rounded-2xl shadow-md p-5">
        <h2 class="text-sm">Penjualan Berdasarkan Kategori</h2>
        <canvas id="pizzaCategoryChart" width="200" height="200"></canvas>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import Papa from 'papaparse';
import Chart from 'chart.js/auto';

export default {
  setup() {
    const totalQuantity = ref(0);
    const totalSales = ref(0);

    // Data for the pie charts
    const sizeData = ref([]);
    const sizeLabels = ref([]);
    const categoryData = ref([]);
    const categoryLabels = ref([]);

    onMounted(() => {
      // Function to parse the CSV and calculate statistics
      async function parseCSV() {
        const response = await fetch('https://www.miftahalamsyah.my.id/pizza.csv');
        if (!response.ok) {
          console.error('Failed to fetch CSV data');
          return;
        }
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          complete: function (results) {
            const data = results.data;

            totalQuantity.value = data.reduce((total, item) => total + (item.quantity || 0), 0);
            totalSales.value = data.reduce((total, item) => total + (item.total_price || 0), 0);

            // Calculate total sale by Size (pizza_size & quantity) for the pie chart
            const sizeCounts = {};
            data.forEach(item => {
              const size = item.pizza_size || 'Undefined'; // Use 'Undefined' for undefined values
              sizeCounts[size] = (sizeCounts[size] || 0) + item.quantity;
            });

            sizeLabels.value = Object.keys(sizeCounts);
            sizeData.value = Object.values(sizeCounts);

            createPieChart('pizzaSizeChart', sizeLabels.value, sizeData.value);

            // Calculate total sale by Category (pizza_category & quantity) for the pie chart
            const categoryCounts = {};
            data.forEach(item => {
              const category = item.pizza_category || 'Undefined'; // Use 'Undefined' for undefined values
              categoryCounts[category] = (categoryCounts[category] || 0) + item.quantity;
            });

            categoryLabels.value = Object.keys(categoryCounts);
            categoryData.value = Object.values(categoryCounts);

            createPieChart('pizzaCategoryChart', categoryLabels.value, categoryData.value);
          },
        });
      }

      // Function to create a pie chart
      function createPieChart(canvasId, labels, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                ],
              },
            ],
          },
        });
      }

      parseCSV();
    });

    return { totalQuantity, totalSales };
  },
};
</script>

<style scoped>
.pie-chart-container {
  text-align: center;
  margin: 20px;
}
</style>