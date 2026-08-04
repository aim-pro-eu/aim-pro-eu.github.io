<template>
  <div class="w-full">
    <form @submit.prevent="submitForm" class="space-y-5">
      <!-- Honeypot: hidden from real visitors, bots tend to fill every field they find -->
      <div class="hp-field" aria-hidden="true">
        <label for="company">Company</label>
        <input
          id="company"
          v-model="honeypot"
          type="text"
          name="company"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <div>
        <label for="name" class="block text-sm font-medium text-slate-700 mb-1">
          Name <span class="text-red-500">*</span>
        </label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          class="w-full px-4 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label for="affiliation" class="block text-sm font-medium text-slate-700 mb-1">
          Affiliation <span class="text-red-500">*</span>
        </label>
        <input
          id="affiliation"
          v-model="affiliation"
          type="text"
          required
          placeholder="Organisation, university, company..."
          class="w-full px-4 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-slate-700 mb-1">
          Email <span class="text-red-500">*</span>
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="w-full px-4 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-slate-700 mb-1">
          Subject <span class="text-red-500">*</span>
        </label>
        <input
          id="subject"
          v-model="subject"
          type="text"
          required
          class="w-full px-4 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-slate-700 mb-1">
          Message <span class="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          v-model="message"
          required
          rows="5"
          class="w-full px-4 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full sm:w-auto px-6 py-2.5 bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors flex items-center justify-center"
      >
        Send message
      </button>

      <p class="text-xs text-slate-400">
        Opens your email application, addressed to
        <span class="font-medium text-slate-500">info@aim-pro.eu</span>.
      </p>

      <div v-if="mailtoFailed" class="text-sm text-amber-600 space-y-2">
        <p>
          Nothing happened? Your device may not have an email application configured. Please
          write to us directly at
          <a href="mailto:info@aim-pro.eu" class="underline font-medium">info@aim-pro.eu</a>,
          or copy your message below and paste it into an email.
        </p>
        <button
          type="button"
          @click="copyContent"
          class="inline-flex items-center px-3 py-1.5 border border-amber-300 rounded-md text-amber-700 hover:bg-amber-50 transition-colors text-xs font-medium"
        >
          {{ copied ? 'Copied!' : 'Copy message' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const affiliation = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const honeypot = ref('');
const mailtoFailed = ref(false);
const copied = ref(false);

const buildBody = () =>
  `Name: ${name.value}\n` +
  `Affiliation: ${affiliation.value}\n` +
  `Email: ${email.value}\n\n` +
  message.value;

const submitForm = () => {
  // Honeypot filled in => almost certainly a bot. Do nothing.
  if (honeypot.value) return;

  mailtoFailed.value = false;
  copied.value = false;

  const mailtoUrl =
    `mailto:info@aim-pro.eu?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(buildBody())}`;

  // A mail client opening normally takes the page out of focus. If the page is
  // still focused after a short delay, assume there's no email app configured.
  const onBlur = () => {
    clearTimeout(fallbackTimer);
    window.removeEventListener('blur', onBlur);
  };
  window.addEventListener('blur', onBlur);
  const fallbackTimer = setTimeout(() => {
    window.removeEventListener('blur', onBlur);
    mailtoFailed.value = true;
  }, 1500);

  window.location.href = mailtoUrl;
};

const copyContent = async () => {
  const content = `To: info@aim-pro.eu\nSubject: ${subject.value}\n\n${buildBody()}`;
  await navigator.clipboard.writeText(content);
  copied.value = true;
};
</script>

<style scoped>
/* Off-screen rather than display:none, since some bots skip fields hidden that way */
.hp-field {
  position: absolute;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
