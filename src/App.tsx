import { NavLink, Route, Routes, useLocation } from "react-router-dom";
// import ChatWidget from "./components/ChatWidget";
import AboutPage from "./pages/AboutPage";
import AnimationExamplesPage from "./pages/AnimationExamplesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SplashScreen from "./components/SplashScreen";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-gray-900",
    "transition-colors",
  ].join(" ");

export default function App() {
  const { pathname } = useLocation();
  const showAppNav = pathname !== "/";

  return (
    <div
      className={
        showAppNav
          ? "min-h-screen bg-gray-100 flex flex-col"
          : "min-h-screen flex flex-col bg-white"
      }
    >
      {showAppNav && (
        <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
            <NavLink
              to="/"
              className="text-sm font-bold tracking-tight text-charcoal hover:text-safety"
            >
              Steely
            </NavLink>
            <div className="flex flex-wrap items-center gap-4 text-sm md:gap-6">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/animations" className={navLinkClass}>
                Animations
              </NavLink>
            </div>
          </nav>
        </header>
      )}
      <main className="flex flex-1 flex-col">
        <SplashScreen />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/animations" element={<AnimationExamplesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
