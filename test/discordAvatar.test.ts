import { describe, expect, it } from "vitest";
import {
    DISCORD_DEFAULT_AVATAR_URL,
    handleDiscordAvatarError,
    resolveDiscordAvatarUrl,
} from "../src/library/discordAvatar";

describe("Discord avatar URLs", () => {
    it.each([null, undefined, "", "   ", "not a URL", "javascript:alert(1)"])(
        "uses Discord avatar 3 for missing or invalid avatar %j",
        (avatar) => {
            expect(resolveDiscordAvatarUrl(avatar)).toBe(
                "https://cdn.discordapp.com/embed/avatars/3.png"
            );
        }
    );

    it.each([
        "https://cdn.discordapp.com/avatars/123/avatar.webp?size=64",
        "https://cdn.discordapp.com/embed/avatars/3.png",
    ])("preserves a valid custom or default avatar %s", (avatar) => {
        expect(resolveDiscordAvatarUrl(avatar)).toBe(avatar);
    });

    it("falls back to the default avatar when an image fails to load", () => {
        const image = {
            onerror: () => {},
            src: "https://cdn.discordapp.com/avatars/123/stale.png",
        } as unknown as HTMLImageElement;

        handleDiscordAvatarError({ currentTarget: image } as unknown as Event);

        expect(image.src).toBe(DISCORD_DEFAULT_AVATAR_URL);
        expect(image.onerror).toBeNull();
    });
});
