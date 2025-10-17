<script lang="ts">
  import ColorOpacityPicker from "../ColorOpacityPicker.svelte";

  let {
    fmDivBgcolour = $bindable("#111827"),
    fmDivBgopacity = $bindable(100),
    fmSongTextColour = $bindable("#ffffff"),
    fmSongTextOpacity = $bindable(100),
    fmArtistTextColour = $bindable("#ffffff"),
    fmArtistTextOpacity = $bindable(100)
  } = $props();
</script>

<div class="grid gap-3">
  <ColorOpacityPicker label="Panel Background" bind:color={fmDivBgcolour} bind:opacity={fmDivBgopacity} />
  <ColorOpacityPicker label="Song Text" bind:color={fmSongTextColour} bind:opacity={fmSongTextOpacity} />
  <ColorOpacityPicker label="Artist Text" bind:color={fmArtistTextColour} bind:opacity={fmArtistTextOpacity} />
</div>

<style>
  @reference "../../../styles/global.css";
</style>
