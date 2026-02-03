<!-- src/components/Navbar.vue -->
<template>
  <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#" class="flex-shrink-0 flex items-center gap-2">
            <!-- Placez votre logo ici -->
             <img src="/images/logo.png" alt="AIM-PRO Logo" class="h-8 w-8 object-contain" />
            <span class="font-bold text-2xl text-blue-800">AIM-PRO</span>
          </a>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in menuItems" :key="item.href" :href="item.href" 
             class="text-slate-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
            {{ item.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button @click="isOpen = !isOpen" class="text-slate-600 hover:text-blue-700 p-2">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-white border-b border-slate-200">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a v-for="item in menuItems" :key="item.href" :href="item.href" 
           @click="isOpen = false"
           class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50">
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const menuItems = [
  { label: 'About', href: '/#about' },
  { label: 'Objectives', href: '/#objectives' },
  { label: 'Work Plan', href: '/#work-packages' },
  { label: 'Partners', href: '/#partners' },
  { label: 'News', href: '/blog' },
  { label: 'Publications', href: '/publications' }, 

];
</script>