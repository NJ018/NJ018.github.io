import { About } from './components/About'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { profile } from './data/profile'
import { useCardSpotlight, useScrollReveal } from './motion'

export default function App() {
  useScrollReveal()
  useCardSpotlight()

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <footer className="border-t border-ink-700/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-faint sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  )
}
