// Renders a single line of text filled with the animated brand gradient as an
// SVG `fill` — NOT CSS background-clip:text. That's the whole point: background
// -clip text gradients intermittently fail to repaint in Chromium (they vanish
// on refresh), which is exactly the bug we're avoiding. An SVG fill paints on
// the normal layer every time, and SMIL animates the gradient with no glitch.

type Props = {
  text: string
  /** Tailwind sizing/positioning for the inline <svg> (height controls scale). */
  className?: string
}

export default function GradientText({ text, className }: Props) {
  // Deterministic sizing: textLength + lengthAdjust force the glyphs to exactly
  // fill the viewBox width, so nothing clips regardless of the rendering font.
  const FONT_SIZE = 22
  const H = 28
  const W = Math.max(1, text.length) * 11.5
  const PERIOD = W / 2

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={text}
      className={className}
      style={{ overflow: 'visible' }}
    >
      <title>{text}</title>
      <defs>
        <linearGradient
          id="footerGradientFlow"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2={PERIOD}
          y2="0"
          spreadMethod="repeat"
        >
          <stop offset="0" style={{ stopColor: 'var(--name-grad-1)' }} />
          <stop offset="0.25" style={{ stopColor: 'var(--name-grad-2)' }} />
          <stop offset="0.5" style={{ stopColor: 'var(--name-grad-3)' }} />
          <stop offset="0.75" style={{ stopColor: 'var(--name-grad-2)' }} />
          <stop offset="1" style={{ stopColor: 'var(--name-grad-1)' }} />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="0 0"
            to={`${PERIOD} 0`}
            dur="6s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <text
        x="0"
        y={FONT_SIZE}
        fill="url(#footerGradientFlow)"
        fontSize={FONT_SIZE}
        fontWeight={600}
        fontFamily="inherit"
        textLength={W}
        lengthAdjust="spacingAndGlyphs"
      >
        {text}
      </text>
    </svg>
  )
}
