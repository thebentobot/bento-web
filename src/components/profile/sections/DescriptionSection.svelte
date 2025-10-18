<script lang="ts">
    import DescriptionField from "../DescriptionField.svelte";
    import ColorOpacityPicker from "../ColorOpacityPicker.svelte";

    let {
        description = $bindable(""),
        descriptionColour = $bindable("#ffffff"),
        descriptionColourOpacity = $bindable(100),
    } = $props();
</script>

<div class="grid gap-3">
    <DescriptionField
        label="Description"
        bind:value={description}
        maxLength={500}
        placeholder="Profile bio"
    />
    <ColorOpacityPicker
        label="Description Colour"
        bind:color={descriptionColour}
        bind:opacity={descriptionColourOpacity}
    />
</div>

<style>
    @reference "../../../styles/global.css";
</style>
