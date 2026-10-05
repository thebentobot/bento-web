import { describe, expect, it } from "vitest";
import { getDiscordDefaultAvatarUrl, resolveDiscordAvatarUrl } from "../src/library/discordAvatar";

const defaultUrl = (index: number) => `https://cdn.discordapp.com/embed/avatars/${index}.png`;

describe("Discord default avatars", () => {
    it.each([0, 1, 2, 3, 4, 5])("supports modern default avatar index %i", (index) => {
        // Realistic snowflake size with a known timestamp remainder, including low bits.
        const id = ((100_000_000_002n + BigInt(index)) << 22n) + 123n;
        expect(getDiscordDefaultAvatarUrl(id.toString(), "0")).toBe(defaultUrl(index));
        expect(getDiscordDefaultAvatarUrl(id)).toBe(defaultUrl(index));
        expect(getDiscordDefaultAvatarUrl(Number(id), "0")).toBe(defaultUrl(index));
    });

    it("uses the legacy discriminator instead of the modern snowflake rule", () => {
        expect(getDiscordDefaultAvatarUrl("4194304", "1234")).toBe(defaultUrl(4));
        expect(getDiscordDefaultAvatarUrl("4194304", "0005")).toBe(defaultUrl(0));
    });

    it.each(["", "invalid", "-1"])("handles invalid user ID %j", (id) => {
        expect(getDiscordDefaultAvatarUrl(id, "0")).toBe(defaultUrl(0));
    });
});

describe("Leaderboard avatar URLs", () => {
    it.each([null, undefined, "", "   ", "not a URL", "javascript:alert(1)"])(
        "uses the default for missing or invalid avatar %j",
        (avatar) => {
            expect(resolveDiscordAvatarUrl(avatar, defaultUrl(3))).toBe(defaultUrl(3));
        }
    );

    it.each([
        "https://cdn.discordapp.com/avatars/123/avatar.webp?size=64",
        "https://cdn.discordapp.com/embed/avatars/3.png",
    ])("preserves a valid custom or default avatar %s", (avatar) => {
        expect(resolveDiscordAvatarUrl(avatar, defaultUrl(0))).toBe(avatar);
    });
});
