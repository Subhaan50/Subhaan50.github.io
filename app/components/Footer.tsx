export default function Footer() {
  return (
    <footer className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-neutral-500">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Seeking opportunities Fall 2026
        </span>

        <a
          href="mailto:subhaan.syed@uwaterloo.ca"
          className="
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
            dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
            bg-clip-text text-transparent font-medium
            transition-opacity hover:opacity-80
          "
        >
          Feel free to reach out!
        </a>

        <span>© Subhaan Syed · Last updated May 2026</span>
      </div>
    </footer>
  )
}
