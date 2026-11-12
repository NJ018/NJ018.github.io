import { achievements, education, positions, type JourneyItem } from '../data/journey'
import { Reveal } from './Reveal'
import { Rich } from './Rich'
import { Section } from './Section'

function Timeline({ items }: { items: JourneyItem[] }) {
  return (
    <ol className="relative space-y-7 border-l border-ink-600 pl-6">
      {items.map((item) => (
        <li key={item.place + item.period} className="relative">
          <span className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-accent-400 shadow-[0_0_12px] shadow-accent-400 ring-4 ring-ink-950" />
          <p className="font-mono text-xs text-accent-400">{item.period}</p>
          <p className="mt-1 font-semibold">{item.title}</p>
          <p className="text-sm text-muted">{item.place}</p>
        </li>
      ))}
    </ol>
  )
}

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="04 · Journey"
      title={
        <>
          Education &amp; <span className="text-gradient">milestones</span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="h-full">
          <div className="card h-full p-7">
            <h3 className="mb-6 text-lg font-bold">Education</h3>
            <Timeline items={education} />
          </div>
        </Reveal>
        <Reveal delay={110} className="h-full">
          <div className="card h-full p-7">
            <h3 className="mb-6 text-lg font-bold">Positions</h3>
            <Timeline items={positions} />
          </div>
        </Reveal>
        <Reveal delay={220} className="h-full">
          <div className="card h-full p-7">
            <h3 className="mb-6 text-lg font-bold">Achievements</h3>
            <ul className="space-y-4 text-muted">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-0.5 text-accent-400" aria-hidden="true">
                    ✦
                  </span>
                  <span>
                    <Rich text={a} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
