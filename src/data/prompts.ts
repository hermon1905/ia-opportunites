/**
 * Base de données de prompts IA optimisés pour l'Afrique francophone.
 * Conçus pour être copiés en un clic et appliqués immédiatement sur smartphone ou PC.
 */

export interface PromptItem {
  id: string;
  title: string;
  category: 'vente-whatsapp' | 'contenu-video' | 'freelance-services' | 'etudes-carriere' | 'business-trading';
  categoryLabel: string;
  tool: 'ChatGPT' | 'Claude' | 'Midjourney / Image' | 'Tous modèles';
  description: string;
  prompt: string;
  tip?: string;
  relatedFormation?: {
    title: string;
    url: string;
    badge: string;
  };
  tags: string[];
}

export const PROMPT_CATEGORIES = [
  { id: 'tous', label: 'Tous les prompts', icon: '✨' },
  { id: 'vente-whatsapp', label: 'Vente & WhatsApp', icon: '💬' },
  { id: 'contenu-video', label: 'Vidéos & Créateurs', icon: '🎬' },
  { id: 'freelance-services', label: 'Freelance & Prestations', icon: '💼' },
  { id: 'etudes-carriere', label: 'Études & Carrière', icon: '🎓' },
  { id: 'business-trading', label: 'Business & Finance', icon: '📈' },
] as const;

