import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Servicios de cobro para profesionales | Irish Tax Agents" },
    {
      name: "description",
      content:
        "Servicios de cobro para profesionales independientes. Facturación, gestión de gastos y nómina en Irlanda.",
    },
  ];
};

export default function UmbrellaServices() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
            Servicios de cobro para profesionales
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-neutral-500">
            Soluciones "Umbrella" para profesionales independientes obligados a facturar por sus servicios.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <div className="prose prose-neutral max-w-none text-neutral-700">
              <p className="lead text-lg"><strong>
                La mayoría de profesionales opta por la constitución de una limited company, aunque en la práctica, esta opción no es la mejor ni la más barata. <p>Nosotros le contratamos y le pagamos en función de su facturación.</p></strong>
              </p>
              <br></br>
              <p>
                Nuestro servicio "Umbrella" elimina la carga administrativa. Usted se centra en trabajar para sus clientes, y nosotros nos encargamos de facturar, gestionar sus gastos y procesar su nómina en Irlanda con total cumplimiento legal.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="mb-6 text-2xl font-bold text-neutral-900">¿Qué incluye el servicio?</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Facturación a clientes (hasta 20.000€/mes)",
                  "App móvil para gestión de gastos",
                  "Nómina mensual",
                  "Liquidación de retenciones salariales",
                  "Declaración de renta anual (Form 11)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing Card Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg ring-1 ring-black/5">
              <h3 className="text-lg font-semibold leading-8 text-neutral-900">Tarifa</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-neutral-900">150€</span>
                <span className="text-base text-neutral-500">+ IVA</span>
              </p>
              <p className="mt-1 text-sm text-neutral-500">por nómina de profesional</p>

              <div className="mt-6 border-t border-neutral-100 pt-6">
                <p className="text-sm text-neutral-600">
                  <strong>Nota:</strong> IVA y tasas no incluidas en esta tarifa.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/contacto"
                  className="block w-full rounded-md bg-blue-600 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Solicitar Contratación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
