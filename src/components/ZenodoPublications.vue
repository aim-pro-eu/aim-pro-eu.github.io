<template>
  <div class="zenodo-publications w-full max-w-5xl mx-auto py-8">
    
    <!-- État de chargement initial -->
    <div v-if="loading" class="flex justify-center items-center py-12">
      <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span class="ml-3 text-gray-600 font-medium">Loading AIM-PRO project results...</span>
    </div>

    <!-- État d'erreur -->
    <div v-else-if="error" class="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-6">
      <p class="text-red-700">{{ error }}</p>
    </div>

    <!-- Conteneur principal -->
    <div v-else>
      <!-- Liste des publications -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <ul class="divide-y divide-gray-200">
          <li
            v-for="pub in publications"
            :key="pub.id"
            class="p-6 hover:bg-gray-50 transition-colors duration-200"
          >
            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

              <!-- Contenu principal (Gauche) -->
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  <a :href="pub.links.html" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition-colors">
                    {{ pub.metadata.title }}
                  </a>
                </h3>

                <p class="text-base text-gray-600 mb-4">
                  {{ formatAuthors(pub.metadata.creators) }}
                </p>

                <div class="flex flex-wrap items-center gap-3">
                  <span v-if="pub.metadata.resource_type" class="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                    {{ pub.metadata.resource_type.title }}
                  </span>

                  <span class="text-sm text-gray-500 flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {{ formatDate(pub.metadata.publication_date) }}
                  </span>

                  <span v-if="pub.metadata.access_right === 'open'" class="text-xs font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full flex items-center">
                    <span class="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span> Open Access
                  </span>
                </div>
              </div>

              <!-- Bouton d'action (Droite) -->
              <div class="flex-shrink-0 mt-2 md:mt-0">
                <a
                  :href="pub.links.self_html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all group"
                >
                  View on Zenodo
                  <svg class="w-4 h-4 ml-2 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>

            </div>
          </li>
        </ul>
      </div>

      <!-- Bouton "Charger plus" -->
      <div v-if="nextPageUrl" class="mt-8 flex justify-center">
        <button
          @click="loadMore"
          :disabled="loadingMore"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          <svg v-if="loadingMore" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span v-if="loadingMore">Loading...</span>
          <span v-else>Show more AIM-PRO project results</span>
        </button>
      </div>
    </div>

    <!-- Message si aucune publication (uniquement si le tableau est complètement vide au premier chargement) -->
    <div v-if="!loading && !error && publications.length === 0" class="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
      <p class="text-gray-500 text-lg">No results found for the AIM-PRO project.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  communityId: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    default: 25 // Limite initiale de Zenodo
  }
});

// Variables réactives
const publications = ref([]);
const loading = ref(true);
const loadingMore = ref(false); // État de chargement spécifique au bouton "Charger plus"
const error = ref(null);
const nextPageUrl = ref(null);  // Stocke l'URL de la page suivante fournie par Zenodo

// Fonction générique pour appeler l'API
const fetchFromZenodo = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }
  return await response.json();
};

// Chargement initial
const loadInitialPublications = async () => {
  loading.value = true;
  error.value = null;

  try {
    const url = `https://zenodo.org/api/records?communities=${props.communityId}&size=${props.limit}&sort=mostrecent`;
    const data = await fetchFromZenodo(url);

    publications.value = data.hits.hits;

    // Zenodo renvoie l'URL de la page suivante dans data.links.next (si elle existe)
    nextPageUrl.value = data.links?.next || null;
  } catch (err) {
    console.error("Erreur Zenodo:", err);
    error.value = "Une erreur est survenue lors de la récupération des données.";
  } finally {
    loading.value = false;
  }
};

// Chargement de la page suivante
const loadMore = async () => {
  if (!nextPageUrl.value) return;

  loadingMore.value = true;

  try {
    const data = await fetchFromZenodo(nextPageUrl.value);

    // On ajoute les nouveaux résultats à la suite du tableau existant
    publications.value = [...publications.value, ...data.hits.hits];

    // On met à jour l'URL de la page suivante (sera null s'il n'y a plus de page)
    nextPageUrl.value = data.links?.next || null;
  } catch (err) {
    console.error("Erreur Zenodo lors du chargement supplémentaire:", err);
    error.value = "Impossible de charger la suite des publications.";
  } finally {
    loadingMore.value = false;
  }
};

onMounted(() => {
  loadInitialPublications();
});

// --- Helpers pour le formatage ---

const formatAuthors = (creators) => {
  if (!creators || creators.length === 0) return 'Auteurs inconnus';
  const authorNames = creators.map(creator => creator.name);
  if (authorNames.length > 5) {
    return `${authorNames[0]}, ${authorNames[1]}, ${authorNames[2]}, ${authorNames[3]} et al.`;
  }
  return authorNames.join(' ; ');
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
</script>