import { motion } from "motion/react"
import { Cog, Sparkles, Wrench, Zap, type LucideIcon } from "lucide-react"
import FadeSection from "./FadeSection"

const serviceTiles: { title: string; Icon: LucideIcon; highlight?: boolean }[] =
  [
    { title: "Panel Design", Icon: Zap },
    { title: "Install & Commission", Icon: Wrench, highlight: true },
    { title: "Preventive Maintenance", Icon: Cog },
    { title: "Power Distribution", Icon: Zap },
    { title: "Control Systems", Icon: Sparkles },
    { title: "Retrofit & Upgrade", Icon: Wrench },
  ]

export default function ElectricalServicesSection() {
  return (
    <section id="services" className="bg-gray-100 px-4 py-20 md:px-8">
      <FadeSection className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Comprehensive Electrical Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          From design-build to lifecycle support — one partner for critical
          power and controls.
        </p>
      </FadeSection>
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceTiles.map(({ title, Icon, highlight }) => (
          <motion.div
            key={title}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className={`flex flex-col items-center rounded-card-lg p-8 text-center shadow-sm ${
              highlight
                ? "bg-charcoal text-white shadow-xl ring-2 ring-safety/30"
                : "bg-white text-charcoal"
            }`}
          >
            <span
              className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${
                highlight ? "bg-safety text-white" : "bg-safety/15 text-safety"
              }`}
            >
              <Icon className="h-7 w-7" aria-hidden />
            </span>
            <h3
              className={`mt-5 text-lg font-semibold ${highlight ? "text-white" : ""}`}
            >
              {title}
            </h3>
            <p
              className={`mt-2 text-sm ${highlight ? "text-white/75" : "text-gray-500"}`}
            >
              Scalable delivery with certified crews and documented
              commissioning.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
