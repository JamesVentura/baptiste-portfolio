import { about } from '@/data/content'
import { ArrowGlyph } from './ArrowGlyph'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="relative z-10 bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <Reveal>
        <h2 className="font-display mb-16 text-[20vw] leading-[0.85] tracking-tight sm:text-8xl md:mb-24 md:text-9xl">
          <span className="text-paper/30">/</span>
          {about.heading.toUpperCase()}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-16">
        <Reveal delay={0.1}>
          <ArrowGlyph className="size-28 text-stone-light md:size-48" />
        </Reveal>

        <div className="max-w-2xl">
          <Reveal delay={0.1}>
            <p className="mb-6 text-sm uppercase tracking-widest text-paper/70">
              {about.subheading}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xl leading-relaxed text-paper md:text-2xl">{about.quote}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 text-xs uppercase tracking-widest text-paper/50">{about.status}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
