import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
      <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500/60 via-ink-700 to-glow/50 p-px">
        <div className="relative rounded-[calc(1.5rem-1px)] bg-ink-900 px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-accent-600/30 blur-3xl" />
          <p className="eyebrow relative">05 · Contact</p>
          <h2 className="relative mt-4 text-3xl font-bold sm:text-5xl">
            Let&apos;s <span className="text-gradient">build something</span>.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted">
            I&apos;m looking for software engineering and GenAI opportunities. If you have a role, a project or just a
            question, reach out.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <MailIcon /> Email me
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <LinkedInIcon /> LinkedIn
              </a>
            )}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className={profile.email ? 'btn btn-ghost' : 'btn btn-primary'}
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
