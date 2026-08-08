import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Fait défiler la page jusqu'à l'élément visé par le hash de l'URL
 * (ex: `/#work`) après un changement de route. Utile quand on arrive sur
 * la home depuis une page projet en cliquant "Work" dans la nav — un
 * simple `<a href="#work">` ne suffit pas car on change de route React
 * avant que l'élément #work n'existe dans le DOM.
 */
export function useScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    // Attend le prochain frame pour laisser la nouvelle page se monter.
    const id = requestAnimationFrame(() => {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(id)
  }, [hash, pathname])
}
