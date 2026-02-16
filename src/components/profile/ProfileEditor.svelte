<!-- suppressed because it is Svelte 5 syntax, dunno why it is warning still. -->
<!--suppress CommaExpressionJS -->
<script lang="ts">
    import type { ProfileDto, ProfilePatch } from "../../library/types/interfaces";
    import { actions } from "astro:actions";
    import ProfilePreview from "./ProfilePreview.svelte";
    import ModalShell from "./ModalShell.svelte";
    import { defaultProfile } from "../../library/profile/defaultProfile";
    import SaveResetButtons from "./SaveResetButtons.svelte";
    import { addToast } from "../../library/stores/toast.svelte";
    import BackgroundSection from "./sections/BackgroundSection.svelte";
    import DescriptionSection from "./sections/DescriptionSection.svelte";
    import SidebarSection from "./sections/SidebarSection.svelte";
    import LastfmSection from "./sections/LastfmSection.svelte";
    import XpSection from "./sections/XpSection.svelte";

    interface Props {
        userId: string;
        username?: string;
        discriminator?: string;
        avatarUrl?: string;
        initialProfile: ProfileDto | null;
    }

    const {
        userId,
        username = "User",
        discriminator,
        avatarUrl,
        initialProfile = null,
    }: Props = $props();

    let error = $state<string | null>(null);
    let saving = $state(false);

    const initialProfileWithDefaults: ProfileDto = mergeWithDefaults(
        defaultProfile(userId),
        initialProfile
    );
    let originalProfile = $state<ProfileDto>(initialProfileWithDefaults);
    let profile = $state<ProfileDto>({ ...initialProfileWithDefaults });

    // Click-to-edit modal state and editor fold state
    type Target = "background" | "description" | "sidebar" | "lastfm" | "xp";
    let editorExpanded = $state(false); // folded by default
    let showModal = $state(false);
    let selectedTarget = $state<Target | null>(null);

    function handleOpen(target: Target) {
        if (editorExpanded) return; // disable click editing when editor is open
        selectedTarget = target;
        showModal = true;
    }

    function onDetailsToggle(e: Event) {
        const el = e.currentTarget as HTMLDetailsElement | null;
        if (el?.open) showModal = false;
    }

    function mergeWithDefaults(
        defaults: ProfileDto,
        incoming?: Partial<ProfileDto> | null
    ): ProfileDto {
        // Start from defaults and only apply incoming fields that are not null/undefined
        const result: ProfileDto = { ...defaults };
        if (!incoming) return result;

        for (const k of Object.keys(incoming) as (keyof ProfileDto)[]) {
            if (k === "UserId") continue; // always trust the accurate string from props
            const v = incoming[k];
            if (v !== null && v !== undefined) {
                // Assign with key-aware type to avoid unsafe 'any'
                result[k] = v as ProfileDto[typeof k];
            }
        }
        return result;
    }

    function computeProfilePatch(original: ProfileDto, current: ProfileDto): ProfilePatch {
        const body: Partial<ProfileDto> = {};
        for (const k of Object.keys(current) as (keyof ProfileDto)[]) {
            if (k === "UserId") continue;
            const ov = original[k];
            const cv = current[k];
            if (ov !== cv) {
                body[k] = cv as ProfileDto[typeof k];
            }
        }
        return { UserId: current.UserId, ...body } as ProfilePatch;
    }

    const changeCount = $derived(
        Object.keys(computeProfilePatch(originalProfile, profile)).length - 1
    );
    const hasChanges = $derived(changeCount > 0);

    const saveProfile = async () => {
        saving = true;
        error = null;
        try {
            const patch = computeProfilePatch(originalProfile, profile);
            const changedCount = Object.keys(patch).length - 1; // exclude UserId
            if (changedCount <= 0) {
                addToast("Profile saved", "success");
                return;
            }
            const { error: actionError } = await actions.saveProfile(patch);
            if (actionError) {
                const m = (actionError as { message?: unknown })?.message;
                throw new Error(typeof m === "string" ? m : "Save failed");
            }
            originalProfile = { ...profile };
            addToast("Profile saved", "success");
        } catch (e: unknown) {
            console.error(e);
            error = (e as Error)?.message ?? "Unknown error";
            addToast(error, "error");
        } finally {
            saving = false;
        }
    };

    function resetChanges() {
        profile = { ...originalProfile };
    }
</script>

