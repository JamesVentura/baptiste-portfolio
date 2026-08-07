import { projects } from '@/data/content'

const categories = Array.from(new Set(projects.map((p) => p.category)))

export function Marquee() {
  const items = [...categories, ...categories]

  return (
    <div className="overflow-hidden border-b border-line bg-ink py-4">
      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((item, i) => (
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
