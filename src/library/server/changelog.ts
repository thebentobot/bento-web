import { renderMarkdown } from "./markdown.ts";

export const CHANGELOG_URL =
    "https://raw.githubusercontent.com/thebentobot/dotBento/master/CHANGELOG.md";
export const RELEASES_PER_CHUNK = 5;

export interface ChangelogPage {
    html: string;
    page: number;
    releaseCount: number;
    totalPages: number;
}

type ChangelogFetcher = (url: string) => Promise<Response>;

export function splitChangelogReleases(markdown: string): string[] {
    const normalizedMarkdown = markdown.replace(/\r\n?/g, "\n").trim();
    const lines = normalizedMarkdown.split("\n");
    const releaseStarts = lines.reduce<number[]>((starts, line, index) => {
        if (/^##(?:\s|$)/.test(line)) starts.push(index);
        return starts;
    }, []);

    if (releaseStarts.length === 0) {
        throw new Error("Changelog must contain at least one level-two release heading.");
    }

    const preamble = lines.slice(0, releaseStarts[0]).join("\n");
    if (!/^#\s+Changelog\s*$/m.test(preamble)) {
        throw new Error("Changelog must contain a title before its release headings.");
    }

    return releaseStarts.map((start, index) => {
        const end = releaseStarts[index + 1] ?? lines.length;
        return lines.slice(start, end).join("\n").trim();
    });
}

export function groupChangelogReleases(
    releases: string[],
    pageSize = RELEASES_PER_CHUNK
): string[][] {
    if (!Number.isInteger(pageSize) || pageSize <= 0) {
        throw new Error("Changelog page size must be a positive integer.");
    }

    const pages: string[][] = [];
    for (let index = 0; index < releases.length; index += pageSize) {
        pages.push(releases.slice(index, index + pageSize));
    }
    return pages;
}

async function buildChangelogPages(fetcher: ChangelogFetcher): Promise<ChangelogPage[]> {
    const response = await fetcher(CHANGELOG_URL);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch changelog: ${response.status} ${response.statusText}`.trim()
        );
    }

    const releases = splitChangelogReleases(await response.text());
    const chunks = groupChangelogReleases(releases);
    const totalPages = chunks.length;

    return Promise.all(
        chunks.map(async (chunk, index) => ({
            html: await renderMarkdown(chunk.join("\n\n")),
            page: index + 1,
            releaseCount: chunk.length,
            totalPages,
        }))
    );
}

let changelogPagesPromise: Promise<ChangelogPage[]> | undefined;

const defaultFetcher: ChangelogFetcher = (url) => fetch(url);

export function loadChangelogPages(
    fetcher: ChangelogFetcher = defaultFetcher
): Promise<ChangelogPage[]> {
    if (fetcher !== defaultFetcher) {
        return buildChangelogPages(fetcher);
    }

    changelogPagesPromise ??= buildChangelogPages(defaultFetcher);
    return changelogPagesPromise;
}
