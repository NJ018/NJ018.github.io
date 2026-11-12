import { projects, type Project } from '../data/projects'
import { BrowserFrame } from './BrowserFrame'
import { ArrowUpRightIcon, GitHubIcon } from './Icons'
import { Reveal } from './Reveal'
import { Rich } from './Rich'
import { Section } from './Section'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="card group flex h-full flex-col p-6 sm:p-7">
      {project.featured && (
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
      )}
      {project.image && (
        <div className="-mx-2 -mt-2 mb-7 sm:-mx-3 sm:-mt-3">
          <BrowserFrame
            src={project.image}
            alt={project.imageAlt ?? `Screenshot of ${project.title}`}
            label={project.title.toLowerCase().replace(/\s+/g, '-')}
            href={project.image}
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-faint">{String(index + 1).padStart(2, '0')}</span>
        {project.badge && (
          <span className="rounded-full bg-accent-500/15 px-2.5 py-1 text-xs font-medium text-accent-300 ring-1 ring-accent-500/30">
            {project.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-2xl font-bold tracking-tight transition group-hover:text-accent-300">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent-400">{project.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted">
        <Rich text={project.summary} />
      </p>

      <ul className="mt-5 space-y-2.5 text-sm text-muted">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-400 shadow-[0_0_8px] shadow-accent-400" />
            <span>
              <Rich text={h} />
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-5 border-t border-ink-700/70 pt-5 text-sm font-medium">
          <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-fg hover:text-accent-300">
            <GitHubIcon /> Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-fg hover:text-accent-300">
              Live demo <ArrowUpRightIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="02 · Projects" title={<>Things I&apos;ve <span className="text-gradient">built</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120} className="h-full">
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
