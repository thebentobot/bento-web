<script lang="ts">
    interface Props {
        saving?: boolean;
        hasChanges?: boolean;
        onSave?: (() => void) | null;
        onReset?: (() => void) | null;
        saveLabel?: string;
        resetLabel?: string;
        responsive?: boolean;
    }

    const {
        saving = false,
        hasChanges = false,
        onSave = null,
        onReset = null,
        saveLabel = "Save Changes",
        resetLabel = "Reset changes",
        responsive = false,
    }: Props = $props();
</script>

<div
    class={responsive
        ? "flex items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap w-full md:w-auto"
        : "flex items-center gap-3"}
>
    <button
        class={responsive ? "btn w-full md:w-auto text-sm md:text-base" : "btn"}
        onclick={() => onSave?.()}
        disabled={saving || !hasChanges}
    >
        {saving ? "Saving…" : saveLabel}
    </button>
    {#if onReset}
        <button
            class={responsive
                ? "btn-secondary w-full md:w-auto text-sm md:text-base"
                : "btn-secondary"}
            onclick={() => onReset?.()}
            disabled={!hasChanges}>{resetLabel}</button
        >
    {/if}
</div>

<style>
    @reference "../../styles/global.css";
    .btn {
        @apply px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-60 cursor-pointer transition-colors;
    }

    .btn-secondary {
        @apply px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 disabled:opacity-60 cursor-pointer transition-colors;
    }
</style>
