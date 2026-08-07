# Où déposer tes visuels, Baptiste

Dépose tes fichiers ici, **exactement avec ces noms** (ou modifie les chemins
correspondants dans `src/data/content.ts` si tu préfères d'autres noms).

Tant qu'un fichier n'existe pas encore, un placeholder s'affiche
automatiquement à sa place sur le site — rien ne casse, tu peux avancer
morceau par morceau.

## `hero/`
- `portrait.jpg` — ta photo pour la section d'accueil (portrait plein cadre,
  fond neutre de préférence, le site l'affiche en noir & blanc).

  (La section "À propos" n'utilise pas de photo — juste du texte, pas besoin
  d'y déposer quoi que ce soit.)

## `work/`
Une cover par projet (format portrait recommandé, ratio ~4:5) :
- `projet-01-cover.jpg`
- `projet-02-cover.jpg`
- `projet-03-cover.jpg`
- `projet-04-cover.jpg`

Tu peux ajouter d'autres projets : ajoute une entrée dans le tableau
`projects` de `src/data/content.ts` avec un nouvel `id` et un chemin
`cover` correspondant à ton fichier.

## Formats
- Images : `.jpg` / `.png` / `.webp`
- Poids conseillé : < 500 Ko par image (compresse avec Squoosh.app ou
  TinyPNG avant de déposer, pour que le site reste rapide)
