/**
 * Réglages généraux du site.
 * 👉 C'est LE fichier à modifier pour changer le nom, les liens, la newsletter, AdSense, etc.
 */
export const SITE = {
  name: 'IA OPPORTUNITES',
  tagline: "L'IA au service de la jeunesse africaine",
  description:
    "Le blog qui explique l'intelligence artificielle simplement et montre comment les jeunes, en Afrique et partout dans le monde, peuvent en faire une opportunité : éducation, emploi, outils, entrepreneuriat.",
  lang: 'fr',
  locale: 'fr_FR',
  author: 'IA OPPORTUNITES',
  email: 'contact@exemple.com', // à remplacer
  postsPerPage: 9,
};

/** Menu principal (en-tête) */
export const NAV = [
  { label: 'Articles', href: '/blog' },
  { label: 'Boutique', href: '/boutique' },
  { label: 'Partenariats', href: '/partenariats' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

/** Liens du pied de page */
export const FOOTER_LINKS = {
  site: [
    { label: 'Tous les articles', href: '/blog' },
    { label: 'Boutique', href: '/boutique' },
    { label: 'Travailler avec moi', href: '/partenariats' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
    { label: 'Flux RSS', href: '/rss.xml' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: "Conditions d'utilisation", href: '/conditions-utilisation' },
  ],
};

/** Réseaux sociaux : laisse vide ('') ceux que tu n'utilises pas */
export const SOCIAL = {
  x: '',
  linkedin: '',
  whatsapp: '', // lien de chaîne WhatsApp, ex. https://whatsapp.com/channel/...
  youtube: '',
  instagram: '',
  tiktok: '',
};
