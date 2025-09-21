<script lang="ts">
    import Icon from "./Icon.svelte";
    import { svelteAuthClient } from "../../library/auth-client.ts";

    const session = svelteAuthClient.useSession();
    $: user = $session.data?.user ?? null;

    const login = async () => {
        await svelteAuthClient.signIn.social({ provider: "discord" });
    };

    const logout = async () => {
        await svelteAuthClient.signOut();
        window.location.reload();
    };
</script>

<div class="flex items-center mr-2">
    <button
            class="p-2 rounded-lg hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center"
            on:click={user ? logout : login}
            aria-label={user ? "Logout" : "Login"}
            title={user ? "Logout" : "Login"}
    >
        <Icon name="user" className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
    </button>
</div>