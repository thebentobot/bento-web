<script lang="ts">
    import { actions } from "astro:actions";
    import { onMount } from "svelte";
    import type { LeaderboardResponseDto } from "../../library/types/interfaces";
    import LeaderboardUser from "./LeaderboardUser.svelte";

    const { serverId } = $props<{ serverId: string | undefined }>();

    let rankings = $state<LeaderboardResponseDto | null>(null);
    let loading = $state(true);
    let error = $state<string | null>(null);

    onMount(async () => {
        try {
            const { data } = await actions.getLeaderboard({ serverId });
            if (data) {
                rankings = data;
            }
        } catch (e) {
            console.error("Error fetching leaderboard data:", e);
            error = e instanceof Error ? e.message : "An unknown error occurred";
        } finally {
            loading = false;
        }
    });
</script>

{#if loading}
    <!-- Skeleton loader -->
    <div class="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
        <div class="h-8 bg-zinc-300 dark:bg-zinc-700 rounded w-64 mx-auto mb-8 animate-pulse"></div>
        <ul class="relative">
            {#each [1, 2, 3] as num (num)}
                <li
                    class="transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-100 flex items-center w-full my-4 p-2 px-4 rounded-lg shadow-xs overflow-hidden animate-pulse"
                >
                    <div class="shrink-0 w-72 truncate text-left flex items-center">
                        <div
                            class="inline-block dark:bg-zinc-800 bg-zinc-200 px-2 py-1 rounded-md w-8 h-6"
                        ></div>
                        <div class="w-16 h-16 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-4"></div>
                        <div class="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-32"></div>
                    </div>
                    <div class="grow p-4 w-full md:w-auto">
                        <div class="h-1 bg-zinc-300 dark:bg-zinc-700 rounded w-full"></div>
                    </div>
                    <div class="p-4 h-20 flex md:w-auto items-center">
                        <div class="h-8 w-16 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
{:else if error}
    <div class="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
        <div
            class="transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-100 flex items-center w-full my-4 p-4 px-6 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 shadow-lg overflow-hidden group"
            role="alert"
        >
            <div class="shrink-0 mr-4">
                <div
                    class="transition duration-300 ease-in-out inline-block dark:bg-zinc-700 bg-zinc-300 p-3 rounded-md dark:group-hover:bg-zinc-600 group-hover:bg-zinc-400"
                >
                    <svg
                        class="h-6 w-6 dark:text-zinc-300 text-zinc-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div class="grow">
                <h1
                    class="transition duration-300 ease-in-out dark:text-zinc-200 dark:group-hover:text-white text-zinc-800 group-hover:text-zinc-900 font-bold"
                >
                    Error
                </h1>
                <p
                    class="transition duration-300 ease-in-out dark:text-zinc-400 dark:group-hover:text-zinc-300 text-zinc-600 group-hover:text-zinc-700"
                >
                    Invalid Server ID for the leaderboard page
                </p>
                <p
                    class="transition duration-300 ease-in-out dark:text-zinc-500 dark:group-hover:text-zinc-400 text-zinc-500 group-hover:text-zinc-600 mt-2"
                >
                    Please check if the server ID is correct and try again.
                </p>
            </div>
        </div>
    </div>
{:else if rankings}
    <h1
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center"
    >
        Leaderboard for {rankings.guildName ?? "Bento"}
    </h1>
    {#if serverId && rankings.icon}
        <div
            class="dark:bg-zinc-900/50 bg-zinc-100/50 mx-auto my-auto p-1 mt-8 w-64 rounded-sm shadow-lg"
        >
            <img
                width={256}
                height={256}
                class="mx-auto shadow-lg dark:bg-zinc-800 bg-zinc-200"
                src={rankings.icon}
                alt="Server Icon"
            />
        </div>
    {/if}
    <div class="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
        <ul class="relative">
            {#each rankings.users || [] as discordUser (discordUser.userId)}
                <div class="shadow-lg">
                    <LeaderboardUser {...discordUser} />
                </div>
            {/each}
        </ul>
    </div>
{/if}
