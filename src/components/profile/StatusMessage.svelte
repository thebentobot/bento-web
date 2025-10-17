<script lang="ts">
  const { error = null, saving = false, loading = false, savedAt = null } = $props<{ error: string | null; saving?: boolean; loading?: boolean; savedAt: Date | null }>();
</script>

<div class="min-h-[1.25rem] text-center">
  {#if error}
    <div class="text-sm text-red-600">{error}</div>
  {:else if saving}
    <div class="text-sm text-zinc-500">Saving…</div>
  {:else if loading}
    <div class="text-sm text-zinc-500">Loading…</div>
  {:else if savedAt}
    <div class="text-xs text-green-600">Saved at {savedAt.toLocaleTimeString()}</div>
  {/if}
</div>

<style>
  @reference "../../styles/global.css";
</style>
