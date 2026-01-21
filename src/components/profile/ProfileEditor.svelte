<!-- suppressed because it is Svelte 5 syntax, dunno why it is warning still. -->
<!--suppress CommaExpressionJS -->
<script lang="ts">
	import type { ProfileDto, ProfilePatch } from "../../library/types/interfaces";
	import { actions } from "astro:actions";
	import ProfilePreview from "./ProfilePreview.svelte";
	import ModalShell from "./ModalShell.svelte";
	import { defaultProfile } from "../../library/profile/defaultProfile";
	import StatusMessage from "./StatusMessage.svelte";
	import SaveResetButtons from "./SaveResetButtons.svelte";
	import BackgroundSection from "./sections/BackgroundSection.svelte";
	import DescriptionSection from "./sections/DescriptionSection.svelte";
	import SidebarSection from "./sections/SidebarSection.svelte";
	import LastfmSection from "./sections/LastfmSection.svelte";
	import XpSection from "./sections/XpSection.svelte";

	const {
		userId,
		username = "User",
		discriminator,
		avatarUrl,
		initialProfile = null,
	} = $props<{
		userId: string;
		username?: string;
		discriminator?: string;
		avatarUrl?: string;
		initialProfile: ProfileDto | null;
	}>();

	let loading = $state(false);
	let error = $state<string | null>(null);
	let saving = $state(false);
	let savedAt = $state<Date | null>(null);

	const initialProfileWithDefaults: ProfileDto = mergeWithDefaults(
		defaultProfile(userId),
		initialProfile
	);
	let originalProfile = $state<ProfileDto>(initialProfileWithDefaults);
	let profile = $state<ProfileDto>({ ...initialProfileWithDefaults });

	// Click-to-edit modal state and editor fold state
	type Target = "background" | "description" | "sidebar" | "lastfm" | "xp";
	let editorExpanded = $state(false);
	let showModal = $state(false);
	let selectedTarget = $state<Target | null>(null);

	function handleOpen(target: Target) {
		if (editorExpanded) return;
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
		const result: ProfileDto = { ...defaults };
		if (!incoming) return result;

		for (const k of Object.keys(incoming) as (keyof ProfileDto)[]) {
			if (k === "UserId") continue;
			const v = incoming[k];
			if (v !== null && v !== undefined) {
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
			const changedCount = Object.keys(patch).length - 1;
			if (changedCount <= 0) {
				savedAt = new Date();
				return;
			}
			const { error: actionError } = await actions.saveProfile(patch);
			if (actionError) {
				const m = (actionError as { message?: unknown })?.message;
				throw new Error(typeof m === "string" ? m : "Save failed");
			}
			originalProfile = { ...profile };
			savedAt = new Date();
		} catch (e: unknown) {
			console.error(e);
			error = (e as Error)?.message ?? "Unknown error";
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
			<div class="mt-4 flex flex-col items-center gap-3">
				<div class="flex items-center gap-3">
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
				<StatusMessage {error} {saving} {loading} {savedAt} />
			</div>
		{/if}
	</div>

	{#if showModal && selectedTarget}
		<ModalShell title={`Edit ${selectedTarget}`} onClose={() => (showModal = false)}>
			{#if selectedTarget === "background"}
				<BackgroundSection
					bind:backgroundUrl={profile.BackgroundUrl}
					bind:backgroundColour={profile.BackgroundColour}
					bind:backgroundColourOpacity={profile.BackgroundColourOpacity}
					bind:overlayColour={profile.OverlayColour}
					bind:overlayOpacity={profile.OverlayOpacity}
					bind:lastfmBoard={profile.LastfmBoard}
					bind:xpBoard={profile.XpBoard}
				/>
			{:else if selectedTarget === "description"}
				<DescriptionSection
					bind:description={profile.Description}
					bind:descriptionColour={profile.DescriptionColour}
					bind:descriptionColourOpacity={profile.DescriptionColourOpacity}
				/>
			{:else if selectedTarget === "sidebar"}
				<SidebarSection
					bind:sidebarColour={profile.SidebarColour}
					bind:sidebarOpacity={profile.SidebarOpacity}
					bind:sidebarBlur={profile.SidebarBlur}
					bind:usernameColour={profile.UsernameColour}
					bind:discriminatorColour={profile.DiscriminatorColour}
					bind:sidebarItemServerColour={profile.SidebarItemServerColour}
					bind:sidebarValueServerColour={profile.SidebarValueServerColour}
					bind:sidebarItemGlobalColour={profile.SidebarItemGlobalColour}
					bind:sidebarValueGlobalColour={profile.SidebarValueGlobalColour}
					bind:sidebarItemBentoColour={profile.SidebarItemBentoColour}
					bind:sidebarValueBentoColour={profile.SidebarValueBentoColour}
					bind:sidebarItemTimezoneColour={profile.SidebarItemTimezoneColour}
					bind:timezone={profile.Timezone}
					bind:birthday={profile.Birthday}
				/>
			{:else if selectedTarget === "lastfm"}
				<LastfmSection
					bind:fmDivBgcolour={profile.FmDivBgcolour}
					bind:fmDivBgopacity={profile.FmDivBgopacity}
					bind:fmSongTextColour={profile.FmSongTextColour}
					bind:fmSongTextOpacity={profile.FmSongTextOpacity}
					bind:fmArtistTextColour={profile.FmArtistTextColour}
					bind:fmArtistTextOpacity={profile.FmArtistTextOpacity}
				/>
			{:else if selectedTarget === "xp"}
				<XpSection
					bind:xpDivBgcolour={profile.XpDivBgcolour}
					bind:xpDivBgopacity={profile.XpDivBgopacity}
					bind:xpTextColour={profile.XpTextColour}
					bind:xpTextOpacity={profile.XpTextOpacity}
					bind:xpText2Colour={profile.XpText2Colour}
					bind:xpText2Opacity={profile.XpText2Opacity}
					bind:xpBarColour={profile.XpBarColour}
					bind:xpBarOpacity={profile.XpBarOpacity}
					bind:xpBar2Colour={profile.XpBar2Colour}
					bind:xpBar2Opacity={profile.XpBar2Opacity}
					bind:xpDoneServerColour1={profile.XpDoneServerColour1}
					bind:xpDoneServerColour1Opacity={profile.XpDoneServerColour1Opacity}
					bind:xpDoneServerColour2={profile.XpDoneServerColour2}
					bind:xpDoneServerColour2Opacity={profile.XpDoneServerColour2Opacity}
					bind:xpDoneServerColour3={profile.XpDoneServerColour3}
					bind:xpDoneServerColour3Opacity={profile.XpDoneServerColour3Opacity}
					bind:xpDoneGlobalColour1={profile.XpDoneGlobalColour1}
					bind:xpDoneGlobalColour1Opacity={profile.XpDoneGlobalColour1Opacity}
					bind:xpDoneGlobalColour2={profile.XpDoneGlobalColour2}
					bind:xpDoneGlobalColour2Opacity={profile.XpDoneGlobalColour2Opacity}
					bind:xpDoneGlobalColour3={profile.XpDoneGlobalColour3}
					bind:xpDoneGlobalColour3Opacity={profile.XpDoneGlobalColour3Opacity}
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
					<div class="mb-2">
						<StatusMessage {error} {saving} {loading} {savedAt} />
					</div>
					<section class="grid gap-3">
						<BackgroundSection
							bind:backgroundUrl={profile.BackgroundUrl}
							bind:backgroundColour={profile.BackgroundColour}
							bind:backgroundColourOpacity={profile.BackgroundColourOpacity}
							bind:overlayColour={profile.OverlayColour}
							bind:overlayOpacity={profile.OverlayOpacity}
							bind:lastfmBoard={profile.LastfmBoard}
							bind:xpBoard={profile.XpBoard}
						/>
						<DescriptionSection
							bind:description={profile.Description}
							bind:descriptionColour={profile.DescriptionColour}
							bind:descriptionColourOpacity={profile.DescriptionColourOpacity}
						/>
					</section>

					<section>
						<h3 class="font-semibold mb-2">Sidebar</h3>
						<SidebarSection
							bind:sidebarColour={profile.SidebarColour}
							bind:sidebarOpacity={profile.SidebarOpacity}
							bind:sidebarBlur={profile.SidebarBlur}
							bind:usernameColour={profile.UsernameColour}
							bind:discriminatorColour={profile.DiscriminatorColour}
							bind:sidebarItemServerColour={profile.SidebarItemServerColour}
							bind:sidebarValueServerColour={profile.SidebarValueServerColour}
							bind:sidebarItemGlobalColour={profile.SidebarItemGlobalColour}
							bind:sidebarValueGlobalColour={profile.SidebarValueGlobalColour}
							bind:sidebarItemBentoColour={profile.SidebarItemBentoColour}
							bind:sidebarValueBentoColour={profile.SidebarValueBentoColour}
							bind:sidebarItemTimezoneColour={profile.SidebarItemTimezoneColour}
							bind:timezone={profile.Timezone}
							bind:birthday={profile.Birthday}
						/>
					</section>

					{#if profile.LastfmBoard}
						<section>
							<h3 class="font-semibold mb-2">Last.fm Board</h3>
							<LastfmSection
								bind:fmDivBgcolour={profile.FmDivBgcolour}
								bind:fmDivBgopacity={profile.FmDivBgopacity}
								bind:fmSongTextColour={profile.FmSongTextColour}
								bind:fmSongTextOpacity={profile.FmSongTextOpacity}
								bind:fmArtistTextColour={profile.FmArtistTextColour}
								bind:fmArtistTextOpacity={profile.FmArtistTextOpacity}
							/>
						</section>
					{/if}

					{#if profile.XpBoard}
						<section>
							<h3 class="font-semibold mb-2">XP Board</h3>
							<XpSection
								bind:xpDivBgcolour={profile.XpDivBgcolour}
								bind:xpDivBgopacity={profile.XpDivBgopacity}
								bind:xpTextColour={profile.XpTextColour}
								bind:xpTextOpacity={profile.XpTextOpacity}
								bind:xpText2Colour={profile.XpText2Colour}
								bind:xpText2Opacity={profile.XpText2Opacity}
								bind:xpBarColour={profile.XpBarColour}
								bind:xpBarOpacity={profile.XpBarOpacity}
								bind:xpBar2Colour={profile.XpBar2Colour}
								bind:xpBar2Opacity={profile.XpBar2Opacity}
								bind:xpDoneServerColour1={profile.XpDoneServerColour1}
								bind:xpDoneServerColour1Opacity={profile.XpDoneServerColour1Opacity}
								bind:xpDoneServerColour2={profile.XpDoneServerColour2}
								bind:xpDoneServerColour2Opacity={profile.XpDoneServerColour2Opacity}
								bind:xpDoneServerColour3={profile.XpDoneServerColour3}
								bind:xpDoneServerColour3Opacity={profile.XpDoneServerColour3Opacity}
								bind:xpDoneGlobalColour1={profile.XpDoneGlobalColour1}
								bind:xpDoneGlobalColour1Opacity={profile.XpDoneGlobalColour1Opacity}
								bind:xpDoneGlobalColour2={profile.XpDoneGlobalColour2}
								bind:xpDoneGlobalColour2Opacity={profile.XpDoneGlobalColour2Opacity}
								bind:xpDoneGlobalColour3={profile.XpDoneGlobalColour3}
								bind:xpDoneGlobalColour3Opacity={profile.XpDoneGlobalColour3Opacity}
							/>
						</section>
					{/if}
				</div>
			</details>
		</div>
	{/if}
</div>
