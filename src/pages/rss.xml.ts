import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../utils/posts';
import { SITE } from '../config';

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();
	const siteUrl = context.site ?? new URL('https://ia-opportunites.pages.dev');

	return rss({
		title: `${SITE.name} — ${SITE.tagline}`,
		description: SITE.description,
		site: siteUrl,
		customData: `<language>${SITE.lang}</language>`,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}`,
			categories: [post.data.category, ...(post.data.tags ?? [])],
			author: SITE.author,
		})),
	});
}
