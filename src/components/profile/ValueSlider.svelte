<script lang="ts">
  export let label: string = "";
  export let value: number = 0;
  export let min: number = 0;
  export let max: number = 100;
  export let step: number = 1;
  export let unit: string = "%"; // e.g., "%" or "px"
  export let accentColor: string = "#F59E0B"; // amber-500 default

  // Svelte two-way bind:value supported
  $: clamped = Math.max(min, Math.min(max, value ?? 0));
</script>

<label class="grid gap-1">
  {#if label}
    <span class="text-sm">{label}</span>
  {/if}
  <div class="flex items-center gap-3 p-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
    <input
      type="range"
      class="w-full h-2 rounded-lg cursor-pointer bg-transparent"
      min={min}
      max={max}
      step={step}
      bind:value={value}
      style={`accent-color:${accentColor}`}
      aria-label={`${label} value`}
    />
    <span class="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 tabular-nums min-w-[3ch] text-center">
      {clamped}{unit}
    </span>
  </div>
</label>

<style>
  @reference "../../styles/global.css";
</style>
