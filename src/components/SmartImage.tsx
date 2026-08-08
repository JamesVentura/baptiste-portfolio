import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

type SmartImageProps = {
  src: string
  alt: string
  className?: string
  label?: string
  /** Point de recadrage CSS (`object-position`), ex. "80% 30%" — permet de
   * garder le vrai sujet dans le cadre plutôt qu'un centrage par défaut qui
   * tombe parfois sur un mur ou un bout de visage. */
  focus?: string
}

/**
 * Comme les vrais visuels de Baptiste n'ont pas encore été déposés dans
 * `public/assets/...`, ce composant affiche un placeholder stylé (au lieu
 * d'une icône d'image cassée) tant que le fichier n'existe pas. Dès que le
 * fichier apparaît au bon chemin, l'image s'affiche automatiquement.
 */
export function SmartImage({ src, alt, className, label, focus }: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2 border border-dashed border-stone-light bg-paper-dim text-stone p-6 text-center',
          className,
        )}
      >
        <ImageOff className="size-6 opacity-50" strokeWidth={1.5} />
        <p className="text-xs uppercase tracking-wide">{label ?? alt}</p>
        <code className="text-[10px] opacity-60 break-all">{src}</code>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
      style={focus ? { objectPosition: focus } : undefined}
    />
  )
}
