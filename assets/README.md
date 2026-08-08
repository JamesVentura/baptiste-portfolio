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
Une cover par projet (format portrait recommandé, ratio ~4:5), affichée
dans la liste "Selected Works" et en haut de la page du projet :
- `projet-01-cover.jpg`
- `projet-02-cover.jpg`
- `projet-03-cover.jpg`
- `projet-04-cover.jpg`

Chaque projet a aussi sa page dédiée (`/work/projet-01`, etc.) avec une
petite galerie. Dépose les images dans un sous-dossier `work/<id>/` :
- `work/projet-01/01.jpg`, `02.jpg`, `03.jpg`
- `work/projet-02/01.jpg`, `02.jpg`, `03.jpg`
- `work/projet-03/01.jpg`, `02.jpg`, `03.jpg`
- `work/projet-04/01.jpg`, `02.jpg`, `03.jpg`

Tu peux ajouter plus (ou moins) d'images par projet : modifie le tableau
`gallery` de l'entrée correspondante dans `src/data/content.ts`. Tu peux
aussi ajouter d'autres projets entiers : ajoute une entrée dans le
tableau `projects` avec un nouvel `id`, `cover` et `gallery`.

## Formats
- Images : `.jpg` / `.png` / `.webp`
- Poids conseillé : < 500 Ko par image (compresse avec Squoosh.app ou
  TinyPNG avant de déposer, pour que le site reste rapide)
