import { motion } from "motion/react";
import { whatWeBuildCards } from "./homeImages";
import FadeSection from "./FadeSection";

const FacetCard = ({ card, index }: { card: any, index: number }) => {
  return (
    <motion.article
      key={`cap-${card.title}`}
      className="group relative overflow-hidden rounded-2xl shadow-lg w-full h-full"
      // Added staggered entrance animations
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.3, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Added proper alt tag for accessibility */}
      <img
        src={card.img}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* The gradient now gets slightly darker on hover so the text is easier to read */}
      <div className="absolute inset-0 bg-gradient-to-t from-cblue/95 via-cblue/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold tracking-wide text-charcoal shadow-sm">
        {card.tag}
      </span>

      {/* The Magic Hover Reveal */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-6 transition-transform duration-500 sm:translate-y-12 group-hover:translate-y-0">
        <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
          {card.title}
        </h3>
        {/* The info text is hidden initially, and fades/slides up on hover */}
        <p className="text-sm leading-relaxed text-gray-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:line-clamp-3">
          {card.info}
        </p>
      </div>
    </motion.article>
  );
};

export default function WhatWeBuildSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-8" id="capabilities">
      <FadeSection className="mx-auto max-w-7xl text-center">
        {/* Updated to use your custom green color for the accent */}
        <p className="text-sm font-semibold uppercase tracking-wider text-cgreen">
          Capabilities
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          What do we offer?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          From heavy-duty agricultural attachments to fully automated packaging
          lines, we supply the machinery and raw materials to power your
          industry.
        </p>
      </FadeSection>

      {/* Improved grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/*{whatWeBuildCards.map((card, index) => (
          <FacetCard card={card} index={index} />
        ))}*/}
        {/*<div className="aspect-[4/5] md:aspect-[3/4]">
          <FacetCard card={whatWeBuildCards[0]} index={0} />
        </div>*/}
        <div className="gap-4 flex flex-col">
          <FacetCard card={whatWeBuildCards[0]} index={1} />
          <FacetCard card={whatWeBuildCards[1]} index={4} />
        </div>
        <div className="aspect-[4/5] md:aspect-[3/4]">
          <FacetCard card={whatWeBuildCards[2]} index={0} />
        </div>
        <div className="gap-4 flex flex-col">
          <FacetCard card={whatWeBuildCards[3]} index={3} />
          <FacetCard card={whatWeBuildCards[4]} index={2} />
        </div>
      </div>
    </section>
  );
}
