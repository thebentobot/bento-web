import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { createAuth } from "../../../library/auth";

export const ALL: APIRoute = async (ctx) => {
    if (!env?.DB) {
        throw new Error(
            "Cloudflare D1 binding (env.DB) is not available. Ensure wrangler bindings are configured."
        );
    }
    const auth = createAuth(env.DB, ctx.request, env);
    return auth.handler(ctx.request);
};
