import { motion } from 'framer-motion'
import { profile } from '@/data/content'
import { SmartImage } from './SmartImage'

// Le nom est répété plusieurs fois bout à bout pour un défilement infini
// sans coupure visible (la moitié de la piste défile en boucle).
const marqueeName = Array(6).fill(profile.name.toUpperCase())

export function Hero() {
  return (
    // Conteneur 2x plus haut que l'écran : le Hero (sticky) reste figé à
    // l'écran pendant qu'on scroll ce conteneur, ce qui laisse le temps à la
    // section suivante (About, fond noir) de glisser par-dessus depuis le
    // bas — effet "rideau qui se lève" façon inspiration.
    <div id="top" className="relative h-[200svh]">
      <section className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-20 px-6 text-center text-sm uppercase tracking-[0.3em] text-stone md:px-10 md:text-left"
        >
          {profile.role}
        </motion.p>

        <div className="relative flex flex-1 items-center justify-center py-12">
          {/* Nom en défilement infini, derrière la photo — on n'en voit que
              des fragments dépasser de part et d'autre. */}
          <div className="pointer-events-none absolute inset-x-0 flex overflow-hidden">
            <div className="flex w-max animate-marquee-hero items-center">
              {[...marqueeName, ...marqueeName].map((name, i) => (
                <span
                  key={i}
                  className="font-display shrink-0 whitespace-nowrap px-6 text-[28vh] leading-none tracking-tight text-ink sm:text-[32vh] md:text-[38vh]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Photo au premier plan : fond opaque, masque le texte qui défile derrière elle. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 aspect-[3/4] w-[52vw] max-w-sm bg-paper shadow-2xl sm:w-[40vw] md:w-[26vw]"
          >
            <SmartImage
              src={profile.portrait}
              alt={`Portrait de ${profile.name}`}
              label="Photo de Baptiste (hero)"
              className="h-full w-full grayscale"
            />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="relative z-20 mb-6 flex items-center justify-end gap-2 px-6 text-xs uppercase tracking-widest text-stone md:px-10"
        >
          <span className="h-8 w-px bg-stone-light" />
          Scroll down
        </motion.a>
      </section>
    </div>
  )
}
