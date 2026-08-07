import { ArrowUpRight } from 'lucide-react'
import { contact, profile } from '@/data/content'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-6 py-24 text-center md:px-10 md:py-32">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-widest text-stone">{contact.subheading}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display mx-auto max-w-3xl text-5xl leading-[0.95] tracking-tight md:text-7xl">
          {contact.heading}
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-ink px-8 py-4 text-sm uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper"
        >
          {contact.cta}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-6 text-stone">{profile.email}</p>
      </Reveal>
    </section>
  )
}
