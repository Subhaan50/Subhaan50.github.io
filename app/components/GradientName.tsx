// The name is rendered as an SVG with a NATIVE gradient `fill` — NOT via CSS
// `background-clip: text`. Chromium intermittently fails to repaint
// background-clip:text gradients (they live on a GPU-composited layer), which
// is what made the name vanish on refresh. An SVG `fill="url(#grad)"` paints
// on the normal layer every time, so it is immune to that bug.

const LINES = [
  '███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗  █████╗ ███╗   ██╗    ███████╗██╗   ██╗███████╗██████╗',
  '██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██╔══██╗████╗  ██║    ██╔════╝╚██╗ ██╔╝██╔════╝██╔══██╗',
  '███████╗██║   ██║██████╔╝███████║███████║███████║██╔██╗ ██║    ███████╗ ╚████╔╝ █████╗  ██║  ██║',
  '╚════██║██║   ██║██╔══██╗██╔══██║██╔══██║██╔══██║██║╚██╗██║    ╚════██║  ╚██╔╝  ██╔══╝  ██║  ██║',
  '███████║╚██████╔╝██████╔╝██║  ██║██║  ██║██║  ██║██║ ╚████║    ███████║   ██║   ███████╗██████╔╝',
  '╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚══════╝   ╚═╝   ╚══════╝╚═════╝',
]

// Monospace layout in SVG user units. CHAR_W is sized a touch wider than the
// real advance (~6.6 at this font size) so no glyph clips horizontally.
// FONT_SIZE is intentionally a hair larger than LINE_H so the full-block glyphs
// overlap vertically and tile with no seams between rows.
const COLS = 96
const CHAR_W = 6.7
const LINE_H = 10
const FONT_SIZE = 11
const ASCENT = 8.5 // baseline offset within each line so glyphs sit in the row
const W = COLS * CHAR_W
const H = LINES.length * LINE_H

export default function GradientName() {
  return (
    <svg
      role="img"
      aria-label="Subhaan Syed"
      viewBox={`0 0 ${W} ${H}`}
      className="select-none w-[320px] sm:w-[440px] md:w-[520px] lg:w-[580px] xl:w-[620px] h-auto"
      style={{ overflow: 'visible' }}
    >
      <title>Subhaan Syed</title>
      <defs>
        <linearGradient id="nameGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: 'var(--name-grad-1)' }} />
          <stop offset="50%" style={{ stopColor: 'var(--name-grad-2)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--name-grad-3)' }} />
        </linearGradient>
      </defs>
      <text
        fill="url(#nameGradient)"
        fontFamily="Menlo, Monaco, Consolas, 'Courier New', monospace"
        fontSize={FONT_SIZE}
        xmlSpace="preserve"
        style={{ whiteSpace: 'pre' }}
      >
        {LINES.map((line, i) => (
          <tspan key={i} x="0" y={ASCENT + i * LINE_H}>
            {line}
          </tspan>
        ))}
      </text>
    </svg>
  )
}
