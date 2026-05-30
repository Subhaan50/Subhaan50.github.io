const FULL_NAME = `███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗  █████╗ ███╗   ██╗    ███████╗██╗   ██╗███████╗██████╗
██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██╔══██╗████╗  ██║    ██╔════╝╚██╗ ██╔╝██╔════╝██╔══██╗
███████╗██║   ██║██████╔╝███████║███████║███████║██╔██╗ ██║    ███████╗ ╚████╔╝ █████╗  ██║  ██║
╚════██║██║   ██║██╔══██╗██╔══██║██╔══██║██╔══██║██║╚██╗██║    ╚════██║  ╚██╔╝  ██╔══╝  ██║  ██║
███████║╚██████╔╝██████╔╝██║  ██║██║  ██║██║  ██║██║ ╚████║    ███████║   ██║   ███████╗██████╔╝
╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚══════╝   ╚═╝   ╚══════╝╚═════╝`

// Static gradient (no animation). Animating background-clip:text triggers a
// Chromium bug where the text renders invisible until a repaint — which is why
// the art vanished on refresh. A static gradient paints reliably every load.
const gradient =
  'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 ' +
  'dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 ' +
  'bg-clip-text text-transparent'

const size =
  'text-[0.35rem] sm:text-[0.48rem] md:text-[0.56rem] lg:text-[0.63rem] xl:text-[0.68rem]'

export default function GradientName() {
  return (
    <div role="img" aria-label="Subhaan Syed" className="select-none">
      <pre
        aria-hidden
        className={`font-mono leading-none whitespace-pre m-0 ${size} ${gradient}`}
      >
        {FULL_NAME}
      </pre>
    </div>
  )
}
