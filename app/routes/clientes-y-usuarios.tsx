import { type MetaFunction, Form, useLoaderData, useActionData, redirect, type LoaderFunctionArgs, type ActionFunctionArgs, Link } from "react-router";
import PocketBase from "pocketbase";
import { getSession, commitSession } from "../sessions";

export const meta: MetaFunction = () => {
  return [
    { title: "Área de Clientes | Irish Tax Agents" },
    {
      name: "description",
      content: "Acceso exclusivo para clientes de Irish Tax Agents. Consulte sus documentos y expedientes de forma segura.",
    },
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
      return { isLoggedIn: true, files: [], error: "Configuration error", totalPages: 0, currentPage: 1 };
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

    return { isLoggedIn: true, files, totalPages: records.totalPages, currentPage: page };
  } catch (error) {
    console.error("PocketBase error:", error);
    return { isLoggedIn: true, files: [], error: "Failed to fetch files", totalPages: 0, currentPage: 1 };
  }
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  // Verify against environment variables
  const validUsername = process.env.VITE_USERNAME || import.meta.env.VITE_USERNAME;
  const validPassword = process.env.VITE_PASSWORD || import.meta.env.VITE_PASSWORD;

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
  const { isLoggedIn, files, totalPages, currentPage } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <h1 className="mb-8 text-4xl font-bold text-neutral-900 text-center">
              Esta página está protegida por una contraseña.
            </h1>
            <p className="mb-6 text-lg text-neutral-700 text-center">
              Por favor, introduzca el nombre de usuario y la contraseña a continuación.
            </p>
            <Form method="post" className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-neutral-700">
                  Inicio de sesión:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
              {actionData?.error && <p className="text-red-600">{actionData.error}</p>}
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Login
              </button>
            </Form>
          </div>
        </div>
      ) : (
        <div>
          <section className="py-16 bg-neutral-50 min-h-screen">
            <div className="container mx-auto px-4 pt-8">
              <h1 className="mb-12 text-center text-3xl font-bold text-sky-900 font-serif">
                Download Files
              </h1>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                {files && files.length > 0 ? (
                  files.map((file: any, index: number) => (
                    <a
                      key={file.id}
                      href={file.href}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col p-4 bg-white rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold text-sm mr-4">
                          {index + 1}
                        </span>
                        <span className="text-lg text-neutral-800 font-medium">
                          {file.title}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 ml-12">
                        {file.description}
                      </p>
                    </a>
                  ))
                ) : (
                  <p className="text-center col-span-2 text-neutral-500">No files found.</p>
                )}
              </div>
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 space-x-1">
                  {currentPage > 1 && (
                    <Link
                      to={`?page=${currentPage - 1}`}
                      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      &laquo; Previous
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link
                      key={page}
                      to={`?page=${page}`}
                      className={`px-3 py-2 rounded-md transition-colors ${page === currentPage
                          ? 'bg-sky-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      {page}
                    </Link>
                  ))}
                  {currentPage < totalPages && (
                    <Link
                      to={`?page=${currentPage + 1}`}
                      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
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
