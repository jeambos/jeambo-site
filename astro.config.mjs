// astro.config.mjs
import { defineConfig } from 'astro/config';
import wikiLinkPlugin from 'remark-wiki-link';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [wikiLinkPlugin, { 
        // 这里定义 [[链接]] 点击后跳转的路径前缀
        // 比如 [[autonomy]] 会变成 /garden/autonomy
        hrefTemplate: (permalink) => `/garden/${permalink}`,
        pageResolver: (name) => [name], 
      }],
    ],
  },
});