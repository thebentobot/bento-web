// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";

import { visualizer } from "rollup-plugin-visualizer";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    output: "server",
    site: "https://bentobot.xyz",
    image: {
        domains: ["cdn.discordapp.com", "api.bentobot.xyz", "bentobot.xyz"],
        remotePatterns: [{ protocol: "https" }],
    },
    adapter: cloudflare({
        imageService: "cloudflare",
    }),

    prefetch: true,

    vite: {
        server: {
            warmup: {
                // Islands must be in serverIslandsState before workerd caches virtual:astro:server-island-manifest.
                ssrFiles: [
                    "./src/pages/index.astro",
                    "./src/pages/leaderboard/index.astro",
                    "./src/pages/support.astro",
                ],
            },
        },
        plugins: [
            tailwindcss(),
            visualizer({
                emitFile: true,
                filename: "stats.html",
            }),
            {
                name: "configure-environments",
                configEnvironment(environment) {
                    if (environment === "client") {
                        return {
                            optimizeDeps: {
                                // Pre-bundle these so Vite doesn't discover them lazily and
                                // trigger program reloads that invalidate server-island tokens.
                                include: [
                                    "astro/virtual-modules/transitions.js",
                                    "astro/virtual-modules/transitions-router.js",
                                    "astro/virtual-modules/transitions-types.js",
                                    "astro/virtual-modules/transitions-events.js",
                                    "astro/virtual-modules/transitions-swap-functions.js",
                                ],
                            },
                        };
                    }
                    if (environment !== "client") {
                        return {
                            optimizeDeps: {
                                include: [
                                    "astro-font",
                                    "astro-icon/components",
                                    "astro/compiler-runtime",
                                    "debug",
                                    "better-auth",
                                    "better-auth/adapters/drizzle",
                                    "drizzle-orm/d1",
                                    "drizzle-orm/sqlite-core",
                                    "astro/zod",
                                    "astro/actions/runtime/entrypoints/server.js",
                                ],
                                exclude: ["mode-watcher", "svelte-toolbelt"],
                            },
                            resolve: {
                                noExternal: ["mode-watcher", "svelte-toolbelt"],
                            },
                        };
                    }
                },
            },
        ],
        ssr: {
            external: [
                "node:url",
                "node:path",
                "node:crypto",
                "node:fs",
                "node:os",
                "node:buffer",
                "node:fs/promises",
                "node:async_hooks",
            ],
        },
    },

    integrations: [sitemap(), svelte(), icon()],
});
