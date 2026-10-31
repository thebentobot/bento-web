export const DISCORD_DEFAULT_AVATAR_URL = "https://cdn.discordapp.com/embed/avatars/3.png";

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

/**
 * `<img>` error handler: swap a dead Discord avatar URL (Discord deletes old CDN
 * files when a user changes their avatar) for the default avatar.
 */
export function handleDiscordAvatarError(event: Event): void {
    const image = event.currentTarget as HTMLImageElement | null;
    if (!image) return;
    image.onerror = null;
    image.src = DISCORD_DEFAULT_AVATAR_URL;
}
