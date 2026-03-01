<script lang="ts">
    import { onMount } from "svelte";

    // This lives in a client:only="svelte" component rather than an inline <script> in
    // Navigation.astro because Astro inline scripts are module-scoped and only execute
    // once per browser session. After a ClientRouter (View Transitions) navigation the
    // page body is swapped but the script does not re-run, leaving the scroll listener
    // attached to a detached DOM element. A client:only component re-mounts on every
    // navigation, so onMount() always runs against the fresh element.
    onMount(() => {
        const nav = document.getElementById("stickyNav");
        if (!nav) return;

        const updateBlur = () => {
            if (window.scrollY <= 1) {
                nav.classList.remove("nav-blurred");
            } else {
                // Toggles the nav-blurred class rather than backdrop-blur-xs directly.
                // See the .nav-blurred::before rule in global.css for why backdrop-filter
                // is applied via a pseudo-element instead of on the nav element itself.
                nav.classList.add("nav-blurred");
            }
        };

        window.addEventListener("scroll", updateBlur, { passive: true });
        updateBlur();

        return () => {
            window.removeEventListener("scroll", updateBlur);
        };
    });
</script>
