import { Link, NavLink } from "react-router";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/servicios", label: "Servicios" },
    { to: "/start-ups", label: "Start-Ups" },
    { to: "/tarifas", label: "Nuestras tarifas" },
    { to: "/clientes-y-usuarios", label: "Clientes" },
    { to: "/contacto", label: "Contacto" },
    { to: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex flex-col items-center px-4 py-4 md:py-6 gap-4">
        <div className="flex w-full items-center justify-between md:justify-center">
          <Link to="/" className="flex items-center font-bold text-xl text-neutral-900">
            <img src="/assets/logo.png" alt="Irish Tax Agents Logo" className="h-18 md:h-32 w-auto" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-s transition-colors hover:text-blue-800 ${
                  isActive ? "text-blue-800 font-bold" : "text-neutral-600 font-medium"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="flex flex-col p-4 gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-blue-800 ${
                    isActive ? "text-blue-800 font-bold" : "text-neutral-600 font-medium"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
