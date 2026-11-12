import type { ReactNode } from 'react'

/** Fades its children in when scrolled into view. `delay` (ms) staggers items in a grid. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div data-reveal className={className} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}
