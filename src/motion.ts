import { useEffect, useState } from 'react'

/** True when the visitor has asked their OS for reduced motion. */
export function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && !!window.matchMedia?.(query).matches)

  useEffect(() => {
    const mql = window.matchMedia?.(query)
    if (!mql) return
    const onChange = () => setReduced(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * Fades in every element marked with `data-reveal` the first time it scrolls into view.
 * index.html adds the `reveal-ready` class before React renders (only when motion is allowed),
 * which is what hides the elements; without it everything is simply visible.
 */
export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('reveal-ready')) return
    if (typeof IntersectionObserver === 'undefined') {
      root.classList.remove('reveal-ready')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/**
 * Tracks the pointer over any `.card` and stores its position in `--mx` / `--my`,
 * which the CSS uses to draw a purple spotlight that follows the cursor.
 * One listener on the document covers every card on the page.
 */
export function useCardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) return

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.('.card') as HTMLElement | null
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
