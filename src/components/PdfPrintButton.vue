<!-- src/components/PdfPrintButton.vue -->
<template>
  <button 
    @click="triggerPrint"
    class="no-print inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm"
  >
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
    Save as PDF
  </button>
</template>

<script setup>
const triggerPrint = () => {
  window.print();
}
</script>

<style>
/* Ce style ne s'applique que lors de l'impression/export PDF */
@media print {
  /* Cacher les éléments marqués 'no-print' */
  .no-print {
    display: none !important;
  }
}
</style>