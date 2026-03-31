<template>
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{{ title }}</h1>
      <p class="text-lg text-slate-600 mb-10">{{ subtitle }}</p>

      <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-10">
        <iframe
          class="w-full h-full"
          :src="videoSrc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div class="flex justify-center">
        <a href="https://www.youtube.com/@AIM-PRO-EU"
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-4 bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold rounded-full transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
          Subscribe to Channel
        </a>
      </div>
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  videoSrc: {
    type: String,
    required: true
  }
});
</script>