<template>
<div class="transition-all top-0 bottom-0 min-h-screen duration-300 transform z-40 w-48 bg-white pt-7 pb-10 shadow-md hidden md:block">
  <div class="px-4 py-6">
    <div class="text-center text-2xl">
      📈
    </div>
    <ul class="mt-6 space-y-1 text-center">
      <li>
        <nuxt-link to="/" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700" :class="{'bg-stone-100': isActive('/')}">
          Dashboard
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/ukuran" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700" :class="{'bg-stone-100': isActive('/ukuran')}">
          Ukuran
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/tren" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700" :class="{'bg-stone-100': isActive('/tren')}">
          Tren
        </nuxt-link>
      </li>
      
      <li>
        <nuxt-link to="/harga" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700" :class="{'bg-stone-100': isActive('/harga')}">
          Harga
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/pendapatan" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700" :class="{'bg-stone-100': isActive('/pendapatan')}">
          Pendapatan
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/vegetarian" class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700" :class="{'bg-stone-100': isActive('/vegetarian')}">
          Vegetarian
        </nuxt-link>
      </li>
    </ul>
  </div>

  
</div>

</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>