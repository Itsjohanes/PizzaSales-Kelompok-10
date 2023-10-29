<script setup></script>

<template>
  <section>
    
    <body>
        <Sidebar/>
        <div class="ml-52 sm:ml-0 lg:ml-52 font-extrabold px-4 mt-12 text-2xl text-earthy-brown min-h-screen min-w-6xl">
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

<script setup>;
</script>
