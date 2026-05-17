<script lang="ts">
    import { onMount } from "svelte";

    // Lives in a client:only="svelte" component so it re-mounts on every ClientRouter
    // navigation, ensuring the scroll listener is always attached to the current nav element.
    onMount(() => {
        const nav = document.getElementById("stickyNav");
        if (!nav) return;

        const update = () => {
            const scrolled = window.scrollY > 1;
            // nav-blurred toggles the backdrop-filter via a ::before pseudo-element (see global.css)
            nav.classList.toggle("nav-blurred", scrolled);
            nav.classList.toggle("border-b", scrolled);
            nav.classList.toggle("dark:border-zinc-900/25", scrolled);
            nav.classList.toggle("border-zinc-50/25", scrolled);
            nav.classList.toggle("shadow-xs", scrolled);
        };

        window.addEventListener("scroll", update, { passive: true });
        update();

        return () => {
            window.removeEventListener("scroll", update);
        };
    });
</script>
