/** Renders a string, turning ==text== into a purple highlight. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/==(.+?)==/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="hl">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}
