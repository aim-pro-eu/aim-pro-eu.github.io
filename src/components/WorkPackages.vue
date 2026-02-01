<!-- src/components/WorkPackages.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-slate-900 mb-12">Work Plan Structure</h2>
    
    <div class="space-y-4">
      <div 
        v-for="wp in packages" 
        :key="wp.wpNumber"
        class="bg-white rounded-lg border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 font-bold">
            {{ wp.wpNumber }}
          </div>
          <div>
            <h3 class="text-lg font-semibold text-slate-900">{{ wp.title }}</h3>
            <p class="text-sm text-slate-500 mt-1" v-if="wp.description">{{ wp.description }}</p>
          </div>
        </div>
        
        <div class="mt-4 md:mt-0 flex items-center gap-6 text-sm text-slate-600 pl-16 md:pl-0">
          <div class="flex items-center gap-2">
            <span class="font-medium text-slate-900">Leader:</span> {{ wp.leader }}
          </div>
          <div class="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
            <span>⏱️</span> {{ wp.duration }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  packages: Array
});
</script>