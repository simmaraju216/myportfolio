import { useEffect, useState } from "react";
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
  const location = useLocation();

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Close on route change
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
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Raju.jpg"
              alt="Raju logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-purple-400 transition"
            />
            <span className="text-white text-lg font-semibold">Raju</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.name}
                to={l.path}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.name}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-yellow-300 transition-all duration-300 origin-left ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 text-white hover:text-yellow-300 focus:outline-none z-[60]"
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Background Overlay (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full z-40 bg-black/80 backdrop-blur-lg transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <NavLink
              key={l.name}
              to={l.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md font-medium transition ${
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300"
                }`
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
