import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/data/content'
import { projects } from '@/data/content'
import { Reveal } from './Reveal'
import { SmartImage } from './SmartImage'

// Taille (px) de la vignette révélée au survol d'une ligne. Ancrée sur le
// bord bas de sa ligne (donc toujours coupée net par la bordure pointillée
// du bas — jamais par celle du haut) grâce au clip-path asymétrique posé
// sur la ligne : libre de déborder vers le haut, coupée pile vers le bas.
const PREVIEW_W = 220
const PREVIEW_H = 260

function WorkRow({ project }: { project: Project }) {
  const rowRef = useRef<HTMLAnchorElement>(null)
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 })

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = rowRef.current?.getBoundingClientRect()
    if (!rect) return
    // Position relative à la ligne (pas à la fenêtre) pour que l'image
    // reste "attachée" à sa propre ligne, jamais aux autres.
    mouseX.set(e.clientX - rect.left - PREVIEW_W / 2)
  }

  return (
    <Link
      ref={rowRef}
      to={`/work/${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col gap-1 border-b border-dashed border-line py-8 [clip-path:inset(-400px_0_0_0)] md:flex-row md:items-baseline md:justify-between md:py-10"
    >
      <span className="font-display text-4xl tracking-wide text-ink transition-colors duration-300 group-hover:text-stone sm:text-5xl md:text-7xl">
        {project.title}
      </span>
      <span className="text-sm uppercase tracking-widest text-stone transition-colors duration-300 group-hover:text-ink">
        {project.category} — {project.year}
      </span>

      <AnimatePresence>
        {hovered && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 hidden md:block"
            style={{ x: springX, width: PREVIEW_W, height: PREVIEW_H }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <SmartImage
              src={project.cover}
              alt={project.title}
              label={`Cover — ${project.title}`}
              className="h-full w-full grayscale"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  )
}

export function Work() {
  return (
    <section id="work" className="px-6 pb-8 pt-24 md:px-10 md:pb-10 md:pt-32">
      <Reveal>
        <div className="mb-2 flex items-center justify-between border-b border-line pb-6">
          <p className="text-sm uppercase tracking-widest text-stone">Selected Works</p>
          <span className="text-sm uppercase tracking-widest text-stone">
            {String(projects.length).padStart(2, '0')} projets
          </span>
        </div>
      </Reveal>

      <div>
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.06}>
            <WorkRow project={project} />
          </Reveal>
        ))}
      </div>

      {/* TODO : à pointer vers une page dédiée "tous les projets" quand elle existera. */}
      <Reveal delay={0.2}>
        <div className="flex justify-center pt-8 md:pt-10">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:text-stone"
          >
            View all Projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
