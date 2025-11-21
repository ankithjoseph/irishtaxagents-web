import { Link } from "react-router";

export function Footer() {
  return (
    <footer
      className="border-t border-neutral-200 bg-white py-8 text-sm
        text-neutral-600"
    >
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className="flex flex-col justify-center justify-start gap-4
            lg:flex-row lg:items-center lg:gap-6"
        >
          {/* Brand, Address & Contact */}
          <div className="text-center lg:text-right">
            <h3
              className="mb-2 text-center text-xl font-bold tracking-tight
                text-neutral-900 lg:text-right"
            >
              Irish Tax Agents
            </h3>
            <address
              className="mb-2 text-center leading-relaxed text-neutral-500
                not-italic lg:text-right"
            >
              OfficePods Cranford Centre
              <br />
              Stillorgan Road, Dublin
              <br />
              D04 F1P2, Ireland
            </address>
            <div className="space-y-2">
              <div
                className="flex items-center justify-center gap-2
                  lg:justify-end"
              >
                <svg
                  className="h-4 w-4 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:012303001"
                  className="transition-colors hover:text-sky-700"
                >
                  012303001
                </a>
              </div>
              <div
                className="flex items-center justify-center gap-2
                  lg:justify-end"
              >
                <svg
                  className="h-4 w-4 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:manager@irishtaxagents.com"
                  className="transition-colors hover:text-sky-700"
                >
                  manager@irishtaxagents.com
                </a>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden h-20 w-px bg-neutral-200 lg:block"></div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <a
              href="https://qrco.de/bceCfp"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-sm border border-neutral-100 p-2
                lg:pointer-events-none lg:cursor-default"
            >
              <img
                src="/assets/qr.png"
                alt="Contact QR"
                className="h-32 w-32"
              />
            </a>
            <span
              className="mt-2 text-[10px] tracking-widest text-neutral-400
                uppercase"
            >
              Scan vCard
            </span>
          </div>

          {/* Copyright & Privacy */}
          <div
            className="flex flex-col items-center justify-center gap-2 text-xs
              text-neutral-500 md:flex-row md:gap-4 lg:ml-auto"
          >
            <p>
              &copy; {new Date().getFullYear()} Irish Tax Agents. All rights
              reserved.
            </p>
            <span className="hidden text-neutral-300 md:inline">•</span>
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-neutral-900"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
