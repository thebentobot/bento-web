<script lang="ts">
    import { setMode, userPrefersMode } from "mode-watcher";
    import Icon from "./Icon.svelte";

    const toggleAppearanceMode = () => {
        if (userPrefersMode.current === "dark") {
            setMode("light");
        } else if (userPrefersMode.current === "light") {
            setMode(userPrefersMode.current === "dark" ? "dark" : "system");
        } else {
            setMode("dark");
        }
    };
</script>

<button
    on:click={toggleAppearanceMode}
    aria-label={userPrefersMode.current === "dark"
        ? "Turn light mode on"
        : userPrefersMode.current === "light"
          ? "Turn dark mode on"
          : "Turn system mode on"}
    class="bg-inherit p-1 rounded-full dark:hover:bg-white hover:bg-black transition-colors duration-300 ease-in-out dark:text-zinc-100 text-black dark:hover:text-black hover:text-white cursor-pointer"
>
    <span class="sr-only"
        >{userPrefersMode.current === "dark"
            ? "Turn light mode on"
            : userPrefersMode.current === "light"
              ? "Turn system mode on"
              : "Turn dark mode on"}</span
    >
    {#if userPrefersMode.current === "dark"}
        <Icon name="moon" className="w-6 h-6" />
    {:else if userPrefersMode.current === "light"}
        <Icon name="sun" className="w-6 h-6" />
    {:else}
        <Icon name="sunMoon" className="w-6 h-6" />
    {/if}
</button>
