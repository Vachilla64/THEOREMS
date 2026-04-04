import { Link, NavLink } from "react-router-dom";

export default function LandingNav() {
  return (
    <header className="absolute inset-x-0 top-6 z-50 ">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 md:px-8  rounded-full overflow-hidden border-0">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white drop-shadow-md"
        >
          {/*<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-safety text-charcoal">
            <Cog className="h-5 w-5" aria-hidden />
          </span>*/}
          <img className="h-12 p-1" src="/LOGO/tglogo.png" />
        </Link>
        <nav className="hidden items-center gap-8 text-md font-medium text-white/95 drop-shadow md:flex">
          <a href="#capabilities" className="transition hover:font-bold hover:-translate-y-1 hover:text-xl">
            About
          </a>
          <a href="#products" className="transition hover:font-bold hover:-translate-y-1 hover:text-xl">
            Products & Services
          </a>
          {/*<a href="#contact" className="transition hover:text-cgreen">
            Contact
          </a>*/}
          <a href="#materials" className="transition hover:font-bold hover:-translate-y-1 hover:text-xl">
            Support
          </a>
        </nav>
        <a href="#contact">
          <button className="py-2 px-4 rounded-md bg-white text-charcoal">
            Contact Us
          </button>
        </a>
      </div>
    </header>
  );
}
