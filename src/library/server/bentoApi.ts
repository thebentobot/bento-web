import {
    type LeaderboardResponseDto,
    type PatreonUserDto,
    type ProfileDto,
    type ProfilePatch,
    type UsageStatsDto,
} from "../types/interfaces";

if (!import.meta.env.API_URL) {
    throw new Error("API_URL environment variable is not set. Please configure API_URL.");
}
const API_URL = import.meta.env.API_URL;
const API_KEY = import.meta.env.API_KEY; // Only set if provided

/*global RequestInit*/
/*eslint no-undef: "error"*/
interface FetchOptions extends RequestInit {
    headers?: Record<string, string>;
    params?: Record<string, string | number>;
}

export async function fetchFromApi<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const url = new URL(`${API_URL}${endpoint}`);

    if (options.params) {
        Object.entries(options.params).forEach(([key, value]) =>
            url.searchParams.append(key, String(value))
        );
    }

    // eslint-disable-next-line no-undef
    const res = await fetch(url.toString(), {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(API_KEY ? { "X-Api-Key": API_KEY } : {}),
            ...options.headers,
        },
    });

    if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`API error: ${res.status} ${res.statusText} - ${errorBody}`);
    }

    // Handle 204 No Content or empty body safely
    if (res.status === 204) {
        return undefined as T;
    }
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        // Not JSON or empty; return undefined
        return undefined as T;
    }

    return (await res.json()) as T;
}

export async function fetchPatreonUsers(): Promise<PatreonUserDto[]> {
    return fetchFromApi<PatreonUserDto[]>("/Information/Patreon");
}

export async function fetchLeaderboardUsersForServer(
    serverId: string
): Promise<LeaderboardResponseDto> {
    const response = await fetchFromApi<LeaderboardResponseDto>(
        `/Information/Leaderboard/${serverId}`
    );
    if (!response || !response.users) {
        throw new Error("Invalid response from server");
    }
    return response;
}

export async function fetchLeaderboardUsers(): Promise<LeaderboardResponseDto> {
    return fetchFromApi<LeaderboardResponseDto>("/Information/Leaderboard");
}

export async function fetchUsageStats(): Promise<UsageStatsDto> {
    return fetchFromApi<UsageStatsDto>("/Information/UsageStats");
}

function lowerFirst(s: string): string {
    return s.length ? s.charAt(0).toLowerCase() + s.slice(1) : s;
}

