import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Work } from './components/Work'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
