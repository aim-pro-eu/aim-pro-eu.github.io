<!-- src/components/ui/Card.vue -->
<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-slate-100 bg-slate-50">
      <slot name="header" />
    </div>
    <div class="p-6">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-6 py-4 bg-slate-50 border-t border-slate-100">
      <slot name="footer" />
    </div>
  </div>
</template>