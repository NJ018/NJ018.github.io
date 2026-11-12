import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { Rich } from './Rich'
import { Section } from './Section'

const focus = [
  { title: 'Full-stack', body: 'REST APIs in FastAPI and Node.js, React + TypeScript front ends.' },
  { title: 'Generative AI', body: 'RAG pipelines with LangGraph, ChromaDB and LLM failover.' },
  { title: 'Reliability', body: 'Fail-safe behaviour, clean APIs and automated tests.' },
]

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title={<>Engineer first, <span className="text-gradient">student</span> second.</>}>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((p) => (
            <p key={p}>
              <Rich text={p} />
            </p>
          ))}
        </Reveal>
        <ul className="space-y-4">
          {focus.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={i * 100}>
                <div className="card p-5">
                  <p className="font-semibold text-accent-300">{f.title}</p>
                  <p className="mt-1 text-sm text-muted">{f.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
