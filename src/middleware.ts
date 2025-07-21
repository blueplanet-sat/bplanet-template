import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname !== "/") {
    return context.redirect("/", 302);
  }
  return next();
}); 