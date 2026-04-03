import { Triangle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroSection() {
  // --- Parallax Setup ---
  // Tracks how far the user has scrolled down the page
  const { scrollY } = useScroll();
  // Moves the image down slightly slower than the user scrolls, creating depth
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "20%"]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04192b]">
      {/* --- Background Layers --- */}
      
      {/* 1. Parallax Base Image */}
      {/* We make the image taller than the screen (-top-[20%] & h-[140%]) so it has room to move without revealing blank space */}
      <motion.img
        style={{ y: backgroundY }}
        src="/images/Mainpage-1.jpg"
        alt=""
        className="absolute -top-[20%] left-0 h-[140%] w-full object-cover opacity-60"
      />
      
      {/* 2. Giant Watermark Logo */}
      <img
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120rem] select-none opacity-10"
        src="/LOGO/clogo.png"
        alt=""
      />
      
      {/* 3. Lighter Gradient Overlay (Less Tint!) */}
      {/* We reduced the darkness here so the image behind it is much more visible */}
      {/*<div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent" />*/}

      {/* --- Content Layer --- */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-4 py-24 md:flex-row md:px-8 lg:gap-20">
        
        {/* LEFT COLUMN: Typography & CTA */}
        <div className="flex w-full flex-col items-start pt-10 md:w-1/2 md:pt-0">

          <motion.h1
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Industries Across Africa & the Middle East
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We design, produce, and supply complete manufacturing setups and raw materials scaled exactly to your operational budget.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Primary Button */}
            <a href="#products">
              <motion.button
                className="flex h-14 items-center justify-center rounded-full bg-cred px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-red-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore our Catalog
              </motion.button>
            </a>

            {/* Secondary Button (Linked to YouTube) */}
            <a href="https://www.youtube.com/watch?v=KUxi_yS4Yv8" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="group flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 text-base font-bold text-white shadow-sm backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                  <Triangle className="ml-0.5 h-4 w-4 rotate-90 fill-black stroke-black" />
                </div>
                <span>Watch on YouTube</span>
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: YouTube Video Showcase */}
        <div className="relative w-full md:w-1/2">
          
          {/* Floating 'Est. 1992' Badge */}
          <motion.div
            className="absolute -right-2 -top-6 z-20 hidden rounded-full border border-white/20 bg-cred/20 px-5 py-8 text-center shadow-xl backdrop-blur-md md:block lg:-right-8 lg:-top-10"
            initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.4 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-white">
              Est.
            </p>
            <p className="text-xl font-black text-white">1992</p>
          </motion.div>

          {/* Glass Video Container */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/20 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:p-4"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            {/* The YouTube iframe (aspect-video keeps the 16:9 ratio perfect) */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-video shadow-inner">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/KUxi_yS4Yv8?rel=0&modestbranding=1"
                title="Theorems Groups Machinery Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
