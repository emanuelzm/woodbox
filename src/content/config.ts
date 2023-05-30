// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { blogSchema, authorSchema } from '../schemas';

// 2. Define your collection(s)
//const blogCollection = defineCollection({ /* ... */ });

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const products = defineCollection({
    type: 'data',
    schema: z.object({ /* ... */ })
  });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'products': products,
};