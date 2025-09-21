<script lang="ts">
  import { onMount } from "svelte";
  import { svelteAuthClient } from "../../library/auth-client";
  import { setMode, userPrefersMode } from "mode-watcher";
  import Icon from "./Icon.svelte";
  import SignOutConfirmModal from "../auth/SignOutConfirmModal.svelte";
  import MenuItem from "./Menu/MenuItem.svelte";
  import IconToggleButton from "./Menu/IconToggleButton.svelte";
  import type { BentoBetterAuthUser } from "../../library/auth.ts";

  export let user: BentoBetterAuthUser | null = null;

  const session = svelteAuthClient.useSession();
  $: currentUser = user ?? $session.data?.user ?? null;

  let open = false;
  let menuElement: HTMLDivElement | null = null;
  let buttonElement: HTMLButtonElement | null = null;

  const Toggle = () => (open = !open);
  const Close = () => (open = false);

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") Close();
  };

  const onClickOutside = (e: MouseEvent) => {
    if (!open) return;
    const target = e.target as Node;
    if (menuElement && !menuElement.contains(target) && buttonElement && !buttonElement.contains(target)) {
      Close();
    }
  };

  onMount(() => {
    window.addEventListener("keydown", onKeydown);
    window.addEventListener("click", onClickOutside, true);
    return () => {
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("click", onClickOutside, true);
    };
  });

  // Theme handling
  let currentMode: "light" | "dark" | "system" = userPrefersMode.current;
  function UpdateCurrentMode() {
    currentMode = userPrefersMode.current;
  }
  let intervalId: ReturnType<typeof setInterval>;
  onMount(() => {
    UpdateCurrentMode();
    intervalId = setInterval(UpdateCurrentMode, 150);
    return () => clearInterval(intervalId);
  });
  const setTheme = (mode: "light" | "dark" | "system") => {
    setMode(mode);
    UpdateCurrentMode();
  };

  // Auth actions
  const Login = async () => {
    await svelteAuthClient.signIn.social({ provider: "discord" });
  };
  const LogOut = async () => {
    await svelteAuthClient.signOut();
    window.location.reload();
  };

  let confirmOpen = false;

</script>

<div class="relative">
  <button bind:this={buttonElement}
          class="p-1 rounded-full hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center focus:outline-none cursor-pointer"
          aria-haspopup="menu"
          aria-expanded={open}
          on:click|stopPropagation={Toggle}
          title={currentUser ? "Open menu" : "Open settings"}
  >
    {#if currentUser?.image}
      <img src={currentUser.image} alt={currentUser?.name ?? "User"} class="h-8 w-8 rounded-full object-cover" referrerpolicy="no-referrer" />
    {:else}
      <Icon name="user" className="h-7 w-7 text-zinc-800 dark:text-zinc-200" />
    {/if}
  </button>

  {#if open}
    <div bind:this={menuElement}
         role="menu"
         class="absolute right-0 mt-2 w-56 origin-top-right rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black/5 focus:outline-none z-50 p-1"
    >
      <!-- Auth section FIRST -->
      {#if currentUser}
        <a href="/profile" role="menuitem" class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
          {#if currentUser?.image}
            <img src={currentUser.image} alt="" class="h-5 w-5 rounded-full object-cover" referrerpolicy="no-referrer" />
          {:else}
            <Icon name="user" className="h-5 w-5" />
          {/if}
          <div class="min-w-0">
            <div class="text-sm font-semibold truncate">{currentUser.name ?? "Profile"}</div>
            <div class="text-xs text-zinc-500 dark:text-zinc-400 truncate">Profile</div>
          </div>
        </a>
        <MenuItem icon="edit" label="Edit Bento profile" disabled={true} title="Coming Soon™️" />
        <MenuItem icon="users" label="Servers" disabled={true} title="Coming Soon™️" />
        <MenuItem icon="settings" label="User settings" disabled={true} title="Coming Soon™️" />
        <button role="menuitem" class="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer" on:click={() => { confirmOpen = true; Close(); }}>
          <Icon name="logout" className="h-5 w-5" />
          <span class="text-sm font-medium">Sign out</span>
        </button>
      {:else}
        <button role="menuitem" class="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer" on:click={Login}>
          <Icon name="login" className="h-5 w-5" />
          <span class="text-sm font-medium">Sign in with Discord</span>
        </button>
      {/if}

      <div class="my-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>

      <!-- Appearance section with icons -->
      <div class="px-3 pt-2 pb-1 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Appearance</div>
      <div class="flex gap-1 px-2 pb-2">
        <IconToggleButton name="sun" title="Light mode" ariaLabel="Light mode" active={currentMode==="light"} on:click={() => setTheme("light")} />
        <IconToggleButton name="moon" title="Dark mode" ariaLabel="Dark mode" active={currentMode==="dark"} on:click={() => setTheme("dark")} />
        <IconToggleButton name="system" title="System mode" ariaLabel="System mode" active={currentMode==="system"} on:click={() => setTheme("system")} />
      </div>
    </div>
  {/if}
</div>

<SignOutConfirmModal bind:open={confirmOpen} onConfirm={LogOut} />
