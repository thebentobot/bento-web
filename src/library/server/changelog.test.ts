import assert from "node:assert/strict";
import test from "node:test";
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

test("splits releases at level-two headings and preserves duplicates", () => {
    const releases = splitChangelogReleases(changelog);

    assert.equal(releases.length, 3);
    assert.match(releases[0]!, /^## \[2\.0\.0]/);
    assert.match(releases[0]!, /### Features/);
    assert.match(releases[1]!, /^## 1\.0\.0/);
    assert.match(releases[2]!, /A preserved duplicate/);
});

test("groups releases and keeps a partial final chunk", () => {
    const releases = ["one", "two", "three", "four", "five"];

    assert.deepEqual(groupChangelogReleases(releases, 2), [
        ["one", "two"],
        ["three", "four"],
        ["five"],
    ]);
});

test("rejects malformed changelog content", () => {
    assert.throws(
        () => splitChangelogReleases("# Changelog\n\nNothing released yet."),
        /at least one level-two release heading/
    );
    assert.throws(() => splitChangelogReleases("## 1.0.0"), /must contain a title/);
});

test("rejects invalid page sizes", () => {
    assert.throws(() => groupChangelogReleases(["one"], 0), /positive integer/);
});

test("fails when the upstream changelog request fails", async () => {
    await assert.rejects(
        loadChangelogPages(async () => new Response("", { status: 503 })),
        /Failed to fetch changelog: 503/
    );
});
