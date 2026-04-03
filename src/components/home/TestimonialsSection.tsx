import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import FadeSection from "./FadeSection"

export default function TestimonialsSection() {
  return (
    <section className="border-t border-gray-100 bg-white px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <FadeSection>
          <h2 className="text-2xl font-bold md:text-3xl">Trusted on the ground</h2>
          <p className="mt-2 text-gray-600">
            Teams and partners who rely on Steely worldwide.
          </p>
        </FadeSection>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-safety hover:text-safety-muted"
          whileHover={{ x: 4 }}
        >
          See all
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-6 md:justify-start">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-gray-100 ${
              i === 1 ? "" : "grayscale"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`https://i.pravatar.cc/200?img=${i + 12}`}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
