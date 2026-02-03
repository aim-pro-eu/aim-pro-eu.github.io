<!-- src/components/Hero.vue -->
<template>
  <div class="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <!-- Image de fond avec overlay -->
    <div class="absolute inset-0">
      <img v-if="bgImage" :src="bgImage" class="w-full h-full object-cover opacity-30" alt="AIM-PRO background" />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
        <span class="block text-blue-400 mb-2">
          {{ acronym }} 
        </span>
        <span class="block">
          {{ title }}</span>
      </h1>
      <div class="mt-6 max-w-3xl mx-auto text-xl text-slate-300 prose prose-invert">
        <!-- Rendu du markdown via slot ou props -->
        <slot />
                <div class="mt-4">        <img src="/public/images/logowhite.svg" alt="AIM-PRO Logo" class="mx-auto h-32 w-32 object-contain" /> 
        </div>

      </div>
      <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
        <a href="#about" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors">
          Discover Project 
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  acronym: String,
  bgImage: String,
});
</script>