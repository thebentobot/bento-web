<script lang="ts">
    import Icon from "../app/Icon.svelte";

    let {
        open = $bindable(false),
        onConfirm = null as (() => Promise<void>) | null,
        loading = null as boolean | null,
        title = "Sign out",
        description = "Are you sure you want to sign out?",
        confirmText = "Confirm",
        cancelText = "Cancel",
        loadingText = "Signing out…",
    } = $props<{
        open?: boolean;
        onConfirm?: (() => Promise<void>) | null;
        loading?: boolean | null;
        title?: string;
        description?: string;
        confirmText?: string;
        cancelText?: string;
        loadingText?: string;
    }>();

    // Local state (mutable => let)
    let internalLoading = $state(false);

    function Close() {
        // works because open is $bindable
        open = false;
    }

    // Minimal portal action to move modal to document.body (SSR-safe)
    function Portal(node: HTMLElement) {
        if (typeof document !== "undefined") {
            document.body.appendChild(node);
            return {
                destroy() {
                    if (node.parentNode) node.parentNode.removeChild(node);
                },
            };
        }
        return {
            destroy() {},
        };
    }

    async function HandleConfirm() {
        if (!onConfirm) return;

        if (loading === null) {
            if (internalLoading) return;
            internalLoading = true;
            try {
                await onConfirm();
            } finally {
                internalLoading = false;
            }
        } else {
            await onConfirm();
        }
    }

    // Derived (read-only => const)
    const isLoading = $derived(loading === null ? internalLoading : loading);

    // Lock body scroll while modal is open (SSR-safe) with cleanup
    $effect(() => {
        if (typeof document === "undefined") return;
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            if (document.body.style.overflow === "hidden") {
                document.body.style.overflow = "";
            }
        };
    });
</script>

{#if open}
    <div use:Portal class="fixed inset-0 z-[10000] flex items-center justify-center">
        <div
            role="button"
            tabindex="0"
            aria-label="Close modal"
            class="absolute inset-0 z-[10000] bg-black/60 backdrop-blur-[2px]"
            onclick={Close}
            onkeydown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    Close();
                }
            }}
        ></div>
        <div
            role="dialog"
            aria-modal="true"
            class="relative z-[10001] w-11/12 max-w-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg p-4"
        >
            <div class="flex items-start gap-3">
                <Icon name="logout" className="h-6 w-6 text-yellow-500" />
                <div class="min-w-0">
                    <div class="font-semibold text-zinc-900 dark:text-zinc-100">{title}</div>
                    <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
                </div>
            </div>
            <div class="mt-4 flex justify-end gap-2">
                <button
                    type="button"
                    class="px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm cursor-pointer"
                    onclick={Close}
                >
                    {cancelText}
                </button>
                <button
                    type="button"
                    class="px-3 py-1.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium disabled:opacity-60 cursor-pointer"
                    onclick={HandleConfirm}
                    disabled={!!isLoading}
                >
                    {isLoading ? loadingText : confirmText}
                </button>
            </div>
        </div>
    </div>
{/if}
