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
  email: 'hermon.niava01@gmail.com',
  postsPerPage: 9,
  /**
   * Code de validation Google Search Console (balise meta).
   * Ex: "google-site-verification=XXXXXXXXXXXXXXXXXXXXX" ou juste le code "XXXXXXXXXXXXXXXXXXXXX"
   */
  googleSiteVerification: 'MvXlBLu8C1EyjFOCQU4Q6fDJExVkS-JzfDpP0X_qH9w',
};

/** Menu principal (en-tête) */
export const NAV = [
  { label: 'Articles', href: '/blog' },
  { label: 'Prompts IA', href: '/prompts' },
  { label: 'Formations', href: '/formations' },
  { label: 'Partenariats', href: '/partenariats' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

/** Liens du pied de page */
export const FOOTER_LINKS = {
  site: [
    { label: 'Tous les articles', href: '/blog' },
    { label: 'Prompts IA (Gratuit)', href: '/prompts' },
    { label: 'Formations', href: '/formations' },
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

/** Réglages publicitaires (Google AdSense ou bannières partenaires) */
export const ADS = {
  enabled: true, // Activé avec votre identifiant éditeur AdSense
  client: 'ca-pub-8090003117636533', // Identifiant éditeur AdSense
  slots: {
    articleTop: '', // ID du bloc au début de l'article (ex. "1234567890")
    articleBottom: '', // ID du bloc à la fin de l'article
  },
};

/** Mentions d'affiliation pour la transparence légale */
export const AFFILIATE = {
  disclaimer:
    "Transparence : certains liens de cet article sont des liens affiliés. Si vous vous inscrivez ou achetez un produit via ces liens, nous pouvons percevoir une petite commission sans aucun surcoût pour vous. Cela soutient directement la production de nos guides gratuits.",
};
