<script lang="ts">
    import { setMode, userPrefersMode } from "mode-watcher";
    import Icon from "./Icon.svelte";
    import { onMount } from "svelte";

    // Create a reactive variable to track the current mode
    let currentMode = userPrefersMode.current;

    // Update the reactive variable when userPrefersMode changes
    function updateCurrentMode() {
        currentMode = userPrefersMode.current;
    }

    // Set up a listener for mode changes
    onMount(() => {
        // Initial update
        updateCurrentMode();

        // Set up an interval to check for mode changes
        const intervalId = setInterval(updateCurrentMode, 100);

        // Clean up the interval when the component is destroyed
        return () => clearInterval(intervalId);
    });

    const toggleAppearanceMode = () => {
        if (currentMode === "dark") {
            setMode("light");
        } else if (currentMode === "light") {
            setMode("system");
        } else {
            setMode("dark");
        }
        // Force an update of the reactive variable
        updateCurrentMode();
    };
</script>

<button
    on:click={toggleAppearanceMode}
    aria-label={currentMode === "dark"
        ? "Turn light mode on"
        : currentMode === "light"
          ? "Turn dark mode on"
          : "Turn system mode on"}
    class="bg-inherit p-1 rounded-full dark:hover:bg-white hover:bg-black transition-colors duration-300 ease-in-out dark:text-zinc-100 text-black dark:hover:text-black hover:text-white cursor-pointer"
>
    <span class="sr-only"
        >{currentMode === "dark"
            ? "Turn light mode on"
            : currentMode === "light"
              ? "Turn system mode on"
              : "Turn dark mode on"}</span
    >
    {#if currentMode === "dark"}
        <Icon name="moon" className="w-6 h-6" />
    {:else if currentMode === "light"}
        <Icon name="sun" className="w-6 h-6" />
    {:else}
        <Icon name="sunMoon" className="w-6 h-6" />
    {/if}
</button>
