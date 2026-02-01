<!-- src/components/Partners.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-slate-900">Consortium</h2>
      <p class="mt-4 text-lg text-slate-500">A strong partnership of {{ partners.length }} organizations across Europe.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="partner in partners" 
        :key="partner.shortname" 
        class="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-shadow"
      >
        <div class="h-24 w-full flex items-center justify-center mb-4 p-2">
          <!-- Fallback si pas de logo -->
          <img 
            v-if="partner.logo" 
            :src="partner.logo" 
            :alt="partner.shortname" 
            class="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
          />
          <div v-else class="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">?</div>
        </div>
        
        <h3 class="font-bold text-lg text-slate-900">{{ partner.shortname }}</h3>
        <p class="text-xs text-slate-500 mb-3 line-clamp-2 h-8" :title="partner.fullname">
          {{ partner.fullname }}
        </p>
        
        <div class="mt-auto w-full space-y-2">
          <span 
            class="inline-block px-2 py-1 text-xs font-semibold rounded-full w-full"
            :class="{
              'bg-blue-100 text-blue-800': partner.role === 'Coordinator',
              'bg-emerald-100 text-emerald-800': partner.role === 'Beneficiary',
              'bg-slate-100 text-slate-800': partner.role === 'Associated Partner'
            }"
          >
            {{ partner.role }}
          </span>
          <div class="text-xs text-slate-400 flex items-center justify-center gap-1">
            <span>🌍</span> {{ partner.country }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  partners: Array
});
</script>