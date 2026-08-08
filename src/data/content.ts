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
  showreel: asset('/assets/hero/showreel.mp4'),
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
  ],
}

// href en ancre ("#about") : le composant Nav se charge de les transformer
// en "/#about" quand on n'est pas sur la page d'accueil.
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
  /** Description courte, affichée nulle part pour l'instant (réservée). */
  description: string
  /** Paragraphe(s) affichés sur la page dédiée du projet. */
  brief: string[]
  /** Images de la galerie sur la page dédiée (en plus de la cover). */
  gallery: string[]
  client?: string
  /** Affiché par défaut dans "Selected Works" — les autres n'apparaissent
   * qu'en cliquant "View all Projects". */
  featured?: boolean
}

// TODO Baptiste : les briefs ci-dessous sont rédigés à partir des visuels
// seuls (pas d'infos sur le brief réel, le rôle exact, la date précise) —
// à corriger/compléter avec le vrai contexte de chaque tournage.
export const projects: Project[] = [
  {
    id: 'agicap',
    title: 'Agicap',
    category: 'Corporate',
    year: '2025',
    cover: asset('/assets/work/agicap/01.jpg'),
    video: asset('/assets/work/agicap/video.mp4'),
    description: "Film de marque pour Agicap, plateforme de gestion de trésorerie.",
    brief: [
      "Film de marque pour Agicap, plateforme de gestion de trésorerie pour entreprises. Mise en scène d'un utilisateur au naturel, produit à l'écran, lumière basse et contrastée pour un rendu premium et corporate.",
    ],
    gallery: [asset('/assets/work/agicap/02.jpg'), asset('/assets/work/agicap/03.jpg')],
    client: 'Agicap',
    featured: true,
  },
  {
    id: 'freeox',
    title: 'FreeOx Biotech',
    category: 'Corporate',
    year: '2025',
    cover: asset('/assets/work/freeox/01.jpg'),
    video: asset('/assets/work/freeox/video.mp4'),
    description: 'Film institutionnel pour FreeOx Biotech, biotech spécialisée dans la recherche.',
    brief: [
      "Interview institutionnelle pour FreeOx Biotech. Cadre en intérieur/extérieur avec lumière naturelle, habillage graphique en post-production pour appuyer le propos scientifique.",
    ],
    gallery: [asset('/assets/work/freeox/02.jpg')],
    client: 'FreeOx Biotech',
    featured: true,
  },
  {
    id: 'oragen',
    title: 'Oragen Therapeutics',
    category: 'Corporate',
    year: '2024',
    cover: asset('/assets/work/oragen/01.jpg'),
    video: asset('/assets/work/oragen/video.mp4'),
    description: 'Film de marque pour Oragen Therapeutics, laboratoire pharmaceutique.',
    brief: [
      "Tournage en environnement de bureaux pour Oragen Therapeutics — plans de mise en situation, habillage data-visualisation en post-prod pour mettre en avant les résultats cliniques.",
    ],
    gallery: [asset('/assets/work/oragen/02.jpg'), asset('/assets/work/oragen/03.jpg')],
    client: 'Oragen Therapeutics',
    featured: true,
  },
  {
    id: 'izieu',
    title: 'Journées de la Mémoire — Izieu',
    category: 'Documentaire',
    year: '2024',
    cover: asset('/assets/work/izieu/01.jpg'),
    video: asset('/assets/work/izieu/video.mp4'),
    description: 'Reportage aux Journées de la Mémoire de la Maison d’Izieu.',
    brief: [
      "Captation de la cérémonie commémorative aux Journées de la Mémoire (Maison d'Izieu) : reportage en lumière naturelle, registre plus sobre et documentaire que les tournages de marque.",
    ],
    gallery: [asset('/assets/work/izieu/02.jpg'), asset('/assets/work/izieu/03.jpg')],
    client: 'Maison d’Izieu',
    featured: true,
  },
  {
    id: 'dbo',
    title: 'DBO',
    category: 'Restauration',
    year: '2025',
    cover: asset('/assets/work/dbo/01.jpg'),
    description: 'Interview en salle pour un restaurant.',
    brief: [
      "Interview du gérant en salle, restaurant en activité en arrière-plan pour ancrer le propos dans le lieu et l'ambiance réelle de l'établissement.",
    ],
    gallery: [asset('/assets/work/dbo/02.jpg'), asset('/assets/work/dbo/03.jpg')],
    client: 'DBO',
  },
  {
    id: 'ibis',
    title: 'Ibis',
    category: 'Hôtellerie',
    year: '2024',
    cover: asset('/assets/work/ibis/01.jpg'),
    description: 'Ambiance restaurant/hôtel pour Ibis.',
    brief: [
      "Captation d'ambiance en salle pour Ibis — clients et équipe en situation, lumière naturelle, pour restituer l'atmosphère vivante du lieu.",
    ],
    gallery: [asset('/assets/work/ibis/02.jpg')],
    client: 'Ibis',
  },
  {
    id: 'tenacy',
    title: 'Tenacy',
    category: 'Corporate',
    year: '2025',
    cover: asset('/assets/work/tenacy/01.jpg'),
    description: 'Interview corporate pour Tenacy, logiciel RH.',
    brief: [
      "Interview en environnement de bureaux pour Tenacy (logiciel de pilotage RH), sous-titrée pour les réseaux, avec habillage logo en incrustation.",
    ],
    gallery: [asset('/assets/work/tenacy/02.jpg')],
    client: 'Tenacy',
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
