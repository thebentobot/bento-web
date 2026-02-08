<script lang="ts">
    import { svelteAuthClient } from "../../library/auth-client";

    interface Props {
        label?: string;
        redirectTo?: string | null;
    }

    const { label = "Sign in with Discord", redirectTo = null }: Props = $props();
    let loading = $state(false);

    const SignIn = async () => {
        if (loading) return;
        loading = true;
        try {
            await svelteAuthClient.signIn.social({
                provider: "discord",
                callbackURL: redirectTo ?? undefined,
            });
        } catch (e) {
            console.error("Sign in failed", e);
            try {
                window.location.href = "/auth";
            } catch (err) {
                console.debug("Fallback navigation to /auth failed", err);
            }
        } finally {
            loading = false;
        }
    };
</script>

<button
    type="button"
    class="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
    onclick={SignIn}
    disabled={loading}
>
    {loading ? "Redirecting…" : label}
</button>
