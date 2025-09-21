import {
    type LeaderboardResponseDto,
    type PatreonUserDto,
    type UsageStatsDto,
} from "../types/interfaces";

const API_URL = import.meta.env.API_URL || "https://your-default-api-url.com"; // or localhost:8080 if local dev
const API_KEY = import.meta.env.API_KEY || "your-default-api-key"; // Set in .env

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
            "X-Api-Key": API_KEY,
            ...options.headers,
        },
    });

    if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`API error: ${res.status} ${res.statusText} - ${errorBody}`);
    }

    return res.json();
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
