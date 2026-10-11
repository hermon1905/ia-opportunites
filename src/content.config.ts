/**
 * Définition des « collections » de contenu.
 * Chaque article Markdown du dossier src/content/blog doit respecter ce format (frontmatter).
 * Si un champ manque ou est mal écrit, Astro affiche une erreur claire au lancement.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS } from './data/categories';
import { AUTHOR_IDS } from './data/authors';

const blog = defineCollection({
	// Les fichiers qui commencent par « _ » sont ignorés (ex. le modèle d'article)
	loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().max(100),
			description: z.string().max(200),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.enum(CATEGORY_SLUGS),
			image: image(),
			imageAlt: z.string(),
			author: z.enum(AUTHOR_IDS).default('equipe'),
			tags: z.array(z.string()).default([]),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
