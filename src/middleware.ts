import { defineMiddleware } from "astro:middleware";
import { env } from "cloudflare:workers";
import { createAuth } from "./library/auth";
import { setRuntimeEnv } from "./library/server/bentoApi";
import { addSecurityHeaders } from "./library/server/securityHeaders";

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
        const response = await next();
        addSecurityHeaders(response.headers);
        return response;
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

    const response = await next();
    addSecurityHeaders(response.headers);
    return response;
});
