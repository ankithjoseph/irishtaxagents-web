import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Clientes y Usuarios | Irish Tax Agents" },
    {
      name: "description",
      content: "Información para clientes y usuarios de Irish Tax Agents.",
    },
  ];
};

export default function ClientesYUsuarios() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-neutral-900">
        Clientes y usuarios
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            Quién puede ser cliente
          </h2>
          <ul className="list-inside list-disc space-y-2 text-lg text-neutral-700">
            <li>Profesionales que trabajan por cuenta propia en Irlanda</li>
            <li>Empresas españolas que operan en Irlanda</li>
            <li>Start-ups que se quieren instalar en Irlanda</li>
          </ul>
        </section>

        <section className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            Qué puede esperar un cliente
          </h2>
          <ul className="list-inside list-disc space-y-2 text-lg text-neutral-700">
            <li>Comunicación en español</li>
            <li>Explicaciones claras de cada trámite</li>
            <li>Presupuestos cerrados y sin sorpresas</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 rounded-xl bg-sky-50 p-8 text-center">
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">
          Testimonios
        </h2>
        <blockquote className="text-xl italic text-neutral-700">
          “Cuando todo está explicado en mi idioma, las decisiones son mucho más
          fáciles.”
        </blockquote>
        <p className="mt-4 font-medium text-neutral-900">
          — Cliente de Irish Tax Agents
        </p>
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block rounded-lg bg-sky-600 px-6 py-3 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300"
        >
          Área de cliente
        </a>
      </div>
    </div>
  );
}
