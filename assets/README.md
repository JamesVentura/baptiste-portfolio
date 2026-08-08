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

## `work/<id>/`
Chaque projet a un dossier (`work/agicap/`, `work/tenacy/`, etc.) avec :
- une cover (`01.jpg`, référencée en `cover` dans `content.ts`) — affichée
  dans "Selected Works" et en haut de la page du projet
- le reste de la galerie (`02.jpg`, `03.jpg`, ...) — affichée sur la page
  dédiée du projet (`/work/<id>`)

Les 7 projets actuels (Agicap, FreeOx, Oragen, Izieu, DBO, Ibis, Tenacy)
viennent d'un dossier "IMG DRIVE" déposé dans le projet — à toi de
remplacer les images/briefs par les tiens quand tu es prêt. Seuls 4
projets ("featured: true" dans `content.ts`) s'affichent par défaut sur
la home ; les autres apparaissent en cliquant "View all Projects".

Pour ajouter/retirer un projet : modifie le tableau `projects` dans
`src/data/content.ts` (id, titre, catégorie, année, cover, gallery,
brief, featured).

## Formats
- Images : `.jpg` / `.png` / `.webp`
- Poids conseillé : < 500 Ko par image (compresse avec Squoosh.app ou
  TinyPNG avant de déposer, pour que le site reste rapide)
