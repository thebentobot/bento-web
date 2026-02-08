<script lang="ts">
    import ColorOpacityPicker from "../ColorOpacityPicker.svelte";

    interface Props {
        xpDivBgcolour?: string;
        xpDivBgopacity?: number;
        xpTextColour?: string;
        xpTextOpacity?: number;
        xpText2Colour?: string;
        xpText2Opacity?: number;
        xpBarColour?: string;
        xpBarOpacity?: number;
        xpBar2Colour?: string;
        xpBar2Opacity?: number;
        xpDoneServerColour1?: string;
        xpDoneServerColour1Opacity?: number;
        xpDoneServerColour2?: string;
        xpDoneServerColour2Opacity?: number;
        xpDoneServerColour3?: string;
        xpDoneServerColour3Opacity?: number;
        xpDoneGlobalColour1?: string;
        xpDoneGlobalColour1Opacity?: number;
        xpDoneGlobalColour2?: string;
        xpDoneGlobalColour2Opacity?: number;
        xpDoneGlobalColour3?: string;
        xpDoneGlobalColour3Opacity?: number;
    }

    let {
        xpDivBgcolour = $bindable("#111827"),
        xpDivBgopacity = $bindable(100),

        xpTextColour = $bindable("#ffffff"),
        xpTextOpacity = $bindable(100),
        xpText2Colour = $bindable("#ffffff"),
        xpText2Opacity = $bindable(100),

        xpBarColour = $bindable("#374151"),
        xpBarOpacity = $bindable(100),
        xpBar2Colour = $bindable("#374151"),
        xpBar2Opacity = $bindable(100),

        xpDoneServerColour1 = $bindable("#FCD34D"),
        xpDoneServerColour1Opacity = $bindable(100),
        xpDoneServerColour2 = $bindable("#F59E0B"),
        xpDoneServerColour2Opacity = $bindable(100),
        xpDoneServerColour3 = $bindable("#EF4444"),
        xpDoneServerColour3Opacity = $bindable(100),

        xpDoneGlobalColour1 = $bindable("#FCD34D"),
        xpDoneGlobalColour1Opacity = $bindable(100),
        xpDoneGlobalColour2 = $bindable("#F59E0B"),
        xpDoneGlobalColour2Opacity = $bindable(100),
        xpDoneGlobalColour3 = $bindable("#EF4444"),
        xpDoneGlobalColour3Opacity = $bindable(100),
    }: Props = $props();
</script>

<div class="grid gap-3">
    <ColorOpacityPicker
        label="Panel Background"
        bind:color={xpDivBgcolour}
        bind:opacity={xpDivBgopacity}
    />
    <ColorOpacityPicker
        label="Server Text"
        bind:color={xpTextColour}
        bind:opacity={xpTextOpacity}
    />
    <ColorOpacityPicker
        label="Global Text"
        bind:color={xpText2Colour}
        bind:opacity={xpText2Opacity}
    />
    <ColorOpacityPicker label="Server Bar" bind:color={xpBarColour} bind:opacity={xpBarOpacity} />
    <ColorOpacityPicker label="Global Bar" bind:color={xpBar2Colour} bind:opacity={xpBar2Opacity} />
    <ColorOpacityPicker
        label="Server Gradient 1"
        bind:color={xpDoneServerColour1}
        bind:opacity={xpDoneServerColour1Opacity}
    />
    <ColorOpacityPicker
        label="Server Gradient 2"
        bind:color={xpDoneServerColour2}
        bind:opacity={xpDoneServerColour2Opacity}
    />
    <ColorOpacityPicker
        label="Server Gradient 3"
        bind:color={xpDoneServerColour3}
        bind:opacity={xpDoneServerColour3Opacity}
    />
    <ColorOpacityPicker
        label="Global Gradient 1"
        bind:color={xpDoneGlobalColour1}
        bind:opacity={xpDoneGlobalColour1Opacity}
    />
    <ColorOpacityPicker
        label="Global Gradient 2"
        bind:color={xpDoneGlobalColour2}
        bind:opacity={xpDoneGlobalColour2Opacity}
    />
    <ColorOpacityPicker
        label="Global Gradient 3"
        bind:color={xpDoneGlobalColour3}
        bind:opacity={xpDoneGlobalColour3Opacity}
    />
</div>

<style>
    @reference "../../../styles/global.css";
</style>
