<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const nav = document.getElementById("stickyNav");

        const updateBlur = () => {
            if (!nav) return;
            if (document.body.classList.contains("mobile-menu-open")) {
                nav.classList.remove("backdrop-blur-xs");
            } else {
                nav.classList.add("backdrop-blur-xs");
            }
        };

        const observer = new MutationObserver(updateBlur);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Initial check
        updateBlur();

        return () => {
            observer.disconnect();
        };
    });
</script>
