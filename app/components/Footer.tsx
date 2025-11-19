import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center md:flex-row md:items-center justify-start gap-4 md:gap-6">
          
          {/* Brand, Address & Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-neutral-900 font-bold text-xl mb-2 tracking-tight text-right">Irish Tax Agents</h3>
            <address className="not-italic leading-relaxed text-neutral-500 mb-2 text-right ">
              OfficePods Cranford Centre<br/>
              Stillorgan Road, Dublin<br/>
              D04 F1P2, Irlanda
            </address>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:012303001" className="hover:text-sky-700 transition-colors">
                  012303001
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@irishtaxagents.com" className="hover:text-sky-700 transition-colors">
                  info@irishtaxagents.com
                </a>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-20 bg-neutral-200"></div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
             <div className="p-2 rounded-sm border border-neutral-100">
                <img src="/assets/qr.png" alt="Contact QR" className="h-32 w-32" />
             </div>
             <span className="text-[10px] mt-2 uppercase tracking-widest text-neutral-400">Scan vCard</span>
          </div>

          {/* Copyright & Privacy */}
          <div className="md:ml-auto flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Irish Tax Agents. All rights reserved.</p>
            <span className="hidden md:inline text-neutral-300">•</span>
            <Link to="/privacy-policy" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
