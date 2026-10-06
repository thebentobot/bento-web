export const DISCORD_DEFAULT_AVATAR_URL = "https://cdn.discordapp.com/embed/avatars/4.png";

export function resolveDiscordAvatarUrl(avatarUrl: string | null | undefined): string {
    try {
        const url = new URL(avatarUrl?.trim() ?? "");
        if (url.protocol === "https:" || url.protocol === "http:") {
            return url.href;
        }
    } catch {
        // Empty and malformed URLs use the default immediately.
    }
    return DISCORD_DEFAULT_AVATAR_URL;
}
