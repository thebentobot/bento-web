import type { APIRoute } from "astro";
import type { ProfilePatch } from "../../library/types/interfaces";
import { fetchUserProfile, saveUserProfile } from "../../library/server/bentoApi";

export const GET: APIRoute = async ({ request }) => {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get("userId");
        if (!userId) {
            return new Response(JSON.stringify({ error: "Missing userId" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
        const data = await fetchUserProfile(userId);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};

export const POST: APIRoute = async ({ request }) => {
    try {
        const profile = (await request.json()) as ProfilePatch;
        const idOk = typeof profile?.UserId === "string" && /^\d+$/.test(profile.UserId);
        if (!profile || !idOk) {
            return new Response(
                JSON.stringify({ error: "Invalid profile payload: missing or invalid UserId" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
        await saveUserProfile(profile);
        return new Response(null, { status: 204 });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
