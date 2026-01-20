<script lang="ts">
    import Icon from "../app/Icon.svelte";
    import { svelteAuthClient } from "../../library/auth-client";
    import SignOutConfirmModal from "./SignOutConfirmModal.svelte";

    const { size = "sm" } = $props<{ size?: "sm" | "md" }>();
    let loading = $state(false);
    let confirmOpen = $state(false);

    const SignOut = async () => {
        if (loading) return;
        loading = true;
        try {
            await svelteAuthClient.signOut();
            window.location.href = "/";
        } catch (e) {
            console.error("Sign out failed", e);
            try {
                window.location.href = "/";
            } catch (err) {
                console.debug("Fallback navigation to / failed", err);
            }
        } finally {
            loading = false;
            confirmOpen = false;
        }
    };
</script>

<button
    type="button"
    class="inline-flex items-center gap-2 px-3 bg-white dark:bg-black py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-medium cursor-pointer border border-zinc-200 dark:border-zinc-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    aria-label="Sign out"
    onclick={() => (confirmOpen = true)}
    disabled={loading}
>
    <Icon name="logout" className={size === "sm" ? "h-5 w-5" : "h-6 w-6"} />
    <span>{loading ? "Signing out…" : "Sign out"}</span>
</button>

<SignOutConfirmModal bind:open={confirmOpen} onConfirm={SignOut} {loading} />