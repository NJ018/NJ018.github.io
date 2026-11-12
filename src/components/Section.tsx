import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{title}</h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}
