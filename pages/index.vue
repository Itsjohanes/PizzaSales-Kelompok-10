<template>
  <head>
    <title>Pizza Sales Report</title>
  </head>
  <div class="mt-5 max-w-6xl mx-auto">
    <div class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
      <div class="bg-earthy-brown text-stone-50 p-5 shadow-md rounded-2xl flex">
        <div class="my-auto text-stone-200 mr-3">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10v2H1V5c0-1.105.814-2 1.818-2h18.364C22.186 3 23 3.895 23 5v12c0 1.105-.814 2-1.818 2H11v-2h10v-7H3Zm0-2h18V5H3v3Zm2.586 9H1v-2h4.586l-1.293-1.293 1.414-1.414L9.414 16l-3.707 3.707-1.414-1.414L5.586 17Z"/></svg>
        </div>
        <div class="flex-col">
          <div class="text-md">${{ totalSales.toFixed(2) }}</div>
          <div class="font-semibold text-sm text-stone-200">Total Pendapatan</div>
        </div>
      </div>
      <div class="bg-earthy-brown text-stone-50 p-5 shadow-md rounded-2xl flex">
        <div class="my-auto text-stone-200 mr-3">
          <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7a1 1 0 1 1 0-2h2.586l2.707-2.707a.997.997 0 0 1 1.655.391l1.49 4.465 1.855-1.856A.996.996 0 0 1 14 5h3a1 1 0 1 1 0 2h-2.586l-2.707 2.707a.998.998 0 0 1-1.655-.391l-1.49-4.465-1.855 1.856A.996.996 0 0 1 6 7H3zm14 2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v3h2.382c.379 0 .725.214.894.553L8 15h4l.724-1.447a.998.998 0 0 1 .894-.553H16v-3a1 1 0 0 1 1-1z" fill="currentColor"/><path fill="currentColor" d="M2 9h2v1H2zm14 0h2v1h-2z"/></svg>
        </div>
        <div class="flex-col">
          <div class="text-md">${{ averageOrderValue.toFixed(2) }}</div>
          <div class="font-semibold text-sm text-stone-200">Rata-rata Harga/Order</div>
        </div>
      </div>
      <div class="bg-earthy-brown text-stone-50 p-5 shadow-md rounded-2xl flex">
        <div class="my-auto text-stone-200 mr-3">
          <svg width="40" height="40" viewBox="0 0 1024 1024" fill="currentColor" class="icon" xmlns="http://www.w3.org/2000/svg"><path d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2.8 512 .8c108 0 196.8 88 196.8 196.8 0 .8-.8 1.6-.8 2.4v.8h212c12.8 0 23.2 9.6 24 22.4L993.6 992c.8 2.4.8 4 .8 6.4-.8 13.6-11.2 24.8-24.8 24.8h-916zm25.6-48H944l-46.4-726.4H708v57.6h.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h.8v-57.6H363.2v57.6h.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h.8v-57.6H125.6L79.2 975.2zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"/></svg>
        </div>
        <div class="flex-col">
          <div class="text-md">{{ totalOrder }}</div>
          <div class="font-semibold text-sm text-stone-200">Total Order</div>
        </div>
      </div>
      <div class="bg-earthy-brown text-stone-50 p-5 shadow-md rounded-2xl flex">
        <div class="my-auto text-stone-200 mr-3">
            <svg width="40" height="40" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.906 0a1.878 1.878 0 0 0-.468.094 1.68 1.68 0 0 0-.813.625c-.18.254-.29.511-.406.812-.383.977-1.34 3.86-1.813 5.219-.02.05-.015.105-.031.156a.466.466 0 0 0-.031.063l-3.813 9.25-.062.093a1.056 1.056 0 0 0-.063.188L5.094 36.531a.88.88 0 0 0-.032.094l-5 12c-.16.375-.078.813.211 1.102.29.289.727.37 1.102.21l41.344-17.093c.031-.008.062-.02.093-.032.985-.316 4.438-1.507 5.344-1.812.582-.195 1.188-.492 1.563-1.125s.343-1.457.031-2.188c-1.125-2.644-3.938-10.996-10.156-17.218C33.566 4.44 25.754 1.203 22.125.219c-.402-.11-.77-.25-1.219-.219Zm.313 2c-.02.023-.004.047.406.156 3.238.875 10.898 4.055 16.563 9.719 5.796 5.8 8.48 13.684 9.718 16.594.164.386.09.379.094.375.004-.004-.11.129-.469.25-.957.32-4.437 1.531-5.312 1.812a.466.466 0 0 0-.063.032c.004 0 .008-.028-.062-.22-.942-2.542-3.582-8.706-8.813-13.937-5.058-5.058-11-7.699-13.687-8.718-.25-.094-.375-.165-.438-.188.004-.023.051-.113.063-.156.047-.098.078-.203.093-.313.489-1.402 1.489-4.379 1.782-5.125.062-.16.09-.219.125-.281Zm-2.844 7.75c.172.07.348.129.5.188 2.527.957 8.254 3.503 13 8.25 4.906 4.906 7.46 10.867 8.344 13.25.027.07.062.148.093.218L25.657 37.72c.203-.54.344-1.11.344-1.719 0-2.75-2.25-5-5-5s-5 2.25-5 5c0 1.996 1.203 3.7 2.906 4.5L2.875 47.125 6 39.594C6.734 40.44 7.8 41 9 41c2.195 0 4-1.8 4-4s-1.805-4-4-4c-.094 0-.188.023-.281.031l3.5-8.437C13.316 26.047 15.047 27 17 27c3.3 0 6-2.695 6-6s-2.7-6-6-6a6.09 6.09 0 0 0-.813.063ZM17 17c2.223 0 4 1.777 4 4s-1.777 4-4 4a3.98 3.98 0 0 1-3.813-2.781l2-4.782A3.98 3.98 0 0 1 17 17Zm14 4c-2.195 0-4 1.8-4 4 0 .324.02.637.094.938A5.028 5.028 0 0 0 25 30c0 2.75 2.25 5 5 5s5-2.25 5-5c0-.969-.297-1.855-.781-2.625A3.996 3.996 0 0 0 35 25c0-2.2-1.805-4-4-4Zm0 2c1.117 0 2 .883 2 2 0 .309-.063.617-.188.875A4.919 4.919 0 0 0 30 25c-.344 0-.676.027-1 .094V25c0-1.117.883-2 2-2Zm-1 4c.809 0 1.523.332 2.063.844a.965.965 0 0 0 .28.281c.41.512.657 1.16.657 1.875 0 1.668-1.332 3-3 3s-3-1.332-3-3c0-1.117.602-2.078 1.5-2.594a.995.995 0 0 0 .531-.25c.305-.101.63-.156.969-.156Zm-9 6c1.668 0 3 1.332 3 3s-1.332 3-3 3-3-1.332-3-3 1.332-3 3-3ZM9 35c1.117 0 2 .883 2 2s-.883 2-2 2a1.992 1.992 0 0 1-2-1.844l.688-1.656A1.97 1.97 0 0 1 9 35Z"/></svg>
          </div>
          <div class="flex-col">
            <div class="text-md">{{ totalQuantity }}</div>
            <div class="font-semibold text-sm text-stone-200">Pizza Terjual</div>
          </div>
      </div>
    </div>

    <div class="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <div class="pie-chart-container bg-white rounded-2xl shadow-md p-5">
        <h2 class="text-sm">Penjualan Berdasarkan Ukuran</h2>
        <canvas id="pizzaSizeChart" width="100" height="100"></canvas>
      </div>
      <div class="pie-chart-container bg-white rounded-2xl shadow-md p-5">
        <h2 class="text-sm">Penjualan Berdasarkan Kategori</h2>
        <canvas id="pizzaCategoryChart" width="100" height="100"></canvas>
      </div>
      <div class="pie-chart-container bg-white rounded-2xl shadow-md p-5">
        <h2 class="text-sm">Tren Order Harian</h2>
        <canvas id="orderTrendChart" width="100" height="100"></canvas>
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
    const averageOrderValue = ref(0);
    const totalOrder = ref(0);
    const totalQuantity = ref(0);
    const totalSales = ref(0);
    const orderTrendData = ref(null);

    // Keep track of unique order IDs
    const uniqueOrderIds = new Set();

    // Data for the pie charts
    const sizeData = ref([]);
    const sizeLabels = ref([]);
    const categoryData = ref([]);
    const categoryLabels = ref([]);

    const popularPizzas = ref([]);

    onMounted(() => {
      // Function to parse the CSV and calculate statistics
      async function parseCSV() {
        const response = await fetch('/pizza.csv');
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

            // Group order data by day of the week
            const dailyTrend = new Array(7).fill(0); // Initialize an array to hold daily order counts

            // Calculate unique order IDs and add to the set
            data.forEach(item => {
              const order_id = item.order_id;
              if (order_id && !uniqueOrderIds.has(order_id)) {
                uniqueOrderIds.add(order_id);
                totalOrder.value += 1;
              }
            });

            // Calculate daily order trend
            data.forEach((item) => {
              const orderDate = new Date(item.order_date);
              if (!isNaN(orderDate)) {
                const dayOfWeek = orderDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
                dailyTrend[dayOfWeek] += 1;
              }
            });

            totalQuantity.value = data.reduce((total, item) => total + (item.quantity || 0), 0);
            totalSales.value = data.reduce((total, item) => total + (item.total_price || 0), 0);

            // Calculate Average Order Value (AOV)
            if (totalOrder.value > 0) {
              averageOrderValue.value = totalSales.value / totalOrder.value;
            } else {
              averageOrderValue.value = 0;
            }


            // Calculate total sale by Size (pizza_size & quantity) for the pie chart
            const sizeCounts = {};
            data.forEach(item => {
              const size = item.pizza_size;
              if (size) {
                sizeCounts[size] = (sizeCounts[size] || 0) + item.quantity;
              }
            });

            sizeLabels.value = Object.keys(sizeCounts);
            sizeData.value = Object.values(sizeCounts);

            createPieChart('pizzaSizeChart', sizeLabels.value, sizeData.value);
            createTrendChart('orderTrendChart', dailyTrend);

            // Calculate total sale by Category (pizza_category & quantity) for the pie chart
            const categoryCounts = {};
            data.forEach(item => {
              const category = item.pizza_category;
              if (category) {
                categoryCounts[category] = (categoryCounts[category] || 0) + item.quantity;
              }
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
                  '#8D6E63',
                  '#FF6B35',
                  '#D14932',
                  '#228B22',
                  '#FFD700',
                ],
              },
            ],
          },
        });
      }

      // Function to create a line chart for the daily trend
      function createTrendChart(canvasId, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                label: 'Order Harian',
                data: data,
                borderColor: '#8D6E63',
                fill: true,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }

      parseCSV();
    });

    return { totalQuantity, totalSales, totalOrder, averageOrderValue, orderTrendData };
  },
};
</script>

<style scoped>
.pie-chart-container {
  text-align: center;
}
</style>
