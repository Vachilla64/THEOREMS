import { useId } from "react"
import { motion } from "motion/react"
import FadeSection from "./FadeSection"
import { homeImages } from "./homeImages"

export default function GlobalReachSection() {
  const formId = useId()

  return (
    <section id="contact" className="bg-white px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeSection>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Global Reach, Unmatched Reliability.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-gray-600">
            Regional hubs, unified standards, and responsive support — so your
            operations stay online wherever the work takes you.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-card bg-orange-100/80 p-5">
              <p className="text-sm font-semibold text-charcoal">
                Rapid mobilization
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Crews and equipment staged for critical paths.
              </p>
            </div>
            <div className="rounded-card bg-sky-100/80 p-5">
              <p className="text-sm font-semibold text-charcoal">
                Compliance ready
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Documentation and audits built into delivery.
              </p>
            </div>
          </div>
        </FadeSection>
        <FadeSection className="relative">
          <div className="overflow-hidden rounded-card-lg shadow-xl">
            <img
              src={homeImages.crane}
              alt=""
              className="h-[420px] w-full object-cover lg:h-full lg:min-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent lg:block" />
          </div>
          <motion.form
            className="relative z-10 mx-auto -mt-24 max-w-md rounded-card-lg border border-gray-100 bg-white p-6 shadow-2xl lg:absolute lg:bottom-8 lg:right-8 lg:mx-0 lg:mt-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-charcoal">Project inquiry</p>
            <label
              className="mt-4 block text-xs font-medium text-gray-500"
              htmlFor={`${formId}-name`}
            >
              Name
            </label>
            <input
              id={`${formId}-name`}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
            />
            <label
              className="mt-3 block text-xs font-medium text-gray-500"
              htmlFor={`${formId}-email`}
            >
              Email
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
            />
            <label
              className="mt-3 block text-xs font-medium text-gray-500"
              htmlFor={`${formId}-message`}
            >
              Message
            </label>
            <textarea
              id={`${formId}-message`}
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
            />
            <motion.button
              type="button"
              className="mt-4 w-full rounded-card-lg bg-safety py-3 text-sm font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </FadeSection>
      </div>
    </section>
  )
}
