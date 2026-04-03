import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FadeSection from "./FadeSection";

// Updated data array with flag paths
const globalOffices = [
  {
    id: "uae",
    country: "UAE (Headquarters)",
    title: "Dubai Head Office",
    address: "Dubai, United Arab Emirates",
    phone: "+971 56 358 7400",
    email: "management@theoremsgroups.com",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    flag: "/images/flags/uae.jpg"
  },
  {
    id: "india",
    country: "India (Impex Hub)",
    title: "Theorems Design India Pvt Ltd",
    address: "Royal Palms, Orchard Road Mall, 4th Floor, Goregaon East, Mumbai",
    phone: "+91 91674 30249",
    email: "management@theoremsgroups.com",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    flag: "/images/flags/india.webp", 
  },
  {
    id: "nigeria",
    country: "Nigeria",
    title: "Theorems Engineering Services Ltd",
    address: "No 4 Algiers Street Zone 5, Opposite High Court Wuse Abuja",
    phone: "+234 817 202 3940",
    email: "eofili@theorems.com",
    image: "https://images.unsplash.com/photo-1617066164287-160a0f443831?w=800&q=80",
    flag: "/images/flags/nigeria.jpg", 
  },
  {
    id: "sa",
    country: "South Africa",
    title: "Theorems South Africa",
    address: "Regus Business Centre, Ground Floor, 6 Kikuyu Road, Sunninghill, Johannesburg",
    phone: "+27 (0) 11 236 8676",
    email: "mtichareva@NatStandard.co.za",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    flag: "/images/flags/SA.jpg", 
  },
  {
    id: "sierra",
    country: "Sierra Leone",
    title: "Theorems Sierra Greenfields Ltd",
    address: "No.1 White Street, Brookfields, Freetown",
    phone: "+232 78585656",
    email: "management@theoremsgroups.com",
    image: "https://images.unsplash.com/photo-1518182170546-076616fd6251?w=800&q=80",
    flag: "/images/flags/SL.jpg", 
  },
  {
    id: "ethiopia",
    country: "Ethiopia",
    title: "Theorems Groups Ethiopia Agro",
    address: "Adama City, Oromia Region, Ethiopia",
    phone: "+251 91 123 4567",
    email: "management@theoremsgroups.com",
    image: "https://images.unsplash.com/photo-1522256426463-228784fcba88?w=800&q=80",
    flag: "/images/flags/ethiopia.jpg", 
  },
];

export default function GlobalLocationsSection() {
  const [activeTab, setActiveTab] = useState(globalOffices[0]);

  return (
    <section
      className="bg-charcoal px-4 py-24 text-white md:px-8"
      id="locations"
    >
      <FadeSection className="mx-auto max-w-7xl">
        {/* Header Area */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cgreen">
              Global Network
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Local Support. <br />
              <span className="text-gray-400">Global Scale.</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg text-gray-400">
            Reach out to our global headquarters in Dubai, or contact your
            nearest regional office for localized setup, inspection, and
            support.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[350px_1fr] lg:gap-16">
          {/* Left Side: Interactive Location List */}
          <div className="flex flex-col gap-2">
            {globalOffices.map((office) => {
              const isActive = activeTab.id === office.id;
              return (
                <button
                  key={office.id}
                  onClick={() => setActiveTab(office)}
                  className={`group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-cgreen/10 text-white shadow-lg scale-[1.02] border border-cgreen/20"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:scale-[1.01] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* ✨ Creative Flag Avatar ✨ */}
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 overflow-hidden shadow-inner">
                      <img
                        src={office.flag}
                        alt={`${office.country} Flag`}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                          isActive
                            ? "grayscale-0 scale-110"
                            : "grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                        }`}
                      />
                      {/* Active glowing ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-[2px] border-cgreen/80 shadow-[inset_0_0_8px_rgba(34,197,94,0.5)] z-10" />
                      )}
                    </div>
                    <span className="text-lg font-bold">{office.country}</span>
                  </div>

                  <svg
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isActive
                        ? "translate-x-0 opacity-100 text-cgreen"
                        : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                    }`}
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
              );
            })}
          </div>

          {/* Right Side: Active Location Details Card */}
          <div className="relative h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex h-full flex-col md:flex-row relative z-10"
              >
                {/* Location Info */}
                <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                  {/* ✨ Creative Glass Badge with Flag ✨ */}
                  <div className="mb-4 flex items-center gap-2.5 w-fit rounded-full bg-white/5 border border-white/10 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur-md">
                    <img
                      src={activeTab.flag}
                      alt="Flag"
                      className="h-6 w-6 rounded-full object-cover shadow-sm"
                    />
                    <span className="text-xs font-bold uppercase tracking-widest text-cgreen">
                      {activeTab.country}
                    </span>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                    {activeTab.title}
                  </h3>
                  <p className="mb-8 max-w-sm text-lg leading-relaxed text-gray-400">
                    {activeTab.address}
                  </p>

                  <div className="space-y-5">
                    {/* Phone Link */}
                    <a
                      href={`tel:${activeTab.phone.replace(/[^0-9+]/g, "")}`}
                      className="group flex items-center gap-4 text-lg font-semibold text-white transition-colors hover:text-cgreen"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-cgreen/20">
                        📞
                      </div>
                      {activeTab.phone}
                    </a>

                    {/* Email Link */}
                    <a
                      href={`mailto:${activeTab.email}`}
                      className="group flex items-center gap-4 text-lg font-semibold text-white transition-colors hover:text-cgreen break-all"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-cgreen/20">
                        ✉️
                      </div>
                      {activeTab.email}
                    </a>
                  </div>
                </div>

                {/* Location Image / Abstract City Graphic */}
                <div className="relative h-64 w-full md:h-auto md:w-5/12 lg:w-1/2">
                  <div className="absolute inset-0 bg-cgreen/20 mix-blend-overlay z-10" />
                  <img
                    src={activeTab.image}
                    alt={activeTab.country}
                    className="h-full w-full object-cover grayscale transition-transform duration-1000 hover:scale-110 hover:grayscale-0"
                  />
                  {/* Subtle gradient to blend the image smoothly into the dark text card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent md:bg-gradient-to-r md:from-[#111111] md:via-[#111111]/80 md:to-transparent z-10" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </FadeSection>
    </section>
  );
}
