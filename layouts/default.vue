<script setup></script>

<template>
  <section>
    
    <body class="flex">
        <Sidebar/>
        <div class="font-extrabold m-8 text-2xl text-stone-600 min-h-scree8">
          Pizza Sales Report <span class="text-lg font-semibold ml-2">Jan 2015 - Dec 2015</span>
            <slot/>
            <div class="text-center mt-24">
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