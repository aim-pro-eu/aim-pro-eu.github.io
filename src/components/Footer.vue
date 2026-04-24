<template>
  <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div class="space-y-4">
          <span class="text-2xl font-bold text-white">AIM-PRO</span>
          <p class="text-sm text-slate-400">
            AI Literacy for Multidisciplinary Professional Readiness and Outreach.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.linkedin.com/company/aim-pro-eu" class="text-slate-400 hover:text-white transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.youtube.com/@AIM-PRO-EU" class="text-slate-400 hover:text-white transition-colors">
              <span class="sr-only">Youtube</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.11C19.845 3.5 12 3.5 12 3.5s-7.845 0-9.388.576a2.994 2.994 0 0 0-2.11 2.11C0 7.729 0 12 0 12s0 4.271.502 5.814a2.994 2.994 0 0 0 2.11 2.11C4.155 20.5 12 20.5 12 20.5s7.845 0 9.388-.576a2.994 2.994 0 0 0 2.11-2.11C24 16.271 24 12 24 12s0-4.271-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://zenodo.org/communities/aim-pro-eu" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center h-7 w-7 border-2 border-slate-400 rounded hover:border-white hover:bg-white transition-colors" title="View on Zenodo">
              <span class="sr-only">Zenodo</span>
              <span class="text-[15px] font-bold text-slate-400 group-hover:text-slate-900 transition-colors leading-none">ZE</span>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/#about" class="hover:text-white transition-colors">About</a></li>
            <li><a href="/#objectives" class="hover:text-white transition-colors">Objectives</a></li>
            <li><a href="/#partners" class="hover:text-white transition-colors">Partners</a></li>
            <li><a href="/publications" class="hover:text-white transition-colors">Results</a></li>
            <li><a href="/newsletters" class="hover:text-white transition-colors">Newsletters</a></li>
            <li><a href="/privacy-policy" class="hover:text-white transition-colors">Privacy & Cookies Policy </a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
          <p class="text-sm text-slate-400 mb-2">Project Coordinator: UDA</p>
          <a href="mailto:info@aim-pro.eu" class="text-sm text-blue-400 hover:text-blue-300 transition-colors">info@aim-pro.eu</a>
          <p class="text-sm text-slate-500 mt-4">
            Via Giovanni Di Vincenzo, 16/B<br>
            67100 L'Aquila AQ, Italy
          </p>
        </div>

        <div>
          <NewsletterForm client:visible />
        </div>
      </div>

      <div class="pt-8 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-2 gap-12">

        <a href="https://commission.europa.eu/" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-4 transition-colors hover:bg-slate-800/30 p-2 -m-2 rounded-lg">
          <img src="/images/eu-flag.webp" alt="European Union Flag" class="h-8 w-auto flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
          <p class="text-[12px] leading-relaxed text-slate-500 group-hover:text-slate-400 text-justify transition-colors">
            This project is funded by the European Union. Views and opinions expressed are however those of the author(s) only
            and do not necessarily reflect those of the European Union or the European Education and Culture
            Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.
            <span class="block mt-1 font-medium text-slate-400 group-hover:text-blue-400">Project: 101245864 — AIM-PRO</span>
          </p>
        </a>

        <a href="https://www.movetia.ch" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-4 transition-colors hover:bg-slate-800/30 p-2 -m-2 rounded-lg">
          <img src="/images/logos/movetia.png" alt="Movetia Logo" class="h-8 w-auto flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
          <p class="text-[12px] leading-relaxed text-slate-500 group-hover:text-slate-400 text-justify transition-colors">
            This project is financially supported by Movetia. This Swiss funding agency promotes exchanges, mobility
            and cooperation in education, continuing education and youth work - in Switzerland, Europe and worldwide.
            <span class="block mt-1 font-medium text-slate-400 group-hover:text-blue-400">Visit www.movetia.ch</span>
          </p>
        </a>

      </div>

      <div class="mt-12 text-center text-xs text-slate-600">
        &copy; {{ new Date().getFullYear() }} AIM-PRO Consortium. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import NewsletterForm from './NewsletterForm.vue';
</script>