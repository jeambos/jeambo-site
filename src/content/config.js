import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        // 建议加上 description，以防 blog index 报错
        description: z.string().optional(), 
    }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    year: z.string().optional(),
    icon: z.string().optional(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // 修正1：既然是笔记，按日期排序更合理，所以要有 pubDate
    pubDate: z.coerce.date(),
	lastUpdated: z.coerce.date().optional(),
    // 修正2：加上可选的 description，防止页面读取时报错
    description: z.string().optional(),
  }),
});

export const collections = { blog, projects, notes };