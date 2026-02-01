<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Logo Projet -->
        <div>
          <span class="text-2xl font-bold text-white">AIM-PRO</span>
          <p class="mt-2 text-sm text-slate-400">
            AI Literacy for Multidisciplinary Professional Readiness and Outreach.
          </p>
        </div>
        
        <!-- Liens rapides -->
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#about" class="hover:text-white">About</a></li>
            <li><a href="#partners" class="hover:text-white">Partners</a></li>
            <li><a href="/admin" class="hover:text-white">Admin Login</a></li>
          </ul>
        </div>

        <!-- Contact (Placeholder) -->
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
          <p class="text-sm">Project Coordinator: UDA</p>
          <a href="mailto:info@aim-pro.eu" class="text-sm hover:text-white transition-colors">info@aim-pro.eu</a>
        </div>
      </div>

      <!-- Disclaimer UE -->
      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center gap-6">
        <img src="/images/eu-flag.webp" alt="European Union Flag" class="h-12 w-auto" /> 
        <!-- Assurez-vous d'avoir le drapeau UE dans /public/images/ -->
        <p class="text-xs text-slate-400 text-justify max-w-3xl">
          Funded by the European Union. Views and opinions expressed are however those of the author(s) only 
          and do not necessarily reflect those of the European Union or the European Education and Culture 
          Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.
          <br>
          <span class="block mt-2">Project: 101245864 — AIM-PRO</span>
        </p>
      </div>
      
      <div class="mt-8 text-center text-xs text-slate-500">
        &copy; {{ new Date().getFullYear() }} AIM-PRO Consortium. All rights reserved.
      </div>
    </div>
  </footer>
</template>