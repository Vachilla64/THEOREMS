import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import FadeSection from "./FadeSection";

// Added specific images to each service for the dynamic left-side display
const serviceDetails = [
  {
    title: "Free Installation & Training",
    desc: "Complete local setup, plus comprehensive operator and maintenance training.",
    image: "/images/hero/installation.jpeg",
  },
  {
    title: "After-Sales & Spare Parts",
    desc: "Yearly spare parts supply to ensure the longevity and reliability of your machinery.",
    image: "/images/hero/spare_parts.jpg",
  },
  {
    title: "Raw Material Support",
    desc: "Supply of virgin raw materials with available credit agreements for ongoing production.",
    image: "/images/silos.jpg", // Kept your original image here!
  },
  {
    title: "Certified Quality",
    desc: "Third-party quality and quantity inspections by SGS, TUV, or COTECNA.",
    image: "/images/hero/certified.png",
  },
];

export default function ServicesAndSupport() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the cards every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % serviceDetails.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="bg-cgreen px-4 py-20 text-white md:px-8" id="materials">
      <FadeSection className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-safety">
          Support
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Services & Support
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Beyond supplying machinery, we ensure your operational success through
          comprehensive setup, training, and ongoing material support.
        </p>
      </FadeSection>

      <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:gap-12">
        
        {/* Left Side: Dynamic Feature Card */}
        <motion.article
          className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal md:aspect-[3/4] lg:aspect-square shadow-xl"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          {/* AnimatePresence handles the smooth crossfade between images */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`image-${activeIndex}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full"
            >
              <img
                src={serviceDetails[activeIndex].image}
                alt={serviceDetails[activeIndex].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyellow">
                  Feature 0{activeIndex + 1}
                </p>
                <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl leading-tight">
                  {serviceDetails[activeIndex].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.article>

        {/* Right Side: Interactive Services List */}
        <div className="flex flex-col justify-center rounded-2xl bg-white p-6 text-black shadow-xl md:p-8 lg:p-12">
          <h3 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl lg:mb-8">
            Comprehensive Care
          </h3>
          
          <div className="flex flex-col gap-4">
            {serviceDetails.map((service, idx) => {
              const isActive = activeIndex === idx;

              return (
                <motion.div
                  key={`service-${idx}`}
                  // The interaction triggers
                  onMouseEnter={() => {
                    setActiveIndex(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPaused(true);
                  }}
                  className={`flex cursor-pointer gap-5 rounded-xl p-4 transition-all duration-300 ${
                    isActive
                      ? "bg-gray-50 shadow-md ring-1 ring-gray-200 scale-[1.02]"
                      : "hover:bg-gray-50/50 hover:scale-[1.01]"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  {/* Number Badge changes color if active */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold shadow-sm transition-colors duration-300 ${
                      isActive ? "bg-cgreen text-white" : "bg-cyellow text-black"
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  
                  <div>
                    <h4
                      className={`text-xl font-bold transition-colors duration-300 ${
                        isActive ? "text-cgreen" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h4>
                    <p className="mt-2 text-base leading-relaxed text-gray-600">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
