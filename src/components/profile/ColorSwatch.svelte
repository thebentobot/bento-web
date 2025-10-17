<script lang="ts">
  let { label = "", color = $bindable("#ffffff"), showHex = true } = $props();

  let inputEl: HTMLInputElement | null = null;

  function openPicker() {
    inputEl?.click();
  }
</script>

<div class="grid gap-1">
  {#if label}
    <span class="text-sm">{label}</span>
  {/if}
  <div class="flex items-center gap-3">
    <!-- Swatch button (only this opens the native color picker) -->
    <button type="button" class="relative h-9 w-10 rounded-md border border-zinc-300 dark:border-zinc-700 overflow-hidden cursor-pointer hover:ring-2 hover:ring-yellow-500/70 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-zinc-900 transition-shadow" onclick={openPicker} aria-label={`${label} color`}>
      <span class="absolute inset-0 bg-[linear-gradient(45deg,_#ddd_25%,_transparent_25%),linear-gradient(-45deg,_#ddd_25%,_transparent_25%),linear-gradient(45deg,_transparent_75%,_#ddd_75%),linear-gradient(-45deg,_transparent_75%,_#ddd_75%)] bg-[length:8px_8px] bg-[position:0_0,0_4px,4px_-4px,-4px_0] dark:opacity-20"></span>
      <span class="absolute inset-0" style={`background-color:${color}`}></span>
    </button>
    {#if showHex}
      <span class="text-xs font-mono px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 select-all">
        {color}
      </span>
    {/if}
    <!-- Visually hidden native color input, positioned off-screen, only triggered by swatch -->
    <input bind:this={inputEl} type="color" bind:value={color} class="sr-only" tabindex="-1" aria-hidden="true" />
  </div>
</div>

<style>
  @reference "../../styles/global.css";
  /* Tailwind's sr-only for hidden input in case not included globally */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
