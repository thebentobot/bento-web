declare interface CloudflareEnv {
    DB: D1Database;
    BETTER_AUTH_URL?: string;
    BETTER_AUTH_TRUSTED_ORIGINS?: string;
    DISCORD_CLIENT_ID?: string;
    DISCORD_CLIENT_SECRET?: string;
    API_URL?: string;
    API_KEY?: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<CloudflareEnv> & { env?: CloudflareEnv };

declare namespace App {
    interface Locals {
        runtime: Runtime;
        env?: CloudflareEnv;
        user: import("better-auth").User | null;
        session: import("better-auth").Session | null;
    }
}

declare interface ImportMetaEnv {
    readonly API_URL?: string;
    readonly API_KEY?: string;
    readonly BETTER_AUTH_URL?: string;
    readonly BETTER_AUTH_TRUSTED_ORIGINS?: string;
    readonly DISCORD_CLIENT_ID?: string;
    readonly DISCORD_CLIENT_SECRET?: string;
}

declare interface ImportMeta {
    readonly env: ImportMetaEnv;
}
