import { describe, expect, it } from "vitest";
import { resolveDiscordAvatarUrl } from "../src/library/discordAvatar";

describe("Leaderboard avatar URLs", () => {
    it.each([null, undefined, "", "   ", "not a URL", "javascript:alert(1)"])(
        "uses Discord avatar 4 for missing or invalid avatar %j",
        (avatar) => {
            expect(resolveDiscordAvatarUrl(avatar)).toBe(
                "https://cdn.discordapp.com/embed/avatars/4.png"
            );
        }
    );

    it.each([
        "https://cdn.discordapp.com/avatars/123/avatar.webp?size=64",
        "https://cdn.discordapp.com/embed/avatars/3.png",
    ])("preserves a valid custom or default avatar %s", (avatar) => {
        expect(resolveDiscordAvatarUrl(avatar)).toBe(avatar);
    });
});
