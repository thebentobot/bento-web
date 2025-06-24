<script lang="ts">
    import closeX from "../../icons/closeX.svg?raw";
    import hamburger from "../../icons/hamburger.svg?raw";
    import warning from "../../icons/warning.svg?raw";
    import moon from "../../icons/moon.svg?raw";
    import sun from "../../icons/sun.svg?raw";
    import sunMoon from "../../icons/sunMoon.svg?raw";

    const icons = {
        closeX,
        hamburger,
        warning,
        moon,
        sun,
        sunMoon,
    };

    export let name: keyof typeof icons;
    export let className: string = "";
</script>

<!-- Because it is local svgs, it should be safe to use {@html} -->
<div class={className} aria-hidden="true">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html icons[name]}
</div>
