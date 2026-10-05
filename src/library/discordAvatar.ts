type DiscordUserId = string | number | bigint;

export function getDiscordDefaultAvatarUrl(
    userId: DiscordUserId,
    discriminator?: string | null
): string {
    let index = 0;
    if (discriminator && /^\d+$/.test(discriminator) && Number(discriminator) > 0) {
        index = Number(BigInt(discriminator) % 5n);
    } else {
        try {
            const id = BigInt(userId);
            if (id > 0n) {
                // Use BigInt: Discord snowflakes exceed JavaScript's safe integer range.
                index = Number((id >> 22n) % 6n);
            }
        } catch {
            // Missing or invalid IDs still get a usable default avatar.
        }
    }
    return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
}

export function resolveDiscordAvatarUrl(
    avatarUrl: string | null | undefined,
    defaultAvatarUrl: string
): string {
    try {
        const url = new URL(avatarUrl?.trim() ?? "");
        if (url.protocol === "https:" || url.protocol === "http:") {
            return url.href;
        }
    } catch {
        // Empty and malformed URLs use the default immediately.
    }
    return defaultAvatarUrl;
}
