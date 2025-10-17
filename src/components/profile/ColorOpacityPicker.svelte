<script lang="ts">
  export let label: string = "";
  export let color: string = "#ffffff";
  export let opacity: number | undefined = 100;
  export let showOpacity: boolean = true;
  export let min: number = 0;
  export let max: number = 100;
  export let step: number = 1;

  let inputEl: HTMLInputElement | null = null;
  function openPicker() { inputEl?.click(); }

  // expose bindings
  // Svelte allows parent bind:color, bind:opacity
  $: pct = typeof opacity === "number" ? Math.max(min, Math.min(max, opacity)) : undefined;
</script>

<div class="grid gap-1">
  {#if label}
    <span class="text-sm">{label}</span>
  {/if}
  <div class="flex items-center gap-3 p-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
    <!-- Swatch button triggers hidden native color input (only swatch opens the picker) -->
    <button type="button" class="relative h-9 w-10 rounded-md border border-zinc-300 dark:border-zinc-700 overflow-hidden cursor-pointer hover:ring-2 hover:ring-yellow-500/70 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-zinc-900 transition-shadow" on:click={openPicker} aria-label={`${label} color`}>
      <div class="absolute inset-0 bg-[linear-gradient(45deg,_#ddd_25%,_transparent_25%),linear-gradient(-45deg,_#ddd_25%,_transparent_25%),linear-gradient(45deg,_transparent_75%,_#ddd_75%),linear-gradient(-45deg,_transparent_75%,_#ddd_75%)] bg-[length:8px_8px] bg-[position:0_0,0_4px,4px_-4px,-4px_0] dark:opacity-20"></div>
      <div class="absolute inset-0" style={`background-color:${color}`}></div>
    </button>
    <input bind:this={inputEl} type="color" bind:value={color} class="sr-only" tabindex="-1" aria-hidden="true" />

    {#if showOpacity}
      <div class="flex-1 flex items-center gap-3">
        <input
          type="range"
          class="w-full h-2 rounded-lg cursor-pointer bg-transparent"
          min={min}
          max={max}
          step={step}
          bind:value={opacity}
          style={`accent-color:${color}`}
          aria-label={`${label} opacity`}
        />
        <span class="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 tabular-nums">
          {pct ?? 0}%
        </span>
      </div>
    {/if}
  </div>
</div>

<style>
  @reference "../../styles/global.css";
  .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}
</style>
