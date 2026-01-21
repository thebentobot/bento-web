<script lang="ts">
    import ToggleSwitch from "../ToggleSwitch.svelte";
    import ColorOpacityPicker from "../ColorOpacityPicker.svelte";

    let {
        backgroundUrl = $bindable(""),
        backgroundColour = $bindable("#1F2937"),
        backgroundColourOpacity = $bindable(100),
        overlayColour = $bindable("#000000"),
        overlayOpacity = $bindable(20),
        lastfmBoard = $bindable(false),
        xpBoard = $bindable(false),
    } = $props();
</script>

<div class="grid gap-3">
    <label class="grid gap-1">
        <span class="text-sm">Background URL</span>
        <input class="input" placeholder="https://…" bind:value={backgroundUrl} />
    </label>
    <ColorOpacityPicker
        label="Background Colour"
        bind:color={backgroundColour}
        bind:opacity={backgroundColourOpacity}
    />
    <ColorOpacityPicker
        label="Overlay Colour"
        bind:color={overlayColour}
        bind:opacity={overlayOpacity}
    />
    <div class="grid sm:grid-cols-2 gap-3">
        <ToggleSwitch label="Last.fm Board" bind:checked={lastfmBoard} />
        <ToggleSwitch label="XP Board" bind:checked={xpBoard} />
    </div>
</div>
