# Site Nawel Sergoua

Site public et bureau numérique pour l’artiste plasticienne Nawel Sergoua.

## Intention

Le projet s’appuie sur l’univers du lettré chinois, notamment la période Song : peinture de paysage, jardin traditionnel chinois, pierre, eau, porte circulaire, pont, fleurs symboliques, poésie et travail intérieur.

Le site ne cherche pas à reproduire un décor chinois. Il construit un espace contemporain, contemplatif et vivant, inspiré par :

- le passage entre obscurité et lumière ;
- le « couloir du jour » ;
- les couleurs d’un lever ou d’un coucher de soleil ;
- le paysage comme espace extérieur et intérieur ;
- le jardin comme architecture de la pensée.

## Deux espaces

- `/` : site public de l’artiste ;
- `/bureau` : bureau de travail, organisé en dossiers symboliques.

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

Puis remplacer les deux valeurs `BUREAU_USERNAME` et `BUREAU_PASSWORD` dans `.env.local`. Pour une mise en ligne, remplacer aussi `NEXT_PUBLIC_SITE_URL` par l’URL réelle du site. En production, définir ces variables dans l’hébergeur et servir le site en HTTPS. Si les identifiants sont absents, l’accès au bureau est refusé.

## Vérifications

```bash
npm run lint
npm run typecheck
npm run build
# ou l’ensemble en une commande
npm run verify
```

Ces trois contrôles sont également exécutés automatiquement par GitHub Actions.

## Socle technique

- Next.js
- React
- TypeScript
- Lucide React

## Statut

Première maquette vivante. Les textes, œuvres, photographies, expositions et coordonnées seront complétés au fur et à mesure.
