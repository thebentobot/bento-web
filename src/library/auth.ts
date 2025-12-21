import { betterAuth, type BetterAuthOptions, type User } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "../db";

export interface BentoBetterAuthUser extends User {
    discordId: string;
    discordUsername: string;
    discordGlobalName?: string;
    discordAvatar: string;
    discordDiscriminator: string;
    discordBannerColor?: string;
    discordLocale: string;
}

export type AuthEnv = {
    BETTER_AUTH_URL?: string;
    BETTER_AUTH_TRUSTED_ORIGINS?: string;
    BETTER_AUTH_SECRET?: string;
    DISCORD_CLIENT_ID?: string;
    DISCORD_CLIENT_SECRET?: string;
};

export const createAuth = (d1: D1Database, request?: Request, env?: AuthEnv) => {
    // Derive origins: prefer request origin in Astro dev (4321). In preview/workers, prefer env BETTER_AUTH_URL from import.meta.env first, then env.
    const betterAuthUrl =
        (typeof import.meta !== "undefined" ? import.meta.env?.BETTER_AUTH_URL : undefined) ??
        env?.BETTER_AUTH_URL;
    const envOrigin = (() => {
        if (!betterAuthUrl) return undefined;
        try {
            return new URL(betterAuthUrl).origin;
        } catch {
            return undefined;
        }
    })();
    const requestUrl = request ? new URL(request.url) : undefined;
    const requestOrigin = requestUrl?.origin;
    const host = requestUrl?.host || "";
    const isAstroDev =
        host.endsWith(":4321") || host === "localhost:4321" || host === "127.0.0.1:4321";
    const effectiveOrigin = isAstroDev ? requestOrigin : envOrigin || requestOrigin;
    const baseURL = effectiveOrigin ? `${effectiveOrigin}/api/auth` : undefined;

    // Compute trusted origins: include both env and request origins and any provided via CSV
    const trustedOrigins = (() => {
        const set = new Set<string>();
        if (requestOrigin) set.add(requestOrigin);
        if (envOrigin) set.add(envOrigin);
        const csv =
            (typeof import.meta !== "undefined"
                ? import.meta.env?.BETTER_AUTH_TRUSTED_ORIGINS
                : undefined) ?? env?.BETTER_AUTH_TRUSTED_ORIGINS;
        if (csv && typeof csv === "string") {
            for (const part of csv.split(/[,\s]+/)) {
                const p = part.trim();
                if (!p) continue;
                try {
                    set.add(new URL(p).origin);
                } catch (e) {
                    /* ignore invalid URL in trusted origins */ void e;
                }
            }
        }
        // Common localhost variants (Astro dev typically runs on 4321)
        set.add("http://localhost:4321");
        set.add("http://127.0.0.1:4321");
        return Array.from(set);
    })();

    const DISCORD_CLIENT_ID =
        (typeof import.meta !== "undefined" ? import.meta.env?.DISCORD_CLIENT_ID : undefined) ??
        env?.DISCORD_CLIENT_ID;
    const DISCORD_CLIENT_SECRET =
        (typeof import.meta !== "undefined" ? import.meta.env?.DISCORD_CLIENT_SECRET : undefined) ??
        env?.DISCORD_CLIENT_SECRET;

    const discordConfigured = Boolean(DISCORD_CLIENT_ID && DISCORD_CLIENT_SECRET);

    return betterAuth({
        secret:
            (typeof import.meta !== "undefined"
                ? import.meta.env?.BETTER_AUTH_SECRET
                : undefined) ?? env?.BETTER_AUTH_SECRET,
        baseURL: baseURL!,
        trustedOrigins,
        database: drizzleAdapter(getDb(d1), {
            provider: "sqlite",
        }),
        emailAndPassword: {
            enabled: false,
        },
        socialProviders: {
            discord: {
                disableDefaultScope: true,
                scope: ["identify"],
                enabled: discordConfigured,
                clientId: DISCORD_CLIENT_ID || "",
                clientSecret: DISCORD_CLIENT_SECRET || "",
                mapProfileToUser: (
                    profile
                ): {
                    id?: string;
                    name?: string;
                    email?: string | null;
                    image?: string;
                    emailVerified?: boolean;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    [key: string]: any;
                } => {
                    // To satisfy better-auth, as the schema requires email, we fabricate a fake email to not bother with that.
                    const fakeEmail = `${profile?.id || crypto.randomUUID()}@fake-discord-email.com`;
                    return {
                        // core user fields
                        id: profile.id,
                        name: profile?.global_name || profile.username,
                        email: fakeEmail,
                        image:
                            profile.image_url ??
                            `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
                        emailVerified: profile.verified,
                        // custom fields persisted in user table via additionalFields config
                        discordId: profile.id,
                        discordUsername: profile.username,
                        discordGlobalName: profile.global_name,
                        discordAvatar: profile?.avatar,
                        discordDiscriminator: profile.discriminator,
                        discordBannerColor: profile?.banner_color,
                        discordLocale: profile.locale,
                    };
                },
            },
        } satisfies BetterAuthOptions["socialProviders"],
        user: {
            additionalFields: {
                discordId: { type: "string", unique: true },
                discordUsername: { type: "string" },
                discordGlobalName: { type: "string" },
                discordAvatar: { type: "string" },
                discordDiscriminator: { type: "string" },
                discordBannerColor: { type: "string" },
                discordLocale: { type: "string" },
            },
        },
    });
};
