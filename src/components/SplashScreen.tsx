import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  // This simulates the loading time of your website.
  // If you fetch data, you can tie setIsLoading(false) to your API response instead!
  useEffect(() => {
    // Lock the body scroll while splash screen is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling when done
      document.body.style.overflow = "unset";
    }, 2500); // Splash screen lasts for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          // Starts fully visible, fades out and slides up slightly when exiting
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl"
        >
          {/* Main Logo Animation */}
          <motion.img
            src="/LOGO/tglogo.png"
            alt="Theorems Groups"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-72 md:w-[28rem] object-contain drop-shadow-2xl"
          />

          {/* The Loading Progress Bar */}
          <motion.div
            className="mt-12 h-1 w-64 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-white"
              // Fills from 0 to 100% over the course of the timeout
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Status Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 text-sm font-bold uppercase tracking-widest text-white animate-pulse"
          >
            Initializing Catalog...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
