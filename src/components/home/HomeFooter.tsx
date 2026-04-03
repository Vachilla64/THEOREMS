import { Cog } from "lucide-react"

export default function HomeFooter() {
  return (
    <footer className="bg-charcoal px-4 py-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-3xl font-bold leading-tight md:text-4xl">
            Let&apos;s Build The Future Together
          </h2>
          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-card-lg bg-white px-8 py-3 text-sm font-semibold text-charcoal transition hover:bg-gray-100"
          >
            Start a project
          </a>
        </div>
        <div className="grid gap-10 py-12 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-safety/90">
              Contact
            </p>
            <p className="mt-4 text-sm text-white/75">
              hello@steely-industrial.com
            </p>
            <p className="text-sm text-white/75">+1 (555) 010-4200</p>
            <p className="mt-2 text-sm text-white/75">
              Detroit · Houston · Düsseldorf
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-safety/90">
              Follow
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden pt-8">
          <div className="flex items-center justify-center gap-4">
            <p className="select-none text-5xl font-bold tracking-tighter text-white/[0.07] sm:text-7xl md:text-8xl">
              Motive
            </p>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-safety text-charcoal shadow-lg md:h-16 md:w-16">
              <Cog className="h-8 w-8 md:h-9 md:w-9" />
            </span>
            <p className="select-none text-5xl font-bold tracking-tighter text-white/[0.07] sm:text-7xl md:text-8xl">
              Steely
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
