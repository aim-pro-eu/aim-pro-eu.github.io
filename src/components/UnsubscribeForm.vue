<template>
  <div class="w-full">
    <div v-if="!isDone">
      <form @submit.prevent="submitForm" class="space-y-3">
        <div class="relative">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full px-4 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            :disabled="isLoading"
          />
        </div>

        <button
          type="submit"
          :disabled="isLoading || !email"
          class="w-full px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-md transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading">Unsubscribing...</span>
          <span v-else>Unsubscribe</span>
        </button>
      </form>

      <p v-if="notFound" class="mt-2 text-xs text-amber-600">
        This email address wasn't found on our newsletter list — it may already be unsubscribed.
      </p>
      <p v-if="error" class="mt-2 text-xs text-red-500">
        Something went wrong. Please try again later.
      </p>
    </div>

    <div v-else class="bg-white border-2 border-slate-800 p-6 rounded-lg shadow-sm">
      <h4 class="text-slate-900 font-bold text-lg tracking-tight mb-2">You're unsubscribed</h4>
      <p class="text-slate-600 text-sm leading-relaxed">
        <span class="font-semibold">{{ email }}</span> has been removed from the AIM-PRO newsletter list.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const BASEROW_TABLE_ID = '945163';
const BASEROW_TOKEN = 'c46k79o0r9uBfK4vKElesqvH7YcZOsm6';

const email = ref('');
const isLoading = ref(false);
const isDone = ref(false);
const notFound = ref(false);
const error = ref(false);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const prefill = params.get('email');
  if (prefill) email.value = prefill;
});

const submitForm = async () => {
  isLoading.value = true;
  error.value = false;
  notFound.value = false;

  try {
    const lookup = await fetch(
      `https://api.baserow.io/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true&filter__Email__equal=${encodeURIComponent(email.value)}`,
      { headers: { 'Authorization': `Token ${BASEROW_TOKEN}` } }
    );
    if (!lookup.ok) throw new Error('API Error');

    const { results } = await lookup.json();
    if (!results || results.length === 0) {
      notFound.value = true;
      return;
    }

    const deleteResponse = await fetch(
      `https://api.baserow.io/api/database/rows/table/${BASEROW_TABLE_ID}/${results[0].id}/`,
      {
        method: 'DELETE',
        headers: { 'Authorization': `Token ${BASEROW_TOKEN}` }
      }
    );
    if (!deleteResponse.ok) throw new Error('API Error');

    isDone.value = true;
  } catch (err) {
    console.error('Baserow Error:', err);
    error.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>
