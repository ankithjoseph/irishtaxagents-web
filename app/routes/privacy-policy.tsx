import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy | Irish Tax Agents" },
    {
      name: "description",
      content: "Privacy Policy and Legal Notice for Irish Tax Agents.",
    },
  ];
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-neutral-900">
        Privacy Policy
      </h1>
      <div className="prose prose-neutral max-w-3xl">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            1) Controller
          </h2>
          <p className="text-neutral-700">
            Irish Tax Agents Ltd, located at Officepods Cranford Centre,
            Stillorgan Rd, Dublin 4 (D04F1P2), Ireland, is responsible for
            processing the personal data collected through this website and in
            connection with our services. You can contact us at
            info@irishtaxagents.com or by phone at 012303001.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            2) Data we collect
          </h2>
          <p className="text-neutral-700">
            We process identification and contact details (such as name, email
            and phone number), fiscal and financial information required for
            invoicing, and any other information strictly necessary to provide
            accounting, tax and administrative services, including GDPR-related
            consulting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            3) Purposes and legal basis
          </h2>
          <ul className="list-inside list-disc space-y-2 text-neutral-700">
            <li>
              To manage enquiries and provide the services you request
              (performance of a contract).
            </li>
            <li>
              To comply with legal, tax and accounting obligations (legal
              obligation).
            </li>
            <li>
              To keep you informed about relevant updates relating to our
              services (legitimate interest).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            4) Data retention
          </h2>
          <p className="text-neutral-700">
            Personal data will be kept for as long as needed to fulfil the
            purposes described above and to comply with applicable laws. Tax and
            accounting records are kept for at least six years.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            5) Your rights
          </h2>
          <p className="text-neutral-700">
            You may request access, rectification, deletion, restriction,
            portability of your data and object to its processing by contacting
            info@irishtaxagents.com. You also have the right to lodge a
            complaint with the Data Protection Commission (DPC) in Ireland.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            6) Security and processors
          </h2>
          <p className="text-neutral-700">
            We apply technical and organisational measures such as encryption,
            access control and incident management. Some services, like
            Microsoft 365 and Sage, act as our processors and offer appropriate
            data protection guarantees under GDPR.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            7) Changes to this policy
          </h2>
          <p className="text-neutral-700">
            We may update this Privacy Policy to reflect changes in law or in
            our internal processes. The latest version will always be available
            on this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            8) TCSP disclaimer
          </h2>
          <p className="text-neutral-700">
            Irish Tax Agents Ltd is not registered as a Trust or Company Service
            Provider (TCSP) and does not offer services such as direct company
            formation, registered office or acting as Company Secretary to the
            general public. Any reference to these activities refers only to
            administrative assistance or coordination with third parties where
            legally permitted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            9) Legal notice & terms of use
          </h2>
          <p className="text-neutral-700">
            The content on this site is for information purposes only and does
            not constitute legal or tax advice. Intellectual property rights
            belong to Irish Tax Agents Ltd or its licensors; reproduction or
            distribution without prior authorisation is prohibited. Irish Tax
            Agents Ltd is not responsible for the improper use of the
            information published on this website.
          </p>
        </section>
      </div>
    </div>
  );
}
