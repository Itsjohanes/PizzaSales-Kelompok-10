<template>
    <head>
        <title>Berdasarkan Ukuran | Pizza Sales Report</title> 
    </head>
    <div class="my-5 bg-white rounded-2xl font-semibold text-center text-sm text-gray-600 p-5 shadow-md w-full">
        Penjualan Berdasarkan Ukuran
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
        const response = await fetch('http://localhost:3000/pizza.csv');
        const text = await response.text();
    
        Papa.parse(text, {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            const data = results.data;
    
            // Sort the data by 'pizza_name' from A to Z
            data.sort((a, b) => a.pizza_name.localeCompare(b.pizza_name));
    
            const pizzaNames = [...new Set(data.map(item => item.pizza_name))];
            const pizzaSizes = [...new Set(data.map(item => item.pizza_size))];
    
            // Create an object to organize data
            const dataValues = {};
    
            pizzaNames.forEach(pizzaName => {
            dataValues[pizzaName] = {};
            });
    
            data.forEach(item => {
            dataValues[item.pizza_name][item.pizza_size] = (dataValues[item.pizza_name][item.pizza_size] || 0) + item.quantity;
            });
    
            createChart(pizzaNames, pizzaSizes, dataValues);
        }
        });
    }
    
    // Function to create the chart
    function createChart(rowLabels, columnLabels, data) {
        const ctx = document.getElementById('pizzaChart').getContext('2d');
        const datasets = [];
    
        columnLabels.forEach((label, index) => {
        const backgroundColor = getRandomColor(); // Generate a random color for each category
        datasets.push({
            label: label,
            data: rowLabels.map(rowLabel => data[rowLabel][label] || 0),
            backgroundColor: backgroundColor,
            borderColor: backgroundColor,
            borderWidth: 1
        });
        });
    
        new Chart(ctx, {
        type: 'bar',
        data: {
            labels: rowLabels,
            datasets: datasets,
        },
        options: {
            scales: {
            y: {
                beginAtZero: true,
            }
            }
        }
        });
    }
    
    onMounted(() => {
        fetchDataAndCreateChart();
    });
</script>
  
