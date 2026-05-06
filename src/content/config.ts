import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    typeHtml: z.string(),
    icon: z.string(),
    iconSize: z.number(),
    glowSize: z.string(),
    color: z.enum(['pink', 'lime', 'cyan']),
    colSpan: z.string(),
    comingSoon: z.boolean().default(false),
    featured: z.boolean().default(false),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    date: z.string(),
    color: z.enum(['cyan', 'pink', 'lime']),
    tags: z.array(z.string()),
    order: z.number(),
    bullets: z.array(z.string())
  }),
});

export const collections = { projects, experience };
