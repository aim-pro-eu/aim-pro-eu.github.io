<template>
  <div class="mt-12">
    <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
      <span class="text-[#0077b5]">in</span> 
      Social Media Highlights
    </h3>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="(post, index) in posts" 
        :key="index"
        class="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 group"
      >
        <!-- Image du post -->
        <a :href="post.postUrl" target="_blank" class="block h-48 overflow-hidden relative">
          <img 
            :src="post.image.src || post.image" 
            :alt="post.summary" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <!-- Overlay icône LinkedIn -->
          <div class="absolute top-2 right-2 bg-white/90 p-1.5 rounded-md shadow-sm">
            <svg class="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </div>
        </a>

        <!-- Contenu -->
        <div class="p-5">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
            Posted by {{ post.author }}
          </p>
          <p class="text-sm text-slate-700 mb-4 line-clamp-3">
            {{ post.summary }}
          </p>
          <a 
            :href="post.postUrl" 
            target="_blank"
            class="inline-flex items-center text-sm font-medium text-[#0077b5] hover:underline"
          >
            View on LinkedIn &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    required: true
  }
});
</script>