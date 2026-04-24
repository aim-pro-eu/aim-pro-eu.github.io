<template>
  <div class="w-full">
    <div v-if="!isSubmitted">
      <h3 class="text-sm font-semibold text-blue-800 tracking-wider uppercase mb-4">
        Stay Updated
      </h3>
      <p class="text-slate-400 text-sm mb-4">
        Subscribe to our quarterly newsletter to receive the latest updates on AI Literacy and project results.
      </p>

      <form @submit.prevent="submitForm" class="space-y-3">
        <div class="relative">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full px-4 py-2 border border-slate-700 rounded-md placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            :disabled="isLoading"
          />
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="consent"
              v-model="consent"
              type="checkbox"
              required
              class="w-4 h-4 bg-slate-800 border-slate-700 rounded text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900"
            />
          </div>
          <label for="consent" class="ml-2 text-xs text-slate-500">
            I agree to receive communications from AIM-PRO and confirm that I have read and understood the
            <a href="/privacy-policy" class="underline hover:text-slate-300">Privacy Policy</a>.
          </label>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading">Subscribing...</span>
          <span v-else>Subscribe</span>
        </button>
      </form>

      <p v-if="error" class="mt-2 text-xs text-red-400">
        Something went wrong. Please try again later.
      </p>
    </div>

    <div v-else class="bg-slate-900 border-2 border-blue-500 p-6 rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300">
      <div class="flex items-center mb-4">
        <div class="bg-blue-600 p-1.5 rounded-full mr-3">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h4 class="text-white font-bold text-lg tracking-tight">Subscription Successful</h4>
      </div>

      <p class="text-slate-100 text-sm leading-relaxed mb-4">
        Thank you! You have been added to the <span class="text-blue-400 font-bold">AIM-PRO</span> newsletter list.
      </p>

      <button
        @click="isSubmitted = false"
        class="text-[10px] font-black text-blue-500 hover:text-blue-400 tracking-widest uppercase transition-colors"
      >
        ← Register another email
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Configuration Baserow (Gardée telle quelle)
const BASEROW_TABLE_ID = '945163';
const BASEROW_TOKEN = 'c46k79o0r9uBfK4vKElesqvH7YcZOsm6';

const email = ref('');
const consent = ref(false);
const isLoading = ref(false);
const isSubmitted = ref(false);
const error = ref(false);

const submitForm = async () => {
  isLoading.value = true;
  error.value = false;

  try {
    const response = await fetch(`https://api.baserow.io/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${BASEROW_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'Email': email.value
      })
    });

    if (!response.ok) throw new Error('API Error');

    isSubmitted.value = true;
    email.value = '';
    consent.value = false;
  } catch (err) {
    console.error('Baserow Error:', err);
    error.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>