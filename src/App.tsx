import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { useScrollToHash } from './lib/useScrollToHash'
import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'

function Layout() {
  useScrollToHash()

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout />
    </BrowserRouter>
  )
}

export default App
