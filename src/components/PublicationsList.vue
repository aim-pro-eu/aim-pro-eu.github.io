<template>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
      <h1 class="text-4xl font-extrabold text-slate-900 mb-4">{{ title }}</h1>
      <p class="text-xl text-slate-500">{{ subTitle }}</p>
    </div>

  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section 1: Project Deliverables (PDFs) -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <span class="bg-blue-100 text-blue-800 p-2 rounded-lg">📂</span>
        Project Deliverables
      </h2>
      
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
        <div v-for="item in deliverables" :key="item.code" class="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-1">
              <span class="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase tracking-wide">
                {{ item.code }}
              </span>
              <span class="text-xs text-slate-400" v-if="item.date">{{ item.date }}</span>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ item.title }}</h3>
            <p class="text-sm text-slate-500 mt-1" v-if="item.description">{{ item.description }}</p>
          </div>
          
          <a :href="item.file" target="_blank" class="inline-flex items-center justify-center px-4 py-2 border border-blue-200 text-sm font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors shrink-0">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF
          </a>
        </div>
        
        <div v-if="!deliverables || deliverables.length === 0" class="p-8 text-center text-slate-500">
          No deliverables available yet.
        </div>
      </div>
    </div>

    <!-- Section 2: Scientific Publications (Links) -->
    <div>
      <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <span class="bg-emerald-100 text-emerald-800 p-2 rounded-lg">🎓</span>
        Scientific Publications
      </h2>

      <div class="grid gap-4">
        <div v-for="(paper, index) in papers" :key="index" class="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
          <div class="flex justify-between items-start gap-4">
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-1">
                <a :href="paper.link" target="_blank" class="hover:text-blue-700 transition-colors">
                  {{ paper.title }}
                </a>
              </h3>
              <p class="text-sm text-slate-600 mb-2">{{ paper.authors }}</p>
              <div class="flex items-center gap-3 text-xs">
                <span class="font-semibold text-blue-800 bg-blue-50 px-2 py-1 rounded">{{ paper.publisher }}</span>
                <span class="text-slate-400">{{ paper.year }}</span>
              </div>
            </div>
            
            <a :href="paper.link" target="_blank" class="text-slate-400 hover:text-blue-600 transition-colors p-2" title="View Article">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>

        <div v-if="!papers || papers.length === 0" class="p-8 text-center text-slate-500 border border-dashed border-slate-300 rounded-xl">
          No scientific publications listed yet.
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
      title: String,
  subTitle: String,

  deliverables: {
    type: Array,
    default: () => []
  },
  papers: {
    type: Array,
    default: () => []
  }
});

</script>