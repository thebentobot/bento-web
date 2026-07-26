import { describe, expect, it } from "vitest";
import { groupChangelogReleases, loadChangelogPages, splitChangelogReleases } from "./changelog.ts";

const changelog = `# Changelog

## [2.0.0](https://example.com/2.0.0) (2026-01-02)

### Features

* A feature

## 1.0.0 (2026-01-01)

### Bug Fixes

* A fix

## 1.0.0 (2026-01-01)

* A preserved duplicate
`;

describe("splitChangelogReleases", () => {
    it("splits releases at level-two headings and preserves duplicates", () => {
        const releases = splitChangelogReleases(changelog);

        expect(releases).toHaveLength(3);
        expect(releases[0]).toMatch(/^## \[2\.0\.0]/);
        expect(releases[0]).toMatch(/### Features/);
        expect(releases[1]).toMatch(/^## 1\.0\.0/);
        expect(releases[2]).toMatch(/A preserved duplicate/);
    });

    it("returns an empty array when the changelog has no releases", () => {
        expect(splitChangelogReleases("# Changelog\n\nNothing released yet.")).toEqual([]);
        expect(splitChangelogReleases("")).toEqual([]);
    });

    it("rejects release headings without a changelog title", () => {
        expect(() => splitChangelogReleases("## 1.0.0")).toThrow(/must contain a title/);
    });
});

describe("groupChangelogReleases", () => {
    it("groups releases and keeps a partial final chunk", () => {
        const releases = ["one", "two", "three", "four", "five"];

        expect(groupChangelogReleases(releases, 2)).toEqual([
            ["one", "two"],
            ["three", "four"],
            ["five"],
        ]);
    });

    it("rejects invalid page sizes", () => {
        expect(() => groupChangelogReleases(["one"], 0)).toThrow(/positive integer/);
    });
});

describe("loadChangelogPages", () => {
    it("fails when the upstream changelog request fails", async () => {
        await expect(
            loadChangelogPages(async () => new Response("", { status: 503 }))
        ).rejects.toThrow(/Failed to fetch changelog: 503/);
    });

    it("returns no pages when the upstream changelog has no releases", async () => {
        const pages = await loadChangelogPages(
            async () => new Response("# Changelog\n\nNothing released yet.")
        );

        expect(pages).toEqual([]);
    });
});
