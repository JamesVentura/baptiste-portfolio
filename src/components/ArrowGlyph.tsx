type ArrowGlyphProps = {
  className?: string
}

/**
 * Flèche "arrow-up-right" épaisse et anguleuse, dessinée comme une forme
 * pleine (fill) plutôt qu'un tracé (stroke) — donc aucune arête ne dépasse
 * aux jonctions, contrairement à l'icône Lucide équivalente. Géométrie
 * calculée pour être parfaitement symétrique par rapport à l'axe de la
 * diagonale : les deux bras du chevron ont la même longueur (11.7) et la
 * diagonale se termine pile au centre du coin du chevron.
 */
export function ArrowGlyph({ className }: ArrowGlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Bras horizontal du chevron */}
      <rect x="7" y="5.3" width="11.7" height="3.4" fill="currentColor" />
      {/* Bras vertical du chevron */}
      <rect x="15.3" y="5.3" width="3.4" height="11.7" fill="currentColor" />
      {/* Diagonale, centrée sur le même axe de symétrie que le chevron */}
      <polygon points="5.8,15.8 8.2,18.2 18.2,8.2 15.8,5.8" fill="currentColor" />
    </svg>
  )
}
