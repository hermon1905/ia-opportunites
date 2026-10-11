import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Tous les articles publiés, du plus récent au plus ancien (les brouillons sont cachés en ligne) */
export async function getPublishedPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Temps de lecture estimé (≈ 200 mots/minute, rythme confortable sur mobile) */
export function readingTime(body = ''): number {
	const words = body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/[#*_>\-[\]()`!]/g, ' ')
		.split(/\s+/)
		.filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

/** Date au format français : « 11 octobre 2026 » */
export function formatDate(date: Date): string {
	return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Articles similaires : même catégorie d'abord, puis tags communs, puis les plus récents */
export function getRelatedPosts(post: Post, all: Post[], limit = 3): Post[] {
	return all
		.filter((p) => p.id !== post.id)
		.map((p) => {
			let score = p.data.category === post.data.category ? 3 : 0;
			score += p.data.tags.filter((t) => post.data.tags.includes(t)).length;
			return { p, score };
		})
		.sort((a, b) => b.score - a.score || b.p.data.pubDate.valueOf() - a.p.data.pubDate.valueOf())
		.slice(0, limit)
		.map(({ p }) => p);
}
