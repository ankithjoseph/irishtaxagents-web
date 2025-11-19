import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Contacto | Irish Tax Agents" },
    {
      name: "description",
      content:
        "Contacta con Irish Tax Agents. Gestoría irlandesa en español en Dublín.",
    },
  ];
};

export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-neutral-900">Contacto</h1>
      <p className="mb-12 text-lg text-neutral-700">
        Cuéntanos tu caso y te responderemos con la mejor manera de ayudarte en
        Irlanda.
      </p>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <form className="space-y-6 rounded-xl border border-neutral-200 bg-neutral-50 p-8">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-neutral-900 focus:border-sky-500 focus:ring-sky-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-neutral-900 focus:border-sky-500 focus:ring-sky-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-neutral-900 focus:border-sky-500 focus:ring-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Tipo de consulta
              </label>
              <select
                id="type"
                name="type"
                className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-neutral-900 focus:border-sky-500 focus:ring-sky-500"
              >
                <option value="profesional">Profesional</option>
                <option value="empresa">Empresa</option>
                <option value="start-up">Start-up</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-neutral-900 focus:border-sky-500 focus:ring-sky-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-neutral-900">
              Datos de contacto
            </h2>
            <div className="space-y-4 text-lg text-neutral-700">
              <p className="font-bold">Irish Tax Agents</p>
              <p>
                OfficePods Cranford Centre
                <br />
                Stillorgan Road, Dublin, D04 F1P2, Irlanda
              </p>
              <p>
                <span className="font-semibold">Tel:</span> 012303001
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@irishtaxagents.com"
                  className="text-sky-600 hover:underline"
                >
                  info@irishtaxagents.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
