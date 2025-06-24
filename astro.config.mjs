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
        platformProxy: {
            enabled: true,
        },

        imageService: "cloudflare", // TODO: Change to "compile" if this does not work
    }),

    prefetch: true,

    vite: {
        plugins: [
            tailwindcss(),
            visualizer({
                emitFile: true,
                filename: "stats.html",
            }),
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
                "path",
            ],
        },
    },

    integrations: [sitemap(), svelte(), icon()],
});
