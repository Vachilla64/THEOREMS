import FadeSection from "./FadeSection"
import StatItem from "./StatItem"
import { motion } from "motion/react"

export default function StatsSection() {
  return (
    <section id="about" className="border-b border-gray-100 bg-white py-4">
      <FadeSection>
        <motion.div className="mx-auto flex max-w-7xl flex-col divide-y divide-gray-200 sm:flex-row sm:divide-x sm:divide-y-0 md:px-8">
          <StatItem
            accent="cred"
            value={50}
            suffix="+"
            label="Years combined team experience"
          />
          <StatItem
            accent="cgreen"
            value={2}
            suffix="M+"
            label="Units produced annually"
          />
          <StatItem
            accent="cblue"
            value={85}
            suffix="%"
            label="On-time delivery rate"
          />
          <StatItem
            accent="cyellow"
            value={90}
            suffix="%"
            label="Client retention"
          />
        </motion.div>
      </FadeSection>
    </section>
  )
}
