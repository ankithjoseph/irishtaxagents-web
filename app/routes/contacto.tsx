import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Contacto | Irish Tax Agents" },
    {
      name: "description",
      content:
        "Contacta con Irish Tax Agents. Gestoría irlandesa en español en Dublín.",
    },
  ];
};

export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className=" font-serif mb-6 text-5xl font-bold text-sky-900">
          IRISH TAX AGENTS
        </h1>
        <a
          href="https://forms.office.com/e/LGaBdi0bpP"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-10 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-sky-800 hover:shadow-lg"
        >
          <span>Reserve su cita de asesoramiento personalizado</span>
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <div className="mb-12 space-y-6 text-lg text-neutral-700">
          <div>
            <p className="text-neutral-500 text-sm uppercase tracking-wider font-semibold mb-1">Email</p>
            <a
              href="mailto:manager@irishtaxagents.com"
              className="text-xl font-medium text-sky-600 hover:underline"
            >
              manager@irishtaxagents.com
            </a>
          </div>

          <div>
            <p className="text-neutral-500 text-sm uppercase tracking-wider font-semibold mb-1">Dirección</p>
            <p className="text-xl leading-relaxed">
              Nexus Officepods, Cranford Center
              <br />
              Stillorgan Road
              <br />
              Dublin 4 (D04F1P2)
            </p>
          </div>
        </div>

        <div className="mb-16 flex justify-center">
          <a
            href="https://qrco.de/bceCfp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white p-4 shadow-md border border-neutral-100 block hover:shadow-lg transition-shadow lg:pointer-events-none lg:cursor-default"
          >
            <img
              src="/assets/qr.png"
              alt="Código QR para reservar cita"
              className="h-64 w-64 object-contain"
            />
          </a>
        </div>

      </div>

      <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl shadow-lg border border-neutral-200">
        <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Irish+Tax+Agents+officepods+Cranford+Center+Stillorgan+Road+Dublin+4&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="Mapa de ubicación"
        ></iframe>
      </div>
    </div>
  );
}
