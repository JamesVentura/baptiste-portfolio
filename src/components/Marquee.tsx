import { projects } from '@/data/content'

const categories = Array.from(new Set(projects.map((p) => p.category)))

// Le bandeau doit toujours couvrir au moins 2x la largeur de l'écran pour
// boucler sans "trou" (fond visible sans texte dessus). Avec peu de
// catégories, 2-4 répétitions ne suffisent pas sur les très grands écrans —
// on répète largement pour rester robuste quel que soit le nombre de
// catégories ou la largeur de l'écran.
const REPEAT = 8
const track = Array(REPEAT).fill(categories).flat()

export function Marquee() {
  return (
    <div className="overflow-hidden border-b border-line bg-ink py-4">
      <div className="flex w-max animate-marquee gap-8">
        {[...track, ...track].map((item, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-8 text-2xl uppercase tracking-wide text-paper md:text-3xl"
          >
            {item}
            <span className="text-stone">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
