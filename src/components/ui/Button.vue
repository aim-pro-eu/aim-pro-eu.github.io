<!-- src/components/ui/Button.vue -->
<template>
  <component 
    :is="href ? 'a' : 'button'" 
    :href="href"
    class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="variantClasses"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: String,
  variant: {
    type: String,
    default: 'primary', // 'primary', 'secondary', 'outline'
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  }
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary': return 'bg-blue-700 hover:bg-blue-800 text-white focus:ring-blue-500';
    case 'secondary': return 'bg-yellow-400 hover:bg-yellow-500 text-blue-900 focus:ring-yellow-500'; // Couleurs UE
    case 'outline': return 'border-blue-700 text-blue-700 hover:bg-blue-50 focus:ring-blue-500';
    default: return '';
  }
});
</script>