import { profile, stats } from '../data/profile'
import { GitHubIcon, DownloadIcon } from './Icons'
import { Rich } from './Rich'
import { RoleRotator } from './RoleRotator'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-28 pb-10 sm:px-8 md:pt-36 md:pb-14">
      <div className="grid items-center gap-14 md:grid-cols-[1.35fr_1fr]">
        <div className="rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-400" />
            </span>
            Final year · {profile.location}
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>.
          </h1>
          <p className="mt-3 min-h-[1.5em] font-mono text-sm text-accent-400 sm:text-base">
            <RoleRotator roles={profile.roles} />
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            <Rich text={profile.tagline} />
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <GitHubIcon /> GitHub
            </a>
            <a href={profile.resume} download className="btn btn-ghost">
              <DownloadIcon /> Resume
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-ink-700/80 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-fg sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-faint sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise relative mx-auto w-64 sm:w-72 md:w-full md:max-w-sm" style={{ animationDelay: '120ms' }}>
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent-600/40 via-glow/20 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-accent-400 via-accent-600 to-glow p-[2px]">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={640}
              className="aspect-square w-full rounded-[calc(2rem-2px)] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-ink-600 bg-ink-900/90 px-4 py-2.5 font-mono text-xs shadow-xl backdrop-blur">
            <span className="text-faint">stack:</span> <span className="text-accent-300">React · FastAPI · LangGraph</span>
          </div>
        </div>
      </div>
    </section>
  )
}
