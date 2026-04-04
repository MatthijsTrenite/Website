import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    category: z.array(z.string()),
    year: z.number(),
    client: z.string(),
    credits: z.array(z.string()).optional(),
    thumbnail: z.string(),
    hero: z.string(),
    images: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

export const collections = { projects };
