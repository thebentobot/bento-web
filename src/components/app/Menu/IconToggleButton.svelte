<script lang="ts">
    import Icon from "../Icon.svelte";
    import type { IconName } from "../icons";
    import type { Snippet } from "svelte";

    interface Props {
        name: IconName;
        active?: boolean;
        title?: string;
        ariaLabel?: string;
        children?: Snippet;
        onclick?: (e: MouseEvent) => void;
    }

    const {
        name,
        active = false,
        title = "",
        ariaLabel = title,
        children,
        onclick,
    }: Props = $props();
</script>

<button
    class={`flex-1 py-2 rounded-md border transition-colors duration-200 flex items-center justify-center cursor-pointer ${active ? "bg-yellow-400 text-black border-yellow-400" : "border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
    {title}
    aria-label={ariaLabel}
    role="menuitem"
    {onclick}
    type="button"
>
    <Icon {name} class="h-4 w-4" />
    {#if children}
        {@render children()}
    {/if}
</button>
