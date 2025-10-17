<script lang="ts">
  let { label = "", checked = $bindable(false), disabled = false } = $props();

  function onKey(e: KeyboardEvent) {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      checked = !checked;
    }
  }
</script>

<label class="flex items-center justify-between gap-3 select-none">
  {#if label}
    <span class="text-sm">{label}</span>
  {/if}
  <button
    type="button"
    role="switch"
    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500/60 hover:ring-2 hover:ring-yellow-500/40"
    class:bg-yellow-500={checked}
    class:bg-zinc-300={!checked}
    aria-checked={checked}
    aria-label={label}
    onclick={() => (checked = !checked)}
    onkeydown={onKey}
    {disabled}
  >
    <span
      class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition"
      style={`translate: ${checked ? '20px' : '2px'} 0;`}
    ></span>
  </button>
</label>

<style>
  @reference "../../styles/global.css";
</style>
