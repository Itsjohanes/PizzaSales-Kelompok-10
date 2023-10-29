<script setup>
</script>

<template>
  <section>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <body style="font-family: 'Poppins', sans-serif;">
      <Sidebar/>
      <div class="ml-0 xs:ml-0 sm:ml-0 md:ml-0 lg:ml-52 font-extrabold px-4 mt-12 text-2xl text-earthy-brown min-h-screen min-w-6xl">
        Pizza Sales Report <span class="text-lg font-semibold ml-2">Jan 2015 - Dec 2015</span>
        <slot/>
        <div class="text-center mt-24 mb-12">
          <a href="https://github.com/Itsjohanes" class="text-center text-sm font-semibold">
            2023 | Johan Sigmul
          </a>
        </div>
      </div>
    </body>
  </section>
</template>
