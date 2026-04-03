import { motion } from "motion/react";
import FadeSection from "./FadeSection";

export default function ContactUsSection() {
  return (
    <section
      className="text-white relative overflow-hidden bg-cyellow px-4 py-24 md:px-8"
      id="contact"
    >
      <img
        src="/images/Mainpage-1.jpg"
        className="absolute top-0 left-0 w-full h-full object-fill"
      />
      {/* Background Logo */}
      <img
        src="/LOGO/clogo.png"
        alt=""
        className="pointer-events-none absolute -right-40 top-10 z-0 h-[80rem] w-[80rem] animate-[spin_60s_linear_infinite] opacity-10 mix-blend-overlay select-none"
      />
      <div className="absolute backdrop-blur-xl inset-0 bg-charcoal/50  h-full flex items-center" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeSection className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cgreen">
            Reach Out
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Let's get in touch!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Ready to scale your production? Send us your requirements, and our
            engineering team will get back to you with a tailored quotation
            within 24 hours.
          </p>
        </FadeSection>

        <div className="mt-16 flex flex-col gap-12 lg:mt-20 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Side: The Stylish Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <form className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-2xl md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                {/* First Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-bold text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-cgreen focus:bg-white focus:ring-4 focus:ring-cgreen/10"
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-bold text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-cgreen focus:bg-white focus:ring-4 focus:ring-cgreen/10"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@company.com"
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-cgreen focus:bg-white focus:ring-4 focus:ring-cgreen/10"
                  />
                </div>
                {/* Company Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-bold text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Doe Manufacturing Ltd."
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-cgreen focus:bg-white focus:ring-4 focus:ring-cgreen/10"
                  />
                </div>
              </div>

              {/* Interest Dropdown */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="interest"
                  className="text-sm font-bold text-gray-700"
                >
                  Primary Interest
                </label>
                <select
                  id="interest"
                  defaultValue=""
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-cgreen focus:bg-white focus:ring-4 focus:ring-cgreen/10"
                >
                  <option value="" disabled>
                    Select a machinery category...
                  </option>
                  <option value="plastics">Plastics & Packaging</option>
                  <option value="food">Food & Beverage Processing</option>
                  <option value="agriculture">
                    Heavy Agriculture Machinery
                  </option>
                  <option value="construction">
                    Industrial & Construction Build
                  </option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              {/* Message Area */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-700"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your production goals, target capacity, and timeline..."
                  className="resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-cgreen focus:bg-white focus:ring-4 focus:ring-cgreen/10"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="mt-2 w-full rounded-xl bg-cgreen px-8 py-4 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >
                Request Quotation
              </button>
            </form>
          </motion.div>

          {/* Right Side: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full flex-col justify-center gap-10 lg:w-5/12 lg:pt-8"
          >
            {/* Direct Communication Info */}
            <div>
              <h3 className="mb-4 text-3xl font-bold">Direct Communication</h3>
              <p className="text-lg leading-relaxed text-white/80">
                Prefer to speak with an expert directly? Our primary sales and
                engineering team is available via our headquarters to guide you
                through our catalog.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Email Block */}
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-white/60">
                    Email Us
                  </p>
                  <a
                    href="mailto:management@theoremsgroups.com"
                    className="text-xl font-bold transition-colors hover:text-cgreen"
                  >
                    management@theoremsgroups.com
                  </a>j
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-white/60">
                    Call Headquarters (Dubai)
                  </p>
                  <a
                    href="tel:+971563587400"
                    className="text-xl font-bold transition-colors hover:text-cgreen"
                  >
                    +971 56 358 7400
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white/50 px-5 py-3 shadow-sm border border-charcoal/10">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-bold">
                Sales team currently online
              </span>
            </div>

            {/* --- NEW: STYLISH SOCIALS SECTION --- */}
            <div className="mt-4 border-t border-charcoal/10 pt-8">
              <h4 className="mb-5 text-xl font-bold">Connect & Watch</h4>

              <div className="flex flex-col gap-4">
                {/* 1. Emphasized YouTube Card */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-100 hoier:bg-gradient-to-b from-transparent via-cred/40 to-cred"
                >
                  <div className="absolute z-100 top-0 left-0 inset-0 bg-gradient-to-b from-cred/50 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-[#FF0000] group-hover:text-white">
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-charcoal">
                      Watch Machines in Action
                    </p>
                    <p className="text-sm font-medium text-charcoal/60">
                      Subscribe to our YouTube Channel
                    </p>
                  </div>
                </a>

                {/* 2. LinkedIn & Instagram Secondary Pills */}
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 items-center gap-3 rounded-2xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] transition-colors duration-300 group-hover:bg-[#0A66C2] group-hover:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className="font-bold text-charcoal">LinkedIn</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 items-center gap-3 rounded-2xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E1306C]/10 text-[#E1306C] transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-[#F56040] group-hover:via-[#E1306C] group-hover:to-[#833AB4] group-hover:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <span className="font-bold text-charcoal">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
