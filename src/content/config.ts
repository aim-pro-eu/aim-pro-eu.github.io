// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const sectionsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    subTitle: z.string().optional(),
    // Pour le Hero
    acronym: z.string().optional(),
    bgImage: z.string().optional(),
    // Pour les objectifs
    objectives: z.array(z.object({
      code: z.string(), // ex: SO1
      title: z.string(),
      description: z.string()
    })).optional(),
    deliverables: z.array(z.object({
      code: z.string(), // ex: D1.1
      title: z.string(),
      description: z.string().optional(),
      file: z.string(), // Chemin vers le PDF
      date: z.string().optional() // ex: "February 2026"
    })).optional(),
    scientific_papers: z.array(z.object({
      title: z.string(),
      authors: z.string(),
      publisher: z.string(), // ex: IEEE, Springer
      link: z.string().url(),
      year: z.string()
    })).optional(),
  }),
});

const partnersCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    shortname: z.string(), // ex: UDA
    fullname: z.string(),
    country: z.string(),
    role: z.enum(['Coordinator', 'Beneficiary', 'Associated Partner']),
    logo: z.string(),
    website: z.string().url().optional(),
  }),
});

const workPackagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    wpNumber: z.string(), // ex: WP1
    title: z.string(),
    leader: z.string(), // ex: UDA
    duration: z.string(), // ex: M1-M36
    description: z.string().optional(),
  }),
});

// Ajoutez ceci dans src/content/config.ts
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('AIM-PRO Team'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false), // Utile pour Decap CMS
  }),
});


export const collections = {
  'sections': sectionsCollection,
  'partners': partnersCollection,
  'workpackages': workPackagesCollection,
  'blog': blogCollection,
};