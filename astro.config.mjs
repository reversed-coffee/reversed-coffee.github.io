// @ts-check
import { CLEAR_LINK } from './src/consts';

import { defineConfig } from 'astro/config';

// Remark plugins for blog, injection, new tab.
import { remarkReadTime } from './remark/readTime.mjs';
import { remarkInjectAds } from './remark/injectAds.mjs';
import { remarkLinksNewTab } from './remark/linksNewTab.mjs';

// Astro integrations - MDX, icon embedding, sitemap.
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Configuration for Astro.
export default defineConfig({
	site: CLEAR_LINK,
	integrations: [mdx(), sitemap(), icon({ iconDir: './static/icons' })],
    markdown: {
        // @ts-ignore - I don't care about type checking since it's going to JS.
        remarkPlugins: [remarkReadTime, remarkInjectAds, remarkLinksNewTab],
    },
    publicDir: './static'
});
