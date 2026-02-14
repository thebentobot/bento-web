<script lang="ts">
    import { actions } from "astro:actions";
    import type { UserSettingsDto } from "../../library/types/interfaces";
    import ToggleSwitch from "../profile/ToggleSwitch.svelte";
    import SaveResetButtons from "../profile/SaveResetButtons.svelte";
    import StatusMessage from "../profile/StatusMessage.svelte";

    interface Props {
        initialSettings: UserSettingsDto | null;
    }

    const { initialSettings }: Props = $props();

    const defaults: UserSettingsDto = {
        hideSlashCommandCalls: false,
        showOnGlobalLeaderboard: true,
    };

    let settings: UserSettingsDto = $state({ ...(initialSettings ?? defaults) });
    let original: UserSettingsDto = $state({ ...(initialSettings ?? defaults) });

    let saving = $state(false);
    let error: string | null = $state(null);
    let savedAt: Date | null = $state(null);

    const hasChanges = $derived(
        settings.hideSlashCommandCalls !== original.hideSlashCommandCalls ||
            settings.showOnGlobalLeaderboard !== original.showOnGlobalLeaderboard
    );

    async function save() {
        saving = true;
        error = null;

        // Build patch with only changed fields
        const patch: Record<string, boolean> = {};
        if (settings.hideSlashCommandCalls !== original.hideSlashCommandCalls) {
            patch.hideSlashCommandCalls = settings.hideSlashCommandCalls;
        }
        if (settings.showOnGlobalLeaderboard !== original.showOnGlobalLeaderboard) {
            patch.showOnGlobalLeaderboard = settings.showOnGlobalLeaderboard;
        }

        const result = await actions.saveUserSettings(patch);

        if (result.error) {
            error = result.error.message || "Failed to save settings.";
        } else {
            original = { ...settings };
            savedAt = new Date();
        }

        saving = false;
    }

    function reset() {
        settings = { ...original };
        error = null;
    }
</script>

<div class="max-w-xl mx-auto space-y-8">
    <StatusMessage {error} {saving} {savedAt} />

    <section
        class="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-5 space-y-4"
    >
        <h2 class="text-lg font-semibold">Privacy</h2>
        <ToggleSwitch
            label="Show on global leaderboard"
            bind:checked={settings.showOnGlobalLeaderboard}
        />
        <p class="text-xs text-zinc-500 dark:text-zinc-400">
            When disabled, your entry on the global leaderboard will be shown as "Private User" with
            a hidden avatar.
        </p>
    </section>

    <section
        class="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-5 space-y-4"
    >
        <h2 class="text-lg font-semibold">Behaviour</h2>
        <ToggleSwitch
            label="Hide slash command calls"
            bind:checked={settings.hideSlashCommandCalls}
        />
        <p class="text-xs text-zinc-500 dark:text-zinc-400">
            When enabled, Bento Bot will attempt to make your slash command responses visible only
            to you (ephemeral).
        </p>
    </section>

    <div class="flex justify-center">
        <SaveResetButtons {saving} {hasChanges} onSave={save} onReset={reset} responsive />
    </div>
</div>

<style>
    @reference "../../styles/global.css";
</style>
