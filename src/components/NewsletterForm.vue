<template>
  <div class="w-full">
    <div v-if="!isSubmitted">
      <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">
        Stay Updated
      </h3>
      <p class="text-slate-400 text-sm mb-4">
        Subscribe to our newsletter to receive the latest updates on AI Literacy and project results.
      </p>
      
      <form @submit.prevent="submitForm" class="space-y-3">
        <div class="relative">
          <input 
            v-model="email"
            type="email" 
            placeholder="Enter your email" 
            required
            class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            :disabled="isLoading"
          />
        </div>

        <!-- Checkbox GDPR (Obligatoire pour projet UE) -->
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
            I agree to receive communications from AIM-PRO. 
            <a href="#" class="underline hover:text-slate-300">Privacy Policy</a>.
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
        Something went wrong. Please try again.
      </p>
    </div>

    <!-- Message de succès -->
    <div v-else class="bg-green-900/30 border border-green-800 rounded-lg p-4 text-center">
      <div class="text-green-400 text-3xl mb-2">✓</div>
      <h4 class="text-white font-medium mb-1">Thank you!</h4>
      <p class="text-slate-400 text-sm">
        You have successfully subscribed to the AIM-PRO newsletter.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// --- CONFIGURATION ---
// Remplacez ces valeurs par celles obtenues à l'Étape 1
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeQIJtn1SKisLF2EcgYBc9NByvz06QT92qwtE3Siaa94Mv78Q/formResponse';

//https://docs.google.com/forms/d/e/1FAIpQLSeQIJtn1SKisLF2EcgYBc9NByvz06QT92qwtE3Siaa94Mv78Q/viewform?usp=pp_url&entry.2116962394=test@test.com
const EMAIL_FIELD_NAME = 'entry.2116962394'; 
// ---------------------

const email = ref('');
const consent = ref(false);
const isLoading = ref(false);
const isSubmitted = ref(false);
const error = ref(false);

const submitForm = async () => {
    console.error('Submitting form with email:', email.value, 'and consent:', consent.value); // Debug: Vérifier les valeurs avant soumission
    isLoading.value = true;
  error.value = false;

  const formData = new FormData();
  formData.append(EMAIL_FIELD_NAME, email.value);
    console.error('Form Data:', Array.from(formData.entries())); // Debug: Vérifier les données envoyées
  try {
    // Mode 'no-cors' est nécessaire pour Google Forms.
    // Cela signifie qu'on ne peut pas lire la réponse (200 OK), 
    // mais la soumission fonctionne quand même.
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    // On assume le succès car Google ne renvoie pas d'erreur en no-cors
    isSubmitted.value = true;
    email.value = '';
  } catch (err) {
    console.error('Submission error:', err);
    error.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>