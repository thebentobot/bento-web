<script lang="ts">
    import { onMount } from "svelte";
    let {
        label = "Description",
        value = $bindable(""),
        maxLength = 500,
        placeholder = "Profile bio",
    } = $props();

    let textareaEl: HTMLTextAreaElement | null = null;

    function resize() {
        if (!textareaEl) return;
        // Set to 0 to ensure shrink works even after large content
        textareaEl.style.height = "0px";
        const next = textareaEl.scrollHeight;
        // Fallback to minimum of 3 rows visually
        const min = 3 * 20; // approximate line height 20px
        textareaEl.style.height = Math.max(next, min) + "px";
    }

    onMount(() => {
        resize();
    });

    $effect(() => {
        if (typeof value === "string") resize();
    });

    const count = $derived(value?.length ?? 0);
    const remaining = $derived(Math.max(0, maxLength - count));
    const counterClass = $derived(
        remaining < 20 ? "text-red-500" : remaining < 50 ? "text-amber-500" : "text-zinc-500"
    );
</script>

<label class="grid gap-1">
    <span class="text-sm text-zinc-600 dark:text-zinc-400"
        >{label} (Max length of {maxLength} characters)</span
    >
    <span
        class="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-zinc-900"
    >
        <textarea
            bind:this={textareaEl}
            class="w-full resize-none px-3 py-2 rounded-md bg-transparent outline-none placeholder:text-zinc-400 leading-5"
            rows="3"
            maxlength={maxLength}
            bind:value
            {placeholder}
        ></textarea>
    </span>
    <span class="text-xs {counterClass} text-right tabular-nums">{remaining} left</span>
</label>

<style>
    @reference "../../styles/global.css";
</style>
