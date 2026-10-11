# 🌍 IA OPPORTUNITES — Blog & Plateforme de Formations

> **L'IA au service de la jeunesse africaine**  
> Un blog éditorial moderne, frugal et ultra-performant, conçu pour expliquer l'intelligence artificielle simplement et montrer comment les jeunes peuvent en faire une opportunité : éducation, emploi, outils, entrepreneuriat.

---

## 🚀 Stack Technique

- **Framework** : [Astro 5+](https://astro.build/) (Static Site Generation ultra-rapide)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com/) avec design system inspiré des terres d'Afrique (terracotta, ocre, sable, crème, mode sombre chaud)
- **Contenu** : Astro Content Collections (schéma Zod strict, format Markdown/MDX)
- **Performance Mobile** : Images responsive auto-compressées en WebP/AVIF, 2.4 Ko de JavaScript runtime (temps de chargement instantané en 2G/3G)
- **Monétisation & Ventes** : Catalogue de formations relié directement à [Chariow](https://chariow.com) (paiements Mobile Money : Wave, Orange, MTN, Moov et Carte bancaire)
- **SEO & Référencement** : Open Graph, Twitter Cards, Schema.org JSON-LD, Sitemap XML automatique et flux RSS 2.0
- **Conformité & Légal** : Bannière cookies discrète RGPD avec stockage local, pages Mentions Légales, Confidentialité et CGU

---

## 🛠️ Commandes Locales

Toutes les commandes se lancent depuis la racine du projet :

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement local (http://localhost:4321)
npm run dev

# Compiler le site statique pour la production (dans le dossier ./dist/)
npm run build

# Prévisualiser la version de production en local
npm run preview
```

---

## ✍️ Rédiger et publier un nouvel article

Chaque article est un fichier Markdown placé dans `src/content/blog/`.  
Un modèle prêt à l'emploi est disponible dans [`src/content/blog/_MODELE-ARTICLE.md`](./src/content/blog/_MODELE-ARTICLE.md).

Exemple d'en-tête (frontmatter) :

```markdown
---
title: "Mon Titre d'Article Percutant"
description: "Résumé concis de 140 à 160 caractères pour le référencement Google."
pubDate: 2026-10-12
author: "IA OPPORTUNITES"
category: "outils-ia" # ia-education | ia-emploi-jeunes | outils-ia | entrepreneuriat | success-stories
image: "../../assets/articles/mon-image.jpg"
imageAlt: "Description détaillée de l'image"
readingTime: "5 min"
featured: false
tags: ["IA", "Smartphone", "Productivité"]
---

Votre texte commence ici avec des titres ## et ###...
```

---

## ☁️ Guide de Déploiement : Cloudflare Pages (Recommandé)

Cloudflare Pages offre un hébergement **100% gratuit**, mondial, ultra-rapide et avec certificat SSL automatique.

### Étape 1 : Créer un dépôt sur GitHub
1. Rendez-vous sur [github.com](https://github.com) et créez un nouveau dépôt (ex. `ia-opportunites`).
2. Dans votre terminal à la racine du projet :
   ```bash
   git remote add origin https://github.com/VOTRE_PSEUDO/ia-opportunites.git
   git branch -M main
   git push -u origin main
   ```

### Étape 2 : Connecter le dépôt à Cloudflare Pages
1. Connectez-vous à votre tableau de bord [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Allez dans **Workers & Pages** > **Create application** > onglet **Pages** > **Connect to Git**.
3. Sélectionnez votre dépôt GitHub `ia-opportunites`.
4. Remplissez les paramètres de build :
   - **Framework preset** : `Astro`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Environment variables** : ajoutez `NODE_VERSION` = `22`
5. Cliquez sur **Save and Deploy**. En moins de 2 minutes, votre site est en ligne avec une URL du type `ia-opportunites.pages.dev` !

### Étape 3 : Configurer votre nom de domaine personnalisé (Optionnel)
1. Dans votre projet Cloudflare Pages, allez dans l'onglet **Custom domains**.
2. Cliquez sur **Set up a custom domain** (ex. `iaopportunites.com`).
3. Suivez les instructions DNS de Cloudflare pour activer le domaine et le certificat HTTPS gratuit.

---

## 📈 Checklist Post-Lancement

- [ ] **Mettre à jour `src/config.ts`** : adapter le nom de domaine final dans `SITE_URL` (dans `astro.config.mjs`) et l'adresse e-mail de contact.
- [ ] **Soumettre le sitemap à Google Search Console** :
  - Ajouter la propriété dans [Google Search Console](https://search.google.com/search-console).
  - Soumettre l'URL du sitemap : `https://votredomaine.com/sitemap-index.xml`.
- [ ] **Activer Google AdSense (Monétisation publicitaire)** :
  - Dès approbation par Google, modifiez `ADS.enabled = true` et renseignez votre identifiant `ca-pub-XXXXXXXX` dans `src/config.ts`.
- [ ] **Suivre les ventes Chariow** :
  - Connectez-vous à votre tableau de bord [Chariow](https://chariow.com) pour suivre vos commandes et retraits Mobile Money en temps réel.

---

## 📜 Licence
Contenu et code réservés à **IA OPPORTUNITES** © 2026. Tous droits réservés.
