<script lang="ts">
    import "@skyra/discord-components-core";
    import { mode } from "mode-watcher";
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
        class?: string;
    }

    const { children, class: className = "" }: Props = $props();

    let lightMode = $state(mode.current === "light");

    $effect(() => {
        const observer = new MutationObserver(() => {
            lightMode = mode.current === "light";
        });

        // Observe <html class="dark"> or not
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Set once initially
        lightMode = mode.current === "light";

        return () => observer.disconnect();
    });
</script>

{#if lightMode}
    <discord-messages class={className} light-theme>
        {@render children?.()}
    </discord-messages>
{:else}
    <discord-messages class={className}>
        {@render children?.()}
    </discord-messages>
{/if}
