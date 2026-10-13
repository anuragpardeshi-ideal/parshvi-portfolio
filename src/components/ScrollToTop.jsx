import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
