import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { nav, profile } from '@/data/content'
import { cn } from '@/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  // Sur la home, "#work" scrolle sur place ; ailleurs (page projet), il
  // faut d'abord revenir à "/" avant de scroller jusqu'à l'ancre (en
  // tenant compte du sous-dossier de base sur GitHub Pages).
  const toHash = (hash: string) => (pathname === '/' ? hash : `${import.meta.env.BASE_URL}${hash}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Empêche le scroll du body quand le menu mobile plein écran est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-colors duration-300 md:px-10',
          scrolled && !open ? 'bg-paper/80 backdrop-blur-md border-b border-line' : 'bg-transparent',
        )}
      >
        <a href={toHash('#top')} className="font-display text-xl tracking-wide">
          {profile.name.split(' ')[0].toUpperCase()}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={toHash(item.href)}
              className="text-sm uppercase tracking-widest text-stone transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={toHash('#contact')}
          className="hidden rounded-full border border-ink px-5 py-2 text-sm uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper md:inline-block"
        >
          Me contacter
        </a>

        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
          className="z-50 flex items-center justify-center md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-paper px-8 md:hidden"
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={toHash(item.href)}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                className="font-display text-5xl tracking-wide"
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href={toHash('#contact')}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + nav.length * 0.06, duration: 0.4 }}
              className="mt-4 inline-block w-fit rounded-full border border-ink px-6 py-3 text-sm uppercase tracking-widest"
            >
              Me contacter
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
