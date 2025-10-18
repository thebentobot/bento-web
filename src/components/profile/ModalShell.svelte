<script lang="ts">
    import type { Snippet } from "svelte";
    const {
        title = "",
        onClose,
        children,
    } = $props<{ title?: string; onClose: () => void; children?: Snippet }>();

    function onKeyActivate(e: KeyboardEvent, cb: () => void) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            cb();
        }
    }
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center">
    <div
        class="absolute inset-0 bg-black/40"
        role="button"
        tabindex="0"
        aria-label="Close modal"
        onkeydown={(e) => onKeyActivate(e, onClose)}
        onclick={onClose}
    ></div>
    <div
        class="relative z-10 w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-lg mx-4 sm:mx-6"
    >
        <div class="flex items-center justify-between mb-3">
            <h3 class="font-semibold text-lg">{title}</h3>
            <button class="btn-secondary" onclick={onClose}>Close</button>
        </div>
        {@render children?.()}
    </div>
</div>

<style>
    @reference "../../styles/global.css";
    .btn-secondary {
        @apply px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 disabled:opacity-60 cursor-pointer transition-colors;
    }
</style>
