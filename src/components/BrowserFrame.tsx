/**
 * Wraps a screenshot in a dark browser-window frame (title bar, three dots, address pill)
 * so light and dark screenshots look like one consistent set.
 */
export function BrowserFrame({
  src,
  alt,
  label,
  href,
}: {
  src: string
  alt: string
  /** Text shown in the address pill, e.g. the project name. */
  label: string
  /** Optional link opened when the screenshot is clicked. */
  href?: string
}) {
  const screen = (
    <div className="relative overflow-hidden bg-ink-950">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
      />
    </div>
  )

  return (
    <div className="relative">
      {/* Glow behind the window, brighter on card hover */}
      <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-600/25 via-glow/10 to-transparent opacity-60 blur-2xl transition duration-300 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-xl border border-ink-600 bg-ink-850 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.8)] transition duration-300 group-hover:border-accent-500/50">
        <div className="flex h-8 items-center gap-3 border-b border-ink-700 bg-ink-900 px-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-accent-400/70" />
            <span className="size-2.5 rounded-full bg-glow/60" />
            <span className="size-2.5 rounded-full bg-ink-600" />
          </div>
          <div className="mx-auto flex h-5 max-w-[60%] flex-1 items-center justify-center gap-1.5 truncate rounded-md bg-ink-950/80 px-3 font-mono text-[10px] text-faint">
            <svg viewBox="0 0 24 24" className="size-2.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            <span className="truncate">{label}</span>
          </div>
          {/* Balances the dots so the address pill stays centred */}
          <div className="w-[42px]" aria-hidden="true" />
        </div>

        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="block" aria-label={`Open full-size screenshot of ${label}`}>
            {screen}
          </a>
        ) : (
          screen
        )}
      </div>
    </div>
  )
}
