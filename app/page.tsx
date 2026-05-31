import GradientName from './components/GradientName'
import Footer from './components/Footer'
import LogoBadge from './components/LogoBadge'

const projects = [
  {
    name: 'StatLens',
    href: 'https://github.com/subhaan-syed/statlens',
    subtitle: 'A tool for training and comparing machine learning models right at on your fingertips',
  },
  {
    name: 'Collab',
    href: 'https://github.com/subhaan-syed/collab',
    subtitle: 'A Google-Docs-style editor where multiple people write code together in real time.',
  },
  {
    name: 'NexusAI',
    href: 'https://github.com/subhaan-syed/nexus-ai',
    subtitle: 'Three parallel AI agents search multiple sources, deduplicate results, and stream a cited research report live to User.',
  },
]

const experience = [
  {
    logo: '/uwrt-logo.png',
    badge: 'UW',
    company: 'UW Robotics Team (UWRT)',
    role: 'Software Engineer • Design Team • Mars Rover',
    date: '2026',
    description:
      'Building the software that powers the team\'s autonomous Mars rover, and contributing to the systems design.',
  },
  {
    logo: '/iicuw-logo.png',
    badge: 'II',
    company: 'IICUW',
    role: 'Full Stack • Tech Lead • Club',
    date: '2026',
    description:
      'Shipped a finance system used by the organization, seen by all its members.',
  },
  {
    logo: '/first-logo.png',
    badge: 'FR',
    company: 'FIRST Robotics',
    role: 'Programming Lead & Instructor • Python • Mentorship',
    date: '2024–2025',
    description:
      'Led the software side of FRC Team 3161, teaching every incoming member and guiding them through building real features.',
  },
]

export default function Home() {
  return (
    <main className="max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
      {/* Hero */}
      <section className="mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 items-start">
          {/* Left: name / tagline / links */}
          <div className="lg:shrink-0 flex flex-col gap-4">
            <GradientName />
            <p className="italic text-neutral-500 dark:text-neutral-400 text-base xl:text-lg">
              building things that work :)
            </p>
            <nav className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <a
                href="https://www.linkedin.com/in/subhaans"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                linkedin
              </a>
              <span className="text-neutral-400 dark:text-neutral-600">·</span>
              <a
                href="https://github.com/subhaan-syed"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                github
              </a>
              <span className="text-neutral-400 dark:text-neutral-600">·</span>
              <a
                href="mailto:subhaan.syed@uwaterloo.ca"
                className="underline underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                mail
              </a>
            </nav>
          </div>
          {/* Right: bio */}
          <div className="flex flex-col gap-1 lg:pt-1">
            <p className="italic font-semibold text-lg xl:text-2xl">
              Computer Science at University of Waterloo.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-base xl:text-lg">
              Minor in Entrepreneurship.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-base xl:text-lg">
              Software Development at UW Robotics Team.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-base xl:text-lg">
              Previously at IICUW and FIRST Robotics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-medium italic tracking-tight mb-8 text-neutral-800 dark:text-neutral-200">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {projects.map((project) => (
            <div key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg xl:text-xl font-semibold underline underline-offset-4 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                {project.name}
              </a>
              <p className="text-sm xl:text-base text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                {project.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-medium italic tracking-tight mb-8 text-neutral-800 dark:text-neutral-200">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <div key={item.company} className="flex gap-4 items-start">
              <LogoBadge src={item.logo} alt={item.company} fallback={item.badge} />

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold xl:text-lg">{item.company}</span>
                  <span className="text-sm xl:text-base text-neutral-500 shrink-0">{item.date}</span>
                </div>
                <p className="text-sm xl:text-base italic text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {item.role}
                </p>
                <p className="text-sm xl:text-base text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="mb-4">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-medium italic tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
          Hobbies
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base xl:text-lg">
          Outside of work, I&apos;m usually at the gym, studying in the library, or playing pool 🎱
        </p>
      </section>

      <Footer />
    </main>
  )
}