export const PROMPTS: PromptItem[] = [
  // --- VENTE & WHATSAPP ---
  {
    id: 'relance-whatsapp-silence',
    title: 'Relancer un prospect WhatsApp sans paraître insistant',
    category: 'vente-whatsapp',
    categoryLabel: 'Vente & WhatsApp',
    tool: 'Tous modèles',
    description: 'À utiliser lorsqu’un prospect a demandé le prix puis n’a plus donné de nouvelles pendant 24 à 48 heures.',
    prompt: `Tu es un expert en vente relationnelle sur WhatsApp pour le marché africain francophone.
Je vends [PRODUIT OU SERVICE] à [PRIX EN FCFA].
Un prospect m'a contacté il y a 48 heures, a demandé le prix, puis n'a plus répondu après que je lui ai donné l'information.

Rédige-moi 3 variantes de messages de relance courts (moins de 4 phrases chacun) :
1. Variante « Valeur ajoutée » : qui apporte un conseil ou une astuce gratuite liée au produit.
2. Variante « Disponibilité limitée » : qui mentionne avec politesse un stock ou une promo qui se termine bientôt.
3. Variante « Question fermée courtoise » : qui lui demande simplement si son projet est toujours d'actualité.

Critères : Ton chaleureux, professionnel, adapté aux habitudes d'échanges sur WhatsApp (courtois et respectueux, avec 1 ou 2 emojis maximum). Ne sois pas insistant ni agressif.`,
    tip: 'Remplace [PRODUIT OU SERVICE] et [PRIX EN FCFA] par tes vraies informations. Envoie la variante 1 en priorité.',
    relatedFormation: {
      title: 'Maîtriser l’Art de Vendre (DIGYCORE)',
      url: 'https://chariow.ly/QLENOUJ0NE',
      badge: 'Guide de Vente Recommandé',
    },
    tags: ['whatsapp', 'vente', 'relance', 'closing'],
  },
  {
    id: 'objection-trop-cher',
    title: 'Désamorcer l’objection « C’est trop cher » avec élégance',
    category: 'vente-whatsapp',
    categoryLabel: 'Vente & WhatsApp',
    tool: 'ChatGPT',
    description: 'Transforme l’objection du prix en démonstration de rentabilité et de valeur concrète pour le client.',
    prompt: `Agis en tant que négociateur commercial d'élite.
Je vends : [MON PRODUIT OU FORMATION].
Prix : [PRIX EN FCFA].
Le client vient de me dire : « Le prix est trop cher pour moi » ou « Je n'ai pas les moyens actuellement ».

Génère-moi une réponse en 4 étapes clés :
1. Valider son ressenti avec empathie (ne jamais le contredire directement).
2. Recadrer le coût par rapport au bénéfice obtenu ou au problème résolu (calcul du retour sur investissement journalier ou mensuel).
3. Offrir une solution flexible (ex. paiement en 2 fois par Mobile Money ou offre allégée).
4. Poser une question de clôture pour relancer la discussion sans mettre la pression.

Reste dans un ton respectueux, francophone et orienté résultats concrets.`,
    tip: 'Idéal pour les conversations WhatsApp ou messages privés Facebook / Instagram.',
    relatedFormation: {
      title: 'Maîtriser l’Art de Vendre (DIGYCORE)',
      url: 'https://chariow.ly/QLENOUJ0NE',
      badge: 'Méthodes de Clôture',
    },
    tags: ['objection', 'prix', 'négociation', 'closing'],
  },
  {
    id: 'fiche-produit-irresistible',
    title: 'Rédiger une offre de vente irrésistible (Formule PAS)',
    category: 'vente-whatsapp',
    categoryLabel: 'Vente & WhatsApp',
    tool: 'Tous modèles',
    description: 'Structure une description de produit captivante basée sur Problème - Agitation - Solution.',
    prompt: `Tu es un copywriter spécialisé dans le commerce en ligne et la vente de produits digitaux.
Mon offre : [NOM DU PRODUIT / FORMATION].
Public cible : [DÉCRIRE LE CLIENT IDÉAL, EX : JEUNE ÉTUDIANT OU COMMERÇANT].
Problème résolu : [LE PROBLÈME MAJEUR QUE ÇA RÉSOUT].
Prix : [PRIX].

Rédige une fiche de vente captivante en suivant la structure :
- Un crochet (Hook) qui arrête le défilement.
- Le problème douloureux vécu par le client (sans filtre).
- L'agitation : ce qui se passe s'il ne résout pas ce problème dans 6 mois.
- La solution : présentation claire de notre produit comme la réponse évidente.
- 3 bénéfices majeurs chiffrés ou concrets (pas juste des fonctionnalités).
- Appel à l'action direct (ex: Commander par WhatsApp ou Chariow).`,
    tip: 'Utilise ce texte pour tes légendes Facebook, tes statuts WhatsApp ou tes pages produits Chariow.',
    relatedFormation: {
      title: 'DIGITAL EMPIRE STARTER',
      url: 'https://chariow.ly/6TI3ENS7M0',
      badge: 'Création de Produits Digitaux',
    },
    tags: ['copywriting', 'offre', 'chariow', 'facebook'],
  },
  {
    id: 'script-prospection-commercant',
    title: 'Pitcher ses services IA à une boutique ou un restaurant local',
    category: 'vente-whatsapp',
    categoryLabel: 'Vente & WhatsApp',
    tool: 'Claude',
    description: 'Message d’introduction pour proposer la création de visuels ou vidéos IA à un commerce de proximité.',
    prompt: `Je souhaite proposer mes services de création de visuels publicitaires et vidéos IA à des commerces locaux (boutiques de vêtements, restaurants, salons de beauté à [VILLE / PAYS]).

Rédige un message de premier contact direct et personnalisé pour le gérant (via WhatsApp ou DM Instagram) :
- Commence par un compliment sincère sur un élément précis de sa boutique.
- Identifie discrètement une opportunité qu'il manque (ex. visuels plus dynamiques pour ses statuts et Reels).
- Propose-lui un exemple GRATUIT sans engagement (ex. « J'ai créé un visuel d'exemple pour votre produit phare, puis-je vous l'envoyer ? »).
- Termine par une question simple et ouverte.
Longueur maximale : 120 mots. Zéro jargon technique.`,
    tip: 'Prépare toujours un modèle de visuel avant d’envoyer le message pour pouvoir le montrer aussitôt.',
    relatedFormation: {
      title: 'Crée des Vidéos IA Ultra-Réalistes',
      url: 'https://chariow.ly/T8Q9VAD5R1',
      badge: 'Formation Pratique Smartphone',
    },
    tags: ['prospection', 'b2b', 'commerces', 'services'],
  },

  // --- CRÉATION DE CONTENU & VIDÉOS IA ---
  {
    id: 'script-tiktok-retention-forte',
    title: 'Script vidéo court viral (TikTok / Reels / Shorts) avec Hook puissant',
    category: 'contenu-video',
    categoryLabel: 'Vidéos & Créateurs',
    tool: 'Tous modèles',
    description: 'Génère un script de 45 secondes conçu pour maximiser le taux de visionnage complet.',
    prompt: `Tu es un créateur de contenu viral cumulant des millions de vues sur TikTok et Instagram Reels.
Sujet de la vidéo : [SUJET, EX : 3 OUTILS IA GRATUITS POUR GAGNER DE L'ARGENT DEPUIS SON TÉLÉPHONE].
Audience : Jeunes francophones entre 18 et 30 ans.

Rédige un script complet chronométré pour une vidéo de 40 à 50 secondes :
- 00:00 - 00:03 : 3 propositions de Hooks (accroches chocs) visuels et oraux pour stopper le scroll.
- 00:03 - 00:15 : Mise en contexte rapide du problème.
- 00:15 - 00:35 : Les 3 conseils ou outils livrés à un rythme dynamique (avec indications des visuels à l'écran).
- 00:35 - 00:45 : Call To Action clair (ex. « Enregistre cette vidéo » ou « Lien en bio »).

Indique pour chaque scène :
[Texte parlé] : Ce que dit la voix off ou l'avatar IA.
[Visuel à l'écran] : Ce qu'on doit voir (plan B-roll, capture, texte animé).`,
    tip: 'Les 3 premières secondes décident de 80% du succès de la vidéo. Teste les 3 accroches proposées !',
    relatedFormation: {
      title: 'Crée des Vidéos IA Ultra-Réalistes qui Vendent',
      url: 'https://chariow.ly/T8Q9VAD5R1',
      badge: 'Spécial Créateurs Mobile',
    },
    tags: ['tiktok', 'reels', 'script', 'viral', 'video-ia'],
  },
  {
    id: 'prompt-avatar-midjourney-leonardo',
    title: 'Prompt pour générer un avatar IA ultra-réaliste',
    category: 'contenu-video',
    categoryLabel: 'Vidéos & Créateurs',
    tool: 'Midjourney / Image',
    description: 'Prompt optimisé pour Midjourney, Leonardo.ai ou Flux pour obtenir un visage photoréaliste de haute qualité.',
    prompt: `A professional close-up portrait of a charismatic African young entrepreneur in [his/her] late 20s, confident and warm expression, modern casual smart blazer, shot on Sony A7R IV with 85mm f/1.4 lens, cinematic natural studio lighting, ultra-detailed skin texture, soft bokeh background of a modern creative office in Abidjan, 8k resolution, photorealistic, cinematic color grading --ar 9:16 --v 6.1 --style raw`,
    tip: 'Remplace "9:16" par "16:9" si tu veux une miniature YouTube ou une bannière de site web.',
    relatedFormation: {
      title: 'Crée des Vidéos IA Ultra-Réalistes qui Vendent',
      url: 'https://chariow.ly/T8Q9VAD5R1',
      badge: '+300 Prompts Inclus',
    },
    tags: ['midjourney', 'leonardo', 'avatar', 'photoréalisme'],
  },
  {
    id: 'calendrier-contenu-30-jours',
    title: 'Planifier 30 idées de contenus TikTok / Instagram pour sa thématique',
    category: 'contenu-video',
    categoryLabel: 'Vidéos & Créateurs',
    tool: 'ChatGPT',
    description: 'Génère un mois entier de contenu varié (éducatif, inspirant, divertissant et vente).',
    prompt: `Agis en tant que stratège de marque sur les réseaux sociaux.
Ma thématique : [DÉCRIRE TON ACTIVITÉ, EX : ASTUCES IA & FREELANCE POUR ÉTUDIANTS].
Mon objectif : Faire grandir mon audience et vendre ma formation [NOM DU PRODUIT].

Crée un tableau de 30 jours de publications avec la répartition suivante :
- 40% Éducatif (tutos, outils secrets, méthodes)
- 30% Inspirant / Preuves (résultats, parcours, motivation)
- 20% Contre-intuitif / Débats (démystifier des idées reçues)
- 10% Vente directe / Appel à l'action

Pour chaque jour, précise :
1. Le titre / Hook de la vidéo
2. Le format (Facecam, Vidéo IA, Carrousel, Écran partagé)
3. L'action attendue de l'audience (Commenter, Partager, Acheter)`,
    tip: 'Produis ensuite 5 vidéos par session de travail pour ne jamais manquer de contenu.',
    relatedFormation: {
      title: 'DIGITAL EMPIRE STARTER',
      url: 'https://chariow.ly/6TI3ENS7M0',
      badge: 'Pack Contenu Viral Prêt à l’emploi',
    },
    tags: ['planning', 'stratégie', 'réseaux-sociaux', 'calendrier'],
  },
  {
    id: 'storyboard-pub-produit-digital',
    title: 'Storyboard pour une publicité vidéo percutante de produit digital',
    category: 'contenu-video',
    categoryLabel: 'Vidéos & Créateurs',
    tool: 'Claude',
    description: 'Conçois une publicité vidéo en 5 plans pour Facebook Ads ou TikTok Ads.',
    prompt: `Je prépare une campagne vidéo courte (30 secondes) pour promouvoir [MON PRODUIT DIGITAL / FORMATION].
Bénéfice principal : [EX : GAGNER SES PREMIERS 100 000 FCFA EN FREELANCE GRÂCE À L'IA].

Rédige un storyboard détaillé plan par plan :
Plan 1 (0-3s) : Accroche visuelle + texte géant à l'écran.
Plan 2 (3-9s) : Identification du problème (la galère vécue par le spectateur).
Plan 3 (9-18s) : Révélation de la méthode / démonstration rapide sur écran de téléphone.
Plan 4 (18-24s) : Preuve sociale ou résultat concret.
Plan 5 (24-30s) : Appel à l'action clair avec offre spéciale.

Ajoute des suggestions d'ambiance musicale (tempo, style) et d'effets sonores (SFX).`,
    tip: 'Parfait pour alimenter tes campagnes sponsorisées à fort retour sur investissement.',
    relatedFormation: {
      title: 'Académie des Produits Digitaux',
      url: 'https://chariow.ly/OCSED6XU81',
      badge: 'Publicités Rentables & Facebook Ads',
    },
    tags: ['publicité', 'facebook-ads', 'storyboard', 'conversion'],
  },

  // --- FREELANCE & PRESTATIONS DE SERVICES ---
  {
    id: 'proposition-comeup-upwork',
    title: 'Candidature freelance gagnante sur ComeUp ou Upwork',
    category: 'freelance-services',
    categoryLabel: 'Freelance & Prestations',
    tool: 'ChatGPT',
    description: 'Rédige une proposition personnalisée qui se démarque immédiatement des dizaines de réponses génériques.',
    prompt: `Tu es un freelance d'élite ayant généré plus de 20 000 $ sur les plateformes de micro-services (ComeUp, Upwork, Fiverr).
Voici l'annonce du client :
« [COLLER LE TEXTE DE L'OFFRE DU CLIENT ICI] »

Mes compétences : [EX : RÉDACTION OPTIMISÉE SEO, CRÉATION DE VISUELS CANVA & VIDÉOS IA].

Rédige une proposition sur-mesure respectant ces règles d'or :
1. Les deux premières lignes doivent prouver que j'ai lu et compris son besoin précis (aucun « Cher client, je m'appelle... »).
2. Présenter un diagnostic rapide ou une idée concrète applicable tout de suite à son projet.
3. Deux exemples brefs de projets similaires déjà menés.
4. Proposition d'un premier pas simple : « Si vous voulez, je vous prépare un exemple de 30 secondes d'ici ce soir ».
5. Terminer par une question ouverte stimulante. Longueur max : 180 mots.`,
    tip: 'Ne commence JAMAIS par te présenter. Parle à 80% du problème du client et à 20% de toi.',
    relatedFormation: {
      title: 'Maîtriser l’Art de Vendre',
      url: 'https://chariow.ly/QLENOUJ0NE',
      badge: 'Influencer & Convaincre',
    },
    tags: ['freelance', 'comeup', 'upwork', 'proposal'],
  },
  {
    id: 'approche-linkedin-decideurs',
    title: 'Message direct LinkedIn pour décrocher un contrat avec une PME',
    category: 'freelance-services',
    categoryLabel: 'Freelance & Prestations',
    tool: 'Claude',
    description: 'Contacter un chef d’entreprise ou directeur marketing avec tact et professionnalisme.',
    prompt: `Rédige un message privé LinkedIn destiné à [NOM DU POSTE, EX : DIRECTEUR MARKETING D'UNE PME EN AFRIQUE].
Entreprise ciblée : [SECTEUR DE L'ENTREPRISE, EX : IMMOBILIER OU AGROALIMENTAIRE].
Service proposé : [EX : AUTOMATISATION DU SERVICE CLIENT WHATSAPP OU CRÉATION DE CONTENUS IA].

Règles :
- Ne rien vendre dans le premier message (pas de lien, pas de devis).
- Féliciter l'entreprise pour une actualité ou publication récente.
- Partager une observation bienveillante sur un point d'amélioration de leur communication actuelle.
- Proposer un échange rapide de 10 minutes ou l'envoi d'une mini-analyse gratuite de 3 pages.
- Ton sobre, respectueux des codes d'affaires africains et internationaux. Moins de 100 mots.`,
    tip: 'Personnalise toujours le premier paragraphe avec un détail vu sur le profil du prospect.',
    relatedFormation: {
      title: 'Maîtriser l’Art de Vendre',
      url: 'https://chariow.ly/QLENOUJ0NE',
      badge: 'Vente B2B & Influence',
    },
    tags: ['linkedin', 'b2b', 'prospection', 'pme'],
  },
  {
    id: 'gestion-client-difficile',
    title: 'Recadrer poliment un client qui dépasse le périmètre du devis',
    category: 'freelance-services',
    categoryLabel: 'Freelance & Prestations',
    tool: 'Tous modèles',
    description: 'Fixe des limites saines sans braquer le client lorsqu’il demande du travail supplémentaire gratuit.',
    prompt: `Je suis prestataire freelance. Un client pour qui j'ai réalisé [TRAVAIL LIVRÉ] me demande des modifications majeures ou des ajouts qui n'étaient pas prévus dans notre accord initial : « [DÉTAIL DE LA DEMANDE SUPPLÉMENTAIRE DU CLIENT] ».

Rédige un message diplomatique et ultra-professionnel pour :
1. Le remercier de sa confiance et valider l'intérêt de sa nouvelle idée.
2. Rappeler avec tact ce qui était couvert par la commande actuelle (déjà livrée).
3. Lui proposer d'intégrer cette nouvelle demande dans un avenant / devis complémentaire à [PRIX OU TARIF HORAIRE].
4. Lui donner le choix : finaliser la commande actuelle telle quelle, ou valider le devis complémentaire pour enchaîner tout de suite.
Ton calme, rassurant, ferme et orienté solution.`,
    tip: 'Garder son calme et formaliser les choses par écrit préserve la relation tout en protégeant tes revenus.',
    relatedFormation: {
      title: 'Maîtriser l’Art de Vendre',
      url: 'https://chariow.ly/QLENOUJ0NE',
      badge: 'Relation Client Solide',
    },
    tags: ['freelance', 'communication', 'contrat', 'gestion-client'],
  },

  // --- ÉTUDES, CV & CARRIÈRE ---
  {
    id: 'fiche-revision-active-pdf',
    title: 'Transformer un cours dense ou document en fiche de mémorisation active',
    category: 'etudes-carriere',
    categoryLabel: 'Études & Carrière',
    tool: 'Claude',
    description: 'Transforme un texte académique indigeste en système de questions/réponses façon cartes mémoire (flashcards).',
    prompt: `Agis en tant que tuteur pédagogique de haut niveau spécialisé dans les sciences cognitives et la répétition espacée.
Voici le cours ou chapitre que je dois assimiler :
« [COLLER LE TEXTE OU LES NOTES DU COURS ICI] »

Transforme ce contenu en une fiche de révision ultra-efficace :
1. Synthèse en 3 phrases simples pour comprendre l'idée générale.
2. Liste des 5 concepts ou définitions indispensables à retenir mot pour mot.
3. 10 questions de test à réponse courte (style flashcards) pour tester ma mémoire active sans regarder la réponse.
4. Une analogie concrète de la vie quotidienne pour retenir le point le plus difficile du cours.`,
    tip: 'Réponds toi-même aux 10 questions le lendemain pour vérifier ce que tu as retenu.',
    tags: ['études', 'productivité', 'mémoire', 'révision'],
  },
  {
    id: 'refonte-cv-impact-chiffre',
    title: 'Transformer son CV en machine à décrocher des entretiens',
    category: 'etudes-carriere',
    categoryLabel: 'Études & Carrière',
    tool: 'ChatGPT',
    description: 'Remplace les descriptions de tâches ennuyeuses par des accomplissements mesurables avec la formule XYZ de Google.',
    prompt: `Tu es un recruteur international de talents tech et business.
Voici la description actuelle de mon expérience ou de mes projets récents :
« [COLLER LES TÂCHES ACTUELLES DU CV OU PROJETS RÉALISÉS] »

Poste ciblé : [INTITULÉ DU POSTE VISÉ, EX : COMMUNITY MANAGER, ANALYSTE, DÉVELOPPEUR JUNIOR].

Réécris chaque point de mon expérience selon la formule de recrutement de Google :
« Accomplissement X mesuré par Y en faisant Z ».
- Utilise des verbes d'action puissants au passé ou au présent.
- Fais ressortir la maîtrise des outils modernes (y compris l'IA générative appliquée au métier).
- Élimine le jargon creux (« dynamique », « motivé »).
- Fournis 2 versions : une version sobre et une version percutante pour candidater à distance.`,
    tip: 'Ajoute des chiffres réels (ex : abonnés gagnés, temps économisé, budget géré) même approximatifs.',
    tags: ['cv', 'recrutement', 'emploi', 'carriere'],
  },
  {
    id: 'simulation-entretien-embauche',
    title: 'Simulateur d’entretien d’embauche interactif avec feedback immédiat',
    category: 'etudes-carriere',
    categoryLabel: 'Études & Carrière',
    tool: 'Tous modèles',
    description: 'L’IA joue le rôle du recruteur exigeant et vous pose des questions une par une avec notation.',
    prompt: `Je veux que tu joues le rôle d'un responsable des ressources humaines expérimenté et exigeant.
Je postule pour le poste de : [INTITULÉ DU POSTE].
Entreprise : [TYPE D'ENTREPRISE / SECTEUR].
Mon niveau d'expérience : [DÉBUTANT / 2 ANS D'EXPÉRIENCE / RECONVERSION].

Déroulement de l'exercice :
- Ne génère pas toutes les questions d'un coup !
- Pose-moi UNE SEULE question à la fois.
- Attends que je réponde.
- Après ma réponse, donne-moi :
  1. Une note sur 10 avec analyse critique (points forts et maladresses).
  2. Une proposition de meilleure formulation plus impactante.
  3. La question suivante (dont au moins une question piège sur mes points faibles).

Commence immédiatement en me souhaitant la bienvenue et en me posant la première question classique d'ouverture.`,
    tip: 'Joue le jeu sans tricher et réponds spontanément comme si tu étais en visioconférence.',
    tags: ['entretien', 'recrutement', 'simulation', 'embauche'],
  },

  // --- BUSINESS & FINANCE ---
  {
    id: 'plan-action-business-7-jours',
    title: 'Créer un plan d’action business en 7 jours sans budget',
    category: 'business-trading',
    categoryLabel: 'Business & Finance',
    tool: 'Claude',
    description: 'Transforme une idée floue en feuille de route opérationnelle étape par étape pour la semaine.',
    prompt: `Agis en tant que mentor entrepreneurial pragmatique spécialisé dans le « bootstrap » (lancement avec zéro budget en Afrique).
Mon idée de projet : [DÉCRIRE L'IDÉE, EX : VENDRE DES TEMPLATES DE GESTION NOTION SUR CHARIOW OU FORMATIONS COURTES SUR WHATSAPP].
Temps disponible : [EX : 2 HEURES PAR JOUR].
Budget initial : 0 FCFA.

Construis un plan d'action strict sur 7 jours :
- Jour 1 : Validation de la demande (recherches et vérification de la concurrence).
- Jour 2 : Création de l'offre minimale viable (produit ou service simple).
- Jour 3 : Mise en place du moyen d'encaissement et de livraison (ex : Chariow ou Mobile Money).
- Jour 4 : Création des 5 premiers contenus d'attraction gratuits.
- Jour 5 : Prise de contact directe avec 20 prospects qualifiés.
- Jour 6 : Traitement des premiers retours et ajustements.
- Jour 7 : Bilan et plan d'accélération.

Pour chaque jour, donne 1 SEULE action prioritaire non négociable.`,
    tip: 'L’important n’est pas la perfection, mais d’avoir fait ta première vente avant la fin du 7e jour.',
    relatedFormation: {
      title: 'DIGITAL EMPIRE STARTER',
      url: 'https://chariow.ly/6TI3ENS7M0',
      badge: 'Lancer son Business Automatisé',
    },
    tags: ['entrepreneuriat', 'chariow', 'business', 'action'],
  },
  {
    id: 'calcul-gestion-risque-trading',
    title: 'Calculateur et garde-fou psychologique de gestion du risque trading',
    category: 'business-trading',
    categoryLabel: 'Business & Finance',
    tool: 'ChatGPT',
    description: 'Définit une taille de position stricte et empêche le trading émotionnel.',
    prompt: `Tu es un gestionnaire de risque professionnel et trader algorithmique rigoureux.
Capital de mon compte de trading : [EX : 200 $ OU 100 000 FCFA].
Actif tradé : [EX : FOREX EUR/USD, INDICES SYNTHÉTIQUES OU CRYPTO].
Pourcentage de risque maximal toléré par position : [EX : 1% OU 2%].
Prix d'entrée envisagé : [PRIX ENTRÉE].
Prix du Stop Loss : [PRIX STOP LOSS].

Calcule et fournis-moi :
1. Le montant exact en dollars ou FCFA que je risque de perdre si le Stop Loss est touché.
2. Le calcul de la taille de lot exacte à ouvrir pour ne JAMAIS dépasser ce pourcentage de risque.
3. Le ratio Risque/Rendement (R:R) pour un Take Profit fixé à [PRIX TAKE PROFIT].
4. Trois questions de vérification émotionnelle avant que je ne clique sur « Exécuter » (discipline trading).`,
    tip: 'Ne prends aucun trade avec un ratio Risque/Rendement inférieur à 1:2.',
    relatedFormation: {
      title: 'Comment Gagner avec les Bots de TRADING IA',
      url: 'https://chariow.ly/0VKGU91CQ2',
      badge: 'Gestion du Risque Algorithmique',
    },
    tags: ['trading', 'finance', 'bots', 'gestion-du-risque'],
  },
];
