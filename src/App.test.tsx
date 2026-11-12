import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App'
import { Rich } from './components/Rich'
import { RoleRotator } from './components/RoleRotator'
import { projects } from './data/projects'
import { skills } from './data/skills'

describe('App', () => {
  it('renders the hero and every project', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Baldev')
    for (const p of projects) {
      expect(screen.getByRole('heading', { name: p.title })).toBeInTheDocument()
    }
  })

  it('links each project to its repo', () => {
    render(<App />)
    const codeLinks = screen.getAllByRole('link', { name: /^code$/i })
    expect(codeLinks.map((a) => a.getAttribute('href'))).toEqual(projects.map((p) => p.repo))
  })
})

describe('Rich', () => {
  it('turns ==text== into a highlight and leaves the rest as plain text', () => {
    const { container } = render(<Rich text="plain ==bright== plain" />)
    const marks = container.querySelectorAll('mark.hl')
    expect(marks).toHaveLength(1)
    expect(marks[0]).toHaveTextContent('bright')
    expect(container).toHaveTextContent('plain bright plain')
  })
})

describe('RoleRotator', () => {
  it('gives screen readers every role and types the first one out', async () => {
    vi.useFakeTimers()
    const { container } = render(<RoleRotator roles={['Alpha', 'Beta']} />)
    expect(container.querySelector('.sr-only')).toHaveTextContent('Alpha, Beta')
    // Each letter is scheduled after the previous render, so advance one letter at a time.
    for (let i = 0; i < 'Alpha'.length; i++) await act(() => vi.advanceTimersByTimeAsync(65))
    expect(container.querySelector('[aria-hidden="true"]')).toHaveTextContent('Alpha')
    vi.useRealTimers()
  })
})

describe('Skills', () => {
  it('shows an icon next to every skill', () => {
    const { container } = render(<App />)
    const chips = container.querySelectorAll('#skills .skill-chip')
    expect(chips.length).toBe(skills.flatMap((g) => g.items).length)
    chips.forEach((chip) => expect(chip.querySelector('svg')).not.toBeNull())
  })
})
