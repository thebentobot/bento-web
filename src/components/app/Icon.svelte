<script lang="ts">
    import { icons, type IconName } from "./icons";

    interface Props {
        name: IconName;
        class?: string;
    }

    const { name, class: className = "" }: Props = $props();
</script>

<!-- Because it is local svgs, it should be safe to use {@html} -->
<div class={className} aria-hidden="true">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html icons[name]}
</div>
