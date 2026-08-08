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
      <section className="sticky top-0 h-[100svh] overflow-hidden pt-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-20 px-6 text-center text-sm uppercase tracking-[0.3em] text-stone md:px-10 md:text-left"
        >
          {profile.role}
        </motion.p>

        {/* Nom en défilement infini, derrière la photo — on n'en voit que
            des fragments dépasser de part et d'autre. */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 overflow-hidden">
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

        {/* Photo détourée au premier plan, sans carte ni fond : elle flotte
            directement sur le texte qui défile derrière elle, collée au
            vrai bord bas de l'écran — comme dans l'inspiration. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 z-10 mx-auto h-[72vh] w-[92vw] max-w-xl sm:h-[82vh] sm:w-[75vw] md:h-[94vh] md:w-[52vw] md:max-w-3xl"
        >
          <SmartImage
            src={profile.portrait}
            alt={`Portrait de ${profile.name}`}
            label="Photo de Baptiste (hero)"
            className="h-full w-full object-contain object-bottom grayscale drop-shadow-2xl"
          />
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-end gap-2 px-6 text-xs uppercase tracking-widest text-stone md:px-10"
        >
          <span className="h-8 w-px bg-stone-light" />
          Scroll down
        </motion.a>
      </section>
    </div>
  )
}
