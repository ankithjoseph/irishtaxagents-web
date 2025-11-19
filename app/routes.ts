import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("servicios", "routes/servicios.tsx"),
  route("start-ups", "routes/start-ups.tsx"),
  route("tarifas", "routes/tarifas.tsx"),
  route("tarifas/umbrella-services", "routes/tarifas.umbrella-services.tsx"),
  route("tarifas/servicio-integral", "routes/tarifas.servicio-integral.tsx"),
  route("contacto", "routes/contacto.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("clientes-y-usuarios", "routes/clientes-y-usuarios.tsx"),
] satisfies RouteConfig;
