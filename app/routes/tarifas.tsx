import { type MetaFunction, Link } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Nuestras tarifas" },
    {
      name: "description",
      content:
        "Paquetes de servicios contables y fiscales para profesionales y empresas en Irlanda desde 225 €/mes.",
    },
  ];
};

export default function Tarifas() {
  const categories = [
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
          price: "399 €",
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
        { name: "PPS", price: "150 €" },
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
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
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
                      <span className="mr-4 text-neutral-700">
                        {service.name}
                      </span>
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
