<script lang="ts">
    import "@skyra/discord-components-core";
    import { mode } from "mode-watcher";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import type { Snippet } from "svelte";

    const { children } = $props<{ children?: Snippet }>();

    const lightMode = writable(mode.current === "light");

    onMount(() => {
        const observer = new MutationObserver(() => {
            lightMode.set(mode.current === "light");
        });

        // Observe <html class="dark"> or not
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Set once initially
        lightMode.set(mode.current === "light");

        return () => observer.disconnect();
    });
</script>

{#if $lightMode}
    <discord-messages light-theme>
        {@render children?.()}
    </discord-messages>
{:else}
    <discord-messages>
        {@render children?.()}
    </discord-messages>
{/if}
