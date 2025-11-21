import { type MetaFunction } from "react-router";

export const meta: MetaFunction = ({ matches }) => {
  const rootData = matches.find((match) => match.id === "root")?.data as
    | { origin: string }
    | undefined;
  const origin = rootData?.origin;
  const title = "Emprender en Irlanda: Autónomos y Empresas | Irish Tax Agents";
  const description =
    "Asesoramiento para iniciar su actividad en Irlanda. Elija la mejor estructura: autónomo, Limited Company o Umbrella Company. Expertos en fiscalidad irlandesa.";
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

export default function StartUps() {
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
            Inicio de trabajos profesionales o actividades económinas en Irlanda
          </h1>
          <div
            className="mx-auto max-w-4xl rounded-2xl border border-white/10
              bg-white/10 p-6 backdrop-blur-sm"
          >
            <p className="text-sm leading-relaxed text-sky-50 md:text-base">
              Irish Tax Agents, le ofrece un servicio de asesoramiento inicial y
              personalizado, que le permitirá valorar las necesidades,
              obligaciones, derechos y responsabilidades que debe de contemplar
              antes de tomar su decisión final de cómo, cuándo y por qué
              desarrollar su actividad económica, como autónomo, empresa o
              utilizando una empresa para facturar a sus clientes y cobrar por
              el trabajo realizado cumpliendo con las retenciones fiscales
              correspondientes. Contacte con nosotros y organizaremos una
              reunión online o presencial, para recomendarle profesionalmente el
              mejor modo de proceder con su proyecto empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-neutral-50 py-16 lg:px-14">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-8">
            <section
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-8"
            >
              <h2 className="mb-4 font-serif text-2xl font-bold text-sky-900">
                Profesionales independientes
              </h2>
              <p className="mb-4 font-semibold text-neutral-700">
                Trabaje como un autónomo pero sin obligaciones de empresario,
                cobrando una nómina por su trabajo realizado.
              </p>
              <p className="mb-4 font-semibold text-neutral-700">
                Servicio recomendado para profesionales médicos e ingenieros que
                desean disponer del total de dinero generado por su trabajo en
                Irlanda.
              </p>
              <ul
                className="mb-4 list-inside list-disc space-y-2
                  text-neutral-700"
              >
                <li>
                  Usted es libre de trabajar para el cliente que quiera y cobra
                  una nómina mensual por el trabajo realizado.
                </li>
                <li>
                  Nosotros facturamos a sus clientes, sólo díganos qué tenemos
                  que facturar.
                </li>
                <li>
                  Nosotros gestionamos sus gastos personales para el
                  cumplimiento de su profesión.
                </li>
                <li>
                  Nosotros preparamos su nómina añadiendo sus gastos libres de
                  impuestos y aplicamos las retenciones fiscales
                  correspondientes.
                </li>
                <li>Nosotros le pagamos su nómina.</li>
              </ul>
            </section>

            <div className="grid gap-8 md:grid-cols-2">
              <section
                className="rounded-xl border border-neutral-200 bg-neutral-50
                  p-8"
              >
                <h2 className="mb-4 font-serif text-2xl font-bold text-sky-900">
                  Profesionales Autónomo
                </h2>
                <h3 className="mb-4 text-xl font-semibold text-neutral-600">
                  Obligaciones principales
                </h3>
                <ul className="list-inside list-disc space-y-2 text-neutral-700">
                  <li>Nombre comercial</li>
                  <li>Registro tributarios (Revenue)</li>
                  <li>Contabilidad</li>
                  <li>Nóminas (Opcional)</li>
                  <li>Informe financiero</li>
                  <li>
                    Declaracion de beneficios de la actividad (Income Tax)
                  </li>
                  <li>Pago del impuesto preliminar (Preliminar Tax)</li>
                </ul>
              </section>

              <section
                className="rounded-xl border border-neutral-200 bg-neutral-50
                  p-8"
              >
                <h2 className="mb-4 font-serif text-2xl font-bold text-sky-900">
                  Sociedad Limitada
                </h2>
                <h3 className="mb-4 text-xl font-semibold text-neutral-600">
                  Obligaciones principales
                </h3>
                <ul className="list-inside list-disc space-y-2 text-neutral-700">
                  <li>1 Director</li>
                  <li>1 Secretario</li>
                  <li>1 Domicilio Oficial de la actividad</li>
                  <li>Nombre comercial</li>
                  <li>Reserva nombre de empresa</li>
                  <li>Constitución de empresa</li>
                  <li>Declaracion de propietarios</li>
                  <li>Alta de actividad en Revenue</li>
                  <li>Contabilidad</li>
                  <li>Nóminas (Opcional)</li>
                  <li>Confección, presentación y liquidación de impuestos</li>
                  <li>Informe financiero para registro (CRO)</li>
                  <li>Informe de responsables y propietarios (CRO)</li>
                  <li>Informe financiero para hacienda (Revenue)</li>
                  <li>
                    Declaracion de beneficios de la actividad (Corporation Tax)
                  </li>
                  <li>Pago del impuesto preliminar (Preliminar Tax)</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
