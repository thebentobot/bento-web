<script lang="ts">
    import { actions } from "astro:actions";
    import type { UserSettingsDto } from "../../library/types/interfaces";
    import ToggleSwitch from "../profile/ToggleSwitch.svelte";
    import { addToast } from "../../library/stores/toast.svelte";

    interface Props {
        initialSettings: UserSettingsDto | null;
    }

    const { initialSettings }: Props = $props();

    const defaults: UserSettingsDto = {
        hideSlashCommandCalls: false,
        showOnGlobalLeaderboard: true,
    };

    let settings: UserSettingsDto = $state({ ...(initialSettings ?? defaults) });
    let savingField: string | null = $state(null);

    async function saveField(field: keyof UserSettingsDto) {
        savingField = field;
        const previous = settings[field];

        const result = await actions.saveUserSettings({ [field]: settings[field] });

        if (result.error) {
            settings[field] = previous;
            addToast(result.error.message || "Failed to save settings.", "error");
        } else {
            addToast("Settings saved", "success");
        }

        savingField = null;
    }
</script>

<div class="max-w-xl mx-auto space-y-8">
    <section
        class="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-5 space-y-4"
    >
        <h2 class="text-lg font-semibold">Privacy</h2>
        <ToggleSwitch
            label="Show on global leaderboard"
            bind:checked={settings.showOnGlobalLeaderboard}
            disabled={savingField === "showOnGlobalLeaderboard"}
            onchange={() => saveField("showOnGlobalLeaderboard")}
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
            label="Hide slash command responses"
            bind:checked={settings.hideSlashCommandCalls}
            disabled={savingField === "hideSlashCommandCalls"}
            onchange={() => saveField("hideSlashCommandCalls")}
        />
        <p class="text-xs text-zinc-500 dark:text-zinc-400">
            When enabled, Bento Bot will make your slash command responses only visible to you
            (ephemeral). You can choose per command whether to show or hide the response.
        </p>
    </section>
</div>

<style>
    @reference "../../styles/global.css";
</style>
