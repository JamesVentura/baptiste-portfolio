import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '@/data/content'
import { SmartImage } from './SmartImage'

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    // Conteneur plus haut que l'écran : le Hero (sticky) reste figé pendant
    // qu'on scroll ce conteneur, ce qui laisse le temps à la section
    // suivante (About, fond noir) de glisser par-dessus depuis le bas —
    // effet "rideau qui se lève". Volontairement proche de 100svh (pas
    // 200svh) pour que le scroll réagisse tout de suite : juste assez de
    // marge pour que le rideau ait le temps de monter, sans zone morte.
    <div id="top" className="relative h-[125svh]">
      <section className="sticky top-0 h-[100svh] overflow-hidden pt-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-20 px-6 text-center text-sm uppercase tracking-[0.3em] text-stone md:px-10 md:text-left"
        >
          {profile.role}
        </motion.p>

        {/* Showreel en fond, derrière la photo — même bande que le nom qui
            défilait avant, remplacée ici par la vidéo (en boucle, muette). */}
        {!videoFailed && (
          <div className="absolute inset-x-0 bottom-0 h-[80vh] overflow-hidden sm:h-[86vh] md:h-[92vh]">
            <video
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
              className="h-full w-full object-cover grayscale"
            >
              <source src={profile.showreel} type="video/mp4" />
            </video>
          </div>
        )}

        {/* Photo détourée au premier plan, sans carte ni fond : elle flotte
            directement sur le showreel qui joue derrière elle, collée au
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
          Faire défiler
        </motion.a>
      </section>
    </div>
  )
}
