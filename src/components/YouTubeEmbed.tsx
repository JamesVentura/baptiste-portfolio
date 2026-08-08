type YouTubeEmbedProps = {
  id: string
  title: string
  className?: string
}

/**
 * Lecture YouTube (vidéos non répertoriées) plutôt qu'un fichier vidéo
 * autohébergé : meilleure qualité, pas de poids dans le dépôt, streaming
 * adaptatif géré par YouTube.
 */
export function YouTubeEmbed({ id, title, className }: YouTubeEmbedProps) {
  return (
    <iframe
      className={className}
      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
