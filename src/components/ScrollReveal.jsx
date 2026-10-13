import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const selectors = [
  '.hero-copy',
  '.hero-art',
  '.proof-grid > div',
  '.work-section > h2',
  '.case-card',
  '.featured-sidebar',
  '.featured-main',
  '.about-section > h2',
  '.about-list',
  '.about-portrait',
  '.about-section blockquote',
  '.contact-grid',
  '.study-hero-copy',
  '.stretus-hero-image',
  '.sroi-hero-art',
  '.study-token-copy',
  '.study-token-art',
  '.study-glance-grid > div',
  '.study-section-heading',
  '.study-text-columns > div',
  '.stretus-research-grid > *',
  '.stretus-solution-dark > *',
  '.stretus-feature',
  '.stretus-impact-grid > *',
  '.study-lesson',
  '.sroi-challenge-row > *',
  '.sroi-pain-points > *',
  '.sroi-decision-section > *',
  '.sroi-portal-grid > *',
  '.sroi-impact-points > *',
  '.token-problem-grid > *',
  '.token-research > *',
  '.token-decision-intro > *',
  '.token-journeys > *',
  '.token-feature-grid > *',
  '.token-outcomes > *',
  '.luxury-cover-frame',
  '.luxury-sheet',
]

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = [...document.querySelectorAll(selectors.join(','))]

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('reveal-visible'))
      return undefined
    }

    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal', index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right')
      element.classList.add(`reveal-delay-${index % 3}`)
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
