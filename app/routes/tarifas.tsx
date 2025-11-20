import { type MetaFunction, Link } from "react-router";

export const meta: MetaFunction = ({ matches }) => {
  const rootData = matches.find((match) => match.id === "root")?.data as
    | { origin: string }
    | undefined;
  const origin = rootData?.origin;
  const title = "Tarifas Gestoría Irlanda | Irish Tax Agents";
  const description =
    "Consulte nuestras tarifas de servicios contables, fiscales y de constitución de empresas en Irlanda. Precios transparentes y competitivos.";
  const ogImageUrl = origin ? `${origin}/og-logo.png` : "/og-logo.png";

  return [
    { title },
    {
      name: "description",
      content: description,
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImageUrl },
    { property: "og:type", content: "website" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:image", content: ogImageUrl },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
  ];
};

interface Service {
  name: string;
  price: string;
  link?: string;
}

interface Category {
  title: string;
  description: string;
  services: Service[];
}

export default function Tarifas() {
  const categories: Category[] = [
    {
      title: "Consultoría y Asesoría",
      description: "Orientación experta para optimizar tu gestión.",
      services: [
        { name: "Asesoría fiscal", price: "150€ / hora" },
        { name: "Contabilidad", price: "100€ / hora" },
        { name: "Gestión Financiera y Presupuestaria", price: "Consultar" },
        { name: "Auditorias", price: "Servicio externo" },
      ],
    },
    {
      title: "Constitución y Gestión de Empresas",
      description: "Soluciones integrales para sociedades limitadas.",
      services: [
        {
          name: "Asesoría en Constitución de Sociedad Limitada (Limited Company)",
          price: "399 €", link: "https://buy.stripe.com/9AQbLO9A504ebXa28d"
        },
        {
          name: "Gestión contable, tributaria y registro para empresas Ltd",
          price: "desde 330 € mes",
        },
        { name: "Cierre de Limited Company", price: "585 €" },
        { name: "Compra y Venta de sociedades", price: "Consultar" },
        { name: "Venta de participaciones sociales", price: "150 €" },
        { name: "Due diligence de empresas", price: "75 €" },
        { name: "Información básica de empresas", price: "20 €" },
        { name: "Información completa de empresas", price: "50 €" },
      ],
    },
    {
      title: "Autónomos y Particulares",
      description: "Servicios esenciales para profesionales independientes.",
      services: [
        {
          name: "Gestión contable, tributaria y registro para autónomos",
          price: "desde 225 € mes",
        },
        { name: "PPS", price: "150 €", link: "https://buy.stripe.com/cN25nqaE9aIS7GUbIM" },
        {
          name: "Cobro de facturas en calidad de empleado",
          price: "250 € nómina",
        },
        { name: "Alta de empleado", price: "50 €" },
      ],
    },
    {
      title: "Declaraciones e Impuestos",
      description: "Cumplimiento fiscal riguroso y puntual.",
      services: [
        {
          name: "Preparación de declaraciones e impuestos (excepto CT1/IncomeTax)",
          price: "150 €",
        },
        { name: "Impuesto de Sociedades (CT1) y preliminar", price: "750 €" },
        {
          name: "Informe Financiero Revenue e Informa finaciero CRO",
          price: "1750 €",
        },
        { name: "Declaración Annual Return", price: "500 €" },
      ],
    },
    {
      title: "Trámites y Registros",
      description: "Gestión administrativa eficiente.",
      services: [
        { name: "Registros en Hacienda (Revenue)", price: "100 €" },
        { name: "Registro de nombre comercial", price: "50 €" },
        { name: "Reserva de nombre de empresa", price: "50 €" },
        { name: "Registro de propietarios", price: "150 € / propietario" },
        { name: "Apostilla de documento", price: "300 €" },
      ],
    },
    {
      title: "Otros Servicios",
      description: "Herramientas y soporte adicional.",
      services: [
        { name: "Nóminas", price: "Consulte paquetes" },
        { name: "Progama de Facturación", price: "25 € / mensuales" },
        {
          name: "Preparación y/o revisión de Contratos Mercantiles/Laborales",
          price: "150 €",
        },
      ],
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Header Section */}
      <div className="bg-white px-4 py-16 text-center shadow-sm sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          Tarifas y Servicios
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-neutral-500">
          Transparencia y profesionalidad en cada gestión.
        </p>
        <p className="mt-2 text-sm text-neutral-400">
          (Iva y tasas registrales no incluidas en los precios publicados)
        </p>
      </div>

      {/* Featured Packages */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Link
            to="/tarifas/umbrella-services"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 121.14 122.88"
                className="h-6 w-6 fill-current"
              >
                <g>
                  <path d="M56.62,3.95c0-1.09,0.44-2.08,1.16-2.79C58.5,0.44,59.48,0,60.57,0c1.09,0,2.07,0.44,2.79,1.16l0,0 c0.71,0.71,1.16,1.7,1.16,2.79v5.5c6.89,0.39,13.48,1.77,19.55,3.99c6.73,2.46,12.83,5.93,18.05,10.2 c5.6,4.58,10.21,10.09,13.49,16.25c3.18,5.97,5.11,12.54,5.52,19.47l0,0.04c0.05,1.07-0.34,2.06-1,2.8 c-0.67,0.75-1.63,1.25-2.72,1.31l-0.01,0c-0.07,0.01-0.14,0.02-0.21,0.02H64.51v39.12c-0.01,0.1-0.01,0.21-0.02,0.31 c-0.01,4.36-1.03,8.03-2.73,10.99c-1.93,3.35-4.72,5.78-7.9,7.26c-1.22,0.57-2.5,0.99-3.82,1.27c-1.31,0.28-2.67,0.42-4.04,0.41 c-1.36-0.01-2.72-0.16-4.05-0.46c-1.31-0.3-2.61-0.74-3.85-1.32c-3.43-1.61-6.47-4.28-8.58-8.02c-1.85-3.29-2.97-7.4-2.97-12.32 c0-1.08,0.44-2.07,1.15-2.78v-0.01c0.71-0.71,1.7-1.15,2.78-1.15s2.07,0.44,2.78,1.15l0.09,0.1c0.66,0.7,1.06,1.65,1.06,2.69 c0,3.36,0.7,6.11,1.86,8.26c1.27,2.36,3.1,4.01,5.14,4.97c0.73,0.34,1.48,0.6,2.25,0.77c0.78,0.18,1.58,0.27,2.36,0.27 c0.77,0,1.55-0.08,2.32-0.24c0.75-0.16,1.49-0.41,2.18-0.73c1.81-0.84,3.39-2.25,4.49-4.23c1.01-1.82,1.62-4.14,1.62-6.97 c0-0.07-0.01-0.15-0.01-0.23V63.52H3.95c-1.09,0-2.08-0.44-2.79-1.16C0.44,61.65,0,60.66,0,59.57c0-0.07,0-0.16,0.01-0.27 l0.02-0.18c0.43-6.88,2.38-13.4,5.55-19.33c3.28-6.12,7.86-11.6,13.44-16.16c5.22-4.27,11.33-7.74,18.05-10.2 c6.07-2.22,12.66-3.61,19.55-3.99V3.95L56.62,3.95z M97.13,29.74c-4.83-3.95-10.54-7.12-16.85-9.29 c-6.09-2.09-12.74-3.23-19.71-3.23c-6.97,0-13.62,1.15-19.71,3.23c-6.31,2.16-12.02,5.34-16.85,9.29 c-4.43,3.62-8.12,7.89-10.85,12.61v0.01c-2.37,4.11-4.02,8.57-4.82,13.26h104.44c-0.79-4.69-2.44-9.16-4.82-13.26l-0.04-0.08 C105.22,37.59,101.54,33.35,97.13,29.74L97.13,29.74z" />
                </g>
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-neutral-900 group-hover:text-sky-700">
              Umbrella Services
            </h3>
            <p className="mb-6 flex-1 text-neutral-600">
              Ideal para profesionales que trabajan por proyectos. Olvídate de la
              carga administrativa de ser autónomo o crear una empresa.
            </p>
            <span className="inline-flex items-center font-medium text-sky-600 group-hover:text-sky-700">
              Ver detalles{" "}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </Link>

          <Link
            to="/tarifas/servicio-integral"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-neutral-900 group-hover:text-sky-700">
              Servicio Integral Empresas
            </h3>
            <p className="mb-6 flex-1 text-neutral-600">
              Para sociedades limitadas y empresas estables. Externaliza
              contabilidad, impuestos y gestión con CRO y Revenue.
            </p>
            <span className="inline-flex items-center font-medium text-sky-600 group-hover:text-sky-700">
              Ver detalles{" "}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="bg-sky-50 px-6 py-4 border-b border-sky-100">
                <h3 className="text-xl font-bold text-sky-900">
                  {category.title}
                </h3>
                <p className="text-sm text-sky-700">{category.description}</p>
              </div>
              <div className="flex-1 p-6">
                <ul className="space-y-4">
                  {category.services.map((service, sIndex) => (
                    <li
                      key={sIndex}
                      className="flex items-start justify-between border-b border-neutral-100 pb-2 last:border-0 last:pb-0"
                    >
                      {service.link ? (
                        <Link
                          to={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mr-4 text-neutral-700 hover:text-sky-600 hover:underline"
                        >
                          {service.name}
                        </Link>
                      ) : (
                        <span className="mr-4 text-neutral-700">
                          {service.name}
                        </span>
                      )}
                      <span className="whitespace-nowrap font-semibold text-neutral-900">
                        {service.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-sky-900">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Necesitas un presupuesto a medida?
          </h2>
          <p className="mt-4 text-lg text-sky-100">
            Si no encuentras lo que buscas o tienes dudas sobre qué servicio se
            adapta mejor a tu situación, contáctanos.
          </p>
          <div className="mt-8">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-sky-900 hover:bg-sky-50"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
