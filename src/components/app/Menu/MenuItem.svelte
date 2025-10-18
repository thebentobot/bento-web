<script lang="ts">
    import Icon from "../Icon.svelte";
    import type { IconName } from "../icons";

    const {
        icon,
        label,
        href = undefined,
        disabled = false,
        title = undefined,
        role = "menuitem",
    } = $props<{
        icon: IconName;
        label: string;
        href?: string;
        disabled?: boolean;
        title?: string;
        role?: string;
    }>();
</script>

{#if href && !disabled}
    <a
        {href}
        {role}
        class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
        {title}
    >
        <Icon name={icon} className="h-5 w-5" />
        <span class="text-sm font-medium">{label}</span>
    </a>
{:else}
    <div
        {role}
        class={`flex items-center gap-2 px-3 py-2 rounded-md ${disabled ? "text-zinc-400 dark:text-zinc-600 cursor-not-allowed" : "hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"}`}
        aria-disabled={disabled}
        {title}
    >
        <Icon name={icon} className={disabled ? "h-4 w-4" : "h-5 w-5"} />
        <span class={disabled ? "" : "text-sm font-medium"}>{label}</span>
    </div>
{/if}
