import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Work } from '@/components/Work'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <Work />
      <Contact />
    </>
  )
}
