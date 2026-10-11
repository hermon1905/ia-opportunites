/**
 * Les catégories du blog.
 * Pour en ajouter une : copie un bloc, change le slug (sans accents ni espaces), le nom et la description.
 */
export const CATEGORIES = [
  {
    slug: 'ia-education',
    name: 'IA & Éducation',
    description: "Apprendre, enseigner et se former autrement grâce à l'intelligence artificielle.",
    color: 'terracotta',
  },
  {
    slug: 'ia-emploi-jeunes',
    name: 'IA & Emploi des jeunes',
    description: "Les métiers qui émergent, les compétences à acquérir et comment trouver sa place.",
    color: 'ocre',
  },
  {
    slug: 'outils-ia',
    name: 'Outils IA',
    description: 'Tests, tutoriels et comparatifs des outils IA utiles au quotidien, même avec peu de data.',
    color: 'foret',
  },
  {
    slug: 'entrepreneuriat',
    name: 'Entrepreneuriat',
    description: "Lancer et faire grandir son activité avec l'IA, avec peu de moyens.",
    color: 'terracotta',
  },
  {
    slug: 'success-stories',
    name: 'Success stories africaines',
    description: "Portraits de jeunes et de startups africaines qui innovent avec l'IA.",
    color: 'foret',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** Classes de couleur des étiquettes de catégorie (clair + sombre) */
export const CATEGORY_STYLES: Record<string, string> = {
  terracotta:
    'bg-terracotta-50 text-terracotta-700 ring-1 ring-terracotta-200 dark:bg-terracotta-950/60 dark:text-terracotta-300 dark:ring-terracotta-900',
  ocre: 'bg-ocre-50 text-ocre-800 ring-1 ring-ocre-200 dark:bg-ocre-950/60 dark:text-ocre-300 dark:ring-ocre-900',
  foret:
    'bg-foret-50 text-foret-700 ring-1 ring-foret-200 dark:bg-foret-950/60 dark:text-foret-300 dark:ring-foret-900',
};
