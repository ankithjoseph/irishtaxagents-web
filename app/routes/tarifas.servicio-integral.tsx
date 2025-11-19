import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Servicio Integral para Empresas | Irish Tax Agents" },
    {
      name: "description",
      content:
        "Servicio integral de contabilidad, impuestos y gestión para empresas en Irlanda.",
    },
  ];
};

export default function ServicioIntegral() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-neutral-900">
        Servicio integral para empresas
      </h1>
      <div className="mb-8 max-w-3xl text-lg text-neutral-700">
        <p className="mb-4">
          Dirigido a sociedades limitadas y empresas con estructura estable en
          Irlanda que desean externalizar la contabilidad, los impuestos y la
          gestión de sus obligaciones ante el CRO y el Revenue.
        </p>
        <p>
          Por una cuota mensual fija, centralizamos la parte contable y
          tributaria de tu negocio y te acompañamos en las decisiones
          financieras del día a día.
        </p>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">Incluye:</h2>
        <ul className="list-inside list-disc space-y-3 text-lg text-neutral-700">
          <li>Contabilidad completa</li>
          <li>Elaboración de nóminas (si aplica)</li>
          <li>Preparación y presentación de impuestos</li>
          <li>Cuentas anuales e informes para CRO y Revenue</li>
          <li>Asesoría contable y fiscal recurrente</li>
        </ul>
      </div>
    </div>
  );
}
