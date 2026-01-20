<script lang="ts">
    import { actions } from "astro:actions";
    import { onMount } from "svelte";
    import type { PatreonsByTier } from "../../library/server/patreon";
    import PatreonUser from "./PatreonUser.svelte";

    let patreons = $state<PatreonsByTier | null>(null);
    let loading = $state(true);
    let error = $state<string | null>(null);

    onMount(async () => {
        try {
            const { data } = await actions.getPatreonUsers();
            if (data) {
                patreons = data;
            }
        } catch (e) {
            console.error("Failed to fetch patreon users:", e);
            error = e instanceof Error ? e.message : "Failed to load patreon supporters";
        } finally {
            loading = false;
        }
    });

    const categories = $derived(
        patreons
            ? [
                  { data: patreons.sponsors, label: "Sponsor" },
                  { data: patreons.disciples, label: "Disciple" },
                  { data: patreons.enthusiasts, label: "Enthusiast" },
                  { data: patreons.followers, label: "Follower" },
                  { data: patreons.supporters, label: "Supporter" },
              ]
            : []
    );

    const areAllCategoriesEmpty = $derived(
        categories.every((category) => category.data.length === 0)
    );
</script>

{#if loading}
    <!-- Skeleton loader -->
    <div class="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
        <div
            class="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 text-center mb-4"
        >
            Patreon Tier
        </div>
        <ul class="block flex-wrap mx-auto text-center w-full">
            <li class="mx-auto inline-block p-1 w-full sm:w-auto">
                <div
                    class="transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-100 flex flex-wrap items-center w-full sm:w-96 my-4 px-4 rounded-lg shadow-xs overflow-hidden animate-pulse"
                >
                    <div class="shrink-0 truncate text-left py-5 mx-auto">
                        <div class="rounded-full bg-zinc-300 dark:bg-zinc-700 w-20 h-20 mx-4"></div>
                    </div>
                    <div class="grow p-4 w-full md:w-auto overflow-hidden">
                        <div class="h-6 bg-zinc-300 dark:bg-zinc-700 rounded w-32 mx-auto lg:mx-0">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
{:else if error}
    <div class="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2 text-center">
        <p class="text-red-500 dark:text-red-400">Failed to load patreon supporters</p>
    </div>
{:else if areAllCategoriesEmpty}
    <div class="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
        <p class="mt-4 max-w-2xl text-xl text-zinc-300 lg:mx-auto text-center mx-auto">
            Other than the awesome users who support by using Bento 🍱
            <br />
            no <strong>Patrons</strong> on
            <a
                href="https://www.patreon.com/bentobot"
                target="_blank"
                rel="noreferrer"
                class="text-patreon hover:underline"
            >
                Patreon
            </a>
            at the moment.
        </p>
    </div>
{:else}
    {#each categories as category (category.label)}
        {#if category.data.length > 0}
            <div class="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
                <h2
                    class="mt-2 text-2xl leading-7 font-semibold text-yellow-400 dark:text-yellow-300 text-center"
                >
                    {category.data.length > 1
                        ? `Bento ${category.label}s`
                        : `Bento ${category.label}`}
                </h2>
                <ul class="block flex-wrap mx-auto text-center w-full">
                    {#each category.data as patreonUser (patreonUser.userId)}
                        <li class="mx-auto inline-block p-1 w-full sm:w-auto">
                            <PatreonUser user={patreonUser} />
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    {/each}
{/if}
