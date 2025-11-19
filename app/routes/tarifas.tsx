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
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-neutral-900">
        Paquetes adaptados a tu actividad
      </h1>
      <div className="mb-12 max-w-3xl text-lg text-neutral-700">
        <p className="mb-4">
          Cada actividad y cada empresa tiene obligaciones diferentes y un
          volumen de operaciones propio.
        </p>
        <p className="mb-4">
          Analizamos tu situación (facturación estimada, número de empleados,
          tipo de actividad, necesidades de reporte) y, en función del trabajo
          que vamos a realizar durante el año, definimos una cuota mensual fija.
        </p>
        <p>
          Esta cuota incluye los servicios recogidos en el paquete que contrates
          y se cobra por domiciliación bancaria.
        </p>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-neutral-900">
            Plan profesional
          </h3>
          <p className="text-3xl font-bold text-sky-600">desde 225 €/mes</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-neutral-900">
            Plan empresa
          </h3>
          <p className="text-3xl font-bold text-sky-600">Consultar</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-neutral-900">
            Plan a medida
          </h3>
          <p className="text-3xl font-bold text-sky-600">
            Presupuesto personalizado
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Link
          to="/tarifas/umbrella-services"
          className="group block rounded-xl border border-neutral-200 bg-white p-8 transition-colors hover:border-sky-300 hover:bg-sky-50"
        >
          <h2 className="mb-4 text-2xl font-bold text-neutral-900 group-hover:text-sky-700">
            Umbrella services para profesionales &rarr;
          </h2>
          <p className="text-neutral-700">
            Nuestro servicio tipo “umbrella” está pensado para profesionales que
            trabajan por proyectos pero no quieren asumir toda la carga
            administrativa de ser autónomos o de crear una empresa.
          </p>
        </Link>

        <Link
          to="/tarifas/servicio-integral"
          className="group block rounded-xl border border-neutral-200 bg-white p-8 transition-colors hover:border-sky-300 hover:bg-sky-50"
        >
          <h2 className="mb-4 text-2xl font-bold text-neutral-900 group-hover:text-sky-700">
            Servicio integral para empresas &rarr;
          </h2>
          <p className="text-neutral-700">
            Dirigido a sociedades limitadas y empresas con estructura estable en
            Irlanda que desean externalizar la contabilidad, los impuestos y la
            gestión de sus obligaciones ante el CRO y el Revenue.
          </p>
        </Link>
      </div>
    </div>
  );
}
