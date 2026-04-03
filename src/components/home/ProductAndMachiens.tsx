import { motion } from "motion/react";
import FadeSection from "./FadeSection";

// Data array based on the massive Theorems Groups catalog
const productCategories = [
  {
    title: "Plastics & Disposables",
    desc: "Complete lines for PET bottles, PVC pipes, & injection molding.",
    image: "/images/catalog/plastic.png",
  },
  {
    title: "Food & Beverage",
    desc: "Water purification, juice filling lines, bakery, & rice milling.",
    image: "/images/catalog/food.png",
  },
  {
    title: "Heavy Agriculture",
    desc: "Robust tractors, heavy-duty cultivators, & disc harrows.",
    image: "/images/catalog/agriculture.png",
  },
  {
    title: "Hygiene & Daily Care",
    desc: "Machinery for sanitary pads, detergent, & soap manufacturing.",
    image: "/images/catalog/hygiene.png",
  },
  {
    title: "Automated Packaging",
    desc: "Sachet water pouching, dry powder, chips & nut packaging.",
    image: "/images/catalog/packaging.png",
  },
  {
    title: "Industrial & Construction",
    desc: "Heavy-duty hollow block machines & drilling rigs.",
    image: "/images/catalog/industrial.png",
  },
];

export default function ProductAndMachines() {
  return (
    // ✨ Notice the background class here! This creates the seamless red-to-green blend
    <section
      className="bg-gradient-to-b from-cred via-cred to-cgreen px-4 py-20 text-white md:px-8"
      id="products"
    >
      <FadeSection className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-safety">
          Our Supply
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Our Products & Machines
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          World-class "Made in India" manufacturing setups delivered directly to
          Africa and the Middle East.
        </p>
      </FadeSection>

      <div className="mx-auto mt-12 grid max-w-7xl gap-8 rounded-2xl bg-white p-6 shadow-2xl md:grid-cols-2 md:p-12 lg:gap-12">
        {/* Left Side: Headline & Intro */}
        <div className="flex flex-col justify-center gap-6 text-black">
          <h3 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Explore Our <br className="hidden md:block" />
            <span className="text-cred">Massive Catalog</span>
          </h3>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            From automated water purification plants to heavy-duty agricultural
            tractors, we supply the exact machinery and raw materials needed to
            scale your local production.
          </p>

          <div className="mt-4 flex gap-4">
            <button className="rounded-full bg-charcoal px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-black hover:shadow-lg">
              Download Profile
            </button>
            <button className="rounded-full border-2 border-gray-200 px-8 py-3.5 text-sm transition-all hover:border-cred font-bold text-cred underline">
              See all {"=>"}
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Category Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {productCategories.map((cat, idx) => (
            <motion.div
              key={`cat-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-md"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cred/90 via-cred/40 to-transparent duration-300 opacity-50 group-hover:opacity-30 group-hover:from-black transition-all" />

              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-lg font-bold text-white md:text-xl">
                  {cat.title}
                </h4>
                <p className="mt-1 translate-y-2 transform text-sm text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✨ The New Chatbot CTA Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative mx-auto mt-32 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/20 px-6 py-12 shadow-2xl backdrop-blur-md md:px-16 md:py-16"
      >
        {/* The giant question mark watermark (clipped safely inside the box) */}
        <span className="absolute -bottom-16 -right-8 select-none textV-[16rem] font-black leading-none text-white/5 md:-bottom-24 md:-right-12 md:text-[28rem]">
          ?
        </span>

        <div className="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col text-center md:text-left">
            {/* Chatbot Vibe Pill */}
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-white md:mx-0">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" />
              </svg>
              24/7 Digital Assistant
            </div>

            <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Looking for something specific?
            </h3>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Our catalog is massive. Skip the scrolling and tell our
              intelligent assistant exactly what you need, we'll find it
              instantly.
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
              className="group relative flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-cgreen transition-all active:scale-75 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Ask the Assistant
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}