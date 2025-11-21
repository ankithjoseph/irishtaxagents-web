import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = ({ matches }) => {
  const rootData = matches.find((match) => match.id === "root")?.data as
    | { origin: string }
    | undefined;
  const origin = rootData?.origin;
  const title = "Irish Tax Agents | Gestoría en Irlanda en Español ";
  const description =
    "Gestoría irlandesa que trabaja en español. Servicios de contabilidad, impuestos, registro de empresas y asesoría fiscal en Irlanda desde 2016.";
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

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative flex h-[400px] items-center justify-center bg-cover
          bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-sky-900/200" />
        <div className="relative container mx-auto px-4 text-center">
          <h1
            className="tracking-loose font-serif text-4xl font-medium text-white
              drop-shadow-lg sm:text-5xl"
          >
            La gestoría Irlandesa que trabaja en Español
          </h1>
          <p
            className="mt-4 font-serif text-3xl font-normal text-white
              drop-shadow-md"
          >
            Desde 2016
          </p>
        </div>
      </section>

      {/* Services Blocks */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto lg:px-16">
          <h2
            className="mb-12 text-center font-serif text-4xl font-bold
              text-sky-900"
          >
            Empresas o profesionales
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-serif text-xl font-bold text-red-900">
                Impuestos
              </h3>
              <p className="text-neutral-600">
                Agentes tributarios registrados en Revenue con numero 77706B
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-serif text-xl font-bold text-red-900">
                Registro
              </h3>
              <p className="text-neutral-600">
                Gestión registral de documentos y declaraciones en toda Irlanda
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-serif text-xl font-bold text-red-900">
                Contabilidad
              </h3>
              <p className="text-neutral-600">
                La contabilidad en Irlanda y las cuentas financieras son para
                profesionales
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-serif text-xl font-bold text-red-900">
                Asesoría fiscal y tributaria
              </h3>
              <p className="text-neutral-600">
                Conozca la legislación fiscal Irlandesa y sus obligaciones
                tributarias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Inclusive Service & Company Formation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <div className="mb-16 text-center">
            <h2
              className="mb-4 font-serif text-3xl font-bold text-sky-900
                md:text-4xl"
            >
              Servicio todo incluido para empresas y profesionales
            </h2>
            <p
              className="font-serif text-2xl font-bold text-sky-900 md:text-3xl"
            >
              desde 225 € mensuales
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {/* Card 1: Gestión contable */}
            <div
              className="group relative h-[500px] overflow-hidden rounded-2xl
                shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center
                  transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/assets/contabilidad.jpg')",
                }}
              />
              <div
                className="absolute inset-0 bg-sky-900/90 transition-opacity
                  group-hover:bg-sky-900/80"
              />
              <div
                className="relative flex h-full flex-col items-center
                  justify-center p-8 text-center text-white"
              >
                <h3 className="mb-4 font-serif text-3xl font-bold">
                  Gestión contable y tributaria
                </h3>
                <p
                  className="mb-8 flex min-h-[84px] max-w-md items-center
                    justify-center text-lg text-sky-100"
                >
                  Asesores fiscales en Irlanda. Gestionamos tu contabilidad,
                  impuestos y nóminas para que tú solo te preocupes de tu
                  negocio.
                </p>
                <Link
                  to="/contacto"
                  className="inline-block rounded bg-white px-8 py-3 font-bold
                    text-sky-900 transition-colors hover:bg-sky-50"
                >
                  Solicitar más información
                </Link>
              </div>
            </div>

            {/* Card 2: Constitución */}
            <div
              className="group relative h-[500px] overflow-hidden rounded-2xl
                shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale
                  transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/assets/constitucion.jpg')",
                }}
              />
              <div
                className="absolute inset-0 bg-sky-900/90 transition-opacity
                  group-hover:bg-sky-900/80"
              />
              <div
                className="relative flex h-full flex-col items-center
                  justify-center p-8 text-center text-white"
              >
                <h3 className="mb-4 font-serif text-3xl font-bold">
                  Constitución de empresas
                </h3>
                <p
                  className="mb-8 flex min-h-[84px] max-w-md items-center
                    justify-center text-lg text-sky-100"
                >
                  Asesoramos y acompañamos a nuestros clientes durante el
                  proceso de constitución legal de su empresa en Irlanda.
                </p>
                <Link
                  to="/start-ups"
                  className="inline-block rounded bg-white px-8 py-3 font-bold
                    text-sky-900 transition-colors hover:bg-sky-50"
                >
                  Solicitar más información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: "url('/assets/testimonial.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-sky-900/50" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <blockquote
            className="mx-auto max-w-4xl font-serif text-2xl leading-relaxed
              italic md:text-4xl"
          >
            “Cuando todo está explicado en mi idioma, las decisiones son mucho
            más fáciles.”
          </blockquote>
          <p className="mt-8 text-lg font-medium text-sky-100 italic">
            - Cliente de Irish Tax Agents
          </p>
        </div>
      </section>
    </div>
  );
}
