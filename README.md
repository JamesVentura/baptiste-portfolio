# Baptiste Berthelier — Portfolio

Portfolio de Baptiste Berthelier, photographe & créatif visuel.

🔗 **Site en ligne :** voir l'onglet "About" du repo GitHub, ou
[baptiste-portfolio](../../) une fois déployé sur GitHub Pages.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) pour les animations
- [Lucide](https://lucide.dev) pour les icônes

## Développement

```bash
npm install
npm run dev
```

## Contenu

Tout le texte (nom, bio, projets, liens) se modifie dans
[`src/data/content.ts`](src/data/content.ts) — pas besoin de toucher au code
des composants.

Les photos/vidéos se déposent dans `public/assets/` — voir
[`public/assets/README.md`](public/assets/README.md) pour le détail des
noms de fichiers attendus. Tant qu'un visuel n'est pas déposé, un
placeholder s'affiche automatiquement à sa place.

## Déploiement

Le site se déploie automatiquement sur GitHub Pages à chaque push sur
`main`, via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
