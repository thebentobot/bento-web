<script lang="ts">
    import { actions } from "astro:actions";
    import { onMount } from "svelte";
    import { FormatThousands } from "../../library/utils";

    let stats = $state<{ userCount: number; serverCount: number } | null>(null);
    let loading = $state(true);
    let error = $state<string | null>(null);

    onMount(async () => {
        try {
            const { data } = await actions.getUsageStats();
            if (data) {
                stats = data;
            }
        } catch (e) {
            console.error("Failed to fetch usage stats:", e);
            error = e instanceof Error ? e.message : "Failed to load stats";
        } finally {
            loading = false;
        }
    });

    const users = $derived(stats ? FormatThousands(stats.userCount) : "0");
    const servers = $derived(stats ? stats.serverCount.toString() : "0");
</script>

{#if loading}
    <!-- Skeleton loader -->
    <div class="mt-10 pb-1">
        <div class="relative">
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <dl class="sm:grid sm:grid-cols-3">
                        <div class="flex flex-col p-6 text-center">
                            <dt
                                class="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black"
                            >
                                Servers
                            </dt>
                            <div class="flex gap-x-2 justify-center items-center h-12">
                                <span class="sr-only">Loading...</span>
                                <div
                                    class="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.3s]"
                                ></div>
                                <div
                                    class="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.15s]"
                                ></div>
                                <div
                                    class="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce"
                                ></div>
                            </div>
                        </div>
                        <div class="flex flex-col p-6 text-center">
                            <dt
                                class="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black"
                            >
                                Users
                            </dt>
                            <div class="flex gap-x-2 justify-center items-center h-12">
                                <span class="sr-only">Loading...</span>
                                <div
                                    class="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.3s]"
                                ></div>
                                <div
                                    class="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.15s]"
                                ></div>
                                <div
                                    class="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce"
                                ></div>
                            </div>
                        </div>
                        <div class="flex flex-col p-6 text-center">
                            <dt
                                class="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black"
                            >
                                Serving the first Bento
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold dark:text-white text-black">
                                Aug 2021
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
{:else if error}
    <div class="mt-10 pb-1 text-center">
        <p class="text-red-500 dark:text-red-400">Failed to load stats</p>
    </div>
{:else if stats}
    <div class="mt-10 pb-1">
        <div class="relative">
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <dl class="sm:grid sm:grid-cols-3">
                        <div class="flex flex-col p-6 text-center">
                            <dt
                                class="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black"
                            >
                                Servers
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold dark:text-white text-black">
                                {servers}
                            </dd>
                        </div>
                        <div class="flex flex-col p-6 text-center">
                            <dt
                                class="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black"
                            >
                                Users
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold dark:text-white text-black">
                                {users}
                            </dd>
                        </div>
                        <div class="flex flex-col p-6 text-center">
                            <dt
                                class="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black"
                            >
                                Serving the first Bento
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold dark:text-white text-black">
                                Aug 2021
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
{/if}
