# Site Nawel Sergoua

Site public et bureau numérique pour l’artiste plasticienne Nawel Sergoua, à Goa.

## Périmètre éditorial

Ce dépôt concerne exclusivement Nawel Sergoua. Aucun contenu d’un autre projet artistique
ne doit y être ajouté.

Le site doit présenter :

- son histoire et sa biographie ;
- ses œuvres et ses recherches ;
- les œuvres disponibles à la vente ;
- ses expositions et sa participation à la Biennale ;
- ses projets d’ateliers et de transmission ;
- son lien avec la matière, la mémoire, l’écologie et le vivant.

Les axes de travail documentés à ce stade sont la sculpture, le relief, le collage,
l’assemblage, les matériaux récupérés, la mémoire, les origines et la transmission.
Les informations non validées par l’artiste restent à compléter avant publication.

## Deux espaces

- `/` : site public de l’artiste ;
- `/bureau` : bureau de travail, organisé en dossiers de recherche et de production.

## Démarrage

```bash
npm ci
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Protection du bureau

La route `/bureau` est protégée par une authentification HTTP Basic. Le site public `/` reste accessible sans identifiants.

Pour le développement local :

```bash
cp .env.example .env.local
```

Puis remplacer les deux valeurs `BUREAU_USERNAME` et `BUREAU_PASSWORD` dans `.env.local`. Le mot de passe doit comporter au moins 16 caractères ; le bureau reste fermé si le secret d’exemple est conservé. Pour une mise en ligne, remplacer aussi `NEXT_PUBLIC_SITE_URL` par l’URL réelle du site. En production, définir ces variables dans l’hébergeur et servir le site en HTTPS. Si les identifiants sont absents ou trop faibles, l’accès au bureau est refusé.

Exemple de configuration de production :

```text
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
BUREAU_USERNAME=un-identifiant-personnel
BUREAU_PASSWORD=un-mot-de-passe-long-et-unique
```

Générer un secret aléatoire, par exemple avec `openssl rand -base64 24`. Ces variables doivent être disponibles au moment du build de production, car l’URL publique alimente les métadonnées, le sitemap et les en-têtes HTTPS. Ne jamais placer le vrai mot de passe dans GitHub, dans le code ou dans un fichier `.env` suivi par Git.

Le site ajoute automatiquement une redirection HTTPS en production, des en-têtes de sécurité, une politique CSP, un balisage SEO structuré et un contrôle de fumée exécuté par la CI.

## Vérifications

```bash
npm run lint
npm run typecheck
npm run build
# ou l’ensemble en une commande
npm run verify
```

Ces trois contrôles sont également exécutés automatiquement par GitHub Actions.

Pour tester le serveur déjà construit :

```bash
npm run start -- --hostname 127.0.0.1 --port 3000
npm run smoke
```

## Socle technique

- Next.js
- React
- TypeScript
- Lucide React

## Statut

Maquette vivante en cours de séparation éditoriale. Les textes définitifs, les œuvres,
les photographies, les expositions et les coordonnées seront complétés après validation de Nawel.
