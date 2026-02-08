<script lang="ts">
    interface Props {
        label?: string;
        value?: number;
        min?: number;
        max?: number;
        step?: number;
        unit?: string;
        accentColor?: string;
    }

    let {
        label = "",
        value = $bindable(0),
        min = 0,
        max = 100,
        step = 1,
        unit = "%",
        accentColor = "#F59E0B",
    }: Props = $props();

    // Svelte two-way bind:value supported
    const clamped = $derived(Math.max(min, Math.min(max, value ?? 0)));
</script>

<label class="grid gap-1">
    {#if label}
        <span class="text-sm">{label}</span>
    {/if}
    <span
        class="flex items-center gap-3 p-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
    >
        <input
            type="range"
            class="w-full h-2 rounded-lg cursor-pointer bg-transparent"
            {min}
            {max}
            {step}
            bind:value
            style={`accent-color:${accentColor}`}
            aria-label={`${label} value`}
        />
        <span
            class="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 tabular-nums min-w-[3ch] text-center"
        >
            {clamped}{unit}
        </span>
    </span>
</label>

<style>
    @reference "../../styles/global.css";
</style>
