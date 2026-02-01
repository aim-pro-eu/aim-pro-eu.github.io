<!-- src/components/Objectives.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">{{ title }}</h2>
      <p class="mt-4 max-w-2xl mx-auto text-xl text-slate-500">{{ intro }}</p>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="obj in list" 
        :key="obj.code"
        class="relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
      >
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {{ obj.code }}
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-3">{{ obj.title }}</h3>
        <p class="text-slate-600">{{ obj.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  intro: String,
  list: Array // [{code, title, description}]
});
</script>