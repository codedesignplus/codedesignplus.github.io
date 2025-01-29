import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	archetypes: defineCollection({ schema: docsSchema() }),
	generators: defineCollection({ schema: docsSchema() }),
};