export function normalizeProfileDto(raw: unknown): ProfileDto {
    const r = (raw as Record<string, unknown>) || {};
    const get = (key: string) => (r[key] ?? r[lowerFirst(key)]) as unknown;
    const uidRaw = get("UserId") ?? get("userID") ?? get("userId");
    const uidStr = typeof uidRaw === "string" ? uidRaw : uidRaw != null ? String(uidRaw) : "";
    // Build object with our expected PascalCase keys, accepting either exact or camelCase inputs
    const obj: Partial<ProfileDto> = {
        UserId: uidStr,
        LastfmBoard: get("LastfmBoard") as boolean | null,
        XpBoard: get("XpBoard") as boolean | null,
        BackgroundUrl: get("BackgroundUrl") as string | null,
        BackgroundColourOpacity: get("BackgroundColourOpacity") as number | null,
        BackgroundColour: get("BackgroundColour") as string | null,
        DescriptionColourOpacity: get("DescriptionColourOpacity") as number | null,
        DescriptionColour: get("DescriptionColour") as string | null,
        OverlayOpacity: get("OverlayOpacity") as number | null,
        OverlayColour: get("OverlayColour") as string | null,
        UsernameColour: get("UsernameColour") as string | null,
        DiscriminatorColour: get("DiscriminatorColour") as string | null,
        SidebarItemServerColour: get("SidebarItemServerColour") as string | null,
        SidebarItemGlobalColour: get("SidebarItemGlobalColour") as string | null,
        SidebarItemBentoColour: get("SidebarItemBentoColour") as string | null,
        SidebarItemTimezoneColour: get("SidebarItemTimezoneColour") as string | null,
        SidebarValueServerColour: get("SidebarValueServerColour") as string | null,
        SidebarValueGlobalColour: get("SidebarValueGlobalColour") as string | null,
        SidebarValueBentoColour: get("SidebarValueBentoColour") as string | null,
        SidebarOpacity: get("SidebarOpacity") as number | null,
        SidebarColour: get("SidebarColour") as string | null,
        SidebarBlur: get("SidebarBlur") as number | null,
        FmDivBgopacity: get("FmDivBgopacity") as number | null,
        FmDivBgcolour: get("FmDivBgcolour") as string | null,
        FmSongTextOpacity: get("FmSongTextOpacity") as number | null,
        FmSongTextColour: get("FmSongTextColour") as string | null,
        FmArtistTextOpacity: get("FmArtistTextOpacity") as number | null,
        FmArtistTextColour: get("FmArtistTextColour") as string | null,
        XpDivBgopacity: get("XpDivBgopacity") as number | null,
        XpDivBgcolour: get("XpDivBgcolour") as string | null,
        XpTextOpacity: get("XpTextOpacity") as number | null,
        XpTextColour: get("XpTextColour") as string | null,
        XpText2Opacity: get("XpText2Opacity") as number | null,
        XpText2Colour: get("XpText2Colour") as string | null,
        XpDoneServerColour1Opacity: get("XpDoneServerColour1Opacity") as number | null,
        XpDoneServerColour1: get("XpDoneServerColour1") as string | null,
        XpDoneServerColour2Opacity: get("XpDoneServerColour2Opacity") as number | null,
        XpDoneServerColour2: get("XpDoneServerColour2") as string | null,
        XpDoneServerColour3Opacity: get("XpDoneServerColour3Opacity") as number | null,
        XpDoneServerColour3: get("XpDoneServerColour3") as string | null,
        XpDoneGlobalColour1Opacity: get("XpDoneGlobalColour1Opacity") as number | null,
        XpDoneGlobalColour1: get("XpDoneGlobalColour1") as string | null,
        XpDoneGlobalColour2Opacity: get("XpDoneGlobalColour2Opacity") as number | null,
        XpDoneGlobalColour2: get("XpDoneGlobalColour2") as string | null,
        XpDoneGlobalColour3Opacity: get("XpDoneGlobalColour3Opacity") as number | null,
        XpDoneGlobalColour3: get("XpDoneGlobalColour3") as string | null,
        Description: get("Description") as string | null,
        Timezone: get("Timezone") as string | null,
        Birthday: get("Birthday") as string | null,
        XpBarOpacity: get("XpBarOpacity") as number | null,
        XpBarColour: get("XpBarColour") as string | null,
        XpBar2Opacity: get("XpBar2Opacity") as number | null,
        XpBar2Colour: get("XpBar2Colour") as string | null,
    };
    return obj as ProfileDto;
}

export async function fetchUserProfile(userId: string | number): Promise<ProfileDto> {
    const raw = await fetchFromApi<unknown>(`/Profile/${userId}`);
    return normalizeProfileDto(raw);
}

function buildProfilePayload(profile: ProfilePatch | ProfileDto): string {
    // Serialize and ensure UserId (string of digits) is sent as an unquoted numeric literal
    const json = JSON.stringify(profile);
    return json.replace(/"UserId":"(\d+)"/, '"UserId":$1');
}

export async function saveUserProfile(profile: ProfilePatch): Promise<void> {
    // Must be called server-side. Client code should use Astro Server Actions.
    if (typeof window !== "undefined") {
        throw new Error("saveUserProfile must be called on the server. Use astro:actions from client code.");
    }

    // On the server, call upstream API directly with corrected numeric literal for UserId
    await fetchFromApi<void>("/Profile", {
        method: "POST",
        body: buildProfilePayload(profile),
    });
}
