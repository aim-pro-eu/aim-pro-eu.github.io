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

export const collections = {
  'sections': sectionsCollection,
  'partners': partnersCollection,
  'workpackages': workPackagesCollection,
};