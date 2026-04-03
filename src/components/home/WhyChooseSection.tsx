import { motion } from "motion/react";
import FadeSection from "./FadeSection";

export const whyChooseUsCards = [
  {
    // Image of an engineer confidently inspecting equipment
    img: "/images/hero/warranty.jpg",
    tag: "Assurance",
    title: "10-Year Machinery Warranty",
    info: "We stand by the robust build of our equipment with a massive 10-year warranty on machinery (excluding electrical components and wear-and-tear consumables).",
  },
  {
    // Image of engineers working together / training on a machine
    img: "/images/hero/installation.jpeg",
    tag: "Training",
    title: "Free Local Installation & Training",
    info: "We ensure your operational success by providing free local installation, along with comprehensive operator and maintenance training for your team.",
  },
  {
    // Image of a large industrial supply / raw materials warehouse
    img: "/images/hero/raw_material.png",
    tag: "Supply",
    title: "Raw Material Support",
    info: "Keep your production lines running smoothly. We supply virgin raw materials and offer flexible credit agreements for raw materials on a contracted basis.",
  },
  {
    // Image of precise industrial testing / quality control
    img: "/images/hero/inspections.jpg",
    tag: "Quality",
    title: "Certified Third-Party Inspections",
    info: "Guaranteeing world-class excellence, all our machinery is subject to rigorous third-party quality and quantity inspections by trusted entities like SGS, TUV, or COTECNA.",
  },
  {
    // Image of a team reviewing blueprints / scaling a project
    img: "/images/hero/production.png",
    tag: "Scalability",
    title: "Custom Setups Built for Your Budget",
    info: "Whether you are a startup or an established enterprise, we design, produce, and supply complete machinery lines scaled specifically to your operational budget.",
  },
  {
    // Image of metallic gears and spare parts
    img: "/images/hero/spare_parts.jpg",
    tag: "Maintenance",
    title: "Dedicated Spare Parts Pipeline",
    info: "Minimize downtime and maximize profits. We provide a dependable, yearly supply of authentic spare parts to keep your production lines running continuously.",
  },
] as const;

export default function WhyChooseSection() {
  return (
    <section
      className="bg-cblue rounded-t-xl text-white px-4 py-20 md:px-8"
      id="why-choose"
    >
      <FadeSection className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
          Credibility
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Why choose us?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Heavy-industry structures, power systems, and automation delivered
          with rigorous QA and field-proven workflows.
        </p>
      </FadeSection>

      {/* Main Container for the alternating sections */}
      <div className="mx-auto mt-20 max-w-7xl flex flex-col gap-2">
        {whyChooseUsCards.map((card, index) => {
          // If index is even (0, 2, 4), image is on the right.
          // If index iswhatWeBuildCards odd (1, 3, 5), image is on the left.
          const isImageRight = index % 2 === 0;

          return (
            <motion.article
              key={`why-${card.title}`}
              className={`flex flex-col gap-8 md:items-center ${
                isImageRight ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image Side */}
              <div className="relative w-full overflow-hidden rounded-2xl shadow-xl md:w-1/2 aspect-[4/3] group scale-90">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cdblue/95 via-cdblue/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold tracking-wide text-[#0369a1] shadow-sm shadow-black/20">
                  {card.tag}
                </span>
              </div>

              {/* Text Side */}
              <div className="relative flex w-full flex-col justify-center md:w-1/2 md:px-8 lg:px-12">
                <span className="absolute -bottom-14 -left-0 font-bold text-[20rem] text-white/10">
                  {index + 1}
                </span>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                  {card.title}
                </h3>
                <p className="text-lg leading-relaxed text-blue-50/90">
                  {card.info}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
