<script lang="ts">
  const { saving = false, hasChanges = false, onSave = null, onReset = null, saveLabel = "Save Changes", resetLabel = "Reset changes" } = $props<{ saving?: boolean; hasChanges?: boolean; onSave?: (() => void) | null; onReset?: (() => void) | null; saveLabel?: string; resetLabel?: string }>();
</script>

<div class="flex items-center gap-3">
  <button class="btn" on:click={() => onSave?.()} disabled={saving || !hasChanges}>
    {saving ? "Saving…" : saveLabel}
  </button>
  {#if hasChanges && onReset}
    <button class="btn-secondary" on:click={() => onReset?.()}>{resetLabel}</button>
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
