import { renderMarkdown } from "./markdown.ts";

export const CHANGELOG_URL =
    "https://raw.githubusercontent.com/thebentobot/dotBento/master/CHANGELOG.md";
export const RELEASES_PER_CHUNK = 5;

export interface ChangelogPage {
    html: string;
    page: number;
    totalPages: number;
}

type ChangelogFetcher = (url: string) => Promise<Response>;

export const splitChangelogReleases = (markdown: string): string[] => {
    const normalizedMarkdown = markdown.replace(/\r\n?/g, "\n").trim();
    const lines = normalizedMarkdown.split("\n");
    const releaseStarts = lines.reduce<number[]>((starts, line, index) => {
        if (/^##(?:\s|$)/.test(line)) starts.push(index);
        return starts;
    }, []);

    if (releaseStarts.length === 0) {
        return [];
    }

    const preamble = lines.slice(0, releaseStarts[0]).join("\n");
    if (!/^#\s+Changelog\s*$/m.test(preamble)) {
        throw new Error("Changelog must contain a title before its release headings.");
    }

    return releaseStarts.map((start, index) => {
        const end = releaseStarts[index + 1] ?? lines.length;
        return lines.slice(start, end).join("\n").trim();
    });
};

export const groupChangelogReleases = (
    releases: string[],
    pageSize = RELEASES_PER_CHUNK
): string[][] => {
    if (!Number.isInteger(pageSize) || pageSize <= 0) {
        throw new Error("Changelog page size must be a positive integer.");
    }

    const pages: string[][] = [];
    for (let index = 0; index < releases.length; index += pageSize) {
        pages.push(releases.slice(index, index + pageSize));
    }
    return pages;
};

export const loadChangelogPages = async (
    fetcher: ChangelogFetcher = (url) => fetch(url)
): Promise<ChangelogPage[]> => {
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
            totalPages,
        }))
    );
};
