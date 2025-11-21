import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = ({ matches }) => {
  const rootData = matches.find((match) => match.id === "root")?.data as
    | { origin: string }
    | undefined;
  const origin = rootData?.origin;
  const title = "Servicios Contables y Fiscales en Irlanda | Irish Tax Agents";
  const description =
    "Servicios integrales para empresas y autónomos en Irlanda: contabilidad, nóminas, impuestos, registro de sociedades y asesoría fiscal en español.";
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

export default function Servicios() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sky-900 py-20 text-white">
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-full
            opacity-10"
        >
          <div
            className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px]
              rounded-full bg-white blur-3xl"
          ></div>
          <div
            className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[300px]
              w-[300px] rounded-full bg-sky-400 blur-3xl"
          ></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1
            className="mb-8 font-serif text-4xl font-bold tracking-tight
              md:text-5xl"
          >
            Paquetes todo incluido, <br className="hidden md:block" /> a su
            medida desde 225€/mensuales*
          </h1>
          <div
            className="mx-auto max-w-3xl rounded-2xl border border-white/10
              bg-white/10 p-6 backdrop-blur-sm"
          >
            <p className="text-sm leading-relaxed text-sky-50 md:text-base">
              * Irish Tax Agents conoce las obligaciones contables, fiscales y
              registrales de toda actividad y/o empresa. Es por esto que podemos
              hacer un calculo del trabajo que requieren nuestros clientes, y el
              coste que esto supone en un ejercicio fiscal. El coste de cada
              paquete es el resultante de la suma de todos los servicios
              requeridos en un ejercicio normal, menos nuestro descuento
              especial por pago lineal, mensual y domiciliado por banco.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2
            className="mb-12 text-center font-serif text-3xl font-bold
              text-sky-900"
          >
            Servicios para profesionales y empresas
          </h2>
          <div
            className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2
              lg:grid-cols-2"
          >
            {SERVICES.map((service, index) =>
              service.link ? (
                <Link
                  key={service.title}
                  to={service.link}
                  className="flex items-center rounded-lg border
                    border-neutral-100 bg-white p-4 shadow-sm transition-shadow
                    hover:shadow-md"
                >
                  <span
                    className="mr-4 flex h-8 w-8 flex-shrink-0 items-center
                      justify-center rounded-full bg-sky-100 text-sm font-bold
                      text-sky-700"
                  >
                    {index + 1}
                  </span>
                  <span className="text-lg font-medium text-neutral-800">
                    {service.title}
                  </span>
                </Link>
              ) : (
                <div
                  key={service.title}
                  className="flex items-center rounded-lg border
                    border-neutral-100 bg-white p-4 shadow-sm transition-shadow
                    hover:shadow-md"
                >
                  <span
                    className="mr-4 flex h-8 w-8 flex-shrink-0 items-center
                      justify-center rounded-full bg-sky-100 text-sm font-bold
                      text-sky-700"
                  >
                    {index + 1}
                  </span>
                  <span className="text-lg font-medium text-neutral-800">
                    {service.title}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

const SERVICES = [
  {
    title: "Asesoría para emprendedores, profesionales y empresas",
    description:
      "Orientación en la elección de forma jurídica (autónomo, sociedad, esquema tipo umbrella) y análisis de costes fiscales y obligaciones según tu situación.",
    link: "/start-ups",
  },
  {
    title: "Contabilidad",
    description:
      "Registro de ingresos y gastos. Elaboración de balances y cuentas de resultados.",
  },
  {
    title: "Nóminas",
    description:
      "Cálculo de salarios y deducciones. Emisión de nóminas y comunicación de datos al Revenue cuando proceda.",
  },
  {
    title: "Impuestos",
    description:
      "Preparación y presentación de declaraciones (Income Tax, Corporation Tax, VAT, etc., según corresponda).",
  },
  {
    title: "Cuentas anuales",
    description:
      "Preparación de estados financieros para su presentación ante el CRO cuando sea necesario.",
  },
  {
    title: "Auditorías",
    description:
      "Coordinación con auditores externos en caso de obligación de auditoría o por decisión interna.",
  },
  {
    title: "Registro de empresas",
    description:
      "Apoyo en la gestión de trámites ante el CRO (altas, cambios de administradores, modificaciones estatutarias).",
  },
  {
    title: "Registro de propietarios",
    description:
      "Ayuda para cumplir con las obligaciones de registro de beneficiarios efectivos y otros registros exigidos.",
  },
  {
    title: "Contratos laborales",
    description:
      "Plantillas y revisión básica de contratos de trabajo adaptados al marco irlandés.",
  },
  {
    title: "Altas de empleados y registro PPS",
    description:
      "Asesoramiento en la obtención del PPS number y altas de trabajadores en los sistemas correspondientes.",
  },
  {
    title: "   Servicio de cobro para profesionales médicos e ingenieros",
    description:
      "Gestión de facturación y cobro a hospitales, clínicas o empresas de ingeniería, integrándolo con tu esquema fiscal.",
  },
  {
    title: "Asesoría en la constitución de empresas en Irlanda",
    description:
      "Explicación de los pasos para constituir la empresa, documentos y tiempos.",
  },
  {
    title: "Asesoría contable, fiscal y tributaria",
    description:
      "Consultas recurrentes sobre la interpretación de normas y su aplicación práctica en tu caso.",
  },
  {
    title: "Asesoría de inversión",
    description:
      "Análisis básico de implicaciones fiscales de determinadas inversiones relacionadas con tu actividad.",
  },
  {
    title: "Gestión financiera y presupuestaria",
    description:
      "Ayuda a elaborar presupuestos y previsiones de tesorería para tu negocio.",
  },
  {
    title: "Información de empresas irlandesas",
    description:
      "Obtención y explicación de informes públicos de sociedades irlandesas.",
  },
];