<div class={editorExpanded ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "flex flex-col"}>
    <div>
        <ProfilePreview
            {profile}
            {username}
            {discriminator}
            {avatarUrl}
            {editorExpanded}
            onOpen={handleOpen}
        />
        <div class="hidden sm:block text-xs text-zinc-500 w-full max-w-[600px] mx-auto mt-2">
            {editorExpanded
                ? "Preview Editing disabled while the expanded editor is open"
                : "Tip: Click elements in the preview to edit"}
        </div>

        {#if !editorExpanded}
            <div class="mt-4 flex items-center justify-center gap-3">
                <SaveResetButtons
                    {saving}
                    {hasChanges}
                    onSave={saveProfile}
                    onReset={resetChanges}
                />
                <button
                    class="btn-secondary"
                    onclick={() => {
                        showModal = false;
                        editorExpanded = true;
                    }}>Open Editor</button
                >
            </div>
        {/if}
    </div>

    {#if showModal}
        <ModalShell title={`Edit ${selectedTarget}`} onClose={() => (showModal = false)}>
            {#if selectedTarget === "background"}
                <BackgroundSection
                    bind:backgroundUrl={
                        () => profile.BackgroundUrl ?? "",
                        (v) => (profile.BackgroundUrl = v || null)
                    }
                    bind:backgroundColour={
                        () => profile.BackgroundColour ?? "#1F2937",
                        (v) => (profile.BackgroundColour = v)
                    }
                    bind:backgroundColourOpacity={
                        () => profile.BackgroundColourOpacity ?? 100,
                        (v) => (profile.BackgroundColourOpacity = v)
                    }
                    bind:overlayColour={
                        () => profile.OverlayColour ?? "#000000", (v) => (profile.OverlayColour = v)
                    }
                    bind:overlayOpacity={
                        () => profile.OverlayOpacity ?? 20, (v) => (profile.OverlayOpacity = v)
                    }
                    bind:lastfmBoard={
                        () => !!profile.LastfmBoard, (v) => (profile.LastfmBoard = !!v)
                    }
                    bind:xpBoard={() => !!profile.XpBoard, (v) => (profile.XpBoard = !!v)}
                />
            {:else if selectedTarget === "description"}
                <DescriptionSection
                    bind:description={
                        () => profile.Description ?? "", (v) => (profile.Description = v)
                    }
                    bind:descriptionColour={
                        () => profile.DescriptionColour ?? "#ffffff",
                        (v) => (profile.DescriptionColour = v)
                    }
                    bind:descriptionColourOpacity={
                        () => profile.DescriptionColourOpacity ?? 100,
                        (v) => (profile.DescriptionColourOpacity = v)
                    }
                />
            {:else if selectedTarget === "sidebar"}
                <SidebarSection
                    bind:sidebarColour={
                        () => profile.SidebarColour ?? "#000000", (v) => (profile.SidebarColour = v)
                    }
                    bind:sidebarOpacity={
                        () => profile.SidebarOpacity ?? 30, (v) => (profile.SidebarOpacity = v)
                    }
                    bind:sidebarBlur={
                        () => profile.SidebarBlur ?? 3, (v) => (profile.SidebarBlur = v)
                    }
                    bind:usernameColour={
                        () => profile.UsernameColour ?? "#ffffff",
                        (v) => (profile.UsernameColour = v)
                    }
                    bind:discriminatorColour={
                        () => profile.DiscriminatorColour ?? "#9CA3AF",
                        (v) => (profile.DiscriminatorColour = v)
                    }
                    bind:sidebarItemServerColour={
                        () => profile.SidebarItemServerColour ?? "#D3D3D3",
                        (v) => (profile.SidebarItemServerColour = v)
                    }
                    bind:sidebarValueServerColour={
                        () => profile.SidebarValueServerColour ?? "#ffffff",
                        (v) => (profile.SidebarValueServerColour = v)
                    }
                    bind:sidebarItemGlobalColour={
                        () => profile.SidebarItemGlobalColour ?? "#D3D3D3",
                        (v) => (profile.SidebarItemGlobalColour = v)
                    }
                    bind:sidebarValueGlobalColour={
                        () => profile.SidebarValueGlobalColour ?? "#ffffff",
                        (v) => (profile.SidebarValueGlobalColour = v)
                    }
                    bind:sidebarItemBentoColour={
                        () => profile.SidebarItemBentoColour ?? "#D3D3D3",
                        (v) => (profile.SidebarItemBentoColour = v)
                    }
                    bind:sidebarValueBentoColour={
                        () => profile.SidebarValueBentoColour ?? "#ffffff",
                        (v) => (profile.SidebarValueBentoColour = v)
                    }
                    bind:sidebarItemTimezoneColour={
                        () => profile.SidebarItemTimezoneColour ?? "#D3D3D3",
                        (v) => (profile.SidebarItemTimezoneColour = v)
                    }
                    bind:timezone={() => profile.Timezone ?? "", (v) => (profile.Timezone = v)}
                    bind:birthday={() => profile.Birthday ?? null, (v) => (profile.Birthday = v)}
                />
            {:else if selectedTarget === "lastfm"}
                <LastfmSection
                    bind:fmDivBgcolour={
                        () => profile.FmDivBgcolour ?? "#111827", (v) => (profile.FmDivBgcolour = v)
                    }
                    bind:fmDivBgopacity={
                        () => profile.FmDivBgopacity ?? 100, (v) => (profile.FmDivBgopacity = v)
                    }
                    bind:fmSongTextColour={
                        () => profile.FmSongTextColour ?? "#ffffff",
                        (v) => (profile.FmSongTextColour = v)
                    }
                    bind:fmSongTextOpacity={
                        () => profile.FmSongTextOpacity ?? 100,
                        (v) => (profile.FmSongTextOpacity = v)
                    }
                    bind:fmArtistTextColour={
                        () => profile.FmArtistTextColour ?? "#ffffff",
                        (v) => (profile.FmArtistTextColour = v)
                    }
                    bind:fmArtistTextOpacity={
                        () => profile.FmArtistTextOpacity ?? 100,
                        (v) => (profile.FmArtistTextOpacity = v)
                    }
                />
            {:else if selectedTarget === "xp"}
                <XpSection
                    bind:xpDivBgcolour={
                        () => profile.XpDivBgcolour ?? "#111827", (v) => (profile.XpDivBgcolour = v)
                    }
                    bind:xpDivBgopacity={
                        () => profile.XpDivBgopacity ?? 100, (v) => (profile.XpDivBgopacity = v)
                    }
                    bind:xpTextColour={
                        () => profile.XpTextColour ?? "#ffffff", (v) => (profile.XpTextColour = v)
                    }
                    bind:xpTextOpacity={
                        () => profile.XpTextOpacity ?? 100, (v) => (profile.XpTextOpacity = v)
                    }
                    bind:xpText2Colour={
                        () => profile.XpText2Colour ?? "#ffffff", (v) => (profile.XpText2Colour = v)
                    }
                    bind:xpText2Opacity={
                        () => profile.XpText2Opacity ?? 100, (v) => (profile.XpText2Opacity = v)
                    }
                    bind:xpBarColour={
                        () => profile.XpBarColour ?? "#374151", (v) => (profile.XpBarColour = v)
                    }
                    bind:xpBarOpacity={
                        () => profile.XpBarOpacity ?? 100, (v) => (profile.XpBarOpacity = v)
                    }
                    bind:xpBar2Colour={
                        () => profile.XpBar2Colour ?? "#374151", (v) => (profile.XpBar2Colour = v)
                    }
                    bind:xpBar2Opacity={
                        () => profile.XpBar2Opacity ?? 100, (v) => (profile.XpBar2Opacity = v)
                    }
                    bind:xpDoneServerColour1={
                        () => profile.XpDoneServerColour1 ?? "#FCD34D",
                        (v) => (profile.XpDoneServerColour1 = v)
                    }
                    bind:xpDoneServerColour1Opacity={
                        () => profile.XpDoneServerColour1Opacity ?? 100,
                        (v) => (profile.XpDoneServerColour1Opacity = v)
                    }
                    bind:xpDoneServerColour2={
                        () => profile.XpDoneServerColour2 ?? "#F59E0B",
                        (v) => (profile.XpDoneServerColour2 = v)
                    }
                    bind:xpDoneServerColour2Opacity={
                        () => profile.XpDoneServerColour2Opacity ?? 100,
                        (v) => (profile.XpDoneServerColour2Opacity = v)
                    }
                    bind:xpDoneServerColour3={
                        () => profile.XpDoneServerColour3 ?? "#EF4444",
                        (v) => (profile.XpDoneServerColour3 = v)
                    }
                    bind:xpDoneServerColour3Opacity={
                        () => profile.XpDoneServerColour3Opacity ?? 100,
                        (v) => (profile.XpDoneServerColour3Opacity = v)
                    }
                    bind:xpDoneGlobalColour1={
                        () => profile.XpDoneGlobalColour1 ?? "#FCD34D",
                        (v) => (profile.XpDoneGlobalColour1 = v)
                    }
                    bind:xpDoneGlobalColour1Opacity={
                        () => profile.XpDoneGlobalColour1Opacity ?? 100,
                        (v) => (profile.XpDoneGlobalColour1Opacity = v)
                    }
                    bind:xpDoneGlobalColour2={
                        () => profile.XpDoneGlobalColour2 ?? "#F59E0B",
                        (v) => (profile.XpDoneGlobalColour2 = v)
                    }
                    bind:xpDoneGlobalColour2Opacity={
                        () => profile.XpDoneGlobalColour2Opacity ?? 100,
                        (v) => (profile.XpDoneGlobalColour2Opacity = v)
                    }
                    bind:xpDoneGlobalColour3={
                        () => profile.XpDoneGlobalColour3 ?? "#EF4444",
                        (v) => (profile.XpDoneGlobalColour3 = v)
                    }
                    bind:xpDoneGlobalColour3Opacity={
                        () => profile.XpDoneGlobalColour3Opacity ?? 100,
                        (v) => (profile.XpDoneGlobalColour3Opacity = v)
                    }
                />
            {/if}
        </ModalShell>
    {/if}

    {#if editorExpanded}
        <div class="lg:sticky lg:top-0 lg:h-screen overflow-y-auto pr-3 md:pr-4">
            <details open ontoggle={onDetailsToggle}>
                <summary
                    class="sticky top-0 z-10 bg-white dark:bg-black py-3 mb-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-2 md:gap-0 cursor-default select-none"
                    tabindex="-1"
                    aria-disabled="true"
                    onclick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onkeydown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <span class="flex items-center gap-2">
                        <span class="text-xl font-semibold">Editor</span>
                    </span>
                    <span
                        class="flex items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap w-full md:w-auto justify-start md:justify-end"
                    >
                        <SaveResetButtons
                            responsive
                            {saving}
                            {hasChanges}
                            onSave={saveProfile}
                            onReset={resetChanges}
                            resetLabel="Reset Changes"
                        />
                        <button
                            class="btn-secondary w-full md:w-auto text-sm md:text-base"
                            onclick={() => (editorExpanded = false)}
                        >
                            Close Editor
                        </button>
                    </span>
                </summary>

                <div class="space-y-6">
                    <section class="grid gap-3">
                        <BackgroundSection
                            bind:backgroundUrl={
                                () => profile.BackgroundUrl ?? "",
                                (v) => (profile.BackgroundUrl = v || null)
                            }
                            bind:backgroundColour={
                                () => profile.BackgroundColour ?? "#1F2937",
                                (v) => (profile.BackgroundColour = v)
                            }
                            bind:backgroundColourOpacity={
                                () => profile.BackgroundColourOpacity ?? 100,
                                (v) => (profile.BackgroundColourOpacity = v)
                            }
                            bind:overlayColour={
                                () => profile.OverlayColour ?? "#000000",
                                (v) => (profile.OverlayColour = v)
                            }
                            bind:overlayOpacity={
                                () => profile.OverlayOpacity ?? 20,
                                (v) => (profile.OverlayOpacity = v)
                            }
                            bind:lastfmBoard={
                                () => !!profile.LastfmBoard, (v) => (profile.LastfmBoard = !!v)
                            }
                            bind:xpBoard={() => !!profile.XpBoard, (v) => (profile.XpBoard = !!v)}
                        />
                        <DescriptionSection
                            bind:description={
                                () => profile.Description ?? "", (v) => (profile.Description = v)
                            }
                            bind:descriptionColour={
                                () => profile.DescriptionColour ?? "#ffffff",
                                (v) => (profile.DescriptionColour = v)
                            }
                            bind:descriptionColourOpacity={
                                () => profile.DescriptionColourOpacity ?? 100,
                                (v) => (profile.DescriptionColourOpacity = v)
                            }
                        />
                    </section>

                    <section>
                        <h3 class="font-semibold mb-2">Sidebar</h3>
                        <SidebarSection
                            bind:sidebarColour={
                                () => profile.SidebarColour ?? "#000000",
                                (v) => (profile.SidebarColour = v)
                            }
                            bind:sidebarOpacity={
                                () => profile.SidebarOpacity ?? 30,
                                (v) => (profile.SidebarOpacity = v)
                            }
                            bind:sidebarBlur={
                                () => profile.SidebarBlur ?? 3, (v) => (profile.SidebarBlur = v)
                            }
                            bind:usernameColour={
                                () => profile.UsernameColour ?? "#ffffff",
                                (v) => (profile.UsernameColour = v)
                            }
                            bind:discriminatorColour={
                                () => profile.DiscriminatorColour ?? "#9CA3AF",
                                (v) => (profile.DiscriminatorColour = v)
                            }
                            bind:sidebarItemServerColour={
                                () => profile.SidebarItemServerColour ?? "#D3D3D3",
                                (v) => (profile.SidebarItemServerColour = v)
                            }
                            bind:sidebarValueServerColour={
                                () => profile.SidebarValueServerColour ?? "#ffffff",
                                (v) => (profile.SidebarValueServerColour = v)
                            }
                            bind:sidebarItemGlobalColour={
                                () => profile.SidebarItemGlobalColour ?? "#D3D3D3",
                                (v) => (profile.SidebarItemGlobalColour = v)
                            }
                            bind:sidebarValueGlobalColour={
                                () => profile.SidebarValueGlobalColour ?? "#ffffff",
                                (v) => (profile.SidebarValueGlobalColour = v)
                            }
                            bind:sidebarItemBentoColour={
                                () => profile.SidebarItemBentoColour ?? "#D3D3D3",
                                (v) => (profile.SidebarItemBentoColour = v)
                            }
                            bind:sidebarValueBentoColour={
                                () => profile.SidebarValueBentoColour ?? "#ffffff",
                                (v) => (profile.SidebarValueBentoColour = v)
                            }
                            bind:sidebarItemTimezoneColour={
                                () => profile.SidebarItemTimezoneColour ?? "#D3D3D3",
                                (v) => (profile.SidebarItemTimezoneColour = v)
                            }
                            bind:timezone={
                                () => profile.Timezone ?? "", (v) => (profile.Timezone = v)
                            }
                            bind:birthday={
                                () => profile.Birthday ?? null, (v) => (profile.Birthday = v)
                            }
                        />
                    </section>

                    {#if profile.LastfmBoard}
                        <section>
                            <h3 class="font-semibold mb-2">Last.fm Board</h3>
                            <LastfmSection
                                bind:fmDivBgcolour={
                                    () => profile.FmDivBgcolour ?? "#111827",
                                    (v) => (profile.FmDivBgcolour = v)
                                }
                                bind:fmDivBgopacity={
                                    () => profile.FmDivBgopacity ?? 100,
                                    (v) => (profile.FmDivBgopacity = v)
                                }
                                bind:fmSongTextColour={
                                    () => profile.FmSongTextColour ?? "#ffffff",
                                    (v) => (profile.FmSongTextColour = v)
                                }
                                bind:fmSongTextOpacity={
                                    () => profile.FmSongTextOpacity ?? 100,
                                    (v) => (profile.FmSongTextOpacity = v)
                                }
                                bind:fmArtistTextColour={
                                    () => profile.FmArtistTextColour ?? "#ffffff",
                                    (v) => (profile.FmArtistTextColour = v)
                                }
                                bind:fmArtistTextOpacity={
                                    () => profile.FmArtistTextOpacity ?? 100,
                                    (v) => (profile.FmArtistTextOpacity = v)
                                }
                            />
                        </section>
                    {/if}

                    {#if profile.XpBoard}
                        <section>
                            <h3 class="font-semibold mb-2">XP Board</h3>
                            <XpSection
                                bind:xpDivBgcolour={
                                    () => profile.XpDivBgcolour ?? "#111827",
                                    (v) => (profile.XpDivBgcolour = v)
                                }
                                bind:xpDivBgopacity={
                                    () => profile.XpDivBgopacity ?? 100,
                                    (v) => (profile.XpDivBgopacity = v)
                                }
                                bind:xpTextColour={
                                    () => profile.XpTextColour ?? "#ffffff",
                                    (v) => (profile.XpTextColour = v)
                                }
                                bind:xpTextOpacity={
                                    () => profile.XpTextOpacity ?? 100,
                                    (v) => (profile.XpTextOpacity = v)
                                }
                                bind:xpText2Colour={
                                    () => profile.XpText2Colour ?? "#ffffff",
                                    (v) => (profile.XpText2Colour = v)
                                }
                                bind:xpText2Opacity={
                                    () => profile.XpText2Opacity ?? 100,
                                    (v) => (profile.XpText2Opacity = v)
                                }
                                bind:xpBarColour={
                                    () => profile.XpBarColour ?? "#374151",
                                    (v) => (profile.XpBarColour = v)
                                }
                                bind:xpBarOpacity={
                                    () => profile.XpBarOpacity ?? 100,
                                    (v) => (profile.XpBarOpacity = v)
                                }
                                bind:xpBar2Colour={
                                    () => profile.XpBar2Colour ?? "#374151",
                                    (v) => (profile.XpBar2Colour = v)
                                }
                                bind:xpBar2Opacity={
                                    () => profile.XpBar2Opacity ?? 100,
                                    (v) => (profile.XpBar2Opacity = v)
                                }
                                bind:xpDoneServerColour1={
                                    () => profile.XpDoneServerColour1 ?? "#FCD34D",
                                    (v) => (profile.XpDoneServerColour1 = v)
                                }
                                bind:xpDoneServerColour1Opacity={
                                    () => profile.XpDoneServerColour1Opacity ?? 100,
                                    (v) => (profile.XpDoneServerColour1Opacity = v)
                                }
                                bind:xpDoneServerColour2={
                                    () => profile.XpDoneServerColour2 ?? "#F59E0B",
                                    (v) => (profile.XpDoneServerColour2 = v)
                                }
                                bind:xpDoneServerColour2Opacity={
                                    () => profile.XpDoneServerColour2Opacity ?? 100,
                                    (v) => (profile.XpDoneServerColour2Opacity = v)
                                }
                                bind:xpDoneServerColour3={
                                    () => profile.XpDoneServerColour3 ?? "#EF4444",
                                    (v) => (profile.XpDoneServerColour3 = v)
                                }
                                bind:xpDoneServerColour3Opacity={
                                    () => profile.XpDoneServerColour3Opacity ?? 100,
                                    (v) => (profile.XpDoneServerColour3Opacity = v)
                                }
                                bind:xpDoneGlobalColour1={
                                    () => profile.XpDoneGlobalColour1 ?? "#FCD34D",
                                    (v) => (profile.XpDoneGlobalColour1 = v)
                                }
                                bind:xpDoneGlobalColour1Opacity={
                                    () => profile.XpDoneGlobalColour1Opacity ?? 100,
                                    (v) => (profile.XpDoneGlobalColour1Opacity = v)
                                }
                                bind:xpDoneGlobalColour2={
                                    () => profile.XpDoneGlobalColour2 ?? "#F59E0B",
                                    (v) => (profile.XpDoneGlobalColour2 = v)
                                }
                                bind:xpDoneGlobalColour2Opacity={
                                    () => profile.XpDoneGlobalColour2Opacity ?? 100,
                                    (v) => (profile.XpDoneGlobalColour2Opacity = v)
                                }
                                bind:xpDoneGlobalColour3={
                                    () => profile.XpDoneGlobalColour3 ?? "#EF4444",
                                    (v) => (profile.XpDoneGlobalColour3 = v)
                                }
                                bind:xpDoneGlobalColour3Opacity={
                                    () => profile.XpDoneGlobalColour3Opacity ?? 100,
                                    (v) => (profile.XpDoneGlobalColour3Opacity = v)
                                }
                            />
                        </section>
                    {/if}
                </div>
            </details>
        </div>
    {/if}
</div>

<style>
    @reference "../../styles/global.css";
    .input {
        @apply px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900;
    }

    .btn {
        @apply px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-60 cursor-pointer transition-colors;
    }

    .btn-secondary {
        @apply px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 disabled:opacity-60 cursor-pointer transition-colors;
    }

    /* Hover affordance for click-to-edit elements */
    /* Use visual filters instead of borders to avoid layout shifts */
    .editable {
        /* No positioning change to avoid overriding absolute/static layout */
        transition:
            filter 120ms ease,
            outline-offset 120ms ease;
    }
    .editable:hover {
        /* Stronger, clearer but still tasteful indication */
        filter: brightness(1.08) saturate(1.15) contrast(1.05);
        /* Dashed outline to avoid layout shift while indicating editability */
        outline: 2px dashed rgba(255, 255, 255, 0.75);
        outline-offset: -2px;
    }
    /* Keyboard focus parity with hover */
    .editable:focus-visible {
        outline: 2px dashed rgba(255, 255, 255, 0.75);
        outline-offset: -2px;
        filter: brightness(1.08) saturate(1.15) contrast(1.05);
    }

    /* Only highlight the background area when hovering it directly, not when hovering its children */
    .editable-bg:hover:has(:global(.editable:hover)) {
        /* A descendant is hovered; suppress parent hover indication */
        filter: none;
        box-shadow: none;
    }
</style>
