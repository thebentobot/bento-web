import { defineMiddleware } from "astro:middleware";
import { createAuth } from "./library/auth";

export const onRequest = defineMiddleware(async (context, next) => {
    const env = context.locals.runtime.env;
    if (!env?.DB) {
        console.error(
            "Cloudflare D1 binding (env.DB) is not available. Run with wrangler (preview/dev) or ensure platformProxy is enabled."
        );
        context.locals.user = null;
        context.locals.session = null;
        return next();
    }
    const auth = createAuth(env.DB, context.request, env);
    const isAuthed = await auth.api.getSession({
        headers: context.request.headers,
    });

    if (isAuthed) {
        context.locals.user = isAuthed.user;
        context.locals.session = isAuthed.session;
    } else {
        context.locals.user = null;
        context.locals.session = null;
    }

    return next();
});
