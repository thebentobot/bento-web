<script lang="ts">
    import { onMount } from "svelte";
    import { setMode, userPrefersMode } from "mode-watcher";
    import IconToggleButton from "./Menu/IconToggleButton.svelte";

    let currentMode: "light" | "dark" | "system" = $state(userPrefersMode.current);

    function updateCurrentMode() {
        currentMode = userPrefersMode.current;
    }

    let intervalId: ReturnType<typeof setInterval>;
    onMount(() => {
        updateCurrentMode();
        intervalId = setInterval(updateCurrentMode, 150);
        return () => clearInterval(intervalId);
    });

    const setTheme = (mode: "light" | "dark" | "system") => {
        setMode(mode);
        updateCurrentMode();
    };
</script>

<div class="flex gap-1 w-28">
    <IconToggleButton
        name="sun"
        title="Light mode"
        ariaLabel="Light mode"
        active={currentMode === "light"}
        onclick={() => setTheme("light")}
    />
    <IconToggleButton
        name="moon"
        title="Dark mode"
        ariaLabel="Dark mode"
        active={currentMode === "dark"}
        onclick={() => setTheme("dark")}
    />
    <IconToggleButton
        name="system"
        title="System mode"
        ariaLabel="System mode"
        active={currentMode === "system"}
        onclick={() => setTheme("system")}
    />
</div>
