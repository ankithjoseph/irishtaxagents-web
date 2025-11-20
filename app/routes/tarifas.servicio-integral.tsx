import { type MetaFunction, Link } from "react-router";

export const meta: MetaFunction = ({ matches }) => {
  const rootData = matches.find((match) => match.id === "root")?.data as
    | { origin: string }
    | undefined;
  const origin = rootData?.origin;
  const title = "Planes Todo Incluido Contabilidad Irlanda | Irish Tax Agents";
  const description =
    "Suscripciones mensuales todo incluido para autónomos y empresas en Irlanda. Contabilidad, impuestos y nóminas desde 225€/mes.";
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

const PLANS = [
  {
    title: "Silver Autónomos",
    description:
      "(Servicio destinado aquellos autónomos exentos de IVA y sin empleados que buscan orden en su actividad y la tranquilidad de unas cuentas claras, cumpliendo con sus obligaciones fiscales puntualmente)",
    price: "225 €",
    features: [
      "Software de facturación",
      "Contabilidad mensual",
      "Informe financiero anual",
      "Declaracion de beneficios (Income Tax) y Preliminar Tax",
      "App móvil para gestion de gastos e ingresos",
    ],
  },
  {
    title: "Gold Autónomos",
    description:
      "(Este servicio va dirigido a autónomos con empleados y sin la exención de IVA, con una facturación no superior a 100.000 €)",
    price: "275 €",
    features: [
      "Software de facturacion",
      "Contabilidad mensual",
      "Nóminas hasta 2 mensuales",
      "Declaracion mensual PAYE",
      "Informe financiero anual",
      "Impuesto de beneficios Income Tax y Preliminar Tax",
      "App móvil para gestion de gastos e ingresos",
    ],
  },
  {
    title: "Gold Business",
    description:
      "(Este servicio es ideal para las empresas de servicios locales, con una facturacion no superior a los 300.000 €)",
    price: "330 €",
    features: [
      "Software de facturación",
      "Contabilidad mensual",
      "Nóminas hasta 5 mensuales (2 con expenses)",
      "Declaracion de Paye mensual",
      "Informe financiero anual para Revenue y CRO",
      "Impuesto de beneficios CT1/Preliminar Tax e Income Tax de Directores",
      "App móvil para gestion de gastos e ingresos",
    ],
  },
  {
    title: "Premium",
    description:
      "(Este servicio está dirigido a empresas con operaciones dentro y fuera de Irlanda, con una facturación no superior a los 600.000€)",
    price: "600 €",
    features: [
      "Software de facturacion",
      "Servicio al cliente telefonico con su agente",
      "Domicilio fiscal",
      "Recepción de documentos postales",
      "Company Secretary",
      "Contabilidad mensual",
      "Nóminas hasta 5 mensuales",
      "Declaracion de Paye mensual",
      "Informe financiero anual para Revenue y CRO",
      "Impuesto de beneficios CT1/Preliminar Tax e Income Tax de Directores",
      "App móvil para gestion de gastos e ingresos",
    ],
  },
];

export default function ServicioIntegral() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="bg-white px-4 py-16 text-center shadow-sm sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          Servicio de suscripción todo incluido
        </h1>
        <div className="mx-auto mt-4 max-w-4xl text-lg text-neutral-500">
          <p className="mb-4">
            Todas nuestras suscripciones son para periodos de 12 mensualidades e
            incluyen todos los servicios que requiere una actividad frente a
            registro y hacienda en circunstancias normales.
          </p>
          <p className="text-sm italic text-neutral-400">
            Tasas oficiales por registro de documentos en CRO no incluidas.
            Empresas con ejercicios fiscales ya iniciales consultar precios.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="mb-2 text-2xl font-bold text-sky-900">
                {plan.title}
              </h2>
              <p className="mb-6 text-sm text-neutral-600">
                {plan.description}
              </p>
              <div className="mb-8 flex-grow">
                <h3 className="mb-4 font-semibold text-neutral-900">
                  Incluye:
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-neutral-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto border-t border-neutral-100 pt-6 flex items-center justify-between">
                <p className="text-3xl font-bold text-blue-600">
                  {plan.price}{" "}
                  <span className="text-base font-normal text-neutral-500">
                    / mensuales
                  </span>
                </p>
                <Link
                  to="/contacto"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Contratar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
