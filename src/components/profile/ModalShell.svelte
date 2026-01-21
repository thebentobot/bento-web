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
