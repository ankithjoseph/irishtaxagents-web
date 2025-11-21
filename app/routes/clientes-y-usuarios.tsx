import {
  type MetaFunction,
  Form,
  useLoaderData,
  useActionData,
  redirect,
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
  Link,
} from "react-router";
import PocketBase from "pocketbase";
import { getSession, commitSession } from "../sessions";

export const meta: MetaFunction = ({ matches }) => {
  const rootData = matches.find((match) => match.id === "root")?.data as
    | { origin: string }
    | undefined;
  const origin = rootData?.origin;
  const title = "Área de Clientes | Irish Tax Agents";
  const description =
    "Acceso exclusivo para clientes de Irish Tax Agents. Consulte sus documentos y expedientes de forma segura.";
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

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  if (!userId) {
    return { isLoggedIn: false, files: [], totalPages: 0, currentPage: 1 };
  }

  try {
    const pbUrl = import.meta.env.VITE_POCKETBASE_URL;
    const pbEmail = import.meta.env.VITE_POCKETBASE_EMAIL;
    const pbPassword = import.meta.env.VITE_POCKETBASE_PASSWORD;

    if (!pbUrl || !pbEmail || !pbPassword) {
      console.error("Missing PocketBase credentials");
      return {
        isLoggedIn: true,
        files: [],
        error: "Configuration error",
        totalPages: 0,
        currentPage: 1,
      };
    }

    const pb = new PocketBase(pbUrl);

    // Authenticate with the specific user for file retrieval
    await pb.collection("users").authWithPassword(pbEmail, pbPassword);

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");

    const records = await pb.collection("irishweb_files").getList(page, 10, {
      sort: "-created",
    });

    // Map records to a simpler format
    const files = records.items.map((record) => ({
      id: record.id,
      title: record.Name || "Untitled",
      description: record.Description || "",
      // Construct the file URL. The file field is named 'field'
      href: `${pb.baseURL}/api/files/${record.collectionId}/${record.id}/${record.field}`,
    }));

    return {
      isLoggedIn: true,
      files,
      totalPages: records.totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("PocketBase error:", error);
    return {
      isLoggedIn: true,
      files: [],
      error: "Failed to fetch files",
      totalPages: 0,
      currentPage: 1,
    };
  }
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  // Verify against environment variables
  const validUsername =
    process.env.VITE_USERNAME || import.meta.env.VITE_USERNAME;
  const validPassword =
    process.env.VITE_PASSWORD || import.meta.env.VITE_PASSWORD;

  if (username === validUsername && password === validPassword) {
    session.set("userId", "admin"); // Simple session marker
    return redirect("/clientes-y-usuarios", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return { error: "Invalid username or password" };
}

export default function ClientesYUsuarios() {
  const { isLoggedIn, files, totalPages, currentPage } =
    useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? (
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-md">
            <h1 className="mb-8 text-center text-4xl font-bold text-neutral-900">
              Esta página está protegida por una contraseña.
            </h1>
            <p className="mb-6 text-center text-lg text-neutral-700">
              Por favor, introduzca el nombre de usuario y la contraseña a
              continuación.
            </p>
            <Form method="post" className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Inicio de sesión:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 block w-full rounded-md border
                    border-neutral-300 px-3 py-2 shadow-sm focus:border-sky-500
                    focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full rounded-md border
                    border-neutral-300 px-3 py-2 shadow-sm focus:border-sky-500
                    focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>
              {actionData?.error && (
                <p className="text-red-600">{actionData.error}</p>
              )}
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md border
                  border-transparent bg-sky-600 px-4 py-2 text-sm font-medium
                  text-white shadow-sm hover:bg-sky-700 focus:ring-2
                  focus:ring-sky-500 focus:ring-offset-2 focus:outline-none"
              >
                Login
              </button>
            </Form>
          </div>
        </div>
      ) : (
        <div>
          <section className="min-h-screen bg-neutral-50 py-16">
            <div className="container mx-auto px-4 pt-8">
              <h1
                className="mb-12 text-center font-serif text-3xl font-bold
                  text-sky-900"
              >
                Download Files
              </h1>
              <div
                className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2
                  lg:grid-cols-2"
              >
                {files && files.length > 0 ? (
                  files.map((file: any, index: number) => (
                    <a
                      key={file.id}
                      href={file.href}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col rounded-lg border
                        border-neutral-100 bg-white p-4 shadow-sm
                        transition-shadow hover:shadow-md"
                    >
                      <div className="mb-2 flex items-center">
                        <span
                          className="mr-4 flex h-8 w-8 flex-shrink-0
                            items-center justify-center rounded-full bg-sky-100
                            text-sm font-bold text-sky-700"
                        >
                          {index + 1}
                        </span>
                        <span className="text-lg font-medium text-neutral-800">
                          {file.title}
                        </span>
                      </div>
                      <p className="ml-12 text-sm text-neutral-600">
                        {file.description}
                      </p>
                    </a>
                  ))
                ) : (
                  <p className="col-span-2 text-center text-neutral-500">
                    No files found.
                  </p>
                )}
              </div>
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center space-x-1">
                  {currentPage > 1 && (
                    <Link
                      to={`?page=${currentPage - 1}`}
                      className="rounded-md bg-gray-200 px-3 py-2 text-gray-700
                        transition-colors hover:bg-gray-300"
                    >
                      &laquo; Previous
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Link
                        key={page}
                        to={`?page=${page}`}
                        className={`rounded-md px-3 py-2 transition-colors ${
                          page === currentPage
                            ? "bg-sky-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                      >
                        {page}
                      </Link>
                    ),
                  )}
                  {currentPage < totalPages && (
                    <Link
                      to={`?page=${currentPage + 1}`}
                      className="rounded-md bg-gray-200 px-3 py-2 text-gray-700
                        transition-colors hover:bg-gray-300"
                    >
                      Next &raquo;
                    </Link>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
