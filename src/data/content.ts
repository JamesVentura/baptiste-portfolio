// ─────────────────────────────────────────────────────────────
// Tout le contenu texte + chemins d'images/vidéos du portfolio.
// Modifie ce fichier pour mettre à jour le site — pas besoin de
// toucher aux composants dans src/components/.
//
// Pour les images/vidéos : dépose tes fichiers dans
// `public/assets/...` avec exactement les noms indiqués ci-dessous
// (ou change les chemins pour qu'ils correspondent à tes fichiers).
// Tant qu'un fichier n'existe pas, un placeholder stylé s'affiche
// automatiquement à sa place.
// ─────────────────────────────────────────────────────────────

/**
 * Préfixe un chemin `/assets/...` avec le base path Vite (utile en
 * production sur GitHub Pages, où le site est servi depuis un sous-dossier
 * `/baptiste-portfolio/` plutôt que depuis la racine du domaine).
 */
function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const profile = {
  name: 'Baptiste Berthelier',
  role: 'Photographe & créatif visuel',
  tagline: "Je capture des instants qui n'existeront plus jamais deux fois.",
  location: 'France',
  email: 'hello@baptiste-photo.fr',
  cvHref: undefined as string | undefined,
  portrait: asset('/assets/hero/portrait.png'),
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
  ],
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export type Project = {
  id: string
  title: string
  category: string
  year: string
  cover: string
  video?: string
  description: string
}

export const projects: Project[] = [
  {
    id: 'projet-01',
    title: 'Projet 01',
    category: 'Portrait',
    year: '2025',
    cover: asset('/assets/work/projet-01-cover.jpg'),
    description: 'Description courte du projet — à remplacer.',
  },
  {
    id: 'projet-02',
    title: 'Projet 02',
    category: 'Mariage',
    year: '2025',
    cover: asset('/assets/work/projet-02-cover.jpg'),
    description: 'Description courte du projet — à remplacer.',
  },
  {
    id: 'projet-03',
    title: 'Projet 03',
    category: 'Studio',
    year: '2024',
    cover: asset('/assets/work/projet-03-cover.jpg'),
    description: 'Description courte du projet — à remplacer.',
  },
  {
    id: 'projet-04',
    title: 'Projet 04',
    category: 'Reportage',
    year: '2024',
    cover: asset('/assets/work/projet-04-cover.jpg'),
    description: 'Description courte du projet — à remplacer.',
  },
]

export const about = {
  heading: 'À propos',
  // TODO Baptiste : bio réelle
  quote:
    "Photographe basé en France, je raconte des histoires à travers la lumière et le cadrage. Formé à l'argentique avant de passer au numérique, j'ai gardé de cette époque un souci du détail et de la composition qui infuse chaque image que je livre.",
  status: 'Actuellement disponible pour des missions freelance',
}

export const contact = {
  heading: 'Travaillons ensemble',
  subheading: 'Un projet en tête ? Discutons-en.',
  cta: 'Envoyer un email',
}
