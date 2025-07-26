// import { defineCollection } from 'astro:content';
// import { docsSchema } from '@astrojs/starlight/schema';
// import { blogSchema } from 'starlight-blog/schema'

// export const collections = {
// 	docs: defineCollection({ schema: docsSchema() }),
// 	archetypes: defineCollection({ schema: docsSchema() }),
// 	generators: defineCollection({ schema: docsSchema() }),
// };

import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context)
    })
  }),
};