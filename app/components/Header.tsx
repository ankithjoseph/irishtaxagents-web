import { Link, NavLink } from "react-router";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTarifasOpen, setIsTarifasOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full">
      <div
        className="absolute inset-0 border-b border-neutral-200 bg-white/95
          backdrop-blur-sm supports-[backdrop-filter]:bg-white/60"
      />
      <div
        className="relative z-50 container mx-auto flex flex-col items-center
          gap-4 px-4 py-4 md:py-6"
      >
        <div
          className="flex w-full items-center justify-between md:justify-center"
        >
          <Link
            to="/"
            className="flex items-center text-xl font-bold text-neutral-900"
          >
            <img
              src="/assets/logo.png"
              alt="Irish Tax Agents Logo"
              className="h-18 w-auto md:h-32"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-neutral-600 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
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

        {/* Desktop Nav with dropdown for tarifas */}
        <nav className="hidden items-center gap-4 md:flex lg:gap-8">
          {links.map((link) => {
            if (link.to === "/tarifas") {
              return (
                <div
                  key={link.to}
                  className="group relative"
                  onMouseEnter={() => setIsTarifasOpen(true)}
                  onMouseLeave={() => setIsTarifasOpen(false)}
                >
                  <button
                    className={`flex items-center gap-2 text-lg font-medium
                    whitespace-nowrap text-neutral-600 transition-colors
                    hover:text-blue-800`}
                    aria-haspopup="true"
                    aria-expanded={isTarifasOpen}
                    onClick={() => setIsTarifasOpen(!isTarifasOpen)}
                  >
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 text-neutral-500 transition-transform
                      ${isTarifasOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.184l3.71-3.954a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`pointer-events-auto absolute top-full left-0
                    z-50 mt-1 w-64 rounded-lg border bg-white p-3 shadow-lg
                    transition-all ${
                    isTarifasOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-1 opacity-0"
                    }`}
                  >
                    <Link
                      to="/tarifas"
                      onClick={() => setIsTarifasOpen(false)}
                      className="mt-1 block rounded px-3 py-2 text-sm
                        text-neutral-700 hover:bg-sky-50"
                    >
                      Ver tarifas completas
                    </Link>
                    <Link
                      to="/tarifas/umbrella-services"
                      onClick={() => setIsTarifasOpen(false)}
                      className="block rounded px-3 py-2 text-sm
                        text-neutral-700 hover:bg-sky-50"
                    >
                      Umbrella Services
                    </Link>
                    <Link
                      to="/tarifas/servicio-integral"
                      onClick={() => setIsTarifasOpen(false)}
                      className="mt-1 block rounded px-3 py-2 text-sm
                        text-neutral-700 hover:bg-sky-50"
                    >
                      Servicio integral de empresas
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-lg whitespace-nowrap transition-colors
                  hover:text-blue-800 ${
                  isActive
                      ? "font-bold text-blue-800"
                      : "font-medium text-neutral-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 overflow-y-auto bg-white pt-28
            md:hidden"
        >
          <nav className="flex flex-col items-center gap-6 p-4 text-center">
            {links.map((link) => (
              <div key={link.to} className="w-full">
                <NavLink
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-xl transition-colors hover:text-blue-800 ${
                    isActive
                        ? "font-bold text-blue-800"
                        : "font-medium text-neutral-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>

                {link.to === "/tarifas" && (
                  <div
                    className="mx-4 mt-2 flex flex-col gap-3 rounded-lg
                      bg-neutral-50 p-4"
                  >
                    <NavLink
                      to="/tarifas/umbrella-services"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 text-base text-neutral-600
                        hover:text-blue-800"
                    >
                      Umbrella Services
                    </NavLink>
                    <NavLink
                      to="/tarifas/servicio-integral"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 text-base text-neutral-600
                        hover:text-blue-800"
                    >
                      Servicio Integral
                    </NavLink>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
