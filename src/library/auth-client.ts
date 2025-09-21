import { createAuthClient as createAstroAuthClient } from "better-auth/client";
import { createAuthClient as createSvelteAuthClient } from "better-auth/svelte";

export const astroAuthClient = createAstroAuthClient({
    basePath: "/api/auth",
});
export const svelteAuthClient = createSvelteAuthClient({
    basePath: "/api/auth",
});