import { defineMiddleware } from "astro:middleware";
import { env } from "cloudflare:workers";
import { createAuth } from "./library/auth";
import { setRuntimeEnv } from "./library/server/bentoApi";

export const onRequest = defineMiddleware(async (context, next) => {
    if (env) {
        setRuntimeEnv(env);
    }
    if (!env?.DB) {
        console.error(
            "Cloudflare D1 binding (env.DB) is not available. Ensure wrangler bindings are configured."
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
