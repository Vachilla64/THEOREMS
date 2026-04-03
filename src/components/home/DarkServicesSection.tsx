import { useState } from "react"
import { motion } from "motion/react"
import { ChevronRight } from "lucide-react"
import FadeSection from "./FadeSection"
import { homeImages } from "./homeImages"

const darkServices = [
  "Custom Manufacturing",
  "Industrial Automation",
  "Precision Metalwork",
  "Systems Integration",
  "Quality Assurance",
]

export default function DarkServicesSection() {
  const [openService, setOpenService] = useState(0)

  return (
    <section className="bg-[#242244] px-4 py-20 text-white md:px-8">
      <FadeSection className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-safety">
          How we work
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Built for demanding environments
        </h2>
      </FadeSection>
      <div className="mx-auto mt-12 max-w-7xl space-y-0">
        {darkServices.map((label, i) => (
          <motion.button
            key={label}
            type="button"
            onClick={() => setOpenService(i)}
            className="flex w-full items-center justify-between border-t border-white/10 py-6 text-left transition hover:border-safety/40"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          >
            <span className="text-lg font-medium">
              <span className="mr-4 text-safety/80">0{i + 1}</span>
              {label}
            </span>
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
                openService === i
                  ? "border-safety bg-safety text-charcoal"
                  : "border-white/30 text-white"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </span>
          </motion.button>
        ))}
      </div>
      <FadeSection className="mx-auto mt-14 max-w-7xl overflow-hidden rounded-card-lg border border-white/10 bg-charcoal-light shadow-2xl">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[280px]">
            <img
              src={homeImages.workers}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/20" />
          </div>
          <div className="flex flex-col justify-center bg-white p-8 text-charcoal md:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-safety">
              Insight
            </p>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              The vision of Future Automation
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              Partner with us to modernize lines, integrate controls, and keep
              teams safe — from pilot through full-scale rollout.
            </p>
          </div>
        </div>
      </FadeSection>
    </section>
  )
}
