import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../motion'

const TYPE_MS = 65
const DELETE_MS = 35
const HOLD_MS = 1800
const GAP_MS = 350

/**
 * Types each role out, pauses, deletes it and moves to the next.
 * Screen readers get all roles as plain text; with reduced motion the roles are shown statically.
 */
export function RoleRotator({ roles }: { roles: string[] }) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced || roles.length === 0) return
    const word = roles[index]
    const typedAll = !deleting && count === word.length
    const deletedAll = deleting && count === 0

    const delay = typedAll ? HOLD_MS : deletedAll ? GAP_MS : deleting ? DELETE_MS : TYPE_MS
    const timer = setTimeout(() => {
      if (typedAll) setDeleting(true)
      else if (deletedAll) {
        setDeleting(false)
        setIndex((i) => (i + 1) % roles.length)
      } else setCount((c) => c + (deleting ? -1 : 1))
    }, delay)
    return () => clearTimeout(timer)
  }, [count, deleting, index, roles, reduced])

  if (reduced) return <span>{roles.join(' · ')}</span>

  return (
    <>
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden="true">
        <span className="text-faint">&gt; </span>
        {roles[index].slice(0, count)}
        <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] animate-pulse bg-accent-400" />
      </span>
    </>
  )
}
