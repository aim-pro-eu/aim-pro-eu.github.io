<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Grille principale : 4 colonnes maintenant -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <!-- Colonne 1 : Info Projet -->
        <div class="space-y-4">
          <span class="text-2xl font-bold text-white">AIM-PRO</span>
          <p class="text-sm text-slate-400">
            AI Literacy for Multidisciplinary Professional Readiness and Outreach.
          </p>
          <div class="flex space-x-4">
            <!-- Icônes réseaux sociaux (exemples) -->
            <a href="#" class="text-slate-400 hover:text-white transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        
        <!-- Colonne 2 : Liens -->
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/#about" class="hover:text-white transition-colors">About</a></li>
            <li><a href="/#partners" class="hover:text-white transition-colors">Partners</a></li>
            <li><a href="/publications" class="hover:text-white transition-colors">Publications</a></li>
            <li><a href="/newsletters" class="hover:text-white transition-colors">Newsletters</a></li>
          </ul>
        </div>

        <!-- Colonne 3 : Contact -->
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
          <p class="text-sm text-slate-400 mb-2">Project Coordinator: UDA</p>
          <a href="mailto:info@aim-pro.eu" class="text-sm text-blue-400 hover:text-blue-300 transition-colors">info@aim-pro.eu</a>
          <p class="text-sm text-slate-500 mt-4">
            Via Giovanni Di Vincenzo, 16/B<br>
            67100 L'Aquila AQ, Italy
          </p>
        </div>

        <!-- Colonne 4 : Newsletter Form (Nouveau !) -->
        <div>
          <!-- L'hydratation (client:visible) est nécessaire pour que le formulaire marche -->
          <NewsletterForm client:visible />
        </div>

      </div>

      <!-- Disclaimer UE -->
      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center gap-6">
        <img src="/images/eu-flag.webp" alt="European Union Flag" class="h-12 w-auto" /> 
        <p class="text-xs text-slate-500 text-justify max-w-3xl">
          Funded by the European Union. Views and opinions expressed are however those of the author(s) only 
          and do not necessarily reflect those of the European Union or the European Education and Culture 
          Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.
          <br>
          <span class="block mt-2">Project: 101245864 — AIM-PRO</span>
        </p>
      </div>
      
      <div class="mt-8 text-center text-xs text-slate-600">
        &copy; {{ new Date().getFullYear() }} AIM-PRO Consortium. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import NewsletterForm from './NewsletterForm.vue';
</script>