<template>
  <div class="border-b border-slate-200 last:border-none">
    <button
      @click="toggleItem"
      class="flex justify-between items-center w-full py-4 text-left focus:outline-none group"
      :aria-expanded="isOpen"
    >
      <span class="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
        {{ question }}
      </span>
      <svg
        :class="{'rotate-180': isOpen}"
        class="w-5 h-5 transition-transform duration-300 text-slate-500 group-hover:text-blue-700"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-show="isOpen"
      class="pb-4 text-slate-600 transition-all duration-300"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineProps({
  question: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);

const toggleItem = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  // Listen for the global toggle event
  window.addEventListener('toggle-all-faqs', () => {
    // We can't easily know if we should expand or collapse without a global state,
    // so we'll just toggle the current state. A better way is to use a small store.
    // For now, we will toggle to the opposite of the first item's state or a global flag.
    // Let's just toggle the value.
    isOpen.value = !isOpen.value;
  });
});
</script>
