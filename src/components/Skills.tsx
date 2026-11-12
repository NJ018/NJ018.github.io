import type { CSSProperties } from 'react'
import { skills } from '../data/skills'
import { Reveal } from './Reveal'
import { SkillIcon, skillColor } from './SkillIcon'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 · Skills"
      title={
        <>
          My <span className="text-gradient">toolkit</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={(i % 3) * 90} className="h-full">
            <div className="card h-full p-6">
              <h3 className="text-sm font-semibold tracking-wide text-accent-300">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="skill-chip"
                    style={{ '--brand': skillColor(item) } as CSSProperties}
                  >
                    <SkillIcon name={item} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
