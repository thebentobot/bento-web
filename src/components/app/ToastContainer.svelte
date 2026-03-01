<script lang="ts">
    import { toasts, removeToast } from "../../library/stores/toast.svelte";
</script>

{#if toasts.length > 0}
    <div class="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {#each toasts as toast (toast.id)}
            <div
                role="alert"
                class="flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-sm font-medium animate-[toast-slide-in_300ms_ease-out]"
                class:bg-green-600={toast.type === "success"}
                class:text-white={toast.type === "success"}
                class:bg-red-600={toast.type === "error"}
                class:text-red-50={toast.type === "error"}
            >
                <span class="flex-1">{toast.message}</span>
                <button
                    class="ml-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                    onclick={() => removeToast(toast.id)}
                    aria-label="Dismiss">&times;</button
                >
            </div>
        {/each}
    </div>
{/if}
