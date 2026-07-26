<script lang="ts">
    interface Props {
        totalPages: number;
    }

    interface ChangelogChunk {
        html: string;
        page: number;
        totalPages: number;
    }

    const { totalPages }: Props = $props();

    let chunks: ChangelogChunk[] = $state([]);
    let nextPage = $state(2);
    let loading = $state(false);
    let loadError = $state(false);
    let sentinel: HTMLDivElement;

    const LoadNextPage = async (): Promise<boolean> => {
        if (loading || nextPage > totalPages) return false;

        loading = true;
        loadError = false;

        try {
            const response = await fetch(`/changelog/chunks/${nextPage}.json`, {
                headers: { Accept: "application/json" },
            });
            if (!response.ok) {
                throw new Error(`Changelog chunk request failed with ${response.status}.`);
            }

            const chunk = (await response.json()) as ChangelogChunk;
            if (
                chunk.page !== nextPage ||
                chunk.totalPages !== totalPages ||
                typeof chunk.html !== "string"
            ) {
                throw new Error("Changelog chunk response was invalid.");
            }

            chunks.push(chunk);
            nextPage += 1;
            return true;
        } catch (error) {
            console.error("Failed to load older changelog releases.", error);
            loadError = true;
            return false;
        } finally {
            loading = false;
        }
    };

    const Retry = () => void LoadNextPage();

    $effect(() => {
        if (!sentinel || loading || loadError || nextPage > totalPages) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    void LoadNextPage();
                }
            },
            {
                rootMargin: "400px 0px",
            }
        );
        observer.observe(sentinel);

        return () => observer.disconnect();
    });
</script>

<div
    class="prose dark:prose-invert lg:prose-xl mx-auto dark:prose-h1:text-white prose-h1:text-black prose-h2:text-yellow-400 dark:prose-h3:text-white prose-h3:text-black dark:prose-p:text-white prose-p:text-black dark:prose-ul:text-white prose-ul:text-black prose-strong:text-yellow-400 prose-a:text-yellow-400"
    aria-busy={loading}
>
    {#each chunks as chunk (chunk.page)}
        <!-- The HTML is generated from the trusted changelog during the site build. -->
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html chunk.html}
    {/each}
</div>

{#if nextPage <= totalPages}
    <div bind:this={sentinel} class="mx-auto flex min-h-20 max-w-prose items-center justify-center">
        {#if loadError}
            <div class="flex flex-col items-center gap-3 text-center">
                <p role="alert" class="text-sm text-red-600 dark:text-red-400">
                    Could not load older releases.
                </p>
                <button
                    type="button"
                    onclick={Retry}
                    class="cursor-pointer rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-yellow-500 dark:hover:bg-yellow-600"
                    disabled={loading}
                >
                    Try again
                </button>
            </div>
        {:else if loading}
            <div role="status" class="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <span class="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.3s]"
                ></span>
                <span
                    class="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.15s]"
                ></span>
                <span class="h-2 w-2 animate-bounce rounded-full bg-current"></span>
                <span class="sr-only">Loading older releases</span>
            </div>
        {/if}
    </div>
{/if}
