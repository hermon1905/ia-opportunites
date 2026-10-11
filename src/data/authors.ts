/**
 * Les auteurs du blog.
 * Dans un article, on écrit seulement l'identifiant : `author: equipe`
 * 👉 Remplace les infos par les tiennes (nom, bio, liens).
 */
export const AUTHORS = {
	equipe: {
		name: "L'équipe IA Opportunités",
		role: 'Rédaction',
		bio: "Nous rendons l'intelligence artificielle accessible et utile pour les jeunes d'Afrique et d'ailleurs.",
		url: '/a-propos',
	},
} as const;

export type AuthorId = keyof typeof AUTHORS;
export const AUTHOR_IDS = Object.keys(AUTHORS) as [AuthorId, ...AuthorId[]];

export function getAuthor(id: string) {
	return AUTHORS[id as AuthorId] ?? AUTHORS.equipe;
}

/** Initiales pour l'avatar (ex. « L'équipe IA » → « LI ») */
export function initials(name: string) {
	return name
		.replace(/[^\p{L}\s]/gu, ' ')
		.split(/\s+/)
		.filter((w) => w.length > 2)
		.slice(0, 2)
		.map((w) => w[0].toUpperCase())
		.join('');
}
