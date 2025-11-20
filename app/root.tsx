import {
  href,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const links: Route.LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Merriweather:ital,wght@0,400..900;1,400..900&display=swap",
    },
  ];
};

export async function loader({ request }: Route.LoaderArgs) {
  const { origin } = new URL(request.url);
  return { origin };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white text-neutral-900 scheme-light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let [message, details] = ["Oops!", "An unexpected error occurred."];
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main
      className="container flex min-h-screen flex-col items-center
        justify-center gap-4 p-8"
    >
      <h1 className="text-6xl font-bold text-neutral-900">{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
      <Link
        className="flex items-center gap-2 rounded-lg border-2
          border-neutral-200 bg-neutral-50 px-3 py-2 text-neutral-900
          transition-colors hover:border-neutral-300 hover:bg-neutral-100
          hover:text-neutral-900"
        to={href("/")}
      >
        Go Home!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M216,116.69V216H152V152H104v64H40V116.69l82.34-82.35a8,8,0,0,1,11.32,0Z"
            opacity="0.2"
          ></path>
          <path d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z"></path>
        </svg>
      </Link>
    </main>
  );
}

export const meta: Route.MetaFunction = ({
  data,
  error,
  location: { pathname },
}) => {
  if (!data) {
    return [];
  }
  const { origin } = data;
  const title =
    isRouteErrorResponse(error) && error.status === 404
      ? "Page not found | Irish Tax Agents"
      : "Irish Tax Agents – Gestoría irlandesa en español";
  const description =
    "Gestoría irlandesa especializada en empresas y profesionales que trabajan en Irlanda, ofreciendo servicios de contabilidad, impuestos y asesoría fiscal en español.";
  const currentUrl = origin + pathname;
  const ogImageUrl = `${origin}/og-logo.png`;

  return [
    {
      title,
    },
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: title,
    },
    { tagName: "link", rel: "canonical", href: currentUrl },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImageUrl },
    { property: "og:image:alt", content: title },
    { property: "og:image:type", content: "image/png" },
    { property: "og:url", content: currentUrl },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Irish Tax Agents",
    },
    {
      property: "og:locale",
      content: "es_ES",
    },
    {
      name: "keywords",
      content: "Gestoría Irlanda, Asesoría Fiscal Irlanda, Contabilidad Irlanda, Spanish Accountants Ireland, Impuestos Irlanda, Autónomos Irlanda, Empresas Irlanda",
    },
    // Only need these properties, since it automatically uses the og pproperties:
    // https://developer.x.com/en/docs/x-for-websites/cards/overview/markup
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:image",
      content: ogImageUrl,
    },
    {
      property: "twitter:title",
      content: title,
    },
    {
      property: "twitter:description",
      content: description,
    },
  ];
};
