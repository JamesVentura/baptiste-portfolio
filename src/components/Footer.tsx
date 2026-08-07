import { profile } from '@/data/content'

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-line px-6 py-8 text-xs uppercase tracking-widest text-stone md:flex-row md:justify-between md:px-10">
      <span>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</span>

      <div className="flex gap-6">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
