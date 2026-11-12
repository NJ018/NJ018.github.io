import type { ReactNode } from 'react'
import {
  siClaude,
  siCplusplus,
  siExpress,
  siFastapi,
  siGit,
  siGithub,
  siHuggingface,
  siJavascript,
  siLangchain,
  siLanggraph,
  siMongodb,
  siMui,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
  siVitest,
  type SimpleIcon,
} from 'simple-icons'

/** Official brand logos (from simple-icons), keyed by the skill name used in src/data/skills.ts. */
const brands: Record<string, SimpleIcon> = {
  'C++': siCplusplus,
  Python: siPython,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  FastAPI: siFastapi,
  'Node.js': siNodedotjs,
  'Express.js': siExpress,
  React: siReact,
  'Tailwind CSS': siTailwindcss,
  MUI: siMui,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  LangChain: siLangchain,
  LangGraph: siLanggraph,
  'Hugging Face': siHuggingface,
  Git: siGit,
  GitHub: siGithub,
  Vite: siVite,
  Vitest: siVitest,
  'Claude Code': siClaude,
}

/* Outline icons for concepts and tools without an official logo. Drawn in the theme's purple. */
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
const glyphs: Record<string, ReactNode> = {
  database: (
    <g {...stroke}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </g>
  ),
  api: (
    <g {...stroke}>
      <path d="M4 8h13m0 0-3.5-3.5M17 8l-3.5 3.5M20 16H7m0 0 3.5-3.5M7 16l3.5 3.5" />
    </g>
  ),
  stream: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="1.8" />
      <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.4 5.4a9.3 9.3 0 0 0 0 13.2M18.6 5.4a9.3 9.3 0 0 1 0 13.2" />
    </g>
  ),
  sparkles: (
    <g {...stroke}>
      <path d="M10 3.5 11.8 8.2 16.5 10l-4.7 1.8L10 16.5l-1.8-4.7L3.5 10l4.7-1.8L10 3.5ZM18 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" />
    </g>
  ),
  bolt: (
    <g {...stroke}>
      <path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12l1-8Z" />
    </g>
  ),
  vectors: (
    <g {...stroke}>
      <path d="M4 20 20 4M4 20l5-12M4 20l13-4" />
      <circle cx="20" cy="4" r="1.3" />
      <circle cx="9" cy="8" r="1.3" />
      <circle cx="17" cy="16" r="1.3" />
    </g>
  ),
  graph: (
    <g {...stroke}>
      <circle cx="12" cy="4.5" r="2" />
      <circle cx="5.5" cy="18.5" r="2" />
      <circle cx="18.5" cy="18.5" r="2" />
      <circle cx="12" cy="12.5" r="2" />
      <path d="M12 6.5v4M10.6 14l-3.7 3M13.4 14l3.7 3" />
    </g>
  ),
  cube: (
    <g {...stroke}>
      <path d="M12 2.8 20 7.2v9.6l-8 4.4-8-4.4V7.2l8-4.4ZM4 7.2l8 4.4 8-4.4M12 11.6v9.6" />
    </g>
  ),
  cpu: (
    <g {...stroke}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9.5 2.5V6M14.5 2.5V6M9.5 18v3.5M14.5 18v3.5M2.5 9.5H6M2.5 14.5H6M18 9.5h3.5M18 14.5h3.5" />
    </g>
  ),
  network: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.7 5.5 3.7 9s-1.2 6.5-3.7 9c-2.5-2.5-3.7-5.5-3.7-9S9.5 5.5 12 3Z" />
    </g>
  ),
}

const glyphFor: Record<string, keyof typeof glyphs> = {
  SQL: 'database',
  DBMS: 'database',
  ChromaDB: 'database',
  'REST APIs': 'api',
  'Server-Sent Events': 'stream',
  RAG: 'sparkles',
  Groq: 'bolt',
  'Sentence Transformers': 'vectors',
  DSA: 'graph',
  OOP: 'cube',
  'Operating Systems': 'cpu',
  'Computer Networks': 'network',
}

const ACCENT = '#b69bff'

/** Mixes a hex colour towards white; used for brand colours too dark to see on the dark theme. */
function lighten(hex: string, amount: number) {
  const n = parseInt(hex, 16)
  const mix = (c: number) => Math.round(c + (255 - c) * amount)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(mix)
  return `rgb(${r} ${g} ${b})`
}

function luminance(hex: string) {
  const n = parseInt(hex, 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Brand colour adjusted so it stays visible on the dark background. */
function displayColor(hex: string) {
  const l = luminance(hex)
  if (l < 0.03) return '#e6e1f7' // near-black logos (Express, GitHub) become light
  if (l < 0.15) return lighten(hex, 0.35) // dark blues (C++, Python) get lifted
  return `#${hex}`
}

/** The colour used for a skill's icon (and its chip's hover tint). */
export function skillColor(name: string) {
  const brand = brands[name]
  return brand ? displayColor(brand.hex) : ACCENT
}

export function SkillIcon({ name, className = 'size-4' }: { name: string; className?: string }) {
  const brand = brands[name]
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill={displayColor(brand.hex)} aria-hidden="true">
        <path d={brand.path} />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={{ color: ACCENT }} aria-hidden="true">
      {glyphs[glyphFor[name] ?? 'sparkles']}
    </svg>
  )
}
