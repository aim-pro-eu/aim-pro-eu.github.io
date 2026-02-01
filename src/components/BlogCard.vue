<template>
  <article class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
    <!-- Image (Optionnelle) -->
    <a :href="href" class="block overflow-hidden h-48 bg-slate-100 relative">
      <img 
        v-if="image" 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-slate-300">
        <span class="text-4xl">📰</span>
      </div>
    </a>

    <!-- Contenu -->
    <div class="p-6 flex-1 flex flex-col">
      <div class="flex items-center text-xs text-slate-500 mb-3">
        <time :datetime="date.toISOString()">{{ formattedDate }}</time>
        <span class="mx-2">•</span>
        <span>{{ author }}</span>
      </div>

      <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
        <a :href="href">
          {{ title }}
        </a>
      </h3>

      <p class="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">
        {{ description }}
      </p>

      <a :href="href" class="inline-flex items-center text-blue-700 font-semibold text-sm hover:text-blue-900">
        Read more 
        <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </a>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  date: Date,
  author: String,
  image: String,
  href: String
});

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).format(props.date);
});
</script>