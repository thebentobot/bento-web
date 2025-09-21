<script lang="ts">
    import Icon from "../Icon.svelte";
    import type { IconName } from "../icons";
    export let name: IconName;
    export let active: boolean = false;
    export let title: string = "";
    export let ariaLabel: string = title;
</script>

<button
    class={`flex-1 py-2 rounded-md border transition-colors duration-200 flex items-center justify-center cursor-pointer ${active ? "bg-yellow-400 text-black border-yellow-400" : "border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
    {title}
    aria-label={ariaLabel}
    role="menuitem"
    on:click
    type="button"
>
    <Icon {name} className="h-4 w-4" />
    <slot />
</button>
