import type { APIRoute } from "astro"
import { createAuth } from "../../../library/auth"

export const ALL: APIRoute = async (ctx) => {
    const env = ctx.locals.runtime.env ?? ctx.locals.env;
    if (!env?.DB) {
        throw new Error("Cloudflare D1 binding (env.DB) is not available. Run with wrangler (preview/dev) or ensure platformProxy is enabled.");
    }
    const auth = createAuth(env.DB, ctx.request, env);
    return auth.handler(ctx.request);
}