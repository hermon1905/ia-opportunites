---
# ============================================================
#  MODÈLE D'ARTICLE — à copier pour chaque nouvel article
# ============================================================
#  1. Copie ce fichier dans le même dossier (src/content/blog/)
#  2. Renomme-le SANS le « _ » du début, avec des mots-clés :
#       ex. comment-utiliser-chatgpt-pour-reviser.md
#     👉 Ce nom devient l'adresse : /blog/comment-utiliser-chatgpt-pour-reviser
#     (minuscules, tirets, pas d'accents ni d'espaces)
#  3. Mets ton image dans src/assets/blog/ (JPG ou PNG, 1600 px de large idéalement)
#     Le site la convertit automatiquement en WebP/AVIF léger.
#  4. Remplis les champs ci-dessous, écris ton texte, sauvegarde.
#
#  Les fichiers qui commencent par « _ » (comme celui-ci) ne sont jamais publiés.
# ============================================================

# Titre : 50 à 65 caractères idéalement (affiché dans Google)
title: "Titre accrocheur de l'article"

# Résumé : 120 à 160 caractères (affiché sous le titre dans Google et sur les réseaux)
description: "Une phrase ou deux qui donnent envie de lire et contiennent le mot-clé principal."

# Date de publication (AAAA-MM-JJ)
pubDate: 2026-10-15

# Optionnel : date de mise à jour (enlève le « # » devant pour l'activer)
# updatedDate: 2026-11-01

# Catégorie : UNE seule valeur parmi :
#   ia-education | ia-emploi-jeunes | outils-ia | entrepreneuriat | success-stories
category: ia-education

# Image de couverture (chemin relatif depuis ce fichier) + description pour l'accessibilité et le SEO
image: ../../assets/blog/apprendre-ia-smartphone.jpg
imageAlt: "Décris ce qu'on voit sur l'image en une phrase"

# Auteur : identifiant défini dans src/data/authors.ts
author: equipe

# Mots-clés (3 à 6) : servent à trouver les articles similaires
tags: ["mot-clé 1", "mot-clé 2", "mot-clé 3"]

# true = mis en avant en grand sur la page d'accueil (un seul à la fois de préférence)
featured: false

# true = brouillon : visible en local (npm run dev) mais PAS publié en ligne
draft: true
---

Paragraphe d'introduction : 2 à 4 phrases. Pose le problème du lecteur et promets-lui une solution concrète. Place le mot-clé principal dans la première phrase si possible.

## Premier grand titre (H2)

Les titres « ## » forment automatiquement le **sommaire** de l'article. Fais des paragraphes courts (2 à 4 lignes) : c'est plus agréable sur téléphone.

### Sous-titre (H3)

- Une liste à puces
- pour les idées
- faciles à parcourir

1. Une liste numérotée
2. pour les étapes

> Une citation ou une astuce importante, mise en valeur.

## Deuxième grand titre

Un [lien vers un autre article](/blog/apprendre-ia-smartphone) aide le lecteur et le référencement.

| Colonne 1 | Colonne 2 |
|---|---|
| Un tableau | si besoin |

## En résumé

Récapitule les 2 ou 3 points clés, puis termine par une action concrète que le lecteur peut faire tout de suite.
