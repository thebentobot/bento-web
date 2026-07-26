import type { APIRoute, GetStaticPaths } from "astro";
import { loadChangelogPages, type ChangelogPage } from "../../../library/server/changelog.ts";

export const prerender = true;

export const getStaticPaths = (async () => {
    const pages = await loadChangelogPages();

    return pages.slice(1).map((page) => ({
        params: { page: String(page.page) },
        props: page,
    }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<ChangelogPage> = ({ props }) =>
    new Response(JSON.stringify(props), {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
