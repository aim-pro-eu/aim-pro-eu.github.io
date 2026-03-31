<!-- src/components/About.vue -->
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">{{ title }}</h2>
      <div class="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
    </div>
    
    <div class="prose prose-lg prose-blue mx-auto text-slate-600 text-justify">
      <!-- Le contenu HTML généré depuis Markdown sera injecté ici -->
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>