import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Umbrella Services | Irish Tax Agents" },
    {
      name: "description",
      content:
        "Servicio umbrella para profesionales en Irlanda. Facturamos, gestionamos gastos y te pagamos una nómina.",
    },
  ];
};

export default function UmbrellaServices() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-neutral-900">
        Umbrella services para profesionales
      </h1>
      <div className="mb-8 max-w-3xl text-lg text-neutral-700">
        <p className="mb-4">
          Nuestro servicio tipo “umbrella” está pensado para profesionales que
          trabajan por proyectos pero no quieren asumir toda la carga
          administrativa de ser autónomos o de crear una empresa.
        </p>
        <p>
          Tú trabajas para tus clientes; nosotros facturamos, gestionamos tus
          gastos relacionados con la actividad y te pagamos una nómina en
          Irlanda aplicando las retenciones correctas.
        </p>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">Incluye:</h2>
        <ul className="list-inside list-disc space-y-3 text-lg text-neutral-700">
          <li>Trabaja para los clientes que quieras, con total flexibilidad.</li>
          <li>Enviamos las facturas a tus clientes según tus indicaciones.</li>
          <li>Registramos y comprobamos tus gastos profesionales.</li>
          <li>Calculamos tu nómina con los gastos exentos que procedan.</li>
          <li>
            Aplicamos las retenciones fiscales y te ingresamos el salario neto.
          </li>
        </ul>
      </div>
    </div>
  );
}
