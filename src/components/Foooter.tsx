import FadeSection from "./home/FadeSection";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Global Locations", href: "#locations" },
    { name: "Our Capabilities", href: "#capabilities" },
    { name: "Company Profile (PDF)", href: "#" },
  ],
  machinery: [
    { name: "Plastics & Packaging", href: "#" },
    { name: "Food & Beverage Lines", href: "#" },
    { name: "Heavy Agriculture", href: "#" },
    { name: "Industrial Construction", href: "#" },
    { name: "Hygiene & Cosmetics", href: "#" },
  ],
  support: [
    { name: "Installation & Training", href: "#" },
    { name: "Spare Parts Request", href: "#" },
    { name: "Raw Material Supply", href: "#" },
    { name: "Contact Support", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] pt-24 text-gray-300">
      <img src="/LOGO/clogo.png" className="absolute size-[60rem] -bottom-1/2 left-1/2 opacity-5" />
      {/* Subtle top border glow */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cgreen/50 to-transparent" />

      <FadeSection className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Brand & Mission (Takes up 4 cols on Desktop) */}
          <div className="flex flex-col gap-6 lg:col-span-4 lg:pr-8">
            <div className="group  flex items-center gap-3 hover:scale-110 transition-all">
              <img src="/LOGO/clogo.png" alt="Theorems Logo" className="h-10 w-10 object-contain group-hover:animate-spin transition-all" />
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Theorems <span className="text-cgreen">Groups</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Supplying high-quality "Made in India" production machinery and raw materials. 
              Creating sustainable impact, improving living standards, and generating local employment across Africa and the Middle East.
            </p>
            
            {/* Mini Socials */}
            <div className="mt-2 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[#FF0000] hover:text-white hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[#0A66C2] hover:text-white hover:scale-110">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm transition-colors hover:text-cgreen">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Machinery */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Our Catalog</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.machinery.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm transition-colors hover:text-cgreen">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support & Quick Contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Support & Services</h4>
            <ul className="mb-8 flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm transition-colors hover:text-cgreen">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Headquarters</p>
              <p className="text-sm font-bold text-white">Dubai, United Arab Emirates</p>
              <a href="mailto:management@theoremsgroups.com" className="mt-2 block text-sm text-cgreen hover:underline">
                management@theoremsgroups.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Theorems Groups. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-white">Sitemap</a>
          </div>
        </div>
      </FadeSection>
    </footer>
  );
}