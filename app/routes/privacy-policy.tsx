import { type MetaFunction } from "react-router";

export const meta: MetaFunction = ({ matches }) => {
  const rootData = matches.find((match) => match.id === "root")?.data as
    | { origin: string }
    | undefined;
  const origin = rootData?.origin;
  const title = "Política de Privacidad | Irish Tax Agents";
  const description =
    "Política de privacidad y aviso legal de Irish Tax Agents. Información sobre protección de datos y derechos de los usuarios.";
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

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 border-b pb-4 text-4xl font-bold text-neutral-900">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-neutral-700">
          <section>
            <p className="mb-4">
              Irish Tax Agents Ltd, located at Officepods Cranford Centre,
              Stillorgan Rd, Dublin 4 (D04F1P2), Ireland, is responsible for
              processing the personal data collected on this website and in the
              provision of our services. You may contact us at{" "}
              <a
                href="mailto:info@irishtaxagents.com"
                className="text-blue-600 hover:underline"
              >
                info@irishtaxagents.com
              </a>{" "}
              or by phone at 012303001.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-neutral-900">
              Data Collection
            </h2>
            <p>
              We collect personal data such as contact details (name, email,
              phone), fiscal and financial data for invoicing, and information
              necessary to provide our consulting, training, and administrative
              services related to GDPR compliance and taxation.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-neutral-900">
              Purpose and Legal Basis
            </h2>
            <p>
              We process this data to manage inquiries and contracted services
              (legal basis: contract performance), comply with legal obligations
              (legal basis: legal obligation), and for legitimate interest in
              providing relevant communications. Data will be retained for as
              long as necessary to meet these purposes and legal requirements,
              with a minimum of 6 years for tax and accounting records.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-neutral-900">
              Your Rights
            </h2>
            <p>
              You have the right to access, rectify, delete, restrict, and port
              your data, as well as to object to its processing. Requests can be
              sent to{" "}
              <a
                href="mailto:info@irishtaxagents.com"
                className="text-blue-600 hover:underline"
              >
                info@irishtaxagents.com
              </a>
              . If you believe your rights have been violated, you may file a
              complaint with the Data Protection Commission (DPC) in Ireland (
              <a
                href="https://www.dataprotection.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.dataprotection.ie
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-neutral-900">
              Security
            </h2>
            <p>
              We apply appropriate technical and organizational measures to
              safeguard personal data, including encryption, access controls,
              and incident management protocols. Our processors (Microsoft 365,
              Sage) comply with GDPR and provide adequate data protection
              guarantees.
            </p>
          </section>

          <section>
            <p className="text-sm italic">
              This policy may be updated to reflect regulatory or internal
              changes. The latest version will always be available on this
              website.
            </p>
          </section>

          <div className="my-6 border-l-4 border-neutral-500 bg-neutral-50 p-4">
            <p className="mb-1 font-semibold text-neutral-900">
              Important Note
            </p>
            <p className="text-sm">
              Irish Tax Agents Ltd is not registered as a Trust or Company
              Service Provider (TCSP) and does not offer services such as direct
              company formation, registered office provision, or acting as a
              Company Secretary to the public. Any reference to these services
              refers only to administrative assistance, guidance, or third-party
              coordination. These services are not billed or provided directly
              by Irish Tax Agents Ltd unless explicitly stated and legally
              permitted.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <h2 className="mb-6 text-3xl font-bold text-neutral-900">
            Legal Notice and Terms of Use
          </h2>
          <div className="space-y-4 text-neutral-700">
            <p>
              This website (www.irishtaxagents.com) is owned by Irish Tax Agents
              Ltd, located at Officepods Cranford Centre, Stillorgan Rd, Dublin
              4 (D04F1P2), Ireland. Access and use of this site imply acceptance
              of the following terms:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Content is provided for informational purposes only and does not
                constitute legal or tax advice.
              </li>
              <li>
                Intellectual property rights over the site’s content belong to
                Irish Tax Agents Ltd or its licensors.
              </li>
              <li>
                Reproduction or distribution of the content without express
                authorization is prohibited.
              </li>
              <li>
                Irish Tax Agents Ltd is not liable for misuse of the information
                contained on this website.
              </li>
            </ul>
            <p className="mt-4 text-sm text-neutral-600">
              Irish Tax Agents Ltd does not act as a Trust or Company Service
              Provider (TCSP) and does not provide regulated services such as
              direct company formation, registered office services, or acting as
              a Company Secretary in a fiduciary capacity. Any references to
              these activities relate solely to third-party facilitation or
              assistance for clients receiving ongoing accounting support, when
              such service is clearly identified and compliant with the
              applicable Irish legislation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
