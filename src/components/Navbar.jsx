import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation(); // <-- reactively track route

  // Close on outside click or Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    function onClick(e) {
      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close mobile menu & scroll to top on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const linkBase =
    "group relative inline-block px-2 py-1 rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Raju.jpg"
              alt="Raju logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-purple-400 transition"
              loading="lazy"
            />
            <span className="text-white text-lg font-semibold">Raju</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.name}
                to={l.path}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {({ isActive }) => (
                  <>
                    {l.name}
                    {/* underline that animates and reflects active route */}
                    <span
                      aria-hidden
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-yellow-300 transition-all duration-300 origin-left
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((s) => !s)}
              className="p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
            >
              {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-black/70 backdrop-blur-md transition-max-h duration-300 overflow-hidden
          ${isOpen ? "max-h-[500px] py-4" : "max-h-0"}`}
      >
        <div className="px-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <NavLink
              key={l.name}
              to={l.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md font-medium transition
                 ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}`
              }
            >
              {l.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
