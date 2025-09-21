<script lang="ts">
  import Icon from "../Icon.svelte";
  import type { IconName } from "../icons";
  export let icon: IconName;
  export let label: string;
  export let href: string | undefined = undefined;
  export let disabled: boolean = false;
  export let title: string | undefined = undefined;
  export let role: string = "menuitem";
</script>

{#if href && !disabled}
  <a href={href}
     role={role}
     class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
     title={title}
  >
    <Icon name={icon} className="h-5 w-5" />
    <span class="text-sm font-medium">{label}</span>
  </a>
{:else}
  <div role={role}
       class={`flex items-center gap-2 px-3 py-2 rounded-md ${disabled ? 'text-zinc-400 dark:text-zinc-600 cursor-not-allowed' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer'}`}
       aria-disabled={disabled}
       title={title}
  >
    <Icon name={icon} className={disabled ? 'h-4 w-4' : 'h-5 w-5'} />
    <span class={disabled ? '' : 'text-sm font-medium'}>{label}</span>
  </div>
{/if}
