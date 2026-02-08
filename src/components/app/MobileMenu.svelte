<script lang="ts">
    import { fade } from "svelte/transition";
    import Icon from "./Icon.svelte";
    import UserMenu from "./UserMenu.svelte";
    import type { BentoBetterAuthUser } from "../../library/auth.ts";

    interface Props {
        navigationRoutes: { name: string; route: string }[];
        currentPath: string;
        user: BentoBetterAuthUser | null;
    }

    const { navigationRoutes, currentPath, user = null }: Props = $props();

    let isOpen = $state(false);

    const ToggleMenu = () => (isOpen = !isOpen);

    const CloseMenu = () => (isOpen = false);

    const IsCurrentRoute = (route: string): boolean => {
        if (!currentPath) return false;
        return route === "/"
            ? currentPath === "/"
            : currentPath === route || currentPath.startsWith(route + "/");
    };

    // Handle clicks on the overlay background
    const HandleOverlayClick = (event: MouseEvent) => {
        // Check if the click is directly on the overlay (not its children)
        if (event.target === event.currentTarget) CloseMenu();
    };

    // Handle keyboard events for the overlay
    const HandleKeydown = (event: KeyboardEvent) => {
        if (event.key === "Escape") CloseMenu();
    };

    $effect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.classList.add("mobile-menu-open");
        } else {
            document.body.style.overflow = "";
            document.body.classList.remove("mobile-menu-open");
        }
        // Cleanup on unmount just in case
        return () => {
            document.body.style.overflow = "";
            document.body.classList.remove("mobile-menu-open");
        };
    });
</script>

<button
    aria-label={isOpen ? "Close menu" : "Open menu"}
    class="group md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors duration-300 cursor-pointer"
    onclick={ToggleMenu}
>
    <Icon
        name="hamburger"
        class="h-6 w-6 text-zinc-800 dark:text-zinc-200 group-hover:dark:text-zinc-800"
    />
</button>

{#if isOpen}
    <div
        class="fixed inset-0 z-50 bg-white/20 dark:bg-zinc-900/80 backdrop-blur-lg backdrop-saturate-150"
        transition:fade={{ duration: 200 }}
        onclick={HandleOverlayClick}
        onkeydown={HandleKeydown}
        role="dialog"
        tabindex="0"
        aria-label="Mobile navigation menu"
    >
        <div class="grid grid-cols-3 items-center w-full p-4 sm:py-8 py-4">
            <!-- Left section - Close button -->
            <div class="flex justify-start w-10">
                <button
                    aria-label="Close menu"
                    class="group flex items-center justify-center w-10 h-10 rounded-lg hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors duration-300 cursor-pointer"
                    onclick={CloseMenu}
                >
                    <Icon
                        name="closeX"
                        class="h-6 w-6 text-zinc-800 dark:text-zinc-200 group-hover:dark:text-zinc-800"
                    />
                </button>
            </div>

            <!-- Center section - Home/Index button -->
            <div class="flex justify-center">
                <a
                    href="/"
                    onclick={CloseMenu}
                    class="p-2 rounded-lg transition-colors duration-300 hover:bg-yellow-400 hover:text-black dark:hover:bg-yellow-500 dark:hover:text-black font-semibold text-black dark:text-white"
                >
                    <span class="sr-only">Home</span>
                    <div class="flex items-center gap-x-2">
                        <span class="font-semibold">Bento</span>
                        <img src="/29.webp" alt="Logo" class="h-6 w-6 rounded-full" />
                    </div>
                </a>
            </div>

            <!-- Right section - User Menu (Avatar + Theme/Profile/Login/Logout) -->
            <div class="flex justify-end">
                <UserMenu {user}></UserMenu>
            </div>
        </div>

        <div class="flex flex-col items-start space-y-6 w-full px-8 mt-8">
            {#each navigationRoutes as route (route)}
                <span class="sr-only">{route.name}</span>
                <a
                    href={route.route}
                    onclick={CloseMenu}
                    class={`text-xl p-4 w-full text-left rounded-lg transition-all duration-300 
                        hover:bg-yellow-400 hover:text-black hover:scale-105 dark:hover:bg-yellow-500 dark:hover:text-black
                        ${
                            IsCurrentRoute(route.route)
                                ? "font-semibold bg-yellow-400 text-black dark:bg-yellow-500 dark:text-black"
                                : "font-semibold text-black dark:text-white"
                        }`}
                >
                    {route.name}
                </a>
            {/each}
        </div>
    </div>
{/if}

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
