import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Contact } from '@/components/Contact'
import { Reveal } from '@/components/Reveal'
import { SmartImage } from '@/components/SmartImage'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import { projects } from '@/data/content'
import { ArrowGlyph } from '@/components/ArrowGlyph'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]

  // Repart du haut à chaque nouvelle page projet (pas de scroll hérité de
  // la page précédente).
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <article className="px-6 pb-24 pt-28 md:px-10 md:pb-32">
        <Reveal>
          <Link
            to="/#work"
            className="mb-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-stone transition-colors hover:text-ink md:mb-16"
          >
            <ArrowLeft className="size-4" />
            Retour aux projets
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-10 flex flex-col gap-4 border-b border-line pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <h1 className="font-display text-6xl leading-[0.9] tracking-tight md:text-8xl">
              {project.title}
            </h1>
            <span className="text-sm uppercase tracking-widest text-stone">
              {project.category} — {project.year}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-12 aspect-video overflow-hidden bg-paper-dim md:mb-20">
            {project.youtubeId ? (
              // Vidéo hébergée en non-répertorié sur YouTube plutôt qu'en
              // fichier autohébergé : meilleure qualité, streaming adaptatif.
              <YouTubeEmbed
                id={project.youtubeId}
                title={project.title}
                className="h-full w-full"
              />
            ) : (
              <SmartImage
                src={project.cover}
                alt={project.title}
                label={`Cover — ${project.title}`}
                className="h-full w-full"
                focus={project.coverFocus}
              />
            )}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <Reveal delay={0.15}>
            <div className="text-sm uppercase tracking-widest text-stone">À propos du projet</div>
          </Reveal>

          <div>
            {project.brief.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.06}>
                <p className="mb-5 max-w-2xl text-lg leading-relaxed text-stone last:mb-0 md:text-xl">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {project.gallery.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-24">
            {project.gallery.map((image, i) => (
              <Reveal key={image.src} delay={i * 0.08}>
                <div className="aspect-[4/5] overflow-hidden bg-paper-dim">
                  <SmartImage
                    src={image.src}
                    alt={`${project.title} — photo ${i + 1}`}
                    label={`${project.title} — image ${i + 1}`}
                    className="h-full w-full"
                    focus={image.focus}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </article>

      <Link
        to={`/work/${next.id}`}
        className="group flex items-center justify-between border-y border-line px-6 py-12 transition-colors hover:bg-paper-dim md:px-10 md:py-16"
      >
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-stone">Projet suivant</p>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">{next.title}</h2>
        </div>
        <ArrowGlyph className="size-12 shrink-0 text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:size-16" />
      </Link>

      <Contact />
    </>
  )
}
