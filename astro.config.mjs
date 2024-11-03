// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadTime } from './remark/readTime.mjs';
import { remarkInjectAds } from './remark/injectAds.mjs';
import { remarkLinksNewTab } from './remark/linksNewTab.mjs';

import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://reversed.coffee',
	integrations: [mdx(), sitemap(), icon({ iconDir: './static/icons' })],
    markdown: {
        // @ts-ignore
        remarkPlugins: [remarkReadTime, remarkInjectAds, remarkLinksNewTab],
    },
    publicDir: './static'
});
